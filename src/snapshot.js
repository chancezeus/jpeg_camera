import Stats from './stats';

// Snapshot taken using {JpegCamera}.
export default class Snapshot {
  // Snapshot IDs are unique within browser session. This class variable holds
  // the value of the next ID to use.
  //
  // @nodoc
  // @private
  _next_snapshot_id = 1;

  // @nodoc
  // @private
  _discarded = false;

  // @nodoc
  // @private
  _extra_canvas = null;

  // @nodoc
  // @private
  _blob = null;
  // @nodoc
  // @private
  _blob_mime = null;

  // @nodoc
  // @private
  _image_data = null;

  // @nodoc
  // @private
  _stats = null;

  // @nodoc
  // @private
  constructor(camera, options) {
    this.camera = camera;
    this.options = options;
    this.id = this._next_snapshot_id++;
  }

  // Display the snapshot with the camera element it was taken with.
  //
  // @return [Snapshot] Self for chaining.
  show() {
    if (this._discarded) { raise("discarded snapshot cannot be used"); }

    this.camera._display(this);
    return this;
  }

  // Stop displaying the snapshot and return to showing live camera stream.
  //
  // Ignored if camera is displaying different snapshot.
  //
  // @return [Snapshot] Self for chaining.
  hide() {
    if (this.camera.displayed_snapshot() === this) {
      this.camera.show_stream();
    }
    return this;
  }

  // Calculate snapshot pixel statistics (mean gray value, std).
  //
  // Because reading image data can take a while when Flash fallback is being
  // used this method does not return the data immediately. Instead it accepts
  // a callback that later will be called with a {Stats} object as an argument.
  // Snapshot will be available as `this`.
  //
  // @param callback [Function] Function to call when data is available. Snapshot
  //   object will be available as `this`, the {Stats} instance will be passed
  //   as the first argument.
  //
  // @return [void]
  get_stats(callback) {
    if (this._discarded) { raise("discarded snapshot cannot be used"); }

    return this.get_image_data(function(data) {
      return this._get_stats(data, callback);
    });
  }

  // Get canvas element showing the snapshot.
  //
  // This can be used to display the snapshot outside the camera's container.
  // You can show multiple snapshots at a time and allow the user to pick one
  // he likes best.
  //
  // Canvas produced by this method has a resolution of the snapshot (which
  // depends on the camera's native resolution), not that of the camera's
  // container. Use CSS to display this canvas in different sizes.
  //
  // Because reading image data can take a while when Flash fallback is being
  // used this method does not return the `canvas` element immediately. Instead
  // it accepts a callback that later will be called with the `canvas` element as
  // an argument. Snapshot will be available as `this`.
  //
  // Multiple calls to this method will yield the same canvas element.
  //
  // One caveat is that the underlaying data of this canvas is not mirrored like
  // the stream shown in the camera container. Special CSS transform directive
  // is applied on it so that it looks like the picture in the camera when
  // displayed. This only matters when manipulating the canvas or reading it's
  // data. You can read more about mirroring in {JpegCamera#capture}.
  //
  // This method doesn't work in Internet Explorer 8 or earlier, because it does
  // not support `canvas` element. Call {JpegCamera.canvas_supported} to learn
  // whether you can use this method.
  //
  // @param callback [Function] Function to call when `canvas` element is
  //   available. Snapshot object will be available as `this`, the `canvas`
  //   element will be passed as the first argument.
  //
  // @return [Boolean] Whether canvas is supported in this browser.
  get_canvas(callback) {
    if (this._discarded) { raise("discarded snapshot cannot be used"); }

    if (!JpegCamera._canvas_supported) { false; }

    // FIXME This method is supposed to always return the same object, but if
    // you call it again before this timeout runs, a new timeout will be
    // scheduled and new data created.
    const that = this;
    setTimeout(function() {
        if (!that._extra_canvas) { that._extra_canvas = that.camera._engine_get_canvas(that); }

        JpegCamera._add_prefixed_style(that._extra_canvas,
          "transform", "scalex(-1.0)");

        return callback.call(that, that._extra_canvas);
      }
      , 1);
    return true;
  }

  // Get the file that would be uploaded to the server as a Blob object.
  //
  // This can be useful if you want to stream the data via a websocket. Note that
  // using `upload` is more efficient if all you want to do is upload this file
  // to a server via POST call.
  //
  // This method doesn't work in Internet Explorer 8 or earlier, because it does
  // not support `canvas` element. Call {JpegCamera.canvas_supported} to learn
  // whether you can use this method.
  //
  // Because preparing image blob can take a while this method does not return
  // the data immediately. Instead it accepts a callback that later will be
  // called with the data object as an argument. Snapshot will be available as
  // `this`.
  //
  // Multiple calls to this method will yield the same data object.
  //
  // @param callback [Function] Function to call when data is available. Snapshot
  //   object will be available as `this`, the blob object will be passed as the
  //   first argument.
  // @param mime_type [String] Mime type of the requested blob. "image/jpeg" by
  //   default.
  //
  // @return [Boolean] Whether canvas is supported in this browser.
  get_blob(callback, mime_type) {
    if (mime_type == null) { mime_type = "image/jpeg"; }
    if (this._discarded) { raise("discarded snapshot cannot be used"); }

    if (!JpegCamera._canvas_supported) { false; }

    // FIXME This method is supposed to always return the same object, but if
    // you call it again before this timeout runs, a new timeout will be
    // scheduled and new data created.
    const that = this;
    setTimeout(function() {
        if (that._blob_mime !== mime_type) { that._blob = null; }
        that._blob_mime = mime_type;
        if (that._blob) {
          return callback.call(that, that._blob);
        } else {
          const { mirror } = that.options;
          const { quality } = that.options;
          return that.camera._engine_get_blob(that, mime_type, mirror, quality, function(b) {
            that._blob = b;
            return callback.call(that, that._blob);
          });
        }
      }
      , 1);
    return true;
  }

  // Get ImageData object containing color values for each pixel of the snapshot.
  //
  // Data produced by this method has a resolution of the snapshot (which depends
  // on the camera's native resolution), not that of the camera's container.
  //
  // Read more about ImageData object on [Mozilla's website
  // ](https://developer.mozilla.org/en-US/docs/Web/API/ImageData).
  //
  // Because reading image data can take a while when Flash fallback is being
  // used this method does not return the data immediately. Instead it accepts
  // a callback that later will be called with the data object as an argument.
  // Snapshot will be available as `this`.
  //
  // Multiple calls to this method will yield the same data object.
  //
  // One caveat is that the returned data is not mirrored like the stream shown
  // in the camera container. This only matters when manipulating the canvas or
  // reading it's data. You can read more about mirroring in
  // {JpegCamera#capture}.
  //
  // This method returns native [ImageData
  // ](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) object in all
  // browsers except Internet Explorer 8 or earlier which does not support
  // the `canvas` element. In that browser a generic JavaScript object will be
  // returned that mimics the native format. Call {JpegCamera.canvas_supported}
  // to learn whether `canvas` is supported by the browser.
  //
  // @param callback [Function] Function to call when data is available. Snapshot
  //   object will be available as `this`, the data will be passed as the
  //   first argument.
  //
  // @return [void]
  get_image_data(callback) {
    if (this._discarded) { raise("discarded snapshot cannot be used"); }

    // FIXME This method is supposed to always return the same object, but if
    // you call it again before this timeout runs, a new timeout will be
    // scheduled and new data created.
    const that = this;
    setTimeout(function() {
        if (!that._image_data) { that._image_data = that.camera._engine_get_image_data(that); }
        return callback.call(that, that._image_data);
      }
      , 1);

    return null;
  }

  // Hide and discard this snapshot.
  //
  // After discarding a snapshot an attempt to show or upload it will raise
  // an error.
  //
  // @return [void]
  discard() {
    this.camera._discard(this);
    delete this._extra_canvas;
    delete this._image_data;
    delete this._blob;
    return undefined;
  }

  // Snapshot options
  //
  // @nodoc
  // @private
  _options() {
    return this.camera._extend({}, this.camera.options, this.options, this._upload_options);
  }

  // Calculate the snapshot pixel statistics given image data and call callback.
  //
  // @nodoc
  // @private
  _get_stats(data, callback) {
    if (!this._stats) {
      let gray;
      const n = data.width * data.height;
      let sum = 0.0;
      const gray_values = new Array(n);

      for (let i = 0, end = n; i < end; i++) {
        const index = i * 4;
        gray =
          (0.2126 * data.data[index + 0]) + // red
          (0.7152 * data.data[index + 1]) + // green
          (0.0722 * data.data[index + 2]);   // blue
        gray = Math.round(gray);

        sum += gray;
        gray_values[i] = gray;
      }

      const mean = Math.round(sum / n);

      let sum_of_square_distances = 0;
      for (gray of Array.from(gray_values)) {
        sum_of_square_distances += Math.pow(gray - mean, 2);
      }

      this._stats = new Stats();
      this._stats.mean = mean;
      this._stats.std = Math.round(Math.sqrt(sum_of_square_distances / n));
    }
    return callback.call(this, this._stats);
  }
}

import autoBind from 'auto-bind';
import Stats from './stats';
import { isCanvasSupported, addPrefixedStyle } from './jpeg_camera';

// Snapshot taken using {JpegCamera}.
export default class Snapshot {
  // Snapshot IDs are unique within browser session. This class variable holds
  // the value of the next ID to use.
  //
  // @nodoc
  // @private
  nextSnapshotId = 1;

  // @nodoc
  // @private
  discarded = false;

  // @nodoc
  // @private
  extraCanvas = null;

  // @nodoc
  // @private
  blob = null;
  // @nodoc
  // @private
  blobMime = null;

  // @nodoc
  // @private
  imageData = null;

  // @nodoc
  // @private
  stats = null;

  // @nodoc
  // @private
  constructor(camera, options) {
    autoBind(this);
    this.camera = camera;
    this.options = options;
    this.id = this.nextSnapshotId++;
  }

  // Display the snapshot with the camera element it was taken with.
  //
  // @return [Snapshot] Self for chaining.
  show() {
    if (this.discarded) { throw new Error('discarded snapshot cannot be used'); }

    this.camera.display(this);
    return this;
  }

  // Stop displaying the snapshot and return to showing live camera stream.
  //
  // Ignored if camera is displaying different snapshot.
  //
  // @return [Snapshot] Self for chaining.
  hide() {
    if (this.camera.displayedSnapshot() === this) {
      this.camera.showStream();
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
  getStats(callback) {
    if (this.discarded) { throw new Error('discarded snapshot cannot be used'); }

    return this.getImageData(data => (this.calculateStats(data, callback)));
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
  // not support `canvas` element. Call {isCanvasSupported} to learn
  // whether you can use this method.
  //
  // @param callback [Function] Function to call when `canvas` element is
  //   available. Snapshot object will be available as `this`, the `canvas`
  //   element will be passed as the first argument.
  //
  // @return [Boolean] Whether canvas is supported in this browser.
  getCanvasTimeout = null;
  getCanvas(callback) {
    if (this.discarded) { throw new Error('discarded snapshot cannot be used'); }

    if (!isCanvasSupported()) { return false; }

    const that = this;
    this.getCanvasTimeout = setTimeout(
      () => {
        if (!that.extraCanvas) { that.extraCanvas = that.camera.engineGetCanvas(that); }
        addPrefixedStyle(that.extraCanvas, 'transform', 'scalex(-1.0)');
        return callback.call(that, that.extraCanvas);
      },
      1,
    );
    return true;
  }

  // Get the file that would be uploaded to the server as a Blob object.
  //
  // This can be useful if you want to stream the data via a websocket. Note that
  // using `upload` is more efficient if all you want to do is upload this file
  // to a server via POST call.
  //
  // This method doesn't work in Internet Explorer 8 or earlier, because it does
  // not support `canvas` element. Call {isCanvasSupported} to learn
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
  // @param mimeType [String] Mime type of the requested blob. "image/jpeg" by
  //   default.
  //
  // @return [Boolean] Whether canvas is supported in this browser.
  getBlobTimeout = null;
  getBlob(callback, mimeType) {
    let theMimeType = mimeType;
    if (theMimeType == null) { theMimeType = 'image/jpeg'; }
    if (this.discarded) { throw new Error('discarded snapshot cannot be used'); }

    if (!isCanvasSupported()) { return false; }

    const that = this;
    this.getBlobTimeout = setTimeout(
      () => {
        if (that.blobMime !== theMimeType) { that.blob = null; }
        that.blobMime = theMimeType;
        if (that.blob) {
          return callback.call(that, that.blob);
        }
        const { mirror } = that.options;
        const { quality } = that.options;
        return that.camera.engineGetBlob(that, theMimeType, mirror, quality, (b) => {
          that.blob = b;
          return callback.call(that, that.blob);
        });
      },
      1,
    );
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
  // returned that mimics the native format. Call {isCanvasSupported}
  // to learn whether `canvas` is supported by the browser.
  //
  // @param callback [Function] Function to call when data is available. Snapshot
  //   object will be available as `this`, the data will be passed as the
  //   first argument.
  //
  // @return [void]
  getImageDataTimeout = null;
  getImageData(callback) {
    if (this.discarded) { throw new Error('discarded snapshot cannot be used'); }

    const that = this;
    this.getImageDataTimeout = setTimeout(
      () => {
        if (!that.imageData) { that.imageData = that.camera.engineGetImageData(that); }
        return callback.call(that, that.imageData);
      },
      1,
    );

    return null;
  }

  // Hide and discard this snapshot.
  //
  // After discarding a snapshot an attempt to show or upload it will raise
  // an error.
  //
  // @return [void]
  discard() {
    this.camera.discard(this);
    delete this.extraCanvas;
    delete this.imageData;
    delete this.blob;
  }

  // Snapshot options
  //
  // @nodoc
  // @private
  options() {
    return Object.assign({}, this.camera.options, this.options, this.uploadOptions);
  }

  // Calculate the snapshot pixel statistics given image data and call callback.
  //
  // @nodoc
  // @private
  calculateStats(data, callback) {
    if (!this.stats) {
      let gray;
      const n = data.width * data.height;
      let sum = 0.0;
      const grayValues = new Array(n);

      for (let i = 0, end = n; i < end; i++) {
        const index = i * 4;
        gray =
          (0.2126 * data.data[index + 0]) + // red
          (0.7152 * data.data[index + 1]) + // green
          (0.0722 * data.data[index + 2]); // blue
        gray = Math.round(gray);

        sum += gray;
        grayValues[i] = gray;
      }

      const mean = Math.round(sum / n);

      let sumOfSquareDistances = 0;
      grayValues.forEach((oneGray) => {
        // eslint-disable-next-line no-restricted-properties
        sumOfSquareDistances += Math.pow(oneGray - mean, 2);
      });

      this.stats = new Stats();
      this.stats.mean = mean;
      this.stats.std = Math.round(Math.sqrt(sumOfSquareDistances / n));
    }
    return callback.call(this, this.stats);
  }
}

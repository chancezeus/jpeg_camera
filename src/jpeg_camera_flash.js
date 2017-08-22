import JpegCamera from 'jpeg_camera';

//
// JpegCamera implementation that uses Flash to capture and display snapshots.
//
// @private
export default class JpegCameraFlash extends JpegCamera {
  _instances = {};
  _next_id = 1;

  // Used by flash object to send message to our instance.
  static _send_message(id, method) {
    const instance = this._instances[parseInt(id)];

    if (!instance) { return; }

    const args = Array.prototype.slice.call(arguments, 2);

    return this.prototype[method].apply(instance, args);
  }

  _engine_init() {
    this._debug("Using Flash engine");

    // register our instance
    this._id = this._next_id++;
    this._instances[this._id] = this;

    if ((this.view_width < 215) || (this.view_height < 138)) {
      this._got_error("camera is too small to display privacy dialog");
      return;
    }

    const flash_object_id = `flash_object_${this._id}`;

    const params = {
      loop: "false",
      allowScriptAccess: "always",
      allowFullScreen: "false",
      quality: "best",
      wmode: "opaque",
      menu: "false"
    };
    const attributes = {
      id: flash_object_id,
      align: "middle"
    };
    const flashvars = {
      id: this._id,
      width: this.view_width,
      height: this.view_height,
      shutter_url: this.options.shutter_mp3_url
    };
    const that = this;
    const callback = function(event) {
      if (!event.success) {
        return that._got_error("Flash loading failed.");
      } else {
        that._debug("Flash loaded");
        return that._flash = document.getElementById(flash_object_id);
      }
    };

    const container_to_be_replaced = document.createElement("div");
    container_to_be_replaced.id = `jpeg_camera_flash_${this._id}`;
    container_to_be_replaced.style.width = "100%";
    container_to_be_replaced.style.height = "100%";

    this.container.appendChild(container_to_be_replaced);

    return swfobject.embedSWF(this.options.swf_url, container_to_be_replaced.id,
      this.view_width, this.view_height, '9', null, flashvars, params, attributes,
      callback);
  }

  _engine_play_shutter_sound() {
    return this._flash._play_shutter();
  }

  _engine_capture(snapshot, mirror, quality, scale) {
    return this._flash._capture(snapshot.id, mirror, quality, scale);
  }

  _engine_display(snapshot) {
    return this._flash._display(snapshot.id);
  }

  _engine_get_canvas(snapshot) {
    if (!snapshot._image_data) { snapshot._image_data = this._engine_get_image_data(snapshot); }
    const canvas = document.createElement("canvas");
    canvas.width = snapshot._image_data.width;
    canvas.height = snapshot._image_data.height;
    const context = canvas.getContext("2d");
    context.putImageData(snapshot._image_data, 0, 0);
    return canvas;
  }

  _engine_get_image_data(snapshot) {
    let result;
    const flash_data = this._flash._get_image_data(snapshot.id);

    if (JpegCamera.canvas_supported()) {
      const canvas = document.createElement("canvas");
      canvas.width = flash_data.width;
      canvas.height = flash_data.height;
      const context = canvas.getContext("2d");
      result = context.createImageData(flash_data.width, flash_data.height);
    } else {
      result = {
        data: [],
        width: flash_data.width,
        height: flash_data.height
      };
    }

    for (let i = 0; i < flash_data.data.length; i++) {
      const pixel = flash_data.data[i];
      const index = i * 4;

      const red = (pixel >> 16) & 0xff;
      const green = (pixel >> 8) & 0xff;
      const blue = pixel & 0xff;

      result.data[index + 0] = red;
      result.data[index + 1] = green;
      result.data[index + 2] = blue;
      result.data[index + 3] = 255;
    }
    return result;
  }

  _engine_get_blob(snapshot, mime, mirror, quality, callback) {
    let canvas;
    if (!snapshot._extra_canvas) { snapshot._extra_canvas = this._engine_get_canvas(snapshot); }

    if (mirror) {
      canvas = document.createElement("canvas");
      canvas.width = snapshot._canvas.width;
      canvas.height = snapshot._canvas.height;

      const context = canvas.getContext("2d");
      context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      context.drawImage(snapshot._extra_canvas, 0, 0);
    } else {
      canvas = snapshot._extra_canvas;
    }

    return canvas.toBlob((blob => callback(blob)), mime, quality);
  }

  _engine_discard(snapshot) {
    return this._flash._discard(snapshot.id);
  }

  _engine_show_stream() {
    return this._flash._show_stream();
  }

  _flash_prepared(width, height) {
    this._block_element_access();

    // XXX steal focus from the flash object
    document.body.tabIndex = 0;
    document.body.focus();

    return this._prepared(width, height);
  }
}

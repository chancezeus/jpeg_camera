import JpegCamera from 'jpeg_camera';

// JpegCamera implementation that uses _getUserMedia_ to capture snapshots,
// _canvas_element_ to display them and optionally _Web_Audio_API_ to play shutter sound.
//
// @private
export default class JpegCameraHtml5 extends JpegCamera {
  _status_checks_count = 0;

  vorbis_audio = "audio/ogg; codecs=vorbis";
  mpeg_audio = "audio/mpeg; ";

  can_play(type) {
    const elem = document.createElement("video");
    return !!(elem.canPlayType && elem.canPlayType(type).replace(/no/, ''));
  };

  _engine_init() {
    this._debug("Using HTML5 engine");

    const vertical_padding = Math.floor(this.view_height * 0.2);
    const horizontal_padding = Math.floor(this.view_width * 0.2);

    this.message = document.createElement("div");
    this.message.class = "message";
    this.message.style.width = "100%";
    this.message.style.height = "100%";
    JpegCamera._add_prefixed_style(this.message, "boxSizing", "border-box");
    this.message.style.overflow = "hidden";
    this.message.style.textAlign = "center";
    this.message.style.paddingTop = `${vertical_padding}px`;
    this.message.style.paddingBottom = `${vertical_padding}px`;
    this.message.style.paddingLeft = `${horizontal_padding}px`;
    this.message.style.paddingRight = `${horizontal_padding}px`;
    this.message.style.position = "absolute";
    this.message.style.zIndex = 3;
    this.message.innerHTML =
      "Please allow camera access when prompted by the browser.<br><br>" +
      "Look for camera icon around your address bar.";

    this.container.appendChild(this.message);

    this.video_container = document.createElement("div");
    this.video_container.style.width = `${this.view_width}px`;
    this.video_container.style.height = `${this.view_height}px`;
    this.video_container.style.overflow = "hidden";
    this.video_container.style.position = "absolute";
    this.video_container.style.zIndex = 1;

    this.container.appendChild(this.video_container);

    this.video = document.createElement('video');
    this.video.autoplay = true;
    JpegCamera._add_prefixed_style(this.video, "transform", "scalex(-1.0)");

    if (window.AudioContext) {
      if (this.can_play(this.vorbis_audio)) {
        this._load_shutter_sound(this.options.shutter_ogg_url);
      } else if (this.can_play(this.mpeg_audio)) {
        this._load_shutter_sound(this.options.shutter_mp3_url);
      }
    }

    const get_user_media_options = {
      video: {
        optional: [
          {minWidth: 2560},
          {minWidth: 2048},
          {minWidth: 1920},
          {minWidth: 1600},
          {minWidth: 1280},
          {minWidth: 1044},
          {minWidth: 920},
          {minWidth: 800},
          {minWidth: 640},
          {minWidth: 480},
          {minWidth: 360}
        ]
      }
    };

    const that = this;
    const success =
      function(stream) {
        that._remove_message();

        if (window.URL) {
          that.video.src = URL.createObjectURL(stream);
        } else {
          that.video.src = stream;
        }

        that._block_element_access();

        return that._wait_for_video_ready();
      };
    const failure =
      // XXX Receives NavigatorUserMediaError object and searches for
      // constant name matching error.code. With the current specification
      // version this will always evaluate to
      // `that._got_error("PERMISSION_DENIED")`.
      function(error) {
        that.message.innerHTML =
          "<span style=\"color: red;\">" +
            "You have denied camera access." +
          "</span><br><br>" +
          "Look for camera icon around your address bar to change your " +
          "decision.";

        const { code } = error;
        for (let key in error) {
          const value = error[key];
          if (key === "code") { continue; }
          that._got_error(key);
          return;
        }
        return that._got_error("UNKNOWN ERROR");
      };

    // XXX In an older spec first parameter was a string
    try {
      return navigator.getUserMedia(get_user_media_options, success, failure);
    } catch (error1) {
      const error = error1;
      return navigator.getUserMedia("video", success, failure);
    }
  }

  _engine_play_shutter_sound() {
    if (!this.shutter_buffer) { return; }

    const source = this.audio_context.createBufferSource();
    source.buffer = this.shutter_buffer;
    source.connect(this.audio_context.destination);
    return source.start(0);
  }

  _engine_capture(snapshot, mirror, quality, scale) {
    const crop = this._get_capture_crop();

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(crop.width * scale);
    canvas.height = Math.round(crop.height * scale);

    const context = canvas.getContext("2d");
    context.drawImage(this.video,
      crop.x_offset, crop.y_offset,
      crop.width, crop.height,
      0, 0,
      Math.round(crop.width * scale), Math.round(crop.height * scale));

    snapshot._canvas = canvas;
    snapshot._mirror = mirror;
    return snapshot._quality = quality;
  }

  _engine_display(snapshot) {
    if (this.displayed_canvas) {
      this.container.removeChild(this.displayed_canvas);
    }

    this.displayed_canvas = snapshot._canvas;
    this.displayed_canvas.style.width = `${this.view_width}px`;
    this.displayed_canvas.style.height = `${this.view_height}px`;
    this.displayed_canvas.style.top = 0;
    this.displayed_canvas.style.left = 0;
    this.displayed_canvas.style.position = "absolute";
    this.displayed_canvas.style.zIndex = 2;
    JpegCamera._add_prefixed_style(this.displayed_canvas,
      "transform", "scalex(-1.0)");

    return this.container.appendChild(this.displayed_canvas);
  }

  _engine_get_canvas(snapshot) {
    const canvas = document.createElement("canvas");
    canvas.width = snapshot._canvas.width;
    canvas.height = snapshot._canvas.height;
    const context = canvas.getContext("2d");
    context.drawImage(snapshot._canvas, 0, 0);
    return canvas;
  }

  _engine_get_image_data(snapshot) {
    const canvas = snapshot._canvas;
    const context = canvas.getContext("2d");
    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  _engine_get_blob(snapshot, mime, mirror, quality, callback) {
    let canvas;
    if (mirror) {
      canvas = document.createElement("canvas");
      canvas.width = snapshot._canvas.width;
      canvas.height = snapshot._canvas.height;

      const context = canvas.getContext("2d");
      context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      context.drawImage(snapshot._canvas, 0, 0);
    } else {
      canvas = snapshot._canvas;
    }

    return canvas.toBlob((blob => callback(blob)), mime, quality);
  }

  _engine_discard(snapshot) {
    return delete snapshot._canvas;
  }

  _engine_show_stream() {
    if (this.displayed_canvas) {
      this.container.removeChild(this.displayed_canvas);
      this.displayed_canvas = null;
    }

    return this.video_container.style.display = "block";
  }

  _remove_message() {
    return this.message.style.display = "none";
  }

  _load_shutter_sound(url) {
    if (this.audio_context) { return; }

    this.audio_context = new AudioContext();

    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    const that = this;
    request.onload = () =>
      that.audio_context.decodeAudioData(request.response, buffer => that.shutter_buffer = buffer)
    ;
    return request.send();
  }

  _wait_for_video_ready() {
    const video_width = parseInt(this.video.videoWidth);
    const video_height = parseInt(this.video.videoHeight);

    if ((video_width > 0) && (video_height > 0)) {
      this.video_container.appendChild(this.video);

      this.video_width = video_width;
      this.video_height = video_height;

      const crop = this._get_video_crop();

      this.video.style.position = "relative";
      this.video.style.width = `${crop.width}px`;
      this.video.style.height = `${crop.height}px`;
      this.video.style.left = `${crop.x_offset}px`;
      this.video.style.top = `${crop.y_offset}px`;

      return this._prepared(this.video_width, this.video_height);
    } else if (this._status_checks_count > 100) {
      return this._got_error("Camera failed to initialize in 10 seconds");
    } else {
      this._status_checks_count++;
      const that = this;
      return setTimeout((() => that._wait_for_video_ready()), 100);
    }
  }

  _get_video_crop() {
    let video_scale;
    const video_ratio = this.video_width / this.video_height;
    const view_ratio = this.view_width / this.view_height;

    if (video_ratio >= view_ratio) {
      // fill height, crop width
      this._debug("Filling height");
      video_scale = this.view_height / this.video_height;
      const scaled_video_width = Math.round(this.video_width * video_scale);

      return {
        width: scaled_video_width,
        height: this.view_height,
        x_offset: -Math.floor((scaled_video_width - this.view_width) / 2.0),
        y_offset: 0
      };
    } else {
      // fill width, crop height
      this._debug("Filling width");
      video_scale = this.view_width / this.video_width;
      const scaled_video_height = Math.round(this.video_height * video_scale);

      return {
        width: this.view_width,
        height: scaled_video_height,
        x_offset: 0,
        y_offset: -Math.floor((scaled_video_height - this.view_height) / 2.0)
      };
    }
  }

  _get_capture_crop() {
    const video_ratio = this.video_width / this.video_height;
    const view_ratio = this.view_width / this.view_height;

    if (video_ratio >= view_ratio) {
      // take full height, crop width
      const snapshot_width = Math.round(this.video_height * view_ratio);

      return {
        width: snapshot_width,
        height: this.video_height,
        x_offset: Math.floor((this.video_width - snapshot_width) / 2.0),
        y_offset: 0
      };
    } else {
      // take full width, crop height
      const snapshot_height = Math.round(this.video_width / view_ratio);

      return {
        width: this.video_width,
        height: snapshot_height,
        x_offset: 0,
        y_offset: Math.floor((this.video_height - snapshot_height) / 2.0)
      };
    }
  }
};

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JpegCamera"] = factory();
	else
		root["JpegCamera"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snapshot__ = __webpack_require__(3);


const isCanvasSupported = () => !!document.createElement('canvas').getContext;
/* harmony export (immutable) */ __webpack_exports__["c"] = isCanvasSupported;


// Helper for setting prefixed CSS declarations.
//
// @nodoc
// @private
const addPrefixedStyle = (theElement, style, value) => {
  const element = theElement;
  const uppercaseStyle = style.charAt(0).toUpperCase() + style.slice(1);
  element.style[style] = value;
  element.style[`Webkit${uppercaseStyle}`] = value;
  element.style[`Moz${uppercaseStyle}`] = value;
  element.style[`ms${uppercaseStyle}`] = value;
  element.style[`O${uppercaseStyle}`] = value;

  return element;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = addPrefixedStyle;


// Base class for JpegCamera implementations. Subclasses provide functionality
// defined by this API using different engines. On supported browsers HTML5
// implementation will be used, otherwise Flash will be used if available.
class JpegCamera {

  // Tells whether the browser supports `canvas` element and you can use
  // {Snapshot#getCanvas} method to display snapshots outside the camera
  // container.
  //
  // All browsers except Internet Explorer 8 and earlier support `canvas`
  // element.
  //
  // @return [Boolean] True if `canvas` is supported.


  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private
  canvasSupported() {
    return isCanvasSupported();
  }

  // Construct new camera.
  //
  // JpegCamera will fill the entire container element. If the element's aspect
  // ratio is different than that of the camera stream (usually 4:3, but
  // sometimes 16:9) the stream will be clipped horizontally or vertically.
  //
  // To display the image on the client side the image might additionally get
  // resized to match container element, but the file sent to the server will
  // always be in camera's native resolution.
  //
  // By design the file sent to the server will only contain the area that was
  // visible to the user during capture. There is no way of sending unclipped,
  // full camera frame without showing the whole frame to the user.
  //
  // Resizing container after the camera has been initialized is not supported.
  //
  // Various options provided here can be overwritten when calling
  // {JpegCamera#capture capture} or {Snapshot#upload}.
  //
  // @param container [DOMElement, String] DOM element or element's ID.
  //
  // @option options swfUrl [String] URL to the SWF file that should be used
  //   for fallback if HTML5 cannot be used. '/jpeg_camera/jpeg_camera.swf' by
  //   default.
  // @option options shutterMp3Url [String] URL to the shutter mp3 sound file.
  //   Used by flash. '/jpeg_camera/shutter.mp3' by default.
  // @option options shutterOggUrl [String] URL to the shutter ogg sound file.
  //   Used by HTML5. '/jpeg_camera/shutter.ogg' by default.
  // @option options onReady [Function] Function to call when camera is ready.
  //   Inside the callback camera object can be accessed as `this`. This
  //   function will receive object with `videoWidth` and `videoHeight`
  //   properties as the first argument. These indicate camera's native
  //   resolution. See also {JpegCamera#ready}.
  // @option options onDebug [Function] This callback can be used to log various
  //   events and information that can be useful when debugging JpegCamera. Debug
  //   message will be passed as the first argument. Inside the callback camera
  //   object can be accessed as `this`. There is a default implementation of
  //   this callback that logs messages to window.console if available.
  // @option options quality [Float] Quality of the JPEG file that will be
  //   uploaded to the server. Should be between 0 and 1. 0.9 by default. Can be
  //   overwritten when calling {JpegCamera#capture capture}. _Cannot_ be
  //   overwritten at the time of upload.
  // @option options mirror [Boolean] The video stream and images displayed on
  //   the client side mimic a mirror, because that's how people are used to
  //   seeing themselves. By default images are uploaded to the server in their
  //   natural orientation - how the front facing camera sees the user.
  //   This option can be set to true to upload images the way the user sees
  //   them. Can be overwritten when calling {JpegCamera#capture capture}.
  //   _Cannot_ be overwritten at the time of upload.
  // @option options shutter [Boolean] Whether to play shutter sound when
  //   capturing snapshots. Can be overwritten when calling
  //   {JpegCamera#capture capture}.


  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private

  // @nodoc
  // @private
  constructor(theContainer, options) {
    this.defaultOptions = {
      shutterOggUrl: null,
      shutterMp3Url: null,
      swfUrl: null,
      onDebug(message) {
        // eslint-disable-next-line no-console
        if (console && console.log) {
          return console.log(`JpegCamera: ${message}`);
        }
        return null;
      },
      quality: 0.9,
      shutter: true,
      mirror: false,
      scale: 1.0
    };
    this.isReady = false;
    this.errorOccured = false;
    this.statsCaptureScale = 0.2;
    this.snapshots = {};
    this.displayedSnapshot = null;
    this.overlay = null;
    this.viewWidth = null;
    this.viewHeight = null;

    let container = theContainer;
    if (typeof container === 'string') {
      container = document.getElementById(container.replace('#', ''));
    }

    if (!container || !container.offsetWidth) {
      throw new Error('JpegCamera: invalid container');
    }

    container.innerHTML = '';
    this.viewWidth = parseInt(container.offsetWidth, 10);
    this.viewHeight = parseInt(container.offsetHeight, 10);

    this.container = document.createElement('div');
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.position = 'relative';

    container.appendChild(this.container);

    this.options = Object.assign({}, this.defaultOptions, options);
  }

  resize(containerWidth, containerHeight) {
    this.viewWidth = parseInt(containerWidth, 10);
    this.viewHeight = parseInt(containerHeight, 10);
    this.resizePreview();
    return this;
  }

  // Bind callback for camera ready event.
  //
  // Replaces the callback set using __onReady__ option during initialization.
  //
  // If the event has already happened the argument will be called immediately.
  //
  // @param callback [Function] function to call when camera is ready. Camera
  //   object will be available as `this`. This function will receive object with
  //   `videoWidth` and `videoHeight` properties as the first argument. These
  //   indicate camera's native resolution.
  //
  // @return [JpegCamera] Self for chaining.
  ready(callback) {
    this.options.onReady = callback;
    if (this.options.onReady && this.isReady) {
      this.options.onReady.call(this, {
        videoWidth: this.videoWidth,
        videoHeight: this.videoHeight
      });
    }
    return this;
  }

  // Peak into video stream and calculate pixel statistics.
  //
  // Can be useful to give the user hints about bad lighting. It uses full
  // capture area, but at much lower resolution. It's more efficient than taking
  // a regular capture and calling {Snapshot#getStats}.
  //
  // Because reading image data can take a while when Flash fallback is being
  // used this method does not return the data immediately. Instead it accepts
  // a callback that later will be called with a {Stats} instance as an argument.
  // The camera object will be available as `this`.
  //
  // @param callback [Function] Function to call when data is available. Camera
  //   object will be available as `this`, the {Stats} instance will be passed
  //   as the first argument.
  //
  // @return [void]
  getStats(callback) {
    const snapshot = new __WEBPACK_IMPORTED_MODULE_0__snapshot__["a" /* default */](this, {});

    this.engineCapture(snapshot, false, 0.1, this.statsCaptureScale);

    const that = this;
    return snapshot.getStats(stats => callback.call(that, stats));
  }

  // Capture camera snapshot.
  //
  // All of the options can have their defaults set when constructing camera
  // object.
  //
  // @option options quality [Float] Quality of the JPEG file that will be
  //   uploaded to the server. Should be between 0 and 1. Defaults to 0.9 or
  //   whatever was set during camera initialization. _Cannot_ be
  //   overwritten at the time of upload.
  // @option options mirror [Boolean] The video stream and images displayed on
  //   the client side mimic a mirror, because that's how people are used to
  //   seeing themselves. By default images are uploaded to the server in their
  //   natural orientation - how the front facing camera sees the user.
  //   This option can be set to true to upload images the way the user sees
  //   them. _Cannot_ be overwritten at the time of upload.
  // @option options scale [Float] By default snapshots are captured and uploaded
  //   using highest possible resolution. Set this to a number less than 1.0 to
  //   get smaller snapshots.
  // @option options shutter [Boolean] Whether to play the shutter sound.
  //
  // @return [Snapshot] The snapshot that was taken.
  capture(theOptions) {
    let options = theOptions;
    if (options == null) {
      options = {};
    }
    const snapshot = new __WEBPACK_IMPORTED_MODULE_0__snapshot__["a" /* default */](this, options);
    this.snapshots[snapshot.id] = snapshot;

    options = snapshot.options();

    if (options.shutter) {
      this.enginePlayShutterSound();
    }

    let scale = Math.min(1.0, options.scale);
    scale = Math.max(0.01, scale);

    this.engineCapture(snapshot, options.mirror, options.quality, scale);

    return snapshot;
  }

  // Hide currently displayed snapshot and show the video stream.
  //
  // @return [JpegCamera] Self for chaining.
  showStream() {
    this.engineShowStream();
    this.displayedSnapshot = null;
    return this;
  }

  // Discard all snapshots and show video stream.
  //
  // @return [JpegCamera] Self for chaining.
  discardAll() {
    if (this.displayedSnapshot) {
      this.showStream();
    }
    Object.keys(this.spanshots).map(id => {
      const snapshot = this.snapshots[id];
      this.engineDiscard(snapshot);
      snapshot.discarded = true;
      return null;
    });
    this.snapshots = {};
    return this;
  }

  // Log debug messages
  //
  // @nodoc
  // @private
  debug(message) {
    if (this.options.onDebug) {
      return this.options.onDebug.call(this, message);
    }
    return null;
  }

  // @nodoc
  // @private
  display(snapshot) {
    this.engineDisplay(snapshot);
    this.displayedSnapshot = snapshot;
    return this.displayedSnapshot;
  }

  // @nodoc
  // @private
  discard(snapshot) {
    if (this.displayedSnapshot === snapshot) {
      this.showStream();
    }
    this.engineDiscard(snapshot);
    // eslint-disable-next-line no-param-reassign
    snapshot.discarded = true;
    return delete this.snapshots[snapshot.id];
  }

  // Called by the engine when camera is ready.
  //
  // @nodoc
  // @private
  prepared(videoWidth, videoHeight) {
    this.videoWidth = videoWidth;
    this.videoHeight = videoHeight;

    this.debug(`Camera resolution ${this.videoWidth}x${this.videoHeight}px`);

    // XXX Since this method is called from inside the Flash object, we need to
    // return control to make flash object usable again.
    const that = this;
    return setTimeout(() => that.waitUntilStreamLooksOk(true), 1);
  }

  // This peaks into the video stream using very small rendering and calculates
  // colors mean value and standard deviation. If standard deviation is
  // negligible then we assume camera isn't ready yet and wait a little longer.
  //
  // @nodoc
  // @private
  waitUntilStreamLooksOk(showDebug) {
    return this.getStats(stats => {
      if (stats.std > 2) {
        this.debug(`Stream mean gray value = ${stats.mean} standard deviation = ${stats.std}`);
        this.debug('Camera is ready');

        this.isReady = true;
        if (this.options.onReady) {
          return this.options.onReady.call(this, {
            videoWidth: this.videoWidth,
            videoHeight: this.videoHeight
          });
        }
      } else {
        if (showDebug) {
          this.debug(`Stream mean gray value = ${stats.mean} standard deviation = ${stats.std}`);
        }
        const that = this;
        return setTimeout(() => that.waitUntilStreamLooksOk(false), 100);
      }

      return null;
    });
  }

  // Shows an overlay over the container to block mouse access.
  //
  // Prevents changing flash permission after camera has been enabled or stopping
  // the HTML5 video stream - both options available through context menu of
  // Flash object or <video> elements.
  //
  // @nodoc
  // @private
  blockElementAccess() {
    this.overlay = document.createElement('div');
    this.overlay.style.width = '100%';
    this.overlay.style.height = '100%';
    this.overlay.style.position = 'absolute';
    this.overlay.style.top = 0;
    this.overlay.style.left = 0;
    this.overlay.style.zIndex = 2;

    return this.container.appendChild(this.overlay);
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = JpegCamera;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = self => {
	for (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {
		const val = self[key];

		if (key !== 'constructor' && typeof val === 'function') {
			self[key] = val.bind(self);
		}
	}

	return self;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jpeg_camera__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jpeg_camera_html5__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jpeg_camera_flash__ = __webpack_require__(6);




if (!navigator.getUserMedia) {
  navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
}

if (!window.AudioContext) {
  window.AudioContext = window.webkitAudioContext;
}

const exports = { JpegCamera: __WEBPACK_IMPORTED_MODULE_0__jpeg_camera__["b" /* default */] };

// Use HTML5 version
if (!navigator.getUserMedia) {
  const canvas = document.createElement('canvas');
  if (canvas.getContext && !canvas.toBlob) {
    throw new Error('JpegCamera: Canvas-to-Blob is not loaded');
  }
  exports.JpegCamera = __WEBPACK_IMPORTED_MODULE_1__jpeg_camera_html5__["a" /* default */];

  // Use Flash version
} else {
  if (!window.swfobject) {
    throw new Error('JpegCamera: SWFObject is not loaded');
  }
  if (window.swfobject && window.swfobject.hasFlashPlayerVersion('9')) {
    exports.JpegCamera = __WEBPACK_IMPORTED_MODULE_2__jpeg_camera_flash__["a" /* default */];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (exports.JpegCamera);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auto_bind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auto_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_auto_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jpeg_camera__ = __webpack_require__(0);




// Snapshot taken using {JpegCamera}.
class Snapshot {

  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private
  constructor(camera, options) {
    this.nextSnapshotId = 1;
    this.discarded = false;
    this.extraCanvas = null;
    this.blob = null;
    this.blobMime = null;
    this.imageData = null;
    this.stats = null;
    this.getCanvasTimeout = null;
    this.getBlobTimeout = null;
    this.getImageDataTimeout = null;

    __WEBPACK_IMPORTED_MODULE_0_auto_bind___default()(this);
    this.camera = camera;
    this.options = options;
    this.id = this.nextSnapshotId++;
  }

  // Display the snapshot with the camera element it was taken with.
  //
  // @return [Snapshot] Self for chaining.


  // @nodoc
  // @private

  // @nodoc
  // @private


  // @nodoc
  // @private

  // Snapshot IDs are unique within browser session. This class variable holds
  // the value of the next ID to use.
  //
  // @nodoc
  // @private
  show() {
    if (this.discarded) {
      throw new Error('discarded snapshot cannot be used');
    }

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
    if (this.discarded) {
      throw new Error('discarded snapshot cannot be used');
    }

    return this.getImageData(data => this.calculateStats(data, callback));
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

  getCanvas(callback) {
    if (this.discarded) {
      throw new Error('discarded snapshot cannot be used');
    }

    if (!Object(__WEBPACK_IMPORTED_MODULE_2__jpeg_camera__["c" /* isCanvasSupported */])()) {
      return false;
    }

    const that = this;
    this.getCanvasTimeout = setTimeout(() => {
      if (!that.extraCanvas) {
        that.extraCanvas = that.camera.engineGetCanvas(that);
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__jpeg_camera__["a" /* addPrefixedStyle */])(that.extraCanvas, 'transform', 'scalex(-1.0)');
      return callback.call(that, that.extraCanvas);
    }, 1);
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

  getBlob(callback, mimeType) {
    let theMimeType = mimeType;
    if (theMimeType == null) {
      theMimeType = 'image/jpeg';
    }
    if (this.discarded) {
      throw new Error('discarded snapshot cannot be used');
    }

    if (!Object(__WEBPACK_IMPORTED_MODULE_2__jpeg_camera__["c" /* isCanvasSupported */])()) {
      return false;
    }

    const that = this;
    this.getBlobTimeout = setTimeout(() => {
      if (that.blobMime !== theMimeType) {
        that.blob = null;
      }
      that.blobMime = theMimeType;
      if (that.blob) {
        return callback.call(that, that.blob);
      }
      const { mirror } = that.options;
      const { quality } = that.options;
      return that.camera.engineGetBlob(that, theMimeType, mirror, quality, b => {
        that.blob = b;
        return callback.call(that, that.blob);
      });
    }, 1);
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

  getImageData(callback) {
    if (this.discarded) {
      throw new Error('discarded snapshot cannot be used');
    }

    const that = this;
    this.getImageDataTimeout = setTimeout(() => {
      if (!that.imageData) {
        that.imageData = that.camera.engineGetImageData(that);
      }
      return callback.call(that, that.imageData);
    }, 1);

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
        gray = 0.2126 * data.data[index + 0] + // red
        0.7152 * data.data[index + 1] + // green
        0.0722 * data.data[index + 2]; // blue
        gray = Math.round(gray);

        sum += gray;
        grayValues[i] = gray;
      }

      const mean = Math.round(sum / n);

      let sumOfSquareDistances = 0;
      grayValues.forEach(oneGray => {
        sumOfSquareDistances += Math.pow(oneGray - mean, 2);
      });

      this.stats = new __WEBPACK_IMPORTED_MODULE_1__stats__["a" /* default */]();
      this.stats.mean = mean;
      this.stats.std = Math.round(Math.sqrt(sumOfSquareDistances / n));
    }
    return callback.call(this, this.stats);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Snapshot;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
// Contains some pixel statistics of {Snapshot} or camera stream.
//
// Can be retrieved using {JpegCamera#getStats} or {Snapshot#getStats} methods.
//
class Stats {
  constructor() {
    this.mean = null;
    this.std = null;
  }
  // @property [Float] mean gray value of pixels (0-255)


  // @property [Float] standard deviation of gray values


}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stats;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auto_bind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auto_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_auto_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jpeg_camera__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(7);




const canPlay = type => {
  const elem = document.createElement('video');
  return !!(elem.canPlayType && elem.canPlayType(type).replace(/no/, ''));
};

// JpegCamera implementation that uses _getUserMedia_ to capture snapshots,
// canvas_element_ to display them and optionally _Web_Audio_API_ to play shutter sound.
//
// @private
class JpegCameraHtml5 extends __WEBPACK_IMPORTED_MODULE_1__jpeg_camera__["b" /* default */] {
  constructor(theContainer, options) {
    super(theContainer, options);
    this.statusChecksCount = 0;
    this.vorbisAudio = 'audio/ogg; codecs=vorbis';
    this.mpegAudio = 'audio/mpeg; ';
    this.message = null;
    this.videoContainer = null;
    __WEBPACK_IMPORTED_MODULE_0_auto_bind___default()(this);
    this.engineInit();
  }

  engineInit() {
    this.debug('Using HTML5 engine.');

    this.message = document.createElement('div');
    this.message.class = 'message';
    this.message.style.width = '100%';
    this.message.style.height = '100%';
    Object(__WEBPACK_IMPORTED_MODULE_1__jpeg_camera__["a" /* addPrefixedStyle */])(this.message, 'boxSizing', 'border-box');
    this.message.style.overflow = 'hidden';
    this.message.style.textAlign = 'center';
    this.message.style.position = 'absolute';
    this.message.style.zIndex = 3;
    this.message.innerHTML = 'Please allow camera access when prompted by the browser.<br><br>' + 'Look for camera icon around your address bar.';
    this.container.appendChild(this.message);

    this.videoContainer = document.createElement('div');
    this.videoContainer.style.overflow = 'hidden';
    this.videoContainer.style.position = 'absolute';
    this.videoContainer.style.zIndex = 1;

    this.container.appendChild(this.videoContainer);
    this.resizeVideoContainer();

    this.video = document.createElement('video');
    this.video.autoplay = true;
    Object(__WEBPACK_IMPORTED_MODULE_1__jpeg_camera__["a" /* addPrefixedStyle */])(this.video, 'transform', 'scalex(-1.0)');

    if (window.AudioContext) {
      if (canPlay(this.vorbisAudio)) {
        this.loadShutterSound(this.options.shutterOggUrl);
      } else if (canPlay(this.mpegAudio)) {
        this.loadShutterSound(this.options.shutterMp3Url);
      }
    }

    const getUserMediaOptions = {
      video: {
        optional: [{ minWidth: 2560 }, { minWidth: 2048 }, { minWidth: 1920 }, { minWidth: 1600 }, { minWidth: 1280 }, { minWidth: 1044 }, { minWidth: 920 }, { minWidth: 800 }, { minWidth: 640 }, { minWidth: 480 }, { minWidth: 360 }]
      }
    };

    const success = stream => {
      this.removeMessage();

      if (window.URL) {
        this.video.src = URL.createObjectURL(stream);
      } else {
        this.video.src = stream;
      }

      this.blockElementAccess();

      return this.waitForVideoReady();
    };
    const failure = err => {
      throw new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* WebcamError */](__WEBPACK_IMPORTED_MODULE_2__errors__["b" /* WebcamErrors */].UNKNOWN_ERROR, err);
    };

    // XXX In an older spec first parameter was a string
    try {
      return navigator.getUserMedia(getUserMediaOptions, success.bind(this), failure.bind(this));
    } catch (error) {
      try {
        return navigator.getUserMedia('video', success.bind(this), failure.bind(this));
      } catch (err) {
        this.message.innerHTML = '';
        throw new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* WebcamError */](__WEBPACK_IMPORTED_MODULE_2__errors__["b" /* WebcamErrors */].GET_MEDIA_FAILED_INIT, err);
      }
    }
  }

  resizePreview() {
    this.resizeVideoContainer();
    this.resizeVideoBox();
  }

  resizeVideoContainer() {
    const verticalPadding = Math.floor(this.viewHeight * 0.2);
    const horizontalPadding = Math.floor(this.viewWidth * 0.2);
    this.message.style.paddingTop = `${verticalPadding}px`;
    this.message.style.paddingBottom = `${verticalPadding}px`;
    this.message.style.paddingLeft = `${horizontalPadding}px`;
    this.message.style.paddingRight = `${horizontalPadding}px`;
    this.videoContainer.style.width = `${this.viewWidth}px`;
    this.videoContainer.style.height = `${this.viewHeight}px`;
  }

  enginePlayShutterSound() {
    if (!this.shutterBuffer) {
      return null;
    }

    const source = this.audioContext.createBufferSource();
    source.buffer = this.shutterBuffer;
    source.connect(this.audioContext.destination);
    return source.start(0);
  }

  engineCapture(theSnapshot, mirror, quality, scale) {
    const snapshot = theSnapshot;
    const crop = this.getCaptureCrop();

    const canvas = document.createElement('canvas');
    canvas.width = Math.round(crop.width * scale);
    canvas.height = Math.round(crop.height * scale);

    const context = canvas.getContext('2d');
    context.drawImage(this.video, crop.xOffset, crop.yOffset, crop.width, crop.height, 0, 0, Math.round(crop.width * scale), Math.round(crop.height * scale));

    snapshot.canvas = canvas;
    snapshot.mirror = mirror;
    snapshot.quality = quality;

    return snapshot;
  }

  engineDisplay(snapshot) {
    if (this.displayedcanvas) {
      this.container.removeChild(this.displayedcanvas);
    }

    this.displayedcanvas = snapshot.canvas;
    this.displayedcanvas.style.width = `${this.viewWidth}px`;
    this.displayedcanvas.style.height = `${this.viewHeight}px`;
    this.displayedcanvas.style.top = 0;
    this.displayedcanvas.style.left = 0;
    this.displayedcanvas.style.position = 'absolute';
    this.displayedcanvas.style.zIndex = 2;
    Object(__WEBPACK_IMPORTED_MODULE_1__jpeg_camera__["a" /* addPrefixedStyle */])(this.displayedcanvas, 'transform', 'scalex(-1.0)');

    return this.container.appendChild(this.displayedcanvas);
  }

  engineGetcanvas(snapshot) {
    const canvas = document.createElement('canvas');
    canvas.width = snapshot.canvas.width;
    canvas.height = snapshot.canvas.height;
    const context = canvas.getContext('2d');
    context.drawImage(snapshot.canvas, 0, 0);
    return canvas;
  }

  engineGetImageData(snapshot) {
    const canvas = snapshot.canvas;
    const context = canvas.getContext('2d');
    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  engineGetBlob(snapshot, mime, mirror, quality, callback) {
    let canvas;
    if (mirror) {
      canvas = document.createElement('canvas');
      canvas.width = snapshot.canvas.width;
      canvas.height = snapshot.canvas.height;

      const context = canvas.getContext('2d');
      context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      context.drawImage(snapshot.canvas, 0, 0);
    } else {
      canvas = snapshot.canvas;
    }

    return canvas.toBlob(blob => callback(blob), mime, quality);
  }

  engineDiscard(snapshot) {
    // eslint-disable-next-line no-param-reassign
    return delete snapshot.canvas;
  }

  engineShowStream() {
    if (this.displayedcanvas) {
      this.container.removeChild(this.displayedcanvas);
      this.displayedcanvas = null;
    }
    this.videoContainer.style.display = 'block';
    return null;
  }

  removeMessage() {
    this.message.style.display = 'none';
    return null;
  }

  loadShutterSound(url) {
    if (this.audioContext) {
      return null;
    }

    this.audioContext = new AudioContext();

    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    const that = this;
    request.onload = () => that.audioContext.decodeAudioData(request.response, buffer => {
      that.shutterBuffer = buffer;
    });
    return request.send();
  }

  waitForVideoReady() {
    const videoWidth = parseInt(this.video.videoWidth, 10);
    const videoHeight = parseInt(this.video.videoHeight, 10);

    if (videoWidth > 0 && videoHeight > 0) {
      this.videoContainer.appendChild(this.video);

      this.videoWidth = videoWidth;
      this.videoHeight = videoHeight;

      this.video.style.position = 'relative';
      this.resizeVideoBox();

      return this.prepared(this.videoWidth, this.videoHeight);
    } else if (this.statusChecksCount > 100) {
      throw new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* WebcamError */](__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* WebcamError */].CAMERA_NOT_READY);
    }
    this.statusChecksCount++;
    const that = this;
    return setTimeout(() => that.waitForVideoReady(), 100);
  }

  resizeVideoBox() {
    const crop = this.getVideoCrop();
    this.video.style.width = `${crop.width}px`;
    this.video.style.height = `${crop.height}px`;
    this.video.style.left = `${crop.xOffset}px`;
    this.video.style.top = `${crop.yOffset}px`;
  }

  getVideoCrop() {
    let videoScale;
    const videoRatio = this.videoWidth / this.videoHeight;
    const viewRatio = this.viewWidth / this.viewHeight;

    if (videoRatio >= viewRatio) {
      // fill height, crop width
      this.debug('Filling height');
      videoScale = this.viewHeight / this.videoHeight;
      const scaledVideoWidth = Math.round(this.videoWidth * videoScale);

      return {
        width: scaledVideoWidth,
        height: this.viewHeight,
        xOffset: -Math.floor((scaledVideoWidth - this.viewWidth) / 2.0),
        yOffset: 0
      };
    }
    // fill width, crop height
    this.debug('Filling width');
    videoScale = this.viewWidth / this.videoWidth;
    const scaledVideoHeight = Math.round(this.videoHeight * videoScale);

    return {
      width: this.viewWidth,
      height: scaledVideoHeight,
      xOffset: 0,
      yOffset: -Math.floor((scaledVideoHeight - this.viewHeight) / 2.0)
    };
  }

  getCaptureCrop() {
    const videoRatio = this.videoWidth / this.videoHeight;
    const viewRatio = this.viewWidth / this.viewHeight;

    if (videoRatio >= viewRatio) {
      // take full height, crop width
      const snapshotWidth = Math.round(this.videoHeight * viewRatio);

      return {
        width: snapshotWidth,
        height: this.videoHeight,
        xOffset: Math.floor((this.videoWidth - snapshotWidth) / 2.0),
        yOffset: 0
      };
    }
    // take full width, crop height
    const snapshotHeight = Math.round(this.videoWidth / viewRatio);

    return {
      width: this.videoWidth,
      height: snapshotHeight,
      xOffset: 0,
      yOffset: Math.floor((this.videoHeight - snapshotHeight) / 2.0)
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JpegCameraHtml5;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auto_bind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auto_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_auto_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jpeg_camera__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(7);




//
// JpegCamera implementation that uses Flash to capture and display snapshots.
//
// @private
class JpegCameraFlash extends __WEBPACK_IMPORTED_MODULE_1__jpeg_camera__["b" /* default */] {
  constructor(theContainer, options) {
    super(theContainer, options);
    this.instances = {};
    this.nextId = 1;
    __WEBPACK_IMPORTED_MODULE_0_auto_bind___default()(this);
    this.engineInit();
  }
  // Used by flash object to send message to our instance.
  sendMessage(id, method, ...args) {
    const instance = this.instances[parseInt(id, 10)];

    if (!instance) {
      return null;
    }

    return this.prototype[method].apply(instance, ...args);
  }

  engineInit() {
    this.debug('Using Flash engine');

    // register our instance
    this.id = this.nextId++;
    this.instances[this.id] = this;

    const flashObjectId = `flash_object_${this.id}`;

    const params = {
      loop: 'false',
      allowScriptAccess: 'always',
      allowFullScreen: 'false',
      quality: 'best',
      wmode: 'opaque',
      menu: 'false'
    };
    const attributes = {
      id: flashObjectId,
      align: 'middle'
    };
    const flashvars = {
      id: this.id,
      width: this.viewWidth,
      height: this.viewHeight,
      shutter_url: this.options.shutterMp3Url
    };
    const that = this;
    const callback = event => {
      if (!event.success) {
        throw new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* WebcamError */](__WEBPACK_IMPORTED_MODULE_2__errors__["b" /* WebcamErrors */].FLASH_FAILED_LOADING, event);
      }
      that.debug('Flash loaded.');
      that.flash = document.getElementById(flashObjectId);
      return that.flash;
    };

    const containerToBeReplaced = document.createElement('div');
    containerToBeReplaced.id = `jpeg_cameraflash_${this.id}`;
    containerToBeReplaced.style.width = '100%';
    containerToBeReplaced.style.height = '100%';

    this.container.appendChild(containerToBeReplaced);

    // eslint-disable-next-line no-undef
    return swfobject.embedSWF(this.options.swf_url, containerToBeReplaced.id, this.viewWidth, this.viewHeight, '9', null, flashvars, params, attributes, callback);
  }

  resizePreview() {
    if (this.viewWidth < 215 || this.viewHeight < 138) {
      throw new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* WebcamError */](__WEBPACK_IMPORTED_MODULE_2__errors__["b" /* WebcamErrors */].FLASH_WINDOW_TOO_SMALL);
    }
    this.flash.width = this.viewWidth;
    this.flash.height = this.viewHeight;
    return this;
  }

  enginePlayShutterSound() {
    // eslint-disable-next-line no-underscore-dangle
    return this.flash._play_shutter();
  }

  engineCapture(snapshot, mirror, quality, scale) {
    // eslint-disable-next-line no-underscore-dangle
    return this.flash._capture(snapshot.id, mirror, quality, scale);
  }

  engineDisplay(snapshot) {
    // eslint-disable-next-line no-underscore-dangle
    return this.flash._display(snapshot.id);
  }

  engineGetCanvas(snapshot) {
    // eslint-disable-next-line no-param-reassign
    if (!snapshot.imageData) {
      snapshot.imageData = this.engineGetImageData(snapshot);
    }
    const canvas = document.createElement('canvas');
    canvas.width = snapshot.imageData.width;
    canvas.height = snapshot.imageData.height;
    const context = canvas.getContext('2d');
    context.putImageData(snapshot.imageData, 0, 0);
    return canvas;
  }

  engineGetImageData(snapshot) {
    let result;
    const flashData = this.flash.getImageData(snapshot.id);

    if (__WEBPACK_IMPORTED_MODULE_1__jpeg_camera__["b" /* default */].canvas_supported()) {
      const canvas = document.createElement('canvas');
      canvas.width = flashData.width;
      canvas.height = flashData.height;
      const context = canvas.getContext('2d');
      result = context.createImageData(flashData.width, flashData.height);
    } else {
      result = {
        data: [],
        width: flashData.width,
        height: flashData.height
      };
    }

    for (let i = 0; i < flashData.data.length; i++) {
      const pixel = flashData.data[i];
      const index = i * 4;

      /* eslint-disable no-bitwise */
      const red = pixel >> 16 & 0xff;
      const green = pixel >> 8 & 0xff;
      const blue = pixel & 0xff;

      result.data[index + 0] = red;
      result.data[index + 1] = green;
      result.data[index + 2] = blue;
      result.data[index + 3] = 255;
    }
    return result;
  }

  engineGetBlob(snapshot, mime, mirror, quality, callback) {
    let canvas;
    // eslint-disable-next-line no-param-reassign
    if (!snapshot.extraCanvas) {
      snapshot.extraCanvas = this.engineGetCanvas(snapshot);
    }

    if (mirror) {
      canvas = document.createElement('canvas');
      canvas.width = snapshot.canvas.width;
      canvas.height = snapshot.canvas.height;

      const context = canvas.getContext('2d');
      context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      context.drawImage(snapshot.extraCanvas, 0, 0);
    } else {
      canvas = snapshot.extraCanvas;
    }

    return canvas.toBlob(blob => callback(blob), mime, quality);
  }

  engineDiscard(snapshot) {
    return this.flash.discard(snapshot.id);
  }

  engineShowStream() {
    return this.flash.showStream();
  }

  flashPrepared(width, height) {
    this.blockElementAccess();

    // XXX steal focus from the flash object
    document.body.tabIndex = 0;
    document.body.focus();

    return this.prepared(width, height);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JpegCameraFlash;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
// Contains possible error states of the component.
// This object is thrown from component in case of problems.
//
class WebcamError {
  constructor(errorCode, details = null) {
    this.error = errorCode;
    this.details = details;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WebcamError;


const WebcamErrors = {
  UNKNOWN_ERROR: 1,
  GET_MEDIA_FAILED_INIT: 2,
  FLASH_FAILED_LOADING: 3,
  FLASH_WINDOW_TOO_SMALL: 4,
  CAMERA_NOT_READY: 5,
  GENERIC_ERROR: 99
};
/* harmony export (immutable) */ __webpack_exports__["b"] = WebcamErrors;


/***/ })
/******/ ]);
});
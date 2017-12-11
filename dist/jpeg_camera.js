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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (self) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.getOwnPropertyNames(self.constructor.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			var val = self[key];

			if (key !== 'constructor' && typeof val === 'function') {
				self[key] = val.bind(self);
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return self;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPrefixedStyle = exports.isCanvasSupported = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snapshot = __webpack_require__(5);

var _snapshot2 = _interopRequireDefault(_snapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCanvasSupported = exports.isCanvasSupported = function isCanvasSupported() {
  return !!document.createElement('canvas').getContext;
};

// Helper for setting prefixed CSS declarations.
//
// @nodoc
// @private
var addPrefixedStyle = exports.addPrefixedStyle = function addPrefixedStyle(theElement, style, value) {
  var element = theElement;
  var uppercaseStyle = style.charAt(0).toUpperCase() + style.slice(1);
  element.style[style] = value;
  element.style['Webkit' + uppercaseStyle] = value;
  element.style['Moz' + uppercaseStyle] = value;
  element.style['ms' + uppercaseStyle] = value;
  element.style['O' + uppercaseStyle] = value;

  return element;
};

// Base class for JpegCamera implementations. Subclasses provide functionality
// defined by this API using different engines. On supported browsers HTML5
// implementation will be used, otherwise Flash will be used if available.

var JpegCameraBase = function () {
  _createClass(JpegCameraBase, [{
    key: 'canvasSupported',


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
    value: function canvasSupported() {
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

  }]);

  function JpegCameraBase(theContainer, options) {
    _classCallCheck(this, JpegCameraBase);

    this.defaultOptions = {
      shutterOggUrl: null,
      shutterMp3Url: null,
      swfUrl: null,
      onDebug: function onDebug(message) {
        // eslint-disable-next-line no-console
        if (console && console.log) {
          return console.log('JpegCamera: ' + message);
        }
        return null;
      },

      quality: 0.9,
      shutter: true,
      mirror: false,
      previewMirror: true,
      scale: 1.0,
      accessMessage: 'Please allow camera access when prompted by the browser.<br><br>' + 'Look for camera icon around your address bar.'
    };
    this.isReady = false;
    this.errorOccured = false;
    this.statsCaptureScale = 0.2;
    this.snapshots = {};
    this.displayedSnapshot = null;
    this.overlay = null;
    this.viewWidth = null;
    this.viewHeight = null;

    var container = theContainer;
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

  _createClass(JpegCameraBase, [{
    key: 'resize',
    value: function resize(containerWidth, containerHeight) {
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
    // @return [JpegCameraBase] Self for chaining.

  }, {
    key: 'ready',
    value: function ready(callback) {
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

  }, {
    key: 'getStats',
    value: function getStats(callback) {
      var snapshot = new _snapshot2.default(this, {});

      this.engineCapture(snapshot, false, 0.1, this.statsCaptureScale);

      var that = this;
      return snapshot.getStats(function (stats) {
        return callback.call(that, stats);
      });
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

  }, {
    key: 'capture',
    value: function capture(newOptions) {
      var options = Object.assign({}, this.options);
      if (newOptions) {
        options = Object.assign({}, options, newOptions);
      }
      var snapshot = new _snapshot2.default(this, options);
      this.snapshots[snapshot.id] = snapshot;

      if (options.shutter) {
        this.enginePlayShutterSound();
      }

      var scale = Math.min(1.0, options.scale);
      scale = Math.max(0.01, scale);

      this.engineCapture(snapshot, options.mirror, options.quality, scale);

      return snapshot;
    }

    // Hide currently displayed snapshot and show the video stream.
    //
    // @return [JpegCameraBase] Self for chaining.

  }, {
    key: 'showStream',
    value: function showStream() {
      this.engineShowStream();
      this.displayedSnapshot = null;
      return this;
    }

    // Discard all snapshots and show video stream.
    //
    // @return [JpegCameraBase] Self for chaining.

  }, {
    key: 'discardAll',
    value: function discardAll() {
      var _this = this;

      if (this.displayedSnapshot) {
        this.showStream();
      }
      Object.keys(this.spanshots).map(function (id) {
        var snapshot = _this.snapshots[id];
        _this.engineDiscard(snapshot);
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

  }, {
    key: 'debug',
    value: function debug(message) {
      if (this.options.onDebug) {
        return this.options.onDebug.call(this, message);
      }
      return null;
    }

    // @nodoc
    // @private

  }, {
    key: 'display',
    value: function display(snapshot) {
      this.engineDisplay(snapshot);
      this.displayedSnapshot = snapshot;
      return this.displayedSnapshot;
    }

    // @nodoc
    // @private

  }, {
    key: 'discard',
    value: function discard(snapshot) {
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

  }, {
    key: 'prepared',
    value: function prepared(videoWidth, videoHeight) {
      this.videoWidth = videoWidth;
      this.videoHeight = videoHeight;

      this.debug('Camera resolution ' + this.videoWidth + 'x' + this.videoHeight + 'px');

      // XXX Since this method is called from inside the Flash object, we need to
      // return control to make flash object usable again.
      var that = this;
      return setTimeout(function () {
        return that.waitUntilStreamLooksOk(true);
      }, 1);
    }

    // This peaks into the video stream using very small rendering and calculates
    // colors mean value and standard deviation. If standard deviation is
    // negligible then we assume camera isn't ready yet and wait a little longer.
    //
    // @nodoc
    // @private

  }, {
    key: 'waitUntilStreamLooksOk',
    value: function waitUntilStreamLooksOk(showDebug) {
      var _this2 = this;

      return this.getStats(function (stats) {
        if (stats.std > 2) {
          _this2.debug('Stream mean gray value = ' + stats.mean + ' standard deviation = ' + stats.std);
          _this2.debug('Camera is ready');

          _this2.isReady = true;
          if (_this2.options.onReady) {
            return _this2.options.onReady.call(_this2, {
              videoWidth: _this2.videoWidth,
              videoHeight: _this2.videoHeight
            });
          }
        } else {
          if (showDebug) {
            _this2.debug('Stream mean gray value = ' + stats.mean + ' standard deviation = ' + stats.std);
          }
          var that = _this2;
          return setTimeout(function () {
            return that.waitUntilStreamLooksOk(false);
          }, 100);
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

  }, {
    key: 'blockElementAccess',
    value: function blockElementAccess() {
      this.overlay = document.createElement('div');
      this.overlay.style.width = '100%';
      this.overlay.style.height = '100%';
      this.overlay.style.position = 'absolute';
      this.overlay.style.top = 0;
      this.overlay.style.left = 0;
      this.overlay.style.zIndex = 2;

      return this.container.appendChild(this.overlay);
    }
  }]);

  return JpegCameraBase;
}();

exports.default = JpegCameraBase;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// Contains possible error states of the component.
// This object is thrown from component in case of problems.
//
var WebcamError = exports.WebcamError = function WebcamError(errorCode) {
  var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, WebcamError);

  this.error = errorCode;
  this.details = details;
};

var WebcamErrors = exports.WebcamErrors = {
  INCORRECT_INITIALISATION: 'INCORRECT_INITIALISATION',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  GET_MEDIA_FAILED_INIT: 'GET_MEDIA_FAILED_INIT',
  FLASH_FAILED_LOADING: 'FLASH_FAILED_LOADING',
  FLASH_WINDOW_TOO_SMALL: 'FLASH_WINDOW_TOO_SMALL',
  CAMERA_NOT_READY: 'CAMERA_NOT_READY',
  GENERIC_ERROR: 'GENERIC_ERROR',
  NO_GET_MEDIA_NOR_FLASH_AVAILABLE: 'NO_GET_MEDIA_NOR_FLASH_AVAILABLE'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jpeg_camera_html = __webpack_require__(4);

var _jpeg_camera_html2 = _interopRequireDefault(_jpeg_camera_html);

var _jpeg_camera_flash = __webpack_require__(9);

var _jpeg_camera_flash2 = _interopRequireDefault(_jpeg_camera_flash);

var _errors = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!navigator.getUserMedia) {
  navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
}
if (!window.AudioContext) {
  window.AudioContext = window.webkitAudioContext;
}

/**
 * @option options dontCheckFlash [Boolean] - if this option is set the engine will
 *   try the HTML5 version first and if this fails it will render the flash object
 *   without trying to determine if flash is installed and what version is it.
 *   This is required for Safari 10 which hides the fact of Flash being installed (but disabled
 *   by default). Rendering the Flash object will trigger confirmation dialog "Would you like
 *   to use Flash". WARNING - forcing render in such way means that the onError will never get
 *   executed in case the client disallow Flash to run.
 */

var JpegCamera = function JpegCamera(container, options) {
  var html5Init = function html5Init() {
    return new _jpeg_camera_html2.default(container, options);
  };
  var flashInit = function flashInit() {
    return new _jpeg_camera_flash2.default(container, options);
  };
  var initError = function initError() {
    throw new _errors.WebcamError(_errors.WebcamErrors.NO_GET_MEDIA_NOR_FLASH_AVAILABLE);
  };

  if (!options.onInit) {
    throw new _errors.WebcamError(_errors.WebcamErrors.INCORRECT_INITIALISATION);
  }

  _jpeg_camera_html2.default.engineCheck(
  /* success */function () {
    options.onInit(html5Init());
  },
  /* failure */function () {
    if (options.dontCheckFlash) {
      /* skip checking for flash and just run it */
      options.onInit(flashInit());
    } else {
      /* do check for flash in correct version */
      _jpeg_camera_flash2.default.engineCheck(
      /* success */function () {
        options.onInit(flashInit());
      },
      /* failure */function () {
        if (options.onError) options.onError(initError());
      });
    }
  });
};

exports.default = JpegCamera;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoBind = __webpack_require__(0);

var _autoBind2 = _interopRequireDefault(_autoBind);

var _jpeg_camera = __webpack_require__(1);

var _jpeg_camera2 = _interopRequireDefault(_jpeg_camera);

var _errors = __webpack_require__(2);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canPlay = function canPlay(type) {
    var elem = document.createElement('video');
    return !!(elem.canPlayType && elem.canPlayType(type).replace(/no/, ''));
};

// JpegCamera implementation that uses _getUserMedia_ to capture snapshots,
// _canvas_element_ to display them and optionally _Web_Audio_API_ to play shutter sound.
//
// @private

var JpegCameraHtml5 = function (_JpegCameraBase) {
    _inherits(JpegCameraHtml5, _JpegCameraBase);

    function JpegCameraHtml5(theContainer, options) {
        _classCallCheck(this, JpegCameraHtml5);

        var _this = _possibleConstructorReturn(this, (JpegCameraHtml5.__proto__ || Object.getPrototypeOf(JpegCameraHtml5)).call(this, theContainer, options));

        _this.waitForVideoReadyTimer = null;

        _this.statusChecksCount = 0;
        _this.vorbisAudio = 'audio/ogg; codecs=vorbis';
        _this.mpegAudio = 'audio/mpeg; ';
        _this.message = null;
        _this.videoContainer = null;
        _this.stream = null;
        (0, _autoBind2.default)(_this);
        _this.engineInit();
        return _this;
    }

    _createClass(JpegCameraHtml5, [{
        key: 'destruct',
        value: function destruct() {
            this.waitForVideoReadyTimer = null;

            if (this.video) {
                this.video.pause();
                this.video.src = '';
            }

            if (this.stream) {
                this.stream.getVideoTracks().forEach(function (track) {
                    return track.stop();
                });
                this.stream.getAudioTracks().forEach(function (track) {
                    return track.stop();
                });
            }
        }
    }, {
        key: 'engineInit',
        value: function engineInit() {
            var _this2 = this;

            this.debug('Using HTML5 engine.');

            this.message = document.createElement('div');
            this.message.class = 'message';
            this.message.style.width = '100%';
            this.message.style.height = '100%';
            (0, _jpeg_camera.addPrefixedStyle)(this.message, 'boxSizing', 'border-box');
            this.message.style.overflow = 'hidden';
            this.message.style.textAlign = 'center';
            this.message.style.position = 'absolute';
            this.message.style.zIndex = 3;
            this.message.innerHTML = this.options.accessMessage;

            this.container.appendChild(this.message);

            this.videoContainer = document.createElement('div');
            this.videoContainer.style.overflow = 'hidden';
            this.videoContainer.style.position = 'absolute';
            this.videoContainer.style.zIndex = 1;

            this.container.appendChild(this.videoContainer);
            this.resizeVideoContainer();

            this.video = document.createElement('video');
            this.video.autoplay = true;
            if (this.options.previewMirror) (0, _jpeg_camera.addPrefixedStyle)(this.video, 'transform', 'scalex(-1.0)');

            if (window.AudioContext) {
                if (canPlay(this.vorbisAudio)) {
                    this.loadShutterSound(this.options.shutterOggUrl);
                } else if (canPlay(this.mpegAudio)) {
                    this.loadShutterSound(this.options.shutterMp3Url);
                }
            }

            // XXX In an older spec first parameter was a string
            try {
                return navigator.getUserMedia({ video: { width: { ideal: 1920 } } }, function (stream) {
                    _this2.removeMessage();
                    _this2.stream = stream;

                    if (window.URL) {
                        try {
                            _this2.video.srcObject = stream;
                        } catch (error) {
                            _this2.video.src = URL.createObjectURL(stream);
                        }
                    } else {
                        _this2.video.src = stream;
                    }

                    _this2.blockElementAccess();

                    return _this2.waitForVideoReady();
                }, function (err) {
                    throw new _errors.WebcamError(_errors.WebcamErrors.UNKNOWN_ERROR, err);
                });
            } catch (error) {
                try {
                    return navigator.getUserMedia('video', success.bind(this), failure.bind(this));
                } catch (err) {
                    this.message.innerHTML = '';
                    throw new _errors.WebcamError(_errors.WebcamErrors.GET_MEDIA_FAILED_INIT, err);
                }
            }
        }
    }, {
        key: 'resizePreview',
        value: function resizePreview() {
            this.resizeVideoContainer();
            this.resizeVideoBox();
        }
    }, {
        key: 'resizeVideoContainer',
        value: function resizeVideoContainer() {
            var verticalPadding = Math.floor(this.viewHeight * 0.2);
            var horizontalPadding = Math.floor(this.viewWidth * 0.2);
            this.message.style.paddingTop = verticalPadding + 'px';
            this.message.style.paddingBottom = verticalPadding + 'px';
            this.message.style.paddingLeft = horizontalPadding + 'px';
            this.message.style.paddingRight = horizontalPadding + 'px';
            this.videoContainer.style.width = this.viewWidth + 'px';
            this.videoContainer.style.height = this.viewHeight + 'px';
        }
    }, {
        key: 'enginePlayShutterSound',
        value: function enginePlayShutterSound() {
            if (!this.shutterBuffer) {
                return null;
            }

            var source = this.audioContext.createBufferSource();
            source.buffer = this.shutterBuffer;
            source.connect(this.audioContext.destination);
            return source.start(0);
        }
    }, {
        key: 'engineCapture',
        value: function engineCapture(theSnapshot, mirror, quality, scale) {
            var snapshot = theSnapshot;
            var crop = this.getCaptureCrop();

            var canvas = document.createElement('canvas');
            canvas.width = Math.round(crop.width * scale);
            canvas.height = Math.round(crop.height * scale);

            var context = canvas.getContext('2d');
            context.drawImage(this.video, crop.xOffset, crop.yOffset, crop.width, crop.height, 0, 0, Math.round(crop.width * scale), Math.round(crop.height * scale));

            snapshot.canvas = canvas;
            snapshot.mirror = mirror;
            snapshot.quality = quality;

            return snapshot;
        }
    }, {
        key: 'engineDisplay',
        value: function engineDisplay(snapshot) {
            if (this.displayedcanvas) {
                this.container.removeChild(this.displayedcanvas);
            }

            this.displayedcanvas = snapshot.canvas;
            this.displayedcanvas.style.width = this.viewWidth + 'px';
            this.displayedcanvas.style.height = this.viewHeight + 'px';
            this.displayedcanvas.style.top = 0;
            this.displayedcanvas.style.left = 0;
            this.displayedcanvas.style.position = 'absolute';
            this.displayedcanvas.style.zIndex = 2;
            if (this.options.previewMirror) (0, _jpeg_camera.addPrefixedStyle)(this.displayedcanvas, 'transform', 'scalex(-1.0)');

            return this.container.appendChild(this.displayedcanvas);
        }
    }, {
        key: 'engineGetcanvas',
        value: function engineGetcanvas(snapshot) {
            var canvas = document.createElement('canvas');
            canvas.width = snapshot.canvas.width;
            canvas.height = snapshot.canvas.height;
            var context = canvas.getContext('2d');
            context.drawImage(snapshot.canvas, 0, 0);
            return canvas;
        }
    }, {
        key: 'engineGetImageData',
        value: function engineGetImageData(snapshot) {
            var canvas = snapshot.canvas;
            var context = canvas.getContext('2d');
            return context.getImageData(0, 0, canvas.width, canvas.height);
        }
    }, {
        key: 'engineGetBlob',
        value: function engineGetBlob(snapshot, mime, mirror, quality, callback) {
            var canvas = void 0;
            if (mirror) {
                canvas = document.createElement('canvas');
                canvas.width = snapshot.canvas.width;
                canvas.height = snapshot.canvas.height;

                var context = canvas.getContext('2d');
                context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
                context.drawImage(snapshot.canvas, 0, 0);
            } else {
                canvas = snapshot.canvas;
            }

            return canvas.toBlob(function (blob) {
                return callback(blob);
            }, mime, quality);
        }
    }, {
        key: 'engineDiscard',
        value: function engineDiscard(snapshot) {
            // eslint-disable-next-line no-param-reassign
            return delete snapshot.canvas;
        }
    }, {
        key: 'engineShowStream',
        value: function engineShowStream() {
            if (this.displayedcanvas) {
                this.container.removeChild(this.displayedcanvas);
                this.displayedcanvas = null;
            }
            this.videoContainer.style.display = 'block';
            return null;
        }
    }, {
        key: 'removeMessage',
        value: function removeMessage() {
            this.message.style.display = 'none';
            return null;
        }
    }, {
        key: 'loadShutterSound',
        value: function loadShutterSound(url) {
            if (this.audioContext || !url) {
                return null;
            }

            this.audioContext = new AudioContext();

            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'arraybuffer';

            var that = this;
            request.onload = function () {
                return that.audioContext.decodeAudioData(request.response, function (buffer) {
                    that.shutterBuffer = buffer;
                });
            };
            return request.send();
        }
    }, {
        key: 'waitForVideoReady',
        value: function waitForVideoReady() {
            var videoWidth = parseInt(this.video.videoWidth, 10);
            var videoHeight = parseInt(this.video.videoHeight, 10);

            if (videoWidth > 0 && videoHeight > 0) {
                this.videoContainer.appendChild(this.video);

                this.videoWidth = videoWidth;
                this.videoHeight = videoHeight;

                this.video.style.position = 'relative';
                this.resizeVideoBox();

                return this.prepared(this.videoWidth, this.videoHeight);
            } else if (this.statusChecksCount > 100) {
                throw new _errors.WebcamError(_errors.WebcamError.CAMERA_NOT_READY);
            }
            this.statusChecksCount++;
            var that = this;
            this.waitForVideoReadyTimer = setTimeout(function () {
                return that.waitForVideoReady();
            }, 100);
            return null;
        }
    }, {
        key: 'resizeVideoBox',
        value: function resizeVideoBox() {
            var crop = this.getVideoCrop();
            this.video.style.width = crop.width + 'px';
            this.video.style.height = crop.height + 'px';
            this.video.style.left = crop.xOffset + 'px';
            this.video.style.top = crop.yOffset + 'px';
        }
    }, {
        key: 'getVideoCrop',
        value: function getVideoCrop() {
            var videoScale = void 0;
            var videoRatio = this.videoWidth / this.videoHeight;
            var viewRatio = this.viewWidth / this.viewHeight;

            if (videoRatio >= viewRatio) {
                // fill height, crop width
                this.debug('Filling height');
                videoScale = this.viewHeight / this.videoHeight;
                var scaledVideoWidth = Math.round(this.videoWidth * videoScale);

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
            var scaledVideoHeight = Math.round(this.videoHeight * videoScale);

            return {
                width: this.viewWidth,
                height: scaledVideoHeight,
                xOffset: 0,
                yOffset: -Math.floor((scaledVideoHeight - this.viewHeight) / 2.0)
            };
        }
    }, {
        key: 'getCaptureCrop',
        value: function getCaptureCrop() {
            var videoRatio = this.videoWidth / this.videoHeight;
            var viewRatio = this.viewWidth / this.viewHeight;

            if (videoRatio >= viewRatio) {
                // take full height, crop width
                var snapshotWidth = Math.round(this.videoHeight * viewRatio);

                return {
                    width: snapshotWidth,
                    height: this.videoHeight,
                    xOffset: Math.floor((this.videoWidth - snapshotWidth) / 2.0),
                    yOffset: 0
                };
            }
            // take full width, crop height
            var snapshotHeight = Math.round(this.videoWidth / viewRatio);

            return {
                width: this.videoWidth,
                height: snapshotHeight,
                xOffset: 0,
                yOffset: Math.floor((this.videoHeight - snapshotHeight) / 2.0)
            };
        }
    }]);

    return JpegCameraHtml5;
}(_jpeg_camera2.default);

JpegCameraHtml5.engineCheck = function (success, failure) {
    var canvas = document.createElement('canvas');
    if (canvas.getContext && !canvas.toBlob) {
        failure('JpegCamera: Canvas-to-Blob is not loaded');
    }

    try {
        navigator.getUserMedia({ video: { width: { ideal: 1920 } } }, success, failure);
    } catch (err) {
        failure('getUserMedia could not be initialised.', err);
    }
};

exports.default = JpegCameraHtml5;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoBind = __webpack_require__(0);

var _autoBind2 = _interopRequireDefault(_autoBind);

var _stats = __webpack_require__(6);

var _stats2 = _interopRequireDefault(_stats);

var _jpeg_camera = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Snapshot taken using {JpegCamera}.
var Snapshot = function () {

  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private
  function Snapshot(camera, options) {
    _classCallCheck(this, Snapshot);

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

    (0, _autoBind2.default)(this);
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


  _createClass(Snapshot, [{
    key: 'show',
    value: function show() {
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

  }, {
    key: 'hide',
    value: function hide() {
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

  }, {
    key: 'getStats',
    value: function getStats(callback) {
      var _this = this;

      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      return this.getImageData(function (data) {
        return _this.calculateStats(data, callback);
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
    // not support `canvas` element. Call {isCanvasSupported} to learn
    // whether you can use this method.
    //
    // @param callback [Function] Function to call when `canvas` element is
    //   available. Snapshot object will be available as `this`, the `canvas`
    //   element will be passed as the first argument.
    //
    // @return [Boolean] Whether canvas is supported in this browser.

  }, {
    key: 'getCanvas',
    value: function getCanvas(callback) {
      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      if (!(0, _jpeg_camera.isCanvasSupported)()) {
        return false;
      }

      var that = this;
      this.getCanvasTimeout = setTimeout(function () {
        if (!that.extraCanvas) {
          that.extraCanvas = that.camera.engineGetCanvas(that);
        }
        (0, _jpeg_camera.addPrefixedStyle)(that.extraCanvas, 'transform', 'scalex(-1.0)');
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

  }, {
    key: 'getBlob',
    value: function getBlob(callback, mimeType) {
      var theMimeType = mimeType;
      if (theMimeType == null) {
        theMimeType = 'image/jpeg';
      }
      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      if (!(0, _jpeg_camera.isCanvasSupported)()) {
        return false;
      }

      var that = this;
      this.getBlobTimeout = setTimeout(function () {
        if (that.blobMime !== theMimeType) {
          that.blob = null;
        }
        that.blobMime = theMimeType;
        if (that.blob) {
          return callback.call(that, that.blob);
        }
        var mirror = that.options.mirror;
        var quality = that.options.quality;

        return that.camera.engineGetBlob(that, theMimeType, mirror, quality, function (b) {
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

  }, {
    key: 'getImageData',
    value: function getImageData(callback) {
      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      var that = this;
      this.getImageDataTimeout = setTimeout(function () {
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

  }, {
    key: 'discard',
    value: function discard() {
      this.camera.discard(this);
      delete this.extraCanvas;
      delete this.imageData;
      delete this.blob;
    }

    // Snapshot options
    //
    // @nodoc
    // @private

  }, {
    key: 'options',
    value: function options() {
      return Object.assign({}, this.camera.options, this.options, this.uploadOptions);
    }

    // Calculate the snapshot pixel statistics given image data and call callback.
    //
    // @nodoc
    // @private

  }, {
    key: 'calculateStats',
    value: function calculateStats(data, callback) {
      if (!this.stats) {
        var gray = void 0;
        var n = data.width * data.height;
        var sum = 0.0;
        var grayValues = new Array(n);

        for (var i = 0, end = n; i < end; i++) {
          var index = i * 4;
          gray = 0.2126 * data.data[index + 0] + // red
          0.7152 * data.data[index + 1] + // green
          0.0722 * data.data[index + 2]; // blue
          gray = Math.round(gray);

          sum += gray;
          grayValues[i] = gray;
        }

        var mean = Math.round(sum / n);

        var sumOfSquareDistances = 0;
        grayValues.forEach(function (oneGray) {
          // eslint-disable-next-line no-restricted-properties
          sumOfSquareDistances += Math.pow(oneGray - mean, 2);
        });

        this.stats = new _stats2.default();
        this.stats.mean = mean;
        this.stats.std = Math.round(Math.sqrt(sumOfSquareDistances / n));
      }
      return callback.call(this, this.stats);
    }
  }]);

  return Snapshot;
}();

exports.default = Snapshot;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// Contains some pixel statistics of {Snapshot} or camera stream.
//
// Can be retrieved using {JpegCamera#getStats} or {Snapshot#getStats} methods.
//
var Stats = function Stats() {
  _classCallCheck(this, Stats);

  this.mean = null;
  this.std = null;
}
// @property [Float] mean gray value of pixels (0-255)


// @property [Float] standard deviation of gray values
;

exports.default = Stats;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    /*
     *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var SDPUtils = require('sdp');

    function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

      // Map ICE parameters (ufrag, pwd) to SDP.
      sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());

      // Map DTLS parameters to SDP.
      sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : dtlsRole || 'active');

      sdp += 'a=mid:' + transceiver.mid + '\r\n';

      if (transceiver.direction) {
        sdp += 'a=' + transceiver.direction + '\r\n';
      } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
        sdp += 'a=sendrecv\r\n';
      } else if (transceiver.rtpSender) {
        sdp += 'a=sendonly\r\n';
      } else if (transceiver.rtpReceiver) {
        sdp += 'a=recvonly\r\n';
      } else {
        sdp += 'a=inactive\r\n';
      }

      if (transceiver.rtpSender) {
        // spec.
        var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
        sdp += 'a=' + msid;

        // for Chrome.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;
        if (transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
          sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
        }
      }
      // FIXME: this should be written by writeRtpDescription.
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
      if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
      }
      return sdp;
    }

    // Edge does not like
    // 1) stun: filtered after 14393 unless ?transport=udp is present
    // 2) turn: that does not have all of turn:host:port?transport=udp
    // 3) turn: with ipv6 addresses
    // 4) turn: occurring muliple times
    function filterIceServers(iceServers, edgeVersion) {
      var hasTurn = false;
      iceServers = JSON.parse(JSON.stringify(iceServers));
      return iceServers.filter(function (server) {
        if (server && (server.urls || server.url)) {
          var urls = server.urls || server.url;
          if (server.url && !server.urls) {
            console.warn('RTCIceServer.url is deprecated! Use urls instead.');
          }
          var isString = typeof urls === 'string';
          if (isString) {
            urls = [urls];
          }
          urls = urls.filter(function (url) {
            var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

            if (validTurn) {
              hasTurn = true;
              return true;
            }
            return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
          });

          delete server.url;
          server.urls = isString ? urls[0] : urls;
          return !!urls.length;
        }
        return false;
      });
    }

    // Determines the intersection of local and remote capabilities.
    function getCommonCapabilities(localCapabilities, remoteCapabilities) {
      var commonCapabilities = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: []
      };

      var findCodecByPayloadType = function findCodecByPayloadType(pt, codecs) {
        pt = parseInt(pt, 10);
        for (var i = 0; i < codecs.length; i++) {
          if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
            return codecs[i];
          }
        }
      };

      var rtxCapabilityMatches = function rtxCapabilityMatches(lRtx, rRtx, lCodecs, rCodecs) {
        var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
        var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
        return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
      };

      localCapabilities.codecs.forEach(function (lCodec) {
        for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
          var rCodec = remoteCapabilities.codecs[i];
          if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
            if (lCodec.name.toLowerCase() === 'rtx' && lCodec.parameters && rCodec.parameters.apt) {
              // for RTX we need to find the local rtx that has a apt
              // which points to the same local codec as the remote one.
              if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) {
                continue;
              }
            }
            rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
            // number of channels is the highest common number of channels
            rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels);
            // push rCodec so we reply with offerer payload type
            commonCapabilities.codecs.push(rCodec);

            // determine common feedback mechanisms
            rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
              for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                  return true;
                }
              }
              return false;
            });
            // FIXME: also need to determine .parameters
            //  see https://github.com/openpeer/ortc/issues/569
            break;
          }
        }
      });

      localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
        for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
          var rHeaderExtension = remoteCapabilities.headerExtensions[i];
          if (lHeaderExtension.uri === rHeaderExtension.uri) {
            commonCapabilities.headerExtensions.push(rHeaderExtension);
            break;
          }
        }
      });

      // FIXME: fecMechanisms
      return commonCapabilities;
    }

    // is action=setLocalDescription with type allowed in signalingState
    function isActionAllowedInSignalingState(action, type, signalingState) {
      return {
        offer: {
          setLocalDescription: ['stable', 'have-local-offer'],
          setRemoteDescription: ['stable', 'have-remote-offer']
        },
        answer: {
          setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
          setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
        }
      }[type][action].indexOf(signalingState) !== -1;
    }

    function maybeAddCandidate(iceTransport, candidate) {
      // Edge's internal representation adds some fields therefore
      // not all fieldѕ are taken into account.
      var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
      });
      if (!alreadyAdded) {
        iceTransport.addRemoteCandidate(candidate);
      }
      return !alreadyAdded;
    }

    module.exports = function (window, edgeVersion) {
      var RTCPeerConnection = function RTCPeerConnection(config) {
        var self = this;

        var _eventTarget = document.createDocumentFragment();
        ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (method) {
          self[method] = _eventTarget[method].bind(_eventTarget);
        });

        this.onicecandidate = null;
        this.onaddstream = null;
        this.ontrack = null;
        this.onremovestream = null;
        this.onsignalingstatechange = null;
        this.oniceconnectionstatechange = null;
        this.onicegatheringstatechange = null;
        this.onnegotiationneeded = null;
        this.ondatachannel = null;
        this.canTrickleIceCandidates = null;

        this.needNegotiation = false;

        this.localStreams = [];
        this.remoteStreams = [];

        this.localDescription = null;
        this.remoteDescription = null;

        this.signalingState = 'stable';
        this.iceConnectionState = 'new';
        this.iceGatheringState = 'new';

        config = JSON.parse(JSON.stringify(config || {}));

        this.usingBundle = config.bundlePolicy === 'max-bundle';
        if (config.rtcpMuxPolicy === 'negotiate') {
          var e = new Error('rtcpMuxPolicy \'negotiate\' is not supported');
          e.name = 'NotSupportedError';
          throw e;
        } else if (!config.rtcpMuxPolicy) {
          config.rtcpMuxPolicy = 'require';
        }

        switch (config.iceTransportPolicy) {
          case 'all':
          case 'relay':
            break;
          default:
            config.iceTransportPolicy = 'all';
            break;
        }

        switch (config.bundlePolicy) {
          case 'balanced':
          case 'max-compat':
          case 'max-bundle':
            break;
          default:
            config.bundlePolicy = 'balanced';
            break;
        }

        config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

        this._iceGatherers = [];
        if (config.iceCandidatePoolSize) {
          for (var i = config.iceCandidatePoolSize; i > 0; i--) {
            this._iceGatherers = new window.RTCIceGatherer({
              iceServers: config.iceServers,
              gatherPolicy: config.iceTransportPolicy
            });
          }
        } else {
          config.iceCandidatePoolSize = 0;
        }

        this._config = config;

        // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
        // everything that is needed to describe a SDP m-line.
        this.transceivers = [];

        this._sdpSessionId = SDPUtils.generateSessionId();
        this._sdpSessionVersion = 0;

        this._dtlsRole = undefined; // role for a=setup to use in answers.
      };

      RTCPeerConnection.prototype._emitGatheringStateChange = function () {
        var event = new Event('icegatheringstatechange');
        this.dispatchEvent(event);
        if (typeof this.onicegatheringstatechange === 'function') {
          this.onicegatheringstatechange(event);
        }
      };

      RTCPeerConnection.prototype.getConfiguration = function () {
        return this._config;
      };

      RTCPeerConnection.prototype.getLocalStreams = function () {
        return this.localStreams;
      };

      RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this.remoteStreams;
      };

      // internal helper to create a transceiver object.
      // (whih is not yet the same as the WebRTC 1.0 transceiver)
      RTCPeerConnection.prototype._createTransceiver = function (kind) {
        var hasBundleTransport = this.transceivers.length > 0;
        var transceiver = {
          track: null,
          iceGatherer: null,
          iceTransport: null,
          dtlsTransport: null,
          localCapabilities: null,
          remoteCapabilities: null,
          rtpSender: null,
          rtpReceiver: null,
          kind: kind,
          mid: null,
          sendEncodingParameters: null,
          recvEncodingParameters: null,
          stream: null,
          wantReceive: true
        };
        if (this.usingBundle && hasBundleTransport) {
          transceiver.iceTransport = this.transceivers[0].iceTransport;
          transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
        } else {
          var transports = this._createIceAndDtlsTransports();
          transceiver.iceTransport = transports.iceTransport;
          transceiver.dtlsTransport = transports.dtlsTransport;
        }
        this.transceivers.push(transceiver);
        return transceiver;
      };

      RTCPeerConnection.prototype.addTrack = function (track, stream) {
        var transceiver;
        for (var i = 0; i < this.transceivers.length; i++) {
          if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
            transceiver = this.transceivers[i];
          }
        }
        if (!transceiver) {
          transceiver = this._createTransceiver(track.kind);
        }

        this._maybeFireNegotiationNeeded();

        if (this.localStreams.indexOf(stream) === -1) {
          this.localStreams.push(stream);
        }

        transceiver.track = track;
        transceiver.stream = stream;
        transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
        return transceiver.rtpSender;
      };

      RTCPeerConnection.prototype.addStream = function (stream) {
        var self = this;
        if (edgeVersion >= 15025) {
          stream.getTracks().forEach(function (track) {
            self.addTrack(track, stream);
          });
        } else {
          // Clone is necessary for local demos mostly, attaching directly
          // to two different senders does not work (build 10547).
          // Fixed in 15025 (or earlier)
          var clonedStream = stream.clone();
          stream.getTracks().forEach(function (track, idx) {
            var clonedTrack = clonedStream.getTracks()[idx];
            track.addEventListener('enabled', function (event) {
              clonedTrack.enabled = event.enabled;
            });
          });
          clonedStream.getTracks().forEach(function (track) {
            self.addTrack(track, clonedStream);
          });
        }
      };

      RTCPeerConnection.prototype.removeStream = function (stream) {
        var idx = this.localStreams.indexOf(stream);
        if (idx > -1) {
          this.localStreams.splice(idx, 1);
          this._maybeFireNegotiationNeeded();
        }
      };

      RTCPeerConnection.prototype.getSenders = function () {
        return this.transceivers.filter(function (transceiver) {
          return !!transceiver.rtpSender;
        }).map(function (transceiver) {
          return transceiver.rtpSender;
        });
      };

      RTCPeerConnection.prototype.getReceivers = function () {
        return this.transceivers.filter(function (transceiver) {
          return !!transceiver.rtpReceiver;
        }).map(function (transceiver) {
          return transceiver.rtpReceiver;
        });
      };

      RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
        var self = this;
        if (usingBundle && sdpMLineIndex > 0) {
          return this.transceivers[0].iceGatherer;
        } else if (this._iceGatherers.length) {
          return this._iceGatherers.shift();
        }
        var iceGatherer = new window.RTCIceGatherer({
          iceServers: this._config.iceServers,
          gatherPolicy: this._config.iceTransportPolicy
        });
        Object.defineProperty(iceGatherer, 'state', { value: 'new', writable: true });

        this.transceivers[sdpMLineIndex].candidates = [];
        this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
          var end = !event.candidate || Object.keys(event.candidate).length === 0;
          // polyfill since RTCIceGatherer.state is not implemented in
          // Edge 10547 yet.
          iceGatherer.state = end ? 'completed' : 'gathering';
          if (self.transceivers[sdpMLineIndex].candidates !== null) {
            self.transceivers[sdpMLineIndex].candidates.push(event.candidate);
          }
        };
        iceGatherer.addEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
        return iceGatherer;
      };

      // start gathering from an RTCIceGatherer.
      RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
        var self = this;
        var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
        if (iceGatherer.onlocalcandidate) {
          return;
        }
        var candidates = this.transceivers[sdpMLineIndex].candidates;
        this.transceivers[sdpMLineIndex].candidates = null;
        iceGatherer.removeEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
        iceGatherer.onlocalcandidate = function (evt) {
          if (self.usingBundle && sdpMLineIndex > 0) {
            // if we know that we use bundle we can drop candidates with
            // ѕdpMLineIndex > 0. If we don't do this then our state gets
            // confused since we dispose the extra ice gatherer.
            return;
          }
          var event = new Event('icecandidate');
          event.candidate = { sdpMid: mid, sdpMLineIndex: sdpMLineIndex };

          var cand = evt.candidate;
          // Edge emits an empty object for RTCIceCandidateComplete‥
          var end = !cand || Object.keys(cand).length === 0;
          if (end) {
            // polyfill since RTCIceGatherer.state is not implemented in
            // Edge 10547 yet.
            if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
              iceGatherer.state = 'completed';
            }
          } else {
            if (iceGatherer.state === 'new') {
              iceGatherer.state = 'gathering';
            }
            // RTCIceCandidate doesn't have a component, needs to be added
            cand.component = 1;
            event.candidate.candidate = SDPUtils.writeCandidate(cand);
          }

          // update local description.
          var sections = SDPUtils.splitSections(self.localDescription.sdp);
          if (!end) {
            sections[event.candidate.sdpMLineIndex + 1] += 'a=' + event.candidate.candidate + '\r\n';
          } else {
            sections[event.candidate.sdpMLineIndex + 1] += 'a=end-of-candidates\r\n';
          }
          self.localDescription.sdp = sections.join('');
          var complete = self.transceivers.every(function (transceiver) {
            return transceiver.iceGatherer && transceiver.iceGatherer.state === 'completed';
          });

          if (self.iceGatheringState !== 'gathering') {
            self.iceGatheringState = 'gathering';
            self._emitGatheringStateChange();
          }

          // Emit candidate. Also emit null candidate when all gatherers are
          // complete.
          if (!end) {
            self.dispatchEvent(event);
            if (typeof self.onicecandidate === 'function') {
              self.onicecandidate(event);
            }
          }
          if (complete) {
            self.dispatchEvent(new Event('icecandidate'));
            if (typeof self.onicecandidate === 'function') {
              self.onicecandidate(new Event('icecandidate'));
            }
            self.iceGatheringState = 'complete';
            self._emitGatheringStateChange();
          }
        };

        // emit already gathered candidates.
        window.setTimeout(function () {
          candidates.forEach(function (candidate) {
            var e = new Event('RTCIceGatherEvent');
            e.candidate = candidate;
            iceGatherer.onlocalcandidate(e);
          });
        }, 0);
      };

      // Create ICE transport and DTLS transport.
      RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
        var self = this;
        var iceTransport = new window.RTCIceTransport(null);
        iceTransport.onicestatechange = function () {
          self._updateConnectionState();
        };

        var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
        dtlsTransport.ondtlsstatechange = function () {
          self._updateConnectionState();
        };
        dtlsTransport.onerror = function () {
          // onerror does not set state to failed by itself.
          Object.defineProperty(dtlsTransport, 'state', { value: 'failed', writable: true });
          self._updateConnectionState();
        };

        return {
          iceTransport: iceTransport,
          dtlsTransport: dtlsTransport
        };
      };

      // Destroy ICE gatherer, ICE transport and DTLS transport.
      // Without triggering the callbacks.
      RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
        var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
        if (iceGatherer) {
          delete iceGatherer.onlocalcandidate;
          delete this.transceivers[sdpMLineIndex].iceGatherer;
        }
        var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
        if (iceTransport) {
          delete iceTransport.onicestatechange;
          delete this.transceivers[sdpMLineIndex].iceTransport;
        }
        var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
        if (dtlsTransport) {
          delete dtlsTransport.ondtlsstatechange;
          delete dtlsTransport.onerror;
          delete this.transceivers[sdpMLineIndex].dtlsTransport;
        }
      };

      // Start the RTP Sender and Receiver for a transceiver.
      RTCPeerConnection.prototype._transceive = function (transceiver, send, recv) {
        var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
        if (send && transceiver.rtpSender) {
          params.encodings = transceiver.sendEncodingParameters;
          params.rtcp = {
            cname: SDPUtils.localCName,
            compound: transceiver.rtcpParameters.compound
          };
          if (transceiver.recvEncodingParameters.length) {
            params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
          }
          transceiver.rtpSender.send(params);
        }
        if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
          // remove RTX field in Edge 14942
          if (transceiver.kind === 'video' && transceiver.recvEncodingParameters && edgeVersion < 15019) {
            transceiver.recvEncodingParameters.forEach(function (p) {
              delete p.rtx;
            });
          }
          params.encodings = transceiver.recvEncodingParameters;
          params.rtcp = {
            cname: transceiver.rtcpParameters.cname,
            compound: transceiver.rtcpParameters.compound
          };
          if (transceiver.sendEncodingParameters.length) {
            params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
          }
          transceiver.rtpReceiver.receive(params);
        }
      };

      RTCPeerConnection.prototype.setLocalDescription = function (description) {
        var self = this;
        var args = arguments;

        if (!isActionAllowedInSignalingState('setLocalDescription', description.type, this.signalingState)) {
          return new Promise(function (resolve, reject) {
            var e = new Error('Can not set local ' + description.type + ' in state ' + self.signalingState);
            e.name = 'InvalidStateError';
            if (args.length > 2 && typeof args[2] === 'function') {
              args[2].apply(null, [e]);
            }
            reject(e);
          });
        }

        var sections;
        var sessionpart;
        if (description.type === 'offer') {
          // VERY limited support for SDP munging. Limited to:
          // * changing the order of codecs
          sections = SDPUtils.splitSections(description.sdp);
          sessionpart = sections.shift();
          sections.forEach(function (mediaSection, sdpMLineIndex) {
            var caps = SDPUtils.parseRtpParameters(mediaSection);
            self.transceivers[sdpMLineIndex].localCapabilities = caps;
          });

          this.transceivers.forEach(function (transceiver, sdpMLineIndex) {
            self._gather(transceiver.mid, sdpMLineIndex);
          });
        } else if (description.type === 'answer') {
          sections = SDPUtils.splitSections(self.remoteDescription.sdp);
          sessionpart = sections.shift();
          var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
          sections.forEach(function (mediaSection, sdpMLineIndex) {
            var transceiver = self.transceivers[sdpMLineIndex];
            var iceGatherer = transceiver.iceGatherer;
            var iceTransport = transceiver.iceTransport;
            var dtlsTransport = transceiver.dtlsTransport;
            var localCapabilities = transceiver.localCapabilities;
            var remoteCapabilities = transceiver.remoteCapabilities;

            // treat bundle-only as not-rejected.
            var rejected = SDPUtils.isRejected(mediaSection) && !SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 1;

            if (!rejected && !transceiver.isDatachannel) {
              var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
              var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
              if (isIceLite) {
                remoteDtlsParameters.role = 'server';
              }

              if (!self.usingBundle || sdpMLineIndex === 0) {
                self._gather(transceiver.mid, sdpMLineIndex);
                if (iceTransport.state === 'new') {
                  iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? 'controlling' : 'controlled');
                }
                if (dtlsTransport.state === 'new') {
                  dtlsTransport.start(remoteDtlsParameters);
                }
              }

              // Calculate intersection of capabilities.
              var params = getCommonCapabilities(localCapabilities, remoteCapabilities);

              // Start the RTCRtpSender. The RTCRtpReceiver for this
              // transceiver has already been started in setRemoteDescription.
              self._transceive(transceiver, params.codecs.length > 0, false);
            }
          });
        }

        this.localDescription = {
          type: description.type,
          sdp: description.sdp
        };
        switch (description.type) {
          case 'offer':
            this._updateSignalingState('have-local-offer');
            break;
          case 'answer':
            this._updateSignalingState('stable');
            break;
          default:
            throw new TypeError('unsupported type "' + description.type + '"');
        }

        // If a success callback was provided, emit ICE candidates after it
        // has been executed. Otherwise, emit callback after the Promise is
        // resolved.
        var cb = arguments.length > 1 && typeof arguments[1] === 'function' && arguments[1];
        return new Promise(function (resolve) {
          if (cb) {
            cb.apply(null);
          }
          resolve();
        });
      };

      RTCPeerConnection.prototype.setRemoteDescription = function (description) {
        var self = this;
        var args = arguments;

        if (!isActionAllowedInSignalingState('setRemoteDescription', description.type, this.signalingState)) {
          return new Promise(function (resolve, reject) {
            var e = new Error('Can not set remote ' + description.type + ' in state ' + self.signalingState);
            e.name = 'InvalidStateError';
            if (args.length > 2 && typeof args[2] === 'function') {
              args[2].apply(null, [e]);
            }
            reject(e);
          });
        }

        var streams = {};
        this.remoteStreams.forEach(function (stream) {
          streams[stream.id] = stream;
        });
        var receiverList = [];
        var sections = SDPUtils.splitSections(description.sdp);
        var sessionpart = sections.shift();
        var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
        var usingBundle = SDPUtils.matchPrefix(sessionpart, 'a=group:BUNDLE ').length > 0;
        this.usingBundle = usingBundle;
        var iceOptions = SDPUtils.matchPrefix(sessionpart, 'a=ice-options:')[0];
        if (iceOptions) {
          this.canTrickleIceCandidates = iceOptions.substr(14).split(' ').indexOf('trickle') >= 0;
        } else {
          this.canTrickleIceCandidates = false;
        }

        sections.forEach(function (mediaSection, sdpMLineIndex) {
          var lines = SDPUtils.splitLines(mediaSection);
          var kind = SDPUtils.getKind(mediaSection);
          // treat bundle-only as not-rejected.
          var rejected = SDPUtils.isRejected(mediaSection) && !SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 1;
          var protocol = lines[0].substr(2).split(' ')[2];

          var direction = SDPUtils.getDirection(mediaSection, sessionpart);
          var remoteMsid = SDPUtils.parseMsid(mediaSection);

          var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

          // Reject datachannels which are not implemented yet.
          if (kind === 'application' && protocol === 'DTLS/SCTP') {
            self.transceivers[sdpMLineIndex] = {
              mid: mid,
              isDatachannel: true
            };
            return;
          }

          var transceiver;
          var iceGatherer;
          var iceTransport;
          var dtlsTransport;
          var rtpReceiver;
          var sendEncodingParameters;
          var recvEncodingParameters;
          var localCapabilities;

          var track;
          // FIXME: ensure the mediaSection has rtcp-mux set.
          var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
          var remoteIceParameters;
          var remoteDtlsParameters;
          if (!rejected) {
            remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
            remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
            remoteDtlsParameters.role = 'client';
          }
          recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);

          var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

          var isComplete = SDPUtils.matchPrefix(mediaSection, 'a=end-of-candidates', sessionpart).length > 0;
          var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:').map(function (cand) {
            return SDPUtils.parseCandidate(cand);
          }).filter(function (cand) {
            return cand.component === 1;
          });

          // Check if we can use BUNDLE and dispose transports.
          if ((description.type === 'offer' || description.type === 'answer') && !rejected && usingBundle && sdpMLineIndex > 0 && self.transceivers[sdpMLineIndex]) {
            self._disposeIceAndDtlsTransports(sdpMLineIndex);
            self.transceivers[sdpMLineIndex].iceGatherer = self.transceivers[0].iceGatherer;
            self.transceivers[sdpMLineIndex].iceTransport = self.transceivers[0].iceTransport;
            self.transceivers[sdpMLineIndex].dtlsTransport = self.transceivers[0].dtlsTransport;
            if (self.transceivers[sdpMLineIndex].rtpSender) {
              self.transceivers[sdpMLineIndex].rtpSender.setTransport(self.transceivers[0].dtlsTransport);
            }
            if (self.transceivers[sdpMLineIndex].rtpReceiver) {
              self.transceivers[sdpMLineIndex].rtpReceiver.setTransport(self.transceivers[0].dtlsTransport);
            }
          }
          if (description.type === 'offer' && !rejected) {
            transceiver = self.transceivers[sdpMLineIndex] || self._createTransceiver(kind);
            transceiver.mid = mid;

            if (!transceiver.iceGatherer) {
              transceiver.iceGatherer = self._createIceGatherer(sdpMLineIndex, usingBundle);
            }

            if (cands.length && transceiver.iceTransport.state === 'new') {
              if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
                transceiver.iceTransport.setRemoteCandidates(cands);
              } else {
                cands.forEach(function (candidate) {
                  maybeAddCandidate(transceiver.iceTransport, candidate);
                });
              }
            }

            localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

            // filter RTX until additional stuff needed for RTX is implemented
            // in adapter.js
            if (edgeVersion < 15019) {
              localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
                return codec.name !== 'rtx';
              });
            }

            sendEncodingParameters = transceiver.sendEncodingParameters || [{
              ssrc: (2 * sdpMLineIndex + 2) * 1001
            }];

            var isNewTrack = false;
            if (direction === 'sendrecv' || direction === 'sendonly') {
              isNewTrack = !transceiver.rtpReceiver;
              rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

              if (isNewTrack) {
                var stream;
                track = rtpReceiver.track;
                // FIXME: does not work with Plan B.
                if (remoteMsid) {
                  if (!streams[remoteMsid.stream]) {
                    streams[remoteMsid.stream] = new window.MediaStream();
                    Object.defineProperty(streams[remoteMsid.stream], 'id', {
                      get: function get() {
                        return remoteMsid.stream;
                      }
                    });
                  }
                  Object.defineProperty(track, 'id', {
                    get: function get() {
                      return remoteMsid.track;
                    }
                  });
                  stream = streams[remoteMsid.stream];
                } else {
                  if (!streams.default) {
                    streams.default = new window.MediaStream();
                  }
                  stream = streams.default;
                }
                stream.addTrack(track);
                receiverList.push([track, rtpReceiver, stream]);
              }
            }

            transceiver.localCapabilities = localCapabilities;
            transceiver.remoteCapabilities = remoteCapabilities;
            transceiver.rtpReceiver = rtpReceiver;
            transceiver.rtcpParameters = rtcpParameters;
            transceiver.sendEncodingParameters = sendEncodingParameters;
            transceiver.recvEncodingParameters = recvEncodingParameters;

            // Start the RTCRtpReceiver now. The RTPSender is started in
            // setLocalDescription.
            self._transceive(self.transceivers[sdpMLineIndex], false, isNewTrack);
          } else if (description.type === 'answer' && !rejected) {
            transceiver = self.transceivers[sdpMLineIndex];
            iceGatherer = transceiver.iceGatherer;
            iceTransport = transceiver.iceTransport;
            dtlsTransport = transceiver.dtlsTransport;
            rtpReceiver = transceiver.rtpReceiver;
            sendEncodingParameters = transceiver.sendEncodingParameters;
            localCapabilities = transceiver.localCapabilities;

            self.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
            self.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
            self.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

            if (cands.length && iceTransport.state === 'new') {
              if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
                iceTransport.setRemoteCandidates(cands);
              } else {
                cands.forEach(function (candidate) {
                  maybeAddCandidate(transceiver.iceTransport, candidate);
                });
              }
            }

            if (!usingBundle || sdpMLineIndex === 0) {
              if (iceTransport.state === 'new') {
                iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
              }
              if (dtlsTransport.state === 'new') {
                dtlsTransport.start(remoteDtlsParameters);
              }
            }

            self._transceive(transceiver, direction === 'sendrecv' || direction === 'recvonly', direction === 'sendrecv' || direction === 'sendonly');

            if (rtpReceiver && (direction === 'sendrecv' || direction === 'sendonly')) {
              track = rtpReceiver.track;
              if (remoteMsid) {
                if (!streams[remoteMsid.stream]) {
                  streams[remoteMsid.stream] = new window.MediaStream();
                }
                streams[remoteMsid.stream].addTrack(track);
                receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
              } else {
                if (!streams.default) {
                  streams.default = new window.MediaStream();
                }
                streams.default.addTrack(track);
                receiverList.push([track, rtpReceiver, streams.default]);
              }
            } else {
              // FIXME: actually the receiver should be created later.
              delete transceiver.rtpReceiver;
            }
          }
        });

        if (this._dtlsRole === undefined) {
          this._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
        }

        this.remoteDescription = {
          type: description.type,
          sdp: description.sdp
        };
        switch (description.type) {
          case 'offer':
            this._updateSignalingState('have-remote-offer');
            break;
          case 'answer':
            this._updateSignalingState('stable');
            break;
          default:
            throw new TypeError('unsupported type "' + description.type + '"');
        }
        Object.keys(streams).forEach(function (sid) {
          var stream = streams[sid];
          if (stream.getTracks().length) {
            if (self.remoteStreams.indexOf(stream) === -1) {
              self.remoteStreams.push(stream);
              var event = new Event('addstream');
              event.stream = stream;
              window.setTimeout(function () {
                self.dispatchEvent(event);
                if (typeof self.onaddstream === 'function') {
                  self.onaddstream(event);
                }
              });
            }

            receiverList.forEach(function (item) {
              var track = item[0];
              var receiver = item[1];
              if (stream.id !== item[2].id) {
                return;
              }
              var trackEvent = new Event('track');
              trackEvent.track = track;
              trackEvent.receiver = receiver;
              trackEvent.transceiver = { receiver: receiver };
              trackEvent.streams = [stream];
              window.setTimeout(function () {
                self.dispatchEvent(trackEvent);
                if (typeof self.ontrack === 'function') {
                  self.ontrack(trackEvent);
                }
              });
            });
          }
        });

        // check whether addIceCandidate({}) was called within four seconds after
        // setRemoteDescription.
        window.setTimeout(function () {
          if (!(self && self.transceivers)) {
            return;
          }
          self.transceivers.forEach(function (transceiver) {
            if (transceiver.iceTransport && transceiver.iceTransport.state === 'new' && transceiver.iceTransport.getRemoteCandidates().length > 0) {
              console.warn('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
              transceiver.iceTransport.addRemoteCandidate({});
            }
          });
        }, 4000);

        return new Promise(function (resolve) {
          if (args.length > 1 && typeof args[1] === 'function') {
            args[1].apply(null);
          }
          resolve();
        });
      };

      RTCPeerConnection.prototype.close = function () {
        this.transceivers.forEach(function (transceiver) {
          /* not yet
          if (transceiver.iceGatherer) {
            transceiver.iceGatherer.close();
          }
          */
          if (transceiver.iceTransport) {
            transceiver.iceTransport.stop();
          }
          if (transceiver.dtlsTransport) {
            transceiver.dtlsTransport.stop();
          }
          if (transceiver.rtpSender) {
            transceiver.rtpSender.stop();
          }
          if (transceiver.rtpReceiver) {
            transceiver.rtpReceiver.stop();
          }
        });
        // FIXME: clean up tracks, local streams, remote streams, etc
        this._updateSignalingState('closed');
      };

      // Update the signaling state.
      RTCPeerConnection.prototype._updateSignalingState = function (newState) {
        this.signalingState = newState;
        var event = new Event('signalingstatechange');
        this.dispatchEvent(event);
        if (typeof this.onsignalingstatechange === 'function') {
          this.onsignalingstatechange(event);
        }
      };

      // Determine whether to fire the negotiationneeded event.
      RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
        var self = this;
        if (this.signalingState !== 'stable' || this.needNegotiation === true) {
          return;
        }
        this.needNegotiation = true;
        window.setTimeout(function () {
          if (self.needNegotiation === false) {
            return;
          }
          self.needNegotiation = false;
          var event = new Event('negotiationneeded');
          self.dispatchEvent(event);
          if (typeof self.onnegotiationneeded === 'function') {
            self.onnegotiationneeded(event);
          }
        }, 0);
      };

      // Update the connection state.
      RTCPeerConnection.prototype._updateConnectionState = function () {
        var newState;
        var states = {
          'new': 0,
          closed: 0,
          connecting: 0,
          checking: 0,
          connected: 0,
          completed: 0,
          disconnected: 0,
          failed: 0
        };
        this.transceivers.forEach(function (transceiver) {
          states[transceiver.iceTransport.state]++;
          states[transceiver.dtlsTransport.state]++;
        });
        // ICETransport.completed and connected are the same for this purpose.
        states.connected += states.completed;

        newState = 'new';
        if (states.failed > 0) {
          newState = 'failed';
        } else if (states.connecting > 0 || states.checking > 0) {
          newState = 'connecting';
        } else if (states.disconnected > 0) {
          newState = 'disconnected';
        } else if (states.new > 0) {
          newState = 'new';
        } else if (states.connected > 0 || states.completed > 0) {
          newState = 'connected';
        }

        if (newState !== this.iceConnectionState) {
          this.iceConnectionState = newState;
          var event = new Event('iceconnectionstatechange');
          this.dispatchEvent(event);
          if (typeof this.oniceconnectionstatechange === 'function') {
            this.oniceconnectionstatechange(event);
          }
        }
      };

      RTCPeerConnection.prototype.createOffer = function () {
        var self = this;
        var args = arguments;

        var offerOptions;
        if (arguments.length === 1 && typeof arguments[0] !== 'function') {
          offerOptions = arguments[0];
        } else if (arguments.length === 3) {
          offerOptions = arguments[2];
        }

        var numAudioTracks = this.transceivers.filter(function (t) {
          return t.kind === 'audio';
        }).length;
        var numVideoTracks = this.transceivers.filter(function (t) {
          return t.kind === 'video';
        }).length;

        // Determine number of audio and video tracks we need to send/recv.
        if (offerOptions) {
          // Reject Chrome legacy constraints.
          if (offerOptions.mandatory || offerOptions.optional) {
            throw new TypeError('Legacy mandatory/optional constraints not supported.');
          }
          if (offerOptions.offerToReceiveAudio !== undefined) {
            if (offerOptions.offerToReceiveAudio === true) {
              numAudioTracks = 1;
            } else if (offerOptions.offerToReceiveAudio === false) {
              numAudioTracks = 0;
            } else {
              numAudioTracks = offerOptions.offerToReceiveAudio;
            }
          }
          if (offerOptions.offerToReceiveVideo !== undefined) {
            if (offerOptions.offerToReceiveVideo === true) {
              numVideoTracks = 1;
            } else if (offerOptions.offerToReceiveVideo === false) {
              numVideoTracks = 0;
            } else {
              numVideoTracks = offerOptions.offerToReceiveVideo;
            }
          }
        }

        this.transceivers.forEach(function (transceiver) {
          if (transceiver.kind === 'audio') {
            numAudioTracks--;
            if (numAudioTracks < 0) {
              transceiver.wantReceive = false;
            }
          } else if (transceiver.kind === 'video') {
            numVideoTracks--;
            if (numVideoTracks < 0) {
              transceiver.wantReceive = false;
            }
          }
        });

        // Create M-lines for recvonly streams.
        while (numAudioTracks > 0 || numVideoTracks > 0) {
          if (numAudioTracks > 0) {
            this._createTransceiver('audio');
            numAudioTracks--;
          }
          if (numVideoTracks > 0) {
            this._createTransceiver('video');
            numVideoTracks--;
          }
        }

        var sdp = SDPUtils.writeSessionBoilerplate(this._sdpSessionId, this._sdpSessionVersion++);
        this.transceivers.forEach(function (transceiver, sdpMLineIndex) {
          // For each track, create an ice gatherer, ice transport,
          // dtls transport, potentially rtpsender and rtpreceiver.
          var track = transceiver.track;
          var kind = transceiver.kind;
          var mid = SDPUtils.generateIdentifier();
          transceiver.mid = mid;

          if (!transceiver.iceGatherer) {
            transceiver.iceGatherer = self._createIceGatherer(sdpMLineIndex, self.usingBundle);
          }

          var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
          // filter RTX until additional stuff needed for RTX is implemented
          // in adapter.js
          if (edgeVersion < 15019) {
            localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
              return codec.name !== 'rtx';
            });
          }
          localCapabilities.codecs.forEach(function (codec) {
            // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
            // by adding level-asymmetry-allowed=1
            if (codec.name === 'H264' && codec.parameters['level-asymmetry-allowed'] === undefined) {
              codec.parameters['level-asymmetry-allowed'] = '1';
            }
          });

          // generate an ssrc now, to be used later in rtpSender.send
          var sendEncodingParameters = transceiver.sendEncodingParameters || [{
            ssrc: (2 * sdpMLineIndex + 1) * 1001
          }];
          if (track) {
            // add RTX
            if (edgeVersion >= 15019 && kind === 'video' && !sendEncodingParameters[0].rtx) {
              sendEncodingParameters[0].rtx = {
                ssrc: sendEncodingParameters[0].ssrc + 1
              };
            }
          }

          if (transceiver.wantReceive) {
            transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
          }

          transceiver.localCapabilities = localCapabilities;
          transceiver.sendEncodingParameters = sendEncodingParameters;
        });

        // always offer BUNDLE and dispose on return if not supported.
        if (this._config.bundlePolicy !== 'max-compat') {
          sdp += 'a=group:BUNDLE ' + this.transceivers.map(function (t) {
            return t.mid;
          }).join(' ') + '\r\n';
        }
        sdp += 'a=ice-options:trickle\r\n';

        this.transceivers.forEach(function (transceiver, sdpMLineIndex) {
          sdp += writeMediaSection(transceiver, transceiver.localCapabilities, 'offer', transceiver.stream, self._dtlsRole);
          sdp += 'a=rtcp-rsize\r\n';

          if (transceiver.iceGatherer && self.iceGatheringState !== 'new' && (sdpMLineIndex === 0 || !self.usingBundle)) {
            transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
              cand.component = 1;
              sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
            });

            if (transceiver.iceGatherer.state === 'completed') {
              sdp += 'a=end-of-candidates\r\n';
            }
          }
        });

        var desc = new window.RTCSessionDescription({
          type: 'offer',
          sdp: sdp
        });
        return new Promise(function (resolve) {
          if (args.length > 0 && typeof args[0] === 'function') {
            args[0].apply(null, [desc]);
            resolve();
            return;
          }
          resolve(desc);
        });
      };

      RTCPeerConnection.prototype.createAnswer = function () {
        var self = this;
        var args = arguments;

        var sdp = SDPUtils.writeSessionBoilerplate(this._sdpSessionId, this._sdpSessionVersion++);
        if (this.usingBundle) {
          sdp += 'a=group:BUNDLE ' + this.transceivers.map(function (t) {
            return t.mid;
          }).join(' ') + '\r\n';
        }
        var mediaSectionsInOffer = SDPUtils.splitSections(this.remoteDescription.sdp).length - 1;
        this.transceivers.forEach(function (transceiver, sdpMLineIndex) {
          if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
            return;
          }
          if (transceiver.isDatachannel) {
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n' + 'c=IN IP4 0.0.0.0\r\n' + 'a=mid:' + transceiver.mid + '\r\n';
            return;
          }

          // FIXME: look at direction.
          if (transceiver.stream) {
            var localTrack;
            if (transceiver.kind === 'audio') {
              localTrack = transceiver.stream.getAudioTracks()[0];
            } else if (transceiver.kind === 'video') {
              localTrack = transceiver.stream.getVideoTracks()[0];
            }
            if (localTrack) {
              // add RTX
              if (edgeVersion >= 15019 && transceiver.kind === 'video' && !transceiver.sendEncodingParameters[0].rtx) {
                transceiver.sendEncodingParameters[0].rtx = {
                  ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
                };
              }
            }
          }

          // Calculate intersection of capabilities.
          var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);

          var hasRtx = commonCapabilities.codecs.filter(function (c) {
            return c.name.toLowerCase() === 'rtx';
          }).length;
          if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
            delete transceiver.sendEncodingParameters[0].rtx;
          }

          sdp += writeMediaSection(transceiver, commonCapabilities, 'answer', transceiver.stream, self._dtlsRole);
          if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
            sdp += 'a=rtcp-rsize\r\n';
          }
        });

        var desc = new window.RTCSessionDescription({
          type: 'answer',
          sdp: sdp
        });
        return new Promise(function (resolve) {
          if (args.length > 0 && typeof args[0] === 'function') {
            args[0].apply(null, [desc]);
            resolve();
            return;
          }
          resolve(desc);
        });
      };

      RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
        var err;
        var sections;
        if (!candidate || candidate.candidate === '') {
          for (var j = 0; j < this.transceivers.length; j++) {
            if (this.transceivers[j].isDatachannel) {
              continue;
            }
            this.transceivers[j].iceTransport.addRemoteCandidate({});
            sections = SDPUtils.splitSections(this.remoteDescription.sdp);
            sections[j + 1] += 'a=end-of-candidates\r\n';
            this.remoteDescription.sdp = sections.join('');
            if (this.usingBundle) {
              break;
            }
          }
        } else if (!(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) {
          throw new TypeError('sdpMLineIndex or sdpMid required');
        } else if (!this.remoteDescription) {
          err = new Error('Can not add ICE candidate without ' + 'a remote description');
          err.name = 'InvalidStateError';
        } else {
          var sdpMLineIndex = candidate.sdpMLineIndex;
          if (candidate.sdpMid) {
            for (var i = 0; i < this.transceivers.length; i++) {
              if (this.transceivers[i].mid === candidate.sdpMid) {
                sdpMLineIndex = i;
                break;
              }
            }
          }
          var transceiver = this.transceivers[sdpMLineIndex];
          if (transceiver) {
            if (transceiver.isDatachannel) {
              return Promise.resolve();
            }
            var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {};
            // Ignore Chrome's invalid candidates since Edge does not like them.
            if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
              return Promise.resolve();
            }
            // Ignore RTCP candidates, we assume RTCP-MUX.
            if (cand.component && cand.component !== 1) {
              return Promise.resolve();
            }
            // when using bundle, avoid adding candidates to the wrong
            // ice transport. And avoid adding candidates added in the SDP.
            if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== this.transceivers[0].iceTransport) {
              if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
                err = new Error('Can not add ICE candidate');
                err.name = 'OperationError';
              }
            }

            if (!err) {
              // update the remoteDescription.
              var candidateString = candidate.candidate.trim();
              if (candidateString.indexOf('a=') === 0) {
                candidateString = candidateString.substr(2);
              }
              sections = SDPUtils.splitSections(this.remoteDescription.sdp);
              sections[sdpMLineIndex + 1] += 'a=' + (cand.type ? candidateString : 'end-of-candidates') + '\r\n';
              this.remoteDescription.sdp = sections.join('');
            }
          } else {
            err = new Error('Can not add ICE candidate');
            err.name = 'OperationError';
          }
        }
        var args = arguments;
        return new Promise(function (resolve, reject) {
          if (err) {
            if (args.length > 2 && typeof args[2] === 'function') {
              args[2].apply(null, [err]);
            }
            reject(err);
          } else {
            if (args.length > 1 && typeof args[1] === 'function') {
              args[1].apply(null);
            }
            resolve();
          }
        });
      };

      RTCPeerConnection.prototype.getStats = function () {
        var promises = [];
        this.transceivers.forEach(function (transceiver) {
          ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(function (method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
        });
        var cb = arguments.length > 1 && typeof arguments[1] === 'function' && arguments[1];
        var fixStatsType = function fixStatsType(stat) {
          return {
            inboundrtp: 'inbound-rtp',
            outboundrtp: 'outbound-rtp',
            candidatepair: 'candidate-pair',
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[stat.type] || stat.type;
        };
        return new Promise(function (resolve) {
          // shim getStats with maplike support
          var results = new Map();
          Promise.all(promises).then(function (res) {
            res.forEach(function (result) {
              Object.keys(result).forEach(function (id) {
                result[id].type = fixStatsType(result[id]);
                results.set(id, result[id]);
              });
            });
            if (cb) {
              cb.apply(null, results);
            }
            resolve(results);
          });
        });
      };
      return RTCPeerConnection;
    };
  }, { "sdp": 2 }], 2: [function (require, module, exports) {
    /* eslint-env node */
    'use strict';

    // SDP helpers.

    var SDPUtils = {};

    // Generate an alphanumeric identifier for cname or mids.
    // TODO: use UUIDs instead? https://gist.github.com/jed/982883
    SDPUtils.generateIdentifier = function () {
      return Math.random().toString(36).substr(2, 10);
    };

    // The RTCP CNAME used by all peerconnections from the same JS.
    SDPUtils.localCName = SDPUtils.generateIdentifier();

    // Splits SDP into lines, dealing with both CRLF and LF.
    SDPUtils.splitLines = function (blob) {
      return blob.trim().split('\n').map(function (line) {
        return line.trim();
      });
    };
    // Splits SDP into sessionpart and mediasections. Ensures CRLF.
    SDPUtils.splitSections = function (blob) {
      var parts = blob.split('\nm=');
      return parts.map(function (part, index) {
        return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
      });
    };

    // Returns lines that start with a certain prefix.
    SDPUtils.matchPrefix = function (blob, prefix) {
      return SDPUtils.splitLines(blob).filter(function (line) {
        return line.indexOf(prefix) === 0;
      });
    };

    // Parses an ICE candidate line. Sample input:
    // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
    // rport 55996"
    SDPUtils.parseCandidate = function (line) {
      var parts;
      // Parse both variants.
      if (line.indexOf('a=candidate:') === 0) {
        parts = line.substring(12).split(' ');
      } else {
        parts = line.substring(10).split(' ');
      }

      var candidate = {
        foundation: parts[0],
        component: parseInt(parts[1], 10),
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
      };

      for (var i = 8; i < parts.length; i += 2) {
        switch (parts[i]) {
          case 'raddr':
            candidate.relatedAddress = parts[i + 1];
            break;
          case 'rport':
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
          case 'tcptype':
            candidate.tcpType = parts[i + 1];
            break;
          case 'ufrag':
            candidate.ufrag = parts[i + 1]; // for backward compability.
            candidate.usernameFragment = parts[i + 1];
            break;
          default:
            // extension handling, in particular ufrag
            candidate[parts[i]] = parts[i + 1];
            break;
        }
      }
      return candidate;
    };

    // Translates a candidate object into SDP candidate attribute.
    SDPUtils.writeCandidate = function (candidate) {
      var sdp = [];
      sdp.push(candidate.foundation);
      sdp.push(candidate.component);
      sdp.push(candidate.protocol.toUpperCase());
      sdp.push(candidate.priority);
      sdp.push(candidate.ip);
      sdp.push(candidate.port);

      var type = candidate.type;
      sdp.push('typ');
      sdp.push(type);
      if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress); // was: relAddr
        sdp.push('rport');
        sdp.push(candidate.relatedPort); // was: relPort
      }
      if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
      }
      if (candidate.ufrag) {
        sdp.push('ufrag');
        sdp.push(candidate.ufrag);
      }
      return 'candidate:' + sdp.join(' ');
    };

    // Parses an ice-options line, returns an array of option tags.
    // a=ice-options:foo bar
    SDPUtils.parseIceOptions = function (line) {
      return line.substr(14).split(' ');
    };

    // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
    // a=rtpmap:111 opus/48000/2
    SDPUtils.parseRtpMap = function (line) {
      var parts = line.substr(9).split(' ');
      var parsed = {
        payloadType: parseInt(parts.shift(), 10) // was: id
      };

      parts = parts[0].split('/');

      parsed.name = parts[0];
      parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
      // was: channels
      parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
      return parsed;
    };

    // Generate an a=rtpmap line from RTCRtpCodecCapability or
    // RTCRtpCodecParameters.
    SDPUtils.writeRtpMap = function (codec) {
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
    };

    // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
    // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
    // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
    SDPUtils.parseExtmap = function (line) {
      var parts = line.substr(9).split(' ');
      return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
        uri: parts[1]
      };
    };

    // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
    // RTCRtpHeaderExtension.
    SDPUtils.writeExtmap = function (headerExtension) {
      return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
    };

    // Parses an ftmp line, returns dictionary. Sample input:
    // a=fmtp:96 vbr=on;cng=on
    // Also deals with vbr=on; cng=on
    SDPUtils.parseFmtp = function (line) {
      var parsed = {};
      var kv;
      var parts = line.substr(line.indexOf(' ') + 1).split(';');
      for (var j = 0; j < parts.length; j++) {
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
      }
      return parsed;
    };

    // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeFmtp = function (codec) {
      var line = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.parameters && Object.keys(codec.parameters).length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function (param) {
          params.push(param + '=' + codec.parameters[param]);
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
      }
      return line;
    };

    // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
    // a=rtcp-fb:98 nack rpsi
    SDPUtils.parseRtcpFb = function (line) {
      var parts = line.substr(line.indexOf(' ') + 1).split(' ');
      return {
        type: parts.shift(),
        parameter: parts.join(' ')
      };
    };
    // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeRtcpFb = function (codec) {
      var lines = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
        // FIXME: special handling for trr-int?
        codec.rtcpFeedback.forEach(function (fb) {
          lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
        });
      }
      return lines;
    };

    // Parses an RFC 5576 ssrc media attribute. Sample input:
    // a=ssrc:3735928559 cname:something
    SDPUtils.parseSsrcMedia = function (line) {
      var sp = line.indexOf(' ');
      var parts = {
        ssrc: parseInt(line.substr(7, sp - 7), 10)
      };
      var colon = line.indexOf(':', sp);
      if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
      } else {
        parts.attribute = line.substr(sp + 1);
      }
      return parts;
    };

    // Extracts the MID (RFC 5888) from a media section.
    // returns the MID or undefined if no mid line was found.
    SDPUtils.getMid = function (mediaSection) {
      var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
      if (mid) {
        return mid.substr(6);
      }
    };

    SDPUtils.parseFingerprint = function (line) {
      var parts = line.substr(14).split(' ');
      return {
        algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
        value: parts[1]
      };
    };

    // Extracts DTLS parameters from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the fingerprint line as input. See also getIceParameters.
    SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
      var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
      // Note: a=setup line is ignored since we use the 'auto' role.
      // Note2: 'algorithm' is not case sensitive except in Edge.
      return {
        role: 'auto',
        fingerprints: lines.map(SDPUtils.parseFingerprint)
      };
    };

    // Serializes DTLS parameters to SDP.
    SDPUtils.writeDtlsParameters = function (params, setupType) {
      var sdp = 'a=setup:' + setupType + '\r\n';
      params.fingerprints.forEach(function (fp) {
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
      });
      return sdp;
    };
    // Parses ICE information from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the ice-ufrag and ice-pwd lines as input.
    SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      // Search in session part, too.
      lines = lines.concat(SDPUtils.splitLines(sessionpart));
      var iceParameters = {
        usernameFragment: lines.filter(function (line) {
          return line.indexOf('a=ice-ufrag:') === 0;
        })[0].substr(12),
        password: lines.filter(function (line) {
          return line.indexOf('a=ice-pwd:') === 0;
        })[0].substr(10)
      };
      return iceParameters;
    };

    // Serializes ICE parameters to SDP.
    SDPUtils.writeIceParameters = function (params) {
      return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
    };

    // Parses the SDP media section and returns RTCRtpParameters.
    SDPUtils.parseRtpParameters = function (mediaSection) {
      var description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      };
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      for (var i = 3; i < mline.length; i++) {
        // find all codecs from mline[3..]
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
          var codec = SDPUtils.parseRtpMap(rtpmapline);
          var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
          // Only the first a=fmtp:<pt> is considered.
          codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
          codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
          description.codecs.push(codec);
          // parse FEC mechanisms from rtpmap lines.
          switch (codec.name.toUpperCase()) {
            case 'RED':
            case 'ULPFEC':
              description.fecMechanisms.push(codec.name.toUpperCase());
              break;
            default:
              // only RED and ULPFEC are recognized as FEC mechanisms.
              break;
          }
        }
      }
      SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
      });
      // FIXME: parse rtcp.
      return description;
    };

    // Generates parts of the SDP media section describing the capabilities /
    // parameters.
    SDPUtils.writeRtpDescription = function (kind, caps) {
      var sdp = '';

      // Build the mline.
      sdp += 'm=' + kind + ' ';
      sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
      sdp += ' UDP/TLS/RTP/SAVPF ';
      sdp += caps.codecs.map(function (codec) {
        if (codec.preferredPayloadType !== undefined) {
          return codec.preferredPayloadType;
        }
        return codec.payloadType;
      }).join(' ') + '\r\n';

      sdp += 'c=IN IP4 0.0.0.0\r\n';
      sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

      // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
      caps.codecs.forEach(function (codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
      });
      var maxptime = 0;
      caps.codecs.forEach(function (codec) {
        if (codec.maxptime > maxptime) {
          maxptime = codec.maxptime;
        }
      });
      if (maxptime > 0) {
        sdp += 'a=maxptime:' + maxptime + '\r\n';
      }
      sdp += 'a=rtcp-mux\r\n';

      caps.headerExtensions.forEach(function (extension) {
        sdp += SDPUtils.writeExtmap(extension);
      });
      // FIXME: write fecMechanisms.
      return sdp;
    };

    // Parses the SDP media section and returns an array of
    // RTCRtpEncodingParameters.
    SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
      var encodingParameters = [];
      var description = SDPUtils.parseRtpParameters(mediaSection);
      var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
      var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

      // filter a=ssrc:... cname:, ignore PlanB-msid
      var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
        return SDPUtils.parseSsrcMedia(line);
      }).filter(function (parts) {
        return parts.attribute === 'cname';
      });
      var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
      var secondarySsrc;

      var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
        var parts = line.split(' ');
        parts.shift();
        return parts.map(function (part) {
          return parseInt(part, 10);
        });
      });
      if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
        secondarySsrc = flows[0][1];
      }

      description.codecs.forEach(function (codec) {
        if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
          var encParam = {
            ssrc: primarySsrc,
            codecPayloadType: parseInt(codec.parameters.apt, 10),
            rtx: {
              ssrc: secondarySsrc
            }
          };
          encodingParameters.push(encParam);
          if (hasRed) {
            encParam = JSON.parse(JSON.stringify(encParam));
            encParam.fec = {
              ssrc: secondarySsrc,
              mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
            };
            encodingParameters.push(encParam);
          }
        }
      });
      if (encodingParameters.length === 0 && primarySsrc) {
        encodingParameters.push({
          ssrc: primarySsrc
        });
      }

      // we support both b=AS and b=TIAS but interpret AS as TIAS.
      var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
      if (bandwidth.length) {
        if (bandwidth[0].indexOf('b=TIAS:') === 0) {
          bandwidth = parseInt(bandwidth[0].substr(7), 10);
        } else if (bandwidth[0].indexOf('b=AS:') === 0) {
          // use formula from JSEP to convert b=AS to TIAS value.
          bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
        } else {
          bandwidth = undefined;
        }
        encodingParameters.forEach(function (params) {
          params.maxBitrate = bandwidth;
        });
      }
      return encodingParameters;
    };

    // parses http://draft.ortc.org/#rtcrtcpparameters*
    SDPUtils.parseRtcpParameters = function (mediaSection) {
      var rtcpParameters = {};

      var cname;
      // Gets the first SSRC. Note that with RTX there might be multiple
      // SSRCs.
      var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
        return SDPUtils.parseSsrcMedia(line);
      }).filter(function (obj) {
        return obj.attribute === 'cname';
      })[0];
      if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
      }

      // Edge uses the compound attribute instead of reducedSize
      // compound is !reducedSize
      var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
      rtcpParameters.reducedSize = rsize.length > 0;
      rtcpParameters.compound = rsize.length === 0;

      // parses the rtcp-mux attrіbute.
      // Note that Edge does not support unmuxed RTCP.
      var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
      rtcpParameters.mux = mux.length > 0;

      return rtcpParameters;
    };

    // parses either a=msid: or a=ssrc:... msid lines and returns
    // the id of the MediaStream and MediaStreamTrack.
    SDPUtils.parseMsid = function (mediaSection) {
      var parts;
      var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
      if (spec.length === 1) {
        parts = spec[0].substr(7).split(' ');
        return { stream: parts[0], track: parts[1] };
      }
      var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
        return SDPUtils.parseSsrcMedia(line);
      }).filter(function (parts) {
        return parts.attribute === 'msid';
      });
      if (planB.length > 0) {
        parts = planB[0].value.split(' ');
        return { stream: parts[0], track: parts[1] };
      }
    };

    // Generate a session ID for SDP.
    // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
    // recommends using a cryptographically random +ve 64-bit value
    // but right now this should be acceptable and within the right range
    SDPUtils.generateSessionId = function () {
      return Math.random().toString().substr(2, 21);
    };

    // Write boilder plate for start of SDP
    // sessId argument is optional - if not supplied it will
    // be generated randomly
    // sessVersion is optional and defaults to 2
    SDPUtils.writeSessionBoilerplate = function (sessId, sessVer) {
      var sessionId;
      var version = sessVer !== undefined ? sessVer : 2;
      if (sessId) {
        sessionId = sessId;
      } else {
        sessionId = SDPUtils.generateSessionId();
      }
      // FIXME: sess-id should be an NTP timestamp.
      return 'v=0\r\n' + 'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
    };

    SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

      // Map ICE parameters (ufrag, pwd) to SDP.
      sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());

      // Map DTLS parameters to SDP.
      sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');

      sdp += 'a=mid:' + transceiver.mid + '\r\n';

      if (transceiver.direction) {
        sdp += 'a=' + transceiver.direction + '\r\n';
      } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
        sdp += 'a=sendrecv\r\n';
      } else if (transceiver.rtpSender) {
        sdp += 'a=sendonly\r\n';
      } else if (transceiver.rtpReceiver) {
        sdp += 'a=recvonly\r\n';
      } else {
        sdp += 'a=inactive\r\n';
      }

      if (transceiver.rtpSender) {
        // spec.
        var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
        sdp += 'a=' + msid;

        // for Chrome.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;
        if (transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
          sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
        }
      }
      // FIXME: this should be written by writeRtpDescription.
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
      if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
      }
      return sdp;
    };

    // Gets the direction from the mediaSection or the sessionpart.
    SDPUtils.getDirection = function (mediaSection, sessionpart) {
      // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
      var lines = SDPUtils.splitLines(mediaSection);
      for (var i = 0; i < lines.length; i++) {
        switch (lines[i]) {
          case 'a=sendrecv':
          case 'a=sendonly':
          case 'a=recvonly':
          case 'a=inactive':
            return lines[i].substr(2);
          default:
          // FIXME: What should happen here?
        }
      }
      if (sessionpart) {
        return SDPUtils.getDirection(sessionpart);
      }
      return 'sendrecv';
    };

    SDPUtils.getKind = function (mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      return mline[0].substr(2);
    };

    SDPUtils.isRejected = function (mediaSection) {
      return mediaSection.split(' ', 2)[1] === '0';
    };

    SDPUtils.parseMLine = function (mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      return {
        kind: mline[0].substr(2),
        port: parseInt(mline[1], 10),
        protocol: mline[2],
        fmt: mline.slice(3).join(' ')
      };
    };

    // Expose public methods.
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') {
      module.exports = SDPUtils;
    }
  }, {}], 3: [function (require, module, exports) {
    (function (global) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */

      'use strict';

      var adapterFactory = require('./adapter_factory.js');
      module.exports = adapterFactory({ window: global.window });
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, { "./adapter_factory.js": 4 }], 4: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */

    'use strict';

    var utils = require('./utils');
    // Shimming starts here.
    module.exports = function (dependencies, opts) {
      var window = dependencies && dependencies.window;

      var options = {
        shimChrome: true,
        shimFirefox: true,
        shimEdge: true,
        shimSafari: true
      };

      for (var key in opts) {
        if (hasOwnProperty.call(opts, key)) {
          options[key] = opts[key];
        }
      }

      // Utils.
      var logging = utils.log;
      var browserDetails = utils.detectBrowser(window);

      // Export to the adapter global object visible in the browser.
      var adapter = {
        browserDetails: browserDetails,
        extractVersion: utils.extractVersion,
        disableLog: utils.disableLog,
        disableWarnings: utils.disableWarnings
      };

      // Uncomment the line below if you want logging to occur, including logging
      // for the switch statement below. Can also be turned on in the browser via
      // adapter.disableLog(false), but then logging from the switch statement below
      // will not appear.
      // require('./utils').disableLog(false);

      // Browser shims.
      var chromeShim = require('./chrome/chrome_shim') || null;
      var edgeShim = require('./edge/edge_shim') || null;
      var firefoxShim = require('./firefox/firefox_shim') || null;
      var safariShim = require('./safari/safari_shim') || null;
      var commonShim = require('./common_shim') || null;

      // Shim browser if found.
      switch (browserDetails.browser) {
        case 'chrome':
          if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
            logging('Chrome shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming chrome.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = chromeShim;
          commonShim.shimCreateObjectURL(window);

          chromeShim.shimGetUserMedia(window);
          chromeShim.shimMediaStream(window);
          chromeShim.shimSourceObject(window);
          chromeShim.shimPeerConnection(window);
          chromeShim.shimOnTrack(window);
          chromeShim.shimAddTrackRemoveTrack(window);
          chromeShim.shimGetSendersWithDtmf(window);

          commonShim.shimRTCIceCandidate(window);
          break;
        case 'firefox':
          if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
            logging('Firefox shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming firefox.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = firefoxShim;
          commonShim.shimCreateObjectURL(window);

          firefoxShim.shimGetUserMedia(window);
          firefoxShim.shimSourceObject(window);
          firefoxShim.shimPeerConnection(window);
          firefoxShim.shimOnTrack(window);
          firefoxShim.shimRemoveStream(window);

          commonShim.shimRTCIceCandidate(window);
          break;
        case 'edge':
          if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
            logging('MS edge shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming edge.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = edgeShim;
          commonShim.shimCreateObjectURL(window);

          edgeShim.shimGetUserMedia(window);
          edgeShim.shimPeerConnection(window);
          edgeShim.shimReplaceTrack(window);

          // the edge shim implements the full RTCIceCandidate object.
          break;
        case 'safari':
          if (!safariShim || !options.shimSafari) {
            logging('Safari shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming safari.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = safariShim;
          commonShim.shimCreateObjectURL(window);

          safariShim.shimRTCIceServerUrls(window);
          safariShim.shimCallbacksAPI(window);
          safariShim.shimLocalStreamsAPI(window);
          safariShim.shimRemoteStreamsAPI(window);
          safariShim.shimTrackEventTransceiver(window);
          safariShim.shimGetUserMedia(window);
          safariShim.shimCreateOfferLegacy(window);

          commonShim.shimRTCIceCandidate(window);
          break;
        default:
          logging('Unsupported browser!');
          break;
      }

      return adapter;
    };
  }, { "./chrome/chrome_shim": 5, "./common_shim": 7, "./edge/edge_shim": 8, "./firefox/firefox_shim": 10, "./safari/safari_shim": 12, "./utils": 13 }], 5: [function (require, module, exports) {

    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var utils = require('../utils.js');
    var logging = utils.log;

    var chromeShim = {
      shimMediaStream: function shimMediaStream(window) {
        window.MediaStream = window.MediaStream || window.webkitMediaStream;
      },

      shimOnTrack: function shimOnTrack(window) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get: function get() {
              return this._ontrack;
            },
            set: function set(f) {
              if (this._ontrack) {
                this.removeEventListener('track', this._ontrack);
              }
              this.addEventListener('track', this._ontrack = f);
            }
          });
          var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
          window.RTCPeerConnection.prototype.setRemoteDescription = function () {
            var pc = this;
            if (!pc._ontrackpoly) {
              pc._ontrackpoly = function (e) {
                // onaddstream does not fire when a track is added to an existing
                // stream. But stream.onaddtrack is implemented so we use that.
                e.stream.addEventListener('addtrack', function (te) {
                  var receiver;
                  if (window.RTCPeerConnection.prototype.getReceivers) {
                    receiver = pc.getReceivers().find(function (r) {
                      return r.track && r.track.id === te.track.id;
                    });
                  } else {
                    receiver = { track: te.track };
                  }

                  var event = new Event('track');
                  event.track = te.track;
                  event.receiver = receiver;
                  event.transceiver = { receiver: receiver };
                  event.streams = [e.stream];
                  pc.dispatchEvent(event);
                });
                e.stream.getTracks().forEach(function (track) {
                  var receiver;
                  if (window.RTCPeerConnection.prototype.getReceivers) {
                    receiver = pc.getReceivers().find(function (r) {
                      return r.track && r.track.id === track.id;
                    });
                  } else {
                    receiver = { track: track };
                  }
                  var event = new Event('track');
                  event.track = track;
                  event.receiver = receiver;
                  event.transceiver = { receiver: receiver };
                  event.streams = [e.stream];
                  pc.dispatchEvent(event);
                });
              };
              pc.addEventListener('addstream', pc._ontrackpoly);
            }
            return origSetRemoteDescription.apply(pc, arguments);
          };
        }
      },

      shimGetSendersWithDtmf: function shimGetSendersWithDtmf(window) {
        // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
          var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
            return {
              track: track,
              get dtmf() {
                if (this._dtmf === undefined) {
                  if (track.kind === 'audio') {
                    this._dtmf = pc.createDTMFSender(track);
                  } else {
                    this._dtmf = null;
                  }
                }
                return this._dtmf;
              },
              _pc: pc
            };
          };

          // augment addTrack when getSenders is not available.
          if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function () {
              this._senders = this._senders || [];
              return this._senders.slice(); // return a copy of the internal state.
            };
            var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
              var pc = this;
              var sender = origAddTrack.apply(pc, arguments);
              if (!sender) {
                sender = shimSenderWithDtmf(pc, track);
                pc._senders.push(sender);
              }
              return sender;
            };

            var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function (sender) {
              var pc = this;
              origRemoveTrack.apply(pc, arguments);
              var idx = pc._senders.indexOf(sender);
              if (idx !== -1) {
                pc._senders.splice(idx, 1);
              }
            };
          }
          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;
            pc._senders = pc._senders || [];
            origAddStream.apply(pc, [stream]);
            stream.getTracks().forEach(function (track) {
              pc._senders.push(shimSenderWithDtmf(pc, track));
            });
          };

          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            pc._senders = pc._senders || [];
            origRemoveStream.apply(pc, [stream]);

            stream.getTracks().forEach(function (track) {
              var sender = pc._senders.find(function (s) {
                return s.track === track;
              });
              if (sender) {
                pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
              }
            });
          };
        } else if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
          var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
          window.RTCPeerConnection.prototype.getSenders = function () {
            var pc = this;
            var senders = origGetSenders.apply(pc, []);
            senders.forEach(function (sender) {
              sender._pc = pc;
            });
            return senders;
          };

          Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get: function get() {
              if (this._dtmf === undefined) {
                if (this.track.kind === 'audio') {
                  this._dtmf = this._pc.createDTMFSender(this.track);
                } else {
                  this._dtmf = null;
                }
              }
              return this._dtmf;
            }
          });
        }
      },

      shimSourceObject: function shimSourceObject(window) {
        var URL = window && window.URL;

        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
          if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
            // Shim the srcObject property, once, when HTMLMediaElement is found.
            Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
              get: function get() {
                return this._srcObject;
              },
              set: function set(stream) {
                var self = this;
                // Use _srcObject as a private property for this shim
                this._srcObject = stream;
                if (this.src) {
                  URL.revokeObjectURL(this.src);
                }

                if (!stream) {
                  this.src = '';
                  return undefined;
                }
                this.src = URL.createObjectURL(stream);
                // We need to recreate the blob url when a track is added or
                // removed. Doing it manually since we want to avoid a recursion.
                stream.addEventListener('addtrack', function () {
                  if (self.src) {
                    URL.revokeObjectURL(self.src);
                  }
                  self.src = URL.createObjectURL(stream);
                });
                stream.addEventListener('removetrack', function () {
                  if (self.src) {
                    URL.revokeObjectURL(self.src);
                  }
                  self.src = URL.createObjectURL(stream);
                });
              }
            });
          }
        }
      },

      shimAddTrackRemoveTrack: function shimAddTrackRemoveTrack(window) {
        var browserDetails = utils.detectBrowser(window);
        // shim addTrack and removeTrack.
        if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 64) {
          return;
        }

        // also shim pc.getLocalStreams when addTrack is shimmed
        // to return the original streams.
        var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
        window.RTCPeerConnection.prototype.getLocalStreams = function () {
          var self = this;
          var nativeStreams = origGetLocalStreams.apply(this);
          self._reverseStreams = self._reverseStreams || {};
          return nativeStreams.map(function (stream) {
            return self._reverseStreams[stream.id];
          });
        };

        var origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function (stream) {
          var pc = this;
          pc._streams = pc._streams || {};
          pc._reverseStreams = pc._reverseStreams || {};

          stream.getTracks().forEach(function (track) {
            var alreadyExists = pc.getSenders().find(function (s) {
              return s.track === track;
            });
            if (alreadyExists) {
              throw new DOMException('Track already exists.', 'InvalidAccessError');
            }
          });
          // Add identity mapping for consistency with addTrack.
          // Unless this is being used with a stream from addTrack.
          if (!pc._reverseStreams[stream.id]) {
            var newStream = new window.MediaStream(stream.getTracks());
            pc._streams[stream.id] = newStream;
            pc._reverseStreams[newStream.id] = stream;
            stream = newStream;
          }
          origAddStream.apply(pc, [stream]);
        };

        var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function (stream) {
          var pc = this;
          pc._streams = pc._streams || {};
          pc._reverseStreams = pc._reverseStreams || {};

          origRemoveStream.apply(pc, [pc._streams[stream.id] || stream]);
          delete pc._reverseStreams[pc._streams[stream.id] ? pc._streams[stream.id].id : stream.id];
          delete pc._streams[stream.id];
        };

        window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
          var pc = this;
          if (pc.signalingState === 'closed') {
            throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
          }
          var streams = [].slice.call(arguments, 1);
          if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
            return t === track;
          })) {
            // this is not fully correct but all we can manage without
            // [[associated MediaStreams]] internal slot.
            throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
          }

          var alreadyExists = pc.getSenders().find(function (s) {
            return s.track === track;
          });
          if (alreadyExists) {
            throw new DOMException('Track already exists.', 'InvalidAccessError');
          }

          pc._streams = pc._streams || {};
          pc._reverseStreams = pc._reverseStreams || {};
          var oldStream = pc._streams[stream.id];
          if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);

            // Trigger ONN async.
            Promise.resolve().then(function () {
              pc.dispatchEvent(new Event('negotiationneeded'));
            });
          } else {
            var newStream = new window.MediaStream([track]);
            pc._streams[stream.id] = newStream;
            pc._reverseStreams[newStream.id] = stream;
            pc.addStream(newStream);
          }
          return pc.getSenders().find(function (s) {
            return s.track === track;
          });
        };

        // replace the internal stream id with the external one and
        // vice versa.
        function replaceInternalStreamId(pc, description) {
          var sdp = description.sdp;
          Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
            var externalStream = pc._reverseStreams[internalId];
            var internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
          });
          return new RTCSessionDescription({
            type: description.type,
            sdp: sdp
          });
        }
        function replaceExternalStreamId(pc, description) {
          var sdp = description.sdp;
          Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
            var externalStream = pc._reverseStreams[internalId];
            var internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
          });
          return new RTCSessionDescription({
            type: description.type,
            sdp: sdp
          });
        }
        ['createOffer', 'createAnswer'].forEach(function (method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function () {
            var pc = this;
            var args = arguments;
            var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
            if (isLegacyCall) {
              return nativeMethod.apply(pc, [function (description) {
                var desc = replaceInternalStreamId(pc, description);
                args[0].apply(null, [desc]);
              }, function (err) {
                if (args[1]) {
                  args[1].apply(null, err);
                }
              }, arguments[2]]);
            }
            return nativeMethod.apply(pc, arguments).then(function (description) {
              return replaceInternalStreamId(pc, description);
            });
          };
        });

        var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
        window.RTCPeerConnection.prototype.setLocalDescription = function () {
          var pc = this;
          if (!arguments.length || !arguments[0].type) {
            return origSetLocalDescription.apply(pc, arguments);
          }
          arguments[0] = replaceExternalStreamId(pc, arguments[0]);
          return origSetLocalDescription.apply(pc, arguments);
        };

        // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

        var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
        Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
          get: function get() {
            var pc = this;
            var description = origLocalDescription.get.apply(this);
            if (description.type === '') {
              return description;
            }
            return replaceInternalStreamId(pc, description);
          }
        });

        window.RTCPeerConnection.prototype.removeTrack = function (sender) {
          var pc = this;
          if (pc.signalingState === 'closed') {
            throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
          }
          // We can not yet check for sender instanceof RTCRtpSender
          // since we shim RTPSender. So we check if sender._pc is set.
          if (!sender._pc) {
            throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
          }
          var isLocal = sender._pc === pc;
          if (!isLocal) {
            throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
          }

          // Search for the native stream the senders track belongs to.
          pc._streams = pc._streams || {};
          var stream;
          Object.keys(pc._streams).forEach(function (streamid) {
            var hasTrack = pc._streams[streamid].getTracks().find(function (track) {
              return sender.track === track;
            });
            if (hasTrack) {
              stream = pc._streams[streamid];
            }
          });

          if (stream) {
            if (stream.getTracks().length === 1) {
              // if this is the last track of the stream, remove the stream. This
              // takes care of any shimmed _senders.
              pc.removeStream(pc._reverseStreams[stream.id]);
            } else {
              // relying on the same odd chrome behaviour as above.
              stream.removeTrack(sender.track);
            }
            pc.dispatchEvent(new Event('negotiationneeded'));
          }
        };
      },

      shimPeerConnection: function shimPeerConnection(window) {
        var browserDetails = utils.detectBrowser(window);

        // The RTCPeerConnection object.
        if (!window.RTCPeerConnection) {
          window.RTCPeerConnection = function (pcConfig, pcConstraints) {
            // Translate iceTransportPolicy to iceTransports,
            // see https://code.google.com/p/webrtc/issues/detail?id=4869
            // this was fixed in M56 along with unprefixing RTCPeerConnection.
            logging('PeerConnection');
            if (pcConfig && pcConfig.iceTransportPolicy) {
              pcConfig.iceTransports = pcConfig.iceTransportPolicy;
            }

            return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype = window.webkitRTCPeerConnection.prototype;
          // wrap static methods. Currently just generateCertificate.
          if (window.webkitRTCPeerConnection.generateCertificate) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function get() {
                return window.webkitRTCPeerConnection.generateCertificate;
              }
            });
          }
        } else {
          // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
          var OrigPeerConnection = window.RTCPeerConnection;
          window.RTCPeerConnection = function (pcConfig, pcConstraints) {
            if (pcConfig && pcConfig.iceServers) {
              var newIceServers = [];
              for (var i = 0; i < pcConfig.iceServers.length; i++) {
                var server = pcConfig.iceServers[i];
                if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                  utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                  server = JSON.parse(JSON.stringify(server));
                  server.urls = server.url;
                  newIceServers.push(server);
                } else {
                  newIceServers.push(pcConfig.iceServers[i]);
                }
              }
              pcConfig.iceServers = newIceServers;
            }
            return new OrigPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
          // wrap static methods. Currently just generateCertificate.
          Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
            get: function get() {
              return OrigPeerConnection.generateCertificate;
            }
          });
        }

        var origGetStats = window.RTCPeerConnection.prototype.getStats;
        window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
          var self = this;
          var args = arguments;

          // If selector is a function then we are in the old style stats so just
          // pass back the original getStats format to avoid breaking old users.
          if (arguments.length > 0 && typeof selector === 'function') {
            return origGetStats.apply(this, arguments);
          }

          // When spec-style getStats is supported, return those when called with
          // either no arguments or the selector argument is null.
          if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
            return origGetStats.apply(this, []);
          }

          var fixChromeStats_ = function fixChromeStats_(response) {
            var standardReport = {};
            var reports = response.result();
            reports.forEach(function (report) {
              var standardStats = {
                id: report.id,
                timestamp: report.timestamp,
                type: {
                  localcandidate: 'local-candidate',
                  remotecandidate: 'remote-candidate'
                }[report.type] || report.type
              };
              report.names().forEach(function (name) {
                standardStats[name] = report.stat(name);
              });
              standardReport[standardStats.id] = standardStats;
            });

            return standardReport;
          };

          // shim getStats with maplike support
          var makeMapStats = function makeMapStats(stats) {
            return new Map(Object.keys(stats).map(function (key) {
              return [key, stats[key]];
            }));
          };

          if (arguments.length >= 2) {
            var successCallbackWrapper_ = function successCallbackWrapper_(response) {
              args[1](makeMapStats(fixChromeStats_(response)));
            };

            return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
          }

          // promise-support
          return new Promise(function (resolve, reject) {
            origGetStats.apply(self, [function (response) {
              resolve(makeMapStats(fixChromeStats_(response)));
            }, reject]);
          }).then(successCallback, errorCallback);
        };

        // add promise support -- natively available in Chrome 51
        if (browserDetails.version < 51) {
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              var args = arguments;
              var self = this;
              var promise = new Promise(function (resolve, reject) {
                nativeMethod.apply(self, [args[0], resolve, reject]);
              });
              if (args.length < 2) {
                return promise;
              }
              return promise.then(function () {
                args[1].apply(null, []);
              }, function (err) {
                if (args.length >= 3) {
                  args[2].apply(null, [err]);
                }
              });
            };
          });
        }

        // promise support for createOffer and createAnswer. Available (without
        // bugs) since M52: crbug/619289
        if (browserDetails.version < 52) {
          ['createOffer', 'createAnswer'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              var self = this;
              if (arguments.length < 1 || arguments.length === 1 && _typeof(arguments[0]) === 'object') {
                var opts = arguments.length === 1 ? arguments[0] : undefined;
                return new Promise(function (resolve, reject) {
                  nativeMethod.apply(self, [resolve, reject, opts]);
                });
              }
              return nativeMethod.apply(this, arguments);
            };
          });
        }

        // shim implicit creation of RTCSessionDescription/RTCIceCandidate
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function () {
            arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

        // support for addIceCandidate(null or undefined)
        var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
        window.RTCPeerConnection.prototype.addIceCandidate = function () {
          if (!arguments[0]) {
            if (arguments[1]) {
              arguments[1].apply(null);
            }
            return Promise.resolve();
          }
          return nativeAddIceCandidate.apply(this, arguments);
        };
      }
    };

    // Expose public methods.
    module.exports = {
      shimMediaStream: chromeShim.shimMediaStream,
      shimOnTrack: chromeShim.shimOnTrack,
      shimAddTrackRemoveTrack: chromeShim.shimAddTrackRemoveTrack,
      shimGetSendersWithDtmf: chromeShim.shimGetSendersWithDtmf,
      shimSourceObject: chromeShim.shimSourceObject,
      shimPeerConnection: chromeShim.shimPeerConnection,
      shimGetUserMedia: require('./getusermedia')
    };
  }, { "../utils.js": 13, "./getusermedia": 6 }], 6: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var utils = require('../utils.js');
    var logging = utils.log;

    // Expose public methods.
    module.exports = function (window) {
      var browserDetails = utils.detectBrowser(window);
      var navigator = window && window.navigator;

      var constraintsToChrome_ = function constraintsToChrome_(c) {
        if ((typeof c === "undefined" ? "undefined" : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
          return c;
        }
        var cc = {};
        Object.keys(c).forEach(function (key) {
          if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
            return;
          }
          var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
          if (r.exact !== undefined && typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          }
          var oldname_ = function oldname_(prefix, name) {
            if (prefix) {
              return prefix + name.charAt(0).toUpperCase() + name.slice(1);
            }
            return name === 'deviceId' ? 'sourceId' : name;
          };
          if (r.ideal !== undefined) {
            cc.optional = cc.optional || [];
            var oc = {};
            if (typeof r.ideal === 'number') {
              oc[oldname_('min', key)] = r.ideal;
              cc.optional.push(oc);
              oc = {};
              oc[oldname_('max', key)] = r.ideal;
              cc.optional.push(oc);
            } else {
              oc[oldname_('', key)] = r.ideal;
              cc.optional.push(oc);
            }
          }
          if (r.exact !== undefined && typeof r.exact !== 'number') {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_('', key)] = r.exact;
          } else {
            ['min', 'max'].forEach(function (mix) {
              if (r[mix] !== undefined) {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_(mix, key)] = r[mix];
              }
            });
          }
        });
        if (c.advanced) {
          cc.optional = (cc.optional || []).concat(c.advanced);
        }
        return cc;
      };

      var shimConstraints_ = function shimConstraints_(constraints, func) {
        if (browserDetails.version >= 61) {
          return func(constraints);
        }
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && _typeof(constraints.audio) === 'object') {
          var remap = function remap(obj, a, b) {
            if (a in obj && !(b in obj)) {
              obj[b] = obj[a];
              delete obj[a];
            }
          };
          constraints = JSON.parse(JSON.stringify(constraints));
          remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
          remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
          constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && _typeof(constraints.video) === 'object') {
          // Shim facingMode for mobile & surface pro.
          var face = constraints.video.facingMode;
          face = face && ((typeof face === "undefined" ? "undefined" : _typeof(face)) === 'object' ? face : { ideal: face });
          var getSupportedFacingModeLies = browserDetails.version < 66;

          if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
            delete constraints.video.facingMode;
            var matches;
            if (face.exact === 'environment' || face.ideal === 'environment') {
              matches = ['back', 'rear'];
            } else if (face.exact === 'user' || face.ideal === 'user') {
              matches = ['front'];
            }
            if (matches) {
              // Look for matches in label, or use last cam for back (typical).
              return navigator.mediaDevices.enumerateDevices().then(function (devices) {
                devices = devices.filter(function (d) {
                  return d.kind === 'videoinput';
                });
                var dev = devices.find(function (d) {
                  return matches.some(function (match) {
                    return d.label.toLowerCase().indexOf(match) !== -1;
                  });
                });
                if (!dev && devices.length && matches.indexOf('back') !== -1) {
                  dev = devices[devices.length - 1]; // more likely the back cam
                }
                if (dev) {
                  constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
                }
                constraints.video = constraintsToChrome_(constraints.video);
                logging('chrome: ' + JSON.stringify(constraints));
                return func(constraints);
              });
            }
          }
          constraints.video = constraintsToChrome_(constraints.video);
        }
        logging('chrome: ' + JSON.stringify(constraints));
        return func(constraints);
      };

      var shimError_ = function shimError_(e) {
        return {
          name: {
            PermissionDeniedError: 'NotAllowedError',
            InvalidStateError: 'NotReadableError',
            DevicesNotFoundError: 'NotFoundError',
            ConstraintNotSatisfiedError: 'OverconstrainedError',
            TrackStartError: 'NotReadableError',
            MediaDeviceFailedDueToShutdown: 'NotReadableError',
            MediaDeviceKillSwitchOn: 'NotReadableError'
          }[e.name] || e.name,
          message: e.message,
          constraint: e.constraintName,
          toString: function toString() {
            return this.name + (this.message && ': ') + this.message;
          }
        };
      };

      var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
        shimConstraints_(constraints, function (c) {
          navigator.webkitGetUserMedia(c, onSuccess, function (e) {
            if (onError) {
              onError(shimError_(e));
            }
          });
        });
      };

      navigator.getUserMedia = getUserMedia_;

      // Returns the result of getUserMedia as a Promise.
      var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
        return new Promise(function (resolve, reject) {
          navigator.getUserMedia(constraints, resolve, reject);
        });
      };

      if (!navigator.mediaDevices) {
        navigator.mediaDevices = {
          getUserMedia: getUserMediaPromise_,
          enumerateDevices: function enumerateDevices() {
            return new Promise(function (resolve) {
              var kinds = { audio: 'audioinput', video: 'videoinput' };
              return window.MediaStreamTrack.getSources(function (devices) {
                resolve(devices.map(function (device) {
                  return { label: device.label,
                    kind: kinds[device.kind],
                    deviceId: device.id,
                    groupId: '' };
                }));
              });
            });
          },
          getSupportedConstraints: function getSupportedConstraints() {
            return {
              deviceId: true, echoCancellation: true, facingMode: true,
              frameRate: true, height: true, width: true
            };
          }
        };
      }

      // A shim for getUserMedia method on the mediaDevices object.
      // TODO(KaptenJansson) remove once implemented in Chrome stable.
      if (!navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          return getUserMediaPromise_(constraints);
        };
      } else {
        // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
        // function which returns a Promise, it does not accept spec-style
        // constraints.
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function (cs) {
          return shimConstraints_(cs, function (c) {
            return origGetUserMedia(c).then(function (stream) {
              if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                stream.getTracks().forEach(function (track) {
                  track.stop();
                });
                throw new DOMException('', 'NotFoundError');
              }
              return stream;
            }, function (e) {
              return Promise.reject(shimError_(e));
            });
          });
        };
      }

      // Dummy devicechange event methods.
      // TODO(KaptenJansson) remove once implemented in Chrome stable.
      if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
        navigator.mediaDevices.addEventListener = function () {
          logging('Dummy mediaDevices.addEventListener called.');
        };
      }
      if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
        navigator.mediaDevices.removeEventListener = function () {
          logging('Dummy mediaDevices.removeEventListener called.');
        };
      }
    };
  }, { "../utils.js": 13 }], 7: [function (require, module, exports) {
    /*
     *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var SDPUtils = require('sdp');
    var utils = require('./utils');

    // Wraps the peerconnection event eventNameToWrap in a function
    // which returns the modified event object.
    function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
      if (!window.RTCPeerConnection) {
        return;
      }
      var proto = window.RTCPeerConnection.prototype;
      var nativeAddEventListener = proto.addEventListener;
      proto.addEventListener = function (nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) {
          return nativeAddEventListener.apply(this, arguments);
        }
        var wrappedCallback = function wrappedCallback(e) {
          cb(wrapper(e));
        };
        this._eventMap = this._eventMap || {};
        this._eventMap[cb] = wrappedCallback;
        return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
      };

      var nativeRemoveEventListener = proto.removeEventListener;
      proto.removeEventListener = function (nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
          return nativeRemoveEventListener.apply(this, arguments);
        }
        var unwrappedCb = this._eventMap[cb];
        delete this._eventMap[cb];
        return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
      };

      Object.defineProperty(proto, 'on' + eventNameToWrap, {
        get: function get() {
          return this['_on' + eventNameToWrap];
        },
        set: function set(cb) {
          if (this['_on' + eventNameToWrap]) {
            this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
            delete this['_on' + eventNameToWrap];
          }
          if (cb) {
            this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
          }
        }
      });
    }

    module.exports = {
      shimRTCIceCandidate: function shimRTCIceCandidate(window) {
        // foundation is arbitrarily chosen as an indicator for full support for
        // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
        if (window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
          return;
        }

        var NativeRTCIceCandidate = window.RTCIceCandidate;
        window.RTCIceCandidate = function (args) {
          // Remove the a= which shouldn't be part of the candidate string.
          if ((typeof args === "undefined" ? "undefined" : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substr(2);
          }

          // Augment the native candidate with the parsed fields.
          var nativeCandidate = new NativeRTCIceCandidate(args);
          var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
          var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

          // Add a serializer that does not serialize the extra attributes.
          augmentedCandidate.toJSON = function () {
            return {
              candidate: augmentedCandidate.candidate,
              sdpMid: augmentedCandidate.sdpMid,
              sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
              usernameFragment: augmentedCandidate.usernameFragment
            };
          };
          return augmentedCandidate;
        };

        // Hook up the augmented candidate in onicecandidate and
        // addEventListener('icecandidate', ...)
        wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
          if (e.candidate) {
            Object.defineProperty(e, 'candidate', {
              value: new window.RTCIceCandidate(e.candidate),
              writable: 'false'
            });
          }
          return e;
        });
      },

      // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

      shimCreateObjectURL: function shimCreateObjectURL(window) {
        var URL = window && window.URL;

        if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.HTMLMediaElement && 'srcObject' in window.HTMLMediaElement.prototype && URL.createObjectURL && URL.revokeObjectURL)) {
          // Only shim CreateObjectURL using srcObject if srcObject exists.
          return undefined;
        }

        var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
        var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
        var streams = new Map(),
            newId = 0;

        URL.createObjectURL = function (stream) {
          if ('getTracks' in stream) {
            var url = 'polyblob:' + ++newId;
            streams.set(url, stream);
            utils.deprecated('URL.createObjectURL(stream)', 'elem.srcObject = stream');
            return url;
          }
          return nativeCreateObjectURL(stream);
        };
        URL.revokeObjectURL = function (url) {
          nativeRevokeObjectURL(url);
          streams.delete(url);
        };

        var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype, 'src');
        Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
          get: function get() {
            return dsc.get.apply(this);
          },
          set: function set(url) {
            this.srcObject = streams.get(url) || null;
            return dsc.set.apply(this, [url]);
          }
        });

        var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
        window.HTMLMediaElement.prototype.setAttribute = function () {
          if (arguments.length === 2 && ('' + arguments[0]).toLowerCase() === 'src') {
            this.srcObject = streams.get(arguments[1]) || null;
          }
          return nativeSetAttribute.apply(this, arguments);
        };
      }
    };
  }, { "./utils": 13, "sdp": 2 }], 8: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var utils = require('../utils');
    var shimRTCPeerConnection = require('rtcpeerconnection-shim');

    module.exports = {
      shimGetUserMedia: require('./getusermedia'),
      shimPeerConnection: function shimPeerConnection(window) {
        var browserDetails = utils.detectBrowser(window);

        if (window.RTCIceGatherer) {
          // ORTC defines an RTCIceCandidate object but no constructor.
          // Not implemented in Edge.
          if (!window.RTCIceCandidate) {
            window.RTCIceCandidate = function (args) {
              return args;
            };
          }
          // ORTC does not have a session description object but
          // other browsers (i.e. Chrome) that will support both PC and ORTC
          // in the future might have this defined already.
          if (!window.RTCSessionDescription) {
            window.RTCSessionDescription = function (args) {
              return args;
            };
          }
          // this adds an additional event listener to MediaStrackTrack that signals
          // when a tracks enabled property was changed. Workaround for a bug in
          // addStream, see below. No longer required in 15025+
          if (browserDetails.version < 15025) {
            var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
            Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
              set: function set(value) {
                origMSTEnabled.set.call(this, value);
                var ev = new Event('enabled');
                ev.enabled = value;
                this.dispatchEvent(ev);
              }
            });
          }
        }

        // ORTC defines the DTMF sender a bit different.
        // https://github.com/w3c/ortc/issues/714
        if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
          Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get: function get() {
              if (this._dtmf === undefined) {
                if (this.track.kind === 'audio') {
                  this._dtmf = new window.RTCDtmfSender(this);
                } else if (this.track.kind === 'video') {
                  this._dtmf = null;
                }
              }
              return this._dtmf;
            }
          });
        }

        window.RTCPeerConnection = shimRTCPeerConnection(window, browserDetails.version);
      },
      shimReplaceTrack: function shimReplaceTrack(window) {
        // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
        if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
          window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
        }
      }
    };
  }, { "../utils": 13, "./getusermedia": 9, "rtcpeerconnection-shim": 1 }], 9: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    // Expose public methods.

    module.exports = function (window) {
      var navigator = window && window.navigator;

      var shimError_ = function shimError_(e) {
        return {
          name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
          message: e.message,
          constraint: e.constraint,
          toString: function toString() {
            return this.name;
          }
        };
      };

      // getUserMedia error shim.
      var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function (c) {
        return origGetUserMedia(c).catch(function (e) {
          return Promise.reject(shimError_(e));
        });
      };
    };
  }, {}], 10: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var utils = require('../utils');

    var firefoxShim = {
      shimOnTrack: function shimOnTrack(window) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get: function get() {
              return this._ontrack;
            },
            set: function set(f) {
              if (this._ontrack) {
                this.removeEventListener('track', this._ontrack);
                this.removeEventListener('addstream', this._ontrackpoly);
              }
              this.addEventListener('track', this._ontrack = f);
              this.addEventListener('addstream', this._ontrackpoly = function (e) {
                e.stream.getTracks().forEach(function (track) {
                  var event = new Event('track');
                  event.track = track;
                  event.receiver = { track: track };
                  event.transceiver = { receiver: event.receiver };
                  event.streams = [e.stream];
                  this.dispatchEvent(event);
                }.bind(this));
              }.bind(this));
            }
          });
        }
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
          Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get: function get() {
              return { receiver: this.receiver };
            }
          });
        }
      },

      shimSourceObject: function shimSourceObject(window) {
        // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
          if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
            // Shim the srcObject property, once, when HTMLMediaElement is found.
            Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
              get: function get() {
                return this.mozSrcObject;
              },
              set: function set(stream) {
                this.mozSrcObject = stream;
              }
            });
          }
        }
      },

      shimPeerConnection: function shimPeerConnection(window) {
        var browserDetails = utils.detectBrowser(window);

        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
          return; // probably media.peerconnection.enabled=false in about:config
        }
        // The RTCPeerConnection object.
        if (!window.RTCPeerConnection) {
          window.RTCPeerConnection = function (pcConfig, pcConstraints) {
            if (browserDetails.version < 38) {
              // .urls is not supported in FF < 38.
              // create RTCIceServers with a single url.
              if (pcConfig && pcConfig.iceServers) {
                var newIceServers = [];
                for (var i = 0; i < pcConfig.iceServers.length; i++) {
                  var server = pcConfig.iceServers[i];
                  if (server.hasOwnProperty('urls')) {
                    for (var j = 0; j < server.urls.length; j++) {
                      var newServer = {
                        url: server.urls[j]
                      };
                      if (server.urls[j].indexOf('turn') === 0) {
                        newServer.username = server.username;
                        newServer.credential = server.credential;
                      }
                      newIceServers.push(newServer);
                    }
                  } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                  }
                }
                pcConfig.iceServers = newIceServers;
              }
            }
            return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype = window.mozRTCPeerConnection.prototype;

          // wrap static methods. Currently just generateCertificate.
          if (window.mozRTCPeerConnection.generateCertificate) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function get() {
                return window.mozRTCPeerConnection.generateCertificate;
              }
            });
          }

          window.RTCSessionDescription = window.mozRTCSessionDescription;
          window.RTCIceCandidate = window.mozRTCIceCandidate;
        }

        // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function () {
            arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

        // support for addIceCandidate(null or undefined)
        var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
        window.RTCPeerConnection.prototype.addIceCandidate = function () {
          if (!arguments[0]) {
            if (arguments[1]) {
              arguments[1].apply(null);
            }
            return Promise.resolve();
          }
          return nativeAddIceCandidate.apply(this, arguments);
        };

        // shim getStats with maplike support
        var makeMapStats = function makeMapStats(stats) {
          var map = new Map();
          Object.keys(stats).forEach(function (key) {
            map.set(key, stats[key]);
            map[key] = stats[key];
          });
          return map;
        };

        var modernStatsTypes = {
          inboundrtp: 'inbound-rtp',
          outboundrtp: 'outbound-rtp',
          candidatepair: 'candidate-pair',
          localcandidate: 'local-candidate',
          remotecandidate: 'remote-candidate'
        };

        var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
        window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
          return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
            if (browserDetails.version < 48) {
              stats = makeMapStats(stats);
            }
            if (browserDetails.version < 53 && !onSucc) {
              // Shim only promise getStats with spec-hyphens in type names
              // Leave callback version alone; misc old uses of forEach before Map
              try {
                stats.forEach(function (stat) {
                  stat.type = modernStatsTypes[stat.type] || stat.type;
                });
              } catch (e) {
                if (e.name !== 'TypeError') {
                  throw e;
                }
                // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                stats.forEach(function (stat, i) {
                  stats.set(i, Object.assign({}, stat, {
                    type: modernStatsTypes[stat.type] || stat.type
                  }));
                });
              }
            }
            return stats;
          }).then(onSucc, onErr);
        };
      },

      shimRemoveStream: function shimRemoveStream(window) {
        if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
          return;
        }
        window.RTCPeerConnection.prototype.removeStream = function (stream) {
          var pc = this;
          utils.deprecated('removeStream', 'removeTrack');
          this.getSenders().forEach(function (sender) {
            if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
              pc.removeTrack(sender);
            }
          });
        };
      }
    };

    // Expose public methods.
    module.exports = {
      shimOnTrack: firefoxShim.shimOnTrack,
      shimSourceObject: firefoxShim.shimSourceObject,
      shimPeerConnection: firefoxShim.shimPeerConnection,
      shimRemoveStream: firefoxShim.shimRemoveStream,
      shimGetUserMedia: require('./getusermedia')
    };
  }, { "../utils": 13, "./getusermedia": 11 }], 11: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var utils = require('../utils');
    var logging = utils.log;

    // Expose public methods.
    module.exports = function (window) {
      var browserDetails = utils.detectBrowser(window);
      var navigator = window && window.navigator;
      var MediaStreamTrack = window && window.MediaStreamTrack;

      var shimError_ = function shimError_(e) {
        return {
          name: {
            InternalError: 'NotReadableError',
            NotSupportedError: 'TypeError',
            PermissionDeniedError: 'NotAllowedError',
            SecurityError: 'NotAllowedError'
          }[e.name] || e.name,
          message: {
            'The operation is insecure.': 'The request is not allowed by the ' + 'user agent or the platform in the current context.'
          }[e.message] || e.message,
          constraint: e.constraint,
          toString: function toString() {
            return this.name + (this.message && ': ') + this.message;
          }
        };
      };

      // getUserMedia constraints shim.
      var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
        var constraintsToFF37_ = function constraintsToFF37_(c) {
          if ((typeof c === "undefined" ? "undefined" : _typeof(c)) !== 'object' || c.require) {
            return c;
          }
          var require = [];
          Object.keys(c).forEach(function (key) {
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
              return;
            }
            var r = c[key] = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
            if (r.min !== undefined || r.max !== undefined || r.exact !== undefined) {
              require.push(key);
            }
            if (r.exact !== undefined) {
              if (typeof r.exact === 'number') {
                r.min = r.max = r.exact;
              } else {
                c[key] = r.exact;
              }
              delete r.exact;
            }
            if (r.ideal !== undefined) {
              c.advanced = c.advanced || [];
              var oc = {};
              if (typeof r.ideal === 'number') {
                oc[key] = { min: r.ideal, max: r.ideal };
              } else {
                oc[key] = r.ideal;
              }
              c.advanced.push(oc);
              delete r.ideal;
              if (!Object.keys(r).length) {
                delete c[key];
              }
            }
          });
          if (require.length) {
            c.require = require;
          }
          return c;
        };
        constraints = JSON.parse(JSON.stringify(constraints));
        if (browserDetails.version < 38) {
          logging('spec: ' + JSON.stringify(constraints));
          if (constraints.audio) {
            constraints.audio = constraintsToFF37_(constraints.audio);
          }
          if (constraints.video) {
            constraints.video = constraintsToFF37_(constraints.video);
          }
          logging('ff37: ' + JSON.stringify(constraints));
        }
        return navigator.mozGetUserMedia(constraints, onSuccess, function (e) {
          onError(shimError_(e));
        });
      };

      // Returns the result of getUserMedia as a Promise.
      var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
        return new Promise(function (resolve, reject) {
          getUserMedia_(constraints, resolve, reject);
        });
      };

      // Shim for mediaDevices on older versions.
      if (!navigator.mediaDevices) {
        navigator.mediaDevices = { getUserMedia: getUserMediaPromise_,
          addEventListener: function addEventListener() {},
          removeEventListener: function removeEventListener() {}
        };
      }
      navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
        return new Promise(function (resolve) {
          var infos = [{ kind: 'audioinput', deviceId: 'default', label: '', groupId: '' }, { kind: 'videoinput', deviceId: 'default', label: '', groupId: '' }];
          resolve(infos);
        });
      };

      if (browserDetails.version < 41) {
        // Work around http://bugzil.la/1169665
        var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
        navigator.mediaDevices.enumerateDevices = function () {
          return orgEnumerateDevices().then(undefined, function (e) {
            if (e.name === 'NotFoundError') {
              return [];
            }
            throw e;
          });
        };
      }
      if (browserDetails.version < 49) {
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function (c) {
          return origGetUserMedia(c).then(function (stream) {
            // Work around https://bugzil.la/802326
            if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
              stream.getTracks().forEach(function (track) {
                track.stop();
              });
              throw new DOMException('The object can not be found here.', 'NotFoundError');
            }
            return stream;
          }, function (e) {
            return Promise.reject(shimError_(e));
          });
        };
      }
      if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
        var remap = function remap(obj, a, b) {
          if (a in obj && !(b in obj)) {
            obj[b] = obj[a];
            delete obj[a];
          }
        };

        var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function (c) {
          if ((typeof c === "undefined" ? "undefined" : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
            c = JSON.parse(JSON.stringify(c));
            remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
            remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
          }
          return nativeGetUserMedia(c);
        };

        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
          var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
          MediaStreamTrack.prototype.getSettings = function () {
            var obj = nativeGetSettings.apply(this, arguments);
            remap(obj, 'mozAutoGainControl', 'autoGainControl');
            remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
            return obj;
          };
        }

        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
          var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
          MediaStreamTrack.prototype.applyConstraints = function (c) {
            if (this.kind === 'audio' && (typeof c === "undefined" ? "undefined" : _typeof(c)) === 'object') {
              c = JSON.parse(JSON.stringify(c));
              remap(c, 'autoGainControl', 'mozAutoGainControl');
              remap(c, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeApplyConstraints.apply(this, [c]);
          };
        }
      }
      navigator.getUserMedia = function (constraints, onSuccess, onError) {
        if (browserDetails.version < 44) {
          return getUserMedia_(constraints, onSuccess, onError);
        }
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
      };
    };
  }, { "../utils": 13 }], 12: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    'use strict';

    var utils = require('../utils');

    var safariShim = {
      // TODO: DrAlex, should be here, double check against LayoutTests

      // TODO: once the back-end for the mac port is done, add.
      // TODO: check for webkitGTK+
      // shimPeerConnection: function() { },

      shimLocalStreamsAPI: function shimLocalStreamsAPI(window) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
          return;
        }
        if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.getLocalStreams = function () {
            if (!this._localStreams) {
              this._localStreams = [];
            }
            return this._localStreams;
          };
        }
        if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.getStreamById = function (id) {
            var result = null;
            if (this._localStreams) {
              this._localStreams.forEach(function (stream) {
                if (stream.id === id) {
                  result = stream;
                }
              });
            }
            if (this._remoteStreams) {
              this._remoteStreams.forEach(function (stream) {
                if (stream.id === id) {
                  result = stream;
                }
              });
            }
            return result;
          };
        }
        if (!('addStream' in window.RTCPeerConnection.prototype)) {
          var _addTrack = window.RTCPeerConnection.prototype.addTrack;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            if (!this._localStreams) {
              this._localStreams = [];
            }
            if (this._localStreams.indexOf(stream) === -1) {
              this._localStreams.push(stream);
            }
            var self = this;
            stream.getTracks().forEach(function (track) {
              _addTrack.call(self, track, stream);
            });
          };

          window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
            if (stream) {
              if (!this._localStreams) {
                this._localStreams = [stream];
              } else if (this._localStreams.indexOf(stream) === -1) {
                this._localStreams.push(stream);
              }
            }
            return _addTrack.call(this, track, stream);
          };
        }
        if (!('removeStream' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            if (!this._localStreams) {
              this._localStreams = [];
            }
            var index = this._localStreams.indexOf(stream);
            if (index === -1) {
              return;
            }
            this._localStreams.splice(index, 1);
            var self = this;
            var tracks = stream.getTracks();
            this.getSenders().forEach(function (sender) {
              if (tracks.indexOf(sender.track) !== -1) {
                self.removeTrack(sender);
              }
            });
          };
        }
      },
      shimRemoteStreamsAPI: function shimRemoteStreamsAPI(window) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
          return;
        }
        if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.getRemoteStreams = function () {
            return this._remoteStreams ? this._remoteStreams : [];
          };
        }
        if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
            get: function get() {
              return this._onaddstream;
            },
            set: function set(f) {
              if (this._onaddstream) {
                this.removeEventListener('addstream', this._onaddstream);
                this.removeEventListener('track', this._onaddstreampoly);
              }
              this.addEventListener('addstream', this._onaddstream = f);
              this.addEventListener('track', this._onaddstreampoly = function (e) {
                var stream = e.streams[0];
                if (!this._remoteStreams) {
                  this._remoteStreams = [];
                }
                if (this._remoteStreams.indexOf(stream) >= 0) {
                  return;
                }
                this._remoteStreams.push(stream);
                var event = new Event('addstream');
                event.stream = e.streams[0];
                this.dispatchEvent(event);
              }.bind(this));
            }
          });
        }
      },
      shimCallbacksAPI: function shimCallbacksAPI(window) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
          return;
        }
        var prototype = window.RTCPeerConnection.prototype;
        var createOffer = prototype.createOffer;
        var createAnswer = prototype.createAnswer;
        var setLocalDescription = prototype.setLocalDescription;
        var setRemoteDescription = prototype.setRemoteDescription;
        var addIceCandidate = prototype.addIceCandidate;

        prototype.createOffer = function (successCallback, failureCallback) {
          var options = arguments.length >= 2 ? arguments[2] : arguments[0];
          var promise = createOffer.apply(this, [options]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };

        prototype.createAnswer = function (successCallback, failureCallback) {
          var options = arguments.length >= 2 ? arguments[2] : arguments[0];
          var promise = createAnswer.apply(this, [options]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };

        var withCallback = function withCallback(description, successCallback, failureCallback) {
          var promise = setLocalDescription.apply(this, [description]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
        prototype.setLocalDescription = withCallback;

        withCallback = function withCallback(description, successCallback, failureCallback) {
          var promise = setRemoteDescription.apply(this, [description]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
        prototype.setRemoteDescription = withCallback;

        withCallback = function withCallback(candidate, successCallback, failureCallback) {
          var promise = addIceCandidate.apply(this, [candidate]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
        prototype.addIceCandidate = withCallback;
      },
      shimGetUserMedia: function shimGetUserMedia(window) {
        var navigator = window && window.navigator;

        if (!navigator.getUserMedia) {
          if (navigator.webkitGetUserMedia) {
            navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
          } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.getUserMedia = function (constraints, cb, errcb) {
              navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
            }.bind(navigator);
          }
        }
      },
      shimRTCIceServerUrls: function shimRTCIceServerUrls(window) {
        // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
        var OrigPeerConnection = window.RTCPeerConnection;
        window.RTCPeerConnection = function (pcConfig, pcConstraints) {
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                server = JSON.parse(JSON.stringify(server));
                server.urls = server.url;
                delete server.url;
                newIceServers.push(server);
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
          return new OrigPeerConnection(pcConfig, pcConstraints);
        };
        window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
        // wrap static methods. Currently just generateCertificate.
        if ('generateCertificate' in window.RTCPeerConnection) {
          Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
            get: function get() {
              return OrigPeerConnection.generateCertificate;
            }
          });
        }
      },
      shimTrackEventTransceiver: function shimTrackEventTransceiver(window) {
        // Add event.transceiver member over deprecated event.receiver
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype &&
        // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
        // defined for some reason even when window.RTCTransceiver is not.
        !window.RTCTransceiver) {
          Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get: function get() {
              return { receiver: this.receiver };
            }
          });
        }
      },

      shimCreateOfferLegacy: function shimCreateOfferLegacy(window) {
        var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
        window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
          var pc = this;
          if (offerOptions) {
            var audioTransceiver = pc.getTransceivers().find(function (transceiver) {
              return transceiver.sender.track && transceiver.sender.track.kind === 'audio';
            });
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
              if (audioTransceiver.direction === 'sendrecv') {
                audioTransceiver.setDirection('sendonly');
              } else if (audioTransceiver.direction === 'recvonly') {
                audioTransceiver.setDirection('inactive');
              }
            } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
              pc.addTransceiver('audio');
            }

            var videoTransceiver = pc.getTransceivers().find(function (transceiver) {
              return transceiver.sender.track && transceiver.sender.track.kind === 'video';
            });
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
              if (videoTransceiver.direction === 'sendrecv') {
                videoTransceiver.setDirection('sendonly');
              } else if (videoTransceiver.direction === 'recvonly') {
                videoTransceiver.setDirection('inactive');
              }
            } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
              pc.addTransceiver('video');
            }
          }
          return origCreateOffer.apply(pc, arguments);
        };
      }
    };

    // Expose public methods.
    module.exports = {
      shimCallbacksAPI: safariShim.shimCallbacksAPI,
      shimLocalStreamsAPI: safariShim.shimLocalStreamsAPI,
      shimRemoteStreamsAPI: safariShim.shimRemoteStreamsAPI,
      shimGetUserMedia: safariShim.shimGetUserMedia,
      shimRTCIceServerUrls: safariShim.shimRTCIceServerUrls,
      shimTrackEventTransceiver: safariShim.shimTrackEventTransceiver,
      shimCreateOfferLegacy: safariShim.shimCreateOfferLegacy
      // TODO
      // shimPeerConnection: safariShim.shimPeerConnection
    };
  }, { "../utils": 13 }], 13: [function (require, module, exports) {
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    /* eslint-env node */
    'use strict';

    var logDisabled_ = true;
    var deprecationWarnings_ = true;

    // Utility methods.
    var utils = {
      disableLog: function disableLog(bool) {
        if (typeof bool !== 'boolean') {
          return new Error('Argument type: ' + (typeof bool === "undefined" ? "undefined" : _typeof(bool)) + '. Please use a boolean.');
        }
        logDisabled_ = bool;
        return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
      },

      /**
       * Disable or enable deprecation warnings
       * @param {!boolean} bool set to true to disable warnings.
       */
      disableWarnings: function disableWarnings(bool) {
        if (typeof bool !== 'boolean') {
          return new Error('Argument type: ' + (typeof bool === "undefined" ? "undefined" : _typeof(bool)) + '. Please use a boolean.');
        }
        deprecationWarnings_ = !bool;
        return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
      },

      log: function log() {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
          if (logDisabled_) {
            return;
          }
          if (typeof console !== 'undefined' && typeof console.log === 'function') {
            console.log.apply(console, arguments);
          }
        }
      },

      /**
       * Shows a deprecation warning suggesting the modern and spec-compatible API.
       */
      deprecated: function deprecated(oldMethod, newMethod) {
        if (!deprecationWarnings_) {
          return;
        }
        console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
      },

      /**
       * Extract browser version out of the provided user agent string.
       *
       * @param {!string} uastring userAgent string.
       * @param {!string} expr Regular expression used as match criteria.
       * @param {!number} pos position in the version string to be returned.
       * @return {!number} browser version.
       */
      extractVersion: function extractVersion(uastring, expr, pos) {
        var match = uastring.match(expr);
        return match && match.length >= pos && parseInt(match[pos], 10);
      },

      /**
       * Browser detector.
       *
       * @return {object} result containing browser and version
       *     properties.
       */
      detectBrowser: function detectBrowser(window) {
        var navigator = window && window.navigator;

        // Returned result object.
        var result = {};
        result.browser = null;
        result.version = null;

        // Fail early if it's not a browser
        if (typeof window === 'undefined' || !window.navigator) {
          result.browser = 'Not a browser.';
          return result;
        }

        // Firefox.
        if (navigator.mozGetUserMedia) {
          result.browser = 'firefox';
          result.version = this.extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
        } else if (navigator.webkitGetUserMedia) {
          // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
          if (window.webkitRTCPeerConnection) {
            result.browser = 'chrome';
            result.version = this.extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
          } else {
            // Safari (in an unpublished version) or unknown webkit-based.
            if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
              result.browser = 'safari';
              result.version = this.extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
            } else {
              // unknown webkit-based browser.
              result.browser = 'Unsupported webkit-based browser ' + 'with GUM support but no WebRTC support.';
              return result;
            }
          }
        } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
          // Edge.
          result.browser = 'edge';
          result.version = this.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        } else if (navigator.mediaDevices && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
          // Safari, with webkitGetUserMedia removed.
          result.browser = 'safari';
          result.version = this.extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
        } else {
          // Default fallthrough: not supported.
          result.browser = 'Not a supported browser.';
          return result;
        }

        return result;
      }

    };

    // Export.
    module.exports = {
      log: utils.log,
      deprecated: utils.deprecated,
      disableLog: utils.disableLog,
      disableWarnings: utils.disableWarnings,
      extractVersion: utils.extractVersion,
      shimCreateObjectURL: utils.shimCreateObjectURL,
      detectBrowser: utils.detectBrowser.bind(utils)
    };
  }, {}] }, {}, [3]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoBind = __webpack_require__(0);

var _autoBind2 = _interopRequireDefault(_autoBind);

var _jpeg_camera = __webpack_require__(1);

var _jpeg_camera2 = _interopRequireDefault(_jpeg_camera);

var _errors = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// JpegCamera implementation that uses Flash to capture and display snapshots.
//
// @private
var JpegCameraFlash = function (_JpegCameraBase) {
  _inherits(JpegCameraFlash, _JpegCameraBase);

  function JpegCameraFlash(theContainer, options) {
    _classCallCheck(this, JpegCameraFlash);

    var _this = _possibleConstructorReturn(this, (JpegCameraFlash.__proto__ || Object.getPrototypeOf(JpegCameraFlash)).call(this, theContainer, options));

    _this.waitForVideoReadyTimer = null;

    _this.instances = {};
    _this.nextId = 1;
    (0, _autoBind2.default)(_this);
    _this.engineInit();
    return _this;
  }

  _createClass(JpegCameraFlash, [{
    key: 'destruct',
    value: function destruct() {
      this.waitForVideoReadyTimer = null;
    }

    // Used by flash object to send message to our instance.

  }, {
    key: 'sendMessage',
    value: function sendMessage(id, method) {
      var _prototype$method;

      var instance = this.instances[parseInt(id, 10)];

      if (!instance) {
        return null;
      }

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return (_prototype$method = this.prototype[method]).apply.apply(_prototype$method, [instance].concat(args));
    }
  }, {
    key: 'engineInit',
    value: function engineInit() {
      var _this2 = this;

      this.debug('Using Flash engine');

      // register our instance
      this.id = this.nextId++;
      this.instances[this.id] = this;

      var flashObjectId = 'flash_object_' + this.id;

      var params = {
        loop: 'false',
        allowScriptAccess: 'always',
        allowFullScreen: 'false',
        quality: 'best',
        wmode: 'opaque',
        menu: 'false'
      };
      var attributes = {
        id: flashObjectId,
        align: 'middle'
      };
      var flashvars = {
        id: this.id,
        width: this.viewWidth,
        height: this.viewHeight,
        shutter_url: this.options.shutterMp3Url ? this.options.shutterMp3Url : ''
      };
      var that = this;
      var callback = function callback(event) {
        if (!event.success) {
          throw new _errors.WebcamError(_errors.WebcamErrors.FLASH_FAILED_LOADING, event);
        }
        that.debug('Flash loaded.');
        that.flash = document.getElementById(flashObjectId);
        if (_this2.options.onReady) {
          _this2.waitForVideoReady();
        }
        return null;
      };

      var containerToBeReplaced = document.createElement('div');
      containerToBeReplaced.id = 'jpeg_cameraflash_' + this.id;
      containerToBeReplaced.style.width = '100%';
      containerToBeReplaced.style.height = '100%';
      if (this.options.previewMirror) {
        (0, _jpeg_camera.addPrefixedStyle)(containerToBeReplaced, 'transform', 'scalex(-1.0)');
      }

      this.container.appendChild(containerToBeReplaced);

      // eslint-disable-next-line no-undef
      swfobject.embedSWF(this.options.swfUrl, containerToBeReplaced.id, this.viewWidth, this.viewHeight, this.options.dontCheckFlash ? '0' : '9', null, flashvars, params, attributes, callback);
    }
  }, {
    key: 'waitForVideoReady',
    value: function waitForVideoReady() {
      try {
        // eslint-disable-next-line no-underscore-dangle
        if (this.flash._capture(1, false, 0.1, 1)) {
          return this.options.onReady.call(this, null);
        }
      } catch (e) {}
      // do nothing

      /*
      */
      var that = this;
      this.waitForVideoReadyTimer = setTimeout(function () {
        return that.waitForVideoReady();
      }, 500);
      return null;
    }
  }, {
    key: 'resizePreview',
    value: function resizePreview() {
      if (this.viewWidth < 215 || this.viewHeight < 138) {
        throw new _errors.WebcamError(_errors.WebcamErrors.FLASH_WINDOW_TOO_SMALL);
      }
      this.flash.parentNode.removeChild(this.flash);
      this.flash = null;
      this.engineInit();
      return this;
    }
  }, {
    key: 'enginePlayShutterSound',
    value: function enginePlayShutterSound() {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._play_shutter();
    }
  }, {
    key: 'engineCapture',
    value: function engineCapture(snapshot, mirror, quality, scale) {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._capture(snapshot.id, mirror, quality, scale);
    }
  }, {
    key: 'engineDisplay',
    value: function engineDisplay(snapshot) {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._display(snapshot.id);
    }
  }, {
    key: 'engineGetCanvas',
    value: function engineGetCanvas(snapshot) {
      // eslint-disable-next-line no-param-reassign
      if (!snapshot.imageData) {
        snapshot.imageData = this.engineGetImageData(snapshot);
      }
      var canvas = document.createElement('canvas');
      canvas.width = snapshot.imageData.width;
      canvas.height = snapshot.imageData.height;
      var context = canvas.getContext('2d');
      context.putImageData(snapshot.imageData, 0, 0);
      return canvas;
    }
  }, {
    key: 'engineGetImageData',
    value: function engineGetImageData(snapshot) {
      var result = void 0;
      // eslint-disable-next-line no-underscore-dangle
      var flashData = this.flash._get_image_data(snapshot.id);

      if ((0, _jpeg_camera.isCanvasSupported)()) {
        var canvas = document.createElement('canvas');
        canvas.width = flashData.width;
        canvas.height = flashData.height;
        var context = canvas.getContext('2d');
        result = context.createImageData(flashData.width, flashData.height);
      } else {
        result = {
          data: [],
          width: flashData.width,
          height: flashData.height
        };
      }

      for (var i = 0; i < flashData.data.length; i++) {
        var pixel = flashData.data[i];
        var index = i * 4;

        /* eslint-disable no-bitwise */
        var red = pixel >> 16 & 0xff;
        var green = pixel >> 8 & 0xff;
        var blue = pixel & 0xff;

        result.data[index + 0] = red;
        result.data[index + 1] = green;
        result.data[index + 2] = blue;
        result.data[index + 3] = 255;
      }
      return result;
    }
  }, {
    key: 'engineGetBlob',
    value: function engineGetBlob(snapshot, mime, mirror, quality, callback) {
      var canvas = void 0;
      // eslint-disable-next-line no-param-reassign
      if (!snapshot.extraCanvas) {
        snapshot.extraCanvas = this.engineGetCanvas(snapshot);
      }

      if (mirror) {
        canvas = document.createElement('canvas');
        canvas.width = snapshot.canvas.width;
        canvas.height = snapshot.canvas.height;

        var context = canvas.getContext('2d');
        context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(snapshot.extraCanvas, 0, 0);
      } else {
        canvas = snapshot.extraCanvas;
      }

      return canvas.toBlob(function (blob) {
        return callback(blob);
      }, mime, quality);
    }
  }, {
    key: 'engineDiscard',
    value: function engineDiscard(snapshot) {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._discard(snapshot.id);
    }
  }, {
    key: 'engineShowStream',
    value: function engineShowStream() {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._show_stream();
    }
  }, {
    key: 'flashPrepared',
    value: function flashPrepared(width, height) {
      this.blockElementAccess();

      // XXX steal focus from the flash object
      document.body.tabIndex = 0;
      document.body.focus();

      return this.prepared(width, height);
    }
  }]);

  return JpegCameraFlash;
}(_jpeg_camera2.default);

JpegCameraFlash.engineCheck = function (success, failure) {
  if (!window.swfobject) {
    failure('JpegCamera: SWFObject is not loaded.');
  }
  if (!window.swfobject.hasFlashPlayerVersion('9')) {
    failure('No Flash in version 9 available.');
  }
  success();
};

exports.default = JpegCameraFlash;

/***/ })
/******/ ]);
});
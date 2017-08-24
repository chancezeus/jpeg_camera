import JpegCamera from './jpeg_camera';
import JpegCameraHtml5 from './jpeg_camera_html5';
import JpegCameraFlash from './jpeg_camera_flash';

if (!navigator.getUserMedia) {
  navigator.getUserMedia =
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
}

if (!window.AudioContext) { window.AudioContext = window.webkitAudioContext; }

const exports = { JpegCamera };

// Use HTML5 version
if (navigator.getUserMedia) {
  const canvas = document.createElement('canvas');
  if (canvas.getContext && !canvas.toBlob) {
    throw new Error('JpegCamera: Canvas-to-Blob is not loaded');
  }
  exports.JpegCamera = JpegCameraHtml5;

// Use Flash version
} else {
  if (!window.swfobject) {
    throw new Error('JpegCamera: SWFObject is not loaded');
  }
  if (window.swfobject && window.swfobject.hasFlashPlayerVersion('9')) {
    exports.JpegCamera = JpegCameraFlash;
  }
}

export default exports.JpegCamera;

import JpegCamera from './jpeg_camera';
import JpegCameraHtml5 from './jpeg_camera_html5';
import JpegCameraFlash from './jpeg_camera_flash';

if (!navigator.getUserMedia) {
  navigator.getUserMedia =
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
}

if (!window.AudioContext) { window.AudioContext = window.webkitAudioContext; }

// Use HTML5 version
if (navigator.getUserMedia) {
  const canvas = document.createElement("canvas");
  if (canvas.getContext && !canvas.toBlob) {
    throw "JpegCamera: Canvas-to-Blob is not loaded";
  }
  export default JpegCameraHtml5;

// Use Flash version
} else {
  if (!window.swfobject) {
    throw "JpegCamera: SWFObject is not loaded";
  }
  if (window.swfobject && swfobject.hasFlashPlayerVersion('9')) {
    export default JpegCameraFlash;
  }

  // Export the base class if no implementation can be used
  export default JpegCamera;
}

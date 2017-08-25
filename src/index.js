import JpegCameraHtml5 from './jpeg_camera_html5';
import JpegCameraFlash from './jpeg_camera_flash';
import { WebcamError, WebcamErrors } from './errors';

if (!navigator.getUserMedia) {
  navigator.getUserMedia =
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
}
if (!window.AudioContext) { window.AudioContext = window.webkitAudioContext; }


const JpegCamera = (container, options) => {
  const html5Init = () => (new JpegCameraHtml5(container, options));
  const flashInit = () => (new JpegCameraFlash(container, options));
  const initError = () => (new WebcamError(WebcamErrors.NO_GET_MEDIA_NOR_FLASH_AVAILABLE));

  JpegCameraHtml5.engineCheck(
    /* success */ () => { if (options.onInit) options.onInit(html5Init()); },
    /* failure */ () => {
      JpegCameraFlash.engineCheck(
        /* success */ () => { if (options.onInit) options.onInit(flashInit()); },
        /* failure */ () => { if (options.onError) options.onError(initError()); },
      );
    },
  );
};

export default JpegCamera;

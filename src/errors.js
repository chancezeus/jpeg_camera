//
// Contains possible error states of the component.
// This object is thrown from component in case of problems.
//
export class WebcamError {
  constructor(errorCode, details = null) {
    this.error = errorCode;
    this.details = details;
  }
}

export const WebcamErrors = {
  UNKNOWN_ERROR: 1,
  GET_MEDIA_FAILED_INIT: 2,
  FLASH_FAILED_LOADING: 3,
  FLASH_WINDOW_TOO_SMALL: 4,
  CAMERA_NOT_READY: 5,
  GENERIC_ERROR: 99,
};

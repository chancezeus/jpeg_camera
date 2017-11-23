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
  INCORRECT_INITIALISATION: 'INCORRECT_INITIALISATION',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  GET_MEDIA_FAILED_INIT: 'GET_MEDIA_FAILED_INIT',
  FLASH_FAILED_LOADING: 'FLASH_FAILED_LOADING',
  FLASH_WINDOW_TOO_SMALL: 'FLASH_WINDOW_TOO_SMALL',
  CAMERA_NOT_READY: 'CAMERA_NOT_READY',
  GENERIC_ERROR: 'GENERIC_ERROR',
  NO_GET_MEDIA_NOR_FLASH_AVAILABLE: 'NO_GET_MEDIA_NOR_FLASH_AVAILABLE',
};

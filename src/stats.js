//
// Contains some pixel statistics of {Snapshot} or camera stream.
//
// Can be retrieved using {JpegCamera#getStats} or {Snapshot#getStats} methods.
//
export default class Stats {
  // @property [Float] mean gray value of pixels (0-255)
  mean = null;

  // @property [Float] standard deviation of gray values
  std = null;
}

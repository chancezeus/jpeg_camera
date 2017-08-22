## About

JpegCamera is a JavaScript library that allows you to display a camera stream on
a web page and then capture, show and upload JPEG snapshots to the server. It
uses HTML5 in Chrome, Firefox and Opera and falls back to Flash in less capable
browsers. The video stream is placed without any UI in a container of your
choice and you control it through JavaScript API and your own UI elements.

The idea is based on a similar
[JpegCam](https://github.com/mattclements/jpegcam) library which was Flash only.
Beside working without Flash and offering a cleaner, more modern API, JpegCamera
has some nice, new features.

```
Note: This version of jpeg_camera has all "upload" functionalities removed and the source code
is written in ES6 (translated using "decaffeinate" project and corrected)
```

## Features

- Works natively in Chrome, Firefox, Opera and with a Flash plugin in all other
  browsers.
- You can get snapshots for display outside the camera container in browsers
  that support `canvas` element - even when using Flash fallback.
- Prevents users from messing with HTML5 VIDEO or Flash object elements
  by overlaying transparent DIV over them after initialization.
- Makes sure the camera is really ready by checking stream's color standard
  deviation. Safeguard from weird all-black or all-white snapshots.

## Demo

Check out the [demo page](https://amw.github.io/jpeg_camera/demo/).
```
Note: This is the original project demo. It works the same.
```

## Dependencies

- [Canvas-to-Blob](https://github.com/blueimp/JavaScript-Canvas-to-Blob)
  polyfill for the standard JavaScript `canvas.toBlob` method.
- [SWFObject](http://code.google.com/p/swfobject/) for embedding the
  Flash-based fallback.

## Installation

The script is provide as ES6 sources, use it with webpack (with babel) or other bundling tool.
Remeber to load swfobject and cancas-to-blob **before** importing the JpegCamera.

## Usage

```
import 'script-loader!jpeg-camera/vendor/swfobject.min.js';
import 'script-loader!jpeg-camera/dist/canvas-to-blob.min.js';
import JpegCamera, { JpegCameraSwf } from 'jpeg-camera';
```



    var camera = new JpegCamera("#camera");

    var snapshot = camera.capture();

    snapshot.show(); // Display the snapshot

    snapshot.upload({api_url: "/upload_image"}).done(function(response) {
      response_container.innerHTML = response;
      this.discard(); // discard snapshot and show video stream again
    }).fail(function(status_code, error_message, response) {
      alert("Upload failed with status " + status_code);
    });

A detailed documentation using in-code comments is maintained for
[JpegCamera](https://amw.github.io/jpeg_camera/doc/class/JpegCamera.html) and
[Snapshot](https://amw.github.io/jpeg_camera/doc/class/Snapshot.html)
classes.

## User privacy

Respect your users privacy. Make sure they understand why you want to capture
their webcam image and what you're going to do with it. A useful information
is whether you're only going to use the image on the client side or if
you're going to upload it to some server.

To protect their identity and their data host your app on HTTPS servers.
JpegCamera does not enforce this, but some browsers promise to do so in the
future. Google Chrome already forbids HTTP websites from accessing camera
through `getUserMedia` in their Canary release channel.
[Read more](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins).

## Caveats

To use Flash fallback your camera container must be at least 215 pixels wide and
138 pixels tall. This is the minimum to display privacy settings dialog.

With Flash in some browsers it's impossible to read response body for requests
that finish with status codes from outside the 2XX range (like 404 Not Found or
422 Unprocessable Entity). If you're using version of JpegCamera with Flash
fallback your application should not rely on reading body of these responses.
The status code number is always available.

Current stable versions of Firefox and Opera support getUserMedia, but do not
support Web Audio API. I have decided against loading a Flash object in
these browsers so JpegCamera will be silent.

## Contributing

The source code is available on [Github](https://github.com/amw/jpeg_camera).
Please send pull requests on topic branches.

To build dist files from source you need `npm` — Node Package Manager.

    npm install              # install required dependencies
    npm install -g grunt-cli # install grunt command
    grunt dist               # build js & swf files
    grunt js                 # only builds js files
    grunt swf                # only builds swf file
    grunt doc                # update documentation
    grunt                    # build dist files and update documentation

To build swf file you need to have `mxmlc` available in your `$PATH`. It comes
in the [Flex SDK](http://www.adobe.com/devnet/flex/flex-sdk-download.html).

## Acknowledgements

Thanks to Joseph Huckaby for creating and Matt Clements for maintaining
Flash-based [JpegCam library](http://code.google.com/p/jpegcam/) which I have
been using until HTML5 became a viable solution. If you're interested here's
[Matt's repo](https://github.com/mattclements/jpegcam) and here's
[mine](https://github.com/amw/jpegcam). Thanks to everyone else contributing to
that project.


Copyright [Adam Wróbel](http://adamwrobel.com), released under the MIT License.

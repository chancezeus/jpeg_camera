const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jpeg_camera.js',
    library: 'JpegCamera',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        options: {
          presets: ['es2015'],
          plugins: ['transform-class-properties'],
        },
      },
    ],
  },
};

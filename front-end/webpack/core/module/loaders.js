export default [
  // css loader is set by either
  // development or production
  {
    exclude: /node_modules/,
    test: /\.js?$/,
    loader: 'babel'
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'file?name=images/[hash].[ext]'
  },
  {
    test: /\.gif$/,
    loader: 'url-loader?limit=32768'
  },
  {
    test: /\.(svg)$/,
    loader: 'raw'
  },
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file?name=fonts/[hash].[ext]&mimetype=application/font-woff"
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file?name=fonts/[hash].[ext]&mimetype=application/font-woff2"
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file?name=fonts/[hash].[ext]&mimetype=application/octet-stream"
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file?name=fonts/[hash].[ext]"
  },
  {
    test: /\.(mp3|ogg)$/i,
    loader: "file?name=sounds/[hash].[ext]"
  }
]

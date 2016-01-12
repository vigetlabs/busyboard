export default [
  // css loader is set by either
  // development or production
  {
    exclude: /node_modules/,
    test: /\.js?$/,
    loader: 'babel?stage=1&loose'
  },
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file?name=fonts/[hash].[ext]&mimetype=application/font-woff"
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "raw"
  },
  {
    test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file?name=images/[hash].[ext]"
  },
  {
    test: /\.sass$/,
    loader: 'style-loader!css!autoprefixer!sass?indentedSyntax&imagePath=/assets/images'
  }
]

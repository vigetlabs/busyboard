import webpack   from 'webpack'
import clone     from 'clone'
import core      from './core'
import myLocalIP from 'my-local-ip'

export default function() {
  const config = clone(core)

  config.entry.app.unshift(
    `webpack-dev-server/client?http://${ myLocalIP() }:8001`,
    'webpack/hot/only-dev-server'
  )

  config.output.filename = 'js/[name]-development.js'

  config.plugins.unshift(
    new webpack.HotModuleReplacementPlugin()
  )

  config.module.loaders.unshift({
    exclude : /node_modules/,
    test    : /\.js?$/,
    loader  : 'react-hot!babel?stage=1&loose'
  })

  config.debug   = true
  config.devtool = '#eval-source-map'

  return config
}

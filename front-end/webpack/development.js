import webpack   from 'webpack'
import clone     from 'clone'
import core      from './core'
import myLocalIP from 'my-local-ip'

export default function() {
  const config = clone(core)

  config.module.loaders.push(
    {
      test: /\.sass$/,
      loader: 'style-loader!css!autoprefixer!sass?indentedSyntax&imagePath=/assets/images'
    }
  )

  config.entry.app.unshift(
    `webpack-dev-server/client?http://${ myLocalIP() }:8001`,
    'webpack/hot/only-dev-server'
  )

  config.output.filename = 'js/[name].js'

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

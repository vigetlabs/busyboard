import webpack   from 'webpack'
import clone     from 'clone'
import core      from './core'

export default function() {
  const config = clone(core)

  config.output.filename = 'js/[name]-production.js'

  config.module.loaders.unshift({
    exclude : /node_modules/,
    test    : /\.js?$/,
    loader  : 'babel?stage=1&loose'
  })

  return config
}

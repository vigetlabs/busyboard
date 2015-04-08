var webpack           = require('webpack')
var WebpackDevServer  = require('webpack-dev-server')
var developmentConfig = require('../webpack/development')()
var myLocalIP         = require('my-local-ip')

process.env.PLATFORM = 'browser'

new WebpackDevServer(webpack(developmentConfig), {
  publicPath  : developmentConfig.output.publicPath,
  hot         : true,
  stats: {
    colors: true
  },
}).listen(8001, function(err, result) {
  if (err) console.log(err)
  console.log(
    '\n==================================================================\n',
    `Visit the development site at http://${ myLocalIP() }:8000`,
    '\n==================================================================\n'
  )
})

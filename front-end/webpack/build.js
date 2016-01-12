require('babel/register')

var webpack           = require('webpack')
var productionConfig  = require('./production')

var compiler = webpack(productionConfig())

compiler.run(function(err, stats) {
  if (err) console.log(err)
})

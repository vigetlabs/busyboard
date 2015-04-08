require('../css/app')

var React     = require('react')
var $         = require('jquery')
var Logo      = require('./tiles/logo')
var Weather   = require('./tiles/weather')
var Event     = require('./tiles/event')
var Locations = require('./tiles/locations')


var App = React.createClass({

  render: function() {
    return (
      <main>
        <Logo />
        <Event />
        <Locations />
        <Weather />
      </main>
    )
  }
})


module.exports = App;

window.onload = function() {
  React.render(
    <App />,
    document.getElementById('content')
  )
}

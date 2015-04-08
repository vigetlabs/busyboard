var React   = require('react')
var Skycons = require('../vendor/skycons').Skycons

module.exports = React.createClass({
  render() {
    return (
      <canvas width={this.props.size} height={this.props.size}></canvas>
    )
  },

  componentDidUpdate() {
    var icon = this.props.icon.toUpperCase().replace(/-/g, '_')
    var skycon = new Skycons({color: this.props.color})
    skycon.add(this.getDOMNode(), Skycons[icon]);
    skycon.play();
  }
})

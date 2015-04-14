require('../vendor/skycons')

export default React.createClass({
  _updateIcon() {
    var icon = this.props.icon.toUpperCase().replace(/-/g, '_')
    var skycon = new window.Skycons({color: this.props.color})
    skycon.add(React.findDOMNode(this), window.Skycons[icon]);
    skycon.play();
  },

  componentDidMount() {
    this._updateIcon()
  },

  componentDidUpdate() {
    this._updateIcon()
  },

  render() {
    return (
      <canvas width={this.props.size} height={this.props.size}></canvas>
    )
  }
})

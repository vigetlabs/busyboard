export default React.createClass({
  getScale() {
    return 'scale(0.65)'
  },

  getSizeClass() {
    if (this.props.directionsDirection.length > 15)
      return '-small'
    else
      return ''
  },

  getHours() {
    return typeof this.props.closes === 'undefined'
      ? `Opens at ${this.props.opens}`
      : `Is open until ${this.props.closes}`
  },

  render() {
    return (
      <div className='location'>
        <div className='location__description'>
          <div className='location__description__table'>
            <div className='location__description__cell'>
              <h2>
                Hungry?
                <b>{this.props.name}</b>
              </h2>
              <p className='location__closing-time'>
                {this.getHours()}
              </p>
            </div>
          </div>
        </div>
        <div className='location__directions'>
          <span className='location__arrow'>
            <svg style={{transform: `translate(-50%, -50%) rotate(${this.props.degreesFromFacing}deg) ${this.getScale()} `}}
                 xmlns="http://www.w3.org/2000/svg"
                 width="110.963"
                 height="107.123"
                 viewBox="0 0 110.963 107.123">
              <path d="M110.963 52.443L55.397 0 0 52.434 14.708 68.42l29.876-28.51.02 67.208 21.672.004-.02-67.264L96.29 68.45"/>
            </svg>
          </span>
          <p className={ this.getSizeClass(location) }>
            <b>{this.props.directionsLength}</b>
            walk {this.props.directionsDirection}
          </p>
        </div>
      </div>
    )
  }
})

/**
 * @jsx React.DOM
 */

var React = require('react')

module.exports = React.createClass({

  getInitialState() {
    return {
      name                : 'Foolish Craig' + String.fromCharCode(8217) + 's',
      closingTime         : '10pm',
      directionsLength    : '5 min',
      directionsDirection : 'Northeast',
      directionsArrow     : 'ne'
    }
  },

  render() {
    return (
      <div className='locations'>
        <div className='locations__description'>
          <div className='locations__description__table'>
            <div className='locations__description__cell'>
              <h2>
                Hungry?
                <b>{this.state.name}</b>
              </h2>
              <p className='locations__closing-time'>
                Is open until {this.state.closingTime}
              </p>
            </div>
          </div>
        </div>
        <div className='locations__directions'>
          <span className='locations__arrow locations__arrow--{this.state.directionsArrow}' />
          <p>
            <b>{this.state.directionsLength}</b>
            walk {this.state.directionsDirection}
          </p>
        </div>
      </div>
    )
  }
})

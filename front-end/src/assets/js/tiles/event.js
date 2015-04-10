import React from 'react'

module.exports = React.createClass({
  render() {
    var location = this.props.atViget
       ? 'Next Meetup Here @ Viget'
       : 'Next Web Meetup in the Area'
    return (
      <div className='event'>
        <div className='event__table'>
          <div className='event__cell'>
            <h2>
              {location}
              <b>{this.props.name}</b>
            </h2>
            <p className='event__date'>
              <b>{this.props.date}</b> {this.props.time}
            </p>
            <div className='event__description' dangerouslySetInnerHTML={{__html: this.props.description}} />
          </div>
        </div>
      </div>
    )
  }
})

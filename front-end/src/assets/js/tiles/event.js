var React = require('react')
var $     = require('jquery')

module.exports = React.createClass({

  getInitialState() {
    return {
      atViget     : true,
      name        : 'Boulder Refresh',
      date        : 'Jan. 1',
      time        : '12:00AM',
      description : 'Loading...'
    }
  },

  componentDidMount() {
    this.fetch()
    $(window).on('keypress', (event) => {
      if (event.charCode === 32) this.fetch()
    })
  },

  fetch() {
    console.log('Fetching weather data...')

    $.ajax({
      url: 'http://localhost:8000/event',

      dataType: 'json',

      success: (data) => {
        console.log(data)
        this.setState(data)
      },

      error: (xhr, status, err) => {
        console.log('Error fetching event data!')
        console.error(err);
      }
    });
  },

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
              <b>{this.state.name}</b>
            </h2>
            <p className='event__date'>
              <b>{this.state.date}</b> {this.state.time}
            </p>
            <div className='event__description' dangerouslySetInnerHTML={{__html: this.state.description}} />
          </div>
        </div>
      </div>
    )
  }
})

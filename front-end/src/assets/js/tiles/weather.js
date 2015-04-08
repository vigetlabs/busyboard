/**
 * @jsx React.DOM
 */

var React       = require('react')
var $           = require('jquery')
var WeatherIcon = require('./weatherIcon.js')

module.exports = React.createClass({

  getInitialState() {
    return {
      currently     : 0,
      currentlyIcon : 'clear-day',
      later         : 0,
      laterIcon     : 'clear-day',
      muchLater     : 0,
      muchLaterIcon : 'clear-day'
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
      url: 'http://localhost:8000/weather',

      dataType: 'json',

      success: (data) => {
        console.log(data)
        this.setState(data)
      },

      error: (xhr, status, err) => {
        console.log('Error fetching weather data!')
        console.error(err);
      }
    });
  },

  render() {
    return (
      <div className='weather'>
        <ul>
          <li className='weather__currently'>
            <h2>Currently</h2>
            <WeatherIcon icon={this.state.currentlyIcon} size='220' color='#2e112c' />
            <p>
              {this.state.currently}&deg;
            </p>
          </li>
          <li className='weather__later'>
            <h2>A Little Later</h2>
            <WeatherIcon icon={this.state.laterIcon} size='90' color='#7f0033' />
            <p>
              {this.state.later}&deg;
            </p>
          </li>
          <li className='weather__much-later'>
            <h2>Much Later</h2>
            <WeatherIcon icon={this.state.muchLaterIcon} size='90' color='#7f0033' />
            <p>
              {this.state.muchLater}&deg;
            </p>
          </li>
        </ul>
      </div>
    )
  }
})

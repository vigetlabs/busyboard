import WeatherIcon from './weatherIcon.js'

export default React.createClass({
  render() {
    return (
      <div className='weather'>
        <ul>
          <li className='weather__currently'>
            <h2>Currently</h2>
            <WeatherIcon icon={this.props.currentlyIcon} size='220' color='#2e112c' />
            <p>
              {this.props.currently}&deg;
            </p>
          </li>
          <li className='weather__later'>
            <h2>A Little Later</h2>
            <WeatherIcon icon={this.props.laterIcon} size='90' color='#7f0033' />
            <p>
              {this.props.later}&deg;
            </p>
          </li>
          <li className='weather__much-later'>
            <h2>Much Later</h2>
            <WeatherIcon icon={this.props.muchLaterIcon} size='90' color='#7f0033' />
            <p>
              {this.props.muchLater}&deg;
            </p>
          </li>
        </ul>
      </div>
    )
  }
})

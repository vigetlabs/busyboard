import getWeather from './weather'
import getEvent   from './event'

export default () => {
  getWeather()
  setInterval(getWeather, 5000)

  getEvent()
  setInterval(getEvent, 5000)
}

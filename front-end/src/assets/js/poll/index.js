import getWeather from './weather'
import getEvent   from './event'
import getBuses   from './buses'

const minutes = (n) => n * 60 * 1000

export default () => {
  getWeather()
  setInterval(getWeather, minutes(1))

  getEvent()
  setInterval(getEvent, minutes(1))

  getBuses()
  setInterval(getBuses, minutes(0.1))
}

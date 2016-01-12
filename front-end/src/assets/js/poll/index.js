import { speed }   from './flags'
import getWeather  from './weather'
import getEvent    from './event'
import getBuses    from './buses'
import getLocation from './location'

const minutes = (n) => {
  return (n / speed) * 60 * 1000
}

export default () => {
  getWeather()
  setInterval(getWeather, minutes(0.5))

  getEvent()
  setInterval(getEvent, minutes(0.5))

  getBuses()
  setInterval(getBuses, minutes(0.5))

  getLocation()
  setInterval(getLocation, minutes(0.5))
}

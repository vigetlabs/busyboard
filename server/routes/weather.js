import request    from 'sync-request'
import * as cache from '../util/cache'

const icons = [
  'clear-day',
  'clear-night',
  'rain',
  'snow',
  'sleet',
  'wind',
  'fog',
  'cloudy',
  'partly-cloudy-day',
  'partly-cloudy-night'
]

const randomTemp = function() {
  return Math.round(Math.random() * 30 + 30)
}

const randomIcon = function() {
  return icons[(Math.round(Math.random() * icons.length))]
}

const demo = function() {
  return {
    currently     : randomTemp(),
    currentlyIcon : randomIcon(),
    later         : randomTemp(),
    laterIcon     : randomIcon(),
    muchLater     : randomTemp(),
    muchLaterIcon : randomIcon()
  }
}

const collect = () => {
  var weather = cache.read('weather', 5)

  if (!weather) {
    const url = 'https://api.forecast.io/forecast/24624713d9d4ab7f04b99f9939be8e8d/40.0170370,-105.2774130'
    const response = request('GET', url)
    const data = JSON.parse(response.body)

    weather = {
      currently     : Math.round(data.currently.temperature),
      currentlyIcon : data.currently.icon,
      later         : Math.round(data.hourly.data[0].temperature),
      laterIcon     : data.hourly.data[0].icon,
      muchLater     : Math.round(data.hourly.data[3].temperature),
      muchLaterIcon : data.hourly.data[3].icon
    }
    cache.write('weather', weather)
  }

  return weather
}

export default {
  method : 'GET',
  path   : '/weather',
  handler(request, reply) {
    let data = request.query.demo ? demo() : collect()
    reply(data)
  }
}

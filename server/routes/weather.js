import request from 'sync-request'
import moment  from 'moment'

const get = function() {
  const weather = {}

  // var url = 'https://api.forecast.io/forecast/24624713d9d4ab7f04b99f9939be8e8d/40.0170370,-105.2774130'
  // var response = request('GET', url)
  // var data = JSON.parse(response.body)

  // weather.currently     = Math.round(data.currently.temperature)
  // weather.currentlyIcon = data.currently.icon
  // weather.later         = Math.round(data.hourly.data[0].temperature)
  // weather.laterIcon     = data.hourly.data[0].icon
  // weather.muchLater     = Math.round(data.hourly.data[3].temperature)
  // weather.muchLaterIcon = data.hourly.data[3].icon

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

  weather.currently     = randomTemp()
  weather.currentlyIcon = randomIcon()
  weather.later         = randomTemp()
  weather.laterIcon     = randomIcon()
  weather.muchLater     = randomTemp()
  weather.muchLaterIcon = randomIcon()

  return weather
}

export default {
  method : 'GET',
  path   : '/weather',
  handler(request, reply) {
    reply(get())
  }
}

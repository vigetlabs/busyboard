import request    from 'sync-request'
import moment     from 'moment'
import html_strip from 'htmlstrip-native'
import truncate   from 'truncate'

const get = function() {
  var url      = 'http://api.meetup.com/2/open_events.json/?zip=80302&text=viget&key=285414741962543a2e4c2436165e3d1a'

  var event    = {}
  var response = request('GET', url)
  var data     = JSON.parse(response.body)

  if (data.results[0]) {
    event.atViget     = true

    event.name        = data.results[0].name
    event.date        = moment(data.results[0].time).format('MMM. D')
    event.time        = moment(data.results[0].time).format('h:mmA')
    event.description = truncate(html_strip.html_strip(data.results[0].description), 200)
  } else {
    var url = 'http://api.meetup.com/2/open_events.json/?zip=80302&radius=2&topic=web&key=285414741962543a2e4c2436165e3d1a'
    var response = request('GET', url)
    var data = JSON.parse(response.body)

    if (data.results[0]) {
      event.atViget     = false
      event.name        = data.results[0].name
      event.date        = moment(data.results[0].time).format('MMMM. D')
      event.time        = moment(data.results[0].time).format('h:mmA')
      event.description = truncate(html_strip.html_strip(data.results[0].description), 200)
    }
  }

  return event;
}

export default {
  method : 'GET',
  path   : '/event',
  handler(request, reply) {
    reply(get())
  }
}

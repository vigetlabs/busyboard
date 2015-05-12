import collect from './collect'
import mock    from './mock'
import process from './process'

export default {
  method : 'GET',
  path   : '/buses',
  handler(request, reply) {
    if (request.query.mock) {
      var data = mock()
    } else {
      var data = collect()
    }
    reply(process(data))
  }
}


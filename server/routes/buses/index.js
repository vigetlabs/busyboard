import collect from './collect'
import demo    from './demo'
import process from './process'

export default {
  method : 'GET',
  path   : '/buses',
  handler(request, reply) {
    let data = request.query.demo ? demo() : collect()
    reply(process(data))
  }
}

export default {
  method : 'GET',
  path   : '/event',
  handler(request, reply) {
    reply({foo: bar})
  }
}

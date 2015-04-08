export default {
  method : 'GET',
  path   : '/weather',
  handler(request, reply) {
    reply({foo: bar})
  }
}

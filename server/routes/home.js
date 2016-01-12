export default {
  path    : '/',
  method  : 'GET',
  handler(request, reply) {

    if (process.env.NODE_ENV === 'development') {
      reply.view('index-development')
    } else {
      reply.view('index-production')
    }
  }
}

import Hapi  from 'hapi'

const server = new Hapi.Server()

server.connection({
  port: 8000
})

require('../front-end/server')

export default server

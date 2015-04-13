import Hapi  from 'hapi'

const server = new Hapi.Server()

server.connection({
  port: 8000
})

if (process.env.NODE_ENV === 'development') {
  require('../front-end/server')
}

export default server

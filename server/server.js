import Hapi  from 'hapi'

const server = new Hapi.Server()

server.connection({
  port: process.env.PORT || 8000
})

if (process.env.NODE_ENV === 'development') {
  require('../front-end/server')
}

export default server

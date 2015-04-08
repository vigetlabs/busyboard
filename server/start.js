import server from './server'
import routes from './routes'
import views  from './views'

server.route(routes)
server.views(views)

server.start(() => {
  server.log('info', 'Server running at: ' + server.info.uri)
})

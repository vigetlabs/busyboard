import Ajax        from 'simple-ajax'
import { actions } from '../flux'

export default () => {
  const ajax = new Ajax({
    url         : '/event',
    contentType : 'JSON'
  })
  ajax.on('success', () => {
    actions.updateEvent(JSON.parse(ajax.request.response))
  })
  ajax.send()
}

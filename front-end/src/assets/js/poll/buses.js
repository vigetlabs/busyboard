import Ajax        from 'simple-ajax'
import { actions } from '../flux'

export default () => {
  const ajax = new Ajax({
    url         : '/buses',
    contentType : 'JSON'
  })
  ajax.on('complete', () => {
    actions.updateBuses(JSON.parse(ajax.request.response))
  })
  ajax.send()
}

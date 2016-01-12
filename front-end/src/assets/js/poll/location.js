import Ajax        from 'simple-ajax'
import { actions } from '../flux'

export default () => {
  const ajax = new Ajax({
    url         : '/location',
    contentType : 'JSON'
  })
  ajax.on('success', () => {
    actions.updateLocation(JSON.parse(ajax.request.response))
  })
  ajax.send()
}

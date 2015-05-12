import Ajax        from 'simple-ajax'
import { actions } from '../flux'

export default () => {
  const mock = window.location.search.indexOf('mock') >= 0

  const ajax = new Ajax({
    url         : '/buses' + (mock ? '?mock=true' : ''),
    contentType : 'JSON'
  })
  ajax.on('complete', () => {
    actions.updateBuses(JSON.parse(ajax.request.response))
  })
  ajax.send()
}

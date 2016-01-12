import Ajax        from 'simple-ajax'
import { actions } from '../flux'
import { demo }    from './flags'

export default () => {
  const ajax = new Ajax({
    url         : '/buses' + (demo ? '?demo=true' : ''),
    contentType : 'JSON'
  })
  ajax.on('success', () => {
    actions.updateBuses(JSON.parse(ajax.request.response))
  })
  ajax.send()
}

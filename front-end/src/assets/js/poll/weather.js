import Ajax        from 'simple-ajax'
import { actions } from '../flux'
import { demo }    from './flags'

export default () => {
  const ajax = new Ajax({
    url         : '/weather' + (demo ? '?demo=true' : ''),
    contentType : 'JSON'
  })
  ajax.on('success', () => {
    actions.updateWeather(JSON.parse(ajax.request.response))
  })
  ajax.send()
}

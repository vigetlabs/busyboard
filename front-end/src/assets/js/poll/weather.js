import Ajax        from 'simple-ajax'
import { actions } from '../flux'

export default () => {
  const ajax = new Ajax({
    url         : '/weather',
    contentType : 'JSON'
  })
  ajax.on('complete', () => {
    actions.updateWeather(JSON.parse(ajax.request.response))
  })
  ajax.send()
}

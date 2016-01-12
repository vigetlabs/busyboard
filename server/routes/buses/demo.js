import moment from 'moment'
import _      from 'underscore'

const STOPS = [
  '14th & Walnut Gate A',
  '14th & Walnut Gate B',
  '14th & Walnut Gate F',
  'Boulder Transit Center'
]

const ROUTES = [
  'JUMP',
  'BX',
  'BMX',
  'Y',
  'N'
]

const DATA = []

var now = moment()

for(var i = 0; i < 50; i++) {
  let increment = (Math.random() > 0.5) ? 25 : 55
  now = now.add(increment, 'seconds')
  DATA.push({
    stop  : _(STOPS).sample(),
    route : _(ROUTES).sample(),
    time  : now.format('h:mma')
  })
}

export default () => {
  return DATA
}

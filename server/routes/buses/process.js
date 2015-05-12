import hash   from 'object-hash'
import clone  from 'clone'
import moment from 'moment'
import _      from 'underscore'

// https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/12-relative-time-threshold.md
moment.relativeTimeThreshold('s', 100)
moment.relativeTimeThreshold('m', 100)
moment.relativeTimeThreshold('h', 100)
moment.relativeTimeThreshold('d', 100)

const UNITS = {
  seconds : 'sec',
  minutes : 'min',
  hours   : 'hour',
  days    : 'day'
}

export default (data) => {
  var data = clone(data)
  data.forEach((bus) => {
    bus.hash = hash(bus)
    bus.momentTime = moment(bus.time, 'h:mma')
    bus.datetime   = bus.momentTime.format('YYYY-MM-DD HH:mm')

    const fromNow  = bus.momentTime
                        .fromNow(true)
                        .replace(/^(a|an)\s/, '')
                        .split(' ')

    if (fromNow[0] === 'few') {
      bus.fromNowNumber = 1
      if (fromNow[1] === 'seconds') {
        bus.fromNowUnit   = UNITS['minutes']
      } else if (fromNow[1] === 'minutes') {
        bus.fromNowUnit   = UNITS['hours']
      }
    } else {
      bus.fromNowNumber = fromNow[0]
      bus.fromNowUnit   = UNITS[fromNow[1]]
    }
  })

  const now = moment()

  data = _(data).sortBy((bus) => bus.momentTime.unix())
                .filter((bus) => bus.momentTime.unix() > now.unix())

  return data.slice(0, 5)
}

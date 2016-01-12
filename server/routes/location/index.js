import moment from 'moment'
import clone  from 'clone'
import data   from './data'

let currentIndex   = 0
const dayOfTheWeek = (new Date()).getDay()

const isOpen = location => {
  const open  = moment(location.open[dayOfTheWeek],  'h:mma').unix()
  const close = moment(location.close[dayOfTheWeek], 'h:mma').unix()
  if (close < open) moment(close).add(1, 'days').unix()
  return open < moment() && close > moment().unix()
}

const openLocations = data.filter(location => {
  return isOpen(location)
})

openLocations.forEach(location => {
  location.closes = location.close[dayOfTheWeek]
})

const closedLocations = data.filter(location => {
  return !isOpen(location)
})

closedLocations.forEach(location => {
  location.opens = location.open[dayOfTheWeek]
})

const viewableData = clone((openLocations.length === 0) ? closedLocations : openLocations)

viewableData.forEach((location) => {
  delete location.open
  delete location.close
})

const get = function() {
  const location = viewableData[currentIndex]

  if (currentIndex === viewableData.length - 1) {
    currentIndex = 0
  } else {
    currentIndex = currentIndex + 1
  }

  return location
}

export default {
  method : 'GET',
  path   : '/location',
  handler(request, reply) {
    reply(get())
  }
}

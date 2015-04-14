import request from 'sync-request'
import cheerio from 'cheerio'
import moment  from 'moment'
import _       from 'underscore'
import hash    from 'object-hash'

const get = function() {
  var buses   = []
  const now   = moment()
  const urls  = []
  const stops = [
    33236,
    10097,
    24591,
    19825,
    19826,
    10252
  ]

  const pnrs = [
    96
  ]

  stops.forEach((stop) => {
    urls.push(`http://m.rtd-denver.com/mobi/getMyStopViaNearbyStops.do?stopId=${ stop }`)
  })

  pnrs.forEach((pnr) => {
    urls.push(`http://m.rtd-denver.com/mobi/getMyStopViaNearbyStops.do?pnr=${ pnr }`)
  })

  urls.forEach((url) => {
    const response = request('GET', url)
    const $        = cheerio.load(response.body)

    const stop = $('.stopName').text()
    $('tbody tr:not(.tablefoot)').each(function() {
      const $tr         = $(this)
      const route       = $tr.find('th').text()
      const destination = $tr.find('td:nth-child(2)').text()
      const stopTimes   = [
        $tr.find('td:nth-child(3)').text().trim(),
        $tr.find('td:nth-child(4)').text().trim(),
        $tr.find('td:nth-child(5)').text().trim()
      ]
      stopTimes.forEach((time) => {
        const bus = {
          stop        : stop,
          route       : route,
          destination : destination,
          datetime    : moment(time, 'h:mma').format('YYYY-MM-DD HH:mm')
        }
        bus.hash    = hash(bus)
        bus.time    = moment(time, 'h:mma')
        bus.fromNow = bus.time.fromNow(true)
        buses.push(bus)
      })
    })
  })

  buses = _(buses).sortBy((item) => item.time.unix())
                  .filter((item) => item.time.unix() > now.unix())

  return buses.slice(0, 10)
}

export default {
  method : 'GET',
  path   : '/buses',
  handler(request, reply) {
    reply(get())
  }
}

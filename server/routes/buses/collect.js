import request    from 'sync-request'
import cheerio    from 'cheerio'
import * as cache from '../../util/cache'

export default () => {
  var buses = cache.read('buses', 5)

  if (!buses) {
    buses   = []
    const urls  = []
    const stops = [
      33236, // gate a
      10097, // gate b
      // 34280, gate c, invalid number
      // 34282, gate d, invalid number
      34281, // gate e
      24591, // gate f
      // 34259, gate g, invalid number, number is covered
      // 26110, gate h, invalid number
      // ?????, gate i
      19825, // gate j
      33557, // gate k, the one southeast of 14th and canyon
    ]

    const pnrs = [
      96 // downtown boulder station
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

      const stop = $('.h3-alt').text()
      $('tbody tr:not(.tablefoot)').each(function() {
        const $tr         = $(this)
        const route       = $tr.find('th').text()
        const stopTimes   = [
          $tr.find('td:nth-child(3)').text().trim(),
          $tr.find('td:nth-child(4)').text().trim(),
          $tr.find('td:nth-child(5)').text().trim()
        ]
        stopTimes.forEach((time) => {
          const bus = {
            stop        : stop,
            route       : route,
            time        : time
          }
          buses.push(bus)
        })
      })
    })

    cache.write('buses', buses)
  }

  return buses
}

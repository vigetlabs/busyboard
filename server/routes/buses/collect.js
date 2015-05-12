import request from 'sync-request'
import cheerio from 'cheerio'

export default () => {
  var buses   = []
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

  return buses
}

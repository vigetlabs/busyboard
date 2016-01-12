export default {
  demo  : window.location.search.indexOf('demo') >= 0,
  speed : window.location.search.match(/speed=(\d+)/)
    ? parseFloat(window.location.search.match(/speed=(\d+)/)[1])
    : 1
}

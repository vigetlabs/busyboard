export default {
  updateWeather(weather) {
    this.dispatch('UPDATE_WEATHER', weather)
  },

  updateEvent(event) {
    this.dispatch('UPDATE_EVENT', event)
  },

  updateBuses(event) {
    this.dispatch('UPDATE_BUSES', event)
  },

  updateLocation(location) {
    this.dispatch('UPDATE_LOCATION', location)
  }
}

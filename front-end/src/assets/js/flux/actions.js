export default {
  updateWeather(weather) {
    this.dispatch('UPDATE_WEATHER', weather)
  },

  updateEvent(event) {
    this.dispatch('UPDATE_EVENT', event)
  }
}

import Fluxxor from 'fluxxor'

const MainStore = Fluxxor.createStore({
  initialize() {
    this.event = {
      atViget     : true,
      name        : 'Boulder Refresh',
      date        : 'Jan. 1',
      time        : '12:00AM',
      description : 'Loading...'
    }

    this.weather = {
      currently     : 0,
      currentlyIcon : 'clear-day',
      later         : 0,
      laterIcon     : 'clear-day',
      muchLater     : 0,
      muchLaterIcon : 'clear-day'
    },

    this.location = {
      name                : '',
      closingTime         : '',
      directionsLength    : '',
      directionsDirection : '',
      directionsArrow     : ''
    },

    this.bindActions(
      'UPDATE_WEATHER',  this.onUpdateWeather,
      'UPDATE_EVENT',    this.onUpdateEvent,
      'UPDATE_BUSES',    this.onUpdateBuses,
      'UPDATE_LOCATION', this.onUpdateLocation
    )
  },

  onUpdateWeather(payload) {
    this.weather = payload
    this.emit('change')
  },

  onUpdateEvent(payload) {
    this.event = payload
    this.emit('change')
  },

  onUpdateBuses(payload) {
    this.buses = payload
    this.emit('change')
  },

  onUpdateLocation(payload) {
    this.location = payload
    this.emit('change')
  },

  getState() {
    return {
      event    : this.event,
      weather  : this.weather,
      buses    : this.buses,
      location : this.location
    }
  }
})

export default {
  MainStore: new MainStore()
}

require('../css/app')

import React      from 'react'
import flux       from './flux'
import fluxMixins from './flux/mixins'
import poll       from './poll'

import Logo       from './tiles/logo'
import Weather    from './tiles/weather'
import Event      from './tiles/event'
import Locations  from './tiles/locations'

poll()

const App = React.createClass({
  mixins: fluxMixins,

  getStateFromFlux() {
    const flux = this.getFlux()
    return flux.store('MainStore').getState()
  },

  render: function() {
    return (
      <main>
        <Logo />
        <Event {...this.state.event} />
        <Locations />
        <Weather {...this.state.weather} />
      </main>
    )
  }
})

React.withContext({flux: flux}, () => {
  React.render(<App />, document.getElementById('content'))
})

require('../css/app')

import flux       from './flux'
import fluxMixins from './flux/mixins'
import poll       from './poll'

import Logo       from './tiles/logo'
import Buses      from './tiles/buses'
import Weather    from './tiles/weather'
import Event      from './tiles/event'
import Location   from './tiles/location'

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
        <Buses buses={this.state.buses} />
        <Event {...this.state.event} />
        <Location {...this.state.location} />
        <Weather {...this.state.weather} />
      </main>
    )
  }
})

React.withContext({flux: flux}, () => {
  React.render(<App />, document.getElementById('content'))
})

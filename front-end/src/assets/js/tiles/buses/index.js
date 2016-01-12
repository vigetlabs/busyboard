import Bus                    from './Bus'
import Dot                    from './Dot'
import Background             from './Background'
import TimeoutTransitionGroup from '../../vendor/timeout-transition-group'

export default React.createClass({
  _getBuses() {
    if (this.props.buses) {
      return this.props.buses.map((bus, i) => {
        return <Bus key={bus.hash + 'bus'}
                    nth={i}
                    isNext={i === 0}
                    {...bus} />
      })
    }
  },

  _getDots() {
    if (this.props.buses) {
      return this.props.buses.map((bus, i) => {
        return <Dot key={bus.hash + 'dot'}
                    isNext={i === 0}
                    {...bus} />
      })
    }
  },

  render() {
    return (
      <div className="buses">
        <h2>
          That your bus?
          <span dangerouslySetInnerHTML={{__html: require('../../../images/bus.svg') }} />
        </h2>
        <ul className="buses__list">
          <TimeoutTransitionGroup enterTimeout={5000}
                                  leaveTimeout={5000}
                                  transitionName=''>
            {this._getBuses()}
          </TimeoutTransitionGroup>
        </ul>
        <ul className="buses__map">
          <li className="-here">
            <span dangerouslySetInnerHTML={{__html: require('../../../images/here.svg') }} />
          </li>
          <TimeoutTransitionGroup enterTimeout={5000}
                                  leaveTimeout={5000}
                                  transitionName=''>
            {this._getDots()}
          </TimeoutTransitionGroup>
        </ul>
        <Background />
      </div>
    )
  }
})

import Bus from './Bus'

export default React.createClass({
  _getBuses() {
    console.log(this.props.buses)
    if (this.props.buses) {
      return this.props.buses.map((bus, i) => {
        return <Bus key={bus.hash}
                    isNext={i === 0}
                    {...bus} />
      })
    }
  },

  render() {
    return (
      <div className="bus">
        <h2>
          That your bus?
        </h2>
        <ul className="bus__list">
          {this._getBuses()}
        </ul>
        <ul className="bus__map"></ul>
      </div>
    )
  }
})

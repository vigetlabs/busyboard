export default React.createClass({
  render() {
    const className = this.props.isNext ? '-next' : ''
    return <li className={className}>
      <h3>{this.props.route}</h3>
      <small>From {this.props.stop}</small>
      <time dateTime={this.props.dateTime}>
        {this.props.fromNow}
        <small>min</small>
      </time>
    </li>
  }
})

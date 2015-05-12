export default React.createClass({
  render() {
    const className = this.props.isNext ? '-next' : ''
    return <li className={`${className} -nth-${this.props.nth}`}>
      <h3>{this.props.route}</h3>
      <p>From {this.props.stop}</p>
      <time dateTime={this.props.dateTime}>
        <b>
          {this.props.fromNowNumber}
        </b>
        <small>
          {this.props.fromNowUnit}
        </small>
      </time>
    </li>
  }
})

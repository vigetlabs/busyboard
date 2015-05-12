export default React.createClass({
  render() {
    const className = this.props.isNext ? '-next' : ''
    return <li className={className}
                data-stop={this.props.stop}>
    </li>
  }
})

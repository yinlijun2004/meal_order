var React = require('react');
var {Link} = require('react-router');

module.exports = React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})

var React = require('react');
var NavLink = require('./nav-link');

var App = React.createClass({
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/managerment">管理菜单</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

module.exports = App;

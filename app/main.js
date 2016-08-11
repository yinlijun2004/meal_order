'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var { Router, browserHistory } = require('react-router');
var routes = require('./routes/routes');

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
);

/*
var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./container.jsx');

import '../main.css';

const URLS = {orders: 'api/orders', meals: 'api/meals'};
ReactDOM.render(
    <Container urls={URLS}/>,
    document.getElementById('app')
);
*/

/*
import '../main.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); 

var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

ReactDOM.render(
    <TodoList />,
    document.getElementById('app')
);
*/

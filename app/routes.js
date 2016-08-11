'use strict';

import '../main.css';

var React = require('react');
var {Route, IndexRoute} = require('react-router');
var App = require('./app');
var MealManager = require('./meal-manager.jsx');
var Container = require('./container.jsx');
var MealCompose = require('./meal-compose.jsx');

module.exports = (
  <Route path="/" component={App}>
    <Route path="orders" component={Container} />
    <Route path="managerment" component={MealManager} />
    <Route path="edit/:id" component={MealCompose} />
  </Route>
);

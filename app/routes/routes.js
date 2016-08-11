'use strict';

import '../css/main.css';

var React = require('react');
var {Route, IndexRoute} = require('react-router');
var App = require('../components/app');
var MealManager = require('../components/meal-manager');
var Container = require('../components/container');
var MealCompose = require('../components/meal-compose');

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Container} />
    <Route path="managerment" component={MealManager} />
    <Route path="edit/:id" component={MealCompose} />
  </Route>
);

'use strict';

var React = require("react");
var Meals = require("./meals.jsx");
var AppStore = require("../stores/app-store.js");

function getState() {
  var state = {
    meals: AppStore.getMeals(),
    orders: AppStore.getOrders(),
  }

  return state;
}

var MealManager = React.createClass({
  _onChange() {
    this.setState(getState());
  },
  handleMealCompose(id) {
  },
  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  },
  getInitialState() {
    return getState();
  },
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div className="mealManager">
        <Meals meals={this.state.meals} compose={true} onMealCompose={this.handleMealCompose} />
      </div>
    );
  },
});

module.exports = MealManager;

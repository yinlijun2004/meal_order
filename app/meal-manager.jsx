'use strict';

var React = require("react");
var Meals = require("./meals.jsx");

var MealManager = React.createClass({
  handleMealCompose(id) {
  },
  render: function() {
    var meals = this.props.meals;
    return (
      <div className="mealManager">
        <Meals meals={meals} compose={true} onMealCompose={this.handleMealCompose} />
      </div>
    );
  },
});

module.exports = MealManager;

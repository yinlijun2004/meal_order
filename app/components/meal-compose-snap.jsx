'use strict'

var React = require('react');
var Meal = require('./meal.jsx');

var MealComposeSnap = React.createClass({
  handleClick(){
    this.props.handleComposeMeal();
  },
  render(){
    var meal = {};
    return (
      <div className="mealComposeSnap" onClick={this.handleClick}>
        <div className="addButton">+</div>
      </div>
    );
  },
});

module.exports = MealComposeSnap;

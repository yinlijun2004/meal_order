'use strict';

var React = require('react');
var Meal = require('./meal.jsx');
var MealComposeSnap = require('./meal-compose-snap.jsx')

var Meals = React.createClass({
  render: function() {
    var meals = this.props.meals;
    var compose = this.props.compose;
    var array = meals.map((meal, key) => {
      return <Meal mealInfo={meal} compose={compose} key={key} onOrderSubmit={this.props.onOrderSubmit} onMealCompose={this.props.onMealCompose}></Meal>
    });
    
    var rows = []; 
    if(compose){
      array.push(<MealComposeSnap key="empty" onMealCompose={this.props.onMealCompose}></MealComposeSnap>);
    }
    if(array.length === 0) {
      rows = <p>厨师开了会儿小差！</p>;
    } else {
      while(array.length > 0) {
        rows.push(
          <div className="mealsRow">{array.splice(0, 4)}</div>
        );
      }  
    }
    
    return (
      <div className="meals">
        {rows}
      </div>
    );
  }  
});

module.exports = Meals;

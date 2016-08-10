var React = require('react');
var Meal = require('./meal.jsx')

var Meals = React.createClass({
  render: function() {
    var meals = this.props.meals;
    var array = meals.map((meal, key) => {
      return <Meal mealInfo={meal} key={key}></Meal>
    });
    var rows = [];
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

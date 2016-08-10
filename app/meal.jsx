var React = require('react');

var Meal = React.createClass({
  render: function() {
    var info = this.props.mealInfo;
    return (
      <div className="mealInfo">
        <img className="mealInfoImg" src={info.imgUrl}></img>
        <p className="mealInfoMeal">{info.meal}</p>
        <p className="mealInfoPrice">{info.price}</p>
        <input type="button" className="mealInfoOrder" value="确定"></input>
      </div>
    );
  }
});

module.exports = Meal;

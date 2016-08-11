'use strict';

var React = require('react');

var Meal = React.createClass({
  handleMealCompose: function() {
    //goto compose page
    this.props.onMealCompose(this.props.mealInfo.id);
  },
  handleOrderSumbit: function() {
    //goto order conform page
    this.props.onOrderSubmit(this.props.mealInfo.id);
  },
  render: function() {
    const info = this.props.mealInfo;
    const compose = this.props.compose;
    const str = compose ? "编辑" : "确定";
    const handle = compose ? this.handleMealCompose : this.handleOrderSumbit;
    return (
      <div className="mealInfo">
        <img className="mealInfoImg" src={info.imgUrl}></img>
        <p className="mealInfoMeal">{info.meal}</p>
        <p className="mealInfoPrice">{info.price}</p>
        <input type="button" className="mealInfoOrder" value={str} onClick={handle}></input>
      </div>
    );
  }
});

module.exports = Meal;

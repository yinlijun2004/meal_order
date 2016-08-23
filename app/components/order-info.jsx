var React = require('react');
var AppStore = require("../stores/app-store.js");
var OrderInfo = React.createClass({
  render: function(){
    return (<div className="orderInfo">
                <p className="orderInfoDate">Date:{this.props.order.date}</p>
                <p className="orderInfoMeal">Meal:{this.props.order.meal.meal}</p>
                <p className="orderInfoPrice">Price:{this.props.order.meal.price}</p>
                <p className="orderInfoUser">User:{this.props.order.user}</p>
            </div>);
  }
});

module.exports = OrderInfo;

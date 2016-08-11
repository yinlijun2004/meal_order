var React = require('react');
var OrderInfo = React.createClass({
  render: function(){
    return (<div className="orderInfo">
                <p className="orderInfoDate">Date:{this.props.date}</p>
                <p className="orderInfoMeal">Meal:{this.props.meal}</p>
                <p className="orderInfoPrice">Price:{this.props.price}</p>
                <p className="orderInfoUser">User:{this.props.user}</p>
            </div>);
  }
});

module.exports = OrderInfo;

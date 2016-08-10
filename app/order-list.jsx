var React = require('react');
var OrderInfo = require('./order-info.jsx');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); 

var OrderList = React.createClass({
  render: function() {
    var orders = this.props.orders;
    var infos = orders.map((order, key) => {
      return (<OrderInfo key={key} meal={order.meal} price={order.price} user={order.user} date={order.date}></OrderInfo>)
    });

    if(infos.length === 0){
      infos = <p>暂时还没有订单！</p>;
    }

    return (
      <div>
        <ReactCSSTransitionGroup className="orderList" transitionName="carousel">
          {infos}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = OrderList;

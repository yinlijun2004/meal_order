'use strict';

var React = require('react');
var OrderForm = require('./order-form.jsx');
var OrderList = require('./order-list.jsx');
var Meals = require('./meals.jsx');
var AppActions = require("../actions/app-actions.js");
var AppStore = require("../stores/app-store.js");
var Api = require("../api/api");

var ORDERS = [
  {
    date: 2016-8-8,
    user: 'Johnny',
    meal: '宫保鸡丁',
    price: 23  
  },
  {
    date: 2016-8-8,
    user: 'Johnny',
    meal: '宫保鸡丁1',
    price: 23  
  },
  {
    date: 2016-8-8,
    user: 'Johnny',
    meal: '宫保鸡丁2',
    price: 23  
  },
  {
    date: 2016-8-8,
    user: 'Johnny',
    meal: '宫保鸡丁3',
    price: 23  
  }
];

var MEALS = [
  {
    meal: "小炒肉",
    price: 15,
    imgUrl: "http://images.meishij.net/p/20130613/47b8be11272cb69d36f92ea984c636ad.jpg"
  },
  {
    meal: "小炒肉2",
    price: 15,
    imgUrl: "http://images.meishij.net/p/20130613/47b8be11272cb69d36f92ea984c636ad.jpg"
  },
  {
    meal: "小炒肉3",
    price: 15,
    imgUrl: "http://images.meishij.net/p/20130613/47b8be11272cb69d36f92ea984c636ad.jpg"
  },
  {
    meal: "小炒肉4",
    price: 15,
    imgUrl: "http://images.meishij.net/p/20130613/47b8be11272cb69d36f92ea984c636ad.jpg"
  },
  {
    meal: "小炒肉5",
    price: 15,
    imgUrl: "http://images.meishij.net/p/20130613/47b8be11272cb69d36f92ea984c636ad.jpg"
  }
];

function getState() {
  var state = {
    meals: AppStore.getMeals(),
    orders: AppStore.getOrders(),
  }

  return state;
}

var Container = React.createClass({
  _onChange() {
    this.setState(getState());
  },
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },
  getInitialState() {
    return getState();
  },
  componentDidMount() {
    Api.loadMeals();
    Api.loadOrders();
    AppStore.addChangeListener(this._onChange);
  },
  handleMealSumbit(meal) {
  },
  handleOrderSumbit(id) {
    var orders = this.state.orders;
    order.date = new Date();
    order.price = Math.random() * 10; 
    var newOrders = orders.concat(order);
    httpPostURL(ServerUrl.orders, JSON.stringify(order), function(success, xhr, data) {
      if(success) {
        this.setState({orders: JSON.parse(data)});
      } else {
        console.log(ServerUrl.orders, "POST", data, "failed");
      }
    }.bind(this));
  },
  render() {
    return (
      <div>
        <div id='mealPanel'>
          <div id='mealPanel'>
            <Meals meals={this.state.meals} onOrderSubmit={this.handleOrderSumbit}></Meals>
          </div>
          <div id='orderPanel'>
            <h3>已下订单</h3>
            <OrderList orders={this.state.orders}></OrderList>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Container;

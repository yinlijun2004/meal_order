var React = require('react');
var OrderForm = require('./order-form.jsx');
var OrderList = require('./order-list.jsx');
var Meals = require('./meals.jsx');

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

var Container = React.createClass({
  getInitialState() {
    return {orders: []};
  },
  loadOrdersFromServer() {
    /*
    fetch(this.props.url, {method: 'get'})
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({orders: data});
      })
      .catch(e => {
        console.error(e);
      });
    */
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({orders: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount() {
    this.loadOrdersFromServer();
  },
  handleOrderSumbit(order) {
    var orders = this.state.orders;
    order.date = new Date();
    order.price = Math.random() * 10; 
    var newOrders = orders.concat(order);
    //this.setState({orders: newOrders});
    var content = JSON.stringify(order);
    console.log("content" + content);  
    
    /* 
    fetch(this.props.url, {method: 'post', body: content})
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({orders: data});
      })
      .catch(e => {
        console.error(e);
      });
    */
    $.ajax({
      url: this.props.url,
      type: 'POST',
      dataType: 'json',
      data: order,
      success: function(data){
        this.setState({orders: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  render() {
    return (
      <div>
        <div id='mealPanel'>
          <Meals meals={MEALS}></Meals>
        </div>
        <div id='orderPanel'>
          <OrderForm onOrderSubmit={this.handleOrderSumbit}></OrderForm>
          <OrderList orders={this.state.orders}></OrderList>
        </div>
      </div>
    );
  }
});

module.exports = Container;

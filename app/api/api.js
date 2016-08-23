var ServerUrl = require('../constants/server-api'); 
var AppActions = require('../actions/app-actions');
var fetch = require('node-fetch');

var Api = {
  loadMeals() {
    fetch(ServerUrl.meals)
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      AppActions.receiveMeals(json);
    })
    .catch(function(e){
      console.log(ServerUrl.meals, "loading failed", e);
    });
  },
  loadOrders() {
    fetch(ServerUrl.orders)
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      AppActions.receiveOrders(json);
    })
    .catch(function(e){
      console.log(ServerUrl.orders, "loading failed", e);
    });
  }
}

module.exports = Api;

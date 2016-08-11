var {httpGetJSON, httpPostURL} = require('../common/xhr-helper');
var ServerUrl = require('../constants/server-api'); 
var AppActions = require('../actions/app-actions');

var Api = {
  loadMeals() {
    httpGetJSON(ServerUrl.meals, json => {
      if(json){
        AppActions.receiveMeals(json);
      } else {
        console.log(ServerUrl.meals, "loading failed");
      }
    });
  },
  loadOrders() {
    httpGetJSON(ServerUrl.orders, json => {
      if(json){
        AppActions.receiveOrders(json);
      } else {
        console.log(ServerUrl.orders, "loading failed");
      }
    });
  }
}

module.exports = Api;

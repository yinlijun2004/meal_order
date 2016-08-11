'use strict';

var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  receiveMeals(meals) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MEALS,
      meals: meals
    })
  },
  receiveOrders(orders) {
    AppDispatcher.handleViewAction({
        actionType: AppConstants.RECEIVE_ORDERS,
        orders: orders
    })
  }
};

module.exports = AppActions;	

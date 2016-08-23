'use strict';

var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants.js');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "changee";
var _meals = [];
var _orders = [];

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getMeals() {
    return _meals;
  },
  getMealById(id) {
    return _meals.find(function(meal){
      return id === meal.id;
    });
  },
  getOrderById() {
    return _orders.find(function(order){
      return id === order.id;
    });
  },
  getOrders() {
    return _orders;
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  dispatcherIndex: AppDispatcher.register(function(payload) {
    const action = payload.action;
    switch(action.actionType) {
      case AppConstants.RECEIVE_MEALS:
        _meals = payload.action.meals; 
        break;
      case AppConstants.RECEIVE_ORDERS:
        _orders = payload.action.orders;
        break;
    }
    AppStore.emitChange();
  }), 
});

module.exports = AppStore;

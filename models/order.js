'use strict';

var mongoose = require('mongoose');
var BaseModel = require('./base_model');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  id: {type: String},
  user: {type: String},
});

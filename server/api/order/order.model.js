'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  order_contents: [],
  date: String,
  user_id: String,
  user_status: String
});


module.exports = mongoose.model('Order', OrderSchema);
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  order_contents: [],
  date: String,
  user_id: { type: Schema.Types.ObjectId, ref: 'User'},
  user_status: String,
  total_price: Number
});


module.exports = mongoose.model('Order', OrderSchema);

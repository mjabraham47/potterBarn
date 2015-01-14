'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({

  contents: [{
      product: { type: Schema.Types.ObjectId, ref: 'Product'},
      quantity_ordered: Number
    }],

  user_id: { type: Schema.Types.ObjectId, ref: 'User'},
  date: { type: Date, default: Date.now },
  is_order: { type: Boolean, default: false },
  status: String

});

module.exports = mongoose.model('Cart', CartSchema);

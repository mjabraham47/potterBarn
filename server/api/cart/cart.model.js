'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//no validations
// no methods. we could have methods 

var CartSchema = new Schema({

  contents: [{
      product: { type: Schema.Types.ObjectId, ref: 'Product'},
      quantity_ordered: Number
    }],

  user: { type: Schema.Types.ObjectId, ref: 'User'},
  date: { type: Date, default: Date.now },
  is_order: { type: Boolean, default: false },
  status: String

});

module.exports = mongoose.model('Cart', CartSchema);

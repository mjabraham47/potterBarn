'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  info: String,
<<<<<<< HEAD
  active: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
=======
  categories: [String],
  photo: String,
  price: Number,
  Quantity: Number
});

ProductSchema.index({categories: 1});

module.exports = mongoose.model('Product', ProductSchema);
>>>>>>> 9fa7f1bb6694d4cd737d8b5ef9a1438c3448e982

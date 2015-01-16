'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  info: String,
  categories: [String],
  photo: String,
  price: Number,
  quantity: Number,
});

ProductSchema.index({categories: 1});

ProductSchema.statics.findProductsByCategory = function(category, cb) {
  return this.find({ categories: category }, cb);
};



module.exports = mongoose.model('Product', ProductSchema);


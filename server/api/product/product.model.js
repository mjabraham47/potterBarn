'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String, required: true },
  info: { type: String, required: true },
  categories: [String],
  photo: { type: String, required: true },
  price: {type: Number, required: true },
  quantity: { type: Number, default: 0 },
});

ProductSchema.index({categories: 1});

ProductSchema.statics.findProductsByCategory = function(category, cb) {
  return this.find({ categories: category }, cb);
};



module.exports = mongoose.model('Product', ProductSchema);


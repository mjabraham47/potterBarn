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
  reviews: [{
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    rating: Number,
    review: String,
    date: Date
  }]
});

ProductSchema.index({categories: 1});

ProductSchema.methods.findProductByCategory = function(cb) {
  return this.model('Product').find({ categories: this.category }, cb);
};



module.exports = mongoose.model('Product', ProductSchema);


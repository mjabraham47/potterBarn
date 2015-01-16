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


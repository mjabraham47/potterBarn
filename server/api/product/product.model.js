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

ProductSchema.methods.convertPrice = function(price) {
  var sickles = 0;
  var galleons = 0;
  var galleon_string = " Galleons";
  var sickle_string = " Sickles";
  function check_sickles() {
    if ( price < 17 ) {
      sickles += price;
    }
    else if ( price >= 17 ) {
      price -= 17;
      galleons += 1;
      check_sickles();
    }
  }
  check_sickles();
  if (galleons === 1) {
    galleon_string = " Galleon";
  }
  if (sickles === 1) {
    sickle_string = " Sickle";
  }
  if ( galleons === 0 ) {
    return sickles.toString() + sickle_string;
  } else {
    return galleons.toString() + galleon_string + " and " + sickles.toString() + sickle_string;
  }
};

module.exports = mongoose.model('Product', ProductSchema);


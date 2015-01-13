'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  user_id: String,
  product_id: String,
  date: String,
  review_content: {
  	review_text: String,
  	rating_stars: Number
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
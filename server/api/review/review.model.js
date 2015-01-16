'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _product: {type: Schema.Types.ObjectId, ref: 'Product'},
  date: String,
  review_content: {
  	review_text: String,
  	rating_stars: Number
  }
});


ReviewSchema.statics.reviewsByProduct = function(product, cb){
	return this.find({ _product: product.id })
				.populate('_product _user')
				.exec(cb);
}

module.exports = mongoose.model('Review', ReviewSchema);


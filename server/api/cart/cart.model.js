'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({

  contents: [{
      product: { type: Schema.Types.ObjectId, ref: 'Product'},
      quantity_ordered: Number
    }],

  user: { type: Schema.Types.ObjectId, ref: 'User'},
  date: { type: Date, default: Date.now },
  status: { String, default: 'cart' }

});


// CartSchema.methods = {
//  check_product: function(id, callback){
//    if (this.contents.indexOf(id) === -1){
//      // console.log('populating bids array')
//      this.bids.push(id)
//      this.numBids = this.bids.length;
//      this.save(function(err, newPost){
//        callback(newPost);
//      })
//    }
//  },

module.exports = mongoose.model('Cart', CartSchema);

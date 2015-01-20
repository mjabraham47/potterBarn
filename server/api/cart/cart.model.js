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
  status: { type: String,
    enum:['cart', 'ordered', 'shipped', 'canceled', 'returned'],
    default: 'cart' }

});

CartSchema.statics.orderByStatus = function(cb){
  return this.find({ $where: "this.status = 'ordered' || this.status = 'shipped' || this.status = 'canceled' || this.status = 'returned'" })
        .populate('contents.product user')
        .exec(cb);
}

//gets carts by user
CartSchema.statics.cartsByUser = function(user, cb){
  return this.find({ user: user })
        .populate('contents.product')
        .exec(cb);
}

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

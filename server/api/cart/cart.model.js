'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  name: String,
  info: String,
  quantity: Number,
  price: {type: Number, get: getPrice, set: setPrice },
  active: Boolean,
  photo: String
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return (num/100).toFixed(2);
}

module.exports = mongoose.model('Cart', CartSchema);
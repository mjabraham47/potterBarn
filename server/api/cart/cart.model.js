'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  name: String,
  info: String,
  price: {type: Number, get: getPrice, set: setPrice }
  active: Boolean
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

module.exports = mongoose.model('Cart', CartSchema);
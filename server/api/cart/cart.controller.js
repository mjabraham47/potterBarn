'use strict';

var _ = require('lodash');
var Cart = require('./cart.model');
var Product = require('../product/product.model')

// Get list of carts
exports.index = function(req, res) {
  Cart.find(function (err, carts) {
    if(err) { return handleError(res, err); }
    return res.json(200, carts);
  });
};

// Get a single cart
exports.show = function(req, res) {
  Cart.find({user : req.params.id }, function (err, cart) {
    if(err) { return handleError(res, err); }
    if(!cart) { return res.send(404); }
    return res.json(cart);
  });
  // Cart.findById(req.params.id, function (err, cart) {
  //   if(err) { return handleError(res, err); }
  //   if(!cart) { return res.send(404); }
  //   return res.json(cart);
  // });
};

exports.add_product = function(req, res) {
  Cart.findOneAndUpdate(
    { user: req.params.id, is_order:false },
    { $push: { contents: { product: req.params.product, quantity_ordered: req.params.quantity}}},
    function(err, cart) {
      if(err) { return handleError(res, err); }
      if(!cart) { console.log('No cart for user!'); }
      return res.json(201, cart);
  })
}

// Creates a new cart in the DB.
exports.create = function(req, res) {
  Cart.create(req.body, function(err, cart) {
    if(err) { return handleError(res, err); }
    return res.json(201, cart);
  });
};

exports.create_new_user_cart = function(req, res) {
  var new_cart = {
    products: [],
    user: req.params.id
  };
  Cart.create(new_cart, function(err, cart) {
    if(err) { return handleError(res, err) };
      return res.json(201, cart);
  });
};

// Updates an existing cart in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cart.findById(req.params.id, function (err, cart) {
    if (err) { return handleError(res, err); }
    if(!cart) { return res.send(404); }
    var updated = _.merge(cart, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cart);
    });
  });
};

// Deletes a cart from the DB.
exports.destroy = function(req, res) {
  Cart.findById(req.params.id, function (err, cart) {
    if(err) { return handleError(res, err); }
    if(!cart) { return res.send(404); }
    cart.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.destroyProduct = function(req, res) {
  console.log("it hits");
  Cart.update({_id: req.params.id}, { $pull: { contents : {product: req.params.item }}}, 
  function (err, cart) {
    if(err) { return handleError(res, err); }
      console.log(cart);
      return res.send(200, cart);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

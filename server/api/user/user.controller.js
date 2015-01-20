'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var Cart = require('../cart/cart.model');
var _ = require('lodash');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.send(500, err);
    res.json(200, users);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  Cart.create({ user: newUser._id }, function(err, cart) {
    newUser.provider = 'local';
    newUser.role = 'user';
    newUser.carts = [cart._id];
    newUser.save(function(err, user) {
      if (err) return validationError(res, err);
          var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
          res.json({ token: token });
    });
  });


};


exports.update = function (req, res, next) {

  User.findById(req.params.id, function (err, user) {
    if (err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    var updated = _.merge(user, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      console.log(user);
      return res.json(200, user);
    });
  });

  // User.update({_id: req.params.id}, { $set: { billing_address : {street: req.body.billing_address.billingStreetAddress, city: req.body.billing_address.billingCity,
  //   state: req.body.billing_address.billingState, zip: req.body.billing_address.billingZip}, shipping_address: {street: req.body.shipping_address.shippingStreetAddress, city: req.body.shipping_address.shippingCity,
  //   state: req.body.shipping_address.shippingState, zip: req.body.shipping_address.shippingZip}, firstName: req.body.firstName, lastName: req.body.lastName,
  //   phone: req.body.phone, email: req.body.eMail}},
  // function (err, user) {
  //   if (err) return next(err);
  //   console.log(user);
  //   return res.json(200, user);
  // });
};
/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};

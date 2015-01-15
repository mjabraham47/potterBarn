'use strict';

var should = require('should');
var assert = require('assert');
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Product = require('../product/product.model');
var Cart = require('../cart/cart.model');

describe('GET /api/cart', function() {

  it('should respond with JSON array', function(done) {
    request(app)
    .get('/api/cart')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      done();
    });
  });
})

describe('Cart Model', function() {
    var product = new Product();
    var user = new User();
    var cart = new Cart({
      contents: [{
        product: product,
        quantity_ordered: 4
      }],
      user: user,
      date: "2014-12-23 3:4:41",
      is_order: false,
      status: "Processing"
    });

    it('contents contains a product', function(){
      cart.contents[0].should.be.instanceOf(Product);
      should(cart.contents[0]).equal(product);
    });

    it('has a user', function(){
      cart.user.should.be.instanceOf(User);
      should(cart.user).equal(user);
    });

    it('is_order starts as false', function(){
      should(cart.is_order).equal(false)
    });  
});
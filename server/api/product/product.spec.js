'use strict';

var should = require('should');
var assert = require('assert');
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Product = require('../product/product.model');

var user = new User();
var product = new Product(
{
  name: 'Holly Wand',
  info: 'Handcrafted from Solid Holly, with essence of Phoenix feather. Holly possesses protection qualities which far surpass any other wood and is on record for its overall strength. Holly is the chosen wood for use in performing and guiding dream magic.',
  categories: ['Wands'],
  photo: '/assets/images/wands/holly.jpg',
  price: 200,
  quantity: 5,
  reviews:[{
    user: user,
    rating: 3,
    review: "Good",
    date: "2014-12-23 3:4:41"
  }]
});

describe('GET /api/products', function() {

  it('should respond with JSON array', function(done) {
    request(app)
    .get('/api/products')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      done();
    });
  });
});

describe('Product Model', function(){

  it('has a name', function(){
    product.name.should.be.instanceOf(String);
  });
  it('has info', function(){
    product.info.should.be.instanceOf(String);
  });
  it('categories is an array', function(){
    product.categories.should.be.instanceOf(Array);
  });

  it('method returns categories', function(){
    /*product.findProductByCategory().should.equal('Wands')*/;
  })
})
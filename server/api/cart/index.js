'use strict';

var express = require('express');
var controller = require('./cart.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


// how is this different from cart.create?
router.get('/newcart/:id', controller.create_new_user_cart);


// i'd do this a little differently. I'd make a post request to 
// /:id/products
router.get('/add/:id/:product', controller.add_product);

module.exports = router;

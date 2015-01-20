'use strict';

var express = require('express');
var controller = require('./cart.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/:id/:item/:quantity', controller.getQuantity);
router.get('/newcart/:id', controller.create_new_user_cart);
router.get('/add/:id/:product/:quantity', controller.add_product);
router.get('/orders', controller.orders);
router.post('/', controller.create);
router.post('/:id/:item/:quantity', controller.updateQuantity);
router.put('/:id', controller.update);
router.put('/order/:id', controller.cart_to_order);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.delete('/:id/:item', controller.destroyProduct);


module.exports = router;

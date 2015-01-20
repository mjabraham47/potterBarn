'use strict';

var express = require('express');
var controller = require('./cart.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/find/:id', controller.lookup_user_cart);
router.post('/', controller.create);
router.post('/newcart', controller.create_new_user_cart);
router.put('/:id', controller.update);
router.put('/merge/:id', controller.merge_cart)
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.delete('/:id/:item', controller.destroyProduct)
router.get('/add/:id/:product/:quantity', controller.add_product);

module.exports = router;

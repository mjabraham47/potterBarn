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
router.delete('/:id/:item', controller.destroyProduct)
router.get('/newcart/:id', controller.create_new_user_cart);
router.get('/add/:id/:product/:quantity', controller.add_product);

module.exports = router;

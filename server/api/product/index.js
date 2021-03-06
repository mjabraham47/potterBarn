'use strict';

var express = require('express');
var controller = require('./product.controller');
var reviewController = require('../review/review.controller')

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/category/:category', controller.show_category);
/*router.get('/review/:id', reviewController.productReviews);*/

module.exports = router;

'use strict';

var express = require('express');
var controller = require('./review.controller');

var router = express.Router();

// i think this whole router should be nested inside the products router
// I think routes like 
// /api/products/:id/reviews 
// would be ideal

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
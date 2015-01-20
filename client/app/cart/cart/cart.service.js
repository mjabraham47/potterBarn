'use strict';

// why is there a cart directory in the cart directory
// also, this could be a value provider if all its doing is storing data

angular.module('potterBarnApp')
  .service('cart', function () {
		return {
      shoppingCart : []
  };  });

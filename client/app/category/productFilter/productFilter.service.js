'use strict';

angular.module('potterBarnApp')
  .factory('productFilter', function ($resource) {
      // good use of Resource!
      var currentProducts = $resource('/api/products/category/:categories',
        { categories: '@category' });
      return currentProducts;

      
    });

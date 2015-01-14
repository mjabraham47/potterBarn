'use strict';

angular.module('potterBarnApp')
  .factory('productFilter', function ($resource) {
      
      var currentProducts = $resource('/api/products/category/:categories',
        { categories: '@category' });
      return currentProducts;

      
    });

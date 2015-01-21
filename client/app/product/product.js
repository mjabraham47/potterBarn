'use strict';

angular.module('potterBarnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: 'product/:product',
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      })
  });
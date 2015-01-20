'use strict';

angular.module('potterBarnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: 'api/products/category/:category/:info',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });
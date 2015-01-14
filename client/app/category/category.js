'use strict';

angular.module('potterBarnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: 'api/product/category/:category',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });
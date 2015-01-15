'use strict';

angular.module('potterBarnApp')
  .controller('MainCtrl', function ($scope, $http, socket, $state, $stateParams) {
    $scope.categories = [];
    $scope.products = [];

    //List of categories on main page
    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
    });

    $http.get('/api/products/').success(function(product) {
      $scope.products = product;
    });
    
    //Keeps category that is pressed
    $scope.stateChange = function(category) {
    	$state.go("category", {'category': category})
    };
    $scope.getProduct = function(product) {
      $state.go("product", {'product': product})
    };
  });

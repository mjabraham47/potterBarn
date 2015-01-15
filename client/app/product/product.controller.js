'use strict';

angular.module('potterBarnApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams, $state, cart) {

    $scope.currentProduct = $stateParams.product;
    
    $http.get('/api/products/'+ $stateParams.product).success(function(product) {
      $scope.product = product;
    });

    $scope.cart = cart;
    
    $scope.addToCart = function (item){
    	$scope.cart.shoppingCart.push(item);
    }
  });


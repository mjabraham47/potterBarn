'use strict';

angular.module('potterBarnApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams, $state, Auth, cart) {

    $scope.cart = cart;
    $scope.currentProduct = $stateParams.product;

    $scope.addToCart = function(product) {
      if (!Auth.isLoggedIn()){
        $scope.cart.shoppingCart.push(product);
      }
      else {
      $http.get('api/cart/add/' + Auth.getCurrentUser()._id + '/' + $stateParams.product)
        .success(function(product) {
        });
      }
    };

    $http.get('/api/products/'+ $stateParams.product).success(function(product) {
      $scope.product = product;
    });
  });


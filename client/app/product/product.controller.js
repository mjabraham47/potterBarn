'use strict';

angular.module('potterBarnApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams, $state, Auth, cart) {

    $scope.cart = cart;
    $scope.currentProduct = $stateParams.product;

    $scope.addToCart = function(product, quantity) {
      if (!Auth.isLoggedIn()){
        $scope.cart.shoppingCart.push(product);
      }
      else {
      $http.get('api/cart/add/' + Auth.getCurrentUser()._id + '/' + $stateParams.product+ '/' + $scope.product.quantity_ordered)
        .success(function(product) { console.log('Yaaaay')
        });
      }
    };

    $http.get('/api/products/'+ $stateParams.product).success(function(product) {
      $scope.product = product;
      $scope.number = $scope.product.quantity;
    });

    $scope.getNumber = function(num) {
    return new Array(num);   
    }
  });


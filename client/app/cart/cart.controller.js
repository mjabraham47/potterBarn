'use strict';

angular.module('potterBarnApp')
  .controller('CartCtrl', function ($scope, $http, socket, Auth, cart) {

    //$scope.cart = cart;
    //console.log($scope.cart.shoppingCart);
    $scope.awesomeCart = {};
    $scope.total = 0;
    $scope.cart_items = [];

    $http.get('/api/cart/' + Auth.getCurrentUser()._id).success(function(cart) {
      $scope.cart = cart;

      socket.syncUpdates('cart', $scope.cart);
      var length = $scope.cart[0].contents.length;
      $scope.number_items = length + 1;
      for (var i = 0; i < length; i++) {
        var quantity = $scope.cart[0].contents[i].quantity_ordered;
        $http.get('/api/products/' + $scope.cart[0].contents[i].product).success(function(product) {
          product.quantity_ordered = quantity;
          $scope.cart_items.push(product);

        });
      };
      $scope.sumCart();
    });

    $scope.addCart = function() {
      if($scope.newCart === '') {
        return;
      }
      $http.post('/api/cart', { name: $scope.newCart });
      $scope.newCart = '';
      $scope.sumCart();
    };

    $scope.deleteCart = function(cart) {
      $http.delete('/api/cart/' + cart._id);
      $http.get('/api/cart').success(function(awesomeCart) {
      $scope.awesomeCart = awesomeCart;
      socket.syncUpdates('cart', $scope.awesomeCart);
      $scope.sumCart();
    });
    };

    $scope.sumCart = function(){
      var sum = 0;
      //console.log($scope.awesomeCart);
      for (var i=0; i<$scope.awesomeCart.length; i++) {
        sum += $scope.awesomeCart[i].price
      }
      $scope.total = sum;
    };

  });

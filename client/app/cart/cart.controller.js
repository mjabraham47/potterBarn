'use strict';

angular.module('potterBarnApp')
  .controller('CartCtrl', function ($scope, $http, socket, Auth, cart, sickles) {

    //$scope.cart = cart;
    //console.log($scope.cart.shoppingCart);
    $scope.local = cart;
    $scope.awesomeCart = {};
    $scope.total = 0;
    $scope.cart_items = [];
    //'sickles' converts price to galleons and sickles
    $scope.sickles = sickles;

    //getting user cart and adding products to scope
    $http.get('/api/cart/' + Auth.getCurrentUser()._id).success(function(cartItems) {
      $scope.cart = cartItems;
      socket.syncUpdates('cart', $scope.cart);
      var length = $scope.cart[0].contents.length;
      $scope.number_items = length;
      for (var i = 0; i < length; i++) {
        var quantity = $scope.cart[0].contents[i].quantity_ordered;
        $http.get('/api/products/' + $scope.cart[0].contents[i].product).success(function(product) {
          product.quantity_ordered = quantity;
          $scope.cart_items.push(product);
          $scope.total += product.price * product.quantity_ordered;
        });

      };
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



  });

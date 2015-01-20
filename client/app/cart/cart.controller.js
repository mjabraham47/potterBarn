'use strict';

angular.module('potterBarnApp')
  .controller('CartCtrl', function ($scope, $http, socket, Auth, cart, sickles, $cookieStore, User, $resource) {


    $scope.cookieCart = $cookieStore.get('cart') || [];
    $scope.total = 0;
    $scope.cart_items = [];
    $scope.cart;
    $scope.checkout = false;
    $scope.master = {};

    //'sickles' converts price to galleons and sickles
    $scope.sickles = sickles;

    //check if not logged in, if so get request for products in their cookie cart
    if (!Auth.isLoggedIn()){
      var length = $scope.cookieCart.length;
      for (var i = 0; i < length; i++) {
        var quantity = $scope.cookieCart[i].quantity_ordered;
        // IIFE to close over a variable in a loop
        (function(quantity){$http.get('/api/products/' + $scope.cookieCart[i].product).success(function(product) {
          console.log($scope.cookieCart[i]);
          product.quantity_ordered = quantity;
          $scope.cart_items.push(product);
          $scope.total += product.price * product.quantity_ordered;
        });})(quantity);
      };
    };


    //getting user cart and adding products to scope
    if (Auth.isLoggedIn()){
      $scope.users = User.get()
      $http.get('/api/cart/' + Auth.getCurrentUser()._id).success(function(cartItems) {
        $scope.cart = cartItems;
        var length = $scope.cart[0].contents.length;
        $scope.number_items = length;
        for (var i = 0; i < length; i++) {
          var quantity = $scope.cart[0].contents[i].quantity_ordered;
          // IIFE to close over a variable in a loop
          (function(quantity){$http.get('/api/products/' + $scope.cart[0].contents[i].product).success(function(product) {
            product.quantity_ordered = quantity * 1;
            $scope.cart_items.push(product);
            $scope.total += product.price * product.quantity_ordered;
            $scope.item_quantity = product.quantity
          });})(quantity);
        };
      });
    };


    $scope.deleteItem = function(item, index) {
      $http.delete('/api/cart/' + $scope.cart[0]._id +'/' + item);
      $scope.cart_items.splice(index, 1);
    };


    $scope.getNumber = function(num) {
      return new Array(num);
    }

    $scope.getTotal = function (){

    }
    $scope.changeQuantity = function (quantity, item, price, index) {
      var price = price;
      if (quantity == 0 ) {
        $scope.deleteItem(item, index);
      };
      $http.get('/api/cart/' + $scope.cart[0]._id +'/' + item +'/' + quantity).success(function(obj){
        var oldQuantity = obj[0].contents[index].quantity_ordered;
        $scope.total = $scope.total - (price * oldQuantity);
        $http.post('/api/cart/' + $scope.cart[0]._id +'/' + item +'/' + quantity).success(function(cart) {
          $scope.cart[0] = cart;
        });
        $scope.total = $scope.total + (price * quantity);
        console.log($scope.cart);
      });
    };

    $scope.checkoutSubmit = function(user) {

      $scope.master = angular.copy(user);

      $http.put('/api/users/' + Auth.getCurrentUser()._id, $scope.master).success(function(user){
        $scope.master = {};
      });

      $http.put('/api/cart/order/'+ $scope.cart[0]._id).success(function(cart) {

      });
    }
});


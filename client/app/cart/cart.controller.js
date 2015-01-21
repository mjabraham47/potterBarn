'use strict';

angular.module('potterBarnApp')
  .controller('CartCtrl', function ($scope, $http, socket, Auth, cart, sickles, $cookieStore, User, $resource, promotions) {


    $scope.cookieCart = $cookieStore.get('cart') || [];
    $scope.total = 0;
    $scope.cart_items = [];
    $scope.cart;
    $scope.checkout = false;
    $scope.master = {};
    $scope.promocount = 0;

    //'sickles' converts price to galleons and sickles
    $scope.sickles = sickles;

    //check if not logged in, if so get request for products in their cookie cart
    if (!Auth.isLoggedIn()){
      var length = $scope.cookieCart.length;
      $scope.number_items = length;
      for (var i = 0; i < length; i++) {
        var quantity = $scope.cookieCart[i].quantity_ordered;
        // IIFE to close over a variable in a loop
        (function(quantity){$http.get('/api/products/' + $scope.cookieCart[i].product).success(function(product) {
          product.quantity_ordered = quantity;
          $scope.cart_items.push(product);

          $scope.total += product.price * product.quantity_ordered;
          $scope.item_quantity = product.quantity
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
            product.quantity_ordered = quantity;
            $scope.cart_items.push(product);
            $scope.total += product.price * product.quantity_ordered;
            $scope.item_quantity = product.quantity
          });})(quantity);
        };
      });
    };


    $scope.deleteItem = function(itemId, index, item) {
      console.log(item);
      $http.delete('/api/cart/' + $scope.cart[0]._id +'/' + itemId);
      $scope.cart_items.splice(index, 1);
      $scope.total = $scope.total - (item.price*item.quantity_ordered);
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
        $scope.total = 0;
      };

      if (Auth.isLoggedIn()){
        $http.get('/api/cart/' + $scope.cart[0]._id +'/' + item +'/' + quantity).success(function(obj){
          var oldQuantity = obj[0].contents[index].quantity_ordered;
          $scope.total = $scope.total - (price * oldQuantity);
          $http.post('/api/cart/' + $scope.cart[0]._id +'/' + item +'/' + quantity);
          $scope.total = $scope.total + (price * quantity);

        });
      } else if (!Auth.isLoggedIn()) {

        for (var i = 0; i < $scope.cookieCart.length; i++) {
          if ($scope.cookieCart[i].product === item) {
            var oldQuantity = $scope.cookieCart[i].quantity_ordered;
            console.log($scope.cookieCart[i]);
            $scope.total = $scope.total - (price * oldQuantity);
            $scope.cookieCart[i].quantity_ordered = quantity;
            $scope.total = $scope.total + (price * quantity);
            console.log($scope.total);
          }
        }
        console.log($scope.cookieCart);
      }

    };

    $scope.checkoutSubmit = function(user) {

      $scope.master = angular.copy(user);

      $http.put('/api/users/' + Auth.getCurrentUser()._id, $scope.master).success(function(user){
        $scope.master = {};
        console.log(user);
      });

      $http.put('/api/cart/order/'+ $scope.cart[0]._id).success(function(cart) {
        console.log(cart);
        $scope.cart[0] = {};
        $scope.cart_items = [];
        console.log($scope.cart);
        $scope.total = 0;
      });
    }

    $scope.apply = function(promocode) {
      var old_price = $scope.total;
      if ($scope.promocount === 1) {
        $scope.promocode.message = 'Limit of one promocode';
      } else {
        $scope.total = promotions.checker(promocode.promo, $scope.total);
        if (old_price !== $scope.total) {
          $scope.promocode.message = 'Promo code applied!';
          $scope.promocount = 1;
        } else {
          $scope.promocode.message = 'Invalid code. Try again';
        }
      }
    }
});


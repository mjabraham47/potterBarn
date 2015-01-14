'use strict';

angular.module('potterBarnApp')
  .controller('CartCtrl', function ($scope, $http, socket, Auth) {

    $scope.awesomeCart = [];
    $scope.total = 0;
    console.log(Auth.getCurrentUser()._id);

    $http.get('/api/cart/' + Auth.getCurrentUser()._id).success(function(awesomeCart) {
      $scope.awesomeCart = awesomeCart;
      socket.syncUpdates('cart', $scope.awesomeCart);
      console.log($scope.awesomeCart);
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
      console.log($scope.awesomeCart);
      for (var i=0; i<$scope.awesomeCart.length; i++) {
        sum += $scope.awesomeCart[i].price
      }
      $scope.total = sum;
    };

  });

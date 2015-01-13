'use strict';

angular.module('potterBarnApp')
  .controller('CartCtrl', function ($scope, $http, socket) {
    
    $scope.awesomeCart = [];

    $http.get('/api/cart').success(function(awesomeCart) {
      $scope.awesomeCart = awesomeCart;
      socket.syncUpdates('cart', $scope.awesomeCart);
    });

    $scope.addCart = function() {
      if($scope.newCart === '') {
        return;
      }
      $http.post('/api/cart', { name: $scope.newCart });
      $scope.newCart = '';
    };

    $scope.deleteCart = function(cart) {
      $http.delete('/api/cart/' + cart._id);
    };
  });

'use strict';

angular.module('potterBarnApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window, $http) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $http.get('/api/cart/new_cart/'+Auth.getCurrentUser()._id).success(function(user_cart) {
            $scope.cart = user_cart;
            console.log($scope.cart);
          })
          //$location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      } console.log($scope.user);
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });

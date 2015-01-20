'use strict';

angular.module('potterBarnApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window, $http, $cookieStore) {
    $scope.cookieCart = $cookieStore.get('cart') || [];
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
          console.log(Auth.getCurrentUser());
          // merge cookie cart with user's cart, or create a new cart if they don't have one
          $http.put('/api/cart/merge/' + Auth.getCurrentUser()._id, $scope.cookieCart).success(function(user_cart){
            console.log(user_cart);

          });
          // Logged in, redirect to home
          $location.path('/');
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

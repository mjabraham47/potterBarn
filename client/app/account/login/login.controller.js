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
          // Logged in, redirect to home
          $http.get('/api/cart/find/' + Auth.getCurrentUser()._id).success(function(user_cart){
            if ( $scope.cookieCart === [] && user_cart === []) {
              $http.get('/api/cart/new_cart' + Auth.getCurrentUser())._id.success(function(user_cart){
                $scope.cart = user_cart;
              });
            } else if ( $scope.cookedCart.length > 0 && user_cart === [] ) {
              $http.get('/api/cart/new_cart' + Auth.getCurrentUser())._id.success(function(user_cart){
                $scope.cart = user_cart;
                for ( var i = 0; i < $scope.cookieCart.length; i++ ) {
                  $scope.cart.products.push($scope.cookieCart[i]);
                }
              });
            } else if ( user_cart.contents.length > 0 ) {
              $scope.cart = user_cart;
              for ( var i = 0; i < $scope.cookieCart.length; i++ ) {
                $scope.cart.products.push($scope.cookieCart[i]);
              }
            }
          });
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

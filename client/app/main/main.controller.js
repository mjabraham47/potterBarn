'use strict';

angular.module('potterBarnApp')
  .controller('MainCtrl', function ($cookieStore, $scope, $http, socket, $state, $stateParams, Auth) {
    $scope.categories = [];
    $scope.products = [];

    //List of categories on main page
    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
    });

    $http.get('/api/products/').success(function(product) {
      $scope.products = product;
    });

    //Keeps category that is pressed
    $scope.stateChange = function(category, info) {
    	$state.go("category", {'category': category,'info': info})
    };
    $scope.getProduct = function(product) {
      $state.go("product", {'product': product})
    };


    // THIS IS FOR NON LOGGED IN USER
    // create a cart for non logged in user


    // if (!Auth.isLoggedIn()) {
    //   $cookieStore.put('cart', []);
    // }

    $scope.cookieCart = $cookieStore.get('cart');


    // // User will put an item in thecart
    // $scope.userCart.push('my new item');

    // $cookieStore.put('cart', $scope.userCart);

    // // THIS IS AS SOON AS THE USER LOGGED IN
    // // create a new cart in the user's database
    // var userLoggedInCart = $cookieStore.get('cart');

    // $http.put('api/users/321424234', userLoggedInCart)
  });

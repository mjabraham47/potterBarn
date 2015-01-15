'use strict';

angular.module('potterBarnApp')
// Using resource

// .controller('ProductCtrl', function ($scope, $http, $resource, $stateParams, productFilter) {

// $http.get('/api/product/:id').success(function(productPage) {
//      $scope.productPage = productPage;
//      console.log($scope.productPage)
//     })
//  });

  .controller('ProductCtrl', function ($scope, $http, $stateParams, $state, Auth) {
    //console.log($stateParams.product);
    $scope.currentProduct = $stateParams.product;
    console.log('state params product', $stateParams.product);

    $scope.addToCart = function(product) {
      $http.get('api/cart/add/' + Auth.getCurrentUser()._id + '/' + $stateParams.product)
        .success(function(product) {
        });
    };

    $http.get('/api/products/'+ $stateParams.product).success(function(product) {
      $scope.product = product;
      console.log($scope.product)
    });
  });


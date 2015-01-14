'use strict';

angular.module('potterBarnApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams, $state) {
    console.log($stateParams.product);
 $scope.currentProduct = $stateParams.product;
    
    $http.get('/api/products/'+$stateParams.product).success(function(product) {
      $scope.product = product;
      console.log($scope.product)
    });
  });

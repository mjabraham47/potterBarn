'use strict';

angular.module('potterBarnApp')
  .controller('ProductCtrl', function ($scope, $http) {
    
 $http.get('/api/product/:id').success(function(productPage) {
      $scope.productPage = productPage;
      console.log($scope.productPage)
    })
  });

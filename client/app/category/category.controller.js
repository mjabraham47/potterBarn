'use strict';

angular.module('potterBarnApp')
.controller('CategoryCtrl', function ($scope, $state, $stateParams, $http, productFilter, sickles) {

	console.log($stateParams)
  $scope.currentCategory = $stateParams.category;
  $scope.categoryInfo = $stateParams.info;

  productFilter.query({categories: $stateParams.category })
  .$promise.then(function(data){
    $scope.currentProducts = data;
  });

  $scope.stateChange = function(product) {
    $state.go("product", {'product': product});
  };

   $scope.sickles = sickles;
});


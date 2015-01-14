'use strict';

angular.module('potterBarnApp')
.controller('CategoryCtrl', function ($scope, $state, $stateParams, $http, productFilter) {

  $scope.currentCategory = $stateParams.category;

  productFilter.query({categories: $stateParams.category })
  .$promise.then(function(data){
    $scope.currentProducts = data;
  });

  $scope.stateChange = function(product) {
    $state.go("product");
  };

});


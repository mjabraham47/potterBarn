'use strict';

angular.module('potterBarnApp')
.controller('CategoryCtrl', function ($scope, $state, $stateParams, productFilter, sickles) {

  $scope.currentCategory = $stateParams.category;
  $scope.categoryInfo = $stateParams.info;


  // you can rewrite like this!
  $scope.currentProducts = productFilter.query({categories: $stateParams.category });

  $scope.stateChange = function(product) {
    $state.go("product", {'product': product});
  };

   $scope.sickles = sickles;
});


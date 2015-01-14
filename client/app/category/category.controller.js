'use strict';

angular.module('potterBarnApp')
  .controller('CategoryCtrl', function ($scope, $state, $stateParams, $http) {

	// $scope.sendCategory = function(string){
	// 	console.log('really')
 //     	var queryObj = {category: string};
 //     	$http.get('api/products', {params: queryObj}).success(function(products){
 //       	$scope.products = products  //products that have same category
 //     });
 //   };
    $scope.currentCategory = $stateParams.category;
    
    $scope.products = [];
    $scope.currentProducts = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
      for (var i=0; i<$scope.products.length; i++) {
      if ($scope.products[i].categories[0] === $scope.currentCategory) {
        $scope.currentProducts.push($scope.products[i])
      }
    }
    });

    $scope.stateChange = function(product) {
      $state.go("product", {'product': product})
    }

 //   $scope.sendCategory();

  });

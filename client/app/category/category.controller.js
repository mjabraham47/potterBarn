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
      console.log($scope.products)
      for (var i=0; i<$scope.products.length; i++) {
      if ($scope.products[i].categories[0] === $scope.currentCategory) {
        console.log($scope.currentCategory);
        $scope.currentProducts.push($scope.products[i])
        console.log($scope.currentProducts)
      }
    }
    });

 //   $scope.sendCategory();

  });

'use strict';

angular.module('potterBarnApp')
  .controller('MainCtrl', function ($scope, $http, socket, $state) {
    $scope.categories = [];

    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
    });
    
    $scope.stateChange = function(category) {
    	console.log(category);
    	$state.go("category", {'category': category})
    }

  });

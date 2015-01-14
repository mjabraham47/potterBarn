'use strict';

angular.module('potterBarnApp')
  .controller('MainCtrl', function ($scope, $http, socket, $state, $stateParams) {
    $scope.categories = [];

    //List of categories on main page
    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
    });
    
    //Keeps category that is pressed
    $scope.stateChange = function(category) {
    	$state.go("category", {'category': category})
    };
  });

'use strict';

angular.module('potterBarnApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.categories = [];

    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
    });
  });

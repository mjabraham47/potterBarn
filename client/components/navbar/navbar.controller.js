'use strict';

angular.module('potterBarnApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
    {
      'title': 'Cart',
      'link': '/cart'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
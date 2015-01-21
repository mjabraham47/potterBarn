'use strict';

angular.module('potterBarnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('order_history', {
        url: '/order_history',
        templateUrl: 'app/account/order_history/order_history.html',
        controller: 'OrderHistoryCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('warning,', {
        url: '/warning',
        templateUrl: 'app/account/signup/warning.html'
      });
  });
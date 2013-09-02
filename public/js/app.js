'use strict';

angular.module('lunchRoulette', [])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        controller : 'Login',
        templateUrl: 'public/view/log.html'
      })
      .when('/', {
        controller : 'FriendList',
        templateUrl: 'public/view/friendsList.html'
      })
      .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
  });

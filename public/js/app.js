'use strict';

var app = angular.module('lunchRoulette', ['ngCookies'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller : 'Login',
        templateUrl: 'public/view/login.html',
        isPublic   : true
      })
      .when('/friends', {
        controller : 'FriendList',
        templateUrl: 'public/view/friendsList.html',
        isPublic   : false
      })
      .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
  });

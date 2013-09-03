'use strict';

var app = angular.module('lunchRoulette', ['ngCookies'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller : 'Login',
        templateUrl: '/view/login.html',
        isPublic   : true
      })
      .when('/friends', {
        controller : 'FriendList',
        templateUrl: '/view/friendsList.html',
        isPublic   : false
      })
      .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
  });

'use strict';

angular.module('lunchRoulette', ['ngCookies'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller : 'Login',
        templateUrl: 'public/view/log.html',
        isPublic   : true
      })
      .when('/friends', {
        controller : 'FriendList',
        templateUrl: 'public/view/friendsList.html',
        isPublic   : false
      })
      .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

  }).run(['$rootScope', '$window', function($rootScope, $window) {

    $rootScope.user = {};

    $window.fbAsyncInit = function() {
      FB.init({
        appId : '413558268748900',
        channelUrl: 'app/channel.html',
        status: true,
        cookie: true,
        xfbml : true
      });
    };

    var watchLoginChange = function() {

      var _self = this;

      FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response.status === 'connected') {
          _self.getUserInfo();
                  $location.path('/friends');
          $location.replace();

        } else {
        }
      });
    };

    var getUserInfo = function() {
      var _self = this;
      FB.api('/me', function(response) {
        $rootScope.$apply(function() {
          $rootScope.user = response;
        });
      });
    };

  }]);

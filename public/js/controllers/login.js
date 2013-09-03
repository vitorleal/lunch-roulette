'use strict';

app.controller('Login', function ($scope, $location, $window) {
  $scope.submit = function () {
    $location.path('/friends');
    $window.console.log($scope.user.email);
  };
});

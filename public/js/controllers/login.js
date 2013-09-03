'use strict';

app.controller('Login', function ($scope, $location, $window) {
  $scope.submit = function () {
    $location.path('/friends');
  };
});

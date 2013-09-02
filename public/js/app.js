(function() {
  var lunchRoulette = angular.module('lunchRoulette', []).
    config(function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
          controller : FriendList,
          templateUrl: 'public/templates/friendsList.html'
        }).
        otherwise({ redirectTo: '/' });

      $locationProvider.html5Mode(true);
    });

  var FriendList = function($scope) {
    $scope.friends = [
      { name: 'David',   invited: false, thumb: 'http://placehold.it/40x40' },
      { name: 'Erico',   invited: false, thumb: 'http://placehold.it/40x40' },
      { name: 'Sheldon', invited: false, thumb: 'http://placehold.it/40x40' },
      { name: 'João',    invited: false, thumb: 'http://placehold.it/40x40' },
      { name: 'Fábio',   invited: false, thumb: 'http://placehold.it/40x40' },
      { name: 'Marcos',  invited: false, thumb: 'http://placehold.it/40x40' }
    ];
  };
})();

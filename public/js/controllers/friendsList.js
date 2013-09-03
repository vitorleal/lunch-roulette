'use strict';

app.controller('FriendList', function ($scope) {
  $scope.friends = [
    { name: 'David',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/' },
    { name: 'Erico',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/1' },
    { name: 'Sheldon', invited: false, thumb: 'http://lorempixel.com/50/50/sports/2' },
    { name: 'João',    invited: false, thumb: 'http://lorempixel.com/50/50/sports/3' },
    { name: 'Fábio',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/4' },
    { name: 'Marcos',  invited: false, thumb: 'http://lorempixel.com/50/50/sports/5' },
    { name: 'David',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/6' },
    { name: 'Erico',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/7' },
    { name: 'Sheldon', invited: false, thumb: 'http://lorempixel.com/50/50/sports/8' },
    { name: 'João',    invited: false, thumb: 'http://lorempixel.com/50/50/sports/9' },
    { name: 'Fábio',   invited: false, thumb: 'http://lorempixel.com/50/50/sports/10' },
    { name: 'Marcos',  invited: false, thumb: 'http://lorempixel.com/50/50/sports/' }
  ];
  $scope.nextLink= '/roulette';
});

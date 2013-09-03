'use strict';

app.controller('Roulette', function ($scope) {
  $scope.restaurants = [
    { name: 'Restaurnate Chuck Norris', address: 'Rua Lorem Ipsum Dolor 902' },
    { name: 'Restaurante Verissimo', address: 'Rua Lorem Ipsum Dolor 902' },
    { name: 'Restaurante Ladrilho', address: 'Rua Lorem Ipsum Dolor 902' }
  ];
  $scope.nextLink= '/invite';
});

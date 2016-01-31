'use strict';



angular.module('myApp.game', [
    'ngRoute',
    'seronoserServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game', {
    templateUrl: 'partials/game/game.html',
    controller: 'GameCtrl'
  });
}])

.controller('GameCtrl', ['$scope',function($scope) {
        $scope.teams = game.getTeams();
        console.log(game.getTeams());
}]);
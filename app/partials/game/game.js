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

.controller('GameCtrl', ['$scope', 'Questions',function($scope,Questions) {
        $scope.game = game;
        $scope.teams = $scope.game.getTeams();
        console.log($scope.game.getTeams());
        $scope.game.setQuestions(Questions.query({questionId: 1}));
        $scope.solveAnswer = function () {
            
        };
}]);
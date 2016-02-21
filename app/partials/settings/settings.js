'use strict';

var game;

angular.module('myApp.settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settings', {
    templateUrl: 'partials/settings/settings.html',
    controller: 'SettingsCtrl'
  });
}])

.controller('SettingsCtrl', ['$scope','$location',function($scope,$location) {
        $scope.team1 = "aa";
        $scope.team2 = "bb";
        $scope.team3 = "cc";
        $scope.team4 = "dd"
        $scope.team5 = "ee"
        $scope.team6 = "ff"
        $scope.gameTitle = "Ser o no Ser";
        $scope.totalPanels = 12;

        $scope.loadGame = function () {
            var teams = [];
            var id = 1;
            game = new Game(0,$scope.gameTitle, $scope.totalPanels);

            if (!angular.isUndefined($scope.team1) && $scope.team1.trim() !='') {
                game.addTeam(new Team(1,$scope.team1.trim()));
            }
            if (!angular.isUndefined($scope.team2) && $scope.team2.trim() !='') {
                game.addTeam(new Team(2,$scope.team2.trim()));
            }
            if (!angular.isUndefined($scope.team3) && $scope.team3.trim() !='') {
                game.addTeam(new Team(3,$scope.team3.trim()));
            }
            if (!angular.isUndefined($scope.team4) && $scope.team4.trim() !='') {
                game.addTeam(new Team(4,$scope.team4.trim()));
            }
            if (!angular.isUndefined($scope.team5) && $scope.team5.trim() !='') {
                game.addTeam(new Team(5,$scope.team5.trim()));
            }

            if (!angular.isUndefined($scope.team6) && $scope.team6.trim() !='') {
                game.addTeam(new Team(6,$scope.team6.trim()));
            }
            
            console.log(game.getTeams());
            console.log($scope.gameTitle); 
            $location.path('game');
        };
        
        $scope.showCurrent = function (number) {
            $scope.currentTeam = 'team' + number;
            console.log('changed current to: ' + number);
        };
}]);
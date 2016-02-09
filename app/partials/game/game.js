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

        $scope.loadPanel = function () {
            $('.answer').each(function () {
                 $(this).css('background-color','white');
            });
            $scope.game.addQuestion(Questions.query({questionId: $scope.game.getCurrentPanel()}));
            console.log('Loading new panel: ' + $scope.game.getCurrentPanel());
        };
        
        $scope.solveAnswer = function (number) {
            if ($scope.game.isAnswered(number)) { return; }
            
            console.log("solved answer: " + number);

            $('#answerModalWindow').modal({
                        keyboard: true,
                        backdrop: true
            });
            
            if ($scope.game.tryAnswer(number)) {
                $('#answer-'+number).css('background-color','lightGreen');                

            } else {
                $('#answer-'+number).css('background-color','red');
            }
            
            if ($scope.game.isPanelEnd()) {
                    $('#panelModalWindow').modal({
                        keyboard: true,
                        backdrop: true
                    });
                $scope.game.nextPanel();
                $scope.loadPanel();
            }
        };
                
        $scope.passTurn = function () {
          $scope.game.passTurn();
        };
        
        $scope.loadPanel();

}]);
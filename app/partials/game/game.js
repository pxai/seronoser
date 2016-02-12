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
            

            
            if ($scope.game.tryAnswer(number)) {
                $('#answer-'+number).css('background-color','lightGreen');                

            } else {
                $('#answer-'+number).css('background-color','red');
            }


            $('#answerModalWindow').modal({
                       keyboard: true,
                       backdrop: true
            });

            
            console.log("solved answer: " + number + " . Remaining: "  + ($scope.game.getCurrentCorrect() + $scope.game.getCurrentIncorrect()));
        
        };
                
                
            $('#answerModalWindow').on('hidden.bs.modal', function (e) {
                console.log("hidden. . Remaining: "  + ($scope.game.getCurrentCorrect() + $scope.game.getCurrentIncorrect()));
                 if ($scope.game.isPanelEnd()) {
                    $('#panelModalWindow').modal('show');
                }
            });
            
            $('#panelModalWindow').on('shown.bs.modal', function (e) {            
                        $scope.game.nextPanel();
                        $scope.loadPanel();
            });
            
        $scope.passTurn = function () {
          $scope.game.passTurn();
        };
        
        $scope.loadPanel();

}]);
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
        var randomImage = new RandomImage('img');
        var repeat = 100;
        $scope.game = game;

        $scope.teams = $scope.game.getTeams();
        console.log($scope.game.getTeams());

        $scope.loadPanel = function () {
            $('.answer').each(function () {
                $(this).css('background-color','white');
            });
            var question = Questions.query({questionId: $scope.game.getCurrentPanel()});
            
            question.$promise.then(function (result) {
                $scope.game.addQuestion(result);
            });
            console.log(' Loading new panel: ' + $scope.game.getCurrentPanel());
        };
        
        $scope.changePicture = function () {
            
        };
      
        $scope.showAnswer = function (number) {
            $scope.overAnswer = $scope.game.getCurrentQuestion().answers[number].answer;
        };
        
        $scope.solveAnswer = function (number) {
            if ($scope.game.isAnswered(number)) { return; }
            
            $('#answerModalWindow').modal({
                       keyboard: true,
                       backdrop: true
            });
                        
            if ($scope.game.tryAnswer(number)) {
                $('#answer-'+number).css('background-color','#aad400');  
                $scope.answerImage = randomImage.getRandomOk();
                $scope.answerResult = 'Correct!!';
                $scope.answerResultColor = 'answerCorrect';
            } else {
                $('#answer-'+number).css('background-color','#ff5555');
                $scope.answerImage = randomImage.getRandomFail();
                $scope.answerResult = 'FIAL!!';
                $scope.answerResultColor = 'answerIncorrect';
            }
            
            $scope.answerText = $scope.game.getCurrentQuestion().answers[number].answer;
            $scope.answerExplanation = $scope.game.getCurrentQuestion().answers[number].explanation;

            console.log("solved answer: " + number + " . Remaining: "  + ($scope.game.getCurrentCorrect()  +":"+ $scope.game.getCurrentIncorrect()));
        
        };
            


        $('#answerModalWindow').on('hidden.bs.modal', function (e) {
                console.log("hidden. . Remaining: "  + ($scope.game.getCurrentCorrect() + $scope.game.getCurrentIncorrect()));
                 if ($scope.game.isPanelEnd()) {
                    $('#panelModalWindow').modal('show');
                }
        });
            
        $('#panelModalWindow').on('shown.bs.modal', function (e) {         
                        //$scope.scores = $scope.game.orderTeams();
                        $scope.game.nextPanel();
                        $scope.loadPanel();
        });
            
        $scope.passTurn = function () {
          $scope.game.passTurn();
        };
        
        $scope.loadPanel();
}]);
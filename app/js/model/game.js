/**
* game.js
* Ser o No Ser
* https://github.com/pxai/seronoser.git
* Simple object to represent the game
* @author Pello Altadill - http://pello.io
*/


var Game = function (id, name, totalPanels) {
        var _id = id;
	var _name = name;
        var _currentPanel = 0;
        var _totalPanels = totalPanels;
        var _currentTeam = 0;
	var _questions = [];
        var _teams = [];
        var _currentCorrect = 0;
        var _currentIncorrect = 0;
        var _answered = false;
        var _inferno = true;
        var _lastPoints = 0;
        var _answerIndexes = [0,1,2,3,4,5,6,7,8,9,10,11];

        var increasePoints = function () {
            console.log('Increase points');
            _lastPoints = 5 * (_currentCorrect + _currentIncorrect);
            _teams[_currentTeam].increasePoints(_lastPoints);
        };
        
        var shuffle = function (arr) {
            var rndX = 0;
            var rndY = 0;
            var tmp = 0;
            
            for (var i = 0; i < arr.length; i++) {
                rndX = Math.floor(Math.random() * (arr.length - 1));
                rndY = Math.floor(Math.random() * (arr.length - 1));
                tmp = arr[rndX];
                arr[rndX] = arr[rndY];
                arr[rndY] = tmp;
            }
            
            return arr;
        };
        
          this.orderTeams = function () {
            /*var ordered = [];
            ordered.push(pop(_teams));

            for (var i = 0; i < _teams.length; i++) {
                for (var j = 0; j < ordered.length; j++) {
                    if (_teams[i].getPoints() >= ordered[j].getPoints()) {
                        ordered = ordered.unshift(_teams[i]);
                        break;
                    } else if (j==(ordered.length-1)) {
                        ordered.push(_teams[i]);
                    }
                }
            }
            console.log(ordered);
            return ordered;*/
        };
        
	this.generate = function () { 
	};

	this.getId = function () {
		return _id;
	};

        this.getName = function () {
		return _name;
	};

        this.getTotalPanels = function () {
		return _totalPanels;
	};

         this.getCurrentCorrect = function () {
		return _currentCorrect;
	}; 
        
        this.getCurrentIncorrect = function () {
		return _currentIncorrect;
	};
    
        this.setTotalPanels = function (totalPanels) {
            _totalPanels = totalPanels;
	};

        this.newTurn = function () {
          _answered  = false;
          this.nextTeam();
        };

        this.passTurn = function () {
          if (_answered) { // only if they have tried
            this.newTurn();                  
          }
        };

        this.isAnswered = function (number) {
            return this.getCurrentQuestion().answers[number].answered;
        }

        this.tryAnswer = function (number) {
            this.getCurrentQuestion().answers[number].answered = true;
            _answered = true;
            
            if (this.getCurrentQuestion().answers[number].correct === true) {
               _currentCorrect++;
               increasePoints();
               return true; 
            } else {
               _currentIncorrect++;
               if (_inferno) {
                    _teams[_currentTeam].setPoints(0);
                }
                _lastPoints = 0;
                this.newTurn();
                return false;
            }
        };
        
        this.isPanelEnd = function () {
            return (_currentCorrect === 8 || _currentIncorrect === 4);
        };
        
        this.loadPanel = function () {
            _currentCorrect = 0;
            _currentIncorrect = 0;
            if (_currentPanel < _totalPanels - 1) {
                _currentPanel++;
            }
        };
        
        this.isOneAnswered = function () {
            return _answered;
        };
        
	this.getCurrentQuestion = function () {
		return _questions[_currentPanel];
	};
        
        this.getCurrentPanel = function () {
		return _currentPanel;
	};

        this.nextAnswer = function () {
            return _answerIndexes.pop();
        };
    
        this.nextPanel = function () {
                _currentCorrect = 0;
                _currentIncorrect = 0;
                _answered = false;
                if (_currentPanel < _totalPanels - 1) {
                    _currentPanel++;
        	    return _currentPanel;
                } else {
                    return -1;
                }
	};
       
    	this.getCurrentTeam = function () {
		return _teams[_currentTeam];
	};
        
        this.nextTeam = function () {
                if (_currentTeam < _teams.length-1) {
                    _currentTeam++;
                } else {
                    _currentTeam = 0;
                }
        	    return _currentTeam;
	};

	this.getQuestions = function () {
		return _questions;
	};
        
        this.addQuestion = function (question) {
               question.answers = shuffle(question.answers);
                _questions.push(question);
	};
        
        this.setQuestions = function (questions) {
		_questions = questions;
	};

	this.addTeam = function (team) {
		_teams.push(team);
	};

	this.removeTeam = function (id) {
		_teams[id] = null;
	};


    	this.getTeams = function () {
		return _teams;
	};

    	this.getLastPoints = function () {
            if (_lastPoints > 0)
		return "+" + _lastPoints;
            else 
                return 0;
	};
	this.show = function () {
		return _name + ', ' + _points;
	};

};
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

        var increasePoints = function () {
            console.log('Increase points');
            _teams[_currentTeam].increasePoints(5 * (_currentCorrect + _currentIncorrect));
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

	this.show = function () {
		return _name + ', ' + _points;
	};

};
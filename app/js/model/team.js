
/**
* team.js
* Ser o No Ser
* https://github.com/pxai/seronoser.git
* Simple object to represent a team
* @author Pello Altadill - http://pello.io
*/


var Team = function (id, name) {
        var _id = id;
	var _name = name;
        var _points = 0;
	var _answered = [];

	this.generate = function () { 
	};

	this.getId = function () {
		return _id;
	};
        
	this.getName = function () {
		return _name;
	};

	this.getPoints = function () {
		return _points;
	};

	this.setPoints = function (points) {
		_points = points;
	};

	this.increasePoints = function (points) {
		_points = _points + points;
	};

    	this.getAnswered = function () {
		return _answered;
	};

	this.show = function () {
		return _name + ', ' + _points;
	};

};
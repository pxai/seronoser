/**
* game.js
* Ser o No Ser
* https://github.com/pxai/seronoser.git
* Simple object to represent the game
* @author Pello Altadill - http://pello.io
*/


var Team = function (id, name) {
        var _id = id;
	var _name = name;
	var _questions = [];
        var _teams = [];

	this.generate = function () { 
	};

	this.getId = function () {
		return _id;
	};

        this.getName = function () {
		return _name;
	};

	this.getQuestions = function () {
		return _questions;
	};

	this.getQuestions = function () {
		return _questions;
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
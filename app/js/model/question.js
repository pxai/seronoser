
/**
* question.js
* Ser o No Ser
* Simple object to manage questions
* @author Pello Altadill - http://pello.io
*/


var Question = function (id, question, image) {
        var _id = id;
	var _question = question;
        var _image = image;
	var _answers = [];

	this.generate = function () { 
	};

	this.getQuestion = function () {
		return _question;
	};

	this.getImage = function () {
		return _image;
	};

    	this.getAnswers = function () {
		return _answers;
	};

    	this.setAnswers = function (answers) {
		_answers = answers;
	};

	this.show = function () {
		return _question + ' = ' + _answers;
	};

};
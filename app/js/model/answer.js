
/**
* answer.js
* Ser o No Ser
* https://github.com/pxai/seronoser.git
* Simple object to represent a possible answer
* @author Pello Altadill - http://pello.io
*/


var Answer = function (id, text, explanation, image, correct) {
        var _id = id;
	var _text = text;
        var _explanation = explanation;
	var _image = image;
	var _correct = correct;
	var _used = false;

	this.generate = function () { 
	};

	this.getText = function () {
		return _text;
	};
        
	this.getExplanation = function () {
		return _explanation;
	};

	this.getImage = function () {
		return _image;
	};

    	this.isCorrect = function () {
		return _correct;
	};

    	this.isUsed = function () {
		return _used;
	};

    	this.setUsed = function () {
		_used = true;
	};


	this.show = function () {
		return _text + ' = ' + _correct;
	};

};
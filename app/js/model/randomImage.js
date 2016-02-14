
/**
* randomImage.js
* Ser o No Ser
* https://github.com/pxai/seronoser.git
* Manages game images
* @author Pello Altadill - http://pello.io
*/


var RandomImage = function (path) {
        var _path = path;
	var _ok = ['ok0.jpg','ok1.jpg','ok2.jpg','ok3.jpg','ok4.jpg','ok5.jpg','ok6.jpg','ok7.jpg'];
	var _fail = ['fail0.jpg','fail1.jpg','fail2.jpg','fail3.jpg','fail4.jpg','fail5.jpg','fail6.jpg','fail7.jpg'];
        var _thinking = ['thinking0.jpg','thinking1.jpg','thinking2.jpg','thinking3.jpg','thinking4.jpg','thinking5.jpg','thinking6.jpg','thinking7.jpg'];

	this.getRandomFail = function () {   
             return _path + '/fail/' + _fail[Math.round(Math.random() * (_fail.length-1))];
	};

	this.getRandomOk = function () {
             return _path + '/ok/' +_ok[Math.round(Math.random() * (_ok.length-1))];
	};

	this.getRandomFail = function () {   
             return _path + '/fail/' + _fail[Math.round(Math.random() * (_fail.length-1))];
	};

	this.getRandomThinking = function () {
             return _path + '/thinking/' +_ok[Math.round(Math.random() * (_thinking.length-1))];
	};

        this.getFail = function (index) {
		return _fail[index];
	};

	this.getOk = function (index) {
		return _ok[index];
	};

};
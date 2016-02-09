/**
* services.js
* Ser o No Ser
* https://github.com/pxai/seronoser.git
* Services to grab JSON
* @author Pello Altadill - http://pello.io
*/

var seronoserServices = angular.module('seronoserServices', ['ngResource']);

seronoserServices.factory('Questions', ['$resource',
  function($resource){
    return $resource('data/question:questionId/question.json', {}, {
      query: {method:'GET', params:{questionId:'questions'}, isArray:false}
    });
  }]);

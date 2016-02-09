'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'seronoserServices',
  'myApp.splash',
  'myApp.settings',
  'myApp.game',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/splash'});
}]);

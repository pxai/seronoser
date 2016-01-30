'use strict';

angular.module('myApp.splash', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/splash', {
    templateUrl: 'partials/splash/splash.html',
    controller: 'SplashCtrl'
  });
}])

.controller('SplashCtrl', [function() {

}]);
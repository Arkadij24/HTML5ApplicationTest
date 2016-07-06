'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider.when('/map-view', {
      template: '<map-view></map-view>'
  }).
  when('/view1', {
      template: '<view1></view1>'
  }).
  when('/view2', {
      template: '<view2></view2>'
  }).
  otherwise({redirectTo: '/view1'});
}]);

'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('view1').
  component('view1', {
    templateUrl: 'view1/view1.template.html',
    controller: ['$routeParams',
      function View1Controller() {
          
      }
    ]
  });

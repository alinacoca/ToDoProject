'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/todos', {
          template: '<todos></todos>'
        }).
        otherwise('/todos');
    }
  ]);

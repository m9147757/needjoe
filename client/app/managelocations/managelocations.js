'use strict';

angular.module('needjoeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/managelocations', {
        templateUrl: 'app/managelocations/managelocations.html',
        controller: 'managelocationsCtrl'
      });
  });

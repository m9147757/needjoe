'use strict';

angular.module('needjoeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/manageVenues', {
        templateUrl: 'app/manageVenues/manageVenues.html',
        controller: 'ManagevenuesCtrl'
      });
  });

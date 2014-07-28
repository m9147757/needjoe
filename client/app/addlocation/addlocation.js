'use strict';

angular.module('needjoeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addlocation', {
        templateUrl: 'app/addlocation/addlocation.html',
        controller: 'AddlocationCtrl'
      });
  });

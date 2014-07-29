'use strict';

angular.module('needjoeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/meetup', {
        templateUrl: 'app/meetup/meetup.html',
        controller: 'MeetupCtrl'
      });
  });



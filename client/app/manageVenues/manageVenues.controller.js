'use strict';

angular.module('needjoeApp')
  .controller('ManagevenuesCtrl', function ($scope, $http, socket) {
    $scope.venues = [];

    $http.get('/api/venues').success(function(venues) {
      $scope.venues = venues;
      socket.syncUpdates('venue', $scope.venues);
    });

    $scope.addVenue = function() {
      if($scope.newVenue === '') {
        return;
      }
      $http.post('/api/venues', { name: $scope.newVenue });
      $scope.newVenue = '';
    };

    $scope.deleteVenue = function(venue) {
      $http.delete('/api/venues/' + venue._id);
      //event.preventDefault();
      //event.stopPropagation();
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('venue');
    });
  });

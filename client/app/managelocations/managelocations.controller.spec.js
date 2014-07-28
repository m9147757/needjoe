'use strict';

describe('Controller: managelocationsCtrl', function () {

  // load the controller's module
  beforeEach(module('needjoeApp'));

  var managelocationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    managelocationsCtrl = $controller('managelocationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

'use strict';

describe('Controller: AddlocationCtrl', function () {

  // load the controller's module
  beforeEach(module('needjoeApp'));

  var AddlocationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddlocationCtrl = $controller('AddlocationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

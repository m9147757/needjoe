'use strict';

describe('Controller: ManagevenuesCtrl', function () {

  // load the controller's module
  beforeEach(module('needjoeApp'));
  beforeEach(module('socketMock'));

  var ManagevenuesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagevenuesCtrl = $controller('ManagevenuesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

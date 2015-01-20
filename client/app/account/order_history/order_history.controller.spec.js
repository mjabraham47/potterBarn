'use strict';

describe('Controller: OrderHistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('potterBarnApp'));

  var OrderHistoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderHistoryCtrl = $controller('OrderHistoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

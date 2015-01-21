'use strict';

describe('Service: promotions', function () {

  // load the service's module
  beforeEach(module('potterBarnApp'));

  // instantiate service
  var promotions;
  beforeEach(inject(function (_promotions_) {
    promotions = _promotions_;
  }));

  it('should do something', function () {
    expect(!!promotions).toBe(true);
  });

});

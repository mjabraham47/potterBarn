'use strict';

describe('Service: sickles', function () {

  // load the service's module
  beforeEach(module('potterBarnApp'));

  // instantiate service
  var sickles;
  beforeEach(inject(function (_sickles_) {
    sickles = _sickles_;
  }));

  it('should do something', function () {
    expect(!!sickles).toBe(true);
  });

});

'use strict';

describe('Service: galleons', function () {

  // load the service's module
  beforeEach(module('potterBarnApp'));

  // instantiate service
  var galleons;
  beforeEach(inject(function (_galleons_) {
    galleons = _galleons_;
  }));

  it('should do something', function () {
    expect(!!galleons).toBe(true);
  });

});

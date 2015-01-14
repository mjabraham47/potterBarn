'use strict';

describe('Service: productFilter', function () {

  // load the service's module
  beforeEach(module('potterBarnApp'));

  // instantiate service
  var productFilter;
  beforeEach(inject(function (_productFilter_) {
    productFilter = _productFilter_;
  }));

  it('should do something', function () {
    expect(!!productFilter).toBe(true);
  });

});

'use strict';

angular.module('potterBarnApp')
  .factory('promotions', function () {
    // Service logic
    // ...
    return {
      twentyoff : function(price) {
        return Math.floor(price * 0.8);
      },

      tenoff : function(price) {
        return Math.floor(price * 0.9);
      },

      twentyfiveoff : function(price) {
        return Math.floor(price * 0.75);
      },

      checker : function(code, price) {
        if (code === 'LUMOS') {
          return twentyoff(price);
        }
        if (code === 'HORCRUX') {
          return this.tenoff(price);
        }
        if (code === 'ALOHOMORA') {
          return twentyfiveoff(price);
        } else {
          return price;
        }
      }

    };
  });



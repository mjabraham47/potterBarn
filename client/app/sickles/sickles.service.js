'use strict';

angular.module('potterBarnApp')
  .factory('sickles', function () {

    var convertPrice = function(price) {
            var sickles = 0;
            var galleons = 0;
            var galleon_string = " Galleons";
            var sickle_string = " Sickles";

            function check_sickles() {
                if (price < 17) {
                    sickles += price;
                } else if (price >= 17) {
                    price -= 17;
                    galleons += 1;
                    check_sickles();
                }
            }
            check_sickles();
            if (galleons === 1) {
                galleon_string = " Galleon";
            }
            if (sickles === 1) {
                sickle_string = " Sickle";
            }
            if (galleons === 0) {
                return sickles.toString() + sickle_string;
            } else {
                return galleons.toString() + galleon_string + " and " + sickles.toString() + sickle_string;
            }
        };
        return convertPrice;

  });

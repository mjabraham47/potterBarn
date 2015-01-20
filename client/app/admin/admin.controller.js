'use strict';

// each of these controllers should be in its own file

angular.module('potterBarnApp')
    .controller('AdminCtrl', function($scope, $http, Auth, User, $modal, $log) {

        // Use the User $resource to fetch all users
        $scope.users = User.query();

        $scope.delete = function(user) {
            User.remove({
                id: user._id
            });
            angular.forEach($scope.users, function(u, i) {
                if (u === user) {
                    $scope.users.splice(i, 1);
                }
            });
        };
    })
    .controller('ModalCtrl', function($scope, $modal, $log) {

        $scope.openCategory = function(size) {
            var categoryModal = $modal.open({
                templateUrl: 'myCategoryContent.html',
                controller: 'CategoryInstanceCtrl',
                size: size
            });

            categoryModal.result.then(function() {}, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    })
    .controller('CategoryInstanceCtrl', function($scope, $modalInstance, $http) {

        $scope.newCategory = "";

        $scope.save = function(newCategory) {
            $scope.newCategory = {
                name: newCategory
            };

            // you shouldn't do http calls from controllers

            $http.post('api/categorys/', $scope.newCategory).success(function(newCategory) {});
        }

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    })
    .controller('ProductModalCtrl', function($scope, $modal, $log) {

        $scope.openProduct = function(size) {
            var ProductModal = $modal.open({
                templateUrl: 'myProductContent.html',
                controller: 'ProductInstanceCtrl',
                size: size
            });

            ProductModal.result.then(function() {}, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    })
    .controller('ProductInstanceCtrl', function($scope, $modalInstance, $http) {

        $scope.newProduct = {};
        $scope.listCategories = [];

        // you shouldn't do http calls in controllers

        $http.get('/api/categorys').success(function(categories) {
            $scope.listCategories = categories;
        });

        $scope.save = function(newProduct) {
            $scope.newProduct = angular.copy(newProduct);
            // no http calls in controllers
            $http.post('/api/products', $scope.newProduct).success(function(addedProduct) {
            });
        }

        $scope.upload = function() {
            filepicker.setKey("A9CGVY9DSRweXsyrr67AEz");

            filepicker.pick(function(Photo) {
                $scope.newProduct.photo = Photo.url;
            });
            $('#uploadMessage').html('<b>Successfully uploaded!</b>');
        }

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    })
    .controller('OrderModalCtrl', function($scope, $modal, $log) {

        $scope.openOrder = function(size) {
            var orderModal = $modal.open({
                templateUrl: 'myOrderContent.html',
                controller: 'OrderInstanceCtrl',
                size: size
            });

            orderModal.result.then(function() {}, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    })
    .controller('OrderInstanceCtrl', function($scope, $modalInstance, $http) {

        $http.get('/api/cart/').success(function(orders) {
          console.log(orders);
            });
        
        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
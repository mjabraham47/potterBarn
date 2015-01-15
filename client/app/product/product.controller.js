'use strict';

angular.module('potterBarnApp')
.controller('ProductCtrl', function ($scope, $http, $stateParams, $state, Auth, cart) {

  $scope.cart = cart;
  $scope.currentProduct = $stateParams.product;
  $scope.currentUserId = Auth.getCurrentUser()._id;
  $scope.currentUser = Auth.getCurrentUser();

  $scope.addToCart = function(product) {
    if (!Auth.isLoggedIn()){
      $scope.cart.shoppingCart.push(product);
    }
    else {
      $http.get('api/cart/add/' + $scope.currentUserId + '/' + $stateParams.product)
      .success(function(product) {
      });
    }
  };

  
  $http.get('/api/products/'+ $stateParams.product).success(function(product) {
    $scope.product = product;
  });

  $scope.isLoggedIn = Auth.isLoggedIn();

  

  $scope.newReview = {
    user_id: $scope.currentUserId,
    product_id: $scope.currentProduct,
    date: new Date()
  }
  $scope.reviewsArray = [];


$scope.submitNewReview = function(){
  $http.post('api/reviews/', $scope.newReview).success(function(newSubmittedReview){
    $scope.reviewsArray.push(newSubmittedReview);
    console.log('returned review:', newSubmittedReview)
  });
};



$http.get('api/reviews?product_id=' + $stateParams.product ).success(function(allReviews){
  $scope.reviewsArray = allReviews;
  });
});
















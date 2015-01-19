'use strict';

angular.module('potterBarnApp')
.controller('ProductCtrl', function ($scope, $http, $stateParams, $state, Auth, cart, sickles, $cookieStore, $location) {
    // first time user. dont have a cart yet
    // get the cart from cookie, if it is undefined, then make cart
    $scope.cookieCart = $cookieStore.get('cart') || [];
    $scope.currentProduct = $stateParams.product;
    $scope.currentUserId = Auth.getCurrentUser()._id;
    $scope.currentUser = Auth.getCurrentUser();
    $scope.isLoggedIn = Auth.isLoggedIn();
    //'sickles' converts price to galleons and sickles
    $scope.sickles = sickles;
    $scope.reviewsArray = [];
    $scope.completeReviews = [];


//ADDING TO CART
    $scope.addToCart = function(product, quantity) {
      if (!Auth.isLoggedIn()){
        $scope.cookieCart.push({'product': product, 'quantity_ordered': quantity});
        $cookieStore.put('cart', $scope.cookieCart);
        console.log($scope.cookieCart)
      }
      else {
        $http.get('api/cart/add/' + Auth.getCurrentUser()._id + '/' + $stateParams.product+ '/' + $scope.product.quantity_ordered)
        .success(function(product) {
        });
      }
    };
    $scope.goCart = function() {
        $location.url('/cart');
    };


    $http.get('/api/products/'+ $stateParams.product).success(function(product) {
      $scope.product = product;
      $scope.number = $scope.product.quantity;
    });

    $scope.getNumber = function(num) {
      return new Array(num);
    }


//REVIEWS
    $scope.newReview = {
      _user: $scope.currentUserId,
      _product: $scope.currentProduct,
      date: new Date()
    }

    $scope.submitNewReview = function(){
      $http.post('api/reviews/', $scope.newReview).success(function(newSubmittedReview){
      $scope.reviewsArray.push(newSubmittedReview);
      $scope.reset();
    });
  };

//Getting the reviews
    $http.get('api/reviews/product/' + $stateParams.product ).success(function(allReviews){
      $scope.reviewsArray = allReviews;
    });
//Resetting Form
    $scope.reset = function() {
      $scope.newReview.review_content.review_text ='';
      $scope.newReview.review_content.rating_stars =''; 
    }

});
















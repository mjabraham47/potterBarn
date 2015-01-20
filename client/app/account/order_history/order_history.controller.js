'use strict';

angular.module('potterBarnApp')
.controller('OrderHistoryCtrl', function ($scope) {


	$scope.total = 0;
	$scope.orderHistoryArray = [];
	$scope.cart;

//getting user cart all user carts & filter out non-orders
$http.get('api/cart/user/' + Auth.getCurrentUser()._id ).success(function(allCarts){
	$scope.orderHistoryArray = allCarts.filter(function(cart){
		return (cart.status !== 'cart')
	});
});

//adding cart/order history to scope

var formatOrder = function(cart){
	var order = {
		items: [],
		total: Number,
		date: Date
	};
	var numItems = cart[0].contents.length;
	for (var i=0; i < numItems; i++){
		var quantity = cart[0].content[i].quantity_ordered;

		(function(quantity){$http.get('/api/products/' + $scope.cart[0].contents[i].product).success(function(product) {
      	product.quantity_ordered = quantity * 1;
      	$scope.cart_items.push(product);
      	$scope.total += product.price * product.quantity_ordered;
      	$scope.item_quantity = product.quantity
      });})(quantity);



}
// $scope.cart = cartItems;
// var length = $scope.cart[0].contents.length;
// $scope.number_items = length;
// for (var i = 0; i < length; i++) {
// 	var quantity = $scope.cart[0].contents[i].quantity_ordered;
      // IIFE to close over a variable in a loop
      (function(quantity){$http.get('/api/products/' + $scope.cart[0].contents[i].product).success(function(product) {
      	product.quantity_ordered = quantity * 1;
      	$scope.cart_items.push(product);
      	$scope.total += product.price * product.quantity_ordered;
      	$scope.item_quantity = product.quantity
      });})(quantity);
//   };

{ "_id" : ObjectId("54bdca55860a6fdc0c91d459"),
"user" : ObjectId("54b6aaa312e01d5b35339ac0"), 
"status" : "cart",
"date" : ISODate("2015-01-20T03:24:05.749Z"),
"contents" : [ { "product" : ObjectId("54b6a84e59d71b1535d65e62"), 
"quantity_ordered" : 1,
"_id" : ObjectId("54bdca55860a6fdc0c91d45a") } ],
"__v" : 0 }


});

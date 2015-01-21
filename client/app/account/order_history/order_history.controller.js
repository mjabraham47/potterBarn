'use strict';

angular.module('potterBarnApp')
.controller('OrderHistoryCtrl', function ($scope, $http, Auth, cart, sickles) {

	$scope.allCarts;
	$scope.sickles = sickles;

//getting user cart all user carts & filter out non-orders
$http.get('api/cart/user/' + Auth.getCurrentUser()._id ).success(function(allCarts){
	$scope.allCarts = allCarts.map(function(cart) {
		var total_order;
		var order = {
			items: [],
			total: Number,
			date: String,
			status: String
		};
		var numItems = cart.contents.length;
		for (var i=0; i < numItems; i++){
			var total_product;
			var item = {};
			var quantity = cart.contents[i].quantity_ordered;
			item.quantity = quantity;
			total_product = quantity * cart.contents[i].product.price;
			item.total_price = total_product;
			item.name = cart.contents[i].product.name;
			order.items.push(item);
			total_order =+ total_product;
			console.log('total_order:', total_order);
			console.log('total_product:', total_product);
		};
		order.total = total_order;
		order.date = cart.date;
		order.status = cart.status;
		order.id = cart._id;
		return order;
	});
});
});



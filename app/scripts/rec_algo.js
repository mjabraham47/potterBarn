//var products = import Products Array
var generator = require('knear');
var k = 2;
var machine = new generator.kNear(k);
var request = require('request');
var _ = require('underscore');

var products = [];

request.get('http://localhost:9000/api/products', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);

    //num = product iterated over
    _.each(info, function(num) {
      products.push({
          id: num._id,
          name: num.name,
          category: num.categories[0],
          quantity: num.quantity
      });

      if (products.length === info.length) {

        _.each(products, function(product) {
          console.log(product.quantity);
          for (var i = 0; i < info.length; i++) {

              if (product.category === info[i].categories[0]) {
                  machine.learn([product.id, info[i]._id], 'good');
                  //console.log('good');
              } else {
                  machine.learn([product.id, info[i]._id], 'bad');
                  //console.log('bad');
              }
          }
          if (product.quantity <= 2) {
              products.forEach(function(lookup) {
                  machine.learn([product.id, lookup.id], 'bad');
              })
          } else if (product.quantity > 10) {
              products.forEach(function(lookup) {
                  machine.learn([product.id, lookup.id], 'good');
              })
          }
        });
      };
    });
  };
});


products.forEach(function(product) {

})



//products array for initial testing
// var products = [
//     {id:1, name:'wand', category:['wands'], quantity: 1},
//     {id:2, name: 'unicorn', category:['animal'], quantity: generate_random_quantity()},
//     {id:3, name: 'lion', category:['animal'], quantity: generate_random_quantity()},
//     {id:4, name: 'harry wand', category:['wand'], quantity: generate_random_quantity()},
//     {id:5, name: 'centaur', category:['animal'], quantity: generate_random_quantity()},
//     {id:6, name: 'hermione', category:['wand'], quantity: generate_random_quantity()},
//     {id:7, name: 'ron', category:['wand'], quantity: generate_random_quantity()},
//     {id:8, name: 'owl', category:['animal'], quantity: generate_random_quantity()},
//     {id:9, name: 'house elf', category:['animal'], quantity: generate_random_quantity()},
//     {id:10, name: 'dumbledore', category:['wand'], quantity: generate_random_quantity()},
//     {id:11, name: 'luna', category:['wand'], quantity: generate_random_quantity()}
// ];

var product_array = [];

products.forEach(function(product) {
  product_array.push(product.id);
})

function generate_random_product() {
  return Math.floor(Math.random() * (products.length + 1)) + 1;
}
<<<<<<< HEAD

function generate_random_quantity() {
  return Math.floor(Math.random() * 15) + 1;
}
=======
>>>>>>> master
//var reviews = import Reviews Array
//var carts = import Carts Array
var carts = [
  {id: 1, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 2, contents: [{product:5}, {product: 11}, {product: 2}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 4, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 5, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 6, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 7, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 8, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 9, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 10, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 11, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 12, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 13, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 14, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 15, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 16, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 17, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 18, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 19, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 20, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 21, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 22, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 23, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 24, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 25, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 26, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 27, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 28, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 29, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 30, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 31, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
<<<<<<< HEAD
  {id: 32, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]}
];

// var ProductHash = function(product, array) {
//   this.product = product;
//   this.array = {array: 0};
//   return {this.product: this.ar  ray }
// }

// var product = new ProductHash(28, 5);

// console.log(product);


=======
  {id: 32, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},

    {id: 1, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 2, contents: [{product:5}, {product: 11}, {product: 2}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 4, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 5, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 6, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 7, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 8, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 9, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 10, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 11, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 12, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 13, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 14, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 15, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 16, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 17, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 18, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 19, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 20, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 21, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 22, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 23, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 24, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 25, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 26, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 27, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 28, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 29, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 30, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 31, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 32, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},

      {id: 1, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 2, contents: [{product:5}, {product: 11}, {product: 2}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 3, contents: [{product:4}, {product: 10}, {product: 1}]},
  {id: 4, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 5, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 6, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 7, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 8, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 9, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 10, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 11, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 12, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 13, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 14, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 15, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 16, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 17, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 18, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 19, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 20, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 21, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 22, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 23, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 24, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 25, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 26, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 27, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 28, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 29, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 30, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 31, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]},
  {id: 32, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]}
];

products.forEach(function(product) {
    for ( var i = 0; i < products.length; i++ ) {
        if ( product.category[0] !== products[i].category[0] ) {
        //     machine.learn( [ product.id, products[i].id ], 'good' );
        // } else {
          machine.learn( [ product.id, products[i].id ], 'bad' );
        }
    }
})
>>>>>>> master

carts.forEach(function(cart) {
  for (var j = 0; j < cart.contents.length; j++) {
    for ( var i = 0; i < cart.contents.length; i++ ) {
<<<<<<< HEAD

        if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'good') {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
        // } else if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'great') {
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        // } else if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'good') {
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'great');
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'great');
        } else {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'good');
        }

=======
      if ( cart.contents[i].product !== cart.contents[j].product ) {
        if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'good') {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
          // machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
          // machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
          // machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
        // } else if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'great') {
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        //   // machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        //   // machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        //   // machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        // } else if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'good') {
        //   machine.learn( [cart.contents[i].product, cart.contents[j].product], 'great');
          // machine.learn( [cart.contents[i].product, cart.contents[j].product], 'great');
        } else {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'good');
        }
      }
>>>>>>> master
    }
  };
});


<<<<<<< HEAD
// console.log(machine.classify([1,1]));
// console.log(machine.classify([1,2]));
// console.log(machine.classify([1,3]));
// console.log(machine.classify([1,4]));
// console.log(machine.classify([1,5]));
// console.log(machine.classify([1,6]));
// console.log(machine.classify([1,7]));
// console.log(machine.classify([1,8]));
// console.log(machine.classify([1,9]));
// console.log(machine.classify([1,10]));
// console.log(machine.classify([1,11]));
// console.log(" ");
// console.log(machine.classify([5,1]));
// console.log(machine.classify([5,2]));
// console.log(machine.classify([5,3]));
// console.log(machine.classify([5,4]));
// console.log(machine.classify([5,5]));
// console.log(machine.classify([5,6]));
// console.log(machine.classify([5,7]));
// console.log(machine.classify([5,8]));
// console.log(machine.classify([5,9]));
// console.log(machine.classify([5,10]));
// console.log(machine.classify([5,11]));
// console.log(machine.classify([4,10]));




=======
console.log(machine.classify([1,1]));
console.log(machine.classify([1,2]));
console.log(machine.classify([1,3]));
console.log(machine.classify([1,4]));
console.log(machine.classify([1,5]));
console.log(machine.classify([1,6]));
console.log(machine.classify([1,7]));
console.log(machine.classify([1,8]));
console.log(machine.classify([1,9]));
console.log(machine.classify([1,10]));
console.log(machine.classify([1,11]));
console.log(" ");
console.log(machine.classify([5,1]));
console.log(machine.classify([5,2]));
console.log(machine.classify([5,3]));
console.log(machine.classify([5,4]));
console.log(machine.classify([5,5]));
console.log(machine.classify([5,6]));
console.log(machine.classify([5,7]));
console.log(machine.classify([5,8]));
console.log(machine.classify([5,9]));
console.log(machine.classify([5,10]));
console.log(machine.classify([5,11]));
console.log(machine.classify([4,10]));
>>>>>>> master





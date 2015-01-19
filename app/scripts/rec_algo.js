//var products = import Products Array
var generator = require('knear');
var k = 2;
var machine = new generator.kNear(k);

var products = [
    {id:1, name:'wand', category:['wands'], quantity: generate_random_quantity()},
    {id:2, name: 'unicorn', category:['animal'], quantity: generate_random_quantity()},
    {id:3, name: 'lion', category:['animal'], quantity: generate_random_quantity()},
    {id:4, name: 'harry wand', category:['wand'], quantity: generate_random_quantity()},
    {id:5, name: 'centaur', category:['animal'], quantity: generate_random_quantity()},
    {id:6, name: 'hermione', category:['wand'], quantity: generate_random_quantity()},
    {id:7, name: 'ron', category:['wand'], quantity: generate_random_quantity()},
    {id:8, name: 'owl', category:['animal'], quantity: generate_random_quantity()},
    {id:9, name: 'house elf', category:['animal'], quantity: generate_random_quantity()},
    {id:10, name: 'dumbledore', category:['wand'], quantity: generate_random_quantity()},
    {id:11, name: 'luna', category:['wand'], quantity: generate_random_quantity()}
];

var product_array = [];

products.forEach(function(product) {
  product_array.push(product.id);
})

function generate_random_product() {
  return Math.floor(Math.random() * (products.length + 1)) + 1;
}

function generate_random_quantity() {
  return Math.floor(Math.random() * 10) + 1;
}
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
  {id: 32, contents: [{product:generate_random_product()}, {product: generate_random_product()}, {product: generate_random_product()}]}
];

// var ProductHash = function(product, array) {
//   this.product = product;
//   this.array = {array: 0};
//   return {this.product: this.array }
// }

// var product = new ProductHash(28, 5);

// console.log(product);

products.forEach(function(product) {
    for ( var i = 0; i < products.length; i++ ) {
        if ( product.category[0] !== products[i].category[0] ) {
            machine.learn( [ product.id, products[i].id ], 'good' );
        } else {
          machine.learn( [ product.id, products[i].id ], 'bad' );
        } if ( product.quantity < 2 ) {
          machine.learn( [ product.id, products[i].id ], 'bad' );
        }
    }
})

carts.forEach(function(cart) {
  for (var j = 0; j < cart.contents.length; j++) {
    for ( var i = 0; i < cart.contents.length; i++ ) {

        if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'good') {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'badass');
        } else if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'great') {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'awesome');
        } else if (machine.classify( [cart.contents[i].product, cart.contents[j].product]) === 'good') {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'great');
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'great');
        } else {
          machine.learn( [cart.contents[i].product, cart.contents[j].product], 'good');
        }

    }
  };
});


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





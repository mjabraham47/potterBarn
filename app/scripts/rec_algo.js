//var products = import Products Array
var generator = require('knear');
var k = 2;
var machine = new generator.kNear(k);

var products = [
    {id:1, name:'wand', category:['wands'], matches: []},
    {id:2, name: 'unicorn', category:['animal'], matches: []},
    {id:3, name: 'lion', category:['animal'], matches: []},
    {id:4, name: 'harry wand', category:['wand'], matches: []},
    {id:5, name: 'centaur', category:['animal'], matches: []},
    {id:6, name: 'hermione', category:['wand'], matches: []},
    {id:7, name: 'ron', category:['wand'], matches: []},
    {id:8, name: 'owl', category:['animal'], matches: []},
    {id:9, name: 'house elf', category:['animal'], matches: []},
    {id:10, name: 'dumbledore', category:['wand'], matches: []},
    {id:11, name: 'luna', category:['wand'], matches: []}
]
//var reviews = import Reviews Array
//var carts = import Carts Array
var Reference = function(id) {
    this[id] = 0;
}

// shits not working, taking another tactic here
// products.forEach(function(product) {
//  for (var i = 0; i < products.length; i++) {
//      if ( product.id !== products[i].id ) {
//          var new_ref = new Reference(products[i].id);
//          product.matches.push(new_ref);

//          if ( product.category[0] === products[i].category[0] ) {
//              var stringsomething = products[i].id.toString();
//              console.log(stringsomething)
//              product.matches[stringsomething] += 1;
//              //console.log(product.matches.stringsomething);
//          }
//      }
//  }
// })

products.forEach(function(product) {
    for ( var i = 0; i < products.length; i++ ) {
        if ( product.category[0] === products[i].category[0] ) {
            machine.learn( [ product.id, products[i].id ], 'good' );
        } else {
          machine.learn( [ product.id, products[i].id ], 'bad' );
        }
    }
})


console.log(machine.classify([1,2]));
console.log(machine.classify([4,6]));
console.log(machine.classify([8,9]));
console.log(machine.classify([1,3]));


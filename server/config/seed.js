/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');
var Cart = require('../api/cart/cart.model');

Category.find({}).remove(function() {
  Category.create(
    { name : 'Wands'},
    { name : 'Broomsticks and Quidditch Equipment' },
    { name : 'Books' },
    { name: 'Mythical Creatures' },
    { name: 'Robes' },
    { name: 'Hats' },
    { name: 'Quills' },
    { name: 'Potions' },
    { name: 'Cauldrons' },
    { name: 'Potion Ingredients' }
    );
});

//This is where the Cart should be
Cart.find({}).remove(function() {
  //var product = new Product({name: 'Cool Wand', info: "This is a really cool wand", categories: ['Wand'], photo: 'http://216.194.165.146/~supertal/wp-content/uploads/2013/01/img_logo_blue.jpg', price: 500, quantity: 34})
  Cart.create({
    contents : [{product:'54b6a84e59d71b1535d65e62',
    quantity_ordered: 1 }],
    user: '54b6aaa312e01d5b35339ac0',
  }, function() {
    console.log('finished populating cart');
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Product.find({}).remove(function() {
  Product.create(
    {
  name: 'Holly Wand',
  info: 'Handcrafted from Solid Holly, with essence of Phoenix feather. Holly possesses protection qualities which far surpass any other wood and is on record for its overall strength. Holly is the chosen wood for use in performing and guiding dream magic.',
  categories: ['Wands'],
  photo: './client/assets/images/wands/holly.jpg',
  price: 200,
  quantity: 5
},
{
  name: 'Wendge Wand',
  info: 'Made of Wenge wood with essence of Dragon Scale. Wenge possesses a very relaxed energy, encouraging slow, even thought. A perfect tool for meditation, this wood in not for the impatient, it they hope to utilize it for quick power.',
  categories: ['Wands'],
  photo: './client/assets/images/wands/holly.jpg',
  price: 300,
  quantity: 5
},
{
  name: 'Elder Wand',
  info: 'Made of Elder Wood, with Essence of Thestral Tail Hair. Elder is written to be among the most powerful of all wand woods. It symbolizes regeneration and it is believed to be a cure all within magical circles...it is also beneficial in times of transformation and change.',
  categories: ['Wands'],
  photo: './client/assets/images/wands/elder.jpg',
  price: 200,
  quantity: 5
},
{
  name: 'Apprentice Wand',
  info: 'Attention aspiring Wizards...gather round to see your first choice in magic...The Apprentice Wand. \n The Apprentice Wand is handcrafted of beautiful Indian Rosewood (Sheesham) and it is just right for a young wizards spell casting. Also perfect for both love charms and healing this wand has wonderful overall presence.',
  categories: ['Wands'],
  photo: './client/assets/images/wands/apprentice.jpg',
  price: 150,
  quantity: 5
},
{
  name: 'Redwood Wand',
  info: 'Made of Redwood with essence of Unicorn mane hair. Redwood is known to be extremely useful for protection spells as well as to help obtain focus and discipline. The user of this wand will find complete serentity in the most chaotic of situations.',
  categories: ['Wands'],
  photo: './client/assets/images/wands/redwood.jpg',
  price: 250,
  quantity: 5
},
{
  name: 'The Professor Wand',
  info: 'Handcrafted from Solid Maple & Black Walnut with essence of Thestral tail hair. Maple is known to be great for charm work and levitation. Maple is also known for being the wood of longevity. Black Walnut is known for its protective nature which makes it perfect for security against the dark arts.',
  categories: ['Wands'],
  photo: './client/assets/images/wands/professor.jpg',
  price: 500,
  quantity: 2
},
{
  name: 'Ash Wand',
  info: 'Made of Ash wood with essence of hair from a male Unicorn. Ash is known to give its owner focus and is the perfect choice for charm work. Also famous for its protective qualities it is especially suited for security against even the most powerful storms. ',
  categories: ['Wands'],
  photo: './client/assets/images/wands/ash.jpg',
  price: 250,
  quantity: 7
},
{
  name: 'Firebolt',
  info: 'It is capable of going from nought to one hundred and fifty miles per hour in ten seconds. The Firebolt also boasts an unbreakable Braking Charm, superb balance and precision, and hovers at reasonable mounting height when let go. \
  By 1994, the Firebolt was the fastest broomstick in the whole world. Even though the competitor Thunderbolt VII can attain speeds that rival that of the Firebolt series, many experts feel that it has sacrificed safety for speed — indeed, \
  during the 2014 Quidditch World Cup, even though professional broomsticks are supposed to withstand all Bludger hits, the tail of Nigerian Seeker Samuel Equiano\'s Thunderbolt was smashed off by a Bludger shot hit by Japanese Beater Hongo. \
  \rThe handle is made of polished ebony (once mistakenly listed as ash in a Quality Quidditch Supplies advertisement), and the twigs can be made of either birch or hazel depending on customer preference. Birch twigs offer more "oomph" when ascending, while hazel provides more precision in turning. The metal parts of the broom are goblin-made ironwork, a first for a broomstick, which increases stability and power in adverse conditions and prevents slippage on the foot grips. \
  \rEvery Firebolt includes a golden registration number.',
  categories: ['Broomsticks and Quidditch Equipment'],
  photo: './client/assets/images/brooms/firebolt.jpg',
  price: 5000,
  quantity: 5
},
{
  name: 'Nimbus 2000',
  info: 'One of the Nimbus Racing Broom Company\'s most successful models. Highly reliable with good speed and exceptional handling — not for beginners!',
  categories: ['Broomsticks and Quidditch Equipment'],
  photo: './client/assets/images/brooms/nimbus2000.jpg',
  price: 5000,
  quantity: 5
},
{
  name: 'Nimbus 2001',
  info: 'The top of the Nimbus Racing Broom Company\'s range. Capable of previously unseen speed and control. A world-class broom.',
  categories: ['Broomsticks and Quidditch Equipment'],
  photo: './client/assets/images/brooms/nimbus2001.jpg',
  price: 6000,
  quantity: 5
});
});

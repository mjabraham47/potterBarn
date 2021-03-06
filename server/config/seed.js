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
    { name : 'Wands', info: 'Every wizards first and last defense. It\'s the first thing in a young wizards hand and the last thing to fall from it when afflicted with Cruciatus.'},
    { name : 'Broomsticks and Quidditch Equipment', info: 'Wizards are born to fly, and sometimes fall. A good broomstick can help you best your competitors, on and off the Quidditch field.' },
    { name : 'Books', info: 'Wizarding is often the same as reading.  Books have spells, and more often than not are enchanted themselves.' },
    { name: 'Mythical Creatures', info: 'They will be your best friend, or maybe just eat you. Either way, it\'s an experience.' },
    { name: 'Hats and Robes', info: 'We all need something to wear.  It is not exactly Muggle fashion, but it will do.' },
    { name: 'Potions and Ingredients', info: 'Drink one and you will either have a great day or just die the painful death of the toad that you will suddenly become.' }
    );
});

//This is where the Cart should be
Cart.find({}).remove(function() {
  //var product = new Product({name: 'Cool Wand', info: "This is a really cool wand", categories: ['Wand'], photo: 'http://216.194.165.146/~supertal/wp-content/uploads/2013/01/img_logo_blue.jpg', price: 500, quantity: 34})
  Cart.create({
    contents : [{product:'54b6a84e59d71b1535d65e62',
    quantity_ordered: 1 }],
    user: '54b6aaa312e01d5b35339ac0',
  },
  function() {
    console.log('finished populating cart');
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    carts: []
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    carts: []
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
    photo: '/assets/images/wands/holly.jpg',
    price: 200,
    quantity: 5
  },
  {
    name: 'Wenge Wand',
    info: 'Made of Wenge wood with essence of Dragon Scale. Wenge possesses a very relaxed energy, encouraging slow, even thought. A perfect tool for meditation, this wood in not for the impatient, it they hope to utilize it for quick power.',
    categories: ['Wands'],
    photo: '/assets/images/wands/wenge.jpg',
    price: 300,
    quantity: 5
  },
  {
    name: 'Elder Wand',
    info: 'Made of Elder Wood, with Essence of Thestral Tail Hair. Elder is written to be among the most powerful of all wand woods. It symbolizes regeneration and it is believed to be a cure all within magical circles...it is also beneficial in times of transformation and change.',
    categories: ['Wands'],
    photo: '/assets/images/wands/elder.jpg',
    price: 200,
    quantity: 5
  },
  {
    name: 'Apprentice Wand',
    info: 'Attention aspiring Wizards...gather round to see your first choice in magic...The Apprentice Wand. \n The Apprentice Wand is handcrafted of beautiful Indian Rosewood (Sheesham) and it is just right for a young wizards spell casting. Also perfect for both love charms and healing this wand has wonderful overall presence.',
    categories: ['Wands'],
    photo: '/assets/images/wands/apprentice.jpg',
    price: 150,
    quantity: 5
  },
  {
    name: 'Redwood Wand',
    info: 'Made of Redwood with essence of Unicorn mane hair. Redwood is known to be extremely useful for protection spells as well as to help obtain focus and discipline. The user of this wand will find complete serentity in the most chaotic of situations.',
    categories: ['Wands'],
    photo: '/assets/images/wands/redwood.jpg',
    price: 250,
    quantity: 5
  },
  {
    name: 'The Professor Wand',
    info: 'Handcrafted from Solid Maple & Black Walnut with essence of Thestral tail hair. Maple is known to be great for charm work and levitation. Maple is also known for being the wood of longevity. Black Walnut is known for its protective nature which makes it perfect for security against the dark arts.',
    categories: ['Wands'],
    photo: '/assets/images/wands/professor.jpg',
    price: 500,
    quantity: 2
  },
  {
    name: 'Ash Wand',
    info: 'Made of Ash wood with essence of hair from a male Unicorn. Ash is known to give its owner focus and is the perfect choice for charm work. Also famous for its protective qualities it is especially suited for security against even the most powerful storms. ',
    categories: ['Wands'],
    photo: '/assets/images/wands/ash.jpg',
    price: 250,
    quantity: 7
  },
  {
    name: 'Firebolt',
    info: 'It is capable of going from nought to one hundred and fifty miles per hour in ten seconds. The Firebolt also boasts an unbreakable Braking Charm, superb balance and precision, and hovers at reasonable mounting height when let go. Every Firebolt includes a golden registration number.',
    categories: ['Broomsticks and Quidditch Equipment'],
    photo: '/assets/images/brooms/firebolt.jpg',
    price: 5000,
    quantity: 5
  },
  {
    name: 'Nimbus 2000',
    info: 'One of the Nimbus Racing Broom Company\'s most successful models. Highly reliable with good speed and exceptional handling — not for beginners!',
    categories: ['Broomsticks and Quidditch Equipment'],
    photo: '/assets/images/brooms/nimbus2000.jpg',
    price: 5000,
    quantity: 5
  },
  {
    name: 'Harry Potter\'s Firebolt',
    info: 'In 1993, Harry Potter received a Firebolt racing broom as a Christmas present from an anonymous benefactor following the destruction of his Nimbus 2000.',
    categories: ['Broomsticks and Quidditch Equipment'],
    photo: '/assets/images/brooms/hpfirebolt.jpg',
    price: 10000,
    quantity: 1
  },
  {
    name: 'Nimbus 2001',
    info: 'The top of the Nimbus Racing Broom Company\'s range. Capable of previously unseen speed and control. A world-class broom.',
    categories: ['Broomsticks and Quidditch Equipment'],
    photo: '/assets/images/brooms/nimbus2001.jpg',
    price: 6000,
    quantity: 5
  },

  {
    name: 'Dragonology',
    info: 'Dragonology: The Complete Book of Dragons (Ologies) Hardcover – October 13, 2003 by Dr. Ernest Drake (Author), Dugald A. Steer (Editor), Various (Illustrator). For true believers only, a lavishly illustrated reproduction of a legendary volume by the world’s most distinguished dragonologist. Don’t let it fall into the wrong hands! Do you believe in dragons? Now, for the first time, the long-lost research of renowned nineteenth century dragonologist Dr. Ernest Drake is presented in all its eccentric glory, happily bridging the gap between dragon legend and fact. The meticulous Dr. Drake assigns Latin names to various dragon species, ruminates on why dragons are able to speak, speculates on how they could fly, and explains the true purpose of their notorious hoarding habits. Here are just a few of DRAGONOLOGYS fascinating features: — Novelty item on every spread, including tactile samples of dragon wings, dragon scales, and dragon skin — Booklet of dragon riddles (indispensable to the burgeoning dragonologist) — Sealed envelope containing a powerful dragon-calling spell — Embossed faux leather cover with silver foil, encrusted with three dragon gems In his afterword, Dr. Drake reveals that one of the crucial goals of dragonologists is to preserve the magnificent creatures of their study wherever possible - a goal this tongue-in-cheek volume most affectionately achieves. An incomparable gift for secret dragonologists everywhere!',
    categories: ['Books'],
    photo: '/assets/images/books/dragonology.jpg',
    price: 650,
    quantity: 5
  },
  {
    name: 'Magical Herbs',
    info: 'Cunninghams Encyclopedia of Magical Herbs (Llewellyns Sourcebook Series) (Cunninghams Encyclopedia Series), by Scott Cunningham  (Author) Do you work magic with herbs? Do you use them in spells, for talismans or simply use their innate powers? If you dont have Cunninghams Encyclopedia of Magical Herbs, you need to get it right away. This book has become a classic in its field. Paul Beyerl, a respected author on herbs calls it "…an essential reference book by students of herbalism and magick alike … Scotts personable charm touches every page… I highly recommend this book." And Jeanne Rose, famous author of books on herbs and developer of an herbal course says I love books like this … It is accessible, easy to read, and with its encompassing index (all too often neglected), simple to use as well. Over 200,000 people already have this book and use it frequently. In this edition of the book (its expanded and revised on the 15th anniversary of original publication) you will find the magical properties and folklore of over 400 herbs! Youll also find lists of herbs based on their magical powers, their genders, their planetary rulers, and more. Perhaps the most important list is the folk name cross-reference. With that information, when a recipe calls for "bramble," youll know it needs blackberry. Or if the magic calls for "enebro," youll know you that is juniper. The main part of this book is the listings of the herbs. Each one includes names, associations, and magical attributions. Violets can be used for protection, luck, love, and more. Primrose is for protection and love. Garlic is for protection, healing, exorcism, lust, and prevention of theft. This book is considered a classic. It is probably consulted more than any other book on this subject. If you want to learn the secrets of magical herbs, this book is a must!',
    categories: ['Books'],
    photo: '/assets/images/books/magical_herbs.jpg',
    price: 570,
    quantity: 5
  },
  {
    name: 'Monsterology',
    info: 'Monsterology: The Complete Book of Monstrous Beasts Hardcover – August 12, 2008 by Dr. Ernest Drake (Author), Dugald A. Steer (Editor), Various (Illustrator) A second major volume by the esteemed Dr. Drake — a lavish exploration of fantastical beasts, from yetis to unicorns Do krakens really lurk below the ocean waves? Do griffins command the air above? In a fascinating new discovery sure to rival the ground-breaking DRAGONOLOGY, the intrepid Dr. Ernest Drake turns his inquisitive gaze from dragons to other so-called mythical creatures. Included are: * a removable letter from Dr. Drake * multiple foldouts, flaps, and pull-outs * textured "samples," including sea serpent skin and a feather from a winged horse * sundry booklets — including riddles to tell a sphinx * a cabinet of curiosities containing yeti fur, a hippogriff feather, and more. For anyone who has ever wondered whether legendary beasts still wander among us, this lush look at an astounding array of creatures offers everything a true believer would want to know.',
    categories: ['Books'],
    photo: '/assets/images/books/monsterology.jpg',
    price: 980,
    quantity: 5
  },
  {
    name: 'Moon Spells',
    info: 'Moon Spells: How to Use the Phases of the Moon to Get What You Want Paperback – July 1, 2002 by Diane Ahlquist  (Author) At any given moment, the moon shines down on half the world. Now, through the magick of Moon Spells, you can learn how to use its energies to achieve your desire--whether it\'s a joyful romance, a successful career, or superb physical and emotional health. Magickal practitioner Diane Ahlquist guides you on a journey to attuning your spirit with the moon. You\'ll be amazed at how much more you can achieve in life when you synchronize your activities with the moon\'s phases. With the proper use of candles, gemstones, and incense, spells can be conducted at exactly the right lunar moment to enhance the flow of power and make your wishes come true. By practicing the spells in this book, you can be more successful, more often, when you want to get a pay raise, release your fears, attract a lover, receive divine messages, begin a new life, or move on after a loss. The moon, our closest celestial neighbor, continues to offer you her power. Moon Spells shows you how to embrace it.',
    categories: ['Books'],
    photo: '/assets/images/books/moon_spells.jpg',
    price: 700,
    quantity: 5
  },
  {
    name: 'Natural Magic',
    info: 'Encyclopedia of Natural Magic Paperback – April 8, 2005 by John Michael Greer  (Author) Natural magic is the ancient and powerful art of using material substances—herbs, stones, incenses, oils, and much more—to tap into the hidden magical powers of nature, transforming your surroundings and yourself. Not just a cookbook of spells, the Encyclopedia of Natural Magic provides an introduction to the philosophy and ways of thought underlying this system. It also gives detailed information on 176 different herbs, trees, stones, metals, oils, incenses, and other substances, and offers countless ways to put them to magical use. With this book and a visit to your local herb store, rock shop, or your backyard garden, you’re ready to enter the world of natural magic.',
    categories: ['Books'],
    photo: '/assets/images/books/natural_magic.jpg',
    price: 660,
    quantity: 5
  },
  {
    name: 'Spellcraft',
    info: 'Power Spellcraft For Life: The Art Of Crafting And Casting For Positive Change Paperback – May 1, 2005 by Arin Murphy-Hiscock  (Author) Your intrepid guide to the art of spellcraft, Power Spellcraft for Life takes you on an in-depth magical journey of personal fulfillment. You\'ll explore the hows and whys of spellcasting, learn step-by-step how to build your own successful spells, raise positive energy to power them, and make your dreams come true. With Wiccan expert Arin Murphy-Hiscock as your guide, you will learn how to: Correctly time your spells for precise results Increase power and accuracy with the careful use of correspondences Successfully adapt spells from books to reflect your personal needs Learn powerful spells that will help you better your life and more. Power Spellcraft for Life provides you with a deeper understanding of crafting and casting, allowing you to hone your skills; power up your energy; and create productive, positive change in all areas of your life.',
    categories: ['Books'],
    photo: '/assets/images/books/spellcraft.jpg',
    price: 680,
    quantity: 5
  },
  {
    name: 'Wizardology',
    info: 'Wizardology: The Book of the Secrets of Merlin (Ologies) Aspiring wizards can tune in to the age-old wisdom of Merlin with this dazzling compendium of all things magical — unveiling novelty elements throughout. For any apprentice determined to learn the arcane arts of wizardry, could there be a better teacher than . . . Merlin himself? Originally discovered in 1588, this remarkable text by history\'s most respected wizard is revealed to the world for the very first time. Lavishly illustrated by four delicate artists, WIZARDOLOGY\'s intricate design even conceals a series of hidden symbols that spell out a secret message when their code is deciphered — if the reader is clever enough to find them. Among WIZARDOLOGY\'s special features are: -a glittering crystal ball-like jewel on the front cover - a world map showing locations of wizards around the globe - tactile samples of a "fairy flag" with one wish remaining and a phoenix feather to aid in flying charms - booklets explaining the proper use of spells, familiars, and potions - a removable dragon pendant allowing the user to dowse for mythical beasts - a pack of eight removable fortune-tellling cards - a 48-page mini book of divination on the final spread',
    categories: ['Books'],
    photo: '/assets/images/books/wizardology.jpg',
    price: 940,
    quantity: 5
  },
  {
    name: 'Acromantula',
    info: 'The Acromantula is a species of giant spider, native to the rainforests of Southeast Asia.  The acromantulas sport eight black eyes with a leg span that can reach up to fifteen feet.  They are capable of speaking English and have a taste for human flesh.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/acromantula.jpg',
    price: 2100,
    quantity: 11
  },
  {
    name: 'Basilisk',
    info: 'The Basilisk is a giant serpent, also known as the King of Serpents, bred by Dark Wizards.  It possesses large yellow eyes that have the power to instantly kill anyone that looks into them.  Their venom is extremely poisonous and can destroy Horcruxes.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/basilisk.jpg',
    price: 2900,
    quantity: 7
  },
  {
    name: 'Centaur',
    info: 'A centaur is a mythological creature with the head, arms, and torso of a human and the body and legs of a horse.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/centaur.jpg',
    price: 4500,
    quantity: 3
  },
  {
    name: 'Grindylow',
    info: 'The grindylow is a small, horned, pale-green water demon and a Dark creature found at the bottom of lakes in Great Britain and Ireland.  Gryndylows survive, for the most part on small sea creatures; however, occasionally they will eat humans.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/grindylow.jpg',
    price: 1800,
    quantity: 8
  },
  {
    name: 'Gryphon',
    info: 'The griffin, griffon, or gryphon (Greek: γρύφων, grýphōn, or γρύπων, grýpōn, early form γρύψ, grýps; Latin: gryphus) is a legendary creature with the body, tail, and back legs of a lion; the head and wings of an eagle; and an eagle\'s talons as its front feet. Because the lion was traditionally considered the king of the beasts and the eagle the king of birds, the griffin was thought to be an especially powerful and majestic creature. The griffin was also thought of as king of all creatures. Griffins are known for guarding treasure and priceless possessions. Adrienne Mayor, a classical folklorist, proposes that the griffin was an ancient misconception derived from the fossilized remains of the Protoceratops found in gold mines in the Altai mountains of Scythia, in present day southeastern Kazakhstan, or in Mongolia. In antiquity it was a symbol of divine power and a guardian of the divine.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/gryphon.jpg',
    price: 6000,
    quantity: 4
  },
  {
    name: 'House Elf',
    info: 'A house-elf (sometimes also referred to as just elves) is a magical creature which is immensely devoted and loyal to the one designated as their master. House-elves serve wizards and witches and are usually found under the employment of old wizarding families taking residence in elaborate establishments, like mansions, and must do everything that their masters command unless they are freed. A house-elf can only be freed when their master presents them with clothes. House-Elves also have their very own brand of Wandless House-elf magic that only they can use, much like many magical creatures. Despite being small in stature, a House Elves magic is not to be overlooked or underestimated.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/house_elf.jpg',
    price: 8400,
    quantity: 9
  },
  {
    name: 'Horntail',
    info: 'Hungarian Horntail is a dragon native to Hungary.  It is widely considered to be the most dangerous of all dragon breeds.  Foods of choice include cattle, sheep, goats, and whenever possible, humans.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/horntail.jpg',
    price: 10000,
    quantity: 2
  },
  {
    name: 'Kelpie',
    info: 'The Kelpie is a shapeshifting water demon native to Britain and Ireland.  The largest reported Kelpie is the Loch Ness Monster.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/kelpie.jpg',
    price: 3000,
    quantity: 6
  },
  {
    name: 'Manticore',
    info: 'The Manticore is one of the wizarding world\'s most dangerous creatures.  Its skin repels all known charms, so it is effectively hard to subdue with magic.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/manticore.jpg',
    price: 7500,
    quantity: 7
  },
  {
    name: 'Owl',
    info: 'Owls are birds of prey. They belong to the families of Strigidae (typical owls) and Tytonidae (Barn Owls), and there are at least 200 species. They normally feed on small mammals, insects, fish, and other birds. They do not make nests, instead sheltering inside trees, ground burrows, caves, and barns, or using other birds\' old nests. Owls do not live in flocks, but the term for a group of owls is a parliament. The study of owls is a branch of ornithology. Normally, some owls are nocturnal, and owls generally keep to themselves, but in the wizarding world they serve many needed functions and have many sorts of personalities.',
    categories: ['Mythical Creatures'],
    photo: '/assets/images/mythical_creatures/owl.jpg',
    price: 2000,
    quantity: 11
  },
  {
    name: 'Golden Snitch',
    info: 'The Golden Snitch, often called simply the Snitch, is the third and smallest ball used in Quidditch. It is a walnut-sized gold-coloured sphere with silver wings. It flies around the Quidditch field at high speeds, sometimes pausing and hovering in place. The Seeker\'s goal is to catch the Snitch before the other team\'s seeker, which is worth one-hundred and fifty points. The game can only end when the Snitch has been caught, or by mutual agreement of the two teams\' Captains; the latter is very rare, however, as one team would have to lose. The Quidditch rule also stated that only the two team\'s Seeker has the right to catch (or touch) the snitch, any player other than the Seeker to do so commits a Snitchnip, which is a common foul in Qudditch.',
    categories: ['Broomsticks and Quidditch Equipment'],
    photo: '/assets/images/broomsticks_and_quidditch_equipment/golden_snitch.png',
    price: 4000,
    quantity: 5
  },
  {
    name: 'Knit Beanie',
    info: 'Lightweight knit in soft acrylic.',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/beaniehats.jpg',
    price: 800,
    quantity: 9
  },
  {
    name: 'Team Sweater - Black/Gold',
    info: 'Keeps you warm',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/sweater_black.jpg',
    price: 1500,
    quantity: 9
  },
  {
    name: 'Team Sweater - Green/Grey',
    info: 'Keeps you warm',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/sweater_green.jpg',
    price: 1500,
    quantity: 9
  },
  {
    name: 'Team Sweater - Red/Gold',
    info: 'Keeps you warm',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/sweater_red.jpg',
    price: 1500,
    quantity: 9
  },
  {
    name: 'Majestic School Robe',
    info: 'Nothing quite as cozy.',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/robe.jpg',
    price: 2500,
    quantity: 9
  },
  {
    name: 'House Scarf - Black/Yellow',
    info: 'Keeps you warm.',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/scarf_black.jpg',
    price: 1000,
    quantity: 9
  },
  {
    name: 'House Scarf - Red/Gold',
    info: 'Keeps you warm.',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/scarf_red.jpg',
    price: 1000,
    quantity: 9
  },
  {
    name: 'House Tie',
    info: 'Assorted Colors.',
    categories: ['Hats and Robes'],
    photo: '/assets/images/hats_and_robes/ties.jpg',
    price: 750,
    quantity: 9
  },
  {
    name: 'Angel\'s Trumpet',
    info: 'Angel\'s Trumpet is a genus of flowering plants. All parts of the plant contain dangerous levels of poison and may be fatal if ingested by humans or animals.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/angels_trumpet.jpg',
    price: 100,
    quantity: 9
  },
  {
    name: 'Armadillo Bile',
    info: 'Armadillo bile is an ingredient used in the Wit-Sharpening Potion. The bile comes from an armadillo.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/armadillo_bile.jpg',
    price: 200,
    quantity: 9
  },
  {
    name: 'Ashwinder Eggs',
    info: 'Ashwinder eggs are the eggs of the Ashwinder, a magical serpent which is born from the embers of an unattended magical fire.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/ashwinder_eggs.jpg',
    price: 300,
    quantity: 9
  },
  {
    name: 'Asphodel',
    info: 'Its powdered root is a potion ingredient. From the lily family, this plant has long, slender leaves. Its name comes from the Greek asphodelos.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/asphodel.png',
    price: 130,
    quantity: 9
  },
  {
    name: 'Baneberry',
    info: 'Baneberry (Actaea spp.) is a genus of flowering plants. The berries are the most poisonous part of the plant, and they are presumably used in the making of the Baneberry Potion.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/baneberry.jpg',
    price: 400,
    quantity: 9
  },
  {
    name: 'Bezoar',
    info: 'A bezoar as every first year Potions student learns is a stonelike mass taken from the stomach of a goat that acts as an antidote to most poisons, but does not work on everything (such as Basilisk venom). This is the reason why bezoars are used in the preparation of the Antidote to Common Poisons. This object is usually made of hair, plant fibre, or similar indigestible matter that stays in the gut of an animal and forms a hard ball or "stone".',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/bezoar.jpg',
    price: 300,
    quantity: 9
  },
  {
    name: 'Blood',
    info: 'Blood is a liquified substance in some organisms, like humans, that carries oxygen throughout the body. In some creatures blood is known to possess magical qualities.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/blood.jpg',
    price: 100,
    quantity: 9
  },
  {
    name: 'Bubotuber Pus',
    info: 'Bubotuber pus is the liquid found in the swellings of the magical Bubotuber plant. It is very valuable for its acne-ridding qualities. It is a thick, yellowish-green liquid and smells strongly of petrol.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/bubotuber_pus.jpg',
    price: 200,
    quantity: 9
  },
  {
    name: 'Bicorn Horn',
    info: 'Bicorns possess two large horns. These horns are shed annually and are gathered when the Bicorn is not looking. One powdered horn is a required ingredient for Polyjuice Potion.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/bicorn_horn.png',
    price: 100,
    quantity: 9
  },
  {
    name: 'Dandelion Root',
    info: 'Dandelion roots (Taraxacum officinale) may be used in some potions. It was kept with other potion ingredients in the Potions Classroom at Hogwarts School of Witchcraft and Wizardry.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/dandelion_root.jpg',
    price: 50,
    quantity: 9
  },
  {
    name: 'Death Cap',
    info: 'Death-Cap is a poisonous mushroom, widely distributed across Europe. It is presumably used in the making of the Death-Cap Draught.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/death_cap.jpg',
    price: 700,
    quantity: 9
  },
  {
    name: 'Doxy Egg',
    info: 'The egg of the Doxy is a type of egg that is used as an ingredient in the Girding Potion which is black in colour. Cormac McLaggen once ate a pound of doxy eggs on a bet, which caused him to miss the tryouts for the Gryffindor Quidditch team during his sixth year.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/doxy_egg.png',
    price: 260,
    quantity: 9
  },
  {
    name: 'Eels Eyes',
    info: 'Eel eyes are eels optical organs. They are used in potion-making. They might be an ingredient for the Bulgeye Potion. The Apothecary in Diagon Alley sells jars of eels eyes for one Galleon each.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/eels_eyes.png',
    price: 180,
    quantity: 9
  },
  {
    name: 'Erumpent Horn',
    info: 'An Erumpent horn is a powerful magical object that comes from the Erumpent. The horn contains a deadly fluid that causes whatever it is injected into to explode. They are highly prized as potion ingredients, but are listed as a Class-B Tradeable Material.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/erumpent_horn.jpg',
    price: 190,
    quantity: 9
  },
  {
    name: 'Flobberworm Mucus',
    info: 'Flobberworm mucus, also known as Flobberworm mucous and Flobber Mucus, is a sticky and green substance that is extracted from the Flobberworm.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/flobberworm_mucus.png',
    price: 60,
    quantity: 9
  },
  {
    name: 'Flitterbloom',
    info: 'Flitterbloom is a magical plant that apparently has long, swaying tentacles. It bears a superficial resemblance to the deadly plant Devil\'s Snare, but it is harmless, so much so that wizards and witches keep it as an indoor plant or grow it in their gardens.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/flitterbloom.jpg',
    price: 300,
    quantity: 9
  },
  {
    name: 'Fairy Wings',
    info: 'The wings of the fairy are used as an ingredient in the Girding Potion and the Beautification Potion. Removing a fairy\'s wings is non-fatal, but will cause extreme annoyance to the fairy in question due to the creatures\' natural vanity. Because the fairies are very hard to approach and to capture, their wings are considered as precious ingredients.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/fairy_wings.jpg',
    price: 800,
    quantity: 9
  },
  {
    name: 'Frog Brain',
    info: 'A frog brain is much like that of a human, but the cerebrum is relatively smaller. In 1992, some third years accidentally plastered frog brains all over the ceiling of Dungeon Five, a Potions dungeon. The use of frog brains in Potions remains unknown.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/frog_brain.jpg',
    price: 80,
    quantity: 9
  },
  {
    name: 'Goosegrass',
    info: 'Goosegrass (Galium aparine) is a species of plant in the madder family. It\'s used in potion-making; it can be bought in one apothecary, at Diagon Alley. It\'s yellow in colour.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/goosegrass.jpg',
    price: 80,
    quantity: 9
  },
  {
    name: 'Gillyweed',
    info: 'Gillyweed is a magical plant native to the Mediterranean Sea. When it is eaten by a witch or wizard, one grows gills and webbing between the fingers and toes, allowing them to process oxygen from water and navigate underwater more easily. There is some debate among Herbologists as to the duration of the effects of Gillyweed in fresh water versus salt water, [1] but the effects of Gillyweed in fresh water seem to last about an hour.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/gillyweed.jpg',
    price: 100,
    quantity: 9
  },
  {
    name: 'Horklump Juice',
    info: 'Horklump juice is a substance extracted from Horklumps. It can be used in a range of healing potions, including the Wiggenweld Potion. One can purchase Horklump juice at one of the apothecaries in Diagon Alley.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/horklump_juice.png',
    price: 400,
    quantity: 9
  },
  {
    name: 'Jobberknoll Feather',
    info: 'The feather of the Jobberknoll is used as an ingredient in Truth serums and Memory Potions. Jobberknoll feathers are apparently not used for quills.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/jobberknoll_feather.png',
    price: 110,
    quantity: 9
  },
  {
    name: 'Knotgrass',
    info: 'Knotgrass is a plant with magical proprieties. It is used in potion-making, being an essential ingredient of the Polyjuice Potion and in the brewing of alcoholic beverages such as Knotgrass Mead.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/knotgrass.jpg',
    price: 30,
    quantity: 9
  },
  {
    name: 'Lionfish Spine',
    info: 'Lionfish have extremely long and separated spines. Crushed into a powder, these spines can be used in healing potions, such as the Wiggenweld Potion. It is also an ingredient of the Herbicide Potion as well as some more complicated ones. The ingredient can be bought from some shops, notably The Apothecary in Diagon Alley.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/lionfish_spine.jpg',
    price: 230,
    quantity: 9
  },
  {
    name: 'Mandrake',
    info: 'A Mandrake, also known as Mandragora, is  a plant which has a root that looks like a human (like a baby when the plant is young, but maturing as the plant grows). When mature, its cry can be fatal to any person who hears it.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/mandrake.jpg',
    price: 900,
    quantity: 9
  },
  {
    name: 'Moonstone',
    info: 'Moonstone (also known as the wishing stone) is a gemstone of medium value. Moonstones are a milky colour and shine very brightly, almost as though they are a source of their own light. They are a useful potion ingredient; powdered moonstones are used as an ingredient for the Draught of Peace and in several Love Potions. Powdered Moonstone is also an ingredient in in Potion No. 86 which is likely an experimental potion. In 1995, Severus Snape forced Harry Potter to write twelve inches of parchment on the properties of Moonstone and its usage in potion-making. Moonstones were also known to be among the gems set into Muriel\'s tiara.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/moonstone.jpg',
    price: 1100,
    quantity: 9
  },
  {
    name: 'Nux Myristica',
    info: 'Nux Myristica is a plant with magical proprieties that is used in potion-making.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/nux_myristica.jpg',
    price: 290,
    quantity: 9
  },
  {
    name: 'Octopus Powder',
    info: 'Octopus Powder is a potion ingredient. It is made from the dried flesh of an octopus. It reportedly increases the strength of potions.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/octopus_powder.jpg',
    price: 10,
    quantity: 9
  },
  {
    name: 'Porcupine Quills',
    info: 'Porcupine quills are the sharp spines revesting porcupines, defending them from predators. Porcupine quills are plentiful since the animals continually replenish them. Quills that have caused no harm are considered the best by potion-makers.  Porcupine quills are an ingredient to several potions, like the Cure for Boils.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/porcupine_quills.jpg',
    price: 20,
    quantity: 9
  },
  {
    name: 'Rat Spleen',
    info: 'Rat spleen is a common ingredient used in the preparation of various potions. It a required ingredient in the Shrinking Solution and in Dragon dung Fertiliser.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/rat_spleen.png',
    price: 5,
    quantity: 9
  },
  {
    name: 'Shrivelfig',
    info: 'The Shrivelfig is a magical plant, the best specimens of which are found in Abyssinia. The flowers of the Shrivelfig grow inside the fruit, both of which are purple in colour. It\'s a deciduous plant, meaning that its leaves start to shed in autumn, and the plant is leafless during winter. However, due to its aggressive roots, the plant can still survive even in snowy conditions. The leaves have medicinal properties. When skinned the fruit, which is actually the plant\'s flower and contains blossoms inside, produces a purple liquid with potion-making properties. The ingredient can be purchased at the Apothecary in Diagon Alley for three Galleons',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/shrivelfig.png',
    price: 90,
    quantity: 9
  },
  {
    name: 'Sneezewort',
    info: 'Sneezewort is a type of plant that is poisonous to livestock. It is used as an ingredient in the Befuddlement Draught. It was kept with other potion ingredients in the Potions Classroom at Hogwarts School of Witchcraft and Wizardry.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/sneezewort.jpg',
    price: 50,
    quantity: 9
  },
  {
    name: 'Unicorn Blood',
    info: 'Unicorn blood is a thick, silvery substance that runs within a unicorn\'s veins. The blood of a unicorn can be drunk in order to keep a person alive. However, the act of slaying a unicorn will cause the drinker to suffer a cursed life though the specifics of what this actually entails are not known well. It is probably a Non-Tradeable Item, since the sale of this substance is controlled by the Ministry of Magic, making it strictly forbidden.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/unicorn_blood.png',
    price: 2000,
    quantity: 9
  },
  {
    name: 'Wormwood',
    info: 'Wormwood (Artemisa absinthium) is a very bitter herb, used in potion-making since ancient times. An Infusion of Wormwood is used in the concoction of the Draught of Living Death, Elixir to Induce Euphoria, and the Shrinking Solution. Harry Potter learned about this ingredient in his first Potion class, where Professor Snape "pointed it out for him".  Muggles use wormwood leaves for many things, including medicine and as a way to discourage fleas. Wormwood\'s scientific name is derived from that of Artemis, the goddess of the hunt in Greek mythology. Wormwood Oil can be poisonous in large amounts.',
    categories: ['Potions and Ingredients'],
    photo: '/assets/images/potions_and_ingredients/wormwood.jpg',
    price: 30,
    quantity: 9
  });
});


//This is where the Cart should be
Cart.find({}).remove(function() {

});

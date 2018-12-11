var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true
});
// var Kitten = require("./models/kitty");
// var Animal = require("./models/animal");
var Entity = require("./models/model");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// var silence = new Kitten({name: 'Silence'});
// console.log(silence.name);

// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });

// var dog = new Animal({type: 'dog', name: 'fido', tags: '112233'});
// dog.save(function(err, fido) {
//   if (err) return console.error(err);
//   Animal.findByName('fido', function(err, animals) {
//     console.log(animals);
//   });
// });

var e = new Entity({testvalue: '111'});
e.save(function(err, doc) {
  if (err) return console.error(err);
});
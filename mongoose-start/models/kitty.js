
var mongoose = require('mongoose');

var kittySchema = require("../schemas/kitty");
var Kitten = mongoose.model('Kitten', kittySchema);

Kitten.find(function(err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

module.exports = Kitten;
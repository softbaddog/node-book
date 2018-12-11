
var mongoose = require('mongoose');

var animalSchema = require("../schemas/animal");

animalSchema.index({ _id: 1 }, { sparse: true });

var Animal = mongoose.model('Animal', animalSchema);

Animal.on('index', function(error) {
  // "_id index cannot be sparse"
  console.log(error.message);
});

module.exports = Animal;
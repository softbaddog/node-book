var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var i = 0;

// define a schema
var animalSchema = new Schema({
  _id: {
    type: Number,
    /*increment:true,*/ default: function () {
      return i++;
    }
  },
  name: String,
  type: String,
  tags: {
    type: [String],
    index: true
  } // field level
}, {
  autoIndex: false
});

// animalSchema.index({ name: 1, type: -1 }); // schema level

// assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function (cb) {
  return this.model('Animal').find({
    type: this.type
  }, cb);
};

animalSchema.statics.findByName = function (name, cb) {
  return this.find({
    name: new RegExp(name, 'i')
  }, cb);
};

animalSchema.query.byName = function (name) {
  return this.where({
    name: new RegExp(name, 'i')
  });
};


module.exports = animalSchema;
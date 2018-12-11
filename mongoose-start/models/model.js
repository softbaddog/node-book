
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CounterSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    default: 0
  }
});
var counter = mongoose.model('counter', CounterSchema);

var entitySchema = new Schema({
  testvalue: {
    type: String
  }
});

entitySchema.pre('save', function (next) {
  var doc = this;
  counter.findByIdAndUpdate({
    _id: 'entityId'
  }, {
    $inc: {
      seq: 1
    }
  }, function (error, counter) {
    if (error)
      return next(error);
    doc.testvalue = counter.seq;
    next();
  });
});

var Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;
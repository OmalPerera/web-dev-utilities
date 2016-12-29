var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jsonReaderModel = new Schema({
  name: String,
});

module.exports = mongoose.model('jsonReaderModel', jsonReaderModel);

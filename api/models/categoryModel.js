'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Insert category name'
  },
  icon: String,
});

module.exports = mongoose.model('Categories', CategorySchema);

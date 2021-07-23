'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: {
    type: String,
    required: 'Insert restaurant name'
  },
  rating: {
    type: Number,
    default: 0
  },
  categories: [Number],
  priceRating: Number,
  photo: String,
  duration: String,
  location: [{
    latitude: String,
    longitude: String,
  }],
  courier: [{
    avatar: String,
    name: String,
  }],
  menu: [{
    menuId: String,
    name: String,
    photo: String,
    description: String,
    calories: Number,
    price: Number,
  }],

});

module.exports = mongoose.model('Restaurants', RestaurantSchema);

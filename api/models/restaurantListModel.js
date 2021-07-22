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

  /*
  categories: {
    type: [{
      type: Number,
    }]
  }
  
  location: [{
    latitude: { type: String },
    longitude: { type: String },
  }],
  courier: {
    avatar: { type: String },
    name: { type: String },
  },

  categories: {
    type: [Number]
  },
  
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', ]
    }]
  }*/

});

module.exports = mongoose.model('Restaurants', RestaurantSchema);

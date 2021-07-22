'use strict';

var mongoose = require('mongoose'),
  Restaurant = mongoose.model('Restaurants');

// List all restaurants
exports.list_all_restaurants = function(req, res) {
  Restaurant.find({}, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};




exports.create_a_restaurant = function(req, res) {
  var new_restaurant = new Restaurant(req.body);
  new_restaurant.save(function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};


exports.read_a_restaurant = function(req, res) {
  Restaurant.findById(req.params.restaurantId, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};


exports.update_a_restaurant = function(req, res) {
  Restaurant.findOneAndUpdate({_id: req.params.restaurantId}, req.body, {new: true}, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};


exports.delete_a_restaurant = function(req, res) {


  Restaurant.remove({
    _id: req.params.restaurantId
  }, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json({ message: 'Restaurant successfully deleted' });
  });
};
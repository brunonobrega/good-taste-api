'user strict';

module.exports = function(app) {
  var restaurantList = require("../controllers/restaurantListController");

  // restaurantList Routes
  app.route('/restaurants')
    .get(restaurantList.list_all_restaurants)
    .post(restaurantList.create_a_restaurant);

  app.route('./restaurants/:restaurantId')
    .get(restaurantList.read_a_restaurant)
    .put(restaurantList.update_a_restaurant)
    .delete(restaurantList.delete_a_restaurant);
};
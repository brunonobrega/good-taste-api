'user strict';

module.exports = async function(app) {
  var restaurantList = require("../controllers/restaurantListController");

  // restaurantList Routes
  await app.route('/restaurants')
    .get(restaurantList.list_all_restaurants)
    .post(restaurantList.create_a_restaurant);

  await app.route('./restaurants/:restaurantId')
    .get(restaurantList.read_a_restaurant)
    .put(restaurantList.update_a_restaurant)
    .delete(restaurantList.delete_a_restaurant);
};
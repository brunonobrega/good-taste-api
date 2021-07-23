'user strict';

module.exports = function(app) {
  var restaurantList = require("../controllers/restaurantListController");
  var category = require("../controllers/categoryController");

  // restaurantList Routes
  app.route('/restaurants')
    .get(restaurantList.list_all_restaurants)
    .post(restaurantList.create_a_restaurant);

  app.route('/restaurants/:restaurantId')
    .get(restaurantList.read_a_restaurant)
    .put(restaurantList.update_a_restaurant)
    .delete(restaurantList.delete_a_restaurant);

    
  // categories Routes
  app.route('/categories')
  .get(category.list_all_categories)
  .post(category.create_a_category);

app.route('/categories/:categoryId')
  .get(category.read_a_category)
  .put(category.update_a_category)
  .delete(category.delete_a_category);
};
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3333,
  mongoose = require('mongoose'),
  // register models
  Restaurants = require('./api/models/restaurantListModel'), 
  Categories = require('./api/models/categoryModel'), 
  bodyParser = require('body-parser');
  
// instance connection with mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/goodTastedb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('Good Taste API server started on: ' + port + ' port');

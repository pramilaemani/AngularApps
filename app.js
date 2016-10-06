
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');


// To connect the database from mongodb
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/prototypeDB');

var app = express();
var router = express.Router();
/**
 * Configuration
 */

// all environments
app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Make db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);
app.get('/api/allVinDetails', api.allVinDetails);
app.get('/api/allCampDetails', api.allCampDetails);
app.get('/api/getSelCampDetails/:vinid', api.getSelCampDetails);
app.get('/api/getSelVinDetails/:campid', api.getSelVinDetails);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);
// Start server
app.listen(8000, function(){
  console.log("Mean Stack Application listening on port 8000");
});

module.exports = app;

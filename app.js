//Module dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//for logging
var log4js = require('log4js');

//DB Connections
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var dbUrl = "mongodb://localhost:27017/prototypeDB";

//router
var router = express.Router();

MongoClient.connect(dbUrl, function(err,db){
	if(!err){
	console.log("Connection to the DB is successful");
	}
});

//setting the static paths
app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/partials/:name', function(req, res){
	var name = req.params.name;
  	res.render('partials/' + name);
});

app.listen(3000, function(){
  console.log("Mean Stack Application listening on port 3000");
});


// we are specifying the html directory as another public directory
var express = require('express');
//var path = require('path');
//server.set('views', __dirname);
var server = express();
server.use(express.static(__dirname + '/public'));
server.set('views', './views'); //donish
server.set('view engine', 'jade'); //done

server.get('/', function(req, res){
	res.render("home_page.jade");
});

server.get('/active', function(req, res){
	res.render("active_page.jade");
});

server.get('/attractions', function(req, res){
	res.render("attractions_page.jade");
});

server.get('/concerts', function(req, res){
	res.render("concerts_page.jade");
});

server.get('/food', function(req, res){
	res.render("food_page.jade");
});

server.get('/movies', function(req, res){
	res.render("movies_page.jade");
});

server.get('/nightlife', function(req, res){
	res.render("nightlife_page.jade");
});

server.get('/shopping', function(req, res){
	res.render("shopping_page.jade");
});

server.get('/special', function(req, res){
	res.render("special_page.jade");
});

server.get('/stayingin', function(req, res){
	res.render("stayingig_page.jade");
});

server.listen(1337, '127.0.0.1');

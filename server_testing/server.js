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

server.get('/active_page.html', function(req, res){
	res.render("active_page.jade");
});

server.get('/attractions_page.html', function(req, res){
	res.render("attractions_page.jade");
});

server.get('/concerts_page.html', function(req, res){
	res.render("concerts_page.jade");
});

server.get('/food_page.html', function(req, res){
	res.render("food_page.jade");
});

server.get('/movies_page.html', function(req, res){
	res.render("movies_page.jade");
});

server.get('/nightlife_page.html', function(req, res){
	res.render("nightlife_page.jade");
});

server.get('/shopping_page.html', function(req, res){
	res.render("shopping_page.jade");
});

server.get('/special_page.html', function(req, res){
	res.render("special_page.jade");
});

server.get('/stayingin_page.html', function(req, res){
	res.render("stayingin_page.jade");
});

server.listen(1337, '127.0.0.1');

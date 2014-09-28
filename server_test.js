var express = require('express');

var server = express();

server.set('views', __dirname);


server.get('/', function(request, response) {
	response.end();

});

server.get('/dynamic', function(request, response) {
	response.render('dynamic.ejs');

});

server.listen(8090);
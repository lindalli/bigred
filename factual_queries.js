/*TODO: merge lat/long together?

*/

var lat_long_func = require('find_location'); ///this line might give PROBLEMS?..
var lat = lat_long_func.getCoordinates().[0];
var lon = lat_long_func.getCoordinates().[1];

var Factual = require('./node_modules/factual-api'); 
var factual = new Factual('H6KtP8gAGRVJeHaiEukjKiMG16jv3edcYNqhwIFB', 'AUH3r8blzToAgObnpkpoJF4AUiZi4ZmKR9PB6SHd');


var findfood = function(latitude, longitude, cuisine) {
	/* selects restaurants based on client location and cuisine specified. 
	returns dictionary: key: names of restaurants; value: addresses of restaurants
	NOTE: cuisine parameter is string, others - numeric
	*/
	latitude = lat;
	longitude = lon;
	var food_map = {}; //dictionary
	var foodData = null; //TODO: general object check?

	factual.get('/t/restaurants-us', {filters:{"cuisine":cuisine}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {
		
		foodData = res.data;
		
		for (var count = 0; count < foodData.length; count++) {
			
			food_map[foodData[count].name]=foodData[count].address;
		}
	});
}


var findshopping = function(latitude, longitude, category) {
 	/* selects malls/shops/groceries based on client location, price and category specified. 
	returns dictionary: key: names of product; value: addresses of products
	NOTE: all parameters are numeric
	*/
	latitude = lat;
	longitude = lon;
	var shopping_map = {};
	var shoppingData = null; //TODO: general object check?


	if (category == "Apparel") {
		factual.get('/t/places-us', {filters:{"category":category}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {

			//TODO: sort by price?
			shoppingData = res.data;

			for (var count = 0; count < shoppingData.length; count++) {
			
				shopping_map[shoppingData[count].name]=shoppingData[count].address;
			}

		});

	}

	else if (category == "Personal Care") {

		factual.get('/t/places-us', {filters:{"category_ids":{"$in":[128, 277,278,279,280,281,282,283,284,285,286,287]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {
		
		shoppingData = res.data;

		for (var count = 0; count < shoppingData.length; count++) {
			shopping_map[shoppingData[count].name] = shoppingData[count].address;
		}

		}); 

	}

	else {

		factual.get('/t/places-us', {filters:{"category_ids":{"$in":[149,150,151,152,152,154,155,156,443,169]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {
		
		shoppingData = res.data;

		for (var count = 0; count < shoppingData.length; count++) {
			shopping_map[shoppingData[count].name] = shoppingData[count].address;
		}

		}); 
	}
}


var findAttractions = function(latitude, longitude) {

	/* selects all travel lodging based on client location
	*/
	latitude = lat;
	longitude = lon;
	var attractions_map = {};
	var attractionsData = null; //TODO: general object check?

	factual.get('/t/places-us', {filters:{"category_ids":{"$in":[430,438]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {
		
		attractionsData = res.data;

		for (var count = 0; count < attractionsData.length; count++) {
			attractions_map[attractionsData[count].name] = attractionsData[count].address;
		}

	}); 
}

var findSports = function(latitude, longitude, category) {
	
	latitude = lat;
	longitude = lon;
	var sports_map = {};
	var sportsData = null; //TODO: general object check?

	if (category == "Outdoor") {

		factual.get('/t/places-us', {filters:{"category_ids":{"$in":[378,380,381,382,387,394,396,399,402,401,403,404,409,412]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {

			sportsData = res.data;

			for (var count = 0; count< sportsData.length; count++) {
				sports_map[sportsData[count].name] = sportsData[count].address;
			}

		});
	}
	else {

		factual.get('/t/places-us', {filters:{"category_ids":{"$in":[376,377,379,383,384,385,386,395,397,398,400,407,408,414]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {

			sportsData = res.data;

			for (var count = 0; count< sportsData.length; count++) {
				sports_map[sportsData[count].name] = sportsData[count].address;
			}

		});
	}
}

var findMovies = function(latitude, longitude) {
	latitude = lat;
	longitude = lon;
	var movies_map = {};
	var moviesData = null; //TODO: general object check?

	factual.get('/t/places-us', {filters:{"category_ids":{"$eq":332}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {

		moviesData = res.data;

		for (var count = 0; count< moviesData.length; count++) {
			movies_map[moviesData[count].name] = moviesData[count].address;
		}

	});
}

var findConcerts = function(latitude, longitude) {
	latitude = lat;
	longitude = lon;
	var concerts_map = {};
	var concertsData = null; //TODO: general object check?

	factual.get('/t/places-us', {filters:{"category_ids":{"$in":[140,333,314,337]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {

		concertsData = res.data;

		for (var count = 0; count< concertsData.length; count++) {
			movies_map[concertsData[count].name] = concertsData[count].address;
		}

	});
}

var findNight = function(latitude, longitude) {
	latitude = lat;
	longitude = lon;
	var night_map = {};
	var nightData = null; //TODO: general object check?

	factual.get('/t/places-us', {filters:{"category_ids":{"$in":[312,313,315,318,320,321,322,324,329,326,334,335]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {

		nightData = res.data;

		for (var count = 0; count< nightData.length; count++) {
			night_map[moviesData[count].name] = nightData[count].address;
		}

	});
}

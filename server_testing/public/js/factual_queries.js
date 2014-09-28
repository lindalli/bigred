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
	*/
	
	var food_map = {}; //dictionary
	var foodData = null; //TODO: general object check?

	factual.get('t/restaurants-us', {filters:{"cuisine":cuisine}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {
		
		foodData = res.data;
		
		for (var count = 0; count < foodData.length; count++) {
			
			food_map[foodData[count].name]=foodData[count].address;
		}
	});
}

var findshopping = function(latitude, longitude, category, price) {
 	/* selects malls/shops/groceries based on client location, price and category specified. 
	returns dictionary: key: names of product; value: addresses of products
	*/
	var shopping_map = {};
	var shoppingData = null; //TODO: general object check?

	factual.get('t/products-cpg', {filters:{"category":category, "avg_price":{"$lte":price}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {
		//TODO: sort by price?
		shoppingData = res.data;

		for (var count = 0; count < shoppingData.length; count++) {
			
			food_map[shoppingData[count].name]=shoppingData[count].address;
		}

	});
}


var findAttractions = function(latitude, longitude) {

	/* selects all travel lodging based on client location
	*/

	var attractions_map = {};
	var attractionsData = null; //TODO: general object check?

	factual.get('/t/places-us', {filters:{"category_ids":{"$includes_any":[430,438]}}, geo:{"$circle":{"$center":[latitude, longitude],"$meters":3000}}}, function (error, res) {
		
		attractionsData = res.data;

		for (var count = 0; count < attractionsData.length; count++) {
			attractions_map[attractionsData[count].name] = attractionsData[count].address;
		}

	}); 
}
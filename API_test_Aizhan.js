/*var xhr= new XHLHttpRequest();
xhr.open("GET", "http://api.v3.factual.com/t/restaurants-us?geo={"$circle":{"$center":[34.06021,-118.41828],"$meters": 10000}}","false");
console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.response);
var Json=xhr.reponse; //json object
*/

console.log("Hello world!!!!!");
var Factual = require('./node_modules/factual-api');
var factual = new Factual('H6KtP8gAGRVJeHaiEukjKiMG16jv3edcYNqhwIFB', 'AUH3r8blzToAgObnpkpoJF4AUiZi4ZmKR9PB6SHd');

//var foodplaces = "";

// factual.get('/t/places-us', {filters:{category_ids:{"$includes":347}}}, function (error, res) {
// 			x=res.data[0].name;
// 			console.log(x);

//			render

/*
factual.get('/t/restaurants-us', {q:"vegetarian", geo:{"$circle":{"$center":[34.041195,-118.331518],"$meters":1000}}}, function (error, res) {
  console.log(res.data);
});
*/

//factual.get('/t/restaurants-us', {filters:{"cuisine":"tea"}, geo:{"$circle":{"$center":[34.041195,-118.331518],"$meters":1000}}}, function (error, res) {
factual.get('/t/products-cpg', {filters:{"category":"food"}}, function (error, res) {
//factual.get('/t/products-cpg', {q:"food", geo:{"$circle":{"$center":[34.041195,-118.331518],"$meters":1000}}}, function (error, res) {
	//factual.get('/t/products-cpg', {filters:{"category":"food"}, geo:{"$circle":{"$center":[34.041195,-118.331518],"$meters":1000}}}, function (error, res)
//factual.get('/t/places-us', {filters:{"category_ids":{"$includes_any":[430,438]}}, geo:{"$circle":{"$center":[34.041195,-118.331518],"$meters":3000}}}, function (error, res) {
//	var arr = [];
	

	var x = {};
	//console.log(res);

	if (res != null && res.data != null ) { // & res!=null 

		console.log(res.data.length);

		for (var count = 0; count < res.data.length; count++) {
			
			console.log(res.data);
			//x[res.data[count].name] = res.data[count].address;
		// arr.push(x);

		}
	}
	else {
		console.log("Oops, there seems to be no searches with this specification")

	}


	console.log(x);

	// for (var count = 0; count < arr.length; count++) {
	//	console.log(arr[count].name);
	// 	console.log(arr[count].address);
	// }

});

/*
factual.get('t/restaurants-us', {filters:{cuisine:"vegetarian", geo:{"$circle":{"$center":[34.06021,-118.41828],"$meters":3000}}}},
	 function(error, res) {
		foodplaces = res.data;
		console.log(foodplaces);
});
*/




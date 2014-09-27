/*var xhr= new XHLHttpRequest();
xhr.open("GET", "http://api.v3.factual.com/t/restaurants-us?geo={"$circle":{"$center":[34.06021,-118.41828],"$meters": 10000}}","false");
console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.response);
var Json=xhr.reponse; //json object
*/
fs = require('fs');
console.log("Hello world!!!!!");
var Factual = require('C:/Users/Acer/node_modules/factual-api');
var factual = new Factual('H6KtP8gAGRVJeHaiEukjKiMG16jv3edcYNqhwIFB', 'AUH3r8blzToAgObnpkpoJF4AUiZi4ZmKR9PB6SHd');

var coffeShops = factual.get('/t/places-us', {q:"coffee"}, function (error, res) {
  fs.writeFile("/tmp/test/foo.txt", res.data, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
});
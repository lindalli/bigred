var text = document.getElementById("location");
var lat=0;
var lon=0;

function getLocation() {
    if (navigator.geolocation) {
        console.log('in getLocation');
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        text.innerHTML = "Geolocation is not supported by this browser. Please enter zip code.";
    }
}

function showPosition(position) {
    console.log('in showPosition');
    text.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    lat=position.coords.latitude;
    lon=position.coords.longitude;  
}

function showError(error) {
    if (error.PERMISSION_DENIED || error.POSITION_UNAVAILABLE || error.TIMEOUT || error.UNKNOWN_ERROR) {
        text.innerHTML= "Location not found. Please enter zip code.";
    }
    
}

/*
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            text.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            text.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            text.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            text.innerHTML = "An unknown error occurred."
            break;
    }
}
*/

// function findAttractions(latitude, longitude) {
//     var Factual = require('./node_modules/factual-api');
//     var factual = new Factual('H6KtP8gAGRVJeHaiEukjKiMG16jv3edcYNqhwIFB', 'AUH3r8blzToAgObnpkpoJF4AUiZi4ZmKR9PB6SHd');

//     var coffeeShops = factual.get('/t/places-us', {q:"coffee", geo:{"$circle":{"$center":[latitude, longitude],"$meters":1000}}}, function (error, res) {
//     console.log(res.data);
//     }); 
// }

//main function
function getCoordinates() {
    getLocation();
    return [lat, lon];
}

exports.getCoordinates = getCoordinates; //public function

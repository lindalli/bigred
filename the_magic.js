//BigRedHacks Hackathon

//defining global contant variables
var NUM_BUTTONS = 9;
var FOOD = "food";
var MUSIC = "music";
var NIGHTLIFE = "nightlife";
var MOVIES = "movies";
var STAY = "stay";
var SHOP = "shop";
var ACTIVE = "active";
var ATTRACTIONS = "attractions";
var SPECIAL = "special";

var BUTTON_LIST = [NUM_BUTTONS, FOOD, MUSIC, NIGHTLIFE, MOVIES, STAY, SHOP, ACTIVE, ATTRACTIONS, SPECIAL];

Array.prototype.foreach = function(f) {
    for (var i = 0; i < this.length; ++i) {
        f(this[i]);
    }
};

var makeHomeButtons = function()
{
	for(var i = 0; i < NUM_BUTTONS; i++)
	{
		var button = document.createElement("BUTTON");
		button.setAttribute("id", BUTTON_LIST[i]);
		button.setAttribute("class", "homebutton");
		button.innerHTML = BUTTON_LIST[i];
	}
}

makeHomeButtons();
//BigRedHacks Hackathon

//defining global contant variables
var NUM_BUTTONS = 9;
var FOOD = "food";
var MUSIC = "concerts";
var NIGHTLIFE = "nightlife";
var MOVIES = "movies";
var STAY = "stayingin";
var SHOP = "shopping";
var ACTIVE = "active";
var ATTRACTIONS = "attractions";
var SPECIAL = "special";

var BUTTON_LIST = [FOOD, MUSIC, NIGHTLIFE, MOVIES, STAY, SHOP, ACTIVE, ATTRACTIONS, SPECIAL];

Array.prototype.foreach = function(f) {
    for (var i = 0; i < this.length; ++i) {
        f(this[i]);
    }
};

var makeHomeButtons = function()
{
	var d = document.createElement("DIV");
	d.setAttribute("id", "buttondiv");
	document.body.appendChild(d);
	for(var i = 0; i < NUM_BUTTONS; i++)
	{
		var button = document.createElement("A");
		button.setAttribute("id", BUTTON_LIST[i]);
		button.setAttribute("href", BUTTON_LIST[i] + "_page.html");
		button.setAttribute("class", "btn btn-default btn-lg active");
		button.setAttribute("role", "button");
		var img = document.createElement("IMG");
		img.src = "data/" + BUTTON_LIST[i] + ".png";
		button.setAttribute("class", "homebutton");
		button.appendChild(img);
		document.getElementById("buttondiv").appendChild(button);
	}
}

//TODO do the following with some sort of loop
$(document).ready(function() {
    			$(".bth btn-default btn-lg active").click(function() { if($(this).attr('id') === FOOD)
    			{
    				console.log(FOOD);
    			}
    			else if($(this).attr('id') === MUSIC)
    			{
    				console.log(MUSIC);
    			}
				else if($(this).attr('id') === NIGHTLIFE)
    			{
    				console.log(NIGHTLIFE);
    			}
    			else if($(this).attr('id') === MOVIES)
    			{
    				console.log(MOVIES);
    			}
    			else if($(this).attr('id') === STAY)
    			{
    				console.log(STAY);
    			}
    			else if($(this).attr('id') === SHOP)
    			{
    				console.log(SHOP);
    			}
    			else if($(this).attr('id') === ACTIVE)
    			{
    				console.log(ACTIVE);
    			}
    			else if($(this).attr('id') === ATTRACTIONS)
    			{
    				console.log(ATTRACTIONS);
    			}
    			else if($(this).attr('id') === SPECIAL)
    			{
    				console.log(SPECIAL);
    			}
    			});
    	});

makeHomeButtons();

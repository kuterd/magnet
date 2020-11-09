var $ = require("jquery");

var Game = require("./Game.js"),
	Tutorial = require("./Tutorial.js");

$(document).ready(function() {
	var addr = "";
	
	if(location.protocol == "file:")
		addr = "127.0.0.1:81";
	else
		addr = location.host + ":81";
	
	new Game("ws://" + addr);
	new Tutorial();
});


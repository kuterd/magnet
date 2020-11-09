var $ = require("jquery");

var Board = require("../../shared/Board.js"),
	Tile = require("../../shared/Tile.js"),
	Constants = require("../../shared/Constants.js");


var CENTER_ID = 2;

function Tutorial() {
	this.canvas = $("#tutorialCanvas");
	this.ctx = this.canvas[0].getContext("2d");
	

	this.tutorialState = 0;
	this.tutorialCycle = 0;

	this.resetBoard();
	this.size = this.board.getRealSize();
	
	var sizePx = this.size + "px";
	this.canvas.attr("width", sizePx);
	this.canvas.attr("height", sizePx);
	
	this.update();
	setInterval(this.updateBoard.bind(this), Constants.UPDATE_TIME);
	this.draw();
}

Tutorial.prototype.update = function() {

	setTimeout(this.update.bind(this),this.tutorialState == 2 ? 1500 : 600);
	
	
	if(this.tutorialState == 3) {
		this.tutorialState = 0;
		this.resetBoard();
	} else {
		this.tutorialState++;
		this.board.click(2, 2);
	}


};

Tutorial.prototype.updateBoard = function() {
	this.board.update();
};

Tutorial.prototype.resetBoard = function() {	
	this.board = new Board(5);

	this.board.put(2, 2, CENTER_ID);

	if(this.tutorialCycle == 1) {
		this.board.put(3, 2, new Tile(4,2));		
		this.board.put(3, 3, new Tile(4,2));
		this.board.put(1, 2, new Tile(4,2));		
		this.board.put(1, 1, new Tile(4,2));
	}

	this.tutorialCycle++; 
	this.tutorialCycle %= 2;
};

Tutorial.prototype.draw = function() {
	this.ctx.clearRect(0, 0, this.size, this.size);
	this.board.draw(this.ctx, undefined, undefined, undefined, undefined, CENTER_ID);

	requestAnimationFrame(this.draw.bind(this));
};

module.exports = Tutorial;

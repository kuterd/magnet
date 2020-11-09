function Player(id, clientHandler, username) {
	this.id = id;
	this.score = 0;
	this.clientHandler = clientHandler;
	this.username = username;
	this.lastClick = 0;
	this.expTileCount = 0;

	this.minX = null;
	this.minY = null;
	this.maxX = null;
	this.maxY = null;
}

module.exports = Player;

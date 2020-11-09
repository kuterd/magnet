var WebSocketServer = require("ws").Server;

var protocol = require("../protocol.js"),
	Board = require("../../shared/Board.js"),
	PacketUtils = require("../../shared/PacketUtils.js")(protocol),
	Player = require("./Player.js"),
	Tile = require("../../shared/Tile.js"),
	Constants = require("../../shared/Constants.js"),
	ClientHandler = require("./ClientHandler.js");

function GameServer(port) {
	this.players = {};
	this.pendingClicks = [];

	//Client 0 = boşluk
	this.lastId = 1;
	
	this.board = new Board();
	this.board.onScoreChange = this.onScoreChange.bind(this);	
	this.board.onExpTileCountChange = this.onExpTileCountChange.bind(this);	

	this.wss = new WebSocketServer({port: port});
	
	this.wss.on("listening", (function() {
		console.log("Port " + port + " dinleniyor");
	}).bind(this));
	
	this.wss.on("error", function(error) {
		throw "sunucu hatağsı " + error;
	});


	this.wss.on("connection", (function(ws) {
		var clientHandler = new ClientHandler(this, ws);
		
		var onClose = this.onClose.bind(this, clientHandler);

		ws.on("close", onClose);
		ws.on("error", onClose);
	}).bind(this));
	
	setInterval(this.sync.bind(this), 1000);
	
	/* Oyun döngüsü ve güncelleme paketi */
	setInterval(this.update.bind(this), Constants.UPDATE_TIME);
	
	//TODO: konsol ?
}

GameServer.prototype.onClose = function(clientHandler) {
	if(!clientHandler.player) return;
	
	for(var x = clientHandler.player.minX; x <= clientHandler.player.maxX; x++) {
		for(var y = clientHandler.player.minY; y <= clientHandler.player.maxY; y++) {
			if(this.board.tiles[x][y] && this.board.tiles[x][y].id == clientHandler.player.id)
				this.board.tiles[x][y] = null; 
		} 
	}

	delete this.players[clientHandler.player.id];
};

GameServer.prototype.onScoreChange = function(id, change, x, y) {
	var player = this.players[id];
	
	if(change > 0) {
		player.minX = Math.min(player.minX == null ? Infinity : player.minX, x);	
		player.minY = Math.min(player.minY == null ? Infinity : player.minY, y);
		
		player.maxX = Math.max(player.maxX == null ? -Infinity : player.maxX, x);		
		player.maxY = Math.max(player.maxY == null ? -Infinity : player.maxY, y);
	}	

	if(!player) {
		console.log("[WTF] Zombi oyuncu " + id);
		return; 
	}

	player.score += change;
	
	
	if(player.score == 0 && player.expTileCount == 0) {
		console.log("Oyuncu " + player.username + "(" + player.id + ") öldü :C");
		player.clientHandler.gameOver();

		delete this.players[id];
	}
			
};

GameServer.prototype.onExpTileCountChange = function(id, change) {
	var player = this.players[id];
	if(player) player.expTileCount += change;
};


GameServer.prototype.click = function(player, pos) {
	var now = new Date();	
	if(now - player.lastClick > Constants.CLICK_DELAY && this.board.check(pos.x, pos.y, player.id)) {
		this.pendingClicks.push(pos);
		player.lastClick = now;
	}
};

GameServer.prototype.broadcastToPlayers = function(data) {
	Object.values(this.players).forEach(function(player) {
		if(player.clientHandler.isOpen())
				player.clientHandler.ws.send(data);
	});
};
	
GameServer.prototype.requestLogin = function(client, username) {
	this.id %= 200000;

	var id = this.lastId++,
		player = (this.players[id] = new Player(id, client, username)),
		pos = [];

	pos[0] = Math.floor(Math.random() * Constants.BOARD_SIZE); 
	pos[1] = Math.floor(Math.random() * Constants.BOARD_SIZE);
				
	console.log("Oyuncu " + username + " giriş yaptı konum " + JSON.stringify(pos));

	this.board.put(pos[0], pos[1], id);

	return [player, pos];
};

GameServer.prototype.sync = function() {
	var boardData = new protocol.BoardData();

	/* Genişeleme animasyonu aşamasında olan tilelar */
	this.board.expandingTiles.forEach(function(expTile) {
		var expTileM = new protocol.BoardData.ExpandingTile();
	
		expTileM.id = expTile.id;
		expTileM.to = new protocol.TilePos({x: expTile.toX, y: expTile.toY});
		expTileM.from = new protocol.TilePos({x: expTile.fromX, y: expTile.fromY});
		expTileM.life = expTile.life * Tile.EXP_LIFE;

		boardData.expTiles.push(expTileM);
	});
		
	for(var x = 0; x < this.board.size; x++) {
		for(var y = 0; y < this.board.size; y++) {
			var tile = this.board.tiles[x][y];

			//Boşlukları göstermenin daha iyi bir yolu yok mu			
			if(tile == null) tile = new Tile(0);
			boardData.tiles.push(tile);
		}
	}

	/* Leaderboard hesaplamaları */		

	var sorted = Object.values(this.players).sort(function(a, b) {
		return b.score - a.score;
	});
		
	for(var i = 0; i < 10 && i < sorted.length; i++) {
		boardData.leaderBoard.push(new protocol.BoardData.LeaderBoardEntry(sorted[i])); 
	}


	this.broadcastToPlayers(PacketUtils.makePacket(
		protocol.Packet.Type.BOARD_DATA,
		protocol.BoardData.encode(boardData).finish()
	));
};

GameServer.prototype.update = function() {
	var updatePacket = new protocol.BoardUpdate();
		
	this.pendingClicks.forEach((function(pos) {
		this.board.click(pos.x, pos.y);
		updatePacket.clicks.push(pos);
	}).bind(this));
		
	this.pendingClicks = [];
		
	this.broadcastToPlayers(
		PacketUtils.makePacket(
			protocol.Packet.Type.BOARD_UPDATE,
			protocol.BoardUpdate.encode(updatePacket).finish()
		)
	);
	this.board.update();
};


module.exports = GameServer;

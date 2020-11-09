var WebSocket = require("ws");

var protocol = require("../protocol.js"),
	PacketUtils = require("../../shared/PacketUtils.js")(protocol);

function ClientHandler(gameServer, ws) {
	this.ws = ws;
	this.player = null;
	this.gameServer = gameServer;

	ws.on("message", this.bindSafe(this.onMessage));
}


ClientHandler.prototype.onMessage = function(data) {
	var packet = protocol.Packet.decode(data);

	switch(packet.type) { 
		case protocol.Packet.Type.LOGIN:
			var loginResult = this.gameServer.requestLogin(
				this,
				protocol.Login.decode(packet.data).username
			);

			this.player = loginResult[0];
			
			var lcomp = new protocol.LoginComplete({				
				tilePos: new protocol.TilePos({ x: loginResult[1][0], y: loginResult[1][1] }),
				id: loginResult[0].id
			});

			this.ws.send(PacketUtils.makePacket(
				protocol.Packet.Type.LOGIN_COMPLETE,
				protocol.LoginComplete.encode(lcomp).finish()
			));
			break;
		case protocol.Packet.Type.GAME_MOVE:
			if(this.player) {
				var pos = protocol.TilePos.decode(packet.data);
				this.gameServer.click(this.player, pos);
			}	
	}
};

ClientHandler.prototype.isOpen = function() {
	return this.ws.readyState == WebSocket.OPEN;
};

ClientHandler.prototype.gameOver = function() {
	this.player = null;
	
	if(this.isOpen()) {
		this.ws.send(PacketUtils.makePacket(
			protocol.Packet.Type.GAME_OVER,
			new Uint8Array(0)
		));
	}
};

ClientHandler.prototype.bindSafe = function(safeFunc) {
	return (function() {
		try {
			safeFunc.apply(this, arguments);
		} catch(e) {
			this.ws.close();
			console.log("Client hatağsı: " + e); 
			
			throw e;		
		}
	}).bind(this);
};


module.exports = ClientHandler;

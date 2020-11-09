var $ = require("jquery");

var protocol = require("../protocol.js"),
	Board = require("../../shared/Board.js"),
	Tile = require("../../shared/Tile.js"),
	vec2 = require("./vec2.js"),
	Constants = require("../../shared/Constants.js"),
	PacketUtils = require("../../shared/PacketUtils.js")(protocol);

var CAM_MAX_M = 30;

function Game(serverAddress) {
	this.lastClick = 0;
	this.id = -1;

	this.canvas = $("#canvas");
	this.ctx = this.canvas[0].getContext("2d");

	this.ws = new WebSocket(serverAddress);
	this.ws.binaryType = "arraybuffer";

	this.ws.onmessage = this.onMessage.bind(this);
	this.ws.onclose = this.ws.onerror = this.onClose.bind(this);
	
	this.mouseClicked = this.mouseMoved = false;
	this.touchLastD = null;
	this.mouseLast = null;
	this.camPos = vec2(0, 0);
	this.zoom = 1.5;

	this.board = new Board();

	this.resize();
	$(window).resize(this.resize.bind(this));

	this.loadPage("#loginPage");

	$("#login").click((function() {	
		this.loadPage("#loadingPage");
		this.ws.send(PacketUtils.makePacket(
			protocol.Packet.Type.LOGIN,
			protocol.Login.encode({username: $("#username").val()}).finish()
		));
	}).bind(this));

	this.canvas.mouseup(this.onMouseUp.bind(this));
	this.canvas.mousedown(this.onMouseDown.bind(this));
	this.canvas.mousemove(this.onMouseMove.bind(this));
	this.canvas.mouseout(this.onMouseOut.bind(this));

	this.canvas.on("wheel", this.onWheel.bind(this));

	this.canvas.on("touchstart", this.onTouchStart.bind(this));
	this.canvas.on("touchend", this.onTouchEnd.bind(this));
	this.canvas.on("touchmove", this.onTouchMove.bind(this));

	setInterval(this.update.bind(this), 1000 / 30);
	
	this.draw();
}

Game.prototype.loadPage = function(page) {
	$("#pages").children().hide();
	$(page).fadeIn();
};

Game.prototype.resize = function() {
	this.canvas.attr("width", innerWidth + "px");		
	this.canvas.attr("height", innerHeight + "px");
};

Game.prototype.update = function() {
	this.board.update();
};

Game.prototype.draw = function() {
	var b_max = CAM_MAX_M + this.board.getRealSize(),
		zoomV = vec2(this.zoom, this.zoom);

	this.camPos.min(vec2(b_max, b_max))
		.max(vec2(-CAM_MAX_M, -CAM_MAX_M));

	this.ctx.clearRect(0,0, innerWidth, innerHeight);
	
	this.ctx.save();
	this.ctx.translate(innerWidth / 2, innerHeight / 2);	
	this.ctx.scale(this.zoom, this.zoom);
	this.ctx.translate(-this.camPos.x, -this.camPos.y);

	var vmin = this.getInTileSpace(vec2(0, 0), true),
		sadd = (Tile.SIZE + Tile.PADDING) * this.zoom,
		vmax = this.getInTileSpace(vec2(innerWidth + sadd, innerHeight + sadd), true);

	if(vmin == null) vmin = vec2(0, 0);
	if(vmax == null) vmax = vec2(this.board.size, this.board.size);
	
	this.board.draw(this.ctx, vmin.x, vmin.y, vmax.x, vmax.y, this.id);
	
	this.ctx.restore();
		
	this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
	this.ctx.fillRect(0, 15, 60, 60);

	this.ctx.beginPath();
	this.ctx.arc(30, 45, 20, 0, Math.PI * 2 * (new Date() - this.lastClick) / Constants.CLICK_DELAY);
	this.ctx.lineWidth = 5;
	this.ctx.strokeStyle = "white";
	this.ctx.stroke();

	requestAnimationFrame(this.draw.bind(this));
};


Game.prototype.onMessage = function(e) {
	var packet = protocol.Packet.decode(new Uint8Array(e.data));

	switch(packet.type) {
		case protocol.Packet.Type.LOGIN_COMPLETE:
			console.log("LOGIN_COMPLETE");

			var lcomp = protocol.LoginComplete.decode(packet.data);
		
			console.log(lcomp);
			
			this.id = lcomp.id;

			this.camPos.x = lcomp.tilePos.x * (Tile.SIZE + Tile.PADDING) + Tile.SIZE / 2; 
			this.camPos.y = lcomp.tilePos.y * (Tile.SIZE + Tile.PADDING) + Tile.SIZE / 2;
		
			this.loadPage("#gamePage");
			break;
		case protocol.Packet.Type.BOARD_DATA:
			var boardData = protocol.BoardData.decode(packet.data);
	
			boardData.tiles.forEach((function(t, i) {
				var x = Math.floor(i / this.board.size),
					y = Math.floor(i % this.board.size);

				if(t.id != 0) this.board.put(x, y, new Tile(t.id, t.status));
				else this.board.put(x, y, null);
			}).bind(this));
				
			this.board.expandingTiles = [];
			boardData.expTiles.forEach((function(expTile) {
				this.board.expandingTiles.push(new Tile.Expanding(
					expTile.from.x,
					expTile.from.y,
					expTile.to.x,
					expTile.to.y,
					expTile.id,
					expTile.life / Tile.EXP_LIFE)
				);					
			}).bind(this));

			
			$("#score_board .scoreBoardEntry").remove();
			var $score_board = $("#score_board");
				
			boardData.leaderBoard.forEach((function(le, i) {
				var li = $("<li>"),
					isMe = le.id == this.id;

				li.addClass("scoreBoardEntry");	
				li.css("color", "white");

				li.css("font-weight",isMe ? "bold" : "normal");
				li.css("font-size",(isMe ? 15 : 14) + "px");

				if(isMe) li.css("text-decoration", "underline");
				
				li.text((i + 1) + "." + le.username);
								
				$score_board.append(li);
			}).bind(this));

			break;
		case protocol.Packet.Type.BOARD_UPDATE:
			var boardUpdate = protocol.BoardUpdate.decode(packet.data);
			
			boardUpdate.clicks.forEach((function(pos) {
				console.log("Click " + JSON.stringify(pos));
				this.board.click(pos.x, pos.y);
			}).bind(this));		

			break;
		case protocol.Packet.Type.GAME_OVER:	
			this.loadPage("#loginPage");
			console.log("game over");
			break;
			
	}
};

Game.prototype.onClose = function() {
	this.loadPage("#connectionErrorPage");
};

Game.prototype.changeZoom = function(zoomD) {
	this.zoom = Math.max(0.2, Math.min(2, this.zoom + zoomD));
	
	console.log(this.zoom);	

	if(this.zoom <= 0.2) {
		Tile.GRAPHICS_LEVEL = 2;
	} else if(this.zoom >= 0.5) {
		Tile.GRAPHICS_LEVEL = 0;
	} else {
		Tile.GRAPHICS_LEVEL = 1;
	}
};

Game.prototype.getInTileSpace = function(pos, npadCheck) {
	var ts = Tile.PADDING + Tile.SIZE,
		bpos = pos.clone()
			.sub(vec2(innerWidth / 2, innerHeight / 2))
			.dev(vec2(this.zoom, this.zoom))
			.add(this.camPos);
			
	if(npadCheck || (bpos.x % ts <= Tile.SIZE && bpos.y % ts <= Tile.SIZE)) {		
		var tpos = bpos.clone().dev(vec2(ts, ts)).floor();

		if(tpos.x >= 0 && tpos.x < this.board.size &&
			tpos.y >= 0 && tpos.y < this.board.size) {
				return tpos;
		}
	}
	
	return null;
};

Game.prototype.onMouseDown = function(e) {
	this.mouseClicked = true;
	this.mouseLast = vec2(e.pageX, e.pageY);
};

Game.prototype.onMouseUp = function(e) {
	this.mouseClicked = false;
	if(this.mouseMoved) { this.mouseMoved = false; return; }
		
	var pos = this.getInTileSpace(vec2(e.pageX, e.pageY)),
		now = new Date();
	
	if(pos != null &&
		(now - this.lastClick) >= Constants.CLICK_DELAY &&
		this.board.check(pos.x, pos.y, this.id)) {
		
		this.lastClick = now;		
		this.ws.send(PacketUtils.makePacket(
			protocol.Packet.Type.GAME_MOVE, 
			protocol.TilePos.encode({x:pos.x, y:pos.y}).finish()
		));
	}

	console.log("up");
};


Game.prototype.onMouseMove = function(e) {
	if(!this.mouseClicked || !this.mouseLast) return;	

	var mnew = vec2(e.pageX, e.pageY),
	dst = this.mouseLast.clone().sub(mnew).dev(vec2(this.zoom, this.zoom));

	if(!this.mouseMoved && dst.length() < 10) {
		return; 
	}		
	
	this.camPos.add(dst);
	
	this.mouseMoved = true;		
	this.mouseLast = mnew;

	
	console.log("move");
};

Game.prototype.onMouseOut = function() {
	this.mouseClicked = this.mouseMoved = false;
};

Game.prototype.onWheel = function(e) {
	this.changeZoom((-e.originalEvent.deltaY / 500) * this.zoom);
};


function getTouchDistance(tl) {
	if(tl.length == 2) {
		var t1 = tl.item(0),
			t2 = tl.item(1);

		 return vec2(t1.pageX, t1.pageY).sub(vec2(t2.pageX, t2.pageY)).length();
	}

	return null;
}

Game.prototype.onTouchStart = function(e) {
	this.touchLastD = getTouchDistance(e.targetTouches);
	
	if(e.targetTouches.length == 1) {
		//HACK
		this.onMouseDown(e.targetTouches.item(0));
	}
};


Game.prototype.onTouchMove = function(e) {
	if(this.touchLastD) {
		var tdist = getTouchDistance(e.targetTouches);
		this.changeZoom(-(this.touchLastD - tdist) / 300);
		
		this.touchLastD = tdist;
	} else if(e.targetTouches.length == 1) {
		//HACK
		this.onMouseMove(e.targetTouches.item(0));
	}
};

Game.prototype.onTouchEnd = function() {
	this.touchLastD = this.mouseClicked = null;
	this.mouseClicked = false;
};


module.exports = Game;

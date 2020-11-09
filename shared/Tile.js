var TILE_SIZE = 47,
	TILE_PADDING = 5,
	DOT_RADIUS = 5,
	DOT_DIST = 20,
	EXP_TILE_LIFE = 5.6;

function toReal(v) { return v * (TILE_SIZE + TILE_PADDING); }

function getColor(id) {
	var color = [],
		brightness = 70;
		space = 4;
	
	for(var idc = id, i = 0; i < 3; i++) {
		color[i] = Math.floor(((idc - (idc = Math.floor(idc / space)) * space) / (space - 1))
			* (255 - brightness)) + brightness; 
	}
	return "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
}


function roundedRect(ctx, x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y,   x+w, y+h, r);
  ctx.arcTo(x+w, y+h, x,   y+h, r);
  ctx.arcTo(x,   y+h, x,   y,   r);
  ctx.arcTo(x,   y,   x+w, y,   r);
  ctx.closePath();
}


function drawDot(ctx, x, y, isMine) {
	if(module.exports.GRAPHICS_LEVEL > 1) return;

	if(module.exports.GRAPHICS_LEVEL > 0) {
		ctx.fillRect(x - DOT_RADIUS, y - DOT_RADIUS,  DOT_RADIUS * 2, DOT_RADIUS * 2);
	} else {
		ctx.beginPath();
		ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2); 	
		ctx.fill();
	}
		
}


function draw(ctx, x, y, status, color, isMine) {
	ctx.fillStyle = color;
	
	if(module.exports.GRAPHICS_LEVEL > 0) {
		ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE); 
	} else {	
		roundedRect(ctx, x, y, TILE_SIZE,  TILE_SIZE, 7);
		ctx.fill();
	}
	
	ctx.beginPath();

	ctx.fillStyle = isMine ? "white" : "black";
	
	switch(status + 1) {
	case 1:
		drawDot(ctx, x + TILE_SIZE / 2, y + TILE_SIZE / 2, DOT_RADIUS, 0, Math.PI * 2); 	
		break;
	case 2:
		drawDot(ctx, x + TILE_SIZE / 2 - DOT_DIST / 2, y + TILE_SIZE / 2);
		drawDot(ctx, x + TILE_SIZE / 2 + DOT_DIST / 2, y + TILE_SIZE / 2);
		break;
	case 3:
		drawDot(ctx, x + TILE_SIZE / 2 - DOT_DIST / 2, y + TILE_SIZE / 2 - DOT_DIST / 2);
		drawDot(ctx, x + TILE_SIZE / 2 + DOT_DIST / 2, y + TILE_SIZE / 2 - DOT_DIST / 2);
		drawDot(ctx, x + TILE_SIZE / 2, y + TILE_SIZE / 2 + DOT_DIST / 2);		
		break;
	case 4:
		drawDot(ctx, x + TILE_SIZE / 2 - DOT_DIST / 2, y + TILE_SIZE / 2 - DOT_DIST / 2);
		drawDot(ctx, x + TILE_SIZE / 2 + DOT_DIST / 2, y + TILE_SIZE / 2 - DOT_DIST / 2);
		drawDot(ctx, x + TILE_SIZE / 2 - DOT_DIST / 2, y + TILE_SIZE / 2 + DOT_DIST / 2);
		drawDot(ctx, x + TILE_SIZE / 2 + DOT_DIST / 2, y + TILE_SIZE / 2 + DOT_DIST / 2);
		break;
	}

	
}

function Tile(id, status) {
	this.status = status ? status : 0;
	this.id = id;
}

Tile.prototype.draw = function(ctx, x, y, isMine) {
	draw(ctx, toReal(x), toReal(y), this.status, getColor(this.id), isMine);	
};

function ExpandingTile(x, y, tX, tY, id, life) {
	this.x = toReal(this.fromX = x);
	this.y = toReal(this.fromY = y);
	
	this.toX = tX;
	this.toY = tY;

	this.fromRealX = toReal(x);
	this.fromRealY = toReal(y);

	this.toRealX = toReal(tX);
	this.toRealY = toReal(tY);

	this.id = id;
	this.life = life ? life : 0;
}

ExpandingTile.prototype.update = function() {		
	this.x = this.fromRealX + (this.toRealX - this.fromRealX) * this.life;		
	this.y = this.fromRealY + (this.toRealY - this.fromRealY) * this.life;	

	return (this.life += 1 / EXP_TILE_LIFE) >= 1;
};

ExpandingTile.prototype.draw = function(ctx, isMine) {	
	draw(ctx, this.x, this.y, 0, getColor(this.id), isMine);
}



Tile.toReal = toReal;
Tile.Expanding = ExpandingTile;
Tile.SIZE = TILE_SIZE;
Tile.PADDING = TILE_PADDING;
Tile.getColor = getColor;
Tile.draw = draw;
Tile.GRAPHICS_LEVEL = 0;
Tile.EXP_LIFE = EXP_TILE_LIFE;
module.exports = Tile;



var Tile = require("./Tile.js"),
	Constants = require("./Constants.js");


// @onScoreChange: callback (id, changeAmount, x, y)
// @onExpTileCountChange: callback (id, changeAmount)
function Board(size) {
	this.size = size ? size : Constants.BOARD_SIZE;
	
	this.expandingTiles = [];

	this.onScoreChange = null;
	this.onExpTileCountChange = null;

	this.tiles = new Array(this.size);

	for(var x = 0; x < this.size; x++) {
		this.tiles[x] = new Array(this.size);
	}

}


Board.prototype.get = function(x, y) {
	return this.tiles[x][y];
};

Board.prototype.put = function(x, y, tile) {
	if(tile && !(tile instanceof Tile)) tile = new Tile(tile);
	//Üstüne yazdığımız tile
	var current = this.get(x, y);
	if(this.onScoreChange) {
		if(current && (tile == null || current.id != tile.id)) this.onScoreChange(current.id,-1, x, y);
		if(tile && (current == null || current.id != tile.id)) this.onScoreChange(tile.id, 1, x, y);
 	}
	this.tiles[x][y] = tile;
};

Board.prototype.check = function(x, y, id) {
	var t = this.get(x, y);
	return t && t.id == id;
};

Board.prototype.expandTo = function(x, y, dx, dy, id) {
	var xx = x + dx,
	yy = y + dy;

	if(xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) {
		
		//Exp Tile count değişikliği
		if(this.onExpTileCountChange) this.onExpTileCountChange(id, 1);

		this.expandingTiles.push(new Tile.Expanding(x, y, xx, yy, id));
	}
};

Board.prototype.click = function(x, y, id) {
	var tile = this.get(x, y);
		
	if(tile) {
		if(++tile.status >= 3) {
			this.expandTo(x, y, 1, 0, tile.id);		
			this.expandTo(x, y,-1, 0, tile.id);		
		
			this.expandTo(x, y, 0, 1, tile.id);		
			this.expandTo(x, y, 0,-1, tile.id);

			this.put(x, y, null);				
		}
		
		return true;
	}
	
	return false;
};
	
Board.prototype.update = function() {
	for(var i = this.expandingTiles.length - 1; i >= 0; i--) {
		var expTile = this.expandingTiles[i];

		if(expTile.update()) {
			//Exp Tile count değişikliği
			if(this.onExpTileCountChange) this.onExpTileCountChange(expTile.id, -1);

			var currentTile = this.get(expTile.toX, expTile.toY);
			if(currentTile) {
				//Skor değişikliği
				if(this.onScoreChange && currentTile.id != expTile.id ) {
					this.onScoreChange(currentTile.id, -1, expTile.toX, expTile.toY);
					this.onScoreChange(expTile.id, 1, expTile.toX, expTile.toY);
				}

				currentTile.id = expTile.id;
				this.click(expTile.toX, expTile.toY);
			} else {
				this.put(expTile.toX, expTile.toY, new Tile(expTile.id));
			}
				
			this.expandingTiles.splice(i, 1);
		}
	}
};
	
Board.prototype.draw = function(ctx, bx, by, lx, ly, mId) {				
	if(!bx) bx = 0;		
	if(!by) by = 0;
	if(!lx) lx = this.size;
	if(!ly) ly = this.size;

	for(var x = bx; x < lx; x++) {
		for(var y = by, tile; y < ly; y++) {
			if((tile = this.get(x, y))) {
				tile.draw(ctx, x, y, tile.id == mId);
			} else {
				Tile.draw(ctx, Tile.toReal(x), Tile.toReal(y), -1,  "#afafaf");
			}
		}
	}
	
	var m = (Tile.SIZE + Tile.PADDING),
		expMinX = (bx - 1) * m,
		expMinY = (by - 1) * m,
		expMaxX = (lx + 1) * m,
		expMaxY = (ly + 1) * m;

	this.expandingTiles.forEach(function(t) {
		if(t.x + Tile.SIZE > expMinX && t.x < expMaxX &&
			t.y + Tile.SIZE > expMinY && t.y <expMaxY) {
			t.draw(ctx, t.id == mId);		
		}
	});
};

Board.prototype.getRealSize = function() {
	return Tile.SIZE * this.size + Tile.PADDING * (this.size - 1);
};


module.exports = Board;

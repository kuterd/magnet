function vec2(x, y) {
	if(!(this instanceof vec2))
		return new vec2(x, y);
	
	if(x instanceof vec2) {
		this.x = x.x;
		this.y = x.y;
	} else {
		this.x = x;
		this.y = y;
	}
}

vec2.prototype = {
	add: function(vec) {
		this.x += vec.x;
		this.y += vec.y;

		return this;
	},

	sub: function(vec) {
		this.x -= vec.x;
		this.y -= vec.y;

		return this;
	},

	mul: function(vec) {
		this.x *= vec.x;
		this.y *= vec.y;

		return this;
	},

	dev: function(vec) {
		this.x /= vec.x;
		this.y /= vec.y;

		return this;
	},
	
	zNaN: function() {
		if(isNaN(this.x)) this.x = 0;
		if(isNaN(this.y)) this.y = 0;
		
		return this;
	},

	lengthSq: function() {
		return this.x * this.x + this.y * this.y;
	},


	length: function() {
		return Math.sqrt(this.lengthSq());
	},

	normalize: function() {
		var l = this.length();
		
		this.x /= l;
		this.y /= l;
		
		return this;
	},

	setLength: function(l) {
		this.normalize();

		this.x *= l;
		this.y *= l;

		return this;
	},
	
	clone: function() {
		return vec2(this.x, this.y);
	},

	floor: function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);

		return this;
	},

	max: function(vec) {
		this.x = Math.max(this.x, vec.x);
		this.y = Math.max(this.y, vec.y);
	
		return this;
	},

	min: function(vec) {
		this.x = Math.min(this.x, vec.x);
		this.y = Math.min(this.y, vec.y);
		
		return this;
	}
};

module.exports = vec2;

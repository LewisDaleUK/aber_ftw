function blockHolder() {
	this.x;
	this.block;
	this.y;
	
	this.getBlock = function() {
		return this.block;
	}
	
	this.getX = function() {
		return this.x;
	}
	
	this.getY = function() {
		return this.y;
	}
	
	this.setX = function(x) {
		this.x = x;
	}
	
	this.setBlock = function(block) {
		this.block = block;
	}
	
	this.setY = function(y) {
		this.y = y;
	}

}
//Game class

function Game() {
	this.score = 0;
	this.bg_height = 1;
	
	this.getHeight = function() {
		return this.bg_height;
	};
	
	this.getScore = function() {
		return this.score;
	};
}
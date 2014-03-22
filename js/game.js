function Game(canvasID){
	this.canvas = document.getElementById(canvasID);
	this.ctx = this.canvas.getContext('2d');

	// TODO: move to world render
	this.ctx.fillStyle = '#0021A5';
	this.ctx.fillRect(0, 0, 500, 500);

	this.world = new World();
	this.world.game = this;

	this.lastTime = 0;
	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});
}

Game.prototype.frame = function(time){
	var delta = time - this.lastTime;
	this.lastTime = time;
	
	this.world.update(delta);
	//this.world.render(this.ctx);

	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});
}

var game = new Game('snakeCanvas');

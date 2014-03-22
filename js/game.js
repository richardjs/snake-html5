function Game(canvasID){
	this.canvas = document.getElementById(canvasID);
	this.ctx = this.canvas.getContext('2d');

	this.world = new World(this);
	this.world.addEntity(
		new Player(
			this.world,
			this.world.width/2 - 1,
			this.world.height/2 - 1,
			'left'
		)
	);

	this.lastTime = 0;
	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});
}

Game.prototype.frame = function(time){
	var delta = time - this.lastTime;
	this.lastTime = time;
	
	var doRender = this.world.update(delta);
	if(doRender){
		this.world.render(this.ctx);
	}

	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});
}

var game = new Game('snakeCanvas');

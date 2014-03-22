function Player(world, x, y){
	this.world = world;
	this.x = x;
	this.y = y;
}

Player.prototype.update = function(delta){
}

Player.prototype.render = function(ctx){
	var pixelLeft = this.x * this.world.unitWidth;
	var pixelTop = this.y * this.world.unitHeight;

	ctx.fillStyle = '#ff4a00';
	ctx.fillRect(
		this.x * this.world.unitWidth,
		this.y * this.world.unitHeight,
		this.world.unitWidth,
		this.world.unitHeight
	);
}

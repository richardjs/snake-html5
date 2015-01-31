'use strict';
function Food(world, x, y){
	this.world = world;
	this.x = x;
	this.y = y;

	this.blinkState = false;
}

Food.prototype.render = function(ctx){
	var pixelLeft = this.x * this.world.unitWidth;
	var pixelTop = this.y * this.world.unitHeight;

	if(this.blinkState){
		ctx.fillStyle = '#239741';
	}else{
		ctx.fillStyle = '#43b761';
	}
	ctx.fillRect(
		this.x * this.world.unitWidth,
		this.y * this.world.unitHeight,
		this.world.unitWidth,
		this.world.unitHeight
	);
}

Food.prototype.update = function(delta){
	this.blinkState = !this.blinkState;
};

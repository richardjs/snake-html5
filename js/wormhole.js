'use strict';
function Wormhole(world){
	this.world = world;

	do{
		this.x1 = Math.floor(Math.random() * world.width);
		this.y1 = Math.floor(Math.random() * world.height);
		this.x2 = Math.floor(Math.random() * world.width);
		this.y2 = Math.floor(Math.random() * world.height);
		while(this.x1 == this.x2 && this.y1 == this.y2){
			this.x2 = Math.floor(Math.random() * world.width);
			this.y2 = Math.floor(Math.random() * world.height);
		}
	}while(world.player.contains(this.x1, this.y1) && world.player.contains(this.x2 && this.y2));
	
	this.color = randomColor();
}

Wormhole.prototype.render = function(ctx){
	var pixelLeft = this.x * this.world.unitWidth;
	var pixelTop = this.y * this.world.unitHeight;

	ctx.fillStyle = this.color;
	ctx.fillRect(
		this.x1 * this.world.unitWidth,
		this.y1 * this.world.unitHeight,
		this.world.unitWidth,
		this.world.unitHeight
	);
	ctx.fillRect(
		this.x2 * this.world.unitWidth,
		this.y2 * this.world.unitHeight,
		this.world.unitWidth,
		this.world.unitHeight
	);
}

Wormhole.prototype.update = function(){};

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return 'rgb('+red+','+green+','+blue+')';
}

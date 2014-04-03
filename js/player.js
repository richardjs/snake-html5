'use strict';
function Segment(world, x, y){
	this.world = world;
	this.x = x;
	this.y = y;
}

Segment.prototype.render = function(ctx){
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

function Player(world, x, y, direction){
	this.world = world;
	this.direction = direction;
	this.lastDirection = null;
	this.segments = [
		new Segment(world, x, y),
		new Segment(world, x-1, y),
		new Segment(world, x-2, y)
	];

	var player = this;
	document.addEventListener('keydown', function(event){
		switch(event.keyCode){
			case 39:
			case 68:
				if(player.lastDirection != 'left'){
					player.direction = 'right';
				}
				break;
			case 37:
			case 65:
				if(player.lastDirection != 'right'){
					player.direction = 'left';
				}
				break;
			case 40:
			case 83:
				if(player.lastDirection != 'up'){
					player.direction = 'down';
				}
				break;
			case 38:
			case 87:
				if(player.lastDirection != 'down'){
					player.direction = 'up';
				}
				break;
		}
	});
}

Player.prototype.update = function(delta){
	var x = this.segments[0].x;
	var y = this.segments[0].y;
	var nx, ny;
	switch(this.direction){
		case 'right':
			nx = x + 1;
			if(nx === this.world.width){
				nx = 0;
			}
			ny = y;
			break;
		case 'left':
			nx = x - 1;
			if(nx === -1){
				nx = this.world.width - 1;
			}
			ny = y;
			break;
		case 'down':
			nx = x;
			ny = y + 1;
			if(ny === this.world.width){
				ny = 0;
			}
			break;
		case 'up':
			nx = x;
			ny = y - 1;
			if(ny === -1){
				ny = this.world.height - 1;
			}
			break;
	}
	this.lastDirection = this.direction;
	this.segments.pop();
	this.segments.unshift(
		new Segment(this.world, nx, ny)
	);
}

Player.prototype.render = function(ctx){
	for(var i = 0; i < this.segments.length; i++){
		this.segments[i].render(ctx);
	}
}

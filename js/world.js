'use strict';
function World(game){
	this.game = game;

	this.entityGroups = {};

	this.tickLength = 100;
	this.tickTimer = this.tickLength;	

	this.width = 50;
	this.height = 50;
	this.pixelWidth = game.canvas.width;
	this.pixelHeight = game.canvas.height;
	this.unitWidth = this.pixelWidth / this.width;
	this.unitHeight = this.pixelHeight / this.height;

	this.player = new Player(
		this,
		this.width/2 - 1,
		this.height/2 - 1,
		'right'
	);
	this.addEntity(this.player);

	this.dropFood();
}

World.prototype.addEntity = function(entity, group){
	if(!(group in this.entityGroups)){
		this.entityGroups[group] = [];
	}
	this.entityGroups[group].push(entity);
}

World.prototype.dropFood = function(){
	var x;
	var y;
	do{
		x = Math.floor(Math.random() * this.width);
		y = Math.floor(Math.random() * this.height);
	}while(this.player.contains(x, y));
	this.addEntity(new Food(this, x, y), 'food');
}

World.prototype.update = function(delta){
	this.tickTimer += delta;
	var ticked = false;
	while(this.tickTimer >= this.tickLength){
		this.tickTimer -= this.tickLength;
		for(var group in this.entityGroups){
			var entities = this.entityGroups[group];
			for(var i = 0; i < entities.length; i++){
				var entity = entities[i];
				entity.update(delta);
			}
		}
		ticked = true;
	}
	return ticked;
}

World.prototype.render = function(ctx){
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, 500, 500);

	for(var group in this.entityGroups){
		var entities = this.entityGroups[group];
		for(var i = 0; i < entities.length; i++){
			var entity = entities[i];
			entity.render(ctx);
		}
	}
}

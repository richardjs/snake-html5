function World(){
	this.entityGroups = {};

	this.tickLength = 1000
	this.tickTimer = 1000	
}

World.prototype.addEntity = function(entity, group){
	entity.world = this;
	if(!(group in this.entityGroups)){
		this.entityGroups[group] = [];
	}
	this.entityGroups[group].push(entity);
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
	ctx.fillStyle = '#0021A5';
	ctx.fillRect(0, 0, 500, 500);

	for(var group in this.entityGroups){
		var entities = this.entityGroups[group];
		for(var i = 0; i < entities.length; i++){
			var entity = entities[i];
			entity.render(ctx);
		}
	}
}

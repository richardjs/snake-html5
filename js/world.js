function World(){
	this.entityGroups = {};
}

World.prototype.addEntity = function(entity, group){
	entity.world = this;
	if(!(group in this.entityGroups)){
		this.entityGroups[group] = [];
	}
	this.entityGroups[group].push(entity);
}

World.prototype.update = function(delta){
	for(var group in this.entityGroups){
		var entities = this.entityGroups[group];
		for(var i = 0; i < entities.length; i++){
			var entity = entities[i];
			entity.update(delta);
		}
	}
}

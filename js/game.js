'use strict';
function Game(canvasID){
	this.canvas = document.getElementById(canvasID);
	this.ctx = this.canvas.getContext('2d');

	this.world = new World(this);

	this.lastTime = 0;
	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});

	this.score = 0;
	this.scoreDiv = document.getElementById('score');
}

Game.prototype.frame = function(time){
	var delta = time - this.lastTime;
	this.lastTime = time;
	
	var doRender = this.world.update(delta);
	if(doRender){
		this.world.render(this.ctx);
	}

	this.scoreDiv.innerHTML = 'Score: ' + this.score;

	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});
}

var game = new Game('snakeCanvas');

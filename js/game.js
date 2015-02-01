'use strict';
function Game(canvasID){
	this.canvas = document.getElementById(canvasID);
	this.ctx = this.canvas.getContext('2d');

	this.lastTime = 0;
	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});

	this.bestScore = 0;
	this.scoreDiv = document.getElementById('score');
	this.bestScoreDiv = document.getElementById('bestScore');

	this.newGame();
}

Game.prototype.newGame = function(){
	this.world = new World(this);
	this.score = 0;
}

Game.prototype.frame = function(time){
	var delta = time - this.lastTime;
	this.lastTime = time;
	
	var doRender = this.world.update(delta);
	if(doRender){
		this.world.render(this.ctx);
	}

	if(this.score > this.bestScore){
		this.bestScore = this.score;
	}
	this.scoreDiv.innerHTML = 'Score: ' + this.score;
	this.bestScoreDiv.innerHTML = 'Best score: ' + this.bestScore;

	var game = this;
	window.requestAnimationFrame(function(time){
		game.frame(time);
	});
}

var game = new Game('snakeCanvas');

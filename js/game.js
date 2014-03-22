function Game(){
	this.canvas = document.getElementById('snakeCanvas')
	this.ctx = this.canvas.getContext('2d')

	this.ctx.fillStyle = '#fff';
	this.ctx.fillRect(0, 0, 500, 500);

	this.world = new World();
}

var game = new Game();

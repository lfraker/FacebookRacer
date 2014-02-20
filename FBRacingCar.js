// Class for any game;
Game = {};

Game.prototype.init = function() {



Game.prototype.run = function() {

	this.update();
	requestAnimationFrame(render);
	renderer.render(this.scene, this.camera);
	

};
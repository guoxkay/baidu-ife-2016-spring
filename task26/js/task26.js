var Craft = function(plante,orbit){
	//定义飞船燃料,飞船速度,围绕行星位置,飞船轨道,飞船位置
	this.fuel = 100;
	this.speed = 1;
	this.plante = plante;
	this.orbit = orbit.no;
	this.orbitRadius = orbit.radius; 
	this.pos.x = this.plante.x;
	this.pos.y = this.plante.y - this.orbitRadius;
}
Craft.prototype = {
	constructor : Craft,
	//定义飞船运动函数
	fly : function(){
		
	}
}
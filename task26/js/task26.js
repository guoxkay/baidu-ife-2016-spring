var Craft = function(num,plante,orbit){
	//定义飞船编号,飞船燃料,飞船速度,围绕行星位置,飞船轨道,飞船位置
	this.num = num;
	this.fuel = 100;
	this.speed = 1;
	this.angle = Math.PI * 3/2;
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
		var angelSpeed = (Math.PI/180)/orbit * speed;
		angle = (angel + angelSpeed) - (angel - (angel % (Math.PI * 2)));
		pos.y = -(Math.sin(angle) * orbitRadius);
		pos.x = Math.cos(angle) * orbitRadius;
	},
	//定义飞船自爆程序
	
}
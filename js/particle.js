// requestAnim shim layer by Paul Irish
var max=40;
var size=3;
var opacity=.05;
var life=2;
var count=400;
var speed=1;
	// var box_limit_x_min;
	// var box_limit_x_max;
	// var box_limit_y_min;
	// var box_limit_y_max;
var center;
window.onload=function(){
	var canvas=$("#area");
	var ctx=canvas[0].getContext('2d');
	canvas[0].width = window.innerWidth/3;
	canvas[0].height = window.innerHeight/2;
	center=new Vector(window.innerWidth/2,window.innerHeight/2);
	console.log(center);
	box_limit_x_min=0;
	box_limit_x_max=box_limit_x_min+canvas.width();
	box_limit_y_min=0;
	box_limit_y_max=box_limit_y_min+canvas.height();
	$(window).resize(function(){
		canvas[0].width = window.innerWidth/3;
		canvas[0].height = window.innerHeight/2;
		center=new Vector(window.innerWidth/2,window.innerHeight/2);
	})
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

	var Particle=function(position,velocity,acceleration,mass){
		this.position=position;
		this.velocity=velocity;
		this.acceleration=acceleration;
		this.mass=mass;
		this.life=life;
	}
	Particle.prototype.speed_limit=speed;
	Particle.prototype.update=function(){
		this.velocity.add(global_acceleration.clone().divide_scalar(this.mass));
		if(this.velocity.magnitude()>this.speed_limit){
			this.velocity.normalize().multiply_scalar(this.speed_limit);
		}
		this.position.add(this.velocity);
		if(this.position.x>box_limit_x_max)
			this.position.x=box_limit_x_min;
		if(this.position.x<box_limit_x_min)
			this.position.x=box_limit_x_max;
		if(this.position.y>box_limit_y_max)
			this.position.y=box_limit_y_min;
		if(this.position.y<box_limit_y_min)
			this.position.y=box_limit_y_max;
	}

	Particle.prototype.draw=function(){
		ctx.globalCompositeOperation="lighter";
		ctx.fillStyle = "rgba("+(260-(this.life*2))+","+((this.life*2)+50)+","+(this.life*2)+","+(((max-this.life)/max)*0.4)+")";
        
        ctx.beginPath();
        //Draw the particle as a circle, which gets slightly smaller the longer its been alive for
        ctx.arc(this.position.x,this.position.y,(max-this.life)/max*(size/2)+(size/2),0,2*Math.PI);
        ctx.fill();
	}
	particles=[];
	particles.update=function(){
		for(i=particles.length-1;i>=0;i--){
			particles[i].update();
		}
	}
	particles.draw=function(){
		for(i=particles.length-1;i>=0;i--){
			particles[i].draw();
		}
	}
	var clear=function(){
		ctx.globalCompositeOperation="darker";
		ctx.globalAlpha = 0.2;
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect (box_limit_x_min,box_limit_y_min,box_limit_x_max,box_limit_y_max);
		ctx.globalAlpha=1;
	}
	var global_acceleration;
	var counter=0;
	var update=function(){
		// if(counter=300){
		// 	global_acceleration=new Vector(Math.random()*10-2,-Math.random()*100-2)
		// 	counter=0;
		// }
		update_global_acceleration();
		particles.update();
		counter++;
	}
	var draw=function(){
		particles.draw();
	}
	var loop=function(){
		clear();
		update();
		draw();
		requestAnimationFrame(loop);
	}
	var init=function(){
		for(i=0;i<count;i++){
			var position_x=box_limit_x_min+Math.random()*(box_limit_x_max-box_limit_x_min);
			var position_y=box_limit_y_min+Math.random()*(box_limit_y_max-box_limit_y_min);
			var c=Math.random()*10>>0;
			var k=Math.random()-.5;
			var v=Math.random()-.5;
			var mass=Math.random()*100+1;
			particles.push(new Particle(new Vector(position_x,position_y),new Vector(0,0),new Vector(0,0),mass));
		}
	}
	// audio.start();
	mouse_point=new Vector(0,0);
	$(document).mousemove(function(e){
		mouse_point=new Vector(e.clientX,e.clientY);
	})
	var update_global_acceleration=function(){
		global_acceleration=mouse_point.clone().sub(center).normalize().multiply_scalar(20);
		//console.log(mouse_point.clone().sub(center));
	}
	global_acceleration=new Vector(1,1)
	init();
	requestAnimationFrame(loop);
}
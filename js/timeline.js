var $timeline_container=$('#timeline_container');
var line_width=4;
var timeline_speed=300;
var drawline=function(start,type,length,time,div_to_show,callback_data){
  	var id ='c_'+new Date().getTime()
  	var line = "<div id='"+id+"'class='line'>&nbsp;</div>";
  	console.log(length);
 	$timeline_container.append(line);
 	if(type==='horizontal'){
		$('#'+id).css({
		left: start.x+"px",
		top: start.y+"px",
		width: 0+"px",
		height:line_width+"px",
		//position:'absolute',
		backgroundColor: "red"
		});
		var left=length<0?(start.x+length):start.x;
		if(callback_data){
			$('#'+id).animate({left:left+"px",width:Math.abs(length)+"px"},time*1000,"linear",function(){drawline({x:start.x+length,y:start.y},callback_data.type,callback_data.line_length,callback_data.time,callback_data.div,callback_data.callback_data)});
		}
		else{
			$('#'+id).animate({width:length+"px"},time*1000,"linear");
		}
		show_timeline_div(div_to_show,start.x+length,start.y);
  	}
  	if(type==='vertical'){
		$('#'+id).css({
		left: start.x+"px",
		top: start.y+"px",
		height: 0+"px",
		width:line_width+"px",
		//position:'absolute',
		backgroundColor: "red"
		});
		var top=length<0?(start.y+length):start.y;
		if(callback_data){
			$('#'+id).animate({top:top+"px",height:Math.abs(length)+"px"},time*1000,"linear",function(){drawline({x:start.x,y:start.y+length},callback_data.type,callback_data.line_length,callback_data.time,callback_data.div,callback_data.callback_data)});
		}
		else{
			$('#'+id).animate({height:length+"px"},time*1000,"linear");
		}
		show_timeline_div(div_to_show,start.x,start.y+length);
  	}
}
var timeline_container_width=$timeline_container.width();
var timeline_container_height=$timeline_container.height();

var data={
	start:{x:50,y:70},
	details:[{
		type:'horizontal',
		line_length:30,
		time:.5
	},
	{
		type:'vertical',
		line_length:40,
		time:.5
	},
	{
		type:'horizontal',
		line_length:-30,
		time:.5
	},
	{
		type:'vertical',
		line_length:40,
		time:.5
	},
	{
		type:'horizontal',
		line_length:35,
		time:.5
	},
	{
		type:'horizontal',
		line_length:35,
		time:.5
	}],
	divs:$(".timeline_divs"),
}
var show_timeline_div=function(div_to_show,start_x,start_y){
	var div_width=div_to_show.width();
	var div_height=div_to_show.height();
	div_to_show.css({display:"block",left:start_x-div_width/2,top:start_y-div_height/2});
	div_to_show.addClass("animated bounceIn");
}
var draw_animated_lines=function(data){
	var details=data.details;
	var build=details[0];
	for(i=0;i<details.length;i++){
		details[i].line_length=details[i].type=='horizontal'?timeline_container_width*(details[i].line_length/100):timeline_container_height*(details[i].line_length/100);
		if(1||typeof details[i].time==='undefined'){
			details[i].time=Math.abs(details[i].line_length)/timeline_speed;
		}
		details[i].div=data.divs.eq(i+1);
	}
	for(i=1;i<details.length;i++){
		details[i-1].callback_data=details[i];
	}
	show_timeline_div(data.divs.eq(0),data.start.x,data.start.y);
	drawline(data.start,details[0].type,details[0].line_length,details[0].time,details[0].div,details[0].callback_data);
}
var w=$(document).width();
var h=$(document).height();
$(window).resize(function(){
	$("#timeline_container").css({"transform":"scale("+$(document).width()/w+","+$(document).height()/h+")"})
})

var $timeline_container=$('#timeline_container');
var line_width=2;
var timeline_speed=80;
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
		backgroundColor: "#20c068"
		});
		var left=length<0?(start.x+length):start.x;
		if(callback_data){
			$('#'+id).animate({left:left+"px",width:Math.abs(length)+"px"},time*1000,"linear",function(){if(!clicked){next_detail();} drawline({x:start.x+length,y:start.y},callback_data.type,callback_data.line_length,callback_data.time,callback_data.div,callback_data.callback_data)});
		}
		else{
			$('#'+id).animate({width:length+"px"},time*1000,"linear",function(){if(!clicked){next_detail();handler=detail_changer();}});
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
		backgroundColor: "#20c068"
		});
		var top=length<0?(start.y+length):start.y;
		if(callback_data){
			$('#'+id).animate({top:top+"px",height:Math.abs(length)+"px"},time*1000,"linear",function(){if(!clicked){next_detail()};drawline({x:start.x,y:start.y+length},callback_data.type,callback_data.line_length,callback_data.time,callback_data.div,callback_data.callback_data)});
		}
		else{
			$('#'+id).animate({height:length+"px"},time*1000,"linear",function(){if(!clicked){next_detail();handler=detail_changer();}});
		}
		show_timeline_div(div_to_show,start.x,start.y+length);
  	}
}
var timeline_container_width=$timeline_container.width();
var timeline_container_height=$timeline_container.height();

var data={
	start:{x:6,y:75},
	details:[{
		type:'horizontal',
		line_length:15,
		time:.5
	},
	{
		type:'horizontal',
		line_length:15,
		time:.5
	},
	{
		type:'horizontal',
		line_length:15,
		time:.5
	},
	{
		type:'horizontal',
		line_length:15,
		time:.5
	},
	{
		type:'horizontal',
		line_length:15,
		time:.5
	},
	{
		type:'horizontal',
		line_length:15,
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
	make_active(1);
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
	data.start.x*=(timeline_container_width/100);
	data.start.y*=(timeline_container_height/100);
	show_timeline_div(data.divs.eq(0),data.start.x,data.start.y);
	drawline(data.start,details[0].type,details[0].line_length,details[0].time,details[0].div,details[0].callback_data);
}
var w=$(document).width();
var h=$(document).height();
// $(window).resize(function(){
// 	$("#timeline_container").css({"transform":"scale("+$(document).width()/w+","+$(document).height()/h+")"})
// })
var current_active_timeline=1;
var total_timeline=$(".timeline_detail_container").length;
var make_active=function(num){
	$(".timeline_detail_container").fadeOut();
	$("#timeline_detail"+num).fadeIn();
}
var clicked=false;
$(".timeline_detail_container").fadeOut();
$(".timeline_divs").click(function(){
	clicked=true;
	clearTimeout(handler);
	current_active_timeline=$(this).data("details-div");
	make_active(current_active_timeline);
	//handler=detail_changer();
});
var handler;
var next_detail=function(){
	current_active_timeline=current_active_timeline+1;
	if(current_active_timeline>total_timeline)
		current_active_timeline=1;
	make_active(current_active_timeline);
}
var detail_changer=function(){
	var timeout_handler=setInterval(next_detail,2500);
	return timeout_handler;
}

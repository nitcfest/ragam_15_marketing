var top_array=[];
	var elems=$(".panel").length;
	var $html_body=$("html, body");
	current_focus=0;
	var animation_state=false;
	var timeline_first_time=true;
	var move_to_slide=function(slide){
		$html_body.stop();
		animation_state=true;
		current_focus=slide;
		$html_body.animate({scrollTop: top_array[current_focus]},function(){animation_state=false;});
		var animated_divs=$('.panel').eq(current_focus).find('.animated');
		animated_divs.addClass(function(index){return animated_divs.eq(index).data('anim')||'zoomIn'});
		if(timeline_first_time&&slide==1){
			timeline_first_time=false;
			draw_animated_lines(data);
		}
	}
	var temp=0;
	$(window).resize(function(){
		calculate_top_array();
		move_to_slide(current_focus);
	});
	var calculate_top_array=function(){
		temp=0;
		top_array=[];
		$(".panel").each(function(){
			top_array.push(temp);
			temp+=$(this).height();
		})
	}
	$(document).bind('mousewheel DOMMouseScroll keydown',function(event){
		//event.preventDefault();
		//event.stopPropagation();
		if(animation_state==true)
			return;
	 	if (event.originalEvent.wheelDelta < 0||event.which==34||event.which==39||event.which==40) {
			move_to_slide((current_focus+1)%elems);
			return false;
		}
		else if (event.originalEvent.wheelDelta >= 0||event.which==33||event.which==37||event.which==38){
			move_to_slide(((current_focus-1)+elems)%elems);
			return false;
		}
		else if(event.which==36){
			move_to_slide(0);
			return false;
		}
		else if(event.which==35){
			move_to_slide(elems-1);
			return false;
		}
	})
	calculate_top_array();
	move_to_slide(0);

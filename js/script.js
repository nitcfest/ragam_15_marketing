window.mobilecheck = function() {
	var check = false;
	(function(a,b){if(/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	if (typeof window.orientation !== 'undefined') check = true;
	if (window.innerWidth <= 800 && window.innerHeight <= 600) check = true;
	return check;
}

var top_array=[];
	var elems=$(".panel").length;
	var $html_body=$("html, body");
	var default_pic_url="url(images/bg/default.jpg)";
	current_focus=0;
	var music1; 
	var music2;
	var animation_state=false;
	var timeline_first_time=true;
	$links=$(".inside_link");
	$background_panel3=$("#background_panel3");
	$background_panel4=$("#background_panel4");
	var move_to_slide=function(slide){
		$links.css({"color":"#20c068"});
		//special case for ragam14 link with 2 slides
		if(slide==3){
			$(".inside-link[data-slide-num='"+2+"']").css({"color":"white"});
		}
		if(slide==2||slide==3){
			$background_panel3.css({"background-image":default_pic_url});
			$background_panel4.css({"background-image":default_pic_url});
		}
		$(".inside-link[data-slide-num='"+slide+"']").css({"color":"white"});
		$html_body.stop();
		animation_state=true;
		current_focus=slide;
		$html_body.animate({scrollTop: top_array[current_focus]},function(){animation_state=false;});
		var animated_divs=$('.panel').eq(current_focus).find('.animated');
		animated_divs.addClass(function(index){var animation=animated_divs.eq(index).data('anim');if (animation) return animation; else return 'zoomIn';});
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
	var music1_playing=false;
	var music2_playing=false;
	$(document).bind('mousewheel DOMMouseScroll keydown',function(event){
		//event.preventDefault();
		//event.stopPropagation();
		if(animation_state==true)
			return false;
	 	if (event.originalEvent.wheelDelta < 0|| event.originalEvent.detail > 0||event.which==34||event.which==39||event.which==40) {
	 		if(current_focus!=elems-1)
				move_to_slide((current_focus+1)%elems);
			return false;
		}
		else if (event.originalEvent.wheelDelta >= 0||event.originalEvent.detail < 0||event.which==33||event.which==37||event.which==38){
			if(current_focus!=0)
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
		else if(event.which==83){
			if(!music1||!music2)
				return false;
			if(music1_playing==false){
				music1.play();
				music1_playing=true;
				music2.pause();
				music2_playing=false;
			}
			else{
				music1.pause();
				music1_playing=false;
			}

		}
		else if(event.which==66){
			if(!music1||!music2)
				return false;
			if(music2_playing==false){
				music2.play();
				music2_playing=true;
				music1.pause();
				music1_playing=false;
			}
			else{
				music2.pause();
				music2_playing=false;
			}

		}
	})
	$(document).bind("swipeup",function(){
		if(animation_state==true)
			return false;
		if(current_focus!=elems-1){
			move_to_slide((current_focus+1)%elems);
			return false;
		}
	})
	$(document).bind("swipedown",function(){
		if(animation_state==true)
			return false;
		if(current_focus!=0){
			move_to_slide(((current_focus-1)+elems)%elems);
			return false;
		}
	})
	$(".arrow-indicator,.arrow-indicator-text").click(function(){move_to_slide(1);})
	calculate_top_array();
	$(".chart_container").hide();
	$(".chart_link").click(function(){
		$(".chart_link").removeClass("selected");
		$(this).addClass("selected");
		$(".chart_container").fadeOut();
		$("#"+$(this).data("chart-target")).slideDown();
	});
	$(".chart_link").eq(0).trigger('click');
	var preloader_text="Loading";
	var preloader_limit=4;
	var preloader_i=0;
	var preloader_handler=setInterval(function(){
		preloader_i++;
		$("#preloader>#preloader_text").html(preloader_text);
		if(preloader_i==preloader_limit){
			preloader_text="Loading";
			preloader_i=0;
		} else preloader_text=preloader_text+".";
	},500);
	window.onload=function(){
		$("#preloader").fadeOut();
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-58561642-1', 'auto');
		ga('send', 'pageview');
		$('.hastip1').tooltipsy({offset: [5, 10]});
		$('.hastip2').tooltipsy({offset: [-10, 10]});
		$('.hastipnew').tooltipsy({offset: [0, 10]});

		if (!window.mobilecheck()) {
			music1 = new Audio('music/music1.mp3');
			music2 = new Audio('music/music2.mp3');		
		}
		clearInterval(preloader_handler);
		move_to_slide(0);
	}
	$bgtexture=$("#bgtexture")
	$(document).mousemove(function(event){
		$bgtexture.css({"background-position": -event.pageX/80+"px "+ -event.pageY/80+"px"});
	});
	$("#panel3 .gal").mouseenter(function(){
		var $that=$(this);
		$background_panel3.clearQueue();
		$background_panel3.delay(100).animate({"opacity":0},function(){$background_panel3.css({"background-image":"url('"+$that.data('bg')+"')"});}).animate({"opacity":1});
	})
	$("#panel4 .gal").mouseenter(function(){
		var $that=$(this);
		$background_panel4.clearQueue();
		$background_panel4.delay(100).animate({"opacity":0},function(){$background_panel4.css({"background-image":"url('"+$that.data('bg')+"')"});}).animate({"opacity":1});
	})
	$links.click(function(){
		move_to_slide($(this).data('slide-num'));
	})
	$(".section_data").hide();
	$(".section_heading").click(function(){
		$(".section_heading").removeClass("selected_section_heading");
		$(this).addClass("selected_section_heading");
		$(".section_data").hide();
		$(".section_data").eq($(this).data("section-data-index")).show();
	});
	$(".section_heading").eq(0).trigger("click");
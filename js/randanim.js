var mkob=function(elem,i){
		var left=elem.position().left;
		var top=elem.position().top;
		var width=elem.width();
		var height=elem.height();
		var that={
			rand:function(){
				newleft=Math.random()*400>>0;
				newtop=Math.random()*200>>0;
				opacity=Math.random();
				scale=.55+Math.random()*.25;
				newwidth=elem.width()*scale;
				newheight=elem.height()*scale;
				elem.css('z-index',-1);
				elem.stop();
				elem.css({'left':newleft+'px',
							'top':newtop+'px',
							'opacity':opacity/3+.2,
							'transform': 'scale('+scale+')'
							//'-webkit-filter': 'grayscale(1)'
							});
			},
			init:function(){
				//elem.stop();
				elem.stop();
				elem.css('z-index',0);
				elem.css({'transform':'scale(1)'});
				elem.css({'left':left+'px',
							'top':top+'px',
							'opacity':0.95,
							'transform': 'scale('+1+')'
							});

			},
			ref:elem,
			andi:i
		}
		return that;
	}
	var initob=function(){
		var a=new Array();
		var i=0;
		$(".gal").each(function(){
		a[i]=mkob($(this),i);
		i++;
	});
	return a;
	}
	$(function(){
		ob=initob();
		$gal=$(".gal");
		$gal.mouseover(function(){
			var i=0;
			var a=$(this);
			$gal.each(function(){
				if($(this).attr('id')!=a.attr('id'))
					ob[i].rand();
				i++;
			});
		});
		$gal.mouseout(function(){
			var i=0;
			var a=this;
			$gal.each(function(){
					ob[i].init();
					i++;
			});
		});
});
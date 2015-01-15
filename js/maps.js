var map;
var image_base="images/Site-Map/";
var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
	  center: new google.maps.LatLng(11.321909, 75.935119),
	  zoom: 17,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(mapCanvas, mapOptions);
	addMarker(11.321144, 75.933710,"Rajpath.jpeg");
	addMarker(11.321502, 75.934112,"Centre Circle.jpeg");
	addMarker(11.321596, 75.934209,"MB Lobby.jpeg");
	addMarker(11.321728, 75.933999,"Reg desk.jpeg");
	addMarker(11.321896, 75.933538,"CCC frontside.jpeg");
	addMarker(11.322238, 75.933254,"OAT.jpeg");
	addMarker(11.321975, 75.932916,"Hockey ground.jpeg");
	addMarker(11.321728, 75.933635,"Photobooth.jpeg");
	addMarker(11.322528, 75.933844,"ELHC Pits.jpeg");
	addMarker(11.322407, 75.935754,"Audi.jpeg");
	addMarker(11.320944, 75.933844,"ABC.jpeg");
	addMarker(11.320850, 75.934016,"Aryabhatta.jpeg");
	addMarker(11.321234, 75.934032,"Informals.jpeg");
	addMarker(11.321376, 75.933838,"Food stalls.jpeg");
	addMarker(11.321912, 75.934445,"MB Main stage.jpeg");
	addMarker(11.321123, 75.934868,"Streetplay.jpeg");
	addMarker(11.322670, 75.936440,"Archie stall.jpeg");
	addMarker(11.322722, 75.936810,"Archi block.jpeg");
	addMarker(11.321349, 75.933425,"BB Court.jpeg");
	addMarker(11.322091, 75.933699,"Stunts.jpeg");
	addMarker(11.322617, 75.933737,"Archi studio.jpeg");
	addMarker(11.321581, 75.934182,"MB Lobby.jpeg");
	map.set('styles', [
	  {
	    featureType: 'road',
	    elementType: 'geometry',
	    stylers: [
	      { color: '#000000' },
	      { weight: 1.6 }
	    ]
	  }, {
	    featureType: 'road',
	    elementType: 'labels',
	    stylers: [
	      { saturation: -100 },
	      { invert_lightness: true }
	    ]
	  }, {
	    featureType: 'landscape',
	    elementType: 'geometry',
	    stylers: [
	      { hue: '#ffff00' },
	      { gamma: 1.4 },
	      { saturation: 82 },
	      { lightness: 96 }
	    ]
	  }, {
	    featureType: 'poi.school',
	    elementType: 'geometry',
	    stylers: [
	      { hue: '#20c068' },
	      { lightness: -15 },
	      { saturation: 99 }
	    ]
	  }
	]);
}
var opened_info_window;
function addMarker(lat,long,image,heading){
	var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(lat, long),
	    map: map,
	    // icon: image_base+icon,
	   icon: "https://maps.google.com/mapfiles/kml/shapes/schools_maps.png",
	    title: image
	});
	google.maps.event.addListener(marker, 'click', function() {
		if(opened_info_window) opened_info_window.close();
		var infowindow=GenerateInfowindow(heading,image);
	    infowindow.open(map,marker);
	    opened_info_window=infowindow;
 	});
}
var GenerateInfowindow = function(heading,image){
	return new google.maps.InfoWindow({
      content: generateContentString(heading,image),
       maxheight: 400
	})
}
var generateContentString = function(heading,image){
	image_name=image.substring(0, image.indexOf('.'));
	return "<a href='"+image_base+image+"' target='_blank'>"+image_name+"<img src='"+image_base+image+"'></a>";
}
function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map-canvas");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}
// detectBrowser();
google.maps.event.addDomListener(window, 'load', initialize);
$(document).on('swipedown swipeup', '#map-canvas', function(event) {
 event.stopPropagation();
 event.preventDefault();
});

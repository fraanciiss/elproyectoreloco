  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-34.6182919,-58.3655283),
      zoom: 17
    };
    var map = new google.maps.Map(document.getElementById("mapa"),
        mapOptions);
    var marker = new google.maps.Marker({
  	  position: new google.maps.LatLng(-34.6186431,-58.3653897),
  	  map: map,
  	  title: 'Abbey Sea'
    });  

/*	map.set('styles', [
		{
			featureType: 'all',
			elementType: 'all',
			stylers: [
			  { "hue": "#6600CC" },
			  { "weight": 0 },
			  { "saturation": 40 },
			  { "lightness": 60 },
			  { "gamma": 0.2 }
			]
		},{
		  featureType: 'poi',
		  elementType: 'geometry',
		  stylers: [
			{ visibility: 'off' }
		  ]
		}]);*/
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  

styleArray = [
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#242f3e"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#746855"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#242f3e"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.business",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#263c3f"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#6b9a76"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#38414e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#212a37"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9ca5b3"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#746855"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#1f2835"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#f3d19c"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#2f3948"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#17263c"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#515c6d"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#17263c"
			      }
			    ]
			  }
			]

let map;
let markers = [];
function initMap() {
	let centerPoint = {lat: 25.047820, lng: 121.517071};

	//var uluru = {lat = 25.32, lng: 121.5};
	let map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 14,
	    center: centerPoint,
	    disableDefaultUI: false,
	    gestureHandling: 'greedy',
	    mapTypeControl: false,
	    styles: styleArray
	  });
	/*
	let marker = new google.maps.Marker({
	position: {lat: 25.031355, lng: 121.561866},
	map: map
	});
	*/

	}

function changeMap(location){
	let markerPoint = location;
	let map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 17,
	    center: markerPoint,
	    disableDefaultUI: false,
	    gestureHandling: 'greedy',
	    mapTypeControl: false,
	    styles: styleArray
	  });
	let marker = new google.maps.Marker({
	position: markerPoint,
	map: map
	});

}


function addMarker(location) {
	let centerPoint = {lat: 25.047820, lng: 121.517071};
    let marker = new google.maps.Marker({
		position: centerPoint,
		map: map
    });
    markers.push(marker);
  }

module.exports = {
	initMap : initMap(),
	changeMap : changeMap(location),
	addMarker : addMarker(location)
}

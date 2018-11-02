var mainMarker;  
// Initialize and add the map
function init() {
  // default location (~mid of map)
  var def = {lat: 20.000, lng: 0.000};
  var mainStyledMap = new google.maps.StyledMapType(
    [
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "off"
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
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
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
          "featureType": "road.arterial",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
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
        }
      ],
  {name: 'Карта'});

  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
          zoom: 2,
          center: def,
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          mapTypeControlOptions: {
              mapTypeIds: ['styled_map'
        //,'roadmap'
        //,'satellite'
    ]
          },
          disableDefaultUI: true,});

  map.mapTypes.set('styled_map', mainStyledMap);
  map.setMapTypeId('styled_map'); 
  
  // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  // var beachMarker = new google.maps.Marker({
  //   position: {lat: -33.890, lng: 151.274},
  //   map: map,
  //   icon: image,
  //   draggable: true
  // });

  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

    
  initZoomControl(map); 
// google.maps.event.addDomListener(window, 'load', init);

  // marker = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   animation: google.maps.Animation.DROP,
  //   position: def
  // });
  // marker.addListener('click', toggleBounce);
}

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

function addMarker(location, map) {
  if (mainMarker != null) {
    mainMarker.setMap(null);
  }
  mainMarker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
    });
}



function initZoomControl(map) {
    document.querySelector('.zoom-control-in').onclick = function() {
      map.setZoom(map.getZoom() + 1);
    };
    document.querySelector('.zoom-control-out').onclick = function() {
      map.setZoom(map.getZoom() - 1);
    };
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
        document.querySelector('.zoom-control'));
}
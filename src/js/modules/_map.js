var map, pointsOnMap, mapStyle;

mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a7a7a7"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#737373"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
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
                "color": "#696969"
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
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b3b3b3"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d3d3d3"
            }
        ]
    }
];

pointsOnMap = [
        [50.4189765, 30.473812, 1, {
            'head'    : 'VN STAR',
            'address' : 'address 1',
            'tel'     : '0800-800-800',
            'open'    : '8:30AM - 5:00PM',
            'common'  : 'some text'
        }],
    ];

// Function return array of markers that was create from "locations" and added to "map"
function setMarkers(map, locations) {
        var markers = [];
        var image = new google.maps.MarkerImage('img/map-marker.png', null, null, null, new google.maps.Size(28,42));
        for (var i = 0; i < locations.length; i++) {
            var point    = locations[i];
            var myLatlng = new google.maps.LatLng(point[0], point[1]);
            var marker   = new google.maps.Marker({
                position : myLatlng,
                map      : map,
                icon     : image,
                title    : point[3].head,
                zIndex   : point[2]
            });
            marker.infoContent = point[3];
            markers.push(marker);
        }
        return markers;
    }

// After function is complete all marker in array will contain object with info for infowindow
function setInfoWindowContent(arrayOfMarkers, infoWindow) {
        for (var i = 0; i < arrayOfMarkers.length; i++) {
            google.maps.event.addListener(arrayOfMarkers[i], 'click', function() {
                var content = composeInfoWindowContent(this.infoContent);
                infoWindow.setContent(content);
                infoWindow.open(map, this);
            });
        }
    }

function composeInfoWindowContent(data) {
    return '<ul class="marker-info">' +
                '<li class="marker-info__head">'     + data.head    + '</li>' +
                '<li class="marker-info__address">'  + data.address + '</li>' +
                '<li class="marker-info__tel">'      + data.tel     + '</li>' +
                '<li class="marker-info__open">'     + data.open    + '</li>' +
                '<li class="marker-info__common">'   + data.common  + '</li>' +
            '</ul>';
    }

function initMap() {
    var mapOptions = {
            zoom: 17,
            disableDefaultUI: false,
            scrollwheel: false,
            center: new google.maps.LatLng(50.4189765, 30.473812),
            styles: mapStyle,

            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DEFAULT,
                position: google.maps.ControlPosition.TOP_CENTER
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            scaleControl: true,
            scaleControlOptions: {},

            treetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },

            overviewMapControl: false,
            overviewMapControlOptions: {},

            panControl: false,
            panControlOptions: {},
        };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var mapMarkers = setMarkers(map, pointsOnMap);

    // var mapInfoWindow = new google.maps.InfoWindow();

    // setInfoWindowContent(mapMarkers, mapInfoWindow);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3' +
      '&signed_in=false&callback=app.initMap';
    document.body.appendChild(script);
}

window.onload = loadScript;

// google.maps.event.addDomListener(window, 'load', initMap);

module.exports = initMap;

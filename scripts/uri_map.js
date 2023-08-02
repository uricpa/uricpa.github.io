function initialize() {
    var mapOptions = {
    zoom: 17,
    center: {lat: 37.4773, lng: 127.1241}
    };
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker = new google.maps.Marker({
      map: map,
      // Define the place with a location, and a query string.
      place: {
        location: {lat: 37.4773, lng: 127.1241},
        query: 'Google, Garden5, Song-pa'
                                        
      },
      // Attributions help users find your site again.
      attribution: {
        source: 'Google Maps JavaScript API',
        webUrl: 'https://developers.google.com/maps/'
      }
    });
    
    // Construct a new InfoWindow.
    var infowindow = new google.maps.InfoWindow({
      content: '송파구 가든파이브'
    });
    
    // Opens the InfoWindow when marker is clicked.
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

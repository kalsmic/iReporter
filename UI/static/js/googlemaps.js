var marker

function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(0.580584670867283,32.53452250031705),

        zoom: 9,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    google.maps.event.addListener(map, 'click', function(event) {
        selectedLocation = event.latLng

        if (marker && marker.setMap) {
            // hides already created marker
            marker.setMap(null);
        }
        // set marker on map
        marker = new google.maps.Marker({
            position: selectedLocation,
            map: map,
        });
        // Animate marker

        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 750);
        


        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        var latlng = {
            lat: selectedLocation.lat(),
            lng: selectedLocation.lng()
        }

        geocoder.geocode({
            'location': latlng
        }, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    map.setZoom(11);
                    // hide already existing markers
                    if (marker && marker.setMap) {
                        marker.setMap(null);
                    }
                    marker = new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                    var address_name =results[0].formatted_address
                    infowindow.setContent(address_name);
                    console.log(address_name)

                     // document.getElementById("set_location").value = address_name + "(" selectedLocation.lat() ","+ selectedLocation.lng() + ")";
        // document.getElementById("getLongitude").value = "Longitude Coordinates: " + selectedLocation.lng();
                    document.getElementById("set_location").value = "Latitude : "+ selectedLocation.lat() +" Longitude : "+ selectedLocation.lng() 
                    // +"Longitude Coordinates : " + selectedLocation.lng();
                    infowindow.open(map, marker);

                } else {
                    window.alert('No  Select a valid location');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });

    });
}

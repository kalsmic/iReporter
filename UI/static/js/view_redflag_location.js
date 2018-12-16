function initMap() {
    // center:new google.maps.LatLng(0.580584670867283,32.53452250031705),

    var myLatLng = {lat: -25.363, lng: 131.044};
  
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 4,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }
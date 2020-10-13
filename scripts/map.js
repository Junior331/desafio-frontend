function initMap() {
    const myLatLng = { lat: -23.0027054, lng: -43.3232291 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18  ,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
    });
}
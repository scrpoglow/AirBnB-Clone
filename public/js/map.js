mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', 
    center: listing.geometry.coordinates, 
    zoom: 9 
});


const el = document.createElement('div');
el.className = 'custom-marker';
el.innerHTML = '<i class="fa-solid fa-map-pin"></i>';

const marker = new mapboxgl.Marker(el)
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.location}</h4> <p>Exact Location provided after booking</p>`))
    .addTo(map);


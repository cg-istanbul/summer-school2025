function initMap() {
    // Coordinates for Bahçeşehir University
    const location = [41.042165, 29.009259];

    // Initialize the map
    const map = L.map("map").setView(location, 15); // Centered at BAU with zoom level 15

    // Add a tile layer (standard OpenStreetMap tiles)
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     attribution: '© OpenStreetMap contributors'
    // }).addTo(map);

    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">Carto</a> contributors',
    }).addTo(map);


    
    // Add a marker for Bahçeşehir University
    L.marker(location).addTo(map)
        .bindPopup("<b>Bahçeşehir University</b>")
        .openPopup();
}

// Initialize the map when the page loads
document.addEventListener("DOMContentLoaded", initMap);



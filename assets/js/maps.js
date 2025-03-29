function initMap() {
    // Coordinates for Feza Gürsey
    const location = [41.06321, 29.06416];

    // Initialize the map
    const map = L.map("map").setView(location, 15); // Centered at Feza Gürsey with zoom level 13

    // Add a tile layer (standard OpenStreetMap tiles)
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     attribution: '© OpenStreetMap contributors'
    // }).addTo(map);

    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">Carto</a> contributors',
    }).addTo(map);


    
    // Add a marker for Feza Gürsey
    L.marker(location).addTo(map)
        .bindPopup("<b>Feza Gürsey Science and Technology Building</b>")
        .openPopup();
}

// Initialize the map when the page loads
document.addEventListener("DOMContentLoaded", initMap);

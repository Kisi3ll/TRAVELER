function initMap() {
    // Współrzędne miejsc do zwiedzania
    var landmarks = [
        { name: 'Zamek Książ', location: { lat: 50.842457642180435, lng: 16.2915994835292
        } },
        { name: 'Katedra św, Jana Chrzciciela', location: { lat: 51.11467080990341, lng: 17.046381238180537 } },
        { name: 'Twierdza Kłodzko', location: { lat: 50.44124936061625, lng: 16.65341086816026} }
        // Dodaj więcej miejsc do zwiedzania wraz z ich współrzędnymi
    ];

    // Inicjalizacja mapy
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8, // Powiększenie mapy
        center: { lat: 51.1079, lng: 17.0610 } // Współrzędne centralne
    });

    // Dodawanie pinezek dla każdego miejsca do zwiedzania
    landmarks.forEach(function(landmark) {
        var marker = new google.maps.Marker({
            position: landmark.location,
            map: map,
            title: landmark.name
        });

        // Obsługa kliknięcia pinezki
        marker.addListener('click', function() {
            window.location.href = 'presentation.html#' + landmark.name.replace(/\s+/g, '-').toLowerCase();
        });
    });
}

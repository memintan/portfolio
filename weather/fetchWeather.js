function fetchLocationName(lat, lon) {
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    fetch(nominatimUrl)
        .then(response => response.json())
        .then(data => {
            let locationName = '';

            // Check for different levels of location detail and use the most appropriate one
            if (data.address.city) {
                locationName = data.address.city;
            } else if (data.address.county) {
                locationName = data.address.county;
            } else if (data.address.state) {
                locationName = data.address.state;
            }

            if (locationName) {
                document.getElementById('location-name').textContent = locationName;
            } else {
                console.error('Location name not found in Nominatim response:', data);
                document.getElementById('location-name').textContent = 'Location not found';
            }
        })
        .catch(error => {
            console.error('Error fetching location name:', error);
        });
}


function fetchWeather() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetchLocationName(lat, lon); // Fetch and display location name

            const weatherUrl = `http://localhost:8080/weather/${lat},${lon}`;
            fetch(weatherUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const weatherValues = data.data.values;
                    const temperatureFahrenheit = (weatherValues.temperature * 9 / 5) + 32;
                    const windSpeedMph = weatherValues.windSpeed / 1.60934;

                    document.getElementById('weather-data').innerHTML = `
                        <p>Temperature: ${temperatureFahrenheit.toFixed(1)}°F  <b>|</b>
                        Cloud Cover: ${weatherValues.cloudCover}%   <b>|</b>
                        Wind Speed: ${windSpeedMph.toFixed(1)} mph  <b>|</b>
                        Humidity: ${weatherValues.humidity}%</p>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('weather-data').textContent = 'Failed to load weather data';
                });

        }, error => {
            console.error("Error getting location: ", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

window.onload = fetchWeather;

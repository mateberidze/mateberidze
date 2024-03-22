document.getElementById('location-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const locationInput = document.getElementById('location-input').value;

    fetchWeather(locationInput);
});

function fetchWeather(location) {
    // You would need to use an actual weather API here, such as OpenWeatherMap, Weatherstack, or others
    // Here's a simplified example using mock data
    const mockWeatherData = {
        temperature: '25°C',
        humidity: '65%',
        windSpeed: '10 km/h',
        description: 'Partly cloudy',
        forecast: [
            { day: 'Monday', temperature: '27°C', description: 'Partly cloudy' },
            { day: 'Tuesday', temperature: '29°C', description: 'Sunny' },
            { day: 'Wednesday', temperature: '26°C', description: 'Rainy' }
        ]
    };

    displayWeather(mockWeatherData);
}

function displayWeather(weather) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${weather.temperature}</p>
        <p>Humidity: ${weather.humidity}</p>
        <p>Wind Speed: ${weather.windSpeed}</p>
        <p>Description: ${weather.description}</p>
        <h2>Forecast</h2>
        <ul>
            ${weather.forecast.map(day => `<li>${day.day}: ${day.temperature}, ${day.description}</li>`).join('')}
        </ul>
    `;
}

fetch('data/weather.json')
  .then(response => response.json())
  .then(data => renderWeather(data))
  .catch(error =>
    console.error('Помилка завантаження даних:', error));

function renderWeather(data) {
  const current = document.getElementById('current-weather');
  current.innerHTML = `
    <h2>${data.city}</h2>
    <p>${data.current.temperature_c}°C,
    ${data.current.condition}</p>`;

  const forecast = document.getElementById('forecast');
  forecast.innerHTML = data.forecast_5_days
    .map(day => `<p>${day.date}: ${day.temp_min_c}…${day.temp_max_c}°C,
${day.condition}</p>`)
    .join('');
}
  
function celsiusToFahrenheit(celsius) { 
  // ПОМИЛКА: правильна формула — celsius * 9/5 + 32 
  return celsius * 2 + 30; 
} 

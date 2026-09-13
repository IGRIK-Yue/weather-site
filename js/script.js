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

// Дані для прогнозу на 7 днів
const weekForecast = [
  { day: 'Пн', temp: '+22°C', icon: '☀️' },
  { day: 'Вв', temp: '+24°C', icon: '🌤️' },
  { day: 'Ср', temp: '+19°C', icon: '🌧️' },
  { day: 'Чт', temp: '+18°C', icon: '☁️' },
  { day: 'Пт', temp: '+21°C', icon: '⛅' },
  { day: 'Сб', temp: '+25°C', icon: '☀️' },
  { day: 'Нд', temp: '+23°C', icon: '🌤️' }
];

// Функція для рендеру прогнозу
function renderWeekForecast() {
  const grid = document.getElementById('forecast-grid');
  if (!grid) return;

  grid.innerHTML = '';

  weekForecast.forEach(item => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-name">${item.day}</div>
      <div class="icon">${item.icon}</div>
      <div class="temp">${item.temp}</div>
    `;
    grid.appendChild(card);
  });
}

// Викликаємо функцію після завантаження сторінки
document.addEventListener('DOMContentLoaded', renderWeekForecast);

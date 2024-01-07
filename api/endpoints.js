const API_KEY = "06aa93b3298a5c657eeb2b392f035e7c";

function getCurrentWeatherEndpoint(city) {
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastWeatherEndpoint(city) {
	return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

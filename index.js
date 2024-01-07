let currentCityLS = localStorage.getItem("city");

if (!currentCityLS) {
	currentCityLS = "București";
}

currentCity.innerHTML = currentCityLS;
displayCurrentWeather(currentCityLS);
displayForecastWeather(currentCityLS);

let oradeaButton = document.querySelector(".oradea");
let timisoaraButton = document.querySelector(".timisoara");
let bucharestButton = document.querySelector(".bucharest");
let currentCity = document.querySelector(".current-city");

function updateCityWeather(city) {
	localStorage.setItem("city", city);
	currentCity.innerHTML = city;
	displayCurrentWeather(city);
	displayForecastWeather(city);
}

oradeaButton.addEventListener("click", function (eventDetails) {
	//nu e obligatoriu eventDetails
	console.log(eventDetails);
	updateCityWeather("Oradea");
});

timisoaraButton.addEventListener("click", function () {
	updateCityWeather("Timișoara");
});

bucharestButton.addEventListener("click", function () {
	updateCityWeather("București");
});

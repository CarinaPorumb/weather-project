let oradeaButton = document.querySelector(".oradea");
let timisoaraButton = document.querySelector(".timisoara");
let bucharestButton = document.querySelector(".bucharest");
let sibiuButton = document.querySelector(".sibiu");
let aradButton = document.querySelector(".arad");
let clujNapocaButton = document.querySelector(".cluj-napoca");
let brasovButton = document.querySelector(".brasov");

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

sibiuButton.addEventListener("click", function () {
	updateCityWeather("Sibiu");
});

aradButton.addEventListener("click", function () {
	updateCityWeather("Arad");
});

clujNapocaButton.addEventListener("click", function () {
	updateCityWeather("Cluj-Napoca");
});

brasovButton.addEventListener("click", function () {
	updateCityWeather("Brașov");
});

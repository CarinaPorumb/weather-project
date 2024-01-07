function displayCurrentWeather(city) {
	const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);

	fetch(currentWeatherEndpoint)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);

			const { name, dt, main, weather, wind } = json;

			let weekDay = unixToWeekDay(dt);
			let time = unixToTime(dt);
			let temperature = Math.round(main.temp);
			let realFeel = Math.round(main.feels_like);
			let weatherDescription = weather[0].description;
			let weatherIcon = getWeatherIcon(weather[0].icon);
			let windSpeed = Math.round(windToKmPerHour(wind.speed));

			let currentWeatherContainer = document.querySelector(".current-weather");

			currentWeatherContainer.innerHTML = `
        <div class="px-3">
           <div class="fs-2 mb-2"><strong>${name}</strong></div>
           <div class="fs-4"><strong>${weekDay}</strong>, ${time}</div>
           <div class="d-flex align-items-center justify-content-center">
             <strong class="fs-1">${temperature}°C</strong>
             <img src="${weatherIcon}" />
           </div>
         </div>
         <div class="px-3">
           <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
           <p class="fs-5 text-capitalize">${weatherDescription}</p>
           <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
         </div>
         `;
		});
}

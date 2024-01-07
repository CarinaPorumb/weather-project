function displayForecastWeather(city) {
	const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);

	let weatherForecastContainer = document.querySelector(".weather-forecast");
	weatherForecastContainer.innerHTML = "";

	fetch(forecastWeatherEndpoint)
		.then((response) => response.json())
		.then((json) => {
			//console.log(json);
			let forecastList = json.list;
			//console.log(forecastList);

			let daysMap = {};

			forecastList.forEach((element) => {
				let { dt } = element;
				let day = unixToWeekDay(dt);

				if (daysMap[day]) {
					daysMap[day].push(element);
				} else {
					daysMap[day] = [element];
				}
			});

			console.log(daysMap);

			for (let key in daysMap) {
				weatherForecastContainer.innerHTML += `<h2>${key}</h2>`;

				days = daysMap[key];

				days.forEach((elem) => {
					//console.log(elem);

					let { dt, main, weather } = elem;
					let time = unixToTime(dt);
					let temperature = Math.round(main.temp);
					let realFeel = Math.round(main.feels_like);
					let weatherDescription = weather[0].description;
					let weatherIcon = getWeatherIcon(weather[0].icon);

					weatherForecastContainer.innerHTML += `
					<div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>${time}</div>
              <div><img src="${weatherIcon}" alt="" /></div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div>${weatherDescription}</div>
              <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
          `;
				});
			}
		});
}

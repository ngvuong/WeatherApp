import { windDirection } from "./windDir";

console.log(windDirection(256));

async function fetchWeather(location = "London") {
  const city = location || "London";

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  const response = await fetch(baseUrl);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

fetchWeather("San Francisco, CA, US");

function parseWeather(data) {
  const city = data.name;
  const temp = data.main.temp;
  const maxTemp = data.main.temp_max;
  const minTemp = data.main.temp_min;
}

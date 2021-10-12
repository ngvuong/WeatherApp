import { windDirection } from "./windDir";

// console.log(windDirection(309));

async function fetchWeather(location = "London") {
  const city = location || "London";

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  try {
    const response = await fetch(baseUrl);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

// fetchWeather("Santa Rosa, US");

function parseWeather(data) {
  const city = data.name;
  const country = data.sys.country;
  const temp = data.main.temp;
  const maxTemp = data.main.temp_max;
  const minTemp = data.main.temp_min;
  const description = data.weather[0].description;
  return { city, country, temp, maxTemp, minTemp, description };
}

(async function displayWeather() {
  const display = document.querySelector(".display");
  const search = document.querySelector(".search");

  search.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = search.city.value;
    setDisplay(await getData(city));
  });

  function getData(city) {
    const data = fetchWeather(city).then((response) => parseWeather(response));
    return data;
  }

  setDisplay(await getData("London"));

  function setDisplay(data) {
    display.innerHTML = `${data.city}, ${data.country}
    Temperature: ${data.temp}
    Low: ${data.minTemp} High: ${data.maxTemp}
    ${data.description}`;
  }
})();

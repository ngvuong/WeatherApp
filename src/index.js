import { windDirection } from "./windDir";
import { format } from "date-fns";

// console.log(windDirection(309));

async function fetchWeather(city = "London") {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  try {
    const response = await fetch(baseUrl);
    const dayWeather = await response.json();
    const { lat, lon } = dayWeather.coord;

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

    const secondRes = await fetch(url);
    const weekWeather = await secondRes.json();
    console.log(dayWeather, weekWeather);
    return { dayWeather, weekWeather };
  } catch (err) {
    console.log(err);
  }
}

// fetchWeather("Santa Rosa, US");

function parseWeather(data) {
  const city = data.dayWeather.name;
  const country = data.dayWeather.sys.country;
  const temp = data.dayWeather.main.temp;
  const maxTemp = data.dayWeather.main.temp_max;
  const minTemp = data.dayWeather.main.temp_min;
  const description = data.dayWeather.weather[0].description;
  const forecast = data.weekWeather.daily.reduce((acc, day) => {
    const obj = { day: format(day.dt * 1000, "EEEE"), temp: day.temp };
    // obj[format(day.dt * 1000, "yyyy-MM-dd")] = day.temp;
    acc.push(obj);
    return acc;
  }, []);

  return { city, country, temp, maxTemp, minTemp, description, forecast };
}

(async function displayWeather() {
  const dayDisplay = document.querySelector(".day-display");
  const weekDisplay = document.querySelector(".week-display");
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
    console.log(data.forecast);

    dayDisplay.innerHTML = `${data.city}, ${data.country}
    Temperature: ${data.temp}
    Low: ${data.minTemp} High: ${data.maxTemp}
    ${data.description}`;

    const forecast = data.forecast;
  }
})();

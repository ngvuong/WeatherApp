import { windDirection } from "./windDir";
import { format } from "date-fns";

// console.log(windDirection(355));

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

function parseWeather(data) {
  const city = data.dayWeather.name;
  const country = data.dayWeather.sys.country;
  const temp = Math.round(data.dayWeather.main.temp);
  const maxTemp = Math.round(data.dayWeather.main.temp_max);
  const minTemp = Math.round(data.dayWeather.main.temp_min);
  const description = data.dayWeather.weather[0].description;
  const timeZone = data.weekWeather.timezone;

  const today = format(new Date(), "MMM-d");
  const forecast = data.weekWeather.daily.reduce((acc, day) => {
    const targetDay = format(day.dt * 1000, "MMM-d");
    if (targetDay !== today && acc.length < 7) {
      const obj = {
        day: format(day.dt * 1000, "EEEE"),
        temp: day.temp,
      };
      acc.push(obj);
    }
    return acc;
  }, []);

  return {
    city,
    country,
    temp,
    maxTemp,
    minTemp,
    description,
    timeZone,
    forecast,
  };
}

(async function displayWeather() {
  const dayDisplay = document.querySelector(".day-display");
  const weekDisplay = document.querySelector(".week-display");
  const search = document.querySelector(".search");

  search.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = search.city.value;
    setDisplay(await getData(city));
    search.reset();
  });

  function getData(city) {
    const data = fetchWeather(city).then((response) => parseWeather(response));
    return data;
  }

  setDisplay(await getData("London"));

  function setDisplay(data) {
    console.log(data.forecast);

    dayDisplay.innerHTML = `<div>${data.city}, ${data.country}</div>
    <div class="main-temp">${data.temp}°</div>
    Today's low is ${data.minTemp}° and high is ${data.maxTemp}° with
    ${data.description}`;

    weekDisplay.textContent = "";
    const forecast = data.forecast;
    forecast.forEach((day) => {
      const card = document.createElement("div");
      card.className = "forecast";
      card.innerHTML = `<div>${day.day}</div> 
      <div>${Math.round(day.temp.day)}°</div>
      <div>L: ${Math.round(day.temp.min)}° High ${Math.round(
        day.temp.max
      )}°</div>`;
      weekDisplay.appendChild(card);
    });
  }
})();

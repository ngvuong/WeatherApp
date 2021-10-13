import { windDegToDirection } from "./windDir";
import { format } from "date-fns";

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
  const windSpeed = data.dayWeather.wind.speed;
  const windDeg = data.dayWeather.wind.deg;
  const windDirection = windDegToDirection(windDeg);

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
    windSpeed,
    windDirection,
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
    setDisplay(await loadData(city));
    search.reset();
  });

  function loadData(city) {
    dayDisplay.classList.add("loading");
    dayDisplay.innerHTML = `<span>.</span><span>.</span><span>.</span>`;
    weekDisplay.textContent = "";
    const data = fetchWeather(city).then((response) => parseWeather(response));
    return data;
  }

  setDisplay(await loadData("London"));

  function setDisplay(data) {
    console.log(data.forecast);

    dayDisplay.classList.remove("loading");

    dayDisplay.innerHTML = `<div class="current-forecast">
      <div>${data.city}, ${data.country}</div>
      <span class="description">${data.description}</span>
      <div class="main-temp"><span>${data.minTemp}°  </span> <span>${data.temp}°</span> <span>${data.maxTemp}°</span></div>
      ${data.windSpeed} m/h ${data.windDirection} wind
    </div>
    `;

    weekDisplay.textContent = "";
    const forecast = data.forecast;
    forecast.forEach((day) => {
      const card = document.createElement("div");
      card.className = "forecast";
      card.innerHTML = `<div>${day.day}</div> 
      <div>${Math.round(day.temp.day)}°</div>
      <div>L: ${Math.round(day.temp.min)}° H: ${Math.round(
        day.temp.max
      )}°</div>`;
      weekDisplay.appendChild(card);
    });
  }
})();

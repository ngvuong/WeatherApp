import { windDegToDirection } from "./windDir";
import { convert } from "./conversion";
import { format } from "date-fns";

async function fetchWeather(city = "London") {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  try {
    // First API request - weather for the day
    const response = await fetch(baseUrl);
    const dayWeather = await response.json();
    const { lat, lon } = dayWeather.coord;
    // Use lat, lon to make second request - 7 day forecast
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

    const secondRes = await fetch(url);
    const weekWeather = await secondRes.json();
    return { dayWeather, weekWeather };
  } catch (err) {
    return err;
  }
}

function parseWeather(data) {
  const city = data.dayWeather.name;
  const country = data.dayWeather.sys.country;
  const temp = data.dayWeather.main.temp;
  const maxTemp = data.dayWeather.main.temp_max;
  const minTemp = data.dayWeather.main.temp_min;
  const description = data.dayWeather.weather[0].description;
  const windSpeed = data.dayWeather.wind.speed;
  const windDeg = data.dayWeather.wind.deg;
  const windDirection = windDegToDirection(windDeg);

  // Parse 7 day data for ease of access
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
  // Save initial request data
  let weatherData = await loadData("London");

  search.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = search.city.value;
    // Handle search not found
    try {
      if (city) {
        weatherData = await loadData(city);
        setDisplay(weatherData);
      }
    } catch (e) {
      dayDisplay.textContent = "Location not found, please try again";
    }
    search.reset();
  });

  // Facilitate fetching and parsing forecast data
  function loadData(city) {
    dayDisplay.classList.add("loading");
    dayDisplay.innerHTML = `<span>.</span><span>.</span><span>.</span>`;
    weekDisplay.textContent = "";
    const data = fetchWeather(city).then((response) => parseWeather(response));
    return data;
  }

  // Handle units preference toggling
  let units = "imperial";
  const fahrenheit = document.querySelector(".fahrenheit");
  const celsius = document.querySelector(".celsius");

  fahrenheit.addEventListener("click", () => {
    units = "imperial";
    setDisplay(weatherData);
    document.querySelector(".current").classList.remove("current");
    fahrenheit.classList.add("current");
  });

  celsius.addEventListener("click", () => {
    units = "metric";
    setDisplay(weatherData);
    document.querySelector(".current").classList.remove("current");
    celsius.classList.add("current");
  });

  // Set DOM display
  function setDisplay(data) {
    dayDisplay.classList.remove("loading");

    dayDisplay.innerHTML = `<div class="current-forecast">
      <div>${data.city}, ${data.country}</div>
      <span class="description">${data.description}</span>
      <div class="main-temp"><span>${convert(
        data.minTemp,
        units
      )}°</span> <span>${convert(data.temp, units)}°</span> <span>${convert(
      data.maxTemp,
      units
    )}°</span></div>
      ${data.windSpeed} m/h ${data.windDirection} wind
    </div>
    `;
    const currentForecast = dayDisplay.querySelector(".current-forecast");
    if (data.description.includes("cloud")) {
      currentForecast.classList.add("cloud");
    } else if (data.description.includes("rain")) {
      currentForecast.classList.add("rain");
    }

    weekDisplay.textContent = "";
    const forecast = data.forecast;
    forecast.forEach((day) => {
      const card = document.createElement("div");
      card.className = "forecast";
      card.innerHTML = `<div>${day.day}</div> 
      <div>${convert(day.temp.day, units)}°</div>
      <div class="min-max"><span>L:${convert(
        day.temp.min,
        units
      )}° </span><span>H:${convert(day.temp.max, units)}°</span></div>`;
      weekDisplay.appendChild(card);
    });
  }

  setDisplay(weatherData);
})();

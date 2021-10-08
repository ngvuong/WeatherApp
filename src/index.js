async function fetchWeather(location = "London") {
  const city = location || "London";

  const baseUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  const weatherData = await fetch(baseUrl, { mode: "cors" });
  console.log(weatherData);
}

fetchWeather("Ninh Binh");

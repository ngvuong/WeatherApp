/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function fetchWeather(location = "London") {
  const city = location || "London";

  const baseUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  const weatherData = await fetch(baseUrl, { mode: "cors" });
  console.log(weatherData);
}

fetchWeather("Ninh Binh");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUEsK0RBQStELEtBQUs7O0FBRXBFLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihsb2NhdGlvbiA9IFwiTG9uZG9uXCIpIHtcbiAgY29uc3QgY2l0eSA9IGxvY2F0aW9uIHx8IFwiTG9uZG9uXCI7XG5cbiAgY29uc3QgYmFzZVVybCA9IGBhcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPWltcGVyaWFsJmFwcGlkPWYyNzcwNDUyYmNiODQyYjIwNDI1YTZkN2E2NDEzYjllYDtcblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKGJhc2VVcmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbn1cblxuZmV0Y2hXZWF0aGVyKFwiTmluaCBCaW5oXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
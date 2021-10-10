/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function fetchWeather(location = "London") {
  const city = location || "London";

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  const response = await fetch(baseUrl);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

// fetchWeather("Vancouver");

function parseWeather(data) {
  const city = data.name;
  const temp = data.main.temp;
  const maxTemp = data.main.temp_max;
  const minTemp = data.main.temp_min;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUEsdUVBQXVFLEtBQUs7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIobG9jYXRpb24gPSBcIkxvbmRvblwiKSB7XG4gIGNvbnN0IGNpdHkgPSBsb2NhdGlvbiB8fCBcIkxvbmRvblwiO1xuXG4gIGNvbnN0IGJhc2VVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPWltcGVyaWFsJmFwcGlkPWYyNzcwNDUyYmNiODQyYjIwNDI1YTZkN2E2NDEzYjllYDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVcmwpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbi8vIGZldGNoV2VhdGhlcihcIlZhbmNvdXZlclwiKTtcblxuZnVuY3Rpb24gcGFyc2VXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgY2l0eSA9IGRhdGEubmFtZTtcbiAgY29uc3QgdGVtcCA9IGRhdGEubWFpbi50ZW1wO1xuICBjb25zdCBtYXhUZW1wID0gZGF0YS5tYWluLnRlbXBfbWF4O1xuICBjb25zdCBtaW5UZW1wID0gZGF0YS5tYWluLnRlbXBfbWluO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/windDir.js":
/*!************************!*\
  !*** ./src/windDir.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "windDirection": () => (/* binding */ windDirection)
/* harmony export */ });
function windDirection(d) {
  d = d % 360;

  if (11.25 <= d && d < 33.75) {
    return "NNE";
  } else if (33.75 <= d && d < 56.25) {
    return "NE";
  } else if (56.25 <= d && d < 78.75) {
    return "ENE";
  } else if (78.75 <= d && d < 101.25) {
    return "E";
  } else if (101.25 <= d && d < 123.75) {
    return "ESE";
  } else if (123.75 <= d && d < 146.25) {
    return "SE";
  } else if (146.25 <= d && d < 168.75) {
    return "SSE";
  } else if (168.75 <= d && d < 191.25) {
    return "S";
  } else if (191.25 <= d && d < 213.75) {
    return "SSW";
  } else if (213.75 <= d && d < 236.25) {
    return "SW";
  } else if (236.25 <= d && d < 258.75) {
    return "WSW";
  } else if (258.75 <= d && d < 281.25) {
    return "W";
  } else if (281.25 <= d && d < 303.75) {
    return "WNW";
  } else if (303.75 <= d && d < 326.25) {
    return "NW";
  } else if (326.25 <= d && d < 348.75) {
    return "NNW";
  } else {
    return "N";
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _windDir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windDir */ "./src/windDir.js");


// console.log(windDirection(309));

async function fetchWeather(location = "London") {
  const city = location || "London";

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  const response = await fetch(baseUrl);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
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

  let city;
  search.addEventListener("submit", (e) => {
    e.preventDefault();
    city = search.city.value;
    // displayWeather();
  });
  const response = await fetchWeather(city);
  const weatherData = parseWeather(response);

  display.innerHTML = `${weatherData.city}, ${weatherData.country}
  Temperature: ${weatherData.temp}
  Low: ${weatherData.minTemp} High: ${weatherData.maxTemp}
  ${weatherData.description}`;
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7O0FBRUE7QUFDQTs7QUFFQSx1RUFBdUUsS0FBSzs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHlCQUF5QixpQkFBaUIsSUFBSTtBQUM5QyxpQkFBaUI7QUFDakIsU0FBUyxxQkFBcUIsUUFBUTtBQUN0QyxJQUFJLHdCQUF3QjtBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy93aW5kRGlyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB3aW5kRGlyZWN0aW9uKGQpIHtcbiAgZCA9IGQgJSAzNjA7XG5cbiAgaWYgKDExLjI1IDw9IGQgJiYgZCA8IDMzLjc1KSB7XG4gICAgcmV0dXJuIFwiTk5FXCI7XG4gIH0gZWxzZSBpZiAoMzMuNzUgPD0gZCAmJiBkIDwgNTYuMjUpIHtcbiAgICByZXR1cm4gXCJORVwiO1xuICB9IGVsc2UgaWYgKDU2LjI1IDw9IGQgJiYgZCA8IDc4Ljc1KSB7XG4gICAgcmV0dXJuIFwiRU5FXCI7XG4gIH0gZWxzZSBpZiAoNzguNzUgPD0gZCAmJiBkIDwgMTAxLjI1KSB7XG4gICAgcmV0dXJuIFwiRVwiO1xuICB9IGVsc2UgaWYgKDEwMS4yNSA8PSBkICYmIGQgPCAxMjMuNzUpIHtcbiAgICByZXR1cm4gXCJFU0VcIjtcbiAgfSBlbHNlIGlmICgxMjMuNzUgPD0gZCAmJiBkIDwgMTQ2LjI1KSB7XG4gICAgcmV0dXJuIFwiU0VcIjtcbiAgfSBlbHNlIGlmICgxNDYuMjUgPD0gZCAmJiBkIDwgMTY4Ljc1KSB7XG4gICAgcmV0dXJuIFwiU1NFXCI7XG4gIH0gZWxzZSBpZiAoMTY4Ljc1IDw9IGQgJiYgZCA8IDE5MS4yNSkge1xuICAgIHJldHVybiBcIlNcIjtcbiAgfSBlbHNlIGlmICgxOTEuMjUgPD0gZCAmJiBkIDwgMjEzLjc1KSB7XG4gICAgcmV0dXJuIFwiU1NXXCI7XG4gIH0gZWxzZSBpZiAoMjEzLjc1IDw9IGQgJiYgZCA8IDIzNi4yNSkge1xuICAgIHJldHVybiBcIlNXXCI7XG4gIH0gZWxzZSBpZiAoMjM2LjI1IDw9IGQgJiYgZCA8IDI1OC43NSkge1xuICAgIHJldHVybiBcIldTV1wiO1xuICB9IGVsc2UgaWYgKDI1OC43NSA8PSBkICYmIGQgPCAyODEuMjUpIHtcbiAgICByZXR1cm4gXCJXXCI7XG4gIH0gZWxzZSBpZiAoMjgxLjI1IDw9IGQgJiYgZCA8IDMwMy43NSkge1xuICAgIHJldHVybiBcIldOV1wiO1xuICB9IGVsc2UgaWYgKDMwMy43NSA8PSBkICYmIGQgPCAzMjYuMjUpIHtcbiAgICByZXR1cm4gXCJOV1wiO1xuICB9IGVsc2UgaWYgKDMyNi4yNSA8PSBkICYmIGQgPCAzNDguNzUpIHtcbiAgICByZXR1cm4gXCJOTldcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJOXCI7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgd2luZERpcmVjdGlvbiB9IGZyb20gXCIuL3dpbmREaXJcIjtcblxuLy8gY29uc29sZS5sb2cod2luZERpcmVjdGlvbigzMDkpKTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGxvY2F0aW9uID0gXCJMb25kb25cIikge1xuICBjb25zdCBjaXR5ID0gbG9jYXRpb24gfHwgXCJMb25kb25cIjtcblxuICBjb25zdCBiYXNlVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD1mMjc3MDQ1MmJjYjg0MmIyMDQyNWE2ZDdhNjQxM2I5ZWA7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVXJsKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG4vLyBmZXRjaFdlYXRoZXIoXCJTYW50YSBSb3NhLCBVU1wiKTtcblxuZnVuY3Rpb24gcGFyc2VXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgY2l0eSA9IGRhdGEubmFtZTtcbiAgY29uc3QgY291bnRyeSA9IGRhdGEuc3lzLmNvdW50cnk7XG4gIGNvbnN0IHRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc3QgbWF4VGVtcCA9IGRhdGEubWFpbi50ZW1wX21heDtcbiAgY29uc3QgbWluVGVtcCA9IGRhdGEubWFpbi50ZW1wX21pbjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIHJldHVybiB7IGNpdHksIGNvdW50cnksIHRlbXAsIG1heFRlbXAsIG1pblRlbXAsIGRlc2NyaXB0aW9uIH07XG59XG5cbihhc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcigpIHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbiAgbGV0IGNpdHk7XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNpdHkgPSBzZWFyY2guY2l0eS52YWx1ZTtcbiAgICAvLyBkaXNwbGF5V2VhdGhlcigpO1xuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFdlYXRoZXIoY2l0eSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gcGFyc2VXZWF0aGVyKHJlc3BvbnNlKTtcblxuICBkaXNwbGF5LmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLmNpdHl9LCAke3dlYXRoZXJEYXRhLmNvdW50cnl9XG4gIFRlbXBlcmF0dXJlOiAke3dlYXRoZXJEYXRhLnRlbXB9XG4gIExvdzogJHt3ZWF0aGVyRGF0YS5taW5UZW1wfSBIaWdoOiAke3dlYXRoZXJEYXRhLm1heFRlbXB9XG4gICR7d2VhdGhlckRhdGEuZGVzY3JpcHRpb259YDtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7O0FBRUE7QUFDQTs7QUFFQSx1RUFBdUUsS0FBSzs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixVQUFVLElBQUk7QUFDekMsbUJBQW1CO0FBQ25CLFdBQVcsY0FBYyxRQUFRO0FBQ2pDLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvd2luZERpci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gd2luZERpcmVjdGlvbihkKSB7XG4gIGQgPSBkICUgMzYwO1xuXG4gIGlmICgxMS4yNSA8PSBkICYmIGQgPCAzMy43NSkge1xuICAgIHJldHVybiBcIk5ORVwiO1xuICB9IGVsc2UgaWYgKDMzLjc1IDw9IGQgJiYgZCA8IDU2LjI1KSB7XG4gICAgcmV0dXJuIFwiTkVcIjtcbiAgfSBlbHNlIGlmICg1Ni4yNSA8PSBkICYmIGQgPCA3OC43NSkge1xuICAgIHJldHVybiBcIkVORVwiO1xuICB9IGVsc2UgaWYgKDc4Ljc1IDw9IGQgJiYgZCA8IDEwMS4yNSkge1xuICAgIHJldHVybiBcIkVcIjtcbiAgfSBlbHNlIGlmICgxMDEuMjUgPD0gZCAmJiBkIDwgMTIzLjc1KSB7XG4gICAgcmV0dXJuIFwiRVNFXCI7XG4gIH0gZWxzZSBpZiAoMTIzLjc1IDw9IGQgJiYgZCA8IDE0Ni4yNSkge1xuICAgIHJldHVybiBcIlNFXCI7XG4gIH0gZWxzZSBpZiAoMTQ2LjI1IDw9IGQgJiYgZCA8IDE2OC43NSkge1xuICAgIHJldHVybiBcIlNTRVwiO1xuICB9IGVsc2UgaWYgKDE2OC43NSA8PSBkICYmIGQgPCAxOTEuMjUpIHtcbiAgICByZXR1cm4gXCJTXCI7XG4gIH0gZWxzZSBpZiAoMTkxLjI1IDw9IGQgJiYgZCA8IDIxMy43NSkge1xuICAgIHJldHVybiBcIlNTV1wiO1xuICB9IGVsc2UgaWYgKDIxMy43NSA8PSBkICYmIGQgPCAyMzYuMjUpIHtcbiAgICByZXR1cm4gXCJTV1wiO1xuICB9IGVsc2UgaWYgKDIzNi4yNSA8PSBkICYmIGQgPCAyNTguNzUpIHtcbiAgICByZXR1cm4gXCJXU1dcIjtcbiAgfSBlbHNlIGlmICgyNTguNzUgPD0gZCAmJiBkIDwgMjgxLjI1KSB7XG4gICAgcmV0dXJuIFwiV1wiO1xuICB9IGVsc2UgaWYgKDI4MS4yNSA8PSBkICYmIGQgPCAzMDMuNzUpIHtcbiAgICByZXR1cm4gXCJXTldcIjtcbiAgfSBlbHNlIGlmICgzMDMuNzUgPD0gZCAmJiBkIDwgMzI2LjI1KSB7XG4gICAgcmV0dXJuIFwiTldcIjtcbiAgfSBlbHNlIGlmICgzMjYuMjUgPD0gZCAmJiBkIDwgMzQ4Ljc1KSB7XG4gICAgcmV0dXJuIFwiTk5XXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTlwiO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHdpbmREaXJlY3Rpb24gfSBmcm9tIFwiLi93aW5kRGlyXCI7XG5cbi8vIGNvbnNvbGUubG9nKHdpbmREaXJlY3Rpb24oMzA5KSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihsb2NhdGlvbiA9IFwiTG9uZG9uXCIpIHtcbiAgY29uc3QgY2l0eSA9IGxvY2F0aW9uIHx8IFwiTG9uZG9uXCI7XG5cbiAgY29uc3QgYmFzZVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9ZjI3NzA0NTJiY2I4NDJiMjA0MjVhNmQ3YTY0MTNiOWVgO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVXJsKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbi8vIGZldGNoV2VhdGhlcihcIlNhbnRhIFJvc2EsIFVTXCIpO1xuXG5mdW5jdGlvbiBwYXJzZVdlYXRoZXIoZGF0YSkge1xuICBjb25zdCBjaXR5ID0gZGF0YS5uYW1lO1xuICBjb25zdCBjb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcbiAgY29uc3QgdGVtcCA9IGRhdGEubWFpbi50ZW1wO1xuICBjb25zdCBtYXhUZW1wID0gZGF0YS5tYWluLnRlbXBfbWF4O1xuICBjb25zdCBtaW5UZW1wID0gZGF0YS5tYWluLnRlbXBfbWluO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHsgY2l0eSwgY291bnRyeSwgdGVtcCwgbWF4VGVtcCwgbWluVGVtcCwgZGVzY3JpcHRpb24gfTtcbn1cblxuKGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKCkge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5XCIpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcblxuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5ID0gc2VhcmNoLmNpdHkudmFsdWU7XG4gICAgc2V0RGlzcGxheShhd2FpdCBnZXREYXRhKGNpdHkpKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgY29uc3QgZGF0YSA9IGZldGNoV2VhdGhlcihjaXR5KS50aGVuKChyZXNwb25zZSkgPT4gcGFyc2VXZWF0aGVyKHJlc3BvbnNlKSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXREaXNwbGF5KGF3YWl0IGdldERhdGEoXCJMb25kb25cIikpO1xuXG4gIGZ1bmN0aW9uIHNldERpc3BsYXkoZGF0YSkge1xuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gYCR7ZGF0YS5jaXR5fSwgJHtkYXRhLmNvdW50cnl9XG4gICAgVGVtcGVyYXR1cmU6ICR7ZGF0YS50ZW1wfVxuICAgIExvdzogJHtkYXRhLm1pblRlbXB9IEhpZ2g6ICR7ZGF0YS5tYXhUZW1wfVxuICAgICR7ZGF0YS5kZXNjcmlwdGlvbn1gO1xuICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
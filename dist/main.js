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


console.log((0,_windDir__WEBPACK_IMPORTED_MODULE_0__.windDirection)(256));

async function fetchWeather(location = "London") {
  const city = location || "London";

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f2770452bcb842b20425a6d7a6413b9e`;

  const response = await fetch(baseUrl);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

fetchWeather("San Francisco, CA, US");

function parseWeather(data) {
  const city = data.name;
  const temp = data.main.temp;
  const maxTemp = data.main.temp_max;
  const minTemp = data.main.temp_min;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUMsWUFBWSx1REFBYTs7QUFFekI7QUFDQTs7QUFFQSx1RUFBdUUsS0FBSzs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dpbmREaXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHdpbmREaXJlY3Rpb24oZCkge1xuICBkID0gZCAlIDM2MDtcblxuICBpZiAoMTEuMjUgPD0gZCAmJiBkIDwgMzMuNzUpIHtcbiAgICByZXR1cm4gXCJOTkVcIjtcbiAgfSBlbHNlIGlmICgzMy43NSA8PSBkICYmIGQgPCA1Ni4yNSkge1xuICAgIHJldHVybiBcIk5FXCI7XG4gIH0gZWxzZSBpZiAoNTYuMjUgPD0gZCAmJiBkIDwgNzguNzUpIHtcbiAgICByZXR1cm4gXCJFTkVcIjtcbiAgfSBlbHNlIGlmICg3OC43NSA8PSBkICYmIGQgPCAxMDEuMjUpIHtcbiAgICByZXR1cm4gXCJFXCI7XG4gIH0gZWxzZSBpZiAoMTAxLjI1IDw9IGQgJiYgZCA8IDEyMy43NSkge1xuICAgIHJldHVybiBcIkVTRVwiO1xuICB9IGVsc2UgaWYgKDEyMy43NSA8PSBkICYmIGQgPCAxNDYuMjUpIHtcbiAgICByZXR1cm4gXCJTRVwiO1xuICB9IGVsc2UgaWYgKDE0Ni4yNSA8PSBkICYmIGQgPCAxNjguNzUpIHtcbiAgICByZXR1cm4gXCJTU0VcIjtcbiAgfSBlbHNlIGlmICgxNjguNzUgPD0gZCAmJiBkIDwgMTkxLjI1KSB7XG4gICAgcmV0dXJuIFwiU1wiO1xuICB9IGVsc2UgaWYgKDE5MS4yNSA8PSBkICYmIGQgPCAyMTMuNzUpIHtcbiAgICByZXR1cm4gXCJTU1dcIjtcbiAgfSBlbHNlIGlmICgyMTMuNzUgPD0gZCAmJiBkIDwgMjM2LjI1KSB7XG4gICAgcmV0dXJuIFwiU1dcIjtcbiAgfSBlbHNlIGlmICgyMzYuMjUgPD0gZCAmJiBkIDwgMjU4Ljc1KSB7XG4gICAgcmV0dXJuIFwiV1NXXCI7XG4gIH0gZWxzZSBpZiAoMjU4Ljc1IDw9IGQgJiYgZCA8IDI4MS4yNSkge1xuICAgIHJldHVybiBcIldcIjtcbiAgfSBlbHNlIGlmICgyODEuMjUgPD0gZCAmJiBkIDwgMzAzLjc1KSB7XG4gICAgcmV0dXJuIFwiV05XXCI7XG4gIH0gZWxzZSBpZiAoMzAzLjc1IDw9IGQgJiYgZCA8IDMyNi4yNSkge1xuICAgIHJldHVybiBcIk5XXCI7XG4gIH0gZWxzZSBpZiAoMzI2LjI1IDw9IGQgJiYgZCA8IDM0OC43NSkge1xuICAgIHJldHVybiBcIk5OV1wiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIk5cIjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3aW5kRGlyZWN0aW9uIH0gZnJvbSBcIi4vd2luZERpclwiO1xuXG5jb25zb2xlLmxvZyh3aW5kRGlyZWN0aW9uKDI1NikpO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIobG9jYXRpb24gPSBcIkxvbmRvblwiKSB7XG4gIGNvbnN0IGNpdHkgPSBsb2NhdGlvbiB8fCBcIkxvbmRvblwiO1xuXG4gIGNvbnN0IGJhc2VVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPWltcGVyaWFsJmFwcGlkPWYyNzcwNDUyYmNiODQyYjIwNDI1YTZkN2E2NDEzYjllYDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVcmwpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmZldGNoV2VhdGhlcihcIlNhbiBGcmFuY2lzY28sIENBLCBVU1wiKTtcblxuZnVuY3Rpb24gcGFyc2VXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgY2l0eSA9IGRhdGEubmFtZTtcbiAgY29uc3QgdGVtcCA9IGRhdGEubWFpbi50ZW1wO1xuICBjb25zdCBtYXhUZW1wID0gZGF0YS5tYWluLnRlbXBfbWF4O1xuICBjb25zdCBtaW5UZW1wID0gZGF0YS5tYWluLnRlbXBfbWluO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
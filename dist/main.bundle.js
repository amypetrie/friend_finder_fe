/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// const baseUrl = 'http://localhost:3000/'
const baseUrl = 'https://friend-finder-1808.herokuapp.com/';
window.onload = getDailyPet();
window.onload = document.getElementById("search-button").addEventListener('click', searchButtonMethod);

function getDailyPet() {
  var uri = 'api/v1/daily_pet';
  var requestUrl = baseUrl + uri;
  const requestResponse = $.ajax({
    url: `${requestUrl}`,
    type: 'get',
    contentType: 'application/json',
    dataType: 'json',
    success: function (res) {
      document.images.namedItem('daily-picture').src = res["data"]["attributes"]["picture_url"];
      document.getElementById("daily-name").innerHTML = res["data"]["attributes"]["name"];
      document.getElementById("daily-location").innerHTML = res["data"]["attributes"]["location"];
      document.getElementById("daily-description").innerHTML = res["data"]["attributes"]["description"];
    },
    error: function (res) {
      console.log("Error");
    }
  });
}

function searchButtonMethod() {
  searchPets(populateSearchResults);
}

function searchPets(callback) {
  var uri = 'api/v1/search';
  var requestUrl = baseUrl + uri;
  const requestResponse = $.ajax({
    url: `${requestUrl}`,
    type: 'get',
    data: {
      location: "chicago,il"
    },
    contentType: 'application/json',
    dataType: 'json',
    success: function (res) {
      console.log(res);
      callback(res);
    },
    error: function (res) {
      console.log("Error");
    }
  });
}

function populateSearchResults(search_data) {
  console.log("hey");
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnZXREYWlseVBldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VhcmNoQnV0dG9uTWV0aG9kIiwidXJpIiwicmVxdWVzdFVybCIsInJlcXVlc3RSZXNwb25zZSIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiaW1hZ2VzIiwibmFtZWRJdGVtIiwic3JjIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoUGV0cyIsInBvcHVsYXRlU2VhcmNoUmVzdWx0cyIsImNhbGxiYWNrIiwiZGF0YSIsImxvY2F0aW9uIiwic2VhcmNoX2RhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLE1BQU1BLE9BQU8sR0FBRywyQ0FBaEI7QUFDQUMsTUFBTSxDQUFDQyxNQUFQLEdBQWdCQyxXQUFXLEVBQTNCO0FBQ0FGLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkUsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxnQkFBekMsQ0FBMEQsT0FBMUQsRUFBbUVDLGtCQUFuRSxDQUFoQjs7QUFFQSxTQUFTSixXQUFULEdBQXNCO0FBQ3BCLE1BQUlLLEdBQUcsR0FBRyxrQkFBVjtBQUNBLE1BQUlDLFVBQVUsR0FBR1QsT0FBTyxHQUFHUSxHQUEzQjtBQUNBLFFBQU1FLGVBQWUsR0FBR0MsQ0FBQyxDQUFDQyxJQUFGLENBQ007QUFBQ0MsT0FBRyxFQUFHLEdBQUVKLFVBQVcsRUFBcEI7QUFDQUssUUFBSSxFQUFFLEtBRE47QUFFQUMsZUFBVyxFQUFFLGtCQUZiO0FBR0FDLFlBQVEsRUFBRSxNQUhWO0FBSUFDLFdBQU8sRUFBRSxVQUFTQyxHQUFULEVBQWE7QUFDcEJkLGNBQVEsQ0FBQ2UsTUFBVCxDQUFnQkMsU0FBaEIsQ0FBMEIsZUFBMUIsRUFBMkNDLEdBQTNDLEdBQWlESCxHQUFHLENBQUMsTUFBRCxDQUFILENBQVksWUFBWixFQUEwQixhQUExQixDQUFqRDtBQUNBZCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NpQixTQUF0QyxHQUFrREosR0FBRyxDQUFDLE1BQUQsQ0FBSCxDQUFZLFlBQVosRUFBMEIsTUFBMUIsQ0FBbEQ7QUFDQWQsY0FBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ2lCLFNBQTFDLEdBQXNESixHQUFHLENBQUMsTUFBRCxDQUFILENBQVksWUFBWixFQUEwQixVQUExQixDQUF0RDtBQUNBZCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDaUIsU0FBN0MsR0FBeURKLEdBQUcsQ0FBQyxNQUFELENBQUgsQ0FBWSxZQUFaLEVBQTBCLGFBQTFCLENBQXpEO0FBQ0QsS0FURDtBQVVBSyxTQUFLLEVBQUUsVUFBU0wsR0FBVCxFQUFhO0FBQ2pCTSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Y7QUFaRCxHQUROLENBQXhCO0FBZUQ7O0FBQ0QsU0FBU2xCLGtCQUFULEdBQTZCO0FBQzNCbUIsWUFBVSxDQUFDQyxxQkFBRCxDQUFWO0FBQ0Q7O0FBQ0QsU0FBU0QsVUFBVCxDQUFvQkUsUUFBcEIsRUFBNkI7QUFDM0IsTUFBSXBCLEdBQUcsR0FBRyxlQUFWO0FBQ0EsTUFBSUMsVUFBVSxHQUFHVCxPQUFPLEdBQUdRLEdBQTNCO0FBQ0EsUUFBTUUsZUFBZSxHQUFHQyxDQUFDLENBQUNDLElBQUYsQ0FDTTtBQUFDQyxPQUFHLEVBQUcsR0FBRUosVUFBVyxFQUFwQjtBQUNBSyxRQUFJLEVBQUUsS0FETjtBQUVBZSxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FGTjtBQUtBZixlQUFXLEVBQUUsa0JBTGI7QUFNQUMsWUFBUSxFQUFFLE1BTlY7QUFPQUMsV0FBTyxFQUFFLFVBQVNDLEdBQVQsRUFBYTtBQUNwQk0sYUFBTyxDQUFDQyxHQUFSLENBQVlQLEdBQVo7QUFDQVUsY0FBUSxDQUFDVixHQUFELENBQVI7QUFDRCxLQVZEO0FBV0FLLFNBQUssRUFBRSxVQUFTTCxHQUFULEVBQWE7QUFDakJNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDRjtBQWJELEdBRE4sQ0FBeEI7QUFnQkQ7O0FBRUQsU0FBU0UscUJBQVQsQ0FBK0JJLFdBQS9CLEVBQTJDO0FBQ3pDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy8gY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJ1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2ZyaWVuZC1maW5kZXItMTgwOC5oZXJva3VhcHAuY29tLydcbndpbmRvdy5vbmxvYWQgPSBnZXREYWlseVBldCgpXG53aW5kb3cub25sb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoQnV0dG9uTWV0aG9kKVxuXG5mdW5jdGlvbiBnZXREYWlseVBldCgpe1xuICB2YXIgdXJpID0gJ2FwaS92MS9kYWlseV9wZXQnXG4gIHZhciByZXF1ZXN0VXJsID0gYmFzZVVybCArIHVyaVxuICBjb25zdCByZXF1ZXN0UmVzcG9uc2UgPSAkLmFqYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cmw6IGAke3JlcXVlc3RVcmx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuaW1hZ2VzLm5hbWVkSXRlbSgnZGFpbHktcGljdHVyZScpLnNyYyA9IHJlc1tcImRhdGFcIl1bXCJhdHRyaWJ1dGVzXCJdW1wicGljdHVyZV91cmxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYWlseS1uYW1lXCIpLmlubmVySFRNTCA9IHJlc1tcImRhdGFcIl1bXCJhdHRyaWJ1dGVzXCJdW1wibmFtZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFpbHktbG9jYXRpb25cIikuaW5uZXJIVE1MID0gcmVzW1wiZGF0YVwiXVtcImF0dHJpYnV0ZXNcIl1bXCJsb2NhdGlvblwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFpbHktZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gcmVzW1wiZGF0YVwiXVtcImF0dHJpYnV0ZXNcIl1bXCJkZXNjcmlwdGlvblwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG59XG5mdW5jdGlvbiBzZWFyY2hCdXR0b25NZXRob2QoKXtcbiAgc2VhcmNoUGV0cyhwb3B1bGF0ZVNlYXJjaFJlc3VsdHMpO1xufVxuZnVuY3Rpb24gc2VhcmNoUGV0cyhjYWxsYmFjayl7XG4gIHZhciB1cmkgPSAnYXBpL3YxL3NlYXJjaCdcbiAgdmFyIHJlcXVlc3RVcmwgPSBiYXNlVXJsICsgdXJpXG4gIGNvbnN0IHJlcXVlc3RSZXNwb25zZSA9ICQuYWpheChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VybDogYCR7cmVxdWVzdFVybH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcImNoaWNhZ28saWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTZWFyY2hSZXN1bHRzKHNlYXJjaF9kYXRhKXtcbiAgY29uc29sZS5sb2coXCJoZXlcIik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
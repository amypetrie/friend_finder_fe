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
const baseUrl = 'https://friend-finder-1808-api.herokuapp.com/';
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
  var gender = document.querySelector('input[name = "gender"]:checked').value;
  var animal = document.querySelector('input[name = "animal"]:checked').value;
  var location = document.getElementById("form-location").value;
  const requestResponse = $.ajax({
    url: `${requestUrl}`,
    type: 'get',
    data: {
      location: `${location}`,
      sex: `${gender}`,
      animal: `${animal}`
    },
    contentType: 'application/json',
    dataType: 'json',
    success: function (res) {
      let results = res["data"]; // let results = JSON.parse(res.responseText);

      callback(results);
    },
    error: function (res) {
      console.log("Error");
    }
  });
}

function populateSearchResults(search_data) {
  var petResults = document.getElementById("allResults");
  search_data.forEach(function (e) {
    var petInfo = document.createElement("li");
    var petLocation = document.createElement("li");
    var petContact = document.createElement("li");
    var petResult = document.createElement("ul");
    petInfo.innerHTML = `Name: ${e["attributes"]["name"]} (${e["attributes"]["animal_type"]} / Sex: ${e["attributes"]["sex"]})`;
    petLocation.innerHTML = `Location: ${e["attributes"]["location"]}`;
    petContact.innerHTML = `Contact Email: ${e["attributes"]["contact_email"]}`;
    petResult.append(petInfo);
    petResult.append(petLocation);
    petResult.append(petContact);
    petResults.append(petResult);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnZXREYWlseVBldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VhcmNoQnV0dG9uTWV0aG9kIiwidXJpIiwicmVxdWVzdFVybCIsInJlcXVlc3RSZXNwb25zZSIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiaW1hZ2VzIiwibmFtZWRJdGVtIiwic3JjIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoUGV0cyIsInBvcHVsYXRlU2VhcmNoUmVzdWx0cyIsImNhbGxiYWNrIiwiZ2VuZGVyIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiYW5pbWFsIiwibG9jYXRpb24iLCJkYXRhIiwic2V4IiwicmVzdWx0cyIsInNlYXJjaF9kYXRhIiwicGV0UmVzdWx0cyIsImZvckVhY2giLCJlIiwicGV0SW5mbyIsImNyZWF0ZUVsZW1lbnQiLCJwZXRMb2NhdGlvbiIsInBldENvbnRhY3QiLCJwZXRSZXN1bHQiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Z0IsZUFBaEIsQ0FBaUMsRUFBMUU7QUFFQUssYUFBUyxDQUFDQyxNQUFWLENBQWlCTCxPQUFqQjtBQUNBSSxhQUFTLENBQUNDLE1BQVYsQ0FBaUJILFdBQWpCO0FBQ0FFLGFBQVMsQ0FBQ0MsTUFBVixDQUFpQkYsVUFBakI7QUFFQU4sY0FBVSxDQUFDUSxNQUFYLENBQWtCRCxTQUFsQjtBQUNELEdBZkQ7QUFnQkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy8gY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJ1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2ZyaWVuZC1maW5kZXItMTgwOC1hcGkuaGVyb2t1YXBwLmNvbS8nXG53aW5kb3cub25sb2FkID0gZ2V0RGFpbHlQZXQoKVxud2luZG93Lm9ubG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaEJ1dHRvbk1ldGhvZClcblxuZnVuY3Rpb24gZ2V0RGFpbHlQZXQoKXtcbiAgdmFyIHVyaSA9ICdhcGkvdjEvZGFpbHlfcGV0J1xuICB2YXIgcmVxdWVzdFVybCA9IGJhc2VVcmwgKyB1cmlcbiAgY29uc3QgcmVxdWVzdFJlc3BvbnNlID0gJC5hamF4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXJsOiBgJHtyZXF1ZXN0VXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmltYWdlcy5uYW1lZEl0ZW0oJ2RhaWx5LXBpY3R1cmUnKS5zcmMgPSByZXNbXCJkYXRhXCJdW1wiYXR0cmlidXRlc1wiXVtcInBpY3R1cmVfdXJsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFpbHktbmFtZVwiKS5pbm5lckhUTUwgPSByZXNbXCJkYXRhXCJdW1wiYXR0cmlidXRlc1wiXVtcIm5hbWVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhaWx5LWxvY2F0aW9uXCIpLmlubmVySFRNTCA9IHJlc1tcImRhdGFcIl1bXCJhdHRyaWJ1dGVzXCJdW1wibG9jYXRpb25cIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhaWx5LWRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IHJlc1tcImRhdGFcIl1bXCJhdHRyaWJ1dGVzXCJdW1wiZGVzY3JpcHRpb25cIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xufVxuZnVuY3Rpb24gc2VhcmNoQnV0dG9uTWV0aG9kKCl7XG4gIHNlYXJjaFBldHMocG9wdWxhdGVTZWFyY2hSZXN1bHRzKTtcbn1cbmZ1bmN0aW9uIHNlYXJjaFBldHMoY2FsbGJhY2spe1xuICB2YXIgdXJpID0gJ2FwaS92MS9zZWFyY2gnXG4gIHZhciByZXF1ZXN0VXJsID0gYmFzZVVybCArIHVyaVxuICB2YXIgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZSA9IFwiZ2VuZGVyXCJdOmNoZWNrZWQnKS52YWx1ZVxuICB2YXIgYW5pbWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZSA9IFwiYW5pbWFsXCJdOmNoZWNrZWQnKS52YWx1ZVxuICB2YXIgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbG9jYXRpb25cIikudmFsdWVcbiAgY29uc3QgcmVxdWVzdFJlc3BvbnNlID0gJC5hamF4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXJsOiBgJHtyZXF1ZXN0VXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGAke2xvY2F0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V4OiBgJHtnZW5kZXJ9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYWw6IGAke2FuaW1hbH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSByZXNbXCJkYXRhXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHJlc3VsdHMgPSBKU09OLnBhcnNlKHJlcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU2VhcmNoUmVzdWx0cyhzZWFyY2hfZGF0YSl7XG4gIHZhciBwZXRSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxSZXN1bHRzXCIpXG5cbiAgc2VhcmNoX2RhdGEuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICB2YXIgcGV0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIHZhciBwZXRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIHZhciBwZXRDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgdmFyIHBldFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuXG4gICAgcGV0SW5mby5pbm5lckhUTUwgPSBgTmFtZTogJHtlW1wiYXR0cmlidXRlc1wiXVtcIm5hbWVcIl19ICgke2VbXCJhdHRyaWJ1dGVzXCJdW1wiYW5pbWFsX3R5cGVcIl19IC8gU2V4OiAke2VbXCJhdHRyaWJ1dGVzXCJdW1wic2V4XCJdfSlgXG4gICAgcGV0TG9jYXRpb24uaW5uZXJIVE1MID0gYExvY2F0aW9uOiAke2VbXCJhdHRyaWJ1dGVzXCJdW1wibG9jYXRpb25cIl19YFxuICAgIHBldENvbnRhY3QuaW5uZXJIVE1MID0gYENvbnRhY3QgRW1haWw6ICR7ZVtcImF0dHJpYnV0ZXNcIl1bXCJjb250YWN0X2VtYWlsXCJdfWBcblxuICAgIHBldFJlc3VsdC5hcHBlbmQocGV0SW5mbylcbiAgICBwZXRSZXN1bHQuYXBwZW5kKHBldExvY2F0aW9uKVxuICAgIHBldFJlc3VsdC5hcHBlbmQocGV0Q29udGFjdClcblxuICAgIHBldFJlc3VsdHMuYXBwZW5kKHBldFJlc3VsdClcbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
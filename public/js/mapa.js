/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mapa.js":
/*!************************!*\
  !*** ./src/js/mapa.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function() {\r\n\r\n    const lat = document.querySelector(\"#lat\").value || -30.042410548413173;\r\n    const lng = document.querySelector(\"#lng\").value || -51.19064480171507;\r\n    const mapa = L.map('mapa').setView([lat, lng ], 9);\r\n    let marker;\r\n    // utilizar Provider y Geocoder\r\n    const geocodeService = L.esri.Geocoding.geocodeService();\r\n\r\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n        attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n    }).addTo(mapa);\r\n\r\n    // colocar el pin \r\n    marker = new L.marker([lat, lng], {\r\n        draggable: true,\r\n        autoPan: true\r\n    }).addTo(mapa)\r\n    // detectar movimiento del pin\r\n    marker.on(\"moveend\", function( event ) {\r\n        marker = event.target;\r\n\r\n        const posicion = marker.getLatLng();\r\n        //agregamos la posicion del pin a ubicacion del mapa\r\n        mapa.panTo( new L.LatLng(posicion.lat, posicion.lng));\r\n        //mostrar el nombre de la calle al soltar el pin\r\n        geocodeService.reverse().latlng(posicion, 13).run(function(error, resultado) {\r\n            // console.log(resultado)\r\n            marker.bindPopup(resultado.address.LongLabel);\r\n            // llenar los campos con los datos\r\n            document.querySelector(\".calle\").textContent = resultado?.address?.Address ?? \"\";\r\n            document.querySelector(\"#calle\").value = resultado?.address?.Address ?? \"\";\r\n            document.querySelector(\"#lat\").value = resultado?.latlng?.lat ?? \"\";\r\n            document.querySelector(\"#lng\").value = resultado?.latlng?.lng ?? \"\";\r\n        })\r\n    })\r\n\r\n})()\n\n//# sourceURL=webpack://bienes-raices/./src/js/mapa.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/mapa.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
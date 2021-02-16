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

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildList\": () => (/* binding */ buildList)\n/* harmony export */ });\n\n\n\nconst buildElement = function (element, style, content2, idName) {\n    \n    const newElement = document.createElement(element);\n    newElement.textContent = content2\n    newElement.id = idName;\n    newElement.classList.add(style)\n\n    return newElement\n}\n\nconst button = buildElement(\"button\", \"buttonStyle\", \"submit\", \"buttonId\")\n\nconst content = document.getElementById(\"content\")\n\nconst inputBox = document.createElement(\"input\")\n\n\n\ninputBox.setAttribute(\"id\", \"inputId\");\n\ninputBox.classList.add(\"inputStyle\")\n\ncontent.appendChild(button)\ncontent.appendChild(inputBox)\n\n\n\nconst buildList = function(event) {\n   \n    const newElement = document.createElement(\"input\");\n  \n    newElement.type = \"checkbox\"\n   var description = document.createTextNode(inputBox.value);\n    newElement.value = \"pair\";   \n    newElement.classList.add(\"listStyle\")\n    \n\n    console.log(inputBox)\n    console.log(inputBox.textContent)\n    console.log(inputBox.value)\n\n    const container = buildElement(\"div\", \"navConStyle\", null, \"navId\")\n    const attachedlist = content.appendChild(container)\n    attachedlist.appendChild(newElement)\n   attachedlist.appendChild(description)\n  inputBox.value = \"\"\n\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoList/./src/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n\n\n\n\n\n\n const button = document.getElementById(\"buttonId\")\nbutton.addEventListener(\"click\", _createElement_js__WEBPACK_IMPORTED_MODULE_0__.buildList)\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoList/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/statistics.js":
/*!**********************************!*\
  !*** ./src/assets/statistics.js ***!
  \**********************************/
/***/ (() => {

eval("function createStatistics() {\r\n  let counter = 0;\r\nlet isDestroyed = false;\r\n\r\n  const listener = () => ++counter;\r\n  document.addEventListener('click', listener);\r\n  return {\r\n    destroy() {\r\n      document.removeEventListener('click', listener);\r\n      isDestroyed = true;\r\n      return 'Destroyed succsessfully'\r\n    },\r\n\r\n    getClicks() {\r\n      if (isDestroyed) return 'Statistics was destroyed'\r\n      return counter\r\n    }\r\n  }\r\n}\r\n\r\nwindow.statistics = createStatistics();\n\n//# sourceURL=webpack://webpack-training/./src/assets/statistics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/statistics.js"]();
/******/ 	
/******/ })()
;
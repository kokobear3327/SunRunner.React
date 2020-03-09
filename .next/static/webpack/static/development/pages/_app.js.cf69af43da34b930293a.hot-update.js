webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNews */ "./src/reducers/isNews.js");
/* harmony import */ var _isDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDashboard */ "./src/reducers/isDashboard.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _isNextTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNextTemplate */ "./src/reducers/isNextTemplate.js");




const allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  isNews: _isNews__WEBPACK_IMPORTED_MODULE_0__["default"],
  isDashboard: _isDashboard__WEBPACK_IMPORTED_MODULE_1__["default"],
  isNextTemplate: _isNextTemplate__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (allReducers);

/***/ }),

/***/ "./src/reducers/isNextTemplate.js":
/*!****************************************!*\
  !*** ./src/reducers/isNextTemplate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNextTemplate = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_NEXT_TEMPLATE':
      return state = true;

    case 'CLICKED_NEXT_TEMPLATE2':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNextTemplate);

/***/ })

})
//# sourceMappingURL=_app.js.cf69af43da34b930293a.hot-update.js.map
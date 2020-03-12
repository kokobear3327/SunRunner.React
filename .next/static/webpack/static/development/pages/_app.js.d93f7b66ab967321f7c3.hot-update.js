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
/* harmony import */ var _isNextTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNextTemplate */ "./src/reducers/isNextTemplate.js");
/* harmony import */ var _isPreviousTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isPreviousTemplate */ "./src/reducers/isPreviousTemplate.js");
/* harmony import */ var _isBalloon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isBalloon.js */ "./src/reducers/isBalloon.js");
/* harmony import */ var _isNewsBalloon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isNewsBalloon */ "./src/reducers/isNewsBalloon.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");







const allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_6__["combineReducers"])({
  isNews: _isNews__WEBPACK_IMPORTED_MODULE_0__["default"],
  isDashboard: _isDashboard__WEBPACK_IMPORTED_MODULE_1__["default"],
  isNextTemplate: _isNextTemplate__WEBPACK_IMPORTED_MODULE_2__["default"],
  isPreviousTemplate: _isPreviousTemplate__WEBPACK_IMPORTED_MODULE_3__["default"],
  isBalloon: _isBalloon_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  isNewsBalloon: _isNewsBalloon__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (allReducers);

/***/ }),

/***/ "./src/reducers/isNewsBalloon.js":
/*!***************************************!*\
  !*** ./src/reducers/isNewsBalloon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNewsBalloon = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_NEWS_BALLOON':
      return state = true;

    case 'CLICKED_NEWS_BALLOON2':
      return state = false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNewsBalloon);

/***/ })

})
//# sourceMappingURL=_app.js.d93f7b66ab967321f7c3.hot-update.js.map
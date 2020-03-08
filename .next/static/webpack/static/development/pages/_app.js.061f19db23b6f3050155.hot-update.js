webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isDashboard.js":
/*!*************************************!*\
  !*** ./src/reducers/isDashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isDashboard = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_DASHBOARD':
      return state = true;

    case 'MOUSED_OFF':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isDashboard);

/***/ })

})
//# sourceMappingURL=_app.js.061f19db23b6f3050155.hot-update.js.map
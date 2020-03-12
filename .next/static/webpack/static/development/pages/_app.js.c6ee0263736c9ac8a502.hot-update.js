webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isBalloon.js":
/*!***********************************!*\
  !*** ./src/reducers/isBalloon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isBalloon = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_BALLOON':
      return state = true;

    case 'CLICKED_BALLOON2':
      return state = false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isBalloon);

/***/ })

})
//# sourceMappingURL=_app.js.c6ee0263736c9ac8a502.hot-update.js.map
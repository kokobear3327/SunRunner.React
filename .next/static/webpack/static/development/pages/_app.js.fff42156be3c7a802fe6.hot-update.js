webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isNewsContent.js":
/*!***************************************!*\
  !*** ./src/reducers/isNewsContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNewsContent = (state = "-", action) => {
  switch (action.type) {
    case 'IS_NEWS_CONTENT':
      let inputValue = action.inputTex;
      state = inputValue;
      return state;

    case 'IS_NEWS_CONTENT2':
      return state = false;

    default:
      return 2;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNewsContent);

/***/ })

})
//# sourceMappingURL=_app.js.fff42156be3c7a802fe6.hot-update.js.map
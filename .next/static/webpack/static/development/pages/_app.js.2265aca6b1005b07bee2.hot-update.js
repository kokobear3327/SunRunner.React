webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isNewsContent.js":
/*!***************************************!*\
  !*** ./src/reducers/isNewsContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNewsContent = (state = false, action) => {
  switch (action.type) {
    case 'IS_NEWS_CONTENT':
      let inputValue = action.inputText;
      return state = inputValue;

    case 'IS_NEWS_ECONTENT':
      return state = false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNewsContent);

/***/ })

})
//# sourceMappingURL=_app.js.2265aca6b1005b07bee2.hot-update.js.map
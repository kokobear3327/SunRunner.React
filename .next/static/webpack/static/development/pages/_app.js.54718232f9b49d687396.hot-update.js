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

    case 'IS_NEWS_ECONTENT2':
      return state = false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNewsContent);

/***/ })

})
//# sourceMappingURL=_app.js.54718232f9b49d687396.hot-update.js.map
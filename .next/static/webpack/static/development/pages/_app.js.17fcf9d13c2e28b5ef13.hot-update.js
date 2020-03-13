webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isNewsContent.js":
/*!***************************************!*\
  !*** ./src/reducers/isNewsContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNewsContent = (state = "", action) => {
  switch (action.type) {
    case 'IS_NEWS_CONTENT':
      let inputValue = action.newsContent;
      state = inputValue;
      return state;

    case 'IS_NEWS_CONTENT2':
      return state;

    default:
      return 2;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNewsContent); // Action:
// export const isNewsContent = (inputText) => {
//     return 
//         type: 'IS_NEWS_CONTENT',
//         inputText: inputText
//     }
// }

/***/ })

})
//# sourceMappingURL=_app.js.17fcf9d13c2e28b5ef13.hot-update.js.map
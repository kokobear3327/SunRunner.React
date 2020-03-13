webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isNewsContent.js":
/*!***************************************!*\
  !*** ./src/reducers/isNewsContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNewsContent = (state = "hey", action) => {
  switch (action.type) {
    case 'IS_NEWS_CONTENT':
      console.log("IsNewContent hit");
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
// const isNewsContent = (state = "", action) => {
//     switch (action.type) {
//         case 'IS_NEWS_CONTENT':
//             console.log("IsNewContent hit");
//             let inputValue = action.newsContent;
//             state = inputValue;    
//             return state;
//         case 'IS_NEWS_CONTENT2':
//             return state
//         default: 
//             return 2;
//     }
// };
// export default isNewsContent;

/***/ })

})
//# sourceMappingURL=_app.js.86e44f7a227944a9976a.hot-update.js.map
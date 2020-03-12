webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: mousedOver, mousedOff, nextTemplateClicked, previousTemplateClicked, balloonClicked, newsBalloonClicked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedOver", function() { return mousedOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedOff", function() { return mousedOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTemplateClicked", function() { return nextTemplateClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousTemplateClicked", function() { return previousTemplateClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balloonClicked", function() { return balloonClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsBalloonClicked", function() { return newsBalloonClicked; });
const mousedOver = button => {
  switch (button) {
    case "dashboard":
      return {
        type: 'MOUSED_OVER_DASHBOARD'
      };

    case "news":
      return {
        type: 'MOUSED_OVER_NEWS'
      };

    default:
      return true;
  }
};
const mousedOff = button => {
  switch (button) {
    case "news":
      return {
        type: "MOUSED_OFF"
      };

    case "dashboard":
      return {
        type: "MOUSED_OFF"
      };

    default:
      return true;
  }
};
const nextTemplateClicked = () => {
  return {
    type: 'CLICKED_NEXT_TEMPLATE'
  };
};
const previousTemplateClicked = () => {
  return {
    type: 'CLICKED_PREVIOUS_TEMPLATE'
  };
};
const balloonClicked = () => {
  return {
    type: 'CLICKED_BALLOON'
  };
};
const newsBalloonClicked = () => {
  return {
    type: 'CLICKED_NEWS_BALLOON'
  };
}; // export const mousedOff = (button) => {
//     switch (button) {
//     case "dashboard": 
//         return { type: 'MOUSED_OVER_DASHBOARD' }
//     case "news":
//         return { type: 'MOUSED_OVER_NEWS' }
//     default: 
//         return button
// }
// }

/***/ })

})
//# sourceMappingURL=index.js.19561af1f9eab9c4e9cc.hot-update.js.map
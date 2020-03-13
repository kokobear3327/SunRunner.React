webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: mousedOver, mousedOff, nextTemplateClicked, previousTemplateClicked, balloonClicked, newsBalloonClicked, isNewsEditing, isEditing, isNewsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedOver", function() { return mousedOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedOff", function() { return mousedOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTemplateClicked", function() { return nextTemplateClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousTemplateClicked", function() { return previousTemplateClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balloonClicked", function() { return balloonClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsBalloonClicked", function() { return newsBalloonClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewsEditing", function() { return isNewsEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditing", function() { return isEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewsContent", function() { return isNewsContent; });
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
};
const isNewsEditing = () => {
  return {
    type: "IS_NEWS_EDITING"
  };
};
const isEditing = button => {
  switch (button) {
    case "news":
      return "IS_NEWS_EDITING";

    default:
      return button;
  }
};
const isNewsContent = button => {
  switch (button) {
    case "newsContent":
      return {
        type: "IS_NEWS_CONTENT"
      };
  }
};

/***/ })

})
//# sourceMappingURL=index.js.ba62a2e7e435461df855.hot-update.js.map
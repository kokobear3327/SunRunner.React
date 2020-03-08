webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/shared/dashboard-button/dashboard-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/dashboard-button/dashboard-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-button.css */ "./src/shared/dashboard-button/dashboard-button.css");
/* harmony import */ var _dashboard_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dashboard_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // So you would add an onclick event where the router would take you to the route specified. 

function DashboardButton() {
  const worky = Object(react__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.isDashboard);
  console.log(worky);
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  useEffect(() => {
    let newsButton = document.querySelector(".news-button");
    newsButton.addEventListener("mouseover", () => {
      newsButton.classList.add("news-hovered");
      dispatch(mousedOver());
    });
  });
  return __jsx("div", {
    className: "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("button", {
    className: "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Dashboard"));
}

/* harmony default export */ __webpack_exports__["default"] = (DashboardButton);

/***/ })

})
//# sourceMappingURL=index.js.66fda9d23580711128ed.hot-update.js.map
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // So you would add an onclick event where the router would take you to the route specified. 

function DashboardButton() {
  const worky = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isDashboard);
  console.log(worky);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let dashboardButton = document.querySelector(".news-button");
    dashboardButton.addEventListener("mouseover", () => {
      dashboardButton.classList.add("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOver"])());
    });
  });
  return __jsx("div", {
    className: "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("button", {
    className: "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Dashboard"));
}

/* harmony default export */ __webpack_exports__["default"] = (DashboardButton);

/***/ })

})
//# sourceMappingURL=index.js.c2e6698f392ef52cc9e2.hot-update.js.map
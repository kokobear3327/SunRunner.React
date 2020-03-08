webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/shared/dashboard-button/dashboard-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/dashboard-button/dashboard-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // .dashboard-hovered {
//     cursor: none;
//     transform: scale(1.23);
// }

function DashboardButton() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const dashboard = "dashboard";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let dashboardButton = document.querySelector(".dashboard-button");
    dashboardButton.addEventListener("mouseover", () => {
      dashboardButton.classList.add("dashboard-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOver"])(dashboard));
    });
    dashboardButton.addEventListener("mouseleave", () => {
      dashboardButton.classList.remove("dashboard-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOff"])());
    });
  });

  const changeDashboard = () => {
    let dashboardButton = document.querySelector('.dashboard-button');
    dashboardButton.innerHTML = "Hey";
    dashboardButton.classList.remove("dashboard-hovered");
    let inputForDashboard = document.querySelector('.input-dashboard');
    inputForDashboard.style.display = "flex";
  };

  return __jsx("div", {
    className: "jsx-681608270" + " " + "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("input", {
    autoFocus: true,
    className: "jsx-681608270" + " " + "input-dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("h1", {
    onClick: changeDashboard,
    className: "jsx-681608270" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "681608270",
    __self: this
  }, ".dashboard-button-container.jsx-681608270{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dashboard-button.jsx-681608270{font-family:Montserrat;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.input-dashboard.jsx-681608270{display:none;position:absolute;bottom:2153px;left:667px;}.input-dashboard.jsx-681608270:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQSxBQUdrQixBQU1VLEFBbUJWLEFBUUYsWUFDZixDQVBzQixVQXBCSCxRQXFCRCxPQXBCSSxPQXFCUCxXQXBCTyxBQXNCdEIsa0JBOUJ1QixBQVNQLFlBQ0UsY0FDZSw2QkFDakIsWUFDQSxhQUMrRCxhQWJwRCwwREFjTSw2QkFDTyxZQWR4Qyx3QkFlNEIsZ0dBQ1ksZ0ZBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG1vdXNlZE92ZXIsIG1vdXNlZE9mZiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG4vLyAuZGFzaGJvYXJkLWhvdmVyZWQge1xuLy8gICAgIGN1cnNvcjogbm9uZTtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZEJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkID0gXCJkYXNoYm9hcmRcIjtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgZGFzaGJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXNoYm9hcmQtYnV0dG9uXCIpXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkYXNoYm9hcmQtaG92ZXJlZFwiKVxuICAgICAgICBkaXNwYXRjaChtb3VzZWRPdmVyKGRhc2hib2FyZCkpfSlcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXNoYm9hcmQtaG92ZXJlZFwiKVxuICAgICAgICBkaXNwYXRjaChtb3VzZWRPZmYoKSlcbiAgICB9KVxuICAgICAgfSk7XG4gICAgY29uc3QgY2hhbmdlRGFzaGJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGFzaGJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1idXR0b24nKTtcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmlubmVySFRNTCA9IFwiSGV5XCJcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXNoYm9hcmQtaG92ZXJlZFwiKVxuICAgICAgICBsZXQgaW5wdXRGb3JEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGFzaGJvYXJkJyk7XG4gICAgICAgIGlucHV0Rm9yRGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgYXV0b0ZvY3VzIGNsYXNzTmFtZT1cImlucHV0LWRhc2hib2FyZFwiPjwvaW5wdXQ+XG4gICAgICAgIDxoMSBvbkNsaWNrPXsgY2hhbmdlRGFzaGJvYXJkIH0gY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ1dHRvblwiPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcblxuYFxuLmRhc2hib2FyZC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTY0cHg7XG4gICAgYm90dG9tOiAyMDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cblxuXG4uaW5wdXQtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjE1M3B4O1xuICAgIGxlZnQ6IDY2N3B4O1xuXG59XG4uaW5wdXQtZGFzaGJvYXJkOmZvY3VzIHtcbiAgICBjb2xvcjpibGFjaztcbn1cbmBcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.63c1f48104faa261f254.hot-update.js.map
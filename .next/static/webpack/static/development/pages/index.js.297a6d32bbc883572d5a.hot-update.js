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

  const setValue = () => {
    let y = document.querySelector(".dashboard-button");
    let x = document.querySelector(".input-dashboard").value;
    y.innerHTML = x;
  };

  const changeDashboard = () => {
    let dashboardButton = document.querySelector('.dashboard-button');
    dashboardButton.classList.remove("dashboard-hovered");
    let inputForDashboard = document.querySelector('.input-dashboard');
    inputForDashboard.style.display = "flex";
  };

  return __jsx("div", {
    className: "jsx-698508924" + " " + "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("input", {
    autoFocus: true,
    value: "",
    onChange: setValue,
    className: "jsx-698508924" + " " + "input-dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("h1", {
    onClick: changeDashboard,
    className: "jsx-698508924" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "698508924",
    __self: this
  }, ".dashboard-button-container.jsx-698508924{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dashboard-button.jsx-698508924{font-family:Montserrat;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.input-dashboard.jsx-698508924{display:none;position:absolute;bottom:2153px;left:667px;}.input-dashboard.jsx-698508924:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDQSxBQUdrQixBQU1VLEFBbUJWLEFBT0YsWUFDZixDQVBzQixVQW5CSCxRQW9CRCxPQW5CSSxPQW9CUCxXQW5CTyxBQXFCdEIsa0JBN0J1QixBQVNQLFlBQ0UsY0FDZSw2QkFDakIsWUFDQSxhQUMrRCxhQWJwRCwwREFjTSw2QkFDTyxZQWR4Qyx3QkFlNEIsZ0dBQ1ksZ0ZBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG1vdXNlZE92ZXIsIG1vdXNlZE9mZiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG4vLyAuZGFzaGJvYXJkLWhvdmVyZWQge1xuLy8gICAgIGN1cnNvcjogbm9uZTtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZEJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkID0gXCJkYXNoYm9hcmRcIjtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgZGFzaGJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXNoYm9hcmQtYnV0dG9uXCIpXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkYXNoYm9hcmQtaG92ZXJlZFwiKVxuICAgICAgICBkaXNwYXRjaChtb3VzZWRPdmVyKGRhc2hib2FyZCkpfSlcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXNoYm9hcmQtaG92ZXJlZFwiKVxuICAgICAgICBkaXNwYXRjaChtb3VzZWRPZmYoKSlcbiAgICB9KVxuICAgICAgfSk7XG4gICAgY29uc3Qgc2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIGxldCB5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXNoYm9hcmQtYnV0dG9uXCIpO1xuICAgICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZGFzaGJvYXJkXCIpLnZhbHVlO1xuICAgICAgICB5LmlubmVySFRNTCA9IHhcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VEYXNoYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkYXNoYm9hcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFzaGJvYXJkLWJ1dHRvbicpO1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGxldCBpbnB1dEZvckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXNoYm9hcmQnKTtcbiAgICAgICAgaW5wdXRGb3JEYXNoYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCBhdXRvRm9jdXMgdmFsdWU9XCJcIiBjbGFzc05hbWU9XCJpbnB1dC1kYXNoYm9hcmRcIiBvbkNoYW5nZT17c2V0VmFsdWV9PjwvaW5wdXQ+XG4gICAgICAgIDxoMSBvbkNsaWNrPXsgY2hhbmdlRGFzaGJvYXJkIH0gY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ1dHRvblwiPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcblxuYFxuLmRhc2hib2FyZC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTY0cHg7XG4gICAgYm90dG9tOiAyMDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cblxuXG4uaW5wdXQtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIxNTNweDtcbiAgICBsZWZ0OiA2NjdweDtcblxufVxuLmlucHV0LWRhc2hib2FyZDpmb2N1cyB7XG4gICAgY29sb3I6YmxhY2s7XG59XG5gXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.297a6d32bbc883572d5a.hot-update.js.map
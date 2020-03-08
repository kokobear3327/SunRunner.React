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
// eventTarget.addEventListener("keydown", event => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }
//     // do something
//   });

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
    let inputForDashboard = document.querySelector('.input-dashboard');
    inputForDashboard.addEventListener(ke);
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
      lineNumber: 47
    },
    __self: this
  }, __jsx("input", {
    autoFocus: true,
    value: "",
    onChange: setValue,
    className: "jsx-698508924" + " " + "input-dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("h1", {
    onClick: changeDashboard,
    className: "jsx-698508924" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "698508924",
    __self: this
  }, ".dashboard-button-container.jsx-698508924{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dashboard-button.jsx-698508924{font-family:Montserrat;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.input-dashboard.jsx-698508924{display:none;position:absolute;bottom:2153px;left:667px;}.input-dashboard.jsx-698508924:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EQSxBQUdrQixBQU1VLEFBbUJWLEFBT0YsWUFDZixDQVBzQixVQW5CSCxRQW9CRCxPQW5CSSxPQW9CUCxXQW5CTyxBQXFCdEIsa0JBN0J1QixBQVNQLFlBQ0UsY0FDZSw2QkFDakIsWUFDQSxhQUMrRCxhQWJwRCwwREFjTSw2QkFDTyxZQWR4Qyx3QkFlNEIsZ0dBQ1ksZ0ZBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG1vdXNlZE92ZXIsIG1vdXNlZE9mZiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG4vLyAuZGFzaGJvYXJkLWhvdmVyZWQge1xuLy8gICAgIGN1cnNvcjogbm9uZTtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuLy8gfVxuXG4vLyBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4vLyAgICAgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgICAvLyBkbyBzb21ldGhpbmdcbi8vICAgfSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkQnV0dG9uKCkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBkYXNoYm9hcmQgPSBcImRhc2hib2FyZFwiO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBkYXNoYm9hcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhc2hib2FyZC1idXR0b25cIilcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LmFkZChcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE92ZXIoZGFzaGJvYXJkKSl9KVxuICAgICAgICBkYXNoYm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE9mZigpKVxuICAgIH0pXG4gICAgICB9KTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0Rm9yRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWRhc2hib2FyZCcpO1xuICAgICAgICBpbnB1dEZvckRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKGtlKVxuICAgICAgICBsZXQgeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFzaGJvYXJkLWJ1dHRvblwiKTtcbiAgICAgICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWRhc2hib2FyZFwiKS52YWx1ZTtcbiAgICAgICAgeS5pbm5lckhUTUwgPSB4XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlRGFzaGJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGFzaGJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1idXR0b24nKTtcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXNoYm9hcmQtaG92ZXJlZFwiKVxuICAgICAgICBsZXQgaW5wdXRGb3JEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGFzaGJvYXJkJyk7XG4gICAgICAgIGlucHV0Rm9yRGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgYXV0b0ZvY3VzIHZhbHVlPVwiXCIgY2xhc3NOYW1lPVwiaW5wdXQtZGFzaGJvYXJkXCIgb25DaGFuZ2U9e3NldFZhbHVlfT48L2lucHV0PlxuICAgICAgICA8aDEgb25DbGljaz17IGNoYW5nZURhc2hib2FyZCB9IGNsYXNzTmFtZT1cImRhc2hib2FyZC1idXR0b25cIj5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7XG5cbmBcbi5kYXNoYm9hcmQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDE2NHB4O1xuICAgIGJvdHRvbTogMjAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6YmxhY2s7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5cblxuLmlucHV0LWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMTUzcHg7XG4gICAgbGVmdDogNjY3cHg7XG5cbn1cbi5pbnB1dC1kYXNoYm9hcmQ6Zm9jdXMge1xuICAgIGNvbG9yOmJsYWNrO1xufVxuYFxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.2ee70b772523009b2c78.hot-update.js.map
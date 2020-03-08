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
  let inputValue;

  const setValue = () => {
    let inputForDashboard = document.querySelector('.input-dashboard');
    inputForDashboard.addEventListener("keydown", event => {
      if (event.keyCode === 13) {
        console.log("enter pressed");
      } // do something

    });
  };

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
      lineNumber: 43
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: inputValue,
    onChange: setValue,
    autoFocus: true,
    minlength: "4",
    maxlength: "8",
    className: "jsx-681608270" + " " + "input-dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("h1", {
    onClick: changeDashboard,
    className: "jsx-681608270" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "681608270",
    __self: this
  }, ".dashboard-button-container.jsx-681608270{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dashboard-button.jsx-681608270{font-family:Montserrat;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.input-dashboard.jsx-681608270{display:none;position:absolute;bottom:2153px;left:667px;}.input-dashboard.jsx-681608270:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEQSxBQUdrQixBQU1VLEFBbUJWLEFBUUYsWUFDZixDQVBzQixVQXBCSCxRQXFCRCxPQXBCSSxPQXFCUCxXQXBCTyxBQXNCdEIsa0JBOUJ1QixBQVNQLFlBQ0UsY0FDZSw2QkFDakIsWUFDQSxhQUMrRCxhQWJwRCwwREFjTSw2QkFDTyxZQWR4Qyx3QkFlNEIsZ0dBQ1ksZ0ZBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG1vdXNlZE92ZXIsIG1vdXNlZE9mZiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG4vLyAuZGFzaGJvYXJkLWhvdmVyZWQge1xuLy8gICAgIGN1cnNvcjogbm9uZTtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZEJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkID0gXCJkYXNoYm9hcmRcIjtcbiAgICBsZXQgaW5wdXRWYWx1ZTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0Rm9yRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWRhc2hib2FyZCcpO1xuICAgICAgICBpbnB1dEZvckRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBwcmVzc2VkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGRhc2hib2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFzaGJvYXJkLWJ1dHRvblwiKVxuICAgICAgICBkYXNoYm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT3ZlcihkYXNoYm9hcmQpKX0pXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT2ZmKCkpXG4gICAgfSlcbiAgICAgIH0pO1xuICAgIGNvbnN0IGNoYW5nZURhc2hib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhc2hib2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQtYnV0dG9uJyk7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkhleVwiXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgbGV0IGlucHV0Rm9yRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWRhc2hib2FyZCcpO1xuICAgICAgICBpbnB1dEZvckRhc2hib2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0VmFsdWV9IG9uQ2hhbmdlPXtzZXRWYWx1ZX0gYXV0b0ZvY3VzIG1pbmxlbmd0aD1cIjRcIiBtYXhsZW5ndGg9XCI4XCIgY2xhc3NOYW1lPVwiaW5wdXQtZGFzaGJvYXJkXCI+PC9pbnB1dD5cbiAgICAgICAgPGgxIG9uQ2xpY2s9eyBjaGFuZ2VEYXNoYm9hcmQgfSBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYnV0dG9uXCI+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge1xuXG5gXG4uZGFzaGJvYXJkLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRhc2hib2FyZC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAxNjRweDtcbiAgICBib3R0b206IDIwMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOmJsYWNrO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuXG5cbi5pbnB1dC1kYXNoYm9hcmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMTUzcHg7XG4gICAgbGVmdDogNjY3cHg7XG5cbn1cbi5pbnB1dC1kYXNoYm9hcmQ6Zm9jdXMge1xuICAgIGNvbG9yOmJsYWNrO1xufVxuYFxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.3359fd6d9b71ebc85f4e.hot-update.js.map
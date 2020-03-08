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
        let dashboardButton = document.querySelector('.dashboard-button');
        let inputForDashboard = document.querySelector('.input-dashboard');
        dashboardButton.innerHTML = inputForDashboard.value;
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
    dashboardButton.classList.remove("dashboard-hovered");
    let inputForDashboard = document.querySelector('.input-dashboard');
    inputForDashboard.style.display = "flex";
  };

  return __jsx("div", {
    className: "jsx-681608270" + " " + "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 45
    },
    __self: this
  }), __jsx("h1", {
    onClick: changeDashboard,
    className: "jsx-681608270" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "681608270",
    __self: this
  }, ".dashboard-button-container.jsx-681608270{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dashboard-button.jsx-681608270{font-family:Montserrat;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.input-dashboard.jsx-681608270{display:none;position:absolute;bottom:2153px;left:667px;}.input-dashboard.jsx-681608270:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEQSxBQUdrQixBQU1VLEFBbUJWLEFBUUYsWUFDZixDQVBzQixVQXBCSCxRQXFCRCxPQXBCSSxPQXFCUCxXQXBCTyxBQXNCdEIsa0JBOUJ1QixBQVNQLFlBQ0UsY0FDZSw2QkFDakIsWUFDQSxhQUMrRCxhQWJwRCwwREFjTSw2QkFDTyxZQWR4Qyx3QkFlNEIsZ0dBQ1ksZ0ZBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG1vdXNlZE92ZXIsIG1vdXNlZE9mZiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG4vLyAuZGFzaGJvYXJkLWhvdmVyZWQge1xuLy8gICAgIGN1cnNvcjogbm9uZTtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZEJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkID0gXCJkYXNoYm9hcmRcIjtcbiAgICBsZXQgaW5wdXRWYWx1ZTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0Rm9yRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWRhc2hib2FyZCcpO1xuICAgICAgICBpbnB1dEZvckRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGFzaGJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRGb3JEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGFzaGJvYXJkJyk7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmlubmVySFRNTCA9IGlucHV0Rm9yRGFzaGJvYXJkLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBkYXNoYm9hcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhc2hib2FyZC1idXR0b25cIilcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LmFkZChcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE92ZXIoZGFzaGJvYXJkKSl9KVxuICAgICAgICBkYXNoYm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE9mZigpKVxuICAgIH0pXG4gICAgICB9KTtcbiAgICBjb25zdCBjaGFuZ2VEYXNoYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkYXNoYm9hcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFzaGJvYXJkLWJ1dHRvbicpO1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGxldCBpbnB1dEZvckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXNoYm9hcmQnKTtcbiAgICAgICAgaW5wdXRGb3JEYXNoYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFZhbHVlfSBvbkNoYW5nZT17c2V0VmFsdWV9IGF1dG9Gb2N1cyBtaW5sZW5ndGg9XCI0XCIgbWF4bGVuZ3RoPVwiOFwiIGNsYXNzTmFtZT1cImlucHV0LWRhc2hib2FyZFwiPjwvaW5wdXQ+XG4gICAgICAgIDxoMSBvbkNsaWNrPXsgY2hhbmdlRGFzaGJvYXJkIH0gY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ1dHRvblwiPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcblxuYFxuLmRhc2hib2FyZC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTY0cHg7XG4gICAgYm90dG9tOiAyMDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cblxuXG4uaW5wdXQtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjE1M3B4O1xuICAgIGxlZnQ6IDY2N3B4O1xuXG59XG4uaW5wdXQtZGFzaGJvYXJkOmZvY3VzIHtcbiAgICBjb2xvcjpibGFjaztcbn1cbmBcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a0d113487a9c36c6be15.hot-update.js.map
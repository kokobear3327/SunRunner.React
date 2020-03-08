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
    let inputForDashboard = document.querySelector('.input-for-dashboard');
    inputForDashboard.style.display = "flex";
  };

  return __jsx("div", {
    className: "jsx-173502211" + " " + "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("input", {
    autoFocus: true,
    className: "jsx-173502211" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("h1", {
    onClick: changeDashboard,
    className: "jsx-173502211" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "173502211",
    __self: this
  }, ".dashboard-button-container.jsx-173502211{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dashboard-button.jsx-173502211{font-family:Montserrat;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.input.jsx-173502211{display:none;position:absolute: background:blue;}.input-for-dashboard.jsx-173502211:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQSxBQUdrQixBQU1VLEFBbUJWLEFBS0YsWUFDZixDQUpvQixVQXBCRCxlQUNHLFVBb0J0QixRQW5Cc0Isa0JBUkMsQUFTUCxZQUNFLGNBQ2UsNkJBQ2pCLFlBQ0EsYUFDK0QsYUFicEQsMERBY00sNkJBQ08sWUFkeEMsd0JBZTRCLGdHQUNZLGdGQUN4QyIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS9zcmMvc2hhcmVkL2Rhc2hib2FyZC1idXR0b24vZGFzaGJvYXJkLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXG5pbXBvcnQgeyBtb3VzZWRPdmVyLCBtb3VzZWRPZmYgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuLy8gLmRhc2hib2FyZC1ob3ZlcmVkIHtcbi8vICAgICBjdXJzb3I6IG5vbmU7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIzKTtcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRCdXR0b24oKSB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGRhc2hib2FyZCA9IFwiZGFzaGJvYXJkXCI7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGRhc2hib2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFzaGJvYXJkLWJ1dHRvblwiKVxuICAgICAgICBkYXNoYm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT3ZlcihkYXNoYm9hcmQpKX0pXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT2ZmKCkpXG4gICAgfSlcbiAgICAgIH0pO1xuICAgIGNvbnN0IGNoYW5nZURhc2hib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhc2hib2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQtYnV0dG9uJyk7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkhleVwiXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgbGV0IGlucHV0Rm9yRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZvci1kYXNoYm9hcmQnKTtcbiAgICAgICAgaW5wdXRGb3JEYXNoYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCBhdXRvRm9jdXMgY2xhc3NOYW1lPVwiaW5wdXRcIj48L2lucHV0PlxuICAgICAgICA8aDEgb25DbGljaz17IGNoYW5nZURhc2hib2FyZCB9IGNsYXNzTmFtZT1cImRhc2hib2FyZC1idXR0b25cIj5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7XG5cbmBcbi5kYXNoYm9hcmQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDE2NHB4O1xuICAgIGJvdHRvbTogMjAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6YmxhY2s7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5cblxuLmlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTpcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuLmlucHV0LWZvci1kYXNoYm9hcmQ6Zm9jdXMge1xuICAgIGNvbG9yOmJsYWNrO1xufVxuYFxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d4ac2609bc7f7aae181c.hot-update.js.map
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
    let inputForDashboard = document.querySelector('.input');
    inputForDashboard.style.display = "flex";
  };

  return __jsx("div", {
    className: "jsx-640836825" + " " + "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("input", {
    autoFocus: true,
    className: "jsx-640836825" + " " + "input-dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("h1", {
    onClick: changeDashboard,
    className: "jsx-640836825" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "640836825",
    __self: this
  }, ".dashboard-button-container.jsx-640836825{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dashboard-button.jsx-640836825{font-family:Montserrat;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.input-dashboard.jsx-640836825{display:none;position:absolute: background:blue;}.input-dashboard.jsx-640836825:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDQSxBQUdrQixBQU1VLEFBbUJWLEFBS0YsWUFDZixDQUpvQixVQXBCRCxlQUNHLFVBb0J0QixRQW5Cc0Isa0JBUkMsQUFTUCxZQUNFLGNBQ2UsNkJBQ2pCLFlBQ0EsYUFDK0QsYUFicEQsMERBY00sNkJBQ08sWUFkeEMsd0JBZTRCLGdHQUNZLGdGQUN4QyIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS9zcmMvc2hhcmVkL2Rhc2hib2FyZC1idXR0b24vZGFzaGJvYXJkLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXG5pbXBvcnQgeyBtb3VzZWRPdmVyLCBtb3VzZWRPZmYgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuLy8gLmRhc2hib2FyZC1ob3ZlcmVkIHtcbi8vICAgICBjdXJzb3I6IG5vbmU7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIzKTtcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRCdXR0b24oKSB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGRhc2hib2FyZCA9IFwiZGFzaGJvYXJkXCI7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGRhc2hib2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFzaGJvYXJkLWJ1dHRvblwiKVxuICAgICAgICBkYXNoYm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT3ZlcihkYXNoYm9hcmQpKX0pXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT2ZmKCkpXG4gICAgfSlcbiAgICAgIH0pO1xuICAgIGNvbnN0IGNoYW5nZURhc2hib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhc2hib2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQtYnV0dG9uJyk7XG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkhleVwiXG4gICAgICAgIGRhc2hib2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFzaGJvYXJkLWhvdmVyZWRcIilcbiAgICAgICAgbGV0IGlucHV0Rm9yRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Jyk7XG4gICAgICAgIGlucHV0Rm9yRGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgYXV0b0ZvY3VzIGNsYXNzTmFtZT1cImlucHV0LWRhc2hib2FyZFwiPjwvaW5wdXQ+XG4gICAgICAgIDxoMSBvbkNsaWNrPXsgY2hhbmdlRGFzaGJvYXJkIH0gY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ1dHRvblwiPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcblxuYFxuLmRhc2hib2FyZC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTY0cHg7XG4gICAgYm90dG9tOiAyMDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cblxuXG4uaW5wdXQtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTpcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuLmlucHV0LWRhc2hib2FyZDpmb2N1cyB7XG4gICAgY29sb3I6YmxhY2s7XG59XG5gXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.73cc813a2d97e1ddef44.hot-update.js.map
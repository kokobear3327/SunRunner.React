webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/shared/news-button/news-button.js":
/*!***********************************************!*\
  !*** ./src/shared/news-button/news-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA/src/shared/news-button/news-button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NewsButton() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const news = "news";
  let dashboard = "dashboard";
  let isNewsBalloon = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isNewsBalloon);
  let isNewsContent = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isNewsContent);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newsButton = document.querySelector(".news-button");
    newsButton.addEventListener("mouseover", () => {
      newsButton.classList.add("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOver"])(news));
    });
    newsButton.addEventListener("mouseleave", () => {
      newsButton.classList.remove("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOff"])(news));
    });
  });
  let isBalloon = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isBalloon);

  const clickNews = () => {
    if (isBalloon === true) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["newsBalloonClicked"])());
    }
  };

  return __jsx("div", {
    className: "jsx-599711335" + " " + "news-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h1", {
    onClick: clickNews,
    className: "jsx-599711335" + " " + "news-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "599711335",
    __self: this
  }, ".news-button-parent.jsx-599711335{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.news-button.jsx-599711335{z-index:5;width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.news-hovered.jsx-599711335{cursor:none;-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NnQixBQUdrQyxBQU1KLEFBdUJHLFVBdEJBLEVBdUJVLFVBdEJDLHVCQUNSLGVBQ0csY0FUQyxJQVVQLFlBQ00sQUFtQnRCLGtCQWxCZSxXQUNHLGNBQ1MsdUJBQ1gsV0FkVyxDQWVYLGFBQ1Msa0RBQ0YsbUJBQ3dELGdCQWpCL0UsdURBa0JpQyw2QkFDTyxvQ0FDeEIsWUFDWSxnR0FDWSxnRkFDeEMiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxuaW1wb3J0IHsgbW91c2VkT3ZlciwgbW91c2VkT2ZmLCBuZXdzQmFsbG9vbkNsaWNrZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQnV0dG9uKCkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBuZXdzID0gXCJuZXdzXCI7XG4gICAgbGV0IGRhc2hib2FyZCA9IFwiZGFzaGJvYXJkXCI7XG4gICAgbGV0IGlzTmV3c0JhbGxvb24gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc05ld3NCYWxsb29uKTtcbiAgICBsZXQgaXNOZXdzQ29udGVudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0NvbnRlbnQpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgbmV3c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3cy1idXR0b25cIilcbiAgICAgICAgbmV3c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgbmV3c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3cy1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE92ZXIobmV3cykpfSlcbiAgICAgICAgbmV3c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIG5ld3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm5ld3MtaG92ZXJlZFwiKVxuICAgICAgICBkaXNwYXRjaChtb3VzZWRPZmYobmV3cykpXG4gICAgfSlcbiAgICBcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgaXNCYWxsb29uID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNCYWxsb29uKVxuICAgICAgXG4gICAgICAgY29uc3QgY2xpY2tOZXdzID0gKCkgPT4ge1xuICAgICAgICAgaWYgKGlzQmFsbG9vbiA9PT0gdHJ1ZSkgeyBcbiAgICAgICAgICAgICBkaXNwYXRjaChuZXdzQmFsbG9vbkNsaWNrZWQoKSlcbiAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1idXR0b24tcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxIG9uQ2xpY2s9e2NsaWNrTmV3c30gY2xhc3NOYW1lPVwibmV3cy1idXR0b25cIj5OZXdzPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAubmV3cy1idXR0b24tcGFyZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5uZXdzLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6NTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMzU4cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5ld3MtaG92ZXJlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIzKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/news-button/news-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d5d1e32b0a475faae8b5.hot-update.js.map
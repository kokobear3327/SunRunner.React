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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newsButton = document.querySelector(".news-button");
    newsButton.addEventListener("mouseover", () => {
      console.log("saaaaaaA" + isNewsBalloon);
      newsButton.classList.add("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOver"])(news));
    });
    newsButton.addEventListener("mouseleave", () => {
      newsButton.classList.remove("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOff"])(news));
    });
  });
  let isBalloon = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isBalloon);
  console.log("tssss" + isBalloon);

  const clickNews = () => {
    // First check if ballon wrench is true...if is is, then...
    console.log("3333" + isBalloon);

    if (isBalloon === true) {
      console.log("its true");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["newsBalloonClicked"])());
    }
  };

  return __jsx("div", {
    className: "jsx-599711335" + " " + "news-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    onClick: clickNews,
    className: "jsx-599711335" + " " + "news-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "599711335",
    __self: this
  }, ".news-button-parent.jsx-599711335{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.news-button.jsx-599711335{z-index:5;width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.news-hovered.jsx-599711335{cursor:none;-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NnQixBQUdrQyxBQU1KLEFBdUJHLFVBdEJBLEVBdUJVLFVBdEJDLHVCQUNSLGVBQ0csY0FUQyxJQVVQLFlBQ00sQUFtQnRCLGtCQWxCZSxXQUNHLGNBQ1MsdUJBQ1gsV0FkVyxDQWVYLGFBQ1Msa0RBQ0YsbUJBQ3dELGdCQWpCL0UsdURBa0JpQyw2QkFDTyxvQ0FDeEIsWUFDWSxnR0FDWSxnRkFDeEMiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxuaW1wb3J0IHsgbW91c2VkT3ZlciwgbW91c2VkT2ZmLCBuZXdzQmFsbG9vbkNsaWNrZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQnV0dG9uKCkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBuZXdzID0gXCJuZXdzXCI7XG4gICAgbGV0IGRhc2hib2FyZCA9IFwiZGFzaGJvYXJkXCI7XG4gICAgbGV0IGlzTmV3c0JhbGxvb24gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc05ld3NCYWxsb29uKTtcblxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBuZXdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdzLWJ1dHRvblwiKVxuICAgICAgICBuZXdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNhYWFhYWFBXCIgKyBpc05ld3NCYWxsb29uKTtcbiAgICAgICAgbmV3c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3cy1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE92ZXIobmV3cykpfSlcbiAgICAgICAgbmV3c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIG5ld3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm5ld3MtaG92ZXJlZFwiKVxuICAgICAgICBkaXNwYXRjaChtb3VzZWRPZmYobmV3cykpXG4gICAgfSlcbiAgICBcbiAgICAgIH0pO1xuICAgICAgbGV0IGlzQmFsbG9vbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzQmFsbG9vbilcbiAgICAgIGNvbnNvbGUubG9nKFwidHNzc3NcIiArIGlzQmFsbG9vbik7XG4gICAgICAgY29uc3QgY2xpY2tOZXdzID0gKCkgPT4ge1xuICAgICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIGJhbGxvbiB3cmVuY2ggaXMgdHJ1ZS4uLmlmIGlzIGlzLCB0aGVuLi4uXG4gICAgICAgICAgY29uc29sZS5sb2coXCIzMzMzXCIgKyBpc0JhbGxvb24pO1xuICAgICAgICAgaWYgKGlzQmFsbG9vbiA9PT0gdHJ1ZSkgeyBcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0cyB0cnVlXCIpO1xuICAgICAgICAgICAgIGRpc3BhdGNoKG5ld3NCYWxsb29uQ2xpY2tlZCgpKVxuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvbi1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDEgb25DbGljaz17Y2xpY2tOZXdzfSBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvblwiPk5ld3M8L2gxPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIC5uZXdzLWJ1dHRvbi1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm5ld3MtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDo1O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEyNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEzNThweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubmV3cy1ob3ZlcmVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/news-button/news-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.68e811c19b2f779f56f5.hot-update.js.map
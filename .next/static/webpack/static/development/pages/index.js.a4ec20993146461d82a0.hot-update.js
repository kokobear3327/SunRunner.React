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
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    onClick: clickNews,
    className: "jsx-599711335" + " " + "news-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "599711335",
    __self: this
  }, ".news-button-parent.jsx-599711335{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.news-button.jsx-599711335{z-index:5;width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.news-hovered.jsx-599711335{cursor:none;-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQixBQUdrQyxBQU1KLEFBdUJHLFVBdEJBLEVBdUJVLFVBdEJDLHVCQUNSLGVBQ0csY0FUQyxJQVVQLFlBQ00sQUFtQnRCLGtCQWxCZSxXQUNHLGNBQ1MsdUJBQ1gsV0FkVyxDQWVYLGFBQ1Msa0RBQ0YsbUJBQ3dELGdCQWpCL0UsdURBa0JpQyw2QkFDTyxvQ0FDeEIsWUFDWSxnR0FDWSxnRkFDeEMiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxuaW1wb3J0IHsgbW91c2VkT3ZlciwgbW91c2VkT2ZmLCBuZXdzQmFsbG9vbkNsaWNrZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQnV0dG9uKCkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBuZXdzID0gXCJuZXdzXCI7XG4gICAgbGV0IGRhc2hib2FyZCA9IFwiZGFzaGJvYXJkXCI7XG4gICAgbGV0IGlzTmV3c0JhbGxvb24gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc05ld3NCYWxsb29uKTtcblxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBuZXdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdzLWJ1dHRvblwiKVxuICAgICAgICBuZXdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBuZXdzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXdzLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT3ZlcihuZXdzKSl9KVxuICAgICAgICBuZXdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgbmV3c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibmV3cy1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE9mZihuZXdzKSlcbiAgICB9KVxuICAgIFxuICAgICAgfSk7XG4gICAgICBsZXQgaXNCYWxsb29uID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNCYWxsb29uKVxuICAgICAgIGNvbnN0IGNsaWNrTmV3cyA9ICgpID0+IHtcbiAgICAgICAgIGlmIChpc0JhbGxvb24gPT09IHRydWUpIHsgXG4gICAgICAgICAgICAgZGlzcGF0Y2gobmV3c0JhbGxvb25DbGlja2VkKCkpXG4gICAgICAgICB9XG4gICAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uLXBhcmVudFwiPlxuICAgICAgICAgICAgICAgIDxoMSBvbkNsaWNrPXtjbGlja05ld3N9IGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uXCI+TmV3czwvaDE+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLm5ld3MtYnV0dG9uLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubmV3cy1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTM1OHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uZXdzLWhvdmVyZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yMyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/news-button/news-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a4ec20993146461d82a0.hot-update.js.map
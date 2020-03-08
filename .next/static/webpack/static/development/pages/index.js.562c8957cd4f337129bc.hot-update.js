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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newsButton = document.querySelector(".news-button");
    newsButton.addEventListener("mouseover", () => {
      newsButton.classList.add("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOverNews"])());
    });
  });
  return __jsx("div", {
    className: "jsx-4208913043" + " " + "news-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4208913043" + " " + "news-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4208913043",
    __self: this
  }, ".news-button-parent.jsx-4208913043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.news-button.jsx-4208913043{width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.news-hovered.jsx-4208913043{cursor:none;-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUdrQyxBQU1ELEFBcUJBLFlBcEJXLEFBcUJELHVCQXBCUCxlQUNHLGtCQUNOLE1BVE8sTUFVRCxVQWtCdEIsUUFqQmUsV0FDRyxjQUNTLHVCQUNYLFlBQ0EsU0FkVyxJQWVGLGtEQUNGLG1CQUN3RCwwQkFoQi9FLDZDQWlCaUMsNkJBQ08sb0NBQ3hCLFlBQ1ksZ0dBQzVCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxuaW1wb3J0IHsgbW91c2VkT3Zlck5ld3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQnV0dG9uKCkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuZXdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdzLWJ1dHRvblwiKVxuICAgIG5ld3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgbmV3c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3cy1ob3ZlcmVkXCIpXG4gICAgZGlzcGF0Y2gobW91c2VkT3Zlck5ld3MoKSk7XG4gICAgXG5cbiAgICB9KVxuXG4gICAgXG4gICAgICB9KTtcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1idXR0b24tcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uXCI+TmV3czwvaDE+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLm5ld3MtYnV0dG9uLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubmV3cy1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEyNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEzNThweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5ld3MtaG92ZXJlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIzKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/shared/news-button/news-button.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.562c8957cd4f337129bc.hot-update.js.map
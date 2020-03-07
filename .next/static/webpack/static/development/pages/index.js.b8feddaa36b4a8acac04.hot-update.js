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
/* harmony import */ var _components_js_MyProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/js/MyProvider */ "./src/components/js/MyProvider.js");
/* harmony import */ var _components_js_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/js/App */ "./src/components/js/App.js");
var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/shared/news-button/news-button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class NewsButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    document.addEventListener("mouseover", function () {
      let newsButton = document.querySelector(".news-button");
      newsButton.classList.add("news-hovered");
    });
  }

  render() {
    return __jsx(_components_js_MyProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1655943429" + " " + "news-button-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1655943429" + " " + "news-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1655943429",
      __self: this
    }, ".news-button-parent.jsx-1655943429{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.news-button.jsx-1655943429{width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.news-hovered.jsx-1655943429{cursor:url('/balloon-wrench-filled.svg);                    transform: scale(1.23);;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBR2tDLEFBTUQsQUF1QmhCLFlBdEIyQix1QkFDUixlQUNHLGtCQUNOLE1BVE8sTUFVRCxJQWtCckIsY0FqQmMsV0FDRyxjQUNTLHVCQUNYLFlBQ0EsU0FkVyxJQWVGLGtEQUNGLG1CQUN3RCwwQkFoQi9FLDZDQWlCaUMsNkJBQ08sb0NBQ3hCLFlBQ1ksZ0dBQzVCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXlQcm92aWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2pzL015UHJvdmlkZXInO1xuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9qcy9BcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IG5ld3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3MtYnV0dG9uXCIpXG4gICAgICAgICAgICBuZXdzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXdzLWhvdmVyZWRcIilcbiAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE15UHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1idXR0b24tcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uXCI+TmV3czwvaDE+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLm5ld3MtYnV0dG9uLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubmV3cy1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEyNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEzNThweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5ld3MtaG92ZXJlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogdXJsKCcvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Zyk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yMyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTXlQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbk5ld3NCdXR0b24uY29udGV4dFR5cGUgPSBNeUNvbnRleHQ7Il19 */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/shared/news-button/news-button.js */")));
  }

}
NewsButton.contextType = _components_js_App__WEBPACK_IMPORTED_MODULE_3__["MyContext"];

/***/ })

})
//# sourceMappingURL=index.js.b8feddaa36b4a8acac04.hot-update.js.map
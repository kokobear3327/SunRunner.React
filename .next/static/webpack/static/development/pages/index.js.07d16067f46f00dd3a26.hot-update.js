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
    document.addEventListener("mouseover", () => {
      console.log("Mouseover called");
      let newsButton = document.querySelector(".news-button");
      newsButton.classList.add("news-hovered");
    });
  }

  render() {
    return __jsx(_components_js_MyProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4208913043" + " " + "news-button-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-4208913043" + " " + "news-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4208913043",
      __self: this
    }, ".news-button-parent.jsx-4208913043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.news-button.jsx-4208913043{width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.news-hovered.jsx-4208913043{cursor:none;-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmdCLEFBR2tDLEFBTUQsQUFxQkEsWUFwQlcsQUFxQkQsdUJBcEJQLGVBQ0csa0JBQ04sTUFUTyxNQVVELFVBa0J0QixRQWpCZSxXQUNHLGNBQ1MsdUJBQ1gsWUFDQSxTQWRXLElBZUYsa0RBQ0YsbUJBQ3dELDBCQWhCL0UsNkNBaUJpQyw2QkFDTyxvQ0FDeEIsWUFDWSxnR0FDNUIiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEtTmV4dC9zcmMvc2hhcmVkL25ld3MtYnV0dG9uL25ld3MtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNeVByb3ZpZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvanMvTXlQcm92aWRlcic7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2pzL0FwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb3VzZW92ZXIgY2FsbGVkXCIpXG4gICAgICAgICAgICBsZXQgbmV3c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3cy1idXR0b25cIilcbiAgICAgICAgICAgIG5ld3NCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5ld3MtaG92ZXJlZFwiKVxuICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXlQcm92aWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvbi1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmV3cy1idXR0b25cIj5OZXdzPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAubmV3cy1idXR0b24tcGFyZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5uZXdzLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTM1OHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubmV3cy1ob3ZlcmVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L015UHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5OZXdzQnV0dG9uLmNvbnRleHRUeXBlID0gTXlDb250ZXh0OyJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/shared/news-button/news-button.js */")));
  }

}
NewsButton.contextType = _components_js_App__WEBPACK_IMPORTED_MODULE_3__["MyContext"];

/***/ })

})
//# sourceMappingURL=index.js.07d16067f46f00dd3a26.hot-update.js.map
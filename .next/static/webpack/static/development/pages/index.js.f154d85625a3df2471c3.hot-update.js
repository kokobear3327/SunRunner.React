webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Consumer.js":
/*!************************************!*\
  !*** ./src/components/Consumer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Consumer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/legal-info-button/legal-info-button */ "./src/shared/legal-info-button/legal-info-button.js");
/* harmony import */ var _shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/reviews-button/reviews-button */ "./src/shared/reviews-button/reviews-button.js");
/* harmony import */ var _shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/news-button/news-button */ "./src/shared/news-button/news-button.js");
/* harmony import */ var _shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/investments-button/investments-button */ "./src/shared/investments-button/investments-button.js");
/* harmony import */ var _shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/dashboard-button/dashboard-button */ "./src/shared/dashboard-button/dashboard-button.js");
/* harmony import */ var _shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/products-buttons/products-buttons */ "./src/shared/products-buttons/products-buttons.js");
/* harmony import */ var _shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/messaging-buttons/messaging-buttons */ "./src/shared/messaging-buttons/messaging-buttons.js");
/* harmony import */ var _shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/consumer-financials-buttons */ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.js");
/* harmony import */ var _shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/remaining-buttons/remaining-buttons */ "./src/shared/remaining-buttons/remaining-buttons.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/Users/websites/Documents/OEA/src/components/Consumer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

















 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
function Consumer() {
  let localState = {
    soundBoolean: false,
    balloonBoolean: false,
    panelOpen: false,
    businessBoolean: false,
    menuBoolean: false
  };
  let {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(localState);

  const twirlFunction = () => {
    setState({
      businessBoolean: !state.businessBoolean
    });
    console.log("parent businessBoolean State changed");
  };

  const soundFunction = () => {
    setState({
      soundBoolean: !state.soundBoolean
    });
  };

  const menuFunction = () => {
    setState({
      menuBoolean: !state.menuBoolean
    });
    console.log("parent menuBoolean State changed");

    if (state.menuBoolean) {
      console.log("This menu" + state.menuBoolean);
      let child = document.querySelector(".image");
      child.style.display = "none";
    }
  };

  let scale = 'scale:(1)';
  let scale2 = 'scale:(0.4)';
  const fade = Object(react_spring__WEBPACK_IMPORTED_MODULE_18__["useSpring"])({
    config: {
      duration: 4250,
      mass: 1,
      tension: 280,
      velocity: 200,
      friction: 120
    },
    transform: scale,
    from: {
      scale2
    },
    display: 'block'
  });
  const [props2, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_18__["useSpring"])(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 1,
      tension: 35,
      friction: 4
    }
  }));

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 320, (x - window.innerWidth / 2) / 320, 1.007];

  const trans = (x, y, s) => "perspective(1890px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");

  return __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-image-and-background-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-image-grandfather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_18__["animated"].div, {
    style: fade,
    className: "consumer-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_18__["animated"].img, {
    onMouseMove: ({
      clientX: x,
      clientY: y
    }) => set({
      xys: calc(x, y)
    }),
    onMouseLeave: () => set({
      xys: [0, 0, 1]
    }),
    style: {
      transform: props2.xys.interpolate(trans)
    },
    className: "consumer-image",
    src: consumer,
    alt: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-image-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2358028258",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "tree-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2358028258" + " " + "news-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(_shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(_shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2358028258" + " " + "remaining-buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2358028258",
    __self: this
  }, ".consumer-parent.jsx-2358028258{height:2048px;width:1536px;padding-top:14px;}.consumer-child.jsx-2358028258{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.consumer-button-container.jsx-2358028258{position:relative;top:2738px;right:769px;}.consumer-image-grandfather.jsx-2358028258{position:relative;left:773px;top:641px;z-index:2;}.consumer-image-container.jsx-2358028258{position:relative;left:1265px;top:634px;z-index:1;}.consumer-image.jsx-2358028258{position:relative;z-index:4;}.consumer-image-background.jsx-2358028258{width:1536px;height:2005px;background:linear-gradient(270deg,#000000,#02091b);background-size:400% 400%;-webkit-animation:AnimationName-jsx-2358028258 10s ease-in-out infinite;animation:AnimationName-jsx-2358028258 10s ease-in-out infinite;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;bottom:1270px;left:769px;position:relative;}@-webkit-keyframes AnimationName-jsx-2358028258{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-2358028258{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHZ0IsQUFHc0IsQUFNQSxBQU1JLEFBZUMsQUFPQSxBQVFBLEFBTUwsQUFhYyxBQUNHLEFBQ0QsYUFkZixDQWhERCxJQVlGLEFBZUEsQUFPQyxBQVFGLFNBekNPLEFBZ0RvQyxBQVd6QixBQUVFLENBbEJsQyxDQS9CZ0IsQUFlRixBQWlDcUIsQ0ExQnJCLFNBTkQsQ0FPQyxDQXJCZCxHQWJBLEtBNEJBLENBT0Esd0JBL0JBLElBNEM4QiwwQkFDdUIsd0lBQ3hDLFVBQ0ksMEVBQ0MsY0FDSCxXQUNPLGtCQVF0QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS9zcmMvY29tcG9uZW50cy9Db25zdW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJlZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvdHJlZS1idXR0b24vdHJlZS1idXR0b24nO1xuaW1wb3J0IE1lZGljYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9tZWRpY2FsLWluZm8tYnV0dG9uL21lZGljYWwtaW5mby1idXR0b24nO1xuaW1wb3J0IERvY3RvcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2RvY3RvcnMtYnV0dG9uL2RvY3RvcnMtYnV0dG9uJztcbmltcG9ydCBMYXd5ZXJzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sYXd5ZXJzLWJ1dHRvbi9sYXd5ZXJzLWJ1dHRvbic7XG5pbXBvcnQgTGVnYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sZWdhbC1pbmZvLWJ1dHRvbi9sZWdhbC1pbmZvLWJ1dHRvbidcbmltcG9ydCBSZXZpZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZXZpZXdzLWJ1dHRvbi9yZXZpZXdzLWJ1dHRvbic7XG5pbXBvcnQgTmV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24nO1xuaW1wb3J0IEludmVzdG1lbnRzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9pbnZlc3RtZW50cy1idXR0b24vaW52ZXN0bWVudHMtYnV0dG9uJztcbmltcG9ydCBEYXNoYm9hcmRCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2Rhc2hib2FyZC1idXR0b24vZGFzaGJvYXJkLWJ1dHRvbic7XG5pbXBvcnQgUHJvZHVjdHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9wcm9kdWN0cy1idXR0b25zL3Byb2R1Y3RzLWJ1dHRvbnMnO1xuaW1wb3J0IE1lc3NhZ2luZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2luZy1idXR0b25zL21lc3NhZ2luZy1idXR0b25zJztcbmltcG9ydCBDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zJztcbmltcG9ydCBSZW1haW5pbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9yZW1haW5pbmctYnV0dG9ucyc7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG4vLyBTbyB5b3Ugd2FudCBpdCB0byBjb25kaXRpb25hbGx5IHJlbmRlciB0aGUgY29uc3VtZXIgb3IgYnVzaW5lc3MgY29tcG9uZW50IGNvbnRpbmdlbnQgb24gd2hldGhlciBidXNpbmVzcyBpcyB0cnVlXG4vLyBTYW1lIHdpdGggdGhlIGRvY2tcblxubGV0IGNvbnN1bWVyID0gXCIvQ29uc3VtZXIucG5nXCJcbmxldCBidXNpbmVzcyA9IFwiL0J1c2luZXNzLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnN1bWVyKCkge1xuXG5cbiAgICBsZXQgbG9jYWxTdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShsb2NhbFN0YXRlKTtcblxuICAgIGNvbnN0IHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICFzdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICFzdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBtZW51Qm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgICAgIGlmIChzdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBtZW51XCIgKyBzdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc2NhbGUgPSAnc2NhbGU6KDEpJztcbiAgICBsZXQgc2NhbGUyID0gJ3NjYWxlOigwLjQpJztcbiAgICBjb25zdCBmYWRlID0gdXNlU3ByaW5nKHtcbiAgICAgICAgY29uZmlnOiB7IGR1cmF0aW9uOiA0MjUwLCBtYXNzOiAxLCB0ZW5zaW9uOiAyODAsIHZlbG9jaXR5OiAyMDAsIGZyaWN0aW9uOiAxMjAgfSxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSwgZnJvbToge3NjYWxlMn0sXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgW3Byb3BzMiwgc2V0XSA9IHVzZVNwcmluZygoKSA9PiAoeyB4eXM6IFswLCAwLCAxXSwgY29uZmlnOiB7IG1hc3M6IDEsIHRlbnNpb246IDM1LCBmcmljdGlvbjogNCB9IH0pKVxuICAgICAgICBjb25zdCBjYWxjID0gKHgsIHkpID0+IFstKHkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAvIDMyMCwgKHggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gMzIwLCAxLjAwN11cbiAgICAgICAgY29uc3QgdHJhbnMgPSAoeCwgeSwgcykgPT4gYHBlcnNwZWN0aXZlKDE4OTBweCkgcm90YXRlWCgke3h9ZGVnKSByb3RhdGVZKCR7eX1kZWcpIHNjYWxlKCR7c30pYFxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1jaGlsZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UtYW5kLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZS1ncmFuZGZhdGhlclwiPlxuICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e2ZhZGV9IGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIDxhbmltYXRlZC5pbWcgb25Nb3VzZU1vdmU9eyh7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSkgPT4gc2V0KHsgeHlzOiBjYWxjKHgsIHkpIH0pfVxuICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0KHsgeHlzOiBbMCwgMCwgMV0gfSl9IHN0eWxlPXt7IHRyYW5zZm9ybTogcHJvcHMyLnh5cy5pbnRlcnBvbGF0ZSh0cmFucykgfX0gY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2VcIiBzcmM9eyBjb25zdW1lciB9IGFsdD1cInRleHRcIi8+XG4gICAgPC9hbmltYXRlZC5kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZS1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgPFRyZWVCdXR0b24+PC9UcmVlQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuICAgIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbiAgICA8TGF3eWVyc0J1dHRvbj48L0xhd3llcnNCdXR0b24+XG4gICAgPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbiAgICA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPEludmVzdG1lbnRzQnV0dG9uPjwvSW52ZXN0bWVudHNCdXR0b24+XG4gICAgPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbiAgICA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuICAgIDxNZXNzYWdpbmdCdXR0b25zPjwvTWVzc2FnaW5nQnV0dG9ucz5cbiAgICA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1haW5pbmctYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgIC5jb25zdW1lci1wYXJlbnQge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnN1bWVyLWNoaWxkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cblxuXG4gICAgLmNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAyNzM4cHg7XG4gICAgICAgIHJpZ2h0OiA3NjlweDtcbiAgICBcbiAgICB9XG5cbiAgICAudHJlZS1idXR0b24tY29udGFpbmVyIHt9XG5cbiAgICAubmV3cy1idXR0b24tY29udGFpbmVyIHtcbiAgICB9XG5cbiAgICAubmV3cy1idXR0b24tY29udGFpbmVyOmhvdmVyIHtcbiAgICB9XG5cbiAgICAuY29uc3VtZXItaW1hZ2UtZ3JhbmRmYXRoZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDc3M3B4O1xuICAgICAgICB0b3A6IDY0MXB4O1xuICAgICAgICB6LWluZGV4OjI7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTI2NXB4O1xuICAgICAgICB0b3A6IDYzNHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA0O1xuXG4gICAgfVxuXG4gICAgLmNvbnN1bWVyLWltYWdlLWJhY2tncm91bmQge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDIwMDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzAyMDkxYik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvdHRvbTogMTI3MHB4O1xuICAgICAgICBsZWZ0OiA3NjlweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5cbiAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XG4gICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Consumer.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f154d85625a3df2471c3.hot-update.js.map
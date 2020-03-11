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

  const fade = Object(react_spring__WEBPACK_IMPORTED_MODULE_18__["useSpring"])({
    config: {
      duration: 4250,
      mass: 1,
      tension: 280,
      velocity: 200,
      friction: 120
    },
    opacity: 1,
    from: {
      opacity: 0
    },
    display: 'block'
  });
  const [props2, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_18__["useSpring"])(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 350,
      friction: 40
    }
  }));

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];

  const trans = (x, y, s) => "perspective(600px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");

  return __jsx("div", {
    className: "jsx-730844421" + " " + "consumer-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-730844421" + " " + "consumer-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-730844421" + " " + "consumer-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
      lineNumber: 78
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-730844421" + " " + "consumer-image-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-730844421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-730844421" + " " + "consumer-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-730844421" + " " + "tree-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-730844421" + " " + "news-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-730844421" + " " + "remaining-buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "730844421",
    __self: this
  }, ".consumer-parent.jsx-730844421{height:2048px;width:1536px;padding-top:14px;}.consumer-child.jsx-730844421{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.consumer-button-container.jsx-730844421{position:relative;top:2738px;right:769px;}.consumer-image.jsx-730844421{top:689px!important;position:relative;z-index:2;left:768px!important;margin-top:200px;}.consumer-image-background.jsx-730844421{width:1536px;height:2005px;background:linear-gradient(270deg,#000000,#02091b);background-size:400% 400%;-webkit-animation:AnimationName-jsx-730844421 10s ease-in-out infinite;animation:AnimationName-jsx-730844421 10s ease-in-out infinite;z-index:-2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;bottom:270px;position:relative;}@-webkit-keyframes AnimationName-jsx-730844421{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-730844421{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHZ0IsQUFHc0IsQUFNQSxBQU1JLEFBcUJHLEFBUVAsQUFhYyxBQUNHLEFBQ0QsYUFkZixDQXpDRCxJQVlGLEVBcUJPLE9BaENELEFBeUNvQyxBQVd6QixBQUVFLEVBMUNsQixBQXlDbUIsU0FwQnJCLEdBbkJkLEdBYkEsSUFpQ3lCLHFCQUNKLEtBOUJyQixJQXFDOEIsUUFOOUIsa0JBT3FELHNJQUN2QyxXQUNHLDBFQUNBLGFBRUssa0JBUXRCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC90cmVlLWJ1dHRvbi90cmVlLWJ1dHRvbic7XG5pbXBvcnQgTWVkaWNhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL21lZGljYWwtaW5mby1idXR0b24vbWVkaWNhbC1pbmZvLWJ1dHRvbic7XG5pbXBvcnQgRG9jdG9yc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvZG9jdG9ycy1idXR0b24vZG9jdG9ycy1idXR0b24nO1xuaW1wb3J0IExhd3llcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xhd3llcnMtYnV0dG9uL2xhd3llcnMtYnV0dG9uJztcbmltcG9ydCBMZWdhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xlZ2FsLWluZm8tYnV0dG9uL2xlZ2FsLWluZm8tYnV0dG9uJ1xuaW1wb3J0IFJldmlld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3Jldmlld3MtYnV0dG9uL3Jldmlld3MtYnV0dG9uJztcbmltcG9ydCBOZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbic7XG5pbXBvcnQgSW52ZXN0bWVudHNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2ludmVzdG1lbnRzLWJ1dHRvbi9pbnZlc3RtZW50cy1idXR0b24nO1xuaW1wb3J0IERhc2hib2FyZEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uJztcbmltcG9ydCBQcm9kdWN0c0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3Byb2R1Y3RzLWJ1dHRvbnMvcHJvZHVjdHMtYnV0dG9ucyc7XG5pbXBvcnQgTWVzc2FnaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvbWVzc2FnaW5nLWJ1dHRvbnMnO1xuaW1wb3J0IENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMnO1xuaW1wb3J0IFJlbWFpbmluZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3JlbWFpbmluZy1idXR0b25zJztcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGNvbmZpZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbi8vIFNvIHlvdSB3YW50IGl0IHRvIGNvbmRpdGlvbmFsbHkgcmVuZGVyIHRoZSBjb25zdW1lciBvciBidXNpbmVzcyBjb21wb25lbnQgY29udGluZ2VudCBvbiB3aGV0aGVyIGJ1c2luZXNzIGlzIHRydWVcbi8vIFNhbWUgd2l0aCB0aGUgZG9ja1xuXG5sZXQgY29uc3VtZXIgPSBcIi9Db25zdW1lci5wbmdcIlxubGV0IGJ1c2luZXNzID0gXCIvQnVzaW5lc3MucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG5cblxuICAgIGxldCBsb2NhbFN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIG1lbnVCb29sZWFuOiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGxvY2FsU3RhdGUpO1xuXG4gICAgY29uc3QgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IGJ1c2luZXNzQm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgfVxuXG4gICAgY29uc3Qgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgY29uc3QgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7bWVudUJvb2xlYW46ICFzdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIG1lbnVcIiArIHN0YXRlLm1lbnVCb29sZWFuKVxuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKVxuICAgICAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmFkZSA9IHVzZVNwcmluZyh7XG4gICAgICAgIGNvbmZpZzogeyBkdXJhdGlvbjogNDI1MCwgbWFzczogMSwgdGVuc2lvbjogMjgwLCB2ZWxvY2l0eTogMjAwLCBmcmljdGlvbjogMTIwIH0sXG4gICAgICAgIG9wYWNpdHk6IDEsIGZyb206IHtvcGFjaXR5OiAwfSxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBbcHJvcHMyLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IHh5czogWzAsIDAsIDFdLCBjb25maWc6IHsgbWFzczogNSwgdGVuc2lvbjogMzUwLCBmcmljdGlvbjogNDAgfSB9KSlcbiAgICAgICAgY29uc3QgY2FsYyA9ICh4LCB5KSA9PiBbLSh5IC0gd2luZG93LmlubmVySGVpZ2h0IC8gMikgLyAyMCwgKHggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gMjAsIDEuMV1cbiAgICAgICAgY29uc3QgdHJhbnMgPSAoeCwgeSwgcykgPT4gYHBlcnNwZWN0aXZlKDYwMHB4KSByb3RhdGVYKCR7eH1kZWcpIHJvdGF0ZVkoJHt5fWRlZykgc2NhbGUoJHtzfSlgXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItY2hpbGRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIDxhbmltYXRlZC5pbWcgb25Nb3VzZU1vdmU9eyh7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSkgPT4gc2V0KHsgeHlzOiBjYWxjKHgsIHkpIH0pfVxuICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0KHsgeHlzOiBbMCwgMCwgMV0gfSl9IHN0eWxlPXt7IHRyYW5zZm9ybTogcHJvcHMyLnh5cy5pbnRlcnBvbGF0ZSh0cmFucykgfX0gY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2VcIiBzcmM9eyBjb25zdW1lciB9IGFsdD1cInRleHRcIi8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZS1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxUcmVlQnV0dG9uPjwvVHJlZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8TWVkaWNhbEluZm9CdXR0b24+PC9NZWRpY2FsSW5mb0J1dHRvbj5cbiAgICA8RG9jdG9yc0J1dHRvbj48L0RvY3RvcnNCdXR0b24+XG4gICAgPExhd3llcnNCdXR0b24+PC9MYXd5ZXJzQnV0dG9uPlxuICAgIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4gICAgPFJldmlld3NCdXR0b24+PC9SZXZpZXdzQnV0dG9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgPE5ld3NCdXR0b24+PC9OZXdzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuICAgIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4gICAgPFByb2R1Y3RzQnV0dG9ucz48L1Byb2R1Y3RzQnV0dG9ucz5cbiAgICA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4gICAgPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtYWluaW5nLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIFxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YCBcbiAgICAuY29uc3VtZXItcGFyZW50IHtcbiAgICAgICAgaGVpZ2h0OjIwNDhweDtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5jb25zdW1lci1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG5cblxuICAgIC5jb25zdW1lci1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIHRvcDogMjczOHB4O1xuICAgICAgICByaWdodDogNzY5cHg7XG4gICAgXG4gICAgfVxuXG4gICAgLnRyZWUtYnV0dG9uLWNvbnRhaW5lciB7fVxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgfVxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgfVxuXG5cbiAgICAuY29uc3VtZXItaW1hZ2UtY29udGFpbmVyIHtcblxuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWltYWdlIHtcbiAgICAgICAgdG9wOiA2ODlweCFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgbGVmdDogNzY4cHghaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICB9XG5cbiAgICAuY29uc3VtZXItaW1hZ2UtYmFja2dyb3VuZCB7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGhlaWdodDogMjAwNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAwMDAwLCAjMDIwOTFiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIHotaW5kZXg6LTI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvdHRvbTogMjcwcHg7XG4gICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgQGtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcbiAgICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuICAgICAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Consumer.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5db7cac3022548ea3c69.hot-update.js.map
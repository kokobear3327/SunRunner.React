webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Consumer2.js":
/*!*************************************!*\
  !*** ./src/components/Consumer2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Consumer2; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/legal-info-button/legal-info-button */ "./src/shared/legal-info-button/legal-info-button.js");
/* harmony import */ var _shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/reviews-button/reviews-button */ "./src/shared/reviews-button/reviews-button.js");
/* harmony import */ var _shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/news-button/news-button */ "./src/shared/news-button/news-button.js");
/* harmony import */ var _shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/investments-button/investments-button */ "./src/shared/investments-button/investments-button.js");
/* harmony import */ var _shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/dashboard-button/dashboard-button */ "./src/shared/dashboard-button/dashboard-button.js");
/* harmony import */ var _shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/products-buttons/products-buttons */ "./src/shared/products-buttons/products-buttons.js");
/* harmony import */ var _shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/messaging-buttons/messaging-buttons */ "./src/shared/messaging-buttons/messaging-buttons.js");
/* harmony import */ var _shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/consumer-financials-buttons */ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.js");
/* harmony import */ var _shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/remaining-buttons/remaining-buttons */ "./src/shared/remaining-buttons/remaining-buttons.js");

var _jsxFileName = "/Users/websites/Documents/OEA/src/components/Consumer2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
















 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
let blank = "/blank.png";
class Consumer2 extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  componentDidMount() {
    document.addEventListener("mouseover", function () {
      let newsButton = document.querySelector(".news-button-container");
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx("div", {
      className: "jsx-4213012843" + " " + "consumer-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4213012843" + " " + "consumer-child2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4213012843" + " " + "consumer-image-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("img", {
      src: blank,
      alt: "text",
      className: "jsx-4213012843" + " " + "consumer-image2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4213012843" + " " + "consumer-image-background2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-4213012843",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4213012843" + " " + "tree-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4213012843" + " " + "tree-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4213012843" + " " + "tree-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-4213012843" + " " + "medical-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4213012843" + " " + "medical-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4213012843" + " " + "medical-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }))), __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4213012843" + " " + "news-button-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), __jsx(_shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), __jsx(_shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), __jsx(_shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4213012843" + " " + "remaining-buttons-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4213012843",
      __self: this
    }, ".consumer-parent2.jsx-4213012843{height:2048px;width:1536px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;right:157px;bottom:3px justify-content:center;}.consumer-child2.jsx-4213012843{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2048px;width:1536px;position:relative;}.tree-parent2.jsx-4213012843{position:relative;right:2990px;width:130px;height:130px;color:yellow;top:200px;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.tree-icon2.jsx-4213012843{width:130px;height:130px;color:yellow;background-color:yellow;border:3px purple solid;}.tree-button2.jsx-4213012843{position:relative;top:338px;left:73px;}.medical-info-parent2.jsx-4213012843{position:relative;right:2700px;width:130px;height:130px;color:yellow;top:70px;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.medical-info-icon2.jsx-4213012843{width:130px!important;height:130px;color:yellow;background-color:yellow;border:3px purple solid;}.medical-info-button2.jsx-4213012843{position:relative;top:338px;left:73px;}.consumer-image-container2.jsx-4213012843{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.consumer-image2.jsx-4213012843{position:relative;z-index:1;height:2000px;width:1536px;left:1px;}.consumer-image-background2.jsx-4213012843{width:1536px;height:1940px;background:linear-gradient(270deg,#000000,#02490a);background-size:400% 400%;-webkit-animation:AnimationName-jsx-4213012843 10s ease-in-out infinite;animation:AnimationName-jsx-4213012843 10s ease-in-out infinite;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);top:1020px;right:1534px;position:relative;}@-webkit-keyframes AnimationName-jsx-4213012843{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-4213012843{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R2dCLEFBR3NCLEFBVUEsQUFTSyxBQWNOLEFBUU0sQUFNQSxBQVlJLEFBUUosQUFnQkwsQUFLSyxBQVFMLEFBY2MsQUFDRyxBQUNELFlBOUVqQixDQStERSxDQWhHRCxJQW1CQSxBQXNCSCxBQU1HLEFBb0JILEFBcUJBLElBN0JFLEdBekJDLEVBakNELEFBZ0d5QyxBQVl6QixBQUVFLENBckVwQixBQTBCQSxBQXFCSSxDQXFCaUIsRUExRm5CLEFBNEJBLElBWUMsR0F6QlcsQUFRNUIsQUEwQkEsSUFxQmlCLENBckVELEFBNEJBLEtBWVksT0E4QmYsQ0FyRUksQUE0QkEsTUFkVyxFQXdENUIsS0FyRWMsQUE0QkQsR0FXZSxFQXBEWCxBQXlFakIsSUEvQjJCLEFBOENHLENBMUVILE9BYTNCLEVBMUJpQixRQW9EakIsS0E3RHNCLEFBVUEsQUF5Q0wsQ0E1QkEsRUEwRW9DLGVBaEdyQyxBQVloQixZQVYyQixrQ0FDM0IsVUFnRGMsQ0E1QkEsVUE2QmQsQ0E1QkEscURBeUVhLFVBQ0ksMEVBQ2lCLG1HQUNuQixXQUNFLGFBQ0ssa0JBUXRCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC90cmVlLWJ1dHRvbi90cmVlLWJ1dHRvbic7XG5pbXBvcnQgTWVkaWNhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL21lZGljYWwtaW5mby1idXR0b24vbWVkaWNhbC1pbmZvLWJ1dHRvbic7XG5pbXBvcnQgRG9jdG9yc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvZG9jdG9ycy1idXR0b24vZG9jdG9ycy1idXR0b24nO1xuaW1wb3J0IExhd3llcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xhd3llcnMtYnV0dG9uL2xhd3llcnMtYnV0dG9uJztcbmltcG9ydCBMZWdhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xlZ2FsLWluZm8tYnV0dG9uL2xlZ2FsLWluZm8tYnV0dG9uJ1xuaW1wb3J0IFJldmlld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3Jldmlld3MtYnV0dG9uL3Jldmlld3MtYnV0dG9uJztcbmltcG9ydCBOZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbic7XG5pbXBvcnQgSW52ZXN0bWVudHNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2ludmVzdG1lbnRzLWJ1dHRvbi9pbnZlc3RtZW50cy1idXR0b24nO1xuaW1wb3J0IERhc2hib2FyZEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uJztcbmltcG9ydCBQcm9kdWN0c0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3Byb2R1Y3RzLWJ1dHRvbnMvcHJvZHVjdHMtYnV0dG9ucyc7XG5pbXBvcnQgTWVzc2FnaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvbWVzc2FnaW5nLWJ1dHRvbnMnO1xuaW1wb3J0IENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMnO1xuaW1wb3J0IFJlbWFpbmluZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3JlbWFpbmluZy1idXR0b25zJztcblxuLy8gU28geW91IHdhbnQgaXQgdG8gY29uZGl0aW9uYWxseSByZW5kZXIgdGhlIGNvbnN1bWVyIG9yIGJ1c2luZXNzIGNvbXBvbmVudCBjb250aW5nZW50IG9uIHdoZXRoZXIgYnVzaW5lc3MgaXMgdHJ1ZVxuLy8gU2FtZSB3aXRoIHRoZSBkb2NrXG5cbmxldCBjb25zdW1lciA9IFwiL0NvbnN1bWVyLnBuZ1wiXG5sZXQgYnVzaW5lc3MgPSBcIi9CdXNpbmVzcy5wbmdcIlxubGV0IGJsYW5rID0gXCIvYmxhbmsucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3VtZXIyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IG5ld3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3MtYnV0dG9uLWNvbnRhaW5lclwiKVxuICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG5cbiAgICBidXNpbmVzc0NsaWNrZWRQYXJlbnQodmFsdWUpIHtcblxuICAgIH1cbiAgICB0d2lybEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IGJ1c2luZXNzQm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgfVxuXG4gICAgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJvb2xlYW46ICF0aGlzLnN0YXRlLm1lbnVCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgbWVudUJvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBtZW51XCIgKyB0aGlzLnN0YXRlLm1lbnVCb29sZWFuKVxuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKVxuICAgICAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWNoaWxkMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UtY29udGFpbmVyMlwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UyXCIgc3JjPXsgYmxhbmsgfSBhbHQ9XCJ0ZXh0XCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlLWJhY2tncm91bmQyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cblxuICAgIFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtaWNvbjJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtYnV0dG9uMlwiPlxuICAgIDxUcmVlQnV0dG9uPjwvVHJlZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWNhbC1pbmZvLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGljYWwtaW5mby1pY29uMlwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWNhbC1pbmZvLWJ1dHRvbjJcIj5cbiAgICA8TWVkaWNhbEluZm9CdXR0b24+PC9NZWRpY2FsSW5mb0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPE1lZGljYWxJbmZvQnV0dG9uPjwvTWVkaWNhbEluZm9CdXR0b24+XG4gICAgPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuICAgIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbiAgICA8TGVnYWxJbmZvQnV0dG9uPjwvTGVnYWxJbmZvQnV0dG9uPlxuICAgIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uLWNvbnRhaW5lcjJcIj5cbiAgICA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPEludmVzdG1lbnRzQnV0dG9uPjwvSW52ZXN0bWVudHNCdXR0b24+XG4gICAgPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbiAgICA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuICAgIDxNZXNzYWdpbmdCdXR0b25zPjwvTWVzc2FnaW5nQnV0dG9ucz5cbiAgICA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1haW5pbmctYnV0dG9ucy1jb250YWluZXIyXCI+XG4gICAgPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YCBcbiAgICAuY29uc3VtZXItcGFyZW50MiB7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMTU3cHg7XG4gICAgICAgIGJvdHRvbTogM3B4XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuY29uc3VtZXItY2hpbGQyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OjIwNDhweDtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5cbiAgICB9XG5cbiAgICAudHJlZS1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjk5MHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgYm9yZGVyOiA3cHggZ3JlZW4gc29saWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgfVxuXG5cblxuICAgIC50cmVlLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgYm9yZGVyOiAzcHggcHVycGxlIHNvbGlkO1xuICAgIH1cblxuICAgIC50cmVlLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMzM4cHg7XG4gICAgICAgIGxlZnQ6IDczcHg7XG4gICAgfVxuXG4gICAgLm1lZGljYWwtaW5mby1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjcwMHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICBib3JkZXI6IDdweCBncmVlbiBzb2xpZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICB9XG5cbiAgICAubWVkaWNhbC1pbmZvLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJvcmRlcjogM3B4IHB1cnBsZSBzb2xpZDtcbiAgICB9XG5cbiAgICAubWVkaWNhbC1pbmZvLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMzM4cHg7XG4gICAgICAgIGxlZnQ6IDczcHg7XG4gICAgfVxuXG5cblxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lcjIge1xuICAgIH1cblxuICAgIC5uZXdzLWJ1dHRvbi1jb250YWluZXIyOmhvdmVyIHtcbiAgICB9XG5cblxuICAgIC5jb25zdW1lci1pbWFnZS1jb250YWluZXIyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cblxuICAgIC5jb25zdW1lci1pbWFnZTIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGhlaWdodDogMjAwMHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBsZWZ0OiAxcHg7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyLWltYWdlLWJhY2tncm91bmQyIHtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgaGVpZ2h0OiAxOTQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMDAwMDAsICMwMjQ5MGEpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgei1pbmRleDowO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgICAgIHRvcDogMTAyMHB4O1xuICAgICAgICByaWdodDogMTUzNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuICAgIEBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gICAgICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbn1cbiAgICB9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Consumer2.js */"));
  }

}

/***/ })

})
//# sourceMappingURL=index.js.997cf72c2c6e646fb981.hot-update.js.map
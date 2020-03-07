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

var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/components/Consumer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
















 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
class Consumer extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

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

  businessClickedParent(value) {}

  render() {
    return __jsx("div", {
      className: "jsx-2276675171" + " " + "consumer-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2276675171" + " " + "consumer-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("img", {
      src: consumer,
      alt: "text",
      className: "jsx-2276675171" + " " + "consumer-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2276675171",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2276675171" + " " + "consumer-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2276675171" + " " + "tree-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx(_shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx(_shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx(_shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2276675171" + " " + "remaining-buttons-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2276675171",
      __self: this
    }, ".consumer-parent.jsx-2276675171{height:2048px;width:1536px;padding-top:14px;}.consumer-button-container.jsx-2276675171{position:relative;top:50px;}.consumer-image.jsx-2276675171{width:1536px;height:2048px;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvQ29uc3VtZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZnQixBQUdzQixBQVVJLEFBT0osYUFDQyxDQWpCRCxJQVVMLFNBVFMsQUFVckIsQUFPc0IsaUJBaEJ0QixDQWlCQSIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS1OZXh0L3NyYy9jb21wb25lbnRzL0NvbnN1bWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyZWVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3RyZWUtYnV0dG9uL3RyZWUtYnV0dG9uJztcbmltcG9ydCBNZWRpY2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbWVkaWNhbC1pbmZvLWJ1dHRvbi9tZWRpY2FsLWluZm8tYnV0dG9uJztcbmltcG9ydCBEb2N0b3JzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kb2N0b3JzLWJ1dHRvbi9kb2N0b3JzLWJ1dHRvbic7XG5pbXBvcnQgTGF3eWVyc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGF3eWVycy1idXR0b24vbGF3eWVycy1idXR0b24nO1xuaW1wb3J0IExlZ2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGVnYWwtaW5mby1idXR0b24vbGVnYWwtaW5mby1idXR0b24nXG5pbXBvcnQgUmV2aWV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmV2aWV3cy1idXR0b24vcmV2aWV3cy1idXR0b24nO1xuaW1wb3J0IE5ld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL25ld3MtYnV0dG9uL25ld3MtYnV0dG9uJztcbmltcG9ydCBJbnZlc3RtZW50c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvaW52ZXN0bWVudHMtYnV0dG9uL2ludmVzdG1lbnRzLWJ1dHRvbic7XG5pbXBvcnQgRGFzaGJvYXJkQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kYXNoYm9hcmQtYnV0dG9uL2Rhc2hib2FyZC1idXR0b24nO1xuaW1wb3J0IFByb2R1Y3RzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcHJvZHVjdHMtYnV0dG9ucy9wcm9kdWN0cy1idXR0b25zJztcbmltcG9ydCBNZXNzYWdpbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdpbmctYnV0dG9ucy9tZXNzYWdpbmctYnV0dG9ucyc7XG5pbXBvcnQgQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucyc7XG5pbXBvcnQgUmVtYWluaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcmVtYWluaW5nLWJ1dHRvbnMnO1xuXG4vLyBTbyB5b3Ugd2FudCBpdCB0byBjb25kaXRpb25hbGx5IHJlbmRlciB0aGUgY29uc3VtZXIgb3IgYnVzaW5lc3MgY29tcG9uZW50IGNvbnRpbmdlbnQgb24gd2hldGhlciBidXNpbmVzcyBpcyB0cnVlXG4vLyBTYW1lIHdpdGggdGhlIGRvY2tcblxubGV0IGNvbnN1bWVyID0gXCIvQ29uc3VtZXIucG5nXCJcbmxldCBidXNpbmVzcyA9IFwiL0J1c2luZXNzLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN1bWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgYnVzaW5lc3NDbGlja2VkUGFyZW50KHZhbHVlKSB7XG5cbiAgICB9XG4gICAgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgIH1cblxuICAgIHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgbWVudVwiICsgdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1wYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWNoaWxkXCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZVwiIHNyYz17IGNvbnN1bWVyIH0gYWx0PVwidGV4dFwiIC8+XG4gICAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxUcmVlQnV0dG9uPjwvVHJlZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8TWVkaWNhbEluZm9CdXR0b24+PC9NZWRpY2FsSW5mb0J1dHRvbj5cbiAgICA8RG9jdG9yc0J1dHRvbj48L0RvY3RvcnNCdXR0b24+XG4gICAgPExhd3llcnNCdXR0b24+PC9MYXd5ZXJzQnV0dG9uPlxuICAgIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4gICAgPFJldmlld3NCdXR0b24+PC9SZXZpZXdzQnV0dG9uPlxuICAgIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbiAgICA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbiAgICA8RGFzaGJvYXJkQnV0dG9uPjwvRGFzaGJvYXJkQnV0dG9uPlxuICAgIDxQcm9kdWN0c0J1dHRvbnM+PC9Qcm9kdWN0c0J1dHRvbnM+XG4gICAgPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuICAgIDxDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zPjwvQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWFpbmluZy1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgIDxSZW1haW5pbmdCdXR0b25zPjwvUmVtYWluaW5nQnV0dG9ucz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmNvbnN1bWVyLXBhcmVudCB7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29uc3VtZXItY2hpbGQge1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgdG9wOjUwcHg7XG4gICAgfVxuXG4gICAgLnRyZWUtYnV0dG9uLWNvbnRhaW5lciB7fVxuXG4gICAgLmNvbnN1bWVyLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgaGVpZ2h0OiAyMDQ4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5Db25zdW1lci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBicGk6IGRhdGEuYnBpXG4gIH07XG59XG5cbi8vIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4vLyA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4vLyA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4vLyA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbi8vIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4vLyA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuLy8gPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuLy8gPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuLy8gPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuXG5cbi8vIDx2aWRlbyBwcmVsb2FkPVwiYXV0b1wiIGF1dG9QbGF5IGxvb3AgY2xhc3NOYW1lPVwiZnVsbHNjcmVlbi12aWRlb1wiIHdpZHRoPVwiMTUzNlwiIGhlaWdodD1cIjIwNDhcIj5cbi8vIDxzb3VyY2Ugc3JjPVwiL1RyZWUubXA0XCIgXG4vLyAgICAgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxuLy8gICA8L3ZpZGVvPlxuXG4vLyBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICBjb25zdCB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGxzY3JlZW4tdmlkZW9cIilcbi8vICAgICBjb25zb2xlLmxvZyh2aWQpXG4vLyAgICAgdmlkLnBsYXkoKVxuLy8gfVxuXG4vLyA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4vLyA8TWVkaWNhbEluZm9CdXR0b24+PC9NZWRpY2FsSW5mb0J1dHRvbj5cbi8vIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbi8vIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbi8vIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4vLyA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4vLyA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4vLyA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbi8vIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4vLyA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuLy8gPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuLy8gPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuLy8gPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/Consumer.js */"));
  }

}

Consumer.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
}; // <LegalInfoButton></LegalInfoButton>
// <ReviewsButton></ReviewsButton>
// <NewsButton></NewsButton>
// <InvestmentsButton></InvestmentsButton>
// <DashboardButton></DashboardButton>
// <ProductsButtons></ProductsButtons>
// <MessagingButtons></MessagingButtons>
// <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
// <RemainingButtons></RemainingButtons>
// <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
// <source src="/Tree.mp4" 
//     type="video/mp4"></source>
//   </video>
// componentDidMount() {
//     const vid = document.querySelector(".fullscreen-video")
//     console.log(vid)
//     vid.play()
// }
// <TreeButton></TreeButton>
// <MedicalInfoButton></MedicalInfoButton>
// <DoctorsButton></DoctorsButton>
// <LawyersButton></LawyersButton>
// <LegalInfoButton></LegalInfoButton>
// <ReviewsButton></ReviewsButton>
// <NewsButton></NewsButton>
// <InvestmentsButton></InvestmentsButton>
// <DashboardButton></DashboardButton>
// <ProductsButtons></ProductsButtons>
// <MessagingButtons></MessagingButtons>
// <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
// <RemainingButtons></RemainingButtons>

/***/ })

})
//# sourceMappingURL=index.js.60db1d36ee3aede6661f.hot-update.js.map
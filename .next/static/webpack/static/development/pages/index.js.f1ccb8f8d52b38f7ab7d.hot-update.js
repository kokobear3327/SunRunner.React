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
      className: "jsx-1946598157" + " " + "consumer-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1946598157" + " " + "consumer-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("img", {
      src: consumer,
      alt: "text",
      className: "jsx-1946598157" + " " + "consumer-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1946598157",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1946598157" + " " + "consumer-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1946598157" + " " + "tree-button-container",
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
      className: "jsx-1946598157" + " " + "remaining-buttons-container",
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
      id: "1946598157",
      __self: this
    }, ".consumer-parent.jsx-1946598157{height:2048px;width:1536px;}.consumer-image.jsx-1946598157{width:1536px;height:2048px;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvQ29uc3VtZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZnQixBQUdzQixBQWVBLGFBQ0MsQ0FmRCxhQUNqQixBQWVzQixrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEtTmV4dC9zcmMvY29tcG9uZW50cy9Db25zdW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC90cmVlLWJ1dHRvbi90cmVlLWJ1dHRvbic7XG5pbXBvcnQgTWVkaWNhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL21lZGljYWwtaW5mby1idXR0b24vbWVkaWNhbC1pbmZvLWJ1dHRvbic7XG5pbXBvcnQgRG9jdG9yc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvZG9jdG9ycy1idXR0b24vZG9jdG9ycy1idXR0b24nO1xuaW1wb3J0IExhd3llcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xhd3llcnMtYnV0dG9uL2xhd3llcnMtYnV0dG9uJztcbmltcG9ydCBMZWdhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xlZ2FsLWluZm8tYnV0dG9uL2xlZ2FsLWluZm8tYnV0dG9uJ1xuaW1wb3J0IFJldmlld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3Jldmlld3MtYnV0dG9uL3Jldmlld3MtYnV0dG9uJztcbmltcG9ydCBOZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbic7XG5pbXBvcnQgSW52ZXN0bWVudHNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2ludmVzdG1lbnRzLWJ1dHRvbi9pbnZlc3RtZW50cy1idXR0b24nO1xuaW1wb3J0IERhc2hib2FyZEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uJztcbmltcG9ydCBQcm9kdWN0c0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3Byb2R1Y3RzLWJ1dHRvbnMvcHJvZHVjdHMtYnV0dG9ucyc7XG5pbXBvcnQgTWVzc2FnaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvbWVzc2FnaW5nLWJ1dHRvbnMnO1xuaW1wb3J0IENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMnO1xuaW1wb3J0IFJlbWFpbmluZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3JlbWFpbmluZy1idXR0b25zJztcblxuLy8gU28geW91IHdhbnQgaXQgdG8gY29uZGl0aW9uYWxseSByZW5kZXIgdGhlIGNvbnN1bWVyIG9yIGJ1c2luZXNzIGNvbXBvbmVudCBjb250aW5nZW50IG9uIHdoZXRoZXIgYnVzaW5lc3MgaXMgdHJ1ZVxuLy8gU2FtZSB3aXRoIHRoZSBkb2NrXG5cbmxldCBjb25zdW1lciA9IFwiL0NvbnN1bWVyLnBuZ1wiXG5sZXQgYnVzaW5lc3MgPSBcIi9CdXNpbmVzcy5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdW1lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgbWVudUJvb2xlYW46IGZhbHNlXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIGJ1c2luZXNzQ2xpY2tlZFBhcmVudCh2YWx1ZSkge1xuXG4gICAgfVxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBtZW51Qm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIG1lbnVcIiArIHRoaXMuc3RhdGUubWVudUJvb2xlYW4pXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1jaGlsZFwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2VcIiBzcmM9eyBjb25zdW1lciB9IGFsdD1cInRleHRcIiAvPlxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1idXR0b24tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPE1lZGljYWxJbmZvQnV0dG9uPjwvTWVkaWNhbEluZm9CdXR0b24+XG4gICAgPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuICAgIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbiAgICA8TGVnYWxJbmZvQnV0dG9uPjwvTGVnYWxJbmZvQnV0dG9uPlxuICAgIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbiAgICA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4gICAgPEludmVzdG1lbnRzQnV0dG9uPjwvSW52ZXN0bWVudHNCdXR0b24+XG4gICAgPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbiAgICA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuICAgIDxNZXNzYWdpbmdCdXR0b25zPjwvTWVzc2FnaW5nQnV0dG9ucz5cbiAgICA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1haW5pbmctYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgIC5jb25zdW1lci1wYXJlbnQge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgIH1cbiAgICBcbiAgICAuY29uc3VtZXItY2hpbGQge1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXIge1xuICAgIFxuICAgIH1cblxuICAgIC50cmVlLWJ1dHRvbi1jb250YWluZXIge31cblxuICAgIC5jb25zdW1lci1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGhlaWdodDogMjA0OHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuQ29uc3VtZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgYnBpOiBkYXRhLmJwaVxuICB9O1xufVxuXG4vLyA8TGVnYWxJbmZvQnV0dG9uPjwvTGVnYWxJbmZvQnV0dG9uPlxuLy8gPFJldmlld3NCdXR0b24+PC9SZXZpZXdzQnV0dG9uPlxuLy8gPE5ld3NCdXR0b24+PC9OZXdzQnV0dG9uPlxuLy8gPEludmVzdG1lbnRzQnV0dG9uPjwvSW52ZXN0bWVudHNCdXR0b24+XG4vLyA8RGFzaGJvYXJkQnV0dG9uPjwvRGFzaGJvYXJkQnV0dG9uPlxuLy8gPFByb2R1Y3RzQnV0dG9ucz48L1Byb2R1Y3RzQnV0dG9ucz5cbi8vIDxNZXNzYWdpbmdCdXR0b25zPjwvTWVzc2FnaW5nQnV0dG9ucz5cbi8vIDxDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zPjwvQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz5cbi8vIDxSZW1haW5pbmdCdXR0b25zPjwvUmVtYWluaW5nQnV0dG9ucz5cblxuXG4vLyA8dmlkZW8gcHJlbG9hZD1cImF1dG9cIiBhdXRvUGxheSBsb29wIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4tdmlkZW9cIiB3aWR0aD1cIjE1MzZcIiBoZWlnaHQ9XCIyMDQ4XCI+XG4vLyA8c291cmNlIHNyYz1cIi9UcmVlLm1wNFwiIFxuLy8gICAgIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cbi8vICAgPC92aWRlbz5cblxuLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgY29uc3QgdmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdWxsc2NyZWVuLXZpZGVvXCIpXG4vLyAgICAgY29uc29sZS5sb2codmlkKVxuLy8gICAgIHZpZC5wbGF5KClcbi8vIH1cblxuLy8gPFRyZWVCdXR0b24+PC9UcmVlQnV0dG9uPlxuLy8gPE1lZGljYWxJbmZvQnV0dG9uPjwvTWVkaWNhbEluZm9CdXR0b24+XG4vLyA8RG9jdG9yc0J1dHRvbj48L0RvY3RvcnNCdXR0b24+XG4vLyA8TGF3eWVyc0J1dHRvbj48L0xhd3llcnNCdXR0b24+XG4vLyA8TGVnYWxJbmZvQnV0dG9uPjwvTGVnYWxJbmZvQnV0dG9uPlxuLy8gPFJldmlld3NCdXR0b24+PC9SZXZpZXdzQnV0dG9uPlxuLy8gPE5ld3NCdXR0b24+PC9OZXdzQnV0dG9uPlxuLy8gPEludmVzdG1lbnRzQnV0dG9uPjwvSW52ZXN0bWVudHNCdXR0b24+XG4vLyA8RGFzaGJvYXJkQnV0dG9uPjwvRGFzaGJvYXJkQnV0dG9uPlxuLy8gPFByb2R1Y3RzQnV0dG9ucz48L1Byb2R1Y3RzQnV0dG9ucz5cbi8vIDxNZXNzYWdpbmdCdXR0b25zPjwvTWVzc2FnaW5nQnV0dG9ucz5cbi8vIDxDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zPjwvQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz5cbi8vIDxSZW1haW5pbmdCdXR0b25zPjwvUmVtYWluaW5nQnV0dG9ucz5cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/Consumer.js */"));
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
//# sourceMappingURL=index.js.f1ccb8f8d52b38f7ab7d.hot-update.js.map
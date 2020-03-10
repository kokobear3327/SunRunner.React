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
      className: "jsx-1869691221" + " " + "consumer-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "consumer-child2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "consumer-image-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("img", {
      src: blank,
      alt: "text",
      className: "jsx-1869691221" + " " + "consumer-image2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "consumer-image-background2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1869691221",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "tree-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "tree-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "tree-button2",
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
      className: "jsx-1869691221" + " " + "medical-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "medical-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "medical-info-button2",
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
    }))), __jsx("div", {
      className: "jsx-1869691221" + " " + "doctors-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "doctors-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "doctors-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1869691221" + " " + "lawyers-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "lawyers-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "lawyers-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1869691221" + " " + "legal-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "legal-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "legal-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1869691221" + " " + "reviews-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1869691221" + " " + "reviews-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "reviews-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1869691221" + " " + "news-button-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    })), __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), __jsx(_shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), __jsx(_shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), __jsx(_shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1869691221" + " " + "remaining-buttons-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1869691221",
      __self: this
    }, ".consumer-parent2.jsx-1869691221{height:2048px;width:1536px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;right:157px;bottom:3px justify-content:center;}.consumer-child2.jsx-1869691221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2048px;width:1536px;position:relative;}.tree-parent2.jsx-1869691221{position:relative;right:2971px;width:130px;height:130px;color:yellow;top:260px;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.tree-icon2.jsx-1869691221{width:130px;height:130px;color:yellow;background-color:yellow;}.tree-button2.jsx-1869691221{position:relative;top:338px;left:73px;}.medical-info-parent2.jsx-1869691221{position:relative;right:2704px;width:130px;height:130px;color:yellow;top:131px;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.medical-info-icon2.jsx-1869691221{width:130px!important;height:130px;color:yellow;background-color:yellow;}.medical-info-button2.jsx-1869691221{position:relative;top:528px;left:414px;}.doctors-info-parent2.jsx-1869691221{position:relative;right:2437px;width:130px;height:130px;color:yellow;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:0px;}.doctors-info-icon2.jsx-1869691221{width:130px!important;height:130px;color:yellow;background-color:yellow;}.doctors-info-button2.jsx-1869691221{position:relative;top:714px;left:381px;}.lawyers-info-parent2.jsx-1869691221{position:relative;right:2210px;width:130px;height:130px;color:yellow;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:192px;}.lawyers-info-icon2.jsx-1869691221{width:130px!important;height:130px;color:yellow;background-color:yellow;}.lawyers-info-button2.jsx-1869691221{position:relative;top:758px;right:102px;}.legal-info-parent2.jsx-1869691221{position:relative;right:1950px;width:130px;height:130px;color:yellow;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:322px;}.legal-info-icon2.jsx-1869691221{width:130px!important;height:130px;color:yellow;background-color:yellow;}.legal-info-button2.jsx-1869691221{position:relative;top:666px;right:162px;white-space:nowrap;}.legal-info-parent2.jsx-1869691221{position:relative;right:1950px;width:130px;height:130px;color:yellow;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:322px;}.legal-info-icon2.jsx-1869691221{width:130px!important;height:130px;color:yellow;background-color:yellow;}.legal-info-button2.jsx-1869691221{position:relative;top:666px;right:162px;white-space:nowrap;}.reviews-parent2.jsx-1869691221{position:relative;right:2971px;width:130px;height:130px;color:yellow;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:103px;}.reviews-icon2.jsx-1869691221{width:130px!important;height:130px;color:yellow;background-color:yellow;}.reviews-button2.jsx-1869691221{position:relative;top:1460px;left:4143px;white-space:nowrap;}.consumer-image-container2.jsx-1869691221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.consumer-image2.jsx-1869691221{position:relative;z-index:1;height:2000px;width:1536px;left:1px;}.consumer-image-background2.jsx-1869691221{width:1536px;height:1940px;background:linear-gradient(270deg,#000000,#02490a);background-size:400% 400%;-webkit-animation:AnimationName-jsx-1869691221 10s ease-in-out infinite;animation:AnimationName-jsx-1869691221 10s ease-in-out infinite;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);top:1020px;right:1535px;position:relative;}@-webkit-keyframes AnimationName-jsx-1869691221{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-1869691221{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SWdCLEFBR3NCLEFBVUEsQUFlSyxBQVlOLEFBT00sQUFTQSxBQVlJLEFBT0osQUFRQSxBQWVJLEFBT0osQUFRQSxBQVlJLEFBT0osQUFTQSxBQVlJLEFBT0osQUFPQSxBQVlJLEFBT0osQUFPQSxBQVlJLEFBUUosQUFzQkwsQUFLSyxBQVFMLEFBY2MsQUFDRyxBQUNELFlBL05qQixDQWdORSxDQXJQRCxJQXlCQSxBQW1CSCxBQVNHLEFBbUJILEFBUUcsQUFzQkgsQUFRRyxBQW1CSCxBQVNHLEFBbUJILEFBT0csQUFtQkgsQUFPRyxBQW9CRixBQTJCRCxJQTVLRSxBQThCQSxBQTJCQSxBQTRCQSxBQTBCQSxBQTBCQSxHQXBLQyxFQXJDRCxBQXFQeUMsQUFZekIsQUFFRSxDQXZOcEIsQUE0QkMsQUE4QkEsQUEyQkMsQUE0QkEsQUEwQkEsQUFzREUsQ0EzQkYsQUFnRG1CLEVBek9uQixBQTRCQSxBQTJCQSxBQThCQSxBQTRCQSxBQTBCQSxBQTBCQSxJQTdIQyxBQThCQSxBQTJCQSxBQTRCQSxBQTBCQSxBQTBCQSxHQXBLVyxBQU81QixDQTRCQSxBQThCQSxDQTJCQSxBQTRCdUIsQUEwQkEsQ0EyQkEsQ0EyQk4sQ0FwTkQsQUE0QkMsQUEyQkEsQUE4QkQsQUE0QkEsQUEwQkEsQUEwQkEsS0E3SFksQUE4QkEsQUEyQkEsQUE0QkEsQUEwQkEsQUEwQkEsT0FvQ2YsQ0FwTkksQUE0QkEsQUEyQkEsQUE4QkEsQUE0QkEsQUEwQkEsQUEwQkEsR0FqQ2pCLEFBMEJBLENBMkJBLEVBN0tBLEVBeU1BLEtBcE5jLEFBNEJBLEFBMkJhLEFBOEJBLEFBNEJBLEFBMEJBLEFBMEJBLEdBOUgzQixBQThCQSxBQTJCQSxBQTRCQSxBQTBCQSxBQTJCQSxFQXBNaUIsQUE4TmpCLElBZThCLENBek5ILEFBNEJBLFNBL0NWLElBMEVPLEFBOEJQLEFBNEJBLEFBMEJBLEFBMEJBLFNBak1LLEFBVUEsQ0FtQkwsQUE0QkEsRUE2TG9DLFFBbEs1QixPQW5GVCxBQVVoQixZQVIyQixFQWtGSCxvQkFDUCxZQWxGakIsQ0E4R2MsQUE0QkEsQUEwQkEsQUEwQkEsVUFwS0EsQUE0QkEsQ0F5REcsQUE0QkEsQUEwQkEsQUEwQkEsVUFwS2pCLEFBNEJBLEdBeURBLEFBNEJBLEFBMEJBLEFBMEJBLHFDQTdHZSxXQUNBLEVBK0pGLFNBOUpiLENBK0ppQiwwRUFDaUIsbUdBQ25CLFdBQ0UsYUFDSyxrQkFRdEIiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL2NvbXBvbmVudHMvQ29uc3VtZXIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyZWVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3RyZWUtYnV0dG9uL3RyZWUtYnV0dG9uJztcbmltcG9ydCBNZWRpY2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbWVkaWNhbC1pbmZvLWJ1dHRvbi9tZWRpY2FsLWluZm8tYnV0dG9uJztcbmltcG9ydCBEb2N0b3JzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kb2N0b3JzLWJ1dHRvbi9kb2N0b3JzLWJ1dHRvbic7XG5pbXBvcnQgTGF3eWVyc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGF3eWVycy1idXR0b24vbGF3eWVycy1idXR0b24nO1xuaW1wb3J0IExlZ2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGVnYWwtaW5mby1idXR0b24vbGVnYWwtaW5mby1idXR0b24nXG5pbXBvcnQgUmV2aWV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmV2aWV3cy1idXR0b24vcmV2aWV3cy1idXR0b24nO1xuaW1wb3J0IE5ld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL25ld3MtYnV0dG9uL25ld3MtYnV0dG9uJztcbmltcG9ydCBJbnZlc3RtZW50c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvaW52ZXN0bWVudHMtYnV0dG9uL2ludmVzdG1lbnRzLWJ1dHRvbic7XG5pbXBvcnQgRGFzaGJvYXJkQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kYXNoYm9hcmQtYnV0dG9uL2Rhc2hib2FyZC1idXR0b24nO1xuaW1wb3J0IFByb2R1Y3RzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcHJvZHVjdHMtYnV0dG9ucy9wcm9kdWN0cy1idXR0b25zJztcbmltcG9ydCBNZXNzYWdpbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdpbmctYnV0dG9ucy9tZXNzYWdpbmctYnV0dG9ucyc7XG5pbXBvcnQgQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucyc7XG5pbXBvcnQgUmVtYWluaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcmVtYWluaW5nLWJ1dHRvbnMnO1xuXG4vLyBTbyB5b3Ugd2FudCBpdCB0byBjb25kaXRpb25hbGx5IHJlbmRlciB0aGUgY29uc3VtZXIgb3IgYnVzaW5lc3MgY29tcG9uZW50IGNvbnRpbmdlbnQgb24gd2hldGhlciBidXNpbmVzcyBpcyB0cnVlXG4vLyBTYW1lIHdpdGggdGhlIGRvY2tcblxubGV0IGNvbnN1bWVyID0gXCIvQ29uc3VtZXIucG5nXCJcbmxldCBidXNpbmVzcyA9IFwiL0J1c2luZXNzLnBuZ1wiXG5sZXQgYmxhbmsgPSBcIi9ibGFuay5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdW1lcjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbmV3c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3cy1idXR0b24tY29udGFpbmVyXCIpXG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIG1lbnVCb29sZWFuOiBmYWxzZVxuICAgIH1cblxuICAgIGJ1c2luZXNzQ2xpY2tlZFBhcmVudCh2YWx1ZSkge1xuXG4gICAgfVxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBtZW51Qm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIG1lbnVcIiArIHRoaXMuc3RhdGUubWVudUJvb2xlYW4pXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItY2hpbGQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZS1jb250YWluZXIyXCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZTJcIiBzcmM9eyBibGFuayB9IGFsdD1cInRleHRcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UtYmFja2dyb3VuZDJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuXG4gICAgXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1pY29uMlwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1idXR0b24yXCI+XG4gICAgPFRyZWVCdXR0b24+PC9UcmVlQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpY2FsLWluZm8tcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWNhbC1pbmZvLWljb24yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpY2FsLWluZm8tYnV0dG9uMlwiPlxuICAgIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3JzLWluZm8tcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9ycy1pbmZvLWljb24yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3JzLWluZm8tYnV0dG9uMlwiPlxuICAgIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF3eWVycy1pbmZvLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxhd3llcnMtaW5mby1pY29uMlwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF3eWVycy1pbmZvLWJ1dHRvbjJcIj5cbiAgICA8TGF3eWVyc0J1dHRvbj48L0xhd3llcnNCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2FsLWluZm8tcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnYWwtaW5mby1pY29uMlwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnYWwtaW5mby1idXR0b24yXCI+XG4gICAgPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3cy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzLWljb24yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzLWJ1dHRvbjJcIj5cbiAgICA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvbi1jb250YWluZXIyXCI+XG4gICAgPE5ld3NCdXR0b24+PC9OZXdzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuICAgIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4gICAgPFByb2R1Y3RzQnV0dG9ucz48L1Byb2R1Y3RzQnV0dG9ucz5cbiAgICA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4gICAgPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtYWluaW5nLWJ1dHRvbnMtY29udGFpbmVyMlwiPlxuICAgIDxSZW1haW5pbmdCdXR0b25zPjwvUmVtYWluaW5nQnV0dG9ucz5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmNvbnN1bWVyLXBhcmVudDIge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDE1N3B4O1xuICAgICAgICBib3R0b206IDNweFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmNvbnN1bWVyLWNoaWxkMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG4gICAgLnRyZWUtcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDI5NzFweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIHRvcDogMjYwcHg7XG4gICAgICAgIGJvcmRlcjogN3B4IGdyZWVuIHNvbGlkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgIH1cblxuICAgIC50cmVlLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICB9XG5cbiAgICAudHJlZS1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDMzOHB4O1xuICAgICAgICBsZWZ0OiA3M3B4O1xuICAgIH1cblxuXG5cblxuICAgIC5tZWRpY2FsLWluZm8tcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDI3MDRweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICB0b3A6IDEzMXB4O1xuICAgICAgICBib3JkZXI6IDdweCBncmVlbiBzb2xpZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICB9XG5cbiAgICAubWVkaWNhbC1pbmZvLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuXG4gICAgLm1lZGljYWwtaW5mby1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDUyOHB4O1xuICAgICAgICBsZWZ0OiA0MTRweDtcbiAgICB9XG5cblxuXG4gICAgLmRvY3RvcnMtaW5mby1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjQzN3B4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJvcmRlcjogN3B4IGdyZWVuIHNvbGlkO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDogMzI7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgIC5kb2N0b3JzLWluZm8taWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICB9XG5cbiAgICAuZG9jdG9ycy1pbmZvLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNzE0cHg7XG4gICAgICAgIGxlZnQ6IDM4MXB4O1xuICAgIH1cblxuXG5cbiAgICAubGF3eWVycy1pbmZvLXBhcmVudDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAyMjEwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBib3JkZXI6IDdweCBncmVlbiBzb2xpZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiAxOTJweDtcbiAgICB9XG5cbiAgICAubGF3eWVycy1pbmZvLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuXG4gICAgLmxhd3llcnMtaW5mby1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDc1OHB4O1xuICAgICAgICByaWdodDogMTAycHg7XG4gICAgfVxuXG5cblxuXG4gICAgLmxlZ2FsLWluZm8tcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDE5NTBweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJvcmRlcjogN3B4IGdyZWVuIHNvbGlkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgICAgICBib3R0b206IDMyMnB4O1xuICAgIH1cblxuICAgIC5sZWdhbC1pbmZvLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuXG4gICAgLmxlZ2FsLWluZm8tYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA2NjZweDtcbiAgICAgICAgcmlnaHQ6IDE2MnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5sZWdhbC1pbmZvLXBhcmVudDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAxOTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBib3JkZXI6IDdweCBncmVlbiBzb2xpZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiAzMjJweDtcbiAgICB9XG5cbiAgICAubGVnYWwtaW5mby1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIH1cblxuICAgIC5sZWdhbC1pbmZvLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNjY2cHg7XG4gICAgICAgIHJpZ2h0OiAxNjJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAucmV2aWV3cy1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjk3MXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgYm9yZGVyOiA3cHggZ3JlZW4gc29saWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgICAgIGJvdHRvbTogMTAzcHg7XG4gICAgfVxuXG4gICAgLnJldmlld3MtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgIFxuICAgIH1cblxuICAgIC5yZXZpZXdzLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTQ2MHB4O1xuICAgICAgICBsZWZ0OiA0MTQzcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuICAgIC5uZXdzLWJ1dHRvbi1jb250YWluZXIyIHtcbiAgICB9XG5cbiAgICAubmV3cy1idXR0b24tY29udGFpbmVyMjpob3ZlciB7XG4gICAgfVxuXG5cbiAgICAuY29uc3VtZXItaW1hZ2UtY29udGFpbmVyMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG5cbiAgICAuY29uc3VtZXItaW1hZ2UyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IDIwMDBweDtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgIH1cblxuICAgIC5jb25zdW1lci1pbWFnZS1iYWNrZ3JvdW5kMiB7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGhlaWdodDogMTk0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAwMDAwLCAjMDI0OTBhKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIHotaW5kZXg6MDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgICAgICB0b3A6IDEwMjBweDtcbiAgICAgICAgcmlnaHQ6IDE1MzVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5cbiAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XG4gICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG59XG4gICAgfVxuXG5cbiAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Consumer2.js */"));
  }

}

/***/ })

})
//# sourceMappingURL=index.js.5e6d8a0fac489b83dded.hot-update.js.map
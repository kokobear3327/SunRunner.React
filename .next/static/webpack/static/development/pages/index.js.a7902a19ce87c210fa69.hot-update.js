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
      className: "jsx-242900919" + " " + "consumer-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-242900919" + " " + "consumer-child2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-242900919" + " " + "consumer-image-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("img", {
      src: blank,
      alt: "text",
      className: "jsx-242900919" + " " + "consumer-image2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-242900919" + " " + "consumer-image-background2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-242900919",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-242900919" + " " + "tree-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-242900919" + " " + "tree-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-242900919" + " " + "tree-button2",
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
      className: "jsx-242900919" + " " + "medical-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-242900919" + " " + "medical-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-242900919" + " " + "medical-info-button2",
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
      className: "jsx-242900919" + " " + "news-button-container2",
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
      className: "jsx-242900919" + " " + "remaining-buttons-container2",
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
      id: "242900919",
      __self: this
    }, ".consumer-parent2.jsx-242900919{height:2048px;width:1536px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;right:157px;bottom:3px justify-content:center;}.consumer-child2.jsx-242900919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2048px;width:1536px;position:relative;}.tree-parent2.jsx-242900919{position:relative;right:2990px;width:130px;height:130px;color:yellow;top:200px;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.tree-icon2.jsx-242900919{width:130px;height:130px;color:yellow;background-color:yellow;border:3px purple solid;}.tree-button2.jsx-242900919{position:relative;top:238px;left:73px;}.medical-info-parent2.jsx-242900919{position:relative;right:2990px;width:130px;height:130px;color:yellow;top:200px;border:7px green solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.medical-info-icon2.jsx-242900919{width:130px!important;height:130px;color:yellow;background-color:yellow;border:3px purple solid;}.medical-info-button2.jsx-242900919{position:relative;top:338px;left:73px;}.consumer-image-container2.jsx-242900919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.consumer-image2.jsx-242900919{position:relative;z-index:1;height:2000px;width:1536px;left:1px;}.consumer-image-background2.jsx-242900919{width:1536px;height:1940px;background:linear-gradient(270deg,#000000,#02490a);background-size:400% 400%;-webkit-animation:AnimationName-jsx-242900919 10s ease-in-out infinite;animation:AnimationName-jsx-242900919 10s ease-in-out infinite;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);top:1020px;right:1534px;position:relative;}@-webkit-keyframes AnimationName-jsx-242900919{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-242900919{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R2dCLEFBR3NCLEFBVUEsQUFTSyxBQWNOLEFBUU0sQUFNQSxBQVlJLEFBUUosQUFnQkwsQUFLSyxBQVFMLEFBY2MsQUFDRyxBQUNELFlBOUVqQixDQStERSxDQWhHRCxJQW1CQSxBQXNCSCxBQU1HLEFBb0JILEFBcUJBLElBN0JFLEdBekJDLEVBakNELEFBZ0d5QyxBQVl6QixBQUVFLENBckVwQixBQTBCQSxBQXFCSSxDQXFCaUIsRUExRm5CLEFBNEJBLElBWUMsR0F6QlcsQUFRNUIsQUEwQkEsSUFxQmlCLENBckVELEFBNEJBLEtBWVksT0E4QmYsQ0FyRUksQUE0QkEsTUFkVyxFQXdENUIsS0FyRWMsQUE0QkEsR0FXYyxFQXBEWCxBQXlFakIsSUFlOEIsQ0ExRUgsQUE0QkEsT0FmM0IsRUExQmlCLFFBb0RqQixLQTdEc0IsQUFVQSxDQWFMLEFBNEJBLEVBOENvQyxlQWhHckMsQUFZaEIsWUFWMkIsa0NBQzNCLFdBb0JjLEFBNEJBLFdBM0JkLEFBNEJBLG1EQTZDYSxVQUNJLDBFQUNpQixtR0FDbkIsV0FDRSxhQUNLLGtCQVF0QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS9zcmMvY29tcG9uZW50cy9Db25zdW1lcjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJlZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvdHJlZS1idXR0b24vdHJlZS1idXR0b24nO1xuaW1wb3J0IE1lZGljYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9tZWRpY2FsLWluZm8tYnV0dG9uL21lZGljYWwtaW5mby1idXR0b24nO1xuaW1wb3J0IERvY3RvcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2RvY3RvcnMtYnV0dG9uL2RvY3RvcnMtYnV0dG9uJztcbmltcG9ydCBMYXd5ZXJzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sYXd5ZXJzLWJ1dHRvbi9sYXd5ZXJzLWJ1dHRvbic7XG5pbXBvcnQgTGVnYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sZWdhbC1pbmZvLWJ1dHRvbi9sZWdhbC1pbmZvLWJ1dHRvbidcbmltcG9ydCBSZXZpZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZXZpZXdzLWJ1dHRvbi9yZXZpZXdzLWJ1dHRvbic7XG5pbXBvcnQgTmV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24nO1xuaW1wb3J0IEludmVzdG1lbnRzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9pbnZlc3RtZW50cy1idXR0b24vaW52ZXN0bWVudHMtYnV0dG9uJztcbmltcG9ydCBEYXNoYm9hcmRCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2Rhc2hib2FyZC1idXR0b24vZGFzaGJvYXJkLWJ1dHRvbic7XG5pbXBvcnQgUHJvZHVjdHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9wcm9kdWN0cy1idXR0b25zL3Byb2R1Y3RzLWJ1dHRvbnMnO1xuaW1wb3J0IE1lc3NhZ2luZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2luZy1idXR0b25zL21lc3NhZ2luZy1idXR0b25zJztcbmltcG9ydCBDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zJztcbmltcG9ydCBSZW1haW5pbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9yZW1haW5pbmctYnV0dG9ucyc7XG5cbi8vIFNvIHlvdSB3YW50IGl0IHRvIGNvbmRpdGlvbmFsbHkgcmVuZGVyIHRoZSBjb25zdW1lciBvciBidXNpbmVzcyBjb21wb25lbnQgY29udGluZ2VudCBvbiB3aGV0aGVyIGJ1c2luZXNzIGlzIHRydWVcbi8vIFNhbWUgd2l0aCB0aGUgZG9ja1xuXG5sZXQgY29uc3VtZXIgPSBcIi9Db25zdW1lci5wbmdcIlxubGV0IGJ1c2luZXNzID0gXCIvQnVzaW5lc3MucG5nXCJcbmxldCBibGFuayA9IFwiL2JsYW5rLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN1bWVyMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBuZXdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdzLWJ1dHRvbi1jb250YWluZXJcIilcbiAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgbWVudUJvb2xlYW46IGZhbHNlXG4gICAgfVxuXG4gICAgYnVzaW5lc3NDbGlja2VkUGFyZW50KHZhbHVlKSB7XG5cbiAgICB9XG4gICAgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgIH1cblxuICAgIHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgbWVudVwiICsgdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1jaGlsZDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlLWNvbnRhaW5lcjJcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlMlwiIHNyYz17IGJsYW5rIH0gYWx0PVwidGV4dFwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZS1iYWNrZ3JvdW5kMlwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG5cbiAgICBcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWljb24yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWJ1dHRvbjJcIj5cbiAgICA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGljYWwtaW5mby1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpY2FsLWluZm8taWNvbjJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGljYWwtaW5mby1idXR0b24yXCI+XG4gICAgPE1lZGljYWxJbmZvQnV0dG9uPjwvTWVkaWNhbEluZm9CdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuICAgIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbiAgICA8TGF3eWVyc0J1dHRvbj48L0xhd3llcnNCdXR0b24+XG4gICAgPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbiAgICA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvbi1jb250YWluZXIyXCI+XG4gICAgPE5ld3NCdXR0b24+PC9OZXdzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuICAgIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4gICAgPFByb2R1Y3RzQnV0dG9ucz48L1Byb2R1Y3RzQnV0dG9ucz5cbiAgICA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4gICAgPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtYWluaW5nLWJ1dHRvbnMtY29udGFpbmVyMlwiPlxuICAgIDxSZW1haW5pbmdCdXR0b25zPjwvUmVtYWluaW5nQnV0dG9ucz5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmNvbnN1bWVyLXBhcmVudDIge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDE1N3B4O1xuICAgICAgICBib3R0b206IDNweFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmNvbnN1bWVyLWNoaWxkMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgfVxuXG4gICAgLnRyZWUtcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDI5OTBweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgIGJvcmRlcjogN3B4IGdyZWVuIHNvbGlkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgIH1cblxuXG5cbiAgICAudHJlZS1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJvcmRlcjogM3B4IHB1cnBsZSBzb2xpZDtcbiAgICB9XG5cbiAgICAudHJlZS1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDIzOHB4O1xuICAgICAgICBsZWZ0OiA3M3B4O1xuICAgIH1cblxuICAgIC5tZWRpY2FsLWluZm8tcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDI5OTBweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgIGJvcmRlcjogN3B4IGdyZWVuIHNvbGlkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgIH1cblxuICAgIC5tZWRpY2FsLWluZm8taWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgYm9yZGVyOiAzcHggcHVycGxlIHNvbGlkO1xuICAgIH1cblxuICAgIC5tZWRpY2FsLWluZm8tYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzMzhweDtcbiAgICAgICAgbGVmdDogNzNweDtcbiAgICB9XG5cblxuXG5cbiAgICAubmV3cy1idXR0b24tY29udGFpbmVyMiB7XG4gICAgfVxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lcjI6aG92ZXIge1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWltYWdlLWNvbnRhaW5lcjIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWltYWdlMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaGVpZ2h0OiAyMDAwcHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICB9XG5cbiAgICAuY29uc3VtZXItaW1hZ2UtYmFja2dyb3VuZDIge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDE5NDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzAyNDkwYSk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAgICAgdG9wOiAxMDIwcHg7XG4gICAgICAgIHJpZ2h0OiAxNTM0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgQGtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcbiAgICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuICAgICAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxufVxuICAgIH1cblxuXG4gIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Consumer2.js */"));
  }

}

/***/ })

})
//# sourceMappingURL=index.js.a7902a19ce87c210fa69.hot-update.js.map
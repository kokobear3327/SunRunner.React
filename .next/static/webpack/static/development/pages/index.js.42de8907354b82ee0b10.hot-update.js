webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
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
/* harmony import */ var _components_Business__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Business */ "./src/components/Business.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");

var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







 // import LegalInfoButton from '../shared/legal-info-button/legal-info-button'
// import ReviewsButton from '../shared/reviews-button/reviews-button';
// import NewsButton from '../shared/news-button/news-button';
// import InvestmentsButton from '../shared/investments-button/investments-button';
// import DashboardButton from '../shared/dashboard-button/dashboard-button';
// import ProductsButtons from '../shared/products-buttons/products-buttons';
// import MessagingButtons from '../shared/messaging-buttons/messaging-buttons';
// import ConsumerFinancialsButtons from '../shared/consumer-financials-buttons/consumer-financials-buttons';
// import RemainingButtons from '../shared/remaining-buttons/remaining-buttons';



 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
class Index extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: true,
      menuBoolean: true,
      navBoolean: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed:" + this.state.businessBoolean);

      if (this.state.businessBoolean) {
        console.log("True logged");
        let business = document.querySelector(".business");
        business.style.display = "inline";
        let mainContainer = document.querySelector(".main-container");
      } else if (!this.state.businessBoolean) {
        console.log("false logged");
        let business2 = document.querySelector(".business");
        business2.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
        mainContainer.style.display = "none";
      }
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

      if (this.state.menuBoolean) {
        let menu = document.querySelector(".menu");
        menu.style.display = "inline";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.menuBoolean) {
        let menu = document.querySelector(".menu");
        menu.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "inline";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navFunction", () => {
      this.setState({
        navBoolean: !this.state.navBoolean
      });

      if (this.state.navBoolean) {
        let nav = document.querySelector(".nav");
        nav.style.display = "inline";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.menuBoolean) {
        let nav = document.querySelector(".nav");
        nav.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "inline";
      }
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2247775171" + " " + "parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2247775171" + " " + "child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_components_Dock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      nav: this.navFunction,
      twirl: this.twirlFunction,
      sound: this.soundFunction,
      menu: this.menuFunction,
      onClick: this.toggleDock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2247775171" + " " + "business",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2247775171" + " " + "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2247775171" + " " + "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2247775171" + " " + "main-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("img", {
      src: this.state.businessBoolean ? business : consumer,
      alt: "text",
      className: "jsx-2247775171" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2247775171",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2247775171",
      __self: this
    }, ".mock-image.jsx-2247775171{height:1536px;width:2048px;}.nav.jsx-2247775171{display:none;}.menu.jsx-2247775171{display:none;}.business.jsx-2247775171{display:none;}.parent.jsx-2247775171{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:60px;}.image.jsx-2247775171{width:1536px;height:2048px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJZ0IsQUFJc0IsQUFLQSxBQUlBLEFBSUEsQUFJQSxBQVVBLGFBckJqQixBQUlBLEFBSUEsQUFja0IsQ0EzQkYsYUFDaEIsQUEyQkEsK0NBWHVCLDZGQUNJLG1HQUNKLG9CQUN2QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS1OZXh0L3NyYy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC90cmVlLWJ1dHRvbi90cmVlLWJ1dHRvbic7XG5pbXBvcnQgTWVkaWNhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL21lZGljYWwtaW5mby1idXR0b24vbWVkaWNhbC1pbmZvLWJ1dHRvbic7XG5pbXBvcnQgRG9jdG9yc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvZG9jdG9ycy1idXR0b24vZG9jdG9ycy1idXR0b24nO1xuaW1wb3J0IExhd3llcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xhd3llcnMtYnV0dG9uL2xhd3llcnMtYnV0dG9uJztcbi8vIGltcG9ydCBMZWdhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xlZ2FsLWluZm8tYnV0dG9uL2xlZ2FsLWluZm8tYnV0dG9uJ1xuLy8gaW1wb3J0IFJldmlld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3Jldmlld3MtYnV0dG9uL3Jldmlld3MtYnV0dG9uJztcbi8vIGltcG9ydCBOZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbic7XG4vLyBpbXBvcnQgSW52ZXN0bWVudHNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2ludmVzdG1lbnRzLWJ1dHRvbi9pbnZlc3RtZW50cy1idXR0b24nO1xuLy8gaW1wb3J0IERhc2hib2FyZEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uJztcbi8vIGltcG9ydCBQcm9kdWN0c0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3Byb2R1Y3RzLWJ1dHRvbnMvcHJvZHVjdHMtYnV0dG9ucyc7XG4vLyBpbXBvcnQgTWVzc2FnaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvbWVzc2FnaW5nLWJ1dHRvbnMnO1xuLy8gaW1wb3J0IENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMnO1xuLy8gaW1wb3J0IFJlbWFpbmluZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3JlbWFpbmluZy1idXR0b25zJztcbmltcG9ydCBCdXNpbmVzcyBmcm9tICcuLi9jb21wb25lbnRzL0J1c2luZXNzJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcblxuLy8gU28geW91IHdhbnQgaXQgdG8gY29uZGl0aW9uYWxseSByZW5kZXIgdGhlIGNvbnN1bWVyIG9yIGJ1c2luZXNzIGNvbXBvbmVudCBjb250aW5nZW50IG9uIHdoZXRoZXIgYnVzaW5lc3MgaXMgdHJ1ZVxuLy8gU2FtZSB3aXRoIHRoZSBkb2NrXG5cbmxldCBjb25zdW1lciA9IFwiL0NvbnN1bWVyLnBuZ1wiXG5sZXQgYnVzaW5lc3MgPSBcIi9CdXNpbmVzcy5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiB0cnVlLFxuICAgICAgICBtZW51Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbmF2Qm9vbGVhbjogdHJ1ZVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB9XG5cbiAgICBidXNpbmVzc0NsaWNrZWRQYXJlbnQodmFsdWUpIHtcblxuICAgIH1cbiAgICB0d2lybEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IGJ1c2luZXNzQm9vbGVhbiBTdGF0ZSBjaGFuZ2VkOlwiICsgdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcnVlIGxvZ2dlZFwiKVxuICAgICAgICBsZXQgYnVzaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzXCIpXG4gICAgICAgIGJ1c2luZXNzLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuIFxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZSBsb2dnZWRcIilcbiAgICAgICAgICAgIGxldCBidXNpbmVzczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzXCIpXG4gICAgICAgICAgICBidXNpbmVzczIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJvb2xlYW46ICF0aGlzLnN0YXRlLm1lbnVCb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25hdkJvb2xlYW46ICF0aGlzLnN0YXRlLm5hdkJvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYXZCb29sZWFuKSB7IFxuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgICAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgIDxEb2NrIG5hdj17dGhpcy5uYXZGdW5jdGlvbn0gdHdpcmw9e3RoaXMudHdpcmxGdW5jdGlvbn0gc291bmQ9eyB0aGlzLnNvdW5kRnVuY3Rpb24gfSBtZW51PXt0aGlzLm1lbnVGdW5jdGlvbn0gb25DbGljaz17dGhpcy50b2dnbGVEb2NrfT48L0RvY2s+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzc1wiPlxuICAgIDxCdXNpbmVzcz48L0J1c2luZXNzPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgPE1lbnU+PC9NZW51PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICA8TmF2PjwvTmF2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPiBcbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXsgdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4gPyBidXNpbmVzcyA6IGNvbnN1bWVyIH0gYWx0PVwidGV4dFwiIC8+XG4gICAgPGRpdj5cbiAgICA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4gICAgPE1lZGljYWxJbmZvQnV0dG9uPjwvTWVkaWNhbEluZm9CdXR0b24+XG4gICAgPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuICAgIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2AgXG5cbiAgICAubW9jay1pbWFnZSB7IFxuICAgICAgICBoZWlnaHQ6MTUzNnB4O1xuICAgICAgICB3aWR0aDoyMDQ4cHg7XG4gICAgfVxuXG4gICAgLm5hdntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubWVudSB7IFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5idXNpbmVzcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBhcmVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTo2MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2hpbGQge1xuICAgIH1cblxuICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGhlaWdodDogMjA0OHB4O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBicGk6IGRhdGEuYnBpXG4gIH07XG59XG5cblxuLy8gPHZpZGVvIHByZWxvYWQ9XCJhdXRvXCIgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXZpZGVvXCIgd2lkdGg9XCIxNTM2XCIgaGVpZ2h0PVwiMjA0OFwiPlxuLy8gPHNvdXJjZSBzcmM9XCIvVHJlZS5tcDRcIiBcbi8vICAgICB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4vLyAgIDwvdmlkZW8+XG5cbi8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgIGNvbnN0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbHNjcmVlbi12aWRlb1wiKVxuLy8gICAgIGNvbnNvbGUubG9nKHZpZClcbi8vICAgICB2aWQucGxheSgpXG4vLyB9XG5cbi8vIDxUcmVlQnV0dG9uPjwvVHJlZUJ1dHRvbj5cbi8vIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuLy8gPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuLy8gPExhd3llcnNCdXR0b24+PC9MYXd5ZXJzQnV0dG9uPlxuLy8gPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbi8vIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbi8vIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbi8vIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuLy8gPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbi8vIDxQcm9kdWN0c0J1dHRvbnM+PC9Qcm9kdWN0c0J1dHRvbnM+XG4vLyA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4vLyA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4vLyA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+Il19 */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/pages/index.js */"));
  }

}

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
}; // <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
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
//# sourceMappingURL=index.js.42de8907354b82ee0b10.hot-update.js.map
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
/* harmony import */ var _components_Consumer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Consumer */ "./src/components/Consumer.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");

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
      businessBoolean: false,
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
        let consumer = document.querySelector(".consumer");
        consumer.style.display = "none";
        let business = document.querySelector(".business");
        business.style.display = "inline";
      } else if (!this.state.businessBoolean) {
        console.log("false logged");
        let consumer = document.querySelector(".consumer");
        consumer.style.display = "inline";
        let business = document.querySelector(".consumer");
        business.style.display = "none";
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
      className: "jsx-116450626" + " " + "parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-116450626" + " " + "child",
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
      className: "jsx-116450626" + " " + "main-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-116450626" + " " + "consumer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-116450626" + " " + "business",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-116450626" + " " + "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-116450626" + " " + "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "116450626",
      __self: this
    }, ".mock-image.jsx-116450626{height:1536px;width:2048px;}.nav.jsx-116450626{display:none;}.menu.jsx-116450626{display:none;}.consumer.jsx-116450626{display:inline;}.business.jsx-116450626{display:none;}.child.jsx-116450626{margin:auto;}.image.jsx-116450626{width:1536px;height:2048px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIZ0IsQUFJc0IsQUFLQSxBQUlBLEFBSUUsQUFJRixBQU9ELEFBSUMsWUFIakIsQ0FuQkEsQUFJQSxBQVFBLEFBV2tCLENBNUJGLENBYWhCLFlBWkEsQUE0QkEiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEtTmV4dC9zcmMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJlZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvdHJlZS1idXR0b24vdHJlZS1idXR0b24nO1xuaW1wb3J0IE1lZGljYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9tZWRpY2FsLWluZm8tYnV0dG9uL21lZGljYWwtaW5mby1idXR0b24nO1xuaW1wb3J0IERvY3RvcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2RvY3RvcnMtYnV0dG9uL2RvY3RvcnMtYnV0dG9uJztcbmltcG9ydCBMYXd5ZXJzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sYXd5ZXJzLWJ1dHRvbi9sYXd5ZXJzLWJ1dHRvbic7XG4vLyBpbXBvcnQgTGVnYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sZWdhbC1pbmZvLWJ1dHRvbi9sZWdhbC1pbmZvLWJ1dHRvbidcbi8vIGltcG9ydCBSZXZpZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZXZpZXdzLWJ1dHRvbi9yZXZpZXdzLWJ1dHRvbic7XG4vLyBpbXBvcnQgTmV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24nO1xuLy8gaW1wb3J0IEludmVzdG1lbnRzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9pbnZlc3RtZW50cy1idXR0b24vaW52ZXN0bWVudHMtYnV0dG9uJztcbi8vIGltcG9ydCBEYXNoYm9hcmRCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2Rhc2hib2FyZC1idXR0b24vZGFzaGJvYXJkLWJ1dHRvbic7XG4vLyBpbXBvcnQgUHJvZHVjdHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9wcm9kdWN0cy1idXR0b25zL3Byb2R1Y3RzLWJ1dHRvbnMnO1xuLy8gaW1wb3J0IE1lc3NhZ2luZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2luZy1idXR0b25zL21lc3NhZ2luZy1idXR0b25zJztcbi8vIGltcG9ydCBDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zJztcbi8vIGltcG9ydCBSZW1haW5pbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9yZW1haW5pbmctYnV0dG9ucyc7XG5pbXBvcnQgQnVzaW5lc3MgZnJvbSAnLi4vY29tcG9uZW50cy9CdXNpbmVzcyc7XG5pbXBvcnQgQ29uc3VtZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db25zdW1lcic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5cbi8vIFNvIHlvdSB3YW50IGl0IHRvIGNvbmRpdGlvbmFsbHkgcmVuZGVyIHRoZSBjb25zdW1lciBvciBidXNpbmVzcyBjb21wb25lbnQgY29udGluZ2VudCBvbiB3aGV0aGVyIGJ1c2luZXNzIGlzIHRydWVcbi8vIFNhbWUgd2l0aCB0aGUgZG9ja1xuXG5sZXQgY29uc3VtZXIgPSBcIi9Db25zdW1lci5wbmdcIlxubGV0IGJ1c2luZXNzID0gXCIvQnVzaW5lc3MucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIG1lbnVCb29sZWFuOiB0cnVlLFxuICAgICAgICBuYXZCb29sZWFuOiB0cnVlXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIGJ1c2luZXNzQ2xpY2tlZFBhcmVudCh2YWx1ZSkge1xuXG4gICAgfVxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWQ6XCIgKyB0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRydWUgbG9nZ2VkXCIpXG4gICAgICAgIGxldCBjb25zdW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXJcIilcbiAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGxldCBidXNpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3NcIilcbiAgICAgICAgYnVzaW5lc3Muc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2UgbG9nZ2VkXCIpXG4gICAgICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyXCIpXG4gICAgICAgICAgICBjb25zdW1lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICAgICAgbGV0IGJ1c2luZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgYnVzaW5lc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmF2Qm9vbGVhbjogIXRoaXMuc3RhdGUubmF2Qm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hdkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgPERvY2sgbmF2PXt0aGlzLm5hdkZ1bmN0aW9ufSB0d2lybD17dGhpcy50d2lybEZ1bmN0aW9ufSBzb3VuZD17IHRoaXMuc291bmRGdW5jdGlvbiB9IG1lbnU9e3RoaXMubWVudUZ1bmN0aW9ufSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURvY2t9PjwvRG9jaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lclwiPlxuICAgIDxDb25zdW1lcj48L0NvbnN1bWVyPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3NcIj5cbiAgICA8QnVzaW5lc3M+PC9CdXNpbmVzcz5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgIDxNZW51PjwvTWVudT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgPE5hdj48L05hdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgIFxuXG4gICAgLm1vY2staW1hZ2UgeyBcbiAgICAgICAgaGVpZ2h0OjE1MzZweDtcbiAgICAgICAgd2lkdGg6MjA0OHB4O1xuICAgIH1cblxuICAgIC5uYXZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1lbnUgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29uc3VtZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuXG4gICAgLmJ1c2luZXNzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucGFyZW50IHtcbiAgICB9XG4gICAgXG4gICAgLmNoaWxkIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGhlaWdodDogMjA0OHB4O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBicGk6IGRhdGEuYnBpXG4gIH07XG59XG5cblxuLy8gPHZpZGVvIHByZWxvYWQ9XCJhdXRvXCIgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXZpZGVvXCIgd2lkdGg9XCIxNTM2XCIgaGVpZ2h0PVwiMjA0OFwiPlxuLy8gPHNvdXJjZSBzcmM9XCIvVHJlZS5tcDRcIiBcbi8vICAgICB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4vLyAgIDwvdmlkZW8+XG5cbi8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgIGNvbnN0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbHNjcmVlbi12aWRlb1wiKVxuLy8gICAgIGNvbnNvbGUubG9nKHZpZClcbi8vICAgICB2aWQucGxheSgpXG4vLyB9XG5cbi8vIDxUcmVlQnV0dG9uPjwvVHJlZUJ1dHRvbj5cbi8vIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuLy8gPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuLy8gPExhd3llcnNCdXR0b24+PC9MYXd5ZXJzQnV0dG9uPlxuLy8gPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbi8vIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbi8vIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbi8vIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuLy8gPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbi8vIDxQcm9kdWN0c0J1dHRvbnM+PC9Qcm9kdWN0c0J1dHRvbnM+XG4vLyA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4vLyA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4vLyA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+Il19 */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/pages/index.js */"));
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
//# sourceMappingURL=index.js.2084426ab5a0c7a9f60a.hot-update.js.map
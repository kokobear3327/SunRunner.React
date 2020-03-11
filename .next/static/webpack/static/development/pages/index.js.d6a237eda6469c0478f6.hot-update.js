webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Business.js":
/*!************************************!*\
  !*** ./src/components/Business.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Business; });
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
/* harmony import */ var _shared_business_business_remaining_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/business/business-remaining-buttons */ "./src/shared/business/business-remaining-buttons.js");

var _jsxFileName = "/Users/websites/Documents/OEA/src/components/Business.js";

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
// .consumer-image-container {
//     transform: translate(50%, 0%);
//     height: 2000px!important;
//     margin-bottom: 2000px;
// }
// .consumer-image {
//     top: 699px;
//     position: relative;
//     z-index: 1;
// }
// .consumer-image-background {
//     width: 1536px;
//     height: 1868px;
//     background: linear-gradient(270deg, #000000, #02091b);
//     background-size: 400% 400%;
//     animation: AnimationName 10s ease-in-out infinite;
//     z-index:0;
//     display: flex;
//     transform: translate(0%, -50%);
//     bottom: 227px;
//     left: 1px;
//     position: relative;
// @keyframes AnimationName {
//     0%{background-position:0% 50%}
//     50%{background-position:100% 50%}
//     100%{background-position:0% 50%}
// }
// }

let consumer = "/Consumer.png";
let business = "/view-business.png";
class Business extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
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
      className: "jsx-2067716331" + " " + "business-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2067716331" + " " + "business-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2067716331" + " " + "business-image-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("img", {
      src: business,
      alt: "text",
      className: "jsx-2067716331" + " " + "business-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2067716331" + " " + "business-image-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2067716331" + " " + "business-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_shared_business_business_remaining_buttons__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2067716331",
      __self: this
    }, ".business-parent.jsx-2067716331{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:60px;overflow-y:none;position:relative;margin-left:319px;bottom:6px;}.business-image.jsx-2067716331{width:1536px;height:2007px;position:relative;margin-left:838px;bottom:43px;z-index:1;}.business-button-container.jsx-2067716331{position:relative;}.business-image-background.jsx-2067716331{width:1536px;height:2001px;background:linear-gradient(270deg,#000000,#02091b);background-size:400% 400%;-webkit-animation:AnimationName-jsx-2067716331 10s ease-in-out infinite;animation:AnimationName-jsx-2067716331 10s ease-in-out infinite;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);bottom:1001px;left:837px;position:relative;}@-webkit-keyframes AnimationName-jsx-2067716331{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-2067716331{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.business-button-container.jsx-2067716331{padding-top:94px;padding-left:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0J1c2luZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHZ0IsQUFHc0IsQUFZQSxBQVNLLEFBSUwsQUFjYyxBQUNHLEFBQ0QsQUFLWixhQWpDSCxBQWFBLElBcUJHLENBekJyQixTQVJzQixBQWFtQyxBQVl6QixBQUVFLEVBREMsS0FRbkMsV0FqQ3NCLGtCQUNOLFdBZk8sQ0FnQlQsR0FXZ0IsT0FWOUIsbUJBV3FELCtEQTNCMUIseUVBNEJkLFVBQ0ksZ0JBNUJNLG9CQUNILGdCQUNFLGtCQUNBLElBMEJZLGNBekJuQixXQUVmLDBFQXdCa0IsY0FDSCxXQUNPLGtCQVF0QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS9zcmMvY29tcG9uZW50cy9CdXNpbmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC90cmVlLWJ1dHRvbi90cmVlLWJ1dHRvbic7XG5pbXBvcnQgTWVkaWNhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL21lZGljYWwtaW5mby1idXR0b24vbWVkaWNhbC1pbmZvLWJ1dHRvbic7XG5pbXBvcnQgRG9jdG9yc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvZG9jdG9ycy1idXR0b24vZG9jdG9ycy1idXR0b24nO1xuaW1wb3J0IExhd3llcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xhd3llcnMtYnV0dG9uL2xhd3llcnMtYnV0dG9uJztcbmltcG9ydCBCdXNpbmVzc1JlbWFpbmluZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL2J1c2luZXNzL2J1c2luZXNzLXJlbWFpbmluZy1idXR0b25zJztcbi8vIGltcG9ydCBMZWdhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xlZ2FsLWluZm8tYnV0dG9uL2xlZ2FsLWluZm8tYnV0dG9uJ1xuLy8gaW1wb3J0IFJldmlld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3Jldmlld3MtYnV0dG9uL3Jldmlld3MtYnV0dG9uJztcbi8vIGltcG9ydCBOZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbic7XG4vLyBpbXBvcnQgSW52ZXN0bWVudHNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2ludmVzdG1lbnRzLWJ1dHRvbi9pbnZlc3RtZW50cy1idXR0b24nO1xuLy8gaW1wb3J0IERhc2hib2FyZEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uJztcbi8vIGltcG9ydCBQcm9kdWN0c0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3Byb2R1Y3RzLWJ1dHRvbnMvcHJvZHVjdHMtYnV0dG9ucyc7XG4vLyBpbXBvcnQgTWVzc2FnaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvbWVzc2FnaW5nLWJ1dHRvbnMnO1xuLy8gaW1wb3J0IENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMnO1xuLy8gaW1wb3J0IFJlbWFpbmluZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3JlbWFpbmluZy1idXR0b25zJztcblxuXG4vLyAuY29uc3VtZXItaW1hZ2UtY29udGFpbmVyIHtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDAlKTtcbi8vICAgICBoZWlnaHQ6IDIwMDBweCFpbXBvcnRhbnQ7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjAwMHB4O1xuXG4vLyB9XG5cblxuLy8gLmNvbnN1bWVyLWltYWdlIHtcbi8vICAgICB0b3A6IDY5OXB4O1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB6LWluZGV4OiAxO1xuLy8gfVxuXG4vLyAuY29uc3VtZXItaW1hZ2UtYmFja2dyb3VuZCB7XG4vLyAgICAgd2lkdGg6IDE1MzZweDtcbi8vICAgICBoZWlnaHQ6IDE4NjhweDtcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAwMDAwLCAjMDIwOTFiKTtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbi8vICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuLy8gICAgIHotaW5kZXg6MDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbi8vICAgICBib3R0b206IDIyN3B4O1xuLy8gICAgIGxlZnQ6IDFweDtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuLy8gQGtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcbi8vICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbi8vICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbi8vICAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuLy8gfVxuLy8gfVxuXG5sZXQgY29uc3VtZXIgPSBcIi9Db25zdW1lci5wbmdcIlxubGV0IGJ1c2luZXNzID0gXCIvdmlldy1idXNpbmVzcy5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXNpbmVzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgbWVudUJvb2xlYW46IGZhbHNlXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIGJ1c2luZXNzQ2xpY2tlZFBhcmVudCh2YWx1ZSkge1xuXG4gICAgfVxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBtZW51Qm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIG1lbnVcIiArIHRoaXMuc3RhdGUubWVudUJvb2xlYW4pXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1jaGlsZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJidXNpbmVzcy1pbWFnZVwiIHNyYz17IGJ1c2luZXNzIH0gYWx0PVwidGV4dFwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1pbWFnZS1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgPEJ1c2luZXNzUmVtYWluaW5nQnV0dG9ucz48L0J1c2luZXNzUmVtYWluaW5nQnV0dG9ucz5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgIC5idXNpbmVzcy1wYXJlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206NjBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzE5cHg7XG4gICAgICAgIGJvdHRvbTogNnB4O1xuXG4gICAgfVxuXG4gICAgLmJ1c2luZXNzLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgaGVpZ2h0OiAyMDA3cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgzOHB4O1xuICAgICAgICBib3R0b206IDQzcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmJ1c2luZXNzLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmJ1c2luZXNzLWltYWdlLWJhY2tncm91bmQge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDIwMDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzAyMDkxYik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAgICAgYm90dG9tOiAxMDAxcHg7XG4gICAgICAgIGxlZnQ6IDgzN3B4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuICAgIEBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gICAgICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idXNpbmVzcy1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDk0cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuQnVzaW5lc3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgYnBpOiBkYXRhLmJwaVxuICB9O1xufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Business.js */"));
  }

}

Business.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
};

/***/ })

})
//# sourceMappingURL=index.js.d6a237eda6469c0478f6.hot-update.js.map
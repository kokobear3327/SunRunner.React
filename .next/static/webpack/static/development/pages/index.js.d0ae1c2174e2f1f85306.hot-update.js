webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/BalloonWrench.js":
/*!*****************************************!*\
  !*** ./src/components/BalloonWrench.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BalloonWrench; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/components/BalloonWrench.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

let balloon = "/balloon-wrench-view.png";
class BalloonWrench extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
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

  componentDidMount() {
    let balloonCursor = document.querySelectorAll(".balloon-cursor");
    window.addEventListener("mousemove", cursor);
    balloonCursor.item(0).style.display = "inline";

    function cursor(e) {
      balloonCursor.item(0).style.top = e.pageY + 'px';
      balloonCursor.item(0).style.left = e.pageX + 'px';
      console.log(balloonCursor.item(0).style);
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-1113443078" + " " + "balloon-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1113443078" + " " + "balloon-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("img", {
      src: balloon,
      alt: "text",
      className: "jsx-1113443078" + " " + "balloon-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1113443078",
      __self: this
    }, ".balloon-parent.jsx-1113443078{height:2048px;width:1536px;}.balloon-child.jsx-1113443078{margin-left:13px;}.balloon-image.jsx-1113443078{width:1536px;height:2048px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvQmFsbG9vbldyZW5jaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RGdCLEFBR3NCLEFBS0ksQUFJSixhQUNDLENBVEQsR0FLakIsVUFKQSxBQVNBIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvQmFsbG9vbldyZW5jaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCBiYWxsb29uID0gXCIvYmFsbG9vbi13cmVuY2gtdmlldy5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsb29uV3JlbmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgbGV0IGJhbGxvb25DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24tY3Vyc29yXCIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjdXJzb3IpO1xuICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjdXJzb3IoZSkge1xuICAgICAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLnRvcCA9IGUucGFnZVkgKyAncHgnO1xuICAgICAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLmxlZnQgPSBlLnBhZ2VYICsgJ3B4JztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgIH1cblxuICAgIHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgbWVudVwiICsgdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uLXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jaGlsZFwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwiYmFsbG9vbi1pbWFnZVwiIHNyYz17IGJhbGxvb24gfSBhbHQ9XCJ0ZXh0XCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgIC5iYWxsb29uLXBhcmVudCB7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGhlaWdodDogMjA0OHB4O1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXIge1xuICAgIFxuICAgIH1cblxuICAgIC50cmVlLWJ1dHRvbi1jb250YWluZXIge31cblxuXG4gIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5CYWxsb29uV3JlbmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGJwaTogZGF0YS5icGlcbiAgfTtcbn1cblxuLy8gPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbi8vIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbi8vIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbi8vIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuLy8gPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbi8vIDxQcm9kdWN0c0J1dHRvbnM+PC9Qcm9kdWN0c0J1dHRvbnM+XG4vLyA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4vLyA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4vLyA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+XG5cblxuLy8gPHZpZGVvIHByZWxvYWQ9XCJhdXRvXCIgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXZpZGVvXCIgd2lkdGg9XCIxNTM2XCIgaGVpZ2h0PVwiMjA0OFwiPlxuLy8gPHNvdXJjZSBzcmM9XCIvVHJlZS5tcDRcIiBcbi8vICAgICB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4vLyAgIDwvdmlkZW8+XG5cbi8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgIGNvbnN0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbHNjcmVlbi12aWRlb1wiKVxuLy8gICAgIGNvbnNvbGUubG9nKHZpZClcbi8vICAgICB2aWQucGxheSgpXG4vLyB9XG5cbi8vIDxUcmVlQnV0dG9uPjwvVHJlZUJ1dHRvbj5cbi8vIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuLy8gPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuLy8gPExhd3llcnNCdXR0b24+PC9MYXd5ZXJzQnV0dG9uPlxuLy8gPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbi8vIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbi8vIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbi8vIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuLy8gPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbi8vIDxQcm9kdWN0c0J1dHRvbnM+PC9Qcm9kdWN0c0J1dHRvbnM+XG4vLyA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4vLyA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4vLyA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+XG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/BalloonWrench.js */"));
  }

}

BalloonWrench.getInitialProps = async function () {
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
//# sourceMappingURL=index.js.d0ae1c2174e2f1f85306.hot-update.js.map
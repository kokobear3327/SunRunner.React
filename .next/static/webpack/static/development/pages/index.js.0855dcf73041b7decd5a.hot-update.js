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

var _jsxFileName = "/Users/websites/Documents/OEA/src/components/BalloonWrench.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

let balloon = "/balloon-wrench-view.png";
class BalloonWrench extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

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
    balloonCursor.item(0).style.display = "flex";

    function cursor(e) {
      balloonCursor.item(0).style.top = e.pageY + 'px';
      balloonCursor.item(0).style.left = e.pageX + 'px';
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-2315729006" + " " + "balloon-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2315729006" + " " + "balloon-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2315729006" + " " + "balloon-cursor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("img", {
      src: "/balloon-wrench.svg",
      alt: "-",
      className: "jsx-2315729006",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2315729006",
      __self: this
    }, ".balloon-parent.jsx-2315729006{height:2048px;width:1536px;}.balloon-child.jsx-2315729006{margin-left:13px;}.balloon-image.jsx-2315729006{width:1536px;height:2048px;bottom:2049px;position:relative;}.balloon-cursor.jsx-2315729006 img.jsx-2315729006{width:33px;height:33px;cursor:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RnQixBQUdzQixBQUtJLEFBSUosQUFZRixXQUNDLEVBWkUsQ0FURCxHQUtqQixNQWlCZ0IsSUFyQmhCLEFBU2tCLFFBYWxCLE1BWnNCLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS9zcmMvY29tcG9uZW50cy9CYWxsb29uV3JlbmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IGJhbGxvb24gPSBcIi9iYWxsb29uLXdyZW5jaC12aWV3LnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxvb25XcmVuY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICBsZXQgYmFsbG9vbkN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFsbG9vbi1jdXJzb3JcIik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY3Vyc29yKTtcbiAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIFxuICAgIGZ1bmN0aW9uIGN1cnNvcihlKSB7XG4gICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4JztcbiAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLmxlZnQgPSBlLnBhZ2VYICsgJ3B4JztcbiAgICB9XG4gICAgfVxuXG4gICAgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgIH1cblxuICAgIHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgbWVudVwiICsgdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uLXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jaGlsZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jdXJzb3JcIj48aW1nIHNyYz1cIi9iYWxsb29uLXdyZW5jaC5zdmdcIiBhbHQ9XCItXCIvPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmJhbGxvb24tcGFyZW50IHtcbiAgICAgICAgaGVpZ2h0OjIwNDhweDtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIH1cblxuICAgIC5iYWxsb29uLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgaGVpZ2h0OiAyMDQ4cHg7XG4gICAgICAgIGJvdHRvbTogMjA0OXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIHtcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIGltZyB7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICB9XG5cblxuICAgIC5jb25zdW1lci1idXR0b24tY29udGFpbmVyIHtcbiAgICBcbiAgICB9XG5cbiAgICAudHJlZS1idXR0b24tY29udGFpbmVyIHt9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuQmFsbG9vbldyZW5jaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBicGk6IGRhdGEuYnBpXG4gIH07XG59XG5cbi8vIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4vLyA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4vLyA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4vLyA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbi8vIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4vLyA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuLy8gPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuLy8gPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuLy8gPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuXG5cbi8vIDx2aWRlbyBwcmVsb2FkPVwiYXV0b1wiIGF1dG9QbGF5IGxvb3AgY2xhc3NOYW1lPVwiZnVsbHNjcmVlbi12aWRlb1wiIHdpZHRoPVwiMTUzNlwiIGhlaWdodD1cIjIwNDhcIj5cbi8vIDxzb3VyY2Ugc3JjPVwiL1RyZWUubXA0XCIgXG4vLyAgICAgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxuLy8gICA8L3ZpZGVvPlxuXG4vLyBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICBjb25zdCB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGxzY3JlZW4tdmlkZW9cIilcbi8vICAgICBjb25zb2xlLmxvZyh2aWQpXG4vLyAgICAgdmlkLnBsYXkoKVxuLy8gfVxuXG4vLyA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4vLyA8TWVkaWNhbEluZm9CdXR0b24+PC9NZWRpY2FsSW5mb0J1dHRvbj5cbi8vIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbi8vIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbi8vIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4vLyA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4vLyA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4vLyA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbi8vIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4vLyA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuLy8gPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuLy8gPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuLy8gPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/BalloonWrench.js */"));
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
//# sourceMappingURL=index.js.0855dcf73041b7decd5a.hot-update.js.map
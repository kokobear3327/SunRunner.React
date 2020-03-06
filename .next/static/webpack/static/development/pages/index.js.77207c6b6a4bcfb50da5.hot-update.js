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
/* harmony import */ var _components_Business__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Business */ "./src/components/Business.js");
/* harmony import */ var _components_Consumer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Consumer */ "./src/components/Consumer.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Iris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Iris */ "./src/components/Iris.js");
/* harmony import */ var _components_BalloonWrench__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BalloonWrench */ "./src/components/BalloonWrench.js");

var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









 // balloonCursor.style.top = e.pageY + 'px';
// balloonCursor.style.left = e.pageX + 'px';

class Index extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
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

  componentDidUpdate() {
    console.log("index.js componentDidUpdate() called");
  }

  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      soundBoolean: false,
      balloonBoolean: true,
      panelOpen: false,
      businessBoolean: true,
      menuBoolean: true,
      navBoolean: true,
      irisBoolean: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed:" + this.state.businessBoolean);

      if (this.state.businessBoolean) {
        let business = document.querySelector(".business");
        business.style.display = "flex";
        let consumer = document.querySelector(".consumer");
        consumer.style.display = "none";
      } else if (!this.state.businessBoolean) {
        let consumer = document.querySelector(".consumer");
        consumer.style.display = "flex";
        let business = document.querySelector(".business");
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
        menu.style.display = "flex";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.menuBoolean) {
        let menu = document.querySelector(".menu");
        menu.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "flex";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navFunction", () => {
      this.setState({
        navBoolean: !this.state.navBoolean
      });

      if (this.state.navBoolean) {
        let nav = document.querySelector(".nav");
        nav.style.display = "flex";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.navBoolean) {
        let nav = document.querySelector(".nav");
        nav.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "flex";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "balloonFunction", () => {
      this.setState({
        balloonBoolean: !this.state.balloonBoolean
      });

      if (this.state.balloonBoolean) {
        let balloon = document.querySelector(".balloon");
        balloon.style.display = "flex";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.balloonBoolean) {
        let balloon = document.querySelector(".balloon");
        balloon.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "flex";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "irisFunction", () => {
      this.setState({
        irisBoolean: !this.state.irisBoolean
      });

      if (this.state.irisBoolean) {
        let iris = document.querySelector(".iris");
        iris.style.display = "flex";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.irisBoolean) {
        let iris = document.querySelector(".iris");
        iris.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "flex";
      }
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3852035592" + " " + "index-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3852035592" + " " + "index-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx(_components_Dock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      iris: this.irisFunction,
      balloon: this.balloonFunction,
      nav: this.navFunction,
      twirl: this.twirlFunction,
      sound: this.soundFunction,
      menu: this.menuFunction,
      onClick: this.toggleDock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3852035592" + " " + "balloon-cursor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3852035592" + " " + "main-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3852035592" + " " + "business",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3852035592" + " " + "consumer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-3852035592" + " " + "menu-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3852035592" + " " + "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-3852035592" + " " + "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3852035592" + " " + "balloon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx(_components_BalloonWrench__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3852035592" + " " + "iris",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx(_components_Iris__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3852035592",
      __self: this
    }, ".index-parent.jsx-3852035592{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1623px;height:2149px;background-image:url('./iPadRim.png');margin-top:30px;}.index-child.jsx-3852035592{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.balloon-cursor.jsx-3852035592{width:33px;height:33px;background-image:url('./balloon-wrench.png');position:absolute;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.main-container.jsx-3852035592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.consumer.jsx-3852035592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:312px;}.business.jsx-3852035592{display:none;}.nav.jsx-3852035592{display:none;margin-left:30px;}.menu.jsx-3852035592{display:none;margin-left:30px;}.balloon.jsx-3852035592{display:none;margin-left:30px;}.iris.jsx-3852035592{display:none;margin-left:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVLZ0IsQUFJNEIsQUFVSSxBQUlaLEFBU0UsQUFLQSxBQUtBLEFBSUEsQUFLQSxBQUtBLEFBS0EsV0FyQ0QsRUFtQmhCLEFBSXFCLEFBS0EsQUFLQSxBQUtBLFVBckM0QixPQXVCakQsQUFLQSxBQUtBLEFBS0Esc0NBckNzQixNQU9LLEFBS0wsWUFYYyxNQVlwQyxDQTdCMkIsTUFVM0IsMEVBY0Esa0JBTEEsQ0FsQmlCLGFBQ0MsY0FDd0Isc0NBQ3RCLGdCQUNkIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1c2luZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvQnVzaW5lc3MnO1xuaW1wb3J0IENvbnN1bWVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc3VtZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IElyaXMgZnJvbSAnLi4vY29tcG9uZW50cy9JcmlzJztcbmltcG9ydCBCYWxsb29uV3JlbmNoIGZyb20gJy4uL2NvbXBvbmVudHMvQmFsbG9vbldyZW5jaCc7XG5cbi8vIGJhbGxvb25DdXJzb3Iuc3R5bGUudG9wID0gZS5wYWdlWSArICdweCc7XG4vLyBiYWxsb29uQ3Vyc29yLnN0eWxlLmxlZnQgPSBlLnBhZ2VYICsgJ3B4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxubGV0IGJhbGxvb25DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24tY3Vyc29yXCIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY3Vyc29yKTtcbmJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuXG5mdW5jdGlvbiBjdXJzb3IoZSkge1xuICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4JztcbiAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUubGVmdCA9IGUucGFnZVggKyAncHgnO1xuICAgIGNvbnNvbGUubG9nKGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZSlcbiAgICBcbn1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29tcG9uZW50RGlkVXBkYXRlKCkgY2FsbGVkXCIpXG4gICAgfVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiB0cnVlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IHRydWUsXG4gICAgICAgIG1lbnVCb29sZWFuOiB0cnVlLFxuICAgICAgICBuYXZCb29sZWFuOiB0cnVlLFxuICAgICAgICBpcmlzQm9vbGVhbjogdHJ1ZVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZDpcIiArIHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBidXNpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3NcIilcbiAgICAgICAgICAgIGJ1c2luZXNzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyXCIpXG4gICAgICAgIGNvbnN1bWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgYnVzaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzXCIpXG4gICAgICAgICAgICBidXNpbmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25hdkJvb2xlYW46ICF0aGlzLnN0YXRlLm5hdkJvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYXZCb29sZWFuKSB7IFxuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubmF2Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWxsb29uRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGxvb25Cb29sZWFuOiAhdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuKSB7IFxuICAgICAgICAgICAgbGV0IGJhbGxvb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb25cIilcbiAgICAgICAgICAgIGJhbGxvb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBiYWxsb29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uXCIpXG4gICAgICAgICAgICBiYWxsb29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXJpc0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpcmlzQm9vbGVhbjogIXRoaXMuc3RhdGUuaXJpc0Jvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pcmlzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGlyaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlyaXNcIilcbiAgICAgICAgICAgIGlyaXMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuaXJpc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBpcmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pcmlzXCIpXG4gICAgICAgICAgICBpcmlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1wYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNoaWxkXCI+XG4gICAgPERvY2sgaXJpcz17dGhpcy5pcmlzRnVuY3Rpb259IGJhbGxvb249e3RoaXMuYmFsbG9vbkZ1bmN0aW9ufSBuYXY9e3RoaXMubmF2RnVuY3Rpb259IHR3aXJsPXt0aGlzLnR3aXJsRnVuY3Rpb259IHNvdW5kPXsgdGhpcy5zb3VuZEZ1bmN0aW9uIH0gbWVudT17dGhpcy5tZW51RnVuY3Rpb259IG9uQ2xpY2s9e3RoaXMudG9nZ2xlRG9ja30+PC9Eb2NrPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jdXJzb3JcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzc1wiPlxuICAgIDxCdXNpbmVzcz48L0J1c2luZXNzPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lclwiPlxuICAgIDxDb25zdW1lcj48L0NvbnN1bWVyPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICA8TWVudT48L01lbnU+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICA8TmF2PjwvTmF2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uXCI+XG4gICAgPEJhbGxvb25XcmVuY2g+PC9CYWxsb29uV3JlbmNoPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpcmlzXCI+XG4gICAgPElyaXM+PC9JcmlzPlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgIFxuXG4gICAgLmluZGV4LXBhcmVudCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTYyM3B4O1xuICAgICAgICBoZWlnaHQ6IDIxNDlweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2lQYWRSaW0ucG5nJyk7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIC5pbmRleC1jaGlsZCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciB7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWxsb29uLXdyZW5jaC5wbmcnKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb25zdW1lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMTJweDtcbiAgICB9XG5cbiAgICAuYnVzaW5lc3Mge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5tZW51IHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5iYWxsb29uIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5pcmlzIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuXG5cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBicGk6IGRhdGEuYnBpXG4gIH07XG59XG5cblxuLy8gPHZpZGVvIHByZWxvYWQ9XCJhdXRvXCIgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXZpZGVvXCIgd2lkdGg9XCIxNTM2XCIgaGVpZ2h0PVwiMjA0OFwiPlxuLy8gPHNvdXJjZSBzcmM9XCIvVHJlZS5tcDRcIiBcbi8vICAgICB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4vLyAgIDwvdmlkZW8+XG5cbi8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgIGNvbnN0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbHNjcmVlbi12aWRlb1wiKVxuLy8gICAgIGNvbnNvbGUubG9nKHZpZClcbi8vICAgICB2aWQucGxheSgpXG4vLyB9XG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/pages/index.js */"));
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

/***/ })

})
//# sourceMappingURL=index.js.77207c6b6a4bcfb50da5.hot-update.js.map
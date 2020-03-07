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
        let balloon = document.querySelector(".balloon-cursor");
        balloon.style.display = "flex";
        let balloonImage = document.querySelector(".balloon-image ");
        balloonImage.style.display = "flex";
        let indexParent = document.querySelector(".index-parent");
        indexParent.style.cursor = none;
      } else if (!this.state.balloonBoolean) {
        let balloon = document.querySelector(".balloon-cursor");
        balloon.style.display = "none";
        let balloonImage = document.querySelector(".balloon-image ");
        balloonImage.style.display = "none";
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
        lineNumber: 120
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3654663849" + " " + "index-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3654663849" + " " + "index-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
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
        lineNumber: 123
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3654663849" + " " + "balloon-cursor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("img", {
      src: "/balloon-wrench.svg",
      alt: "-",
      className: "jsx-3654663849" + " " + "balloon-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3654663849" + " " + "main-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3654663849" + " " + "business",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3654663849" + " " + "consumer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-3654663849" + " " + "menu-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3654663849" + " " + "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-3654663849" + " " + "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3654663849" + " " + "balloon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx(_components_BalloonWrench__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3654663849" + " " + "iris",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx(_components_Iris__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3654663849",
      __self: this
    }, ".index-parent.jsx-3654663849{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1623px;height:2149px;background-image:url('./iPadRim.png');margin-top:30px;}.index-child.jsx-3654663849{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.balloon-cursor.jsx-3654663849{position:absolute;border-radius:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none;z-index:100;pointer-events:none;}.balloon-cursor.jsx-3654663849 img.jsx-3654663849{display:none;width:33px;height:33px;cursor:none;pointer-events:none;}.main-container.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.consumer.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:312px;}.business.jsx-3654663849{display:none;}.nav.jsx-3654663849{display:none;margin-left:30px;}.menu.jsx-3654663849{display:none;margin-left:30px;}.balloon.jsx-3654663849{display:none;margin-left:30px;}.iris.jsx-3654663849{display:none;margin-left:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBKZ0IsQUFJNEIsQUFVSSxBQUlMLEFBU0wsQUFRQSxBQUtBLEFBS0EsQUFJQSxBQUtBLEFBS0EsQUFLQSxhQXBDRixBQWtCZixBQUlxQixBQUtBLEFBS0EsQUFLQSxLQTlDQyxNQVVOLE1Bc0JoQixBQUtBLEFBS0EsQUFLQSxNQTlDb0MsQUFVcEIsWUFDUSxvQkFDeEIsTUFJMkIsQUFLTCxrQkFDdEIsQ0FyQzJCLE1BVTNCLDBDQU1pQixhQUNELFlBQ1EsT0FjeEIsYUFiQSxNQWxCaUIsYUFDQyxjQUN3QixzQ0FDdEIsZ0JBQ2QiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEtTmV4dC9zcmMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnVzaW5lc3MgZnJvbSAnLi4vY29tcG9uZW50cy9CdXNpbmVzcyc7XG5pbXBvcnQgQ29uc3VtZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db25zdW1lcic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgSXJpcyBmcm9tICcuLi9jb21wb25lbnRzL0lyaXMnO1xuaW1wb3J0IEJhbGxvb25XcmVuY2ggZnJvbSAnLi4vY29tcG9uZW50cy9CYWxsb29uV3JlbmNoJztcblxuLy8gYmFsbG9vbkN1cnNvci5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4Jztcbi8vIGJhbGxvb25DdXJzb3Iuc3R5bGUubGVmdCA9IGUucGFnZVggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb21wb25lbnREaWRVcGRhdGUoKSBjYWxsZWRcIilcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IHRydWUsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbWVudUJvb2xlYW46IHRydWUsXG4gICAgICAgIG5hdkJvb2xlYW46IHRydWUsXG4gICAgICAgIGlyaXNCb29sZWFuOiB0cnVlXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICB0d2lybEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IGJ1c2luZXNzQm9vbGVhbiBTdGF0ZSBjaGFuZ2VkOlwiICsgdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGJ1c2luZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzc1wiKVxuICAgICAgICAgICAgYnVzaW5lc3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGxldCBjb25zdW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXJcIilcbiAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyXCIpXG4gICAgICAgICAgICBjb25zdW1lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBidXNpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3NcIilcbiAgICAgICAgICAgIGJ1c2luZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJvb2xlYW46ICF0aGlzLnN0YXRlLm1lbnVCb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmF2Qm9vbGVhbjogIXRoaXMuc3RhdGUubmF2Qm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hdkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5uYXZCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhbGxvb25GdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsbG9vbkJvb2xlYW46ICF0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgYmFsbG9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1jdXJzb3JcIilcbiAgICAgICAgICAgIGJhbGxvb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgYmFsbG9vbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWltYWdlIFwiKVxuICAgICAgICAgICAgYmFsbG9vbkltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGluZGV4UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleC1wYXJlbnRcIilcbiAgICAgICAgICAgIGluZGV4UGFyZW50LnN0eWxlLmN1cnNvciA9IG5vbmVcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGJhbGxvb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24tY3Vyc29yXCIpXG4gICAgICAgICAgICBiYWxsb29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGJhbGxvb25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1pbWFnZSBcIilcbiAgICAgICAgICAgIGJhbGxvb25JbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlyaXNGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXJpc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmlyaXNCb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXJpc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBpcmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pcmlzXCIpXG4gICAgICAgICAgICBpcmlzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmlyaXNCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgaXJpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXJpc1wiKVxuICAgICAgICAgICAgaXJpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgICAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1jaGlsZFwiPlxuICAgIDxEb2NrIGlyaXM9e3RoaXMuaXJpc0Z1bmN0aW9ufSBiYWxsb29uPXt0aGlzLmJhbGxvb25GdW5jdGlvbn0gbmF2PXt0aGlzLm5hdkZ1bmN0aW9ufSB0d2lybD17dGhpcy50d2lybEZ1bmN0aW9ufSBzb3VuZD17IHRoaXMuc291bmRGdW5jdGlvbiB9IG1lbnU9e3RoaXMubWVudUZ1bmN0aW9ufSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURvY2t9PjwvRG9jaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb24tY3Vyc29yXCI+PGltZyBjbGFzc05hbWU9XCJiYWxsb29uLWltYWdlXCIgc3JjPVwiL2JhbGxvb24td3JlbmNoLnN2Z1wiIGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3NcIj5cbiAgICA8QnVzaW5lc3M+PC9CdXNpbmVzcz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXJcIj5cbiAgICA8Q29uc3VtZXI+PC9Db25zdW1lcj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgPE1lbnU+PC9NZW51PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgPE5hdj48L05hdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vblwiPlxuICAgIDxCYWxsb29uV3JlbmNoPjwvQmFsbG9vbldyZW5jaD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXJpc1wiPlxuICAgIDxJcmlzPjwvSXJpcz5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YCBcblxuICAgIC5pbmRleC1wYXJlbnQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDE2MjNweDtcbiAgICAgICAgaGVpZ2h0OiAyMTQ5cHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pUGFkUmltLnBuZycpO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAuaW5kZXgtY2hpbGQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jdXJzb3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMxMnB4O1xuICAgIH1cblxuICAgIC5idXNpbmVzcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm5hdntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLm1lbnUgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJhbGxvb24geyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmlyaXMgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG5cblxuICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGJwaTogZGF0YS5icGlcbiAgfTtcbn1cblxuXG4vLyA8dmlkZW8gcHJlbG9hZD1cImF1dG9cIiBhdXRvUGxheSBsb29wIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4tdmlkZW9cIiB3aWR0aD1cIjE1MzZcIiBoZWlnaHQ9XCIyMDQ4XCI+XG4vLyA8c291cmNlIHNyYz1cIi9UcmVlLm1wNFwiIFxuLy8gICAgIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cbi8vICAgPC92aWRlbz5cblxuLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgY29uc3QgdmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdWxsc2NyZWVuLXZpZGVvXCIpXG4vLyAgICAgY29uc29sZS5sb2codmlkKVxuLy8gICAgIHZpZC5wbGF5KClcbi8vIH1cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/pages/index.js */"));
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
//# sourceMappingURL=index.js.e4bea7bc33a6d2b3f966.hot-update.js.map
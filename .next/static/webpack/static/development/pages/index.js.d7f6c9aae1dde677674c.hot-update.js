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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Business__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Business */ "./src/components/Business.js");
/* harmony import */ var _components_Consumer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Consumer */ "./src/components/Consumer.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Iris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Iris */ "./src/components/Iris.js");
/* harmony import */ var _components_BalloonWrench__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BalloonWrench */ "./src/components/BalloonWrench.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA-Redux/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













const store = Object(redux__WEBPACK_IMPORTED_MODULE_10__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_12__["default"]);
const balloonWrench = "/balloon-wrench.svg";
const balloonWrenchFilled = "/balloon-wrench-filled.svg";
let isNews = false;
function Index() {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  this.state = {
    soundBoolean: false,
    balloonBoolean: true,
    panelOpen: false,
    businessBoolean: true,
    menuBoolean: true,
    navBoolean: true,
    irisBoolean: true
  };

  this.twirlFunction = () => {
    this.setState({
      businessBoolean: !this.state.businessBoolean
    });

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
  };

  this.soundFunction = () => {
    this.setState({
      soundBoolean: !this.state.soundBoolean
    });
  };

  this.menuFunction = () => {
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
  };

  this.navFunction = () => {
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
  };

  this.balloonFunction = () => {
    this.setState({
      balloonBoolean: !this.state.balloonBoolean
    });

    if (this.state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "flex";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "flex";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "none";
    } else if (!this.state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "none";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "none";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "default";
    }
  };

  this.irisFunction = () => {
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
  };

  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "index-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "index-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_components_Dock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iris: this.irisFunction,
    balloon: this.balloonFunction,
    nav: this.navFunction,
    twirl: this.twirlFunction,
    sound: this.soundFunction,
    menu: this.menuFunction,
    onClick: this.toggleDock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3654663849" + " " + "balloon-cursor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("img", {
    src: isNews ? balloonWrench : balloonWrenchFilled,
    alt: "-",
    className: "jsx-3654663849" + " " + "balloon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "consumer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3654663849" + " " + "menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3654663849" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "balloon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_components_BalloonWrench__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "iris",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_components_Iris__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3654663849",
    __self: this
  }, ".index-parent.jsx-3654663849{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1623px;height:2149px;background-image:url('./iPadRim.png');margin-top:30px;}.index-child.jsx-3654663849{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.balloon-cursor.jsx-3654663849{position:absolute;border-radius:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none;z-index:100;pointer-events:none;}.balloon-cursor.jsx-3654663849 img.jsx-3654663849{display:none;width:33px;height:33px;cursor:none;pointer-events:none;}.main-container.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.consumer.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:312px;}.business.jsx-3654663849{display:none;}.nav.jsx-3654663849{display:none;margin-left:30px;}.menu.jsx-3654663849{display:none;margin-left:30px;}.balloon.jsx-3654663849{display:none;margin-left:30px;}.iris.jsx-3654663849{display:none;margin-left:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLVJlZHV4L3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SmdCLEFBSTRCLEFBVUksQUFJTCxBQVNMLEFBUUEsQUFLQSxBQUtBLEFBSUEsQUFLQSxBQUtBLEFBS0EsYUFwQ0YsQUFrQmYsQUFJcUIsQUFLQSxBQUtBLEFBS0EsS0E5Q0MsTUFVTixNQXNCaEIsQUFLQSxBQUtBLEFBS0EsTUE5Q29DLEFBVXBCLFlBQ1Esb0JBQ3hCLE1BSTJCLEFBS0wsa0JBQ3RCLENBckMyQixNQVUzQiwwQ0FNaUIsYUFDRCxZQUNRLE9BY3hCLGFBYkEsTUFsQmlCLGFBQ0MsY0FDd0Isc0NBQ3RCLGdCQUNkIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLVJlZHV4L3NyYy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXNpbmVzcyBmcm9tICcuLi9jb21wb25lbnRzL0J1c2luZXNzJztcbmltcG9ydCBDb25zdW1lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnN1bWVyJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBJcmlzIGZyb20gJy4uL2NvbXBvbmVudHMvSXJpcyc7XG5pbXBvcnQgQmFsbG9vbldyZW5jaCBmcm9tICcuLi9jb21wb25lbnRzL0JhbGxvb25XcmVuY2gnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBhbGxSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGFsbFJlZHVjZXIpO1xuY29uc3QgYmFsbG9vbldyZW5jaCA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiO1xuY29uc3QgYmFsbG9vbldyZW5jaEZpbGxlZCA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIlxubGV0IGlzTmV3cyA9IGZhbHNlOyBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICAgIFxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiB0cnVlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IHRydWUsXG4gICAgICAgIG1lbnVCb29sZWFuOiB0cnVlLFxuICAgICAgICBuYXZCb29sZWFuOiB0cnVlLFxuICAgICAgICBpcmlzQm9vbGVhbjogdHJ1ZVxuICAgIH1cblxuXG5cbiAgICB0aGlzLnR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgYnVzaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzXCIpXG4gICAgICAgICAgICBidXNpbmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBjb25zdW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXJcIilcbiAgICAgICAgICAgIGNvbnN1bWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgYnVzaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzXCIpXG4gICAgICAgICAgICBidXNpbmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIHRoaXMubWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubmF2RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25hdkJvb2xlYW46ICF0aGlzLnN0YXRlLm5hdkJvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYXZCb29sZWFuKSB7IFxuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubmF2Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJhbGxvb25GdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsbG9vbkJvb2xlYW46ICF0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgYmFsbG9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1jdXJzb3JcIilcbiAgICAgICAgICAgIGJhbGxvb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgYmFsbG9vbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWltYWdlIFwiKVxuICAgICAgICAgICAgYmFsbG9vbkltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGluZGV4UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleC1wYXJlbnRcIilcbiAgICAgICAgICAgIGluZGV4UGFyZW50LnN0eWxlLmN1cnNvciA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBiYWxsb29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWN1cnNvclwiKVxuICAgICAgICAgICAgYmFsbG9vbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBiYWxsb29uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24taW1hZ2UgXCIpXG4gICAgICAgICAgICBiYWxsb29uSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgaW5kZXhQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4LXBhcmVudFwiKVxuICAgICAgICAgICAgaW5kZXhQYXJlbnQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXJpc0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpcmlzQm9vbGVhbjogIXRoaXMuc3RhdGUuaXJpc0Jvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pcmlzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGlyaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlyaXNcIilcbiAgICAgICAgICAgIGlyaXMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuaXJpc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBpcmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pcmlzXCIpXG4gICAgICAgICAgICBpcmlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1wYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNoaWxkXCI+XG4gICAgPERvY2sgaXJpcz17dGhpcy5pcmlzRnVuY3Rpb259IGJhbGxvb249e3RoaXMuYmFsbG9vbkZ1bmN0aW9ufSBuYXY9e3RoaXMubmF2RnVuY3Rpb259IHR3aXJsPXt0aGlzLnR3aXJsRnVuY3Rpb259IHNvdW5kPXsgdGhpcy5zb3VuZEZ1bmN0aW9uIH0gbWVudT17dGhpcy5tZW51RnVuY3Rpb259IG9uQ2xpY2s9e3RoaXMudG9nZ2xlRG9ja30+PC9Eb2NrPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jdXJzb3JcIj48aW1nIGNsYXNzTmFtZT1cImJhbGxvb24taW1hZ2VcIiBzcmM9e2lzTmV3cyA/IGJhbGxvb25XcmVuY2ggOiBiYWxsb29uV3JlbmNoRmlsbGVkfSBhbHQ9XCItXCIvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzXCI+XG4gICAgPEJ1c2luZXNzPjwvQnVzaW5lc3M+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyXCI+XG4gICAgPENvbnN1bWVyPjwvQ29uc3VtZXI+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgIDxNZW51PjwvTWVudT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgIDxOYXY+PC9OYXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb25cIj5cbiAgICA8QmFsbG9vbldyZW5jaD48L0JhbGxvb25XcmVuY2g+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlyaXNcIj5cbiAgICA8SXJpcz48L0lyaXM+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2AgXG5cbiAgICAuaW5kZXgtcGFyZW50IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxNjIzcHg7XG4gICAgICAgIGhlaWdodDogMjE0OXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaVBhZFJpbS5wbmcnKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgLmluZGV4LWNoaWxkIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciBpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb25zdW1lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMTJweDtcbiAgICB9XG5cbiAgICAuYnVzaW5lc3Mge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5tZW51IHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5iYWxsb29uIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5pcmlzIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuXG5cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICB9XG5cblxuXG4vLyA8dmlkZW8gcHJlbG9hZD1cImF1dG9cIiBhdXRvUGxheSBsb29wIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4tdmlkZW9cIiB3aWR0aD1cIjE1MzZcIiBoZWlnaHQ9XCIyMDQ4XCI+XG4vLyA8c291cmNlIHNyYz1cIi9UcmVlLm1wNFwiIFxuLy8gICAgIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cbi8vICAgPC92aWRlbz5cblxuLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgY29uc3QgdmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdWxsc2NyZWVuLXZpZGVvXCIpXG4vLyAgICAgY29uc29sZS5sb2codmlkKVxuLy8gICAgIHZpZC5wbGF5KClcbi8vIH1cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA-Redux/src/pages/index.js */")));
} // <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
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
//# sourceMappingURL=index.js.d7f6c9aae1dde677674c.hot-update.js.map
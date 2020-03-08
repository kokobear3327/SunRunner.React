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
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    soundBoolean: false,
    balloonBoolean: true,
    panelOpen: false,
    businessBoolean: true,
    menuBoolean: true,
    navBoolean: true,
    irisBoolean: true
  });

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
  }, ".index-parent.jsx-3654663849{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1623px;height:2149px;background-image:url('./iPadRim.png');margin-top:30px;}.index-child.jsx-3654663849{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.balloon-cursor.jsx-3654663849{position:absolute;border-radius:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none;z-index:100;pointer-events:none;}.balloon-cursor.jsx-3654663849 img.jsx-3654663849{display:none;width:33px;height:33px;cursor:none;pointer-events:none;}.main-container.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.consumer.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:312px;}.business.jsx-3654663849{display:none;}.nav.jsx-3654663849{display:none;margin-left:30px;}.menu.jsx-3654663849{display:none;margin-left:30px;}.balloon.jsx-3654663849{display:none;margin-left:30px;}.iris.jsx-3654663849{display:none;margin-left:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLVJlZHV4L3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SmdCLEFBSTRCLEFBVUksQUFJTCxBQVNMLEFBUUEsQUFLQSxBQUtBLEFBSUEsQUFLQSxBQUtBLEFBS0EsYUFwQ0YsQUFrQmYsQUFJcUIsQUFLQSxBQUtBLEFBS0EsS0E5Q0MsTUFVTixNQXNCaEIsQUFLQSxBQUtBLEFBS0EsTUE5Q29DLEFBVXBCLFlBQ1Esb0JBQ3hCLE1BSTJCLEFBS0wsa0JBQ3RCLENBckMyQixNQVUzQiwwQ0FNaUIsYUFDRCxZQUNRLE9BY3hCLGFBYkEsTUFsQmlCLGFBQ0MsY0FDd0Isc0NBQ3RCLGdCQUNkIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLVJlZHV4L3NyYy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXNpbmVzcyBmcm9tICcuLi9jb21wb25lbnRzL0J1c2luZXNzJztcbmltcG9ydCBDb25zdW1lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnN1bWVyJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBJcmlzIGZyb20gJy4uL2NvbXBvbmVudHMvSXJpcyc7XG5pbXBvcnQgQmFsbG9vbldyZW5jaCBmcm9tICcuLi9jb21wb25lbnRzL0JhbGxvb25XcmVuY2gnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBhbGxSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGFsbFJlZHVjZXIpO1xuY29uc3QgYmFsbG9vbldyZW5jaCA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiO1xuY29uc3QgYmFsbG9vbldyZW5jaEZpbGxlZCA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIlxubGV0IGlzTmV3cyA9IGZhbHNlOyBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICAgIFxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiB0cnVlLFxuICAgICAgICBtZW51Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbmF2Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgaXJpc0Jvb2xlYW46IHRydWVcbiAgICB9XG4gICAgKVxuXG5cblxuICAgIHRoaXMudHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBidXNpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3NcIilcbiAgICAgICAgICAgIGJ1c2luZXNzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyXCIpXG4gICAgICAgICAgICBjb25zdW1lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBidXNpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3NcIilcbiAgICAgICAgICAgIGJ1c2luZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgdGhpcy5tZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5uYXZGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmF2Qm9vbGVhbjogIXRoaXMuc3RhdGUubmF2Qm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hdkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5uYXZCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmFsbG9vbkZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWxsb29uQm9vbGVhbjogIXRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBiYWxsb29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWN1cnNvclwiKVxuICAgICAgICAgICAgYmFsbG9vbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBiYWxsb29uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24taW1hZ2UgXCIpXG4gICAgICAgICAgICBiYWxsb29uSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgaW5kZXhQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4LXBhcmVudFwiKVxuICAgICAgICAgICAgaW5kZXhQYXJlbnQuc3R5bGUuY3Vyc29yID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGJhbGxvb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24tY3Vyc29yXCIpXG4gICAgICAgICAgICBiYWxsb29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGJhbGxvb25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1pbWFnZSBcIilcbiAgICAgICAgICAgIGJhbGxvb25JbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBpbmRleFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXgtcGFyZW50XCIpXG4gICAgICAgICAgICBpbmRleFBhcmVudC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pcmlzRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lyaXNCb29sZWFuOiAhdGhpcy5zdGF0ZS5pcmlzQm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlyaXNCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgaXJpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXJpc1wiKVxuICAgICAgICAgICAgaXJpcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5pcmlzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGlyaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlyaXNcIilcbiAgICAgICAgICAgIGlyaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtY2hpbGRcIj5cbiAgICA8RG9jayBpcmlzPXt0aGlzLmlyaXNGdW5jdGlvbn0gYmFsbG9vbj17dGhpcy5iYWxsb29uRnVuY3Rpb259IG5hdj17dGhpcy5uYXZGdW5jdGlvbn0gdHdpcmw9e3RoaXMudHdpcmxGdW5jdGlvbn0gc291bmQ9eyB0aGlzLnNvdW5kRnVuY3Rpb24gfSBtZW51PXt0aGlzLm1lbnVGdW5jdGlvbn0gb25DbGljaz17dGhpcy50b2dnbGVEb2NrfT48L0RvY2s+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uLWN1cnNvclwiPjxpbWcgY2xhc3NOYW1lPVwiYmFsbG9vbi1pbWFnZVwiIHNyYz17aXNOZXdzID8gYmFsbG9vbldyZW5jaCA6IGJhbGxvb25XcmVuY2hGaWxsZWR9IGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3NcIj5cbiAgICA8QnVzaW5lc3M+PC9CdXNpbmVzcz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXJcIj5cbiAgICA8Q29uc3VtZXI+PC9Db25zdW1lcj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgPE1lbnU+PC9NZW51PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgPE5hdj48L05hdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vblwiPlxuICAgIDxCYWxsb29uV3JlbmNoPjwvQmFsbG9vbldyZW5jaD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXJpc1wiPlxuICAgIDxJcmlzPjwvSXJpcz5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YCBcblxuICAgIC5pbmRleC1wYXJlbnQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDE2MjNweDtcbiAgICAgICAgaGVpZ2h0OiAyMTQ5cHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pUGFkUmltLnBuZycpO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAuaW5kZXgtY2hpbGQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jdXJzb3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMxMnB4O1xuICAgIH1cblxuICAgIC5idXNpbmVzcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm5hdntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLm1lbnUgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJhbGxvb24geyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmlyaXMgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG5cblxuICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgIH1cblxuXG5cbi8vIDx2aWRlbyBwcmVsb2FkPVwiYXV0b1wiIGF1dG9QbGF5IGxvb3AgY2xhc3NOYW1lPVwiZnVsbHNjcmVlbi12aWRlb1wiIHdpZHRoPVwiMTUzNlwiIGhlaWdodD1cIjIwNDhcIj5cbi8vIDxzb3VyY2Ugc3JjPVwiL1RyZWUubXA0XCIgXG4vLyAgICAgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxuLy8gICA8L3ZpZGVvPlxuXG4vLyBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICBjb25zdCB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGxzY3JlZW4tdmlkZW9cIilcbi8vICAgICBjb25zb2xlLmxvZyh2aWQpXG4vLyAgICAgdmlkLnBsYXkoKVxuLy8gfVxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA-Redux/src/pages/index.js */")));
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
//# sourceMappingURL=index.js.0a60a47e7610af168994.hot-update.js.map
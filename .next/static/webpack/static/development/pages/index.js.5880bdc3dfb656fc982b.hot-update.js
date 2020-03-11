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
/* harmony import */ var _components_Consumer2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Consumer2 */ "./src/components/Consumer2.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Iris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Iris */ "./src/components/Iris.js");
/* harmony import */ var _components_BalloonWrench__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/BalloonWrench */ "./src/components/BalloonWrench.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










 // useEffect(() => {
//     console.log("useEffect:isNewsBoolean2:" + isNewsBoolean2)
//     isNewsBoolean = isNewsBoolean2
//       })
//        background-image: url('./iPadRim.png');

function Index() {
  const balloonWrench = "/balloon-wrench.svg";
  const balloonWrenchFilled = "/balloon-wrench-filled.svg";
  let isNewsBoolean = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.isNews);
  let isDashboardBoolean = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.isDashboard);
  const isFilled = isNewsBoolean || isDashboardBoolean;
  let theState = {
    soundBoolean: false,
    balloonBoolean: true,
    panelOpen: false,
    businessBoolean: true,
    menuBoolean: true,
    navBoolean: true,
    irisBoolean: true
  };
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(theState);
  let isNextTemplate = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.isNextTemplate);
  let isPreviousTemplate = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.isPreviousTemplate);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (isNextTemplate) {
      let consumer = document.querySelector(".consumer");
      consumer.style.display = "none";
      let consumer2 = document.querySelector(".consumer2");
      consumer2.style.display = "flex";
    }

    if (isPreviousTemplate) {
      let consumer = document.querySelector(".consumer");
      consumer.style.display = "flex";
      let consumer2 = document.querySelector(".consumer2");
      consumer2.style.display = "none";
    }
  });

  const twirlFunction = () => {
    setState({
      businessBoolean: !state.businessBoolean
    });

    if (state.businessBoolean) {
      let business = document.querySelector(".business");
      business.style.display = "flex";
      let consumer = document.querySelector(".consumer");
      consumer.style.display = "none";
    } else if (!state.businessBoolean) {
      let consumer = document.querySelector(".consumer");
      consumer.style.display = "flex";
      let business = document.querySelector(".business");
      business.style.display = "none";
    }
  };

  const soundFunction = () => {
    setState({
      soundBoolean: !state.soundBoolean
    });
  };

  const menuFunction = () => {
    setState({
      menuBoolean: !state.menuBoolean
    });

    if (state.menuBoolean) {
      let menu = document.querySelector(".menu");
      menu.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!state.menuBoolean) {
      let menu = document.querySelector(".menu");
      menu.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  const navFunction = () => {
    setState({
      navBoolean: !state.navBoolean
    });

    if (state.navBoolean) {
      let nav = document.querySelector(".nav");
      nav.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!state.navBoolean) {
      let nav = document.querySelector(".nav");
      nav.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  const balloonFunction = () => {
    setState({
      balloonBoolean: !state.balloonBoolean
    });

    if (state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "flex";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "flex";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "none";
    } else if (!state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "none";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "none";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "default";
    }
  };

  const irisFunction = () => {
    setState({
      irisBoolean: !state.irisBoolean
    });

    if (state.irisBoolean) {
      let iris = document.querySelector(".iris");
      iris.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!state.irisBoolean) {
      let iris = document.querySelector(".iris");
      iris.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2192777310" + " " + "index-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2192777310" + " " + "index-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_components_Dock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iris: irisFunction,
    balloon: balloonFunction,
    nav: navFunction,
    twirl: twirlFunction,
    sound: soundFunction,
    menu: menuFunction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2192777310" + " " + "balloon-cursor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("img", {
    src: isFilled ? balloonWrenchFilled : balloonWrench,
    alt: "-",
    className: "jsx-2192777310" + " " + "balloon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2192777310" + " " + "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2192777310" + " " + "business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2192777310" + " " + "consumer-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2192777310" + " " + "consumer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2192777310" + " " + "consumer2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_components_Consumer2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2192777310" + " " + "menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2192777310" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2192777310" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2192777310" + " " + "balloon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_components_BalloonWrench__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2192777310" + " " + "iris",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(_components_Iris__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2192777310",
    __self: this
  }, ".index-parent.jsx-2192777310{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1623px;height:2149px;background-image:url('./iPadRim.png');margin-top:30px;}.index-child.jsx-2192777310{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;top:5px;}.balloon-cursor.jsx-2192777310{position:absolute;border-radius:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none;z-index:100;pointer-events:none;}.balloon-cursor.jsx-2192777310 img.jsx-2192777310{display:none;width:33px;height:33px;cursor:none;pointer-events:none;}.balloon-cursor-filled.jsx-2192777310{width:42px;height:42px;cursor:none;}.main-container.jsx-2192777310{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:flex;}.consumer-container.jsx-2192777310{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:312px;}.consumer2.jsx-2192777310{display:none;}.business.jsx-2192777310{display:none;}.nav.jsx-2192777310{display:none;margin-left:30px;}.menu.jsx-2192777310{display:none;margin-left:30px;}.balloon.jsx-2192777310{display:none;margin-left:30px;}.iris.jsx-2192777310{display:none;margin-left:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0TGdCLEFBSTRCLEFBVUksQUFNTCxBQVNMLEFBUUYsQUFNRSxBQU1BLEFBS0EsQUFJQSxBQUlBLEFBS0EsQUFLQSxBQUtBLFdBdkNELEVBUkQsQUF5QmYsQUFJQSxBQUlxQixBQUtBLEFBS0EsQUFLQSxLQXpEQyxLQWtCTixDQVJBLE1BaUNoQixBQUtBLEFBS0EsQUFLQSxLQXZDQSxDQWxCb0MsQUFVcEIsWUFDUSxvQkFDeEIsTUFVMkIsQUFNTCxrQkFDdEIsQ0E5QzJCLE1BVUwsa0JBQ1gsUUFDWCxnQkFNaUIsYUFDRCxZQUNRLE9Bb0JOLGFBbkJsQixDQW9CQSxLQXhDaUIsYUFDQyxjQUN3QixzQ0FDdEIsZ0JBQ2QiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnVzaW5lc3MgZnJvbSAnLi4vY29tcG9uZW50cy9CdXNpbmVzcyc7XG5pbXBvcnQgQ29uc3VtZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db25zdW1lcic7XG5pbXBvcnQgQ29uc3VtZXIyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc3VtZXIyJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBJcmlzIGZyb20gJy4uL2NvbXBvbmVudHMvSXJpcyc7XG5pbXBvcnQgQmFsbG9vbldyZW5jaCBmcm9tICcuLi9jb21wb25lbnRzL0JhbGxvb25XcmVuY2gnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coXCJ1c2VFZmZlY3Q6aXNOZXdzQm9vbGVhbjI6XCIgKyBpc05ld3NCb29sZWFuMilcbi8vICAgICBpc05ld3NCb29sZWFuID0gaXNOZXdzQm9vbGVhbjJcbi8vICAgICAgIH0pXG5cbi8vICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaVBhZFJpbS5wbmcnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gICAgY29uc3QgYmFsbG9vbldyZW5jaCA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiO1xuICAgIGNvbnN0IGJhbGxvb25XcmVuY2hGaWxsZWQgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCJcbiAgICBsZXQgaXNOZXdzQm9vbGVhbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3cylcbiAgICBsZXQgaXNEYXNoYm9hcmRCb29sZWFuID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXNoYm9hcmQpXG4gICAgY29uc3QgaXNGaWxsZWQgPSBpc05ld3NCb29sZWFuIHx8IGlzRGFzaGJvYXJkQm9vbGVhblxuXG4gICAgbGV0IHRoZVN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiB0cnVlLFxuICAgICAgICBtZW51Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbmF2Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgaXJpc0Jvb2xlYW46IHRydWVcbiAgICB9XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh0aGVTdGF0ZSk7XG5cbiAgICBsZXQgaXNOZXh0VGVtcGxhdGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc05leHRUZW1wbGF0ZSlcbiAgICBsZXQgaXNQcmV2aW91c1RlbXBsYXRlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNQcmV2aW91c1RlbXBsYXRlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzTmV4dFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyXCIpXG4gICAgICAgICAgICBjb25zdW1lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBsZXQgY29uc3VtZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lcjJcIilcbiAgICAgICAgICAgIGNvbnN1bWVyMi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJldmlvdXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgbGV0IGNvbnN1bWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXIyXCIpXG4gICAgICAgICAgICBjb25zdW1lcjIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgXG4gICAgfSlcblxuXG4gICAgY29uc3QgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGlmIChzdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBidXNpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVzaW5lc3NcIilcbiAgICAgICAgICAgIGJ1c2luZXNzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgYnVzaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzXCIpXG4gICAgICAgICAgICBidXNpbmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICBzZXRTdGF0ZSh7c291bmRCb29sZWFuOiAhc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBjb25zdCBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICBzZXRTdGF0ZSh7bWVudUJvb2xlYW46ICFzdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGlmICggc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGUubWVudUJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmF2RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICBzZXRTdGF0ZSh7bmF2Qm9vbGVhbjogIXN0YXRlLm5hdkJvb2xlYW59KVxuICAgICAgICBpZiAoIHN0YXRlLm5hdkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGUubmF2Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpXG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiYWxsb29uRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICBzZXRTdGF0ZSh7YmFsbG9vbkJvb2xlYW46ICFzdGF0ZS5iYWxsb29uQm9vbGVhbn0pXG4gICAgICAgIGlmICggc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgYmFsbG9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1jdXJzb3JcIilcbiAgICAgICAgICAgIGJhbGxvb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgYmFsbG9vbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWltYWdlIFwiKVxuICAgICAgICAgICAgYmFsbG9vbkltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGluZGV4UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleC1wYXJlbnRcIilcbiAgICAgICAgICAgIGluZGV4UGFyZW50LnN0eWxlLmN1cnNvciA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJhbGxvb25Cb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgYmFsbG9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1jdXJzb3JcIilcbiAgICAgICAgICAgIGJhbGxvb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgYmFsbG9vbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWltYWdlIFwiKVxuICAgICAgICAgICAgYmFsbG9vbkltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGluZGV4UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleC1wYXJlbnRcIilcbiAgICAgICAgICAgIGluZGV4UGFyZW50LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpcmlzRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICBzZXRTdGF0ZSh7aXJpc0Jvb2xlYW46ICFzdGF0ZS5pcmlzQm9vbGVhbn0pXG4gICAgICAgIGlmICggc3RhdGUuaXJpc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBpcmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pcmlzXCIpXG4gICAgICAgICAgICBpcmlzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZS5pcmlzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGlyaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlyaXNcIilcbiAgICAgICAgICAgIGlyaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1wYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNoaWxkXCI+XG4gICAgPERvY2sgaXJpcz17aXJpc0Z1bmN0aW9ufSBiYWxsb29uPXtiYWxsb29uRnVuY3Rpb259IG5hdj17bmF2RnVuY3Rpb259IHR3aXJsPXt0d2lybEZ1bmN0aW9ufSBzb3VuZD17IHNvdW5kRnVuY3Rpb24gfSBtZW51PXttZW51RnVuY3Rpb259PjwvRG9jaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb24tY3Vyc29yXCI+PGltZyBjbGFzc05hbWU9XCJiYWxsb29uLWltYWdlXCIgc3JjPXtpc0ZpbGxlZCA/IGJhbGxvb25XcmVuY2hGaWxsZWQgOiBiYWxsb29uV3JlbmNofSBhbHQ9XCItXCIvPjwvZGl2PlxuICAgIFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzXCI+XG4gICAgPEJ1c2luZXNzPjwvQnVzaW5lc3M+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWNvbnRhaW5lclwiPlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXJcIj5cbiAgICA8Q29uc3VtZXI+PC9Db25zdW1lcj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyMlwiPlxuICAgIDxDb25zdW1lcjI+PC9Db25zdW1lcjI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgIDxNZW51PjwvTWVudT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgIDxOYXY+PC9OYXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb25cIj5cbiAgICA8QmFsbG9vbldyZW5jaD48L0JhbGxvb25XcmVuY2g+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlyaXNcIj5cbiAgICA8SXJpcz48L0lyaXM+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2AgXG5cbiAgICAuaW5kZXgtcGFyZW50IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxNjIzcHg7XG4gICAgICAgIGhlaWdodDogMjE0OXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaVBhZFJpbS5wbmcnKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgLmluZGV4LWNoaWxkIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOjVweDtcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jdXJzb3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yLWZpbGxlZCB7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGZsZXg7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMTJweDtcbiAgICB9XG5cbiAgICAuY29uc3VtZXIyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuYnVzaW5lc3Mge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5tZW51IHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5iYWxsb29uIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5pcmlzIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuXG5cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5880bdc3dfb656fc982b.hot-update.js.map
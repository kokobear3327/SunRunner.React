webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Dock.js":
/*!********************************!*\
  !*** ./src/components/Dock.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sound */ "./node_modules/react-sound/lib/index.js");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/components/Dock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // So you now we make an onClick event with first goal registering a console.log() 

const BalloonWrenchPicFilled = "/balloon-wrench-filled.svg";
const BalloonWrenchPic = "/balloon-wrench.svg";
const TwirlPicFilled = "/twirl-filled.svg";
const TwirlPic = "/twirl.svg";
const SoundPicOn = "/sound-on.svg";
const SoundPic = "/sound.svg";

class Dock extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "DockClicked", () => {
      this.setState({
        dockBoolean: !this.state.dockBoolean
      });
      console.log(this.state.dockBoolean);

      if (this.state.dockBoolean) {
        console.log("true called");
        let title = document.querySelector(".oea-title");
        title.style.display = "none";
        let content = document.querySelector(".oea-content");
        content.style.display = "inline";
      } else {
        let title = document.querySelector(".oea-title");
        title.style = "inline";
        let content = document.querySelector(".oea-content");
        content.style = "none";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SoundOn", () => {
      console.log("SoundOn called");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlContainerClicked", () => {
      console.log("twirlContainerClicked");
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });

      if (this.state.businessBoolean) {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl-filled.svg";
      } else {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl.svg";
      }
    });

    this.state = {
      dockBoolean: true,
      balloonBoolean: false,
      soundBoolean: false,
      businessBoolean: false
    };
  }

  buttonClicked() {}

  render() {
    return __jsx("div", {
      className: "jsx-1846152566" + " " + "dock-panel-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      onClick: this.DockClicked,
      className: "jsx-1846152566" + " " + "dock-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1846152566" + " " + "search-bar-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/SearchBar.png",
      alt: "-",
      className: "jsx-1846152566" + " " + "search-bar-png2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1846152566" + " " + "oea-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-1846152566" + " " + "oea-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Omnibox Extension App")), __jsx("div", {
      className: "jsx-1846152566" + " " + "oea-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("img", {
      src: "/back.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "back-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("img", {
      src: "/forward.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "forward-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx("img", {
      src: "/iris.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "iris-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx("div", {
      id: "twirl-container",
      onClick: this.twirlContainerClicked,
      className: "jsx-1846152566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.data,
      src: this.props.business ? TwirlPicFilled : TwirlPic,
      alt: "some",
      className: "jsx-1846152566" + " " + "twirl-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), __jsx("img", {
      onClick: this.BalloonOn,
      src: this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
      alt: "some",
      className: "jsx-1846152566" + " " + "balloon-wrench-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx("img", {
      src: "/next-template.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "next-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx("img", {
      src: "/previous-template.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "previous-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx("img", {
      src: "/illuminati.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "menu-overflow-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), __jsx("img", {
      src: "/nav.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "nav-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), __jsx("img", {
      src: "/history.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "history-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), __jsx("img", {
      src: "/snake.svg",
      alt: "some",
      className: "jsx-1846152566" + " " + "snake-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("img", {
      onClick: this.SoundOn,
      src: this.state.soundBoolean ? SoundPicOn : SoundPic,
      alt: "some",
      className: "jsx-1846152566" + " " + "sound-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx("img", {
      src: "/hexagons.png",
      alt: "some",
      className: "jsx-1846152566" + " " + "right-hexagons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1846152566",
      __self: this
    }, ".input-thingy.jsx-1846152566{top:400px;}.dock-panel-parent.jsx-1846152566{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-1846152566{width:1507px;height:76px;font-family:Montserrat;font-size:23px;background-color:#000000;background-image:linear-gradient(0deg,#000000 0%,#414141 74%);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:177px;color:#2FA4E7;border:black;z-index:1;}.search-bar-parent.jsx-1846152566{pointer-events:none;}.search-bar-png2.jsx-1846152566{width:1507px;top:0px;padding-bottom:158px;}.oea-text.jsx-1846152566{font-family:Montserrat;font-size:38px;bottom:4px;position:absolute;left:523px;}.oea-content.jsx-1846152566{font-family:Montserrat;font-size:38px;bottom:4px;position:absolute;left:523px;display:none;}.back-button-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:0px;right:480px;}.forward-button-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;right:394px;}.balloon-wrench-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;right:100px;}.previous-template-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;right:300px;}.next-template-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;left:100px;}.twirl-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;left:200px;}.nav-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;right:20px;}.history-svg.jsx-1846152566{height:66px;width:66px;position:absolute;left:502px;}.menu-overflow-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;left:100px;}.snake-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;left:700px;}.iris-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;left:400px;}.sound-svg.jsx-1846152566{height:66px;width:66px;position:absolute;top:9px;left:286px;}.right-hexagons.jsx-1846152566{height:66px;width:177px;position:absolute;top:9px;left:786px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvRG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R29CLEFBR3VCLEFBSUcsQUFNSSxBQWlCTyxBQUlQLEFBVVUsQUFRQSxBQVVYLEFBT0EsQUFTQSxBQVNBLEFBUUEsQUFRQSxBQVNBLEFBUUEsQUFPQSxBQVFBLEFBUUEsQUFRQSxBQU9BLFVBMUpwQixFQTJEbUIsQUFPQSxBQVNBLEFBU0EsQUFRQSxBQVFBLEFBU0EsQUFRQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEFBT0MsQ0FqSkEsQUFxQkwsT0FKWCxDQUt5QixFQVNOLEFBUUEsQUFXRyxBQU9BLEFBU0EsQUFTQSxBQVFBLEFBUUEsQUFTQSxBQVFBLEFBT0EsQUFRQSxBQVFBLEFBUUEsQ0FPQSxDQWpKSyxhQStCWixBQVFBLEdBV0gsQUFPQSxBQVNBLEFBU0EsQUFRQSxBQVFBLEFBU0EsQUFRRSxBQU9GLEFBUUEsQUFRQSxBQVFBLENBckhaLEFBNEhZLE1BakpPLENBK0JHLEFBUUEsQUFXTixBQU9BLEFBU0QsQUFTQSxBQVFELEFBUUMsQUFTRCxBQWVBLEFBUUMsQUFRRCxBQVFDLENBT0EsRUF0Q2YsUUF4QkEsQUFRQSxBQVNBLEFBZUEsQUFRQSxBQVFBLEFBUUEsQ0F6RkEsQUFPQSxBQVNBLEFBU0EsQUF1RUEsRUFsSjZCLElBK0JkLEFBUUEsT0FoREksSUF5Q25CLEFBU0QsVUF4Q3FFLEdBd0NwRSwyREF2Q3NCLGlCQVZDLENBV04sMEVBQ00sd0JBWDNCLHFFQVkrQixtR0FDYixVQUNJLGNBQ0QsYUFDSCxVQUNkIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvRG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LXNvdW5kJztcbi8vIFNvIHlvdSBub3cgd2UgbWFrZSBhbiBvbkNsaWNrIGV2ZW50IHdpdGggZmlyc3QgZ29hbCByZWdpc3RlcmluZyBhIGNvbnNvbGUubG9nKCkgXG5cbmNvbnN0IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCJcbmNvbnN0IEJhbGxvb25XcmVuY2hQaWMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuY29uc3QgVHdpcmxQaWNGaWxsZWQgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG5jb25zdCBUd2lybFBpYyA9IFwiL3R3aXJsLnN2Z1wiXG5jb25zdCBTb3VuZFBpY09uID0gXCIvc291bmQtb24uc3ZnXCJcbmNvbnN0IFNvdW5kUGljID0gXCIvc291bmQuc3ZnXCJcblxuXG5cbmNsYXNzIERvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZG9ja0Jvb2xlYW46IHRydWUsXG4gICAgICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICAgICAgYnVzaW5lc3NCb29sZWFuOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIERvY2tDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9ja0Jvb2xlYW46ICF0aGlzLnN0YXRlLmRvY2tCb29sZWFuIH0gKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRvY2tCb29sZWFuKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2NrQm9vbGVhbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlIGNhbGxlZFwiKVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiaW5saW5lXCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTb3VuZE9uID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNvdW5kT24gY2FsbGVkXCIpXG4gICAgfVxuXG4gICAgLy8gbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgLy8gaWYgKGphbS5zcmMgPT09IFwiL3R3aXJsLWZpbGxlZC5zdmdcIikge1xuICAgIC8vICAgICBqYW0uc3JjID0gXCIvdHdpcmwuc3ZnXCJcbiAgICAvLyB9IGVsc2UgaWYgKGphbS5zcmMgPT09IFwiL3R3aXJsLnN2Z1wiKSB7XG4gICAgLy8gIGphbS5zcmMgPSBcInR3aXJsLWZpbGxlZC5zdmdcIlxuICAgIC8vIH1cblxuICAgIHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0d2lybENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsLXBhcmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWxcIiBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcG5nMlwiIHNyYz1cIi9TZWFyY2hCYXIucG5nXCIgYWx0PVwiLVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwib2VhLXRleHRcIj5PbW5pYm94IEV4dGVuc2lvbiBBcHA8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJhY2stYnV0dG9uLXN2Z1wiIHNyYz1cIi9iYWNrLnN2Z1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9yd2FyZC1idXR0b24tc3ZnXCIgc3JjPVwiL2ZvcndhcmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL2lyaXMuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidHdpcmwtY29udGFpbmVyXCIgb25DbGljaz17dGhpcy50d2lybENvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLmRhdGF9IGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5CYWxsb29uT24gfSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmV4dC10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvbmV4dC10ZW1wbGF0ZS5zdmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpb3VzLXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi9wcmV2aW91cy10ZW1wbGF0ZS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVudS1vdmVyZmxvdy1zdmdcIiBzcmM9XCIvaWxsdW1pbmF0aS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2LXN2Z1wiIHNyYz1cIi9uYXYuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpc3Rvcnktc3ZnXCIgc3JjPVwiL2hpc3Rvcnkuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNuYWtlLXN2Z1wiIHNyYz1cIi9zbmFrZS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17IHRoaXMuU291bmRPbiB9IGNsYXNzTmFtZT1cInNvdW5kLXN2Z1wiIHNyYz17IHRoaXMuc3RhdGUuc291bmRCb29sZWFuID8gU291bmRQaWNPbiA6IFNvdW5kUGljIH0gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJpZ2h0LWhleGFnb25zXCIgc3JjPVwiL2hleGFnb25zLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbnB1dC10aGluZ3kge1xuICAgICAgICAgICAgdG9wOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb2NrLXBhbmVsLXBhcmVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZG9jay1wYW5lbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRvcDogMTc3cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyRkE0RTc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wYXJlbnQge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBuZzIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTU4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZWEtdGl0bGUge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm9lYS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUyM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2VhLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTIzcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5iYWNrLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcndhcmQtYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICByaWdodDogMzk0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmJhbGxvb24td3JlbmNoLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICByaWdodDoxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJldmlvdXMtdGVtcGxhdGUtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OjMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dC10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnR3aXJsLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgICAgIC5uYXYtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OjIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5oaXN0b3J5LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjUwMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVudS1vdmVyZmxvdy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNuYWtlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlyaXMtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6NDAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb3VuZC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjg2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDc4NnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cblxuXG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4gIGV4cG9ydCBkZWZhdWx0IERvY2s7XG5cblxuXG4vLyAgIDxpbWcgY2xhc3NOYW1lPVwiaXJpcy1zdmdcIiBzcmM9XCIvSXJpc1BpY1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICA8TGluayB0bz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyB0aGlzLkJ1c2luZXNzIDogdGhpcy5Db25zdW1lcn0+PGltZyBjbGFzc05hbWU9XCJsZWZ0LWJsYW5rXCIgc3JjPVwiLi9CYWxsb29uV3JlbmNoUGljXCIgfSBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG4vLyAgICAgICA8aW1nIG9uQ2xpY2s9eyB0aGlzLkJhbGxvb25PbiB9IGNsYXNzTmFtZT1cImJhbGxvb24td3JlbmNoLXN2Z1wiIHNyYz17IHRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW4gPyBCYWxsb29uV3JlbmNoUGljRmlsbGVkIDogQmFsbG9vbldyZW5jaFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIuL1ByZXZpb3VzVGVtcGxhdGVQaWMucG5nXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8TGluayB0bz1cIi9cIj48aW1nIGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5leHQtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiAgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIuL25hdi5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlzdG9yeS1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPExpbmsgdG89XCIvTWVudU92ZXJmbG93T3BlblwiPjxpbWcgY2xhc3NOYW1lPVwibWVudS1vdmVyZmxvdy1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPjwvTGluaz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic25ha2Utc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgb25DbGljaz17IHRoaXMuU291bmRPbiB9IGNsYXNzTmFtZT1cInNvdW5kLXN2Z1wiIHNyYz17IHRoaXMuc3RhdGUuc291bmRCb29sZWFuID8gU291bmRQaWNPbiA6IFNvdW5kUGljIH0gYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8U291bmQgcGxheVN0YXR1cz17dGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW4gPyB0aGlzLlBsYXlpbmcgOiB0aGlzLlBhdXNlZH0gY2xhc3NOYW1lPVwic291bmQtc3ZnMlwiIGlkPVwic1wiIHVybD17QmFja2dyb3VuZE11c2ljfT48L1NvdW5kPlxuLy8gICAgICAgPExpbmsgdG89eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gdGhpcy5CdXNpbmVzcyA6IHRoaXMuQ29uc3VtZXJ9PjxpbWcgY2xhc3NOYW1lPVwicmlnaHQtYmxhbmtcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPjwvTGluaz4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/Dock.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dock); //   <img className="iris-svg" src="/IrisPic" alt="some" />
//   <Link to={ this.props.business ? this.Business : this.Consumer}><img className="left-blank" src="./BalloonWrenchPic" } alt="some" /></Link>
//       <img onClick={ this.BalloonOn } className="balloon-wrench-svg" src={ this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic } alt="some" />
//       <img className="previous-template-svg" src="./PreviousTemplatePic.png" alt="some" />
//       <Link to="/"><img className="twirl-svg" src={ this.props.business ? TwirlPicFilled : TwirlPic} alt="some" /></Link>
//       <img className="next-template-svg" src="./NextTemplatePic"  alt="some" />
//       <img className="nav-svg" src="./nav.svg" alt="some" />
//       <img className="history-svg" src="./NextTemplatePic" alt="some" />
//       <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src="./NextTemplatePic" alt="some" /></Link>
//       <img className="snake-svg" src="./NextTemplatePic" alt="some" />
//       <img onClick={ this.SoundOn } className="sound-svg" src={ this.state.soundBoolean ? SoundPicOn : SoundPic } alt="some" />
//       <Sound playStatus={this.state.soundBoolean ? this.Playing : this.Paused} className="sound-svg2" id="s" url={BackgroundMusic}></Sound>
//       <Link to={ this.props.business ? this.Business : this.Consumer}><img className="right-blank" src="./NextTemplatePic" alt="some" /></Link>

/***/ })

})
//# sourceMappingURL=index.js.dd65ec7b7f9268f3ed61.hot-update.js.map
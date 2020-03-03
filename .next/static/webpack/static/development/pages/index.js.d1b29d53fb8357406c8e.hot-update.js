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
        content.style.display = "flex";
      } else {
        let title = document.querySelector(".oea-title");
        title.style = "flex";
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
      className: "jsx-180456160" + " " + "dock-panel-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      onClick: this.DockClicked,
      className: "jsx-180456160" + " " + "dock-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-180456160" + " " + "search-bar-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/SearchBar.png",
      alt: "-",
      className: "jsx-180456160" + " " + "search-bar-png2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-180456160" + " " + "oea-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-180456160" + " " + "oea-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Omnibox Extension App")), __jsx("div", {
      className: "jsx-180456160" + " " + "oea-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("img", {
      src: "/back.svg",
      alt: "some",
      className: "jsx-180456160" + " " + "back-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("img", {
      src: "/forward.svg",
      alt: "some",
      className: "jsx-180456160" + " " + "forward-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx("img", {
      onClick: this.DockClicked,
      src: "/hexagons.png",
      alt: "some",
      className: "jsx-180456160" + " " + "left-hexagons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx("img", {
      src: "/iris.svg",
      alt: "some",
      className: "jsx-180456160" + " " + "iris-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), __jsx("div", {
      id: "twirl-container",
      onClick: this.twirlContainerClicked,
      className: "jsx-180456160",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.data,
      src: this.props.business ? TwirlPicFilled : TwirlPic,
      alt: "some",
      className: "jsx-180456160" + " " + "twirl-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx("img", {
      onClick: this.BalloonOn,
      src: this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
      alt: "some",
      className: "jsx-180456160" + " " + "balloon-wrench-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx("img", {
      onClick: this.NextTemplateClicked,
      src: "/down-arrow-empty.png",
      alt: "some",
      className: "jsx-180456160" + " " + "next-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx("img", {
      src: "/up-arrow-empty.png",
      alt: "some",
      className: "jsx-180456160" + " " + "previous-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), __jsx("img", {
      src: "/illuminati.svg",
      alt: "some",
      className: "jsx-180456160" + " " + "menu-overflow-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), __jsx("img", {
      src: "/nav.svg",
      alt: "some",
      className: "jsx-180456160" + " " + "nav-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), __jsx("img", {
      src: "/history.svg",
      alt: "some",
      className: "jsx-180456160" + " " + "history-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("img", {
      src: "/snake.svg",
      alt: "some",
      className: "jsx-180456160" + " " + "snake-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx("img", {
      onClick: this.SoundOn,
      src: this.state.soundBoolean ? SoundPicOn : SoundPic,
      alt: "some",
      className: "jsx-180456160" + " " + "sound-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), __jsx("img", {
      onClick: this.DockClicked,
      src: "/hexagons.png",
      alt: "some",
      className: "jsx-180456160" + " " + "right-hexagons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "180456160",
      __self: this
    }, ".dock-panel-parent.jsx-180456160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-180456160{width:1507px;height:76px;font-family:Montserrat;font-size:23px;background-color:#000000;background-image:linear-gradient(0deg,#000000 0%,#414141 74%);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:177px;color:#2FA4E7;border:black;z-index:1;border:5px green solid;}.search-bar-parent.jsx-180456160{pointer-events:none;}.search-bar-png2.jsx-180456160{width:1507px;top:0px;padding-bottom:158px;}.oea-text.jsx-180456160{font-family:Montserrat;font-size:38px;bottom:4px;position:absolute;left:523px;}.oea-content.jsx-180456160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:Montserrat;font-size:38px;position:relative;left:0px;display:none;border:5px yellow solid;}.back-button-svg.jsx-180456160{height:66px;width:66px;position:relative;right:1066px;}.forward-button-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;right:980px;}.left-hexagons.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;right:234px;}.balloon-wrench-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;right:100px;}.previous-template-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;left:300px;}.next-template-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;left:100px;}.twirl-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;left:200px;}.nav-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;right:20px;}.history-svg.jsx-180456160{height:66px;width:66px;position:absolute;left:502px;}.menu-overflow-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;left:100px;}.snake-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;left:700px;}.iris-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;left:400px;}.sound-svg.jsx-180456160{height:66px;width:66px;position:absolute;top:9px;left:286px;}.right-hexagons.jsx-180456160{height:66px;width:177px;position:absolute;top:9px;left:786px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvRG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5R29CLEFBSzBCLEFBTUksQUFrQk8sQUFJUCxBQVVVLEFBUVYsQUFXRCxBQU1BLEFBUUEsQUFTQSxBQVNBLEFBUUEsQUFRQSxBQVNBLEFBUUEsQUFPQSxBQVFBLEFBUUEsQUFRQSxBQU9BLFlBdEdELEFBTUEsQUFRQSxBQVNBLEFBU0EsQUFRQSxBQVFBLEFBU0EsQUFRQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEFBT0MsQ0ExSkEsQUFzQkwsT0FKWCxDQUt5QixFQVNOLEFBb0JHLEFBTUEsQUFRQSxBQVNBLEFBU0EsQUFRQSxBQVFBLEFBU0EsQUFRQSxBQU9BLEFBUUEsQUFRQSxBQVFBLENBT0EsQ0ExSkssYUFnQ1osR0FvQkUsQUFNTCxBQVFBLEFBU0EsQUFTQSxBQVFBLEFBUUEsQUFTQSxBQVFFLEFBT0YsQUFRQSxBQVFBLEFBUUEsQ0E3SFosQUFvSVksTUExSk8sQ0FnQ0csQUEwQk4sQUFRQSxBQVNELEFBU0QsQUFRQSxBQVFDLEFBU0QsQUFlQSxBQVFDLEFBUUQsQUFRQyxDQU9BLEVBdENmLEVBakVBLE1BaUNBLEFBUUEsQUFRQSxBQVNBLEFBZUEsQUFRQSxBQVFBLEFBUUEsQ0ExRkEsQUFRQSxBQVNBLEFBZ0ZBLEVBM0o2QixJQWdDZCxPQXpDSSxBQThDUSxJQUozQixVQWhDb0UsU0FxQ2pELGVBQ0csa0JBQ1QsU0FDSSxXQXZDSyxFQXdDTSxlQWxETCxDQVdOLFFBd0NqQixrRUF2Q3VCLHdCQVgzQixxRUFZK0IsbUdBQ2IsVUFDSSxjQUNELGFBQ0gsVUFDYSx1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEtTmV4dC9zcmMvY29tcG9uZW50cy9Eb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU291bmQgZnJvbSAncmVhY3Qtc291bmQnO1xuLy8gU28geW91IG5vdyB3ZSBtYWtlIGFuIG9uQ2xpY2sgZXZlbnQgd2l0aCBmaXJzdCBnb2FsIHJlZ2lzdGVyaW5nIGEgY29uc29sZS5sb2coKSBcblxuY29uc3QgQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIlxuY29uc3QgQmFsbG9vbldyZW5jaFBpYyA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiXG5jb25zdCBUd2lybFBpY0ZpbGxlZCA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbmNvbnN0IFR3aXJsUGljID0gXCIvdHdpcmwuc3ZnXCJcbmNvbnN0IFNvdW5kUGljT24gPSBcIi9zb3VuZC1vbi5zdmdcIlxuY29uc3QgU291bmRQaWMgPSBcIi9zb3VuZC5zdmdcIlxuXG5cblxuY2xhc3MgRG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkb2NrQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgICAgICBidXNpbmVzc0Jvb2xlYW46ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgRG9ja0NsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2NrQm9vbGVhbjogIXRoaXMuc3RhdGUuZG9ja0Jvb2xlYW4gfSApXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZG9ja0Jvb2xlYW4pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRvY2tCb29sZWFuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWUgY2FsbGVkXCIpXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU291bmRPbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3VuZE9uIGNhbGxlZFwiKVxuICAgIH1cblxuICAgIC8vIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgIC8vIGlmIChqYW0uc3JjID09PSBcIi90d2lybC1maWxsZWQuc3ZnXCIpIHtcbiAgICAvLyAgICAgamFtLnNyYyA9IFwiL3R3aXJsLnN2Z1wiXG4gICAgLy8gfSBlbHNlIGlmIChqYW0uc3JjID09PSBcIi90d2lybC5zdmdcIikge1xuICAgIC8vICBqYW0uc3JjID0gXCJ0d2lybC1maWxsZWQuc3ZnXCJcbiAgICAvLyB9XG5cbiAgICB0d2lybENvbnRhaW5lckNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHdpcmxDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvdHdpcmwuc3ZnXCJcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jay1wYW5lbC1wYXJlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsXCIgb25DbGljaz17dGhpcy5Eb2NrQ2xpY2tlZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLXBuZzJcIiBzcmM9XCIvU2VhcmNoQmFyLnBuZ1wiIGFsdD1cIi1cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS10aXRsZVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm9lYS10ZXh0XCI+T21uaWJveCBFeHRlbnNpb24gQXBwPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtY29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvbi1zdmdcIiBzcmM9XCIvYmFjay5zdmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvcndhcmQtYnV0dG9uLXN2Z1wiIHNyYz1cIi9mb3J3YXJkLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfSBjbGFzc05hbWU9XCJsZWZ0LWhleGFnb25zXCIgc3JjPVwiL2hleGFnb25zLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpcmlzLXN2Z1wiIHNyYz1cIi9pcmlzLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBpZD1cInR3aXJsLWNvbnRhaW5lclwiIG9uQ2xpY2s9e3RoaXMudHdpcmxDb250YWluZXJDbGlja2VkfT5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5wcm9wcy5kYXRhfSBjbGFzc05hbWU9XCJ0d2lybC1zdmdcIiBzcmM9eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gVHdpcmxQaWNGaWxsZWQgOiBUd2lybFBpY30gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17IHRoaXMuQmFsbG9vbk9uIH0gY2xhc3NOYW1lPVwiYmFsbG9vbi13cmVuY2gtc3ZnXCIgc3JjPXsgdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbiA/IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgOiBCYWxsb29uV3JlbmNoUGljIH0gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuTmV4dFRlbXBsYXRlQ2xpY2tlZH1jbGFzc05hbWU9XCJuZXh0LXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi9kb3duLWFycm93LWVtcHR5LnBuZ1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJldmlvdXMtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiL3VwLWFycm93LWVtcHR5LnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZW51LW92ZXJmbG93LXN2Z1wiIHNyYz1cIi9pbGx1bWluYXRpLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXYtc3ZnXCIgc3JjPVwiL25hdi5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlzdG9yeS1zdmdcIiBzcmM9XCIvaGlzdG9yeS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic25ha2Utc3ZnXCIgc3JjPVwiL3NuYWtlLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5Tb3VuZE9uIH0gY2xhc3NOYW1lPVwic291bmQtc3ZnXCIgc3JjPXsgdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW4gPyBTb3VuZFBpY09uIDogU291bmRQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5Eb2NrQ2xpY2tlZH0gY2xhc3NOYW1lPVwicmlnaHQtaGV4YWdvbnNcIiBzcmM9XCIvaGV4YWdvbnMucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG5cbiAgICAgICAgLmRvY2stcGFuZWwtcGFyZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kb2NrLXBhbmVsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdG9wOiAxNzdweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJGQTRFNztcbiAgICAgICAgICAgICAgICBib3JkZXI6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggZ3JlZW4gc29saWQ7XG4gICAgICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnNlYXJjaC1iYXItcG5nMiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MDdweDtcbiAgICAgICAgICAgICAgICB0b3A6MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS10aXRsZSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAub2VhLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTIzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZWEtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHllbGxvdyBzb2xpZDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuYmFjay1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDY2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yd2FyZC1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA5ODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxlZnQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5iYWxsb29uLXdyZW5jaC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnByZXZpb3VzLXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OjMwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dC10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnR3aXJsLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgICAgIC5uYXYtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OjIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5oaXN0b3J5LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjUwMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVudS1vdmVyZmxvdy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNuYWtlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlyaXMtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6NDAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb3VuZC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjg2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDc4NnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cblxuXG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4gIGV4cG9ydCBkZWZhdWx0IERvY2s7XG5cblxuXG4vLyAgIDxpbWcgY2xhc3NOYW1lPVwiaXJpcy1zdmdcIiBzcmM9XCIvSXJpc1BpY1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICA8TGluayB0bz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyB0aGlzLkJ1c2luZXNzIDogdGhpcy5Db25zdW1lcn0+PGltZyBjbGFzc05hbWU9XCJsZWZ0LWJsYW5rXCIgc3JjPVwiLi9CYWxsb29uV3JlbmNoUGljXCIgfSBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG4vLyAgICAgICA8aW1nIG9uQ2xpY2s9eyB0aGlzLkJhbGxvb25PbiB9IGNsYXNzTmFtZT1cImJhbGxvb24td3JlbmNoLXN2Z1wiIHNyYz17IHRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW4gPyBCYWxsb29uV3JlbmNoUGljRmlsbGVkIDogQmFsbG9vbldyZW5jaFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIuL1ByZXZpb3VzVGVtcGxhdGVQaWMucG5nXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8TGluayB0bz1cIi9cIj48aW1nIGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5leHQtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiAgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIuL25hdi5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlzdG9yeS1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPExpbmsgdG89XCIvTWVudU92ZXJmbG93T3BlblwiPjxpbWcgY2xhc3NOYW1lPVwibWVudS1vdmVyZmxvdy1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPjwvTGluaz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic25ha2Utc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgb25DbGljaz17IHRoaXMuU291bmRPbiB9IGNsYXNzTmFtZT1cInNvdW5kLXN2Z1wiIHNyYz17IHRoaXMuc3RhdGUuc291bmRCb29sZWFuID8gU291bmRQaWNPbiA6IFNvdW5kUGljIH0gYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8U291bmQgcGxheVN0YXR1cz17dGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW4gPyB0aGlzLlBsYXlpbmcgOiB0aGlzLlBhdXNlZH0gY2xhc3NOYW1lPVwic291bmQtc3ZnMlwiIGlkPVwic1wiIHVybD17QmFja2dyb3VuZE11c2ljfT48L1NvdW5kPlxuLy8gICAgICAgPExpbmsgdG89eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gdGhpcy5CdXNpbmVzcyA6IHRoaXMuQ29uc3VtZXJ9PjxpbWcgY2xhc3NOYW1lPVwicmlnaHQtYmxhbmtcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPjwvTGluaz4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/Dock.js */"));
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
//# sourceMappingURL=index.js.d1b29d53fb8357406c8e.hot-update.js.map
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
      // let searchBar = document.querySelector(".search-bar-png2")
      // searchBar.style.left = 1020 + "px"
      // console.log(searchBar.style)
      this.setState({
        dockBoolean: !this.state.dockBoolean
      });

      if (this.state.dockBoolean) {
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
      className: "jsx-1758030791" + " " + "dock-panel-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      onClick: this.DockClicked,
      className: "jsx-1758030791" + " " + "dock-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1758030791" + " " + "search-bar-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("img", {
      src: "/SearchBar.png",
      alt: "-",
      className: "jsx-1758030791" + " " + "search-bar-png2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1758030791" + " " + "oea-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-1758030791" + " " + "oea-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Omnibox Extension App")), __jsx("div", {
      className: "jsx-1758030791" + " " + "oea-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/back.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "back-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx("img", {
      src: "/forward.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "forward-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), __jsx("img", {
      src: "/iris.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "iris-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx("div", {
      id: "twirl-container",
      onClick: this.twirlContainerClicked,
      className: "jsx-1758030791",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.data,
      src: this.props.business ? TwirlPicFilled : TwirlPic,
      alt: "some",
      className: "jsx-1758030791" + " " + "twirl-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), __jsx("img", {
      onClick: this.BalloonOn,
      src: this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
      alt: "some",
      className: "jsx-1758030791" + " " + "balloon-wrench-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("img", {
      onClick: this.NextTemplateClicked,
      src: "/down-arrow-empty.png",
      alt: "some",
      className: "jsx-1758030791" + " " + "next-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx("img", {
      src: "/up-arrow-empty.png",
      alt: "some",
      className: "jsx-1758030791" + " " + "previous-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx("img", {
      src: "/illuminati.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "menu-overflow-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), __jsx("img", {
      src: "/nav.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "nav-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx("img", {
      src: "/history.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "history-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx("img", {
      src: "/snake.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "snake-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx("img", {
      onClick: this.SoundOn,
      src: this.state.soundBoolean ? SoundPicOn : SoundPic,
      alt: "some",
      className: "jsx-1758030791" + " " + "sound-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1758030791",
      __self: this
    }, ".dock-panel-parent.jsx-1758030791{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-1758030791{width:1507px;height:76px;font-family:Montserrat;font-size:23px;background-color:#000000;background-image:linear-gradient(0deg,#000000 0%,#414141 74%);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:177px;color:#2FA4E7;border:black;z-index:1;border:5px green solid;}.search-bar-parent.jsx-1758030791{pointer-events:none;position:absolute;}.search-bar-png2.jsx-1758030791{width:1507px;top:0px;padding-bottom:158px;}.oea-text.jsx-1758030791{font-family:Montserrat;font-size:38px;bottom:4px;position:absolute;left:523px;}.oea-content.jsx-1758030791{display:none;font-family:Montserrat;font-size:38px;position:relative;width:1507px;height:76px;border:5px yellow solid;}.back-button-svg.jsx-1758030791{height:66px;width:66px;position:absolute;}.forward-button-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:76px;}.left-hexagons.jsx-1758030791{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:492px;}.nav-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:574px;}.menu-overflow-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:656px;}.twirl-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:738px;}.history-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:820px;}.iris-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:902px;}.sound-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:984px;}.next-template-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:1066px;}.right-hexagons.jsx-1758030791{height:66px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvRG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR29CLEFBSzBCLEFBTUksQUFrQk8sQUFLUCxBQVNVLEFBUVYsQUFXRCxBQUtBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLFlBMUZELEFBS0EsQUFPQyxBQU9ELEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9DLEFBT0QsQ0E5SUMsQUF1QkwsQUFpQmdCLE9BdEJMLENBTUcsRUFRTixBQW9CRyxBQUtBLEFBY0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBY0EsQ0EvRUEsQUF3RUEsQ0F2SUssV0F3Q1IsRUF0Qm5CLEFBY2UsR0FvQmYsQUFLYyxBQWNBLEFBT0EsQUFRQyxBQU9ELEFBT0MsQUFPRCxBQU9BLEFBUUMsQUFPQSxBQWVDLENBeEhoQixBQXdDZSxBQXdFQyxNQXZJRyxDQWdDRyxFQVFBLEFBaUJ0QixDQWNBLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQ0ExREEsQUFpRUEsQUFlQSxDQVJBLFNBdkk2QixJQWdDZCxFQVFFLEtBakRFLElBMENuQixJQVFnQixNQXhDb0QsTUF5Q3hDLHdCQUM1QixnQ0F6Q3NCLGlCQVZDLENBV04sMEVBQ00sd0JBWDNCLHFFQVkrQixtR0FDYixVQUNJLGNBQ0QsYUFDSCxVQUNhLHVCQUMzQiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS1OZXh0L3NyYy9jb21wb25lbnRzL0RvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG4vLyBTbyB5b3Ugbm93IHdlIG1ha2UgYW4gb25DbGljayBldmVudCB3aXRoIGZpcnN0IGdvYWwgcmVnaXN0ZXJpbmcgYSBjb25zb2xlLmxvZygpIFxuXG5jb25zdCBCYWxsb29uV3JlbmNoUGljRmlsbGVkID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiXG5jb25zdCBCYWxsb29uV3JlbmNoUGljID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbmNvbnN0IFR3aXJsUGljRmlsbGVkID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuY29uc3QgVHdpcmxQaWMgPSBcIi90d2lybC5zdmdcIlxuY29uc3QgU291bmRQaWNPbiA9IFwiL3NvdW5kLW9uLnN2Z1wiXG5jb25zdCBTb3VuZFBpYyA9IFwiL3NvdW5kLnN2Z1wiXG5cblxuXG5jbGFzcyBEb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRvY2tCb29sZWFuOiB0cnVlLFxuICAgICAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgICAgIGJ1c2luZXNzQm9vbGVhbjpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBidXR0b25DbGlja2VkKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBEb2NrQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgLy8gbGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhci1wbmcyXCIpXG4gICAgICAgIC8vIHNlYXJjaEJhci5zdHlsZS5sZWZ0ID0gMTAyMCArIFwicHhcIlxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hCYXIuc3R5bGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2NrQm9vbGVhbjogIXRoaXMuc3RhdGUuZG9ja0Jvb2xlYW4gfSApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRvY2tCb29sZWFuKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU291bmRPbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3VuZE9uIGNhbGxlZFwiKVxuICAgIH1cblxuICAgIHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0d2lybENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsLXBhcmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWxcIiBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcG5nMlwiIHNyYz1cIi9TZWFyY2hCYXIucG5nXCIgYWx0PVwiLVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwib2VhLXRleHRcIj5PbW5pYm94IEV4dGVuc2lvbiBBcHA8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJhY2stYnV0dG9uLXN2Z1wiIHNyYz1cIi9iYWNrLnN2Z1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9yd2FyZC1idXR0b24tc3ZnXCIgc3JjPVwiL2ZvcndhcmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL2lyaXMuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidHdpcmwtY29udGFpbmVyXCIgb25DbGljaz17dGhpcy50d2lybENvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLmRhdGF9IGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5CYWxsb29uT24gfSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5OZXh0VGVtcGxhdGVDbGlja2VkfWNsYXNzTmFtZT1cIm5leHQtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiL2Rvd24tYXJyb3ctZW1wdHkucG5nXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvdXAtYXJyb3ctZW1wdHkucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPVwiL2lsbHVtaW5hdGkuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIvbmF2LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoaXN0b3J5LXN2Z1wiIHNyYz1cIi9oaXN0b3J5LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbmFrZS1zdmdcIiBzcmM9XCIvc25ha2Uuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eyB0aGlzLlNvdW5kT24gfSBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbiA/IFNvdW5kUGljT24gOiBTb3VuZFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG5cbiAgICAgICAgLmRvY2stcGFuZWwtcGFyZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kb2NrLXBhbmVsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAwMCAwJSwgIzQxNDE0MSA3NCUpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdG9wOiAxNzdweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJGQTRFNztcbiAgICAgICAgICAgICAgICBib3JkZXI6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggZ3JlZW4gc29saWQ7XG4gICAgICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBuZzIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTU4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZWEtdGl0bGUge1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5vZWEtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MjNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggeWVsbG93IHNvbGlkO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5iYWNrLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yd2FyZC1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDc2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sZWZ0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzLXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjQxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYmFsbG9vbi13cmVuY2gtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDkycHg7XG4gICAgICAgICAgICB9ICAgICAgICBcblxuICAgICAgICAgICAgLm5hdi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDU3NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVudS1vdmVyZmxvdy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo2NTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnR3aXJsLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3MzhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpc3Rvcnktc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6ODIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmlyaXMtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6OTAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb3VuZC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDk4NHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dC10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDY2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yaWdodC1oZXhhZ29ucyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTE0OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc25ha2Utc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDE0MjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuXG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiAgZXhwb3J0IGRlZmF1bHQgRG9jaztcblxuXG5cbi8vICAgPGltZyBjbGFzc05hbWU9XCJpcmlzLXN2Z1wiIHNyYz1cIi9JcmlzUGljXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgIDxMaW5rIHRvPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IHRoaXMuQnVzaW5lc3MgOiB0aGlzLkNvbnN1bWVyfT48aW1nIGNsYXNzTmFtZT1cImxlZnQtYmxhbmtcIiBzcmM9XCIuL0JhbGxvb25XcmVuY2hQaWNcIiB9IGFsdD1cInNvbWVcIiAvPjwvTGluaz5cbi8vICAgICAgIDxpbWcgb25DbGljaz17IHRoaXMuQmFsbG9vbk9uIH0gY2xhc3NOYW1lPVwiYmFsbG9vbi13cmVuY2gtc3ZnXCIgc3JjPXsgdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbiA/IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgOiBCYWxsb29uV3JlbmNoUGljIH0gYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpb3VzLXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi4vUHJldmlvdXNUZW1wbGF0ZVBpYy5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxMaW5rIHRvPVwiL1wiPjxpbWcgY2xhc3NOYW1lPVwidHdpcmwtc3ZnXCIgc3JjPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IFR3aXJsUGljRmlsbGVkIDogVHdpcmxQaWN9IGFsdD1cInNvbWVcIiAvPjwvTGluaz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmV4dC10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiICBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2LXN2Z1wiIHNyYz1cIi4vbmF2LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJoaXN0b3J5LXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8TGluayB0bz1cIi9NZW51T3ZlcmZsb3dPcGVuXCI+PGltZyBjbGFzc05hbWU9XCJtZW51LW92ZXJmbG93LXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJzbmFrZS1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5Tb3VuZE9uIH0gY2xhc3NOYW1lPVwic291bmQtc3ZnXCIgc3JjPXsgdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW4gPyBTb3VuZFBpY09uIDogU291bmRQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxTb3VuZCBwbGF5U3RhdHVzPXt0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbiA/IHRoaXMuUGxheWluZyA6IHRoaXMuUGF1c2VkfSBjbGFzc05hbWU9XCJzb3VuZC1zdmcyXCIgaWQ9XCJzXCIgdXJsPXtCYWNrZ3JvdW5kTXVzaWN9PjwvU291bmQ+XG4vLyAgICAgICA8TGluayB0bz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyB0aGlzLkJ1c2luZXNzIDogdGhpcy5Db25zdW1lcn0+PGltZyBjbGFzc05hbWU9XCJyaWdodC1ibGFua1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuXG4vLyAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfSBjbGFzc05hbWU9XCJyaWdodC1oZXhhZ29uc1wiIHNyYz1cIi9oZXhhZ29ucy5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbi8vIDxpbWcgb25DbGljaz17dGhpcy5Eb2NrQ2xpY2tlZH0gY2xhc3NOYW1lPVwibGVmdC1oZXhhZ29uc1wiIHNyYz1cIi9oZXhhZ29ucy5wbmdcIiBhbHQ9XCJzb21lXCIgLz4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/Dock.js */"));
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
//        <img onClick={this.DockClicked} className="right-hexagons" src="/hexagons.png" alt="some" />
// <img onClick={this.DockClicked} className="left-hexagons" src="/hexagons.png" alt="some" />

/***/ })

})
//# sourceMappingURL=index.js.d018494d8ce711714e95.hot-update.js.map
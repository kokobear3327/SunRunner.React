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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SoundClicked", event => {
      event.stopPropagation();
      console.log("SoundClicked called");
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlContainerClicked", event => {
      event.stopPropagation();
      console.log("twirlContainerClicked");
      console.log(this.state.businessBoolean);
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log(this.state.businessBoolean);

      if (this.state.businessBoolean) {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl-filled.svg";
      } else {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl.svg";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlContainerClicked", event => {
      event.stopPropagation();
      console.log("twirlContainerClicked");
      console.log(this.state.businessBoolean);
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log(this.state.businessBoolean);

      if (this.state.businessBoolean) {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl-filled.svg";
      } else {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl.svg";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "soundContainerClicked", event => {
      event.stopPropagation();
      console.log("soundContainerClicked");
      console.log(this.state.soundBoolean);
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });

      if (this.state.soundBoolean) {
        let jam = document.querySelector(".sound-svg");
        jam.src = "/sound.svg";
      } else {
        let jam = document.querySelector(".sound-svg");
        jam.src = "/sound-filled.svg";
      }
    });

    this.state = {
      dockBoolean: true,
      balloonBoolean: false,
      soundBoolean: true,
      businessBoolean: true
    };
  }

  buttonClicked() {}

  render() {
    return __jsx("div", {
      className: "jsx-1758030791" + " " + "dock-panel-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      onClick: this.DockClicked,
      className: "jsx-1758030791" + " " + "dock-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1758030791" + " " + "search-bar-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("img", {
      src: "/SearchBar.png",
      alt: "-",
      className: "jsx-1758030791" + " " + "search-bar-png2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1758030791" + " " + "oea-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-1758030791" + " " + "oea-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Omnibox Extension App")), __jsx("div", {
      className: "jsx-1758030791" + " " + "oea-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("img", {
      src: "/back.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "back-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), __jsx("img", {
      src: "/forward.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "forward-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), __jsx("img", {
      src: "/iris.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "iris-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), __jsx("div", {
      id: "twirl-container",
      onClick: this.twirlContainerClicked,
      className: "jsx-1758030791",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.twirl,
      src: this.props.business ? TwirlPicFilled : TwirlPic,
      alt: "some",
      className: "jsx-1758030791" + " " + "twirl-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    })), __jsx("img", {
      onClick: this.BalloonOn,
      src: this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
      alt: "some",
      className: "jsx-1758030791" + " " + "balloon-wrench-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), __jsx("img", {
      onClick: this.NextTemplateClicked,
      src: "/down-arrow-empty.png",
      alt: "some",
      className: "jsx-1758030791" + " " + "next-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), __jsx("img", {
      src: "/up-arrow-empty.png",
      alt: "some",
      className: "jsx-1758030791" + " " + "previous-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), __jsx("img", {
      src: "/illuminati.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "menu-overflow-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), __jsx("img", {
      src: "/nav.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "nav-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), __jsx("img", {
      src: "/history.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "history-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }), __jsx("img", {
      src: "/snake.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "snake-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), __jsx("div", {
      onClick: this.soundContainerClicked,
      className: "jsx-1758030791" + " " + "sound-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("img", {
      src: "/sound.svg",
      alt: "some",
      className: "jsx-1758030791" + " " + "sound-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1758030791",
      __self: this
    }, ".dock-panel-parent.jsx-1758030791{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-1758030791{width:1507px;height:76px;font-family:Montserrat;font-size:23px;background-color:#000000;background-image:linear-gradient(0deg,#000000 0%,#414141 74%);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:177px;color:#2FA4E7;border:black;z-index:1;border:5px green solid;}.search-bar-parent.jsx-1758030791{pointer-events:none;position:absolute;}.search-bar-png2.jsx-1758030791{width:1507px;top:0px;padding-bottom:158px;}.oea-text.jsx-1758030791{font-family:Montserrat;font-size:38px;bottom:4px;position:absolute;left:523px;}.oea-content.jsx-1758030791{display:none;font-family:Montserrat;font-size:38px;position:relative;width:1507px;height:76px;border:5px yellow solid;}.back-button-svg.jsx-1758030791{height:66px;width:66px;position:absolute;}.forward-button-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:76px;}.left-hexagons.jsx-1758030791{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:492px;}.nav-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:574px;}.menu-overflow-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:656px;}.twirl-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:738px;}.history-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:820px;}.iris-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:902px;}.sound-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:984px;}.next-template-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:1066px;}.right-hexagons.jsx-1758030791{height:66px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-1758030791{height:66px;width:66px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvRG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSm9CLEFBSzBCLEFBTUksQUFrQk8sQUFLUCxBQVNVLEFBUVYsQUFXRCxBQUtBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLFlBMUZELEFBS0EsQUFPQyxBQU9ELEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9DLEFBT0QsQ0E5SUMsQUF1QkwsQUFpQmdCLE9BdEJMLENBTUcsRUFRTixBQW9CRyxBQUtBLEFBY0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBY0EsQ0EvRUEsQUF3RUEsQ0F2SUssV0F3Q1IsRUF0Qm5CLEFBY2UsR0FvQmYsQUFLYyxBQWNBLEFBT0EsQUFRQyxBQU9ELEFBT0MsQUFPRCxBQU9BLEFBUUMsQUFPQSxBQWVDLENBeEhoQixBQXdDZSxBQXdFQyxNQXZJRyxDQWdDRyxFQVFBLEFBaUJ0QixDQWNBLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQ0ExREEsQUFpRUEsQUFlQSxDQVJBLFNBdkk2QixJQWdDZCxFQVFFLEtBakRFLElBMENuQixJQVFnQixNQXhDb0QsTUF5Q3hDLHdCQUM1QixnQ0F6Q3NCLGlCQVZDLENBV04sMEVBQ00sd0JBWDNCLHFFQVkrQixtR0FDYixVQUNJLGNBQ0QsYUFDSCxVQUNhLHVCQUMzQiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS1OZXh0L3NyYy9jb21wb25lbnRzL0RvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG4vLyBTbyB5b3Ugbm93IHdlIG1ha2UgYW4gb25DbGljayBldmVudCB3aXRoIGZpcnN0IGdvYWwgcmVnaXN0ZXJpbmcgYSBjb25zb2xlLmxvZygpIFxuXG5jb25zdCBCYWxsb29uV3JlbmNoUGljRmlsbGVkID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiXG5jb25zdCBCYWxsb29uV3JlbmNoUGljID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbmNvbnN0IFR3aXJsUGljRmlsbGVkID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuY29uc3QgVHdpcmxQaWMgPSBcIi90d2lybC5zdmdcIlxuY29uc3QgU291bmRQaWNPbiA9IFwiL3NvdW5kLW9uLnN2Z1wiXG5jb25zdCBTb3VuZFBpYyA9IFwiL3NvdW5kLnN2Z1wiXG5cblxuXG5jbGFzcyBEb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRvY2tCb29sZWFuOiB0cnVlLFxuICAgICAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICAgICAgc291bmRCb29sZWFuOiB0cnVlLFxuICAgICAgICAgICAgYnVzaW5lc3NCb29sZWFuOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgRG9ja0NsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIC8vIGxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXItcG5nMlwiKVxuICAgICAgICAvLyBzZWFyY2hCYXIuc3R5bGUubGVmdCA9IDEwMjAgKyBcInB4XCJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoQmFyLnN0eWxlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9ja0Jvb2xlYW46ICF0aGlzLnN0YXRlLmRvY2tCb29sZWFuIH0gKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2NrQm9vbGVhbikge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgdGl0bGUuc3R5bGUgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNvdW5kQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvdW5kQ2xpY2tlZCBjYWxsZWRcIilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgdHdpcmxDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHdpcmxDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHdpcmxDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHdpcmxDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc291bmRDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwic291bmRDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc291bmRCb29sZWFuKVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmQtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvc291bmQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmQtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvc291bmQtZmlsbGVkLnN2Z1wiXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWwtcGFyZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jay1wYW5lbFwiIG9uQ2xpY2s9e3RoaXMuRG9ja0NsaWNrZWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLXBhcmVudFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wbmcyXCIgc3JjPVwiL1NlYXJjaEJhci5wbmdcIiBhbHQ9XCItXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtdGl0bGVcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJvZWEtdGV4dFwiPk9tbmlib3ggRXh0ZW5zaW9uIEFwcDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmFjay1idXR0b24tc3ZnXCIgc3JjPVwiL2JhY2suc3ZnXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb3J3YXJkLWJ1dHRvbi1zdmdcIiBzcmM9XCIvZm9yd2FyZC5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXJpcy1zdmdcIiBzcmM9XCIvaXJpcy5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0d2lybC1jb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLnR3aXJsQ29udGFpbmVyQ2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMucHJvcHMudHdpcmx9IGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5CYWxsb29uT24gfSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5OZXh0VGVtcGxhdGVDbGlja2VkfWNsYXNzTmFtZT1cIm5leHQtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiL2Rvd24tYXJyb3ctZW1wdHkucG5nXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvdXAtYXJyb3ctZW1wdHkucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPVwiL2lsbHVtaW5hdGkuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIvbmF2LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoaXN0b3J5LXN2Z1wiIHNyYz1cIi9oaXN0b3J5LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbmFrZS1zdmdcIiBzcmM9XCIvc25ha2Uuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyB0aGlzLnNvdW5kQ29udGFpbmVyQ2xpY2tlZCB9IGNsYXNzTmFtZT1cInNvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9XCIvc291bmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcblxuICAgICAgICAuZG9jay1wYW5lbC1wYXJlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRvY2stcGFuZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0b3A6IDE3N3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMkZBNEU3O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBncmVlbiBzb2xpZDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICAgICAgLnNlYXJjaC1iYXItcGFyZW50IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnNlYXJjaC1iYXItcG5nMiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MDdweDtcbiAgICAgICAgICAgICAgICB0b3A6MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS10aXRsZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm9lYS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUyM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2VhLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDVweCB5ZWxsb3cgc29saWQ7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLmJhY2stYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3J3YXJkLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxlZnQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1MnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldmlvdXMtdGVtcGxhdGUtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5iYWxsb29uLXdyZW5jaC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo0OTJweDtcbiAgICAgICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgICAgICAubmF2LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogNTc0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tZW51LW92ZXJmbG93LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjY1NnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHdpcmwtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDczOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlzdG9yeS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo4MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuaXJpcy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo5MDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvdW5kLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogOTg0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0LXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjEwNjZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJpZ2h0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMTQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbmFrZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogMTQyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuICBleHBvcnQgZGVmYXVsdCBEb2NrO1xuXG5cblxuLy8gICA8aW1nIGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL0lyaXNQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgPExpbmsgdG89eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gdGhpcy5CdXNpbmVzcyA6IHRoaXMuQ29uc3VtZXJ9PjxpbWcgY2xhc3NOYW1lPVwibGVmdC1ibGFua1wiIHNyYz1cIi4vQmFsbG9vbldyZW5jaFBpY1wiIH0gYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5CYWxsb29uT24gfSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJldmlvdXMtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiLi9QcmV2aW91c1RlbXBsYXRlUGljLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPExpbmsgdG89XCIvXCI+PGltZyBjbGFzc05hbWU9XCJ0d2lybC1zdmdcIiBzcmM9eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gVHdpcmxQaWNGaWxsZWQgOiBUd2lybFBpY30gYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJuZXh0LXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXYtc3ZnXCIgc3JjPVwiLi9uYXYuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpc3Rvcnktc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxMaW5rIHRvPVwiL01lbnVPdmVyZmxvd09wZW5cIj48aW1nIGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNuYWtlLXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIG9uQ2xpY2s9eyB0aGlzLlNvdW5kT24gfSBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbiA/IFNvdW5kUGljT24gOiBTb3VuZFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPFNvdW5kIHBsYXlTdGF0dXM9e3RoaXMuc3RhdGUuc291bmRCb29sZWFuID8gdGhpcy5QbGF5aW5nIDogdGhpcy5QYXVzZWR9IGNsYXNzTmFtZT1cInNvdW5kLXN2ZzJcIiBpZD1cInNcIiB1cmw9e0JhY2tncm91bmRNdXNpY30+PC9Tb3VuZD5cbi8vICAgICAgIDxMaW5rIHRvPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IHRoaXMuQnVzaW5lc3MgOiB0aGlzLkNvbnN1bWVyfT48aW1nIGNsYXNzTmFtZT1cInJpZ2h0LWJsYW5rXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG5cbi8vICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuRG9ja0NsaWNrZWR9IGNsYXNzTmFtZT1cInJpZ2h0LWhleGFnb25zXCIgc3JjPVwiL2hleGFnb25zLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gPGltZyBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfSBjbGFzc05hbWU9XCJsZWZ0LWhleGFnb25zXCIgc3JjPVwiL2hleGFnb25zLnBuZ1wiIGFsdD1cInNvbWVcIiAvPiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/Dock.js */"));
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
//# sourceMappingURL=index.js.f1a3c7d9ad0b07b766e7.hot-update.js.map
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

var _jsxFileName = "/Users/websites/Documents/OEA/src/components/Dock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // So you now we make an onClick event with first goal registering a console.log() 

const BalloonWrenchPicFilled = "/balloon-wrench-filled.svg";
const BalloonWrenchPic = "/balloon-wrench.svg";
const TwirlPicFilled = "/twirl-filled.svg";
const TwirlPic = "/twirl.svg";
const SoundPicOn = "/sound-on.svg";
const SoundPic = "/sound.svg";
const MenuOverflowUp = "menu-overflow-up.png";
const MenuOverflowDown = "menu-overflow-down.png";

class Dock extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "DockClicked", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "soundContainerClicked", event => {
      event.stopPropagation();
      console.log("soundContainerClicked");
      console.log(this.state.soundBoolean);
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });

      if (this.state.soundBoolean) {
        let jam = document.querySelector(".sound-svg");
        jam.src = "/sound-filled.svg";
      } else {
        let jam = document.querySelector(".sound-svg");
        jam.src = "/sound.svg";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "balloonContainerClicked", event => {
      event.stopPropagation();
      console.log("balloonContainerClicked");
      console.log(this.state.soundBoolean);
      this.setState({
        balloonBoolean: !this.state.balloonBoolean
      });

      if (this.state.balloonBoolean) {
        let jam = document.querySelector(".balloon-wrench-svg");
        jam.src = "/balloon-wrench-filled.svg";
      } else {
        let jam = document.querySelector(".balloon-wrench-svg");
        jam.src = "/balloon-wrench.svg";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menuOverflowClicked", event => {
      event.stopPropagation();
      console.log("menuOverflowClicked");
      console.log(this.state.menuOverflowBoolean);
      this.setState({
        menuOverflowBoolean: !this.state.menuOverflowBoolean
      });

      if (this.state.menuOverflowBoolean) {
        let jam = document.querySelector(".menu-overflow-svg");
        jam.src = "/menu-overflow-down.png";
      } else {
        let jam = document.querySelector(".menu-overflow-svg");
        jam.src = "/menu-overflow-up.png";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navContainerClicked", event => {
      event.stopPropagation();
      let title = document.querySelector(".oea-title");
      title.style.display = "none";
      let content = document.querySelector(".oea-content");
      content.style.display = "flex";
      this.setState({
        navBoolean: !this.state.navBoolean
      });

      if (this.state.navBoolean) {
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

    this.state = {
      dockBoolean: true,
      balloonBoolean: false,
      soundBoolean: true,
      businessBoolean: true,
      menuOverflowBoolean: true,
      navBoolean: true
    };
  }

  buttonClicked() {}

  render() {
    return __jsx("div", {
      className: "jsx-1263750983" + " " + "dock-panel-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("div", {
      onClick: this.DockClicked,
      className: "jsx-1263750983" + " " + "dock-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1263750983" + " " + "search-bar-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("img", {
      src: "/Omnibar.png",
      alt: "-",
      className: "jsx-1263750983" + " " + "search-bar-png2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1263750983" + " " + "oea-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-1263750983" + " " + "oea-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Omnibox Extension App")), __jsx("div", {
      className: "jsx-1263750983" + " " + "oea-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("img", {
      src: "/back.svg",
      alt: "some",
      className: "jsx-1263750983" + " " + "back-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), __jsx("img", {
      src: "/forward.svg",
      alt: "some",
      className: "jsx-1263750983" + " " + "forward-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), __jsx("img", {
      onClick: this.props.iris,
      src: "/iris.svg",
      alt: "some",
      className: "jsx-1263750983" + " " + "iris-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), __jsx("div", {
      id: "twirl-container",
      onClick: this.twirlContainerClicked,
      className: "jsx-1263750983",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.twirl,
      src: this.props.business ? TwirlPicFilled : TwirlPic,
      alt: "some",
      className: "jsx-1263750983" + " " + "twirl-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    })), __jsx("div", {
      onClick: this.balloonContainerClicked,
      className: "jsx-1263750983" + " " + "balloon-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.balloon,
      src: this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
      alt: "some",
      className: "jsx-1263750983" + " " + "balloon-wrench-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    })), __jsx("img", {
      onClick: this.NextTemplateClicked,
      src: "/down-arrow-empty.png",
      alt: "some",
      className: "jsx-1263750983" + " " + "next-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }), __jsx("img", {
      src: "/up-arrow-empty.png",
      alt: "some",
      className: "jsx-1263750983" + " " + "previous-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }), __jsx("div", {
      onClick: this.menuOverflowClicked,
      className: "jsx-1263750983",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.menu,
      src: MenuOverflowUp,
      alt: "some",
      className: "jsx-1263750983" + " " + "menu-overflow-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    })), __jsx("div", {
      onClick: this.navContainerClicked,
      className: "jsx-1263750983" + " " + "nav-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.nav,
      src: "/earth2.png",
      alt: "some",
      className: "jsx-1263750983" + " " + "nav-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), __jsx("img", {
      src: "/history.svg",
      alt: "some",
      className: "jsx-1263750983" + " " + "history-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }), __jsx("img", {
      src: "/snake.svg",
      alt: "some",
      className: "jsx-1263750983" + " " + "snake-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }), __jsx("div", {
      onClick: this.soundContainerClicked,
      className: "jsx-1263750983" + " " + "sound-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("img", {
      src: "/sound.svg",
      alt: "some",
      className: "jsx-1263750983" + " " + "sound-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1263750983",
      __self: this
    }, ".dock-panel-parent.jsx-1263750983{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-1263750983{width:1536px;height:84px;font-family:Montserrat;font-size:23px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:1;background:linear-gradient(270deg,#000000,#2b2b2f);background-size:400% 400%;-webkit-animation:AnimationName-jsx-1263750983 3s ease-in-out infinite;animation:AnimationName-jsx-1263750983 3s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-1263750983{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-1263750983{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-1263750983{pointer-events:none;justifty-items:center;position:relat;}.search-bar-png2.jsx-1263750983{width:1536px;}.oea-title.jsx-1263750983{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-1263750983{font-family:Montserrat;font-size:38px;bottom:7px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-1263750983{display:none;font-family:Montserrat;font-size:38px;position:relative;width:1507px;height:76px;right:1513px;}.back-button-svg.jsx-1263750983{height:66px;width:66px;position:absolute;}.forward-button-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:76px;}.left-hexagons.jsx-1263750983{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:492px;}.nav-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:574px;}.menu-overflow-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:656px;}.twirl-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:738px;}.history-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:820px;}.iris-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:902px;}.sound-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:984px;}.next-template-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:1066px;}.right-hexagons.jsx-1263750983{height:66px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-1263750983{height:66px;width:66px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE1vQixBQUswQixBQU9JLEFBaUJFLEFBQ0csQUFDRCxBQUtHLEFBTVIsQUFLQyxBQUtVLEFBVVYsQUFXRCxBQUtBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLFlBMUZELEFBS0EsQUFPQyxBQU9ELEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9DLEFBT0QsQ0F4SkMsQUErQmhCLEFBbUIyQixPQTFCRCxHQWdCUCxBQXNCRyxBQUtBLEFBY0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBY0EsQ0EvRUEsQUF3RUEsQ0FqSkssRUFlUCxBQUVFLEVBREMsT0FrQ0osRUFWSixHQXNCZixBQUtjLEFBY0EsQUFPQSxBQVFDLEFBT0QsQUFPQyxBQU9ELEFBT0EsQUFRQyxBQU9BLEFBZUMsQ0FsSUcsQUFrREosQUF3RUMsTUFqSkcsQ0F3Q0csRUFVQSxBQWlCdEIsQ0FjQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLENBMURBLEFBaUVBLEFBZUEsQ0FSQSxHQTFIQSxNQXZCc0IsSUF3Q3lELEVBVTlELEtBNURFLEFBMENILE9BL0JDLENBa0RELElBbEJoQixRQW1CaUIsYUFDakIsK0JBWmlDLGlCQXZDVixZQVhBLEFBbURpQixvQ0FDeEMsNkNBeEMyQixrQkFWL0IsaUZBV2tCLFVBQ0ksY0FDRCxhQUNILFVBQ3VDLG1EQUMzQiwwQkFDc0Isc0lBT3BEIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG4vLyBTbyB5b3Ugbm93IHdlIG1ha2UgYW4gb25DbGljayBldmVudCB3aXRoIGZpcnN0IGdvYWwgcmVnaXN0ZXJpbmcgYSBjb25zb2xlLmxvZygpIFxuXG5jb25zdCBCYWxsb29uV3JlbmNoUGljRmlsbGVkID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiXG5jb25zdCBCYWxsb29uV3JlbmNoUGljID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbmNvbnN0IFR3aXJsUGljRmlsbGVkID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuY29uc3QgVHdpcmxQaWMgPSBcIi90d2lybC5zdmdcIlxuY29uc3QgU291bmRQaWNPbiA9IFwiL3NvdW5kLW9uLnN2Z1wiXG5jb25zdCBTb3VuZFBpYyA9IFwiL3NvdW5kLnN2Z1wiXG5jb25zdCBNZW51T3ZlcmZsb3dVcCA9IFwibWVudS1vdmVyZmxvdy11cC5wbmdcIlxuY29uc3QgTWVudU92ZXJmbG93RG93biA9IFwibWVudS1vdmVyZmxvdy1kb3duLnBuZ1wiXG5cblxuY2xhc3MgRG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkb2NrQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgICAgIHNvdW5kQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgICAgIGJ1c2luZXNzQm9vbGVhbjp0cnVlLFxuICAgICAgICAgICAgbWVudU92ZXJmbG93Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgICAgIG5hdkJvb2xlYW46IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgRG9ja0NsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2NrQm9vbGVhbjogIXRoaXMuc3RhdGUuZG9ja0Jvb2xlYW4gfSApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRvY2tCb29sZWFuKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU291bmRDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU291bmRDbGlja2VkIGNhbGxlZFwiKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICB0d2lybENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJ0d2lybENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0d2lybENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc291bmRDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwic291bmRDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc291bmRCb29sZWFuKVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmQtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvc291bmQtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3NvdW5kLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWxsb29uQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcImJhbGxvb25Db250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc291bmRCb29sZWFuKVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2JhbGxvb25Cb29sZWFuOiAhdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi13cmVuY2gtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24td3JlbmNoLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZW51T3ZlcmZsb3dDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVudU92ZXJmbG93Q2xpY2tlZFwiKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1lbnVPdmVyZmxvd0Jvb2xlYW4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7bWVudU92ZXJmbG93Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51T3ZlcmZsb3dCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW92ZXJmbG93LXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL21lbnUtb3ZlcmZsb3ctZG93bi5wbmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW92ZXJmbG93LXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL21lbnUtb3ZlcmZsb3ctdXAucG5nXCIgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtuYXZCb29sZWFuOiAhdGhpcy5zdGF0ZS5uYXZCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hdkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZmxleFwiXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jay1wYW5lbC1wYXJlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsXCIgb25DbGljaz17dGhpcy5Eb2NrQ2xpY2tlZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLXBuZzJcIiBzcmM9XCIvT21uaWJhci5wbmdcIiBhbHQ9XCItXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtdGl0bGVcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJvZWEtdGV4dFwiPk9tbmlib3ggRXh0ZW5zaW9uIEFwcDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmFjay1idXR0b24tc3ZnXCIgc3JjPVwiL2JhY2suc3ZnXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb3J3YXJkLWJ1dHRvbi1zdmdcIiBzcmM9XCIvZm9yd2FyZC5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5wcm9wcy5pcmlzfSBjbGFzc05hbWU9XCJpcmlzLXN2Z1wiIHNyYz1cIi9pcmlzLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBpZD1cInR3aXJsLWNvbnRhaW5lclwiIG9uQ2xpY2s9e3RoaXMudHdpcmxDb250YWluZXJDbGlja2VkfT5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5wcm9wcy50d2lybH0gY2xhc3NOYW1lPVwidHdpcmwtc3ZnXCIgc3JjPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IFR3aXJsUGljRmlsbGVkIDogVHdpcmxQaWN9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyB0aGlzLmJhbGxvb25Db250YWluZXJDbGlja2VkIH0gY2xhc3NOYW1lPVwiYmFsbG9vbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5wcm9wcy5iYWxsb29ufSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLk5leHRUZW1wbGF0ZUNsaWNrZWR9IGNsYXNzTmFtZT1cIm5leHQtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiL2Rvd24tYXJyb3ctZW1wdHkucG5nXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvdXAtYXJyb3ctZW1wdHkucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudU92ZXJmbG93Q2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMucHJvcHMubWVudX0gY2xhc3NOYW1lPVwibWVudS1vdmVyZmxvdy1zdmdcIiBzcmM9e01lbnVPdmVyZmxvd1VwfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLm5hdkNvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLm5hdn0gY2xhc3NOYW1lPVwibmF2LXN2Z1wiIHNyYz1cIi9lYXJ0aDIucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlzdG9yeS1zdmdcIiBzcmM9XCIvaGlzdG9yeS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic25ha2Utc3ZnXCIgc3JjPVwiL3NuYWtlLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsgdGhpcy5zb3VuZENvbnRhaW5lckNsaWNrZWQgfSBjbGFzc05hbWU9XCJzb3VuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic291bmQtc3ZnXCIgc3JjPVwiL3NvdW5kLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG5cbiAgICAgICAgLmRvY2stcGFuZWwtcGFyZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRvY2stcGFuZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRvcDogMTYxcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyRkE0RTc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzJiMmIyZik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuQGtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcbiAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxufVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnNlYXJjaC1iYXItcGFyZW50IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ0eS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wbmcyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxNTM2cHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm9lYS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2VhLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTUxM3B4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5iYWNrLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yd2FyZC1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDc2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sZWZ0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzLXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjQxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYmFsbG9vbi13cmVuY2gtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDkycHg7XG4gICAgICAgICAgICB9ICAgICAgICBcblxuICAgICAgICAgICAgLm5hdi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDU3NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVudS1vdmVyZmxvdy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo2NTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnR3aXJsLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3MzhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpc3Rvcnktc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6ODIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmlyaXMtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6OTAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb3VuZC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDk4NHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dC10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDY2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yaWdodC1oZXhhZ29ucyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTE0OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc25ha2Utc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDE0MjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuXG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiAgZXhwb3J0IGRlZmF1bHQgRG9jaztcblxuXG5cbi8vICAgPGltZyBjbGFzc05hbWU9XCJpcmlzLXN2Z1wiIHNyYz1cIi9JcmlzUGljXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgIDxMaW5rIHRvPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IHRoaXMuQnVzaW5lc3MgOiB0aGlzLkNvbnN1bWVyfT48aW1nIGNsYXNzTmFtZT1cImxlZnQtYmxhbmtcIiBzcmM9XCIuL0JhbGxvb25XcmVuY2hQaWNcIiB9IGFsdD1cInNvbWVcIiAvPjwvTGluaz5cbi8vICAgICAgIDxpbWcgb25DbGljaz17IHRoaXMuQmFsbG9vbk9uIH0gY2xhc3NOYW1lPVwiYmFsbG9vbi13cmVuY2gtc3ZnXCIgc3JjPXsgdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbiA/IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgOiBCYWxsb29uV3JlbmNoUGljIH0gYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpb3VzLXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi4vUHJldmlvdXNUZW1wbGF0ZVBpYy5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxMaW5rIHRvPVwiL1wiPjxpbWcgY2xhc3NOYW1lPVwidHdpcmwtc3ZnXCIgc3JjPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IFR3aXJsUGljRmlsbGVkIDogVHdpcmxQaWN9IGFsdD1cInNvbWVcIiAvPjwvTGluaz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmV4dC10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiICBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2LXN2Z1wiIHNyYz1cIi4vbmF2LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJoaXN0b3J5LXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8TGluayB0bz1cIi9NZW51T3ZlcmZsb3dPcGVuXCI+PGltZyBjbGFzc05hbWU9XCJtZW51LW92ZXJmbG93LXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJzbmFrZS1zdmdcIiBzcmM9XCIuL05leHRUZW1wbGF0ZVBpY1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5Tb3VuZE9uIH0gY2xhc3NOYW1lPVwic291bmQtc3ZnXCIgc3JjPXsgdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW4gPyBTb3VuZFBpY09uIDogU291bmRQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxTb3VuZCBwbGF5U3RhdHVzPXt0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbiA/IHRoaXMuUGxheWluZyA6IHRoaXMuUGF1c2VkfSBjbGFzc05hbWU9XCJzb3VuZC1zdmcyXCIgaWQ9XCJzXCIgdXJsPXtCYWNrZ3JvdW5kTXVzaWN9PjwvU291bmQ+XG4vLyAgICAgICA8TGluayB0bz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyB0aGlzLkJ1c2luZXNzIDogdGhpcy5Db25zdW1lcn0+PGltZyBjbGFzc05hbWU9XCJyaWdodC1ibGFua1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuXG4vLyAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfSBjbGFzc05hbWU9XCJyaWdodC1oZXhhZ29uc1wiIHNyYz1cIi9oZXhhZ29ucy5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbi8vIDxpbWcgb25DbGljaz17dGhpcy5Eb2NrQ2xpY2tlZH0gY2xhc3NOYW1lPVwibGVmdC1oZXhhZ29uc1wiIHNyYz1cIi9oZXhhZ29ucy5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cblxuXG4vLyBtYXJnaW4tbGVmdDogMjlweDsiXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Dock.js */"));
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
// margin-left: 29px;

/***/ })

})
//# sourceMappingURL=index.js.7833507280eadece35f5.hot-update.js.map
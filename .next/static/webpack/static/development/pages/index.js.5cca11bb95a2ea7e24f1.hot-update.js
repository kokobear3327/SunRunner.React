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
      className: "jsx-2678159414" + " " + "dock-panel-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("div", {
      onClick: this.DockClicked,
      className: "jsx-2678159414" + " " + "dock-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2678159414" + " " + "search-bar-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("img", {
      src: "/Omnibar.png",
      alt: "-",
      className: "jsx-2678159414" + " " + "search-bar-png2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2678159414" + " " + "oea-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-2678159414" + " " + "oea-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Omnibox Extension App")), __jsx("div", {
      className: "jsx-2678159414" + " " + "oea-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("img", {
      src: "/back.svg",
      alt: "some",
      className: "jsx-2678159414" + " " + "back-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), __jsx("img", {
      src: "/forward.svg",
      alt: "some",
      className: "jsx-2678159414" + " " + "forward-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), __jsx("img", {
      onClick: this.props.iris,
      src: "/iris.svg",
      alt: "some",
      className: "jsx-2678159414" + " " + "iris-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), __jsx("div", {
      id: "twirl-container",
      onClick: this.twirlContainerClicked,
      className: "jsx-2678159414",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.twirl,
      src: this.props.business ? TwirlPicFilled : TwirlPic,
      alt: "some",
      className: "jsx-2678159414" + " " + "twirl-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    })), __jsx("div", {
      onClick: this.balloonContainerClicked,
      className: "jsx-2678159414" + " " + "balloon-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.balloon,
      src: this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
      alt: "some",
      className: "jsx-2678159414" + " " + "balloon-wrench-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    })), __jsx("img", {
      onClick: this.NextTemplateClicked,
      src: "/down-arrow-empty.png",
      alt: "some",
      className: "jsx-2678159414" + " " + "next-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }), __jsx("img", {
      src: "/up-arrow-empty.png",
      alt: "some",
      className: "jsx-2678159414" + " " + "previous-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }), __jsx("div", {
      onClick: this.menuOverflowClicked,
      className: "jsx-2678159414",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.menu,
      src: MenuOverflowUp,
      alt: "some",
      className: "jsx-2678159414" + " " + "menu-overflow-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    })), __jsx("div", {
      onClick: this.navContainerClicked,
      className: "jsx-2678159414" + " " + "nav-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.nav,
      src: "/earth2.png",
      alt: "some",
      className: "jsx-2678159414" + " " + "nav-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), __jsx("img", {
      src: "/history.svg",
      alt: "some",
      className: "jsx-2678159414" + " " + "history-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }), __jsx("img", {
      src: "/snake.svg",
      alt: "some",
      className: "jsx-2678159414" + " " + "snake-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }), __jsx("div", {
      onClick: this.soundContainerClicked,
      className: "jsx-2678159414" + " " + "sound-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("img", {
      src: "/sound.svg",
      alt: "some",
      className: "jsx-2678159414" + " " + "sound-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2678159414",
      __self: this
    }, ".dock-panel-parent.jsx-2678159414{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-2678159414{width:1536px;height:76px;font-family:Montserrat;font-size:23px;background-color:#000000;background-image:linear-gradient(0deg,#000000 0%,#414141 74%);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:1;background:linear-gradient(270deg,#000000,#29294d);background-size:400% 400%;-webkit-animation:AnimationName-jsx-2678159414 3s ease infinite;animation:AnimationName-jsx-2678159414 3s ease infinite;}@-webkit-keyframes AnimationName-jsx-2678159414{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-2678159414{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-2678159414{pointer-events:none;justifty-items:center;position:relat;}.search-bar-png2.jsx-2678159414{width:1536px;}.oea-title.jsx-2678159414{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-2678159414{font-family:Montserrat;font-size:38px;bottom:7px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-2678159414{display:none;font-family:Montserrat;font-size:38px;position:relative;width:1507px;height:76px;top:13px;right:1513px;}.back-button-svg.jsx-2678159414{height:66px;width:66px;position:absolute;}.forward-button-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:76px;}.left-hexagons.jsx-2678159414{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:492px;}.nav-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:574px;}.menu-overflow-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:656px;}.twirl-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:738px;}.history-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:820px;}.iris-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:902px;}.sound-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:984px;}.next-template-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:1066px;}.right-hexagons.jsx-2678159414{height:66px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-2678159414{height:66px;width:66px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE1vQixBQUswQixBQU9JLEFBdUJFLEFBQ0csQUFDRCxBQUtHLEFBTVIsQUFLQyxBQUtVLEFBVVYsQUFZRCxBQUtBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLFlBMUZELEFBS0EsQUFPQyxBQU9ELEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9DLEFBT0QsQ0EvSkMsQUFxQ2hCLEFBbUIyQixPQTFCRCxHQWdCUCxBQXVCRyxBQUtBLEFBY0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBY0EsQ0EvRUEsQUF3RUEsQ0F4SkssRUFxQlAsQUFFRSxFQURDLE9Ba0NKLEVBVkosR0F1QmYsQUFLYyxBQWNBLEFBT0EsQUFRQyxBQU9ELEFBT0MsQUFPRCxBQU9BLEFBUUMsQUFPQSxBQWVDLENBbklHLEFBbURKLEFBd0VDLE1BeEpHLENBOENHLEVBVUEsQUFrQnRCLENBY0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxDQTFEQSxBQWlFQSxBQWVBLENBUkEsR0EzSEEsTUE3QjZCLElBOENrRCxFQVU5RCxLQWxFRSxBQWdESCxRQW1CQSxJQWxCaEIsRUF0Q29FLE1BeUR4RCxTQUNLLGFBQ2pCLHNCQWJpQyxZQTdDWCxpQkFYQyxBQXlEaUIsQ0E3Q3ZCLG1DQThDakIsdUNBN0N1Qix3QkFYM0IscUVBWStCLG1HQUNiLFVBQ0ksY0FDRCxhQUNILFVBSXVDLG1EQUMzQiwwQkFFZSx3SEFPN0MiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL2NvbXBvbmVudHMvRG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LXNvdW5kJztcbi8vIFNvIHlvdSBub3cgd2UgbWFrZSBhbiBvbkNsaWNrIGV2ZW50IHdpdGggZmlyc3QgZ29hbCByZWdpc3RlcmluZyBhIGNvbnNvbGUubG9nKCkgXG5cbmNvbnN0IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCJcbmNvbnN0IEJhbGxvb25XcmVuY2hQaWMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuY29uc3QgVHdpcmxQaWNGaWxsZWQgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG5jb25zdCBUd2lybFBpYyA9IFwiL3R3aXJsLnN2Z1wiXG5jb25zdCBTb3VuZFBpY09uID0gXCIvc291bmQtb24uc3ZnXCJcbmNvbnN0IFNvdW5kUGljID0gXCIvc291bmQuc3ZnXCJcbmNvbnN0IE1lbnVPdmVyZmxvd1VwID0gXCJtZW51LW92ZXJmbG93LXVwLnBuZ1wiXG5jb25zdCBNZW51T3ZlcmZsb3dEb3duID0gXCJtZW51LW92ZXJmbG93LWRvd24ucG5nXCJcblxuXG5jbGFzcyBEb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRvY2tCb29sZWFuOiB0cnVlLFxuICAgICAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICAgICAgc291bmRCb29sZWFuOiB0cnVlLFxuICAgICAgICAgICAgYnVzaW5lc3NCb29sZWFuOnRydWUsXG4gICAgICAgICAgICBtZW51T3ZlcmZsb3dCb29sZWFuOiB0cnVlLFxuICAgICAgICAgICAgbmF2Qm9vbGVhbjogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBidXR0b25DbGlja2VkKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBEb2NrQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvY2tCb29sZWFuOiAhdGhpcy5zdGF0ZS5kb2NrQm9vbGVhbiB9IClcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZG9ja0Jvb2xlYW4pIHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTb3VuZENsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3VuZENsaWNrZWQgY2FsbGVkXCIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcInR3aXJsQ29udGFpbmVyQ2xpY2tlZFwiKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvdHdpcmwuc3ZnXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VuZENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7c291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc291bmRCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3VuZC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9zb3VuZC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmQtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvc291bmQuc3ZnXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhbGxvb25Db250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFsbG9vbkNvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7YmFsbG9vbkJvb2xlYW46ICF0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLXdyZW5jaC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi13cmVuY2gtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lbnVPdmVyZmxvd0NsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51T3ZlcmZsb3dDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHttZW51T3ZlcmZsb3dCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51T3ZlcmZsb3dCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVPdmVyZmxvd0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtb3ZlcmZsb3ctc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvbWVudS1vdmVyZmxvdy1kb3duLnBuZ1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtb3ZlcmZsb3ctc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvbWVudS1vdmVyZmxvdy11cC5wbmdcIiBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdkNvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge25hdkJvb2xlYW46ICF0aGlzLnN0YXRlLm5hdkJvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmF2Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgICAgIHRpdGxlLnN0eWxlID0gXCJmbGV4XCJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlID0gXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsLXBhcmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWxcIiBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcG5nMlwiIHNyYz1cIi9PbW5pYmFyLnBuZ1wiIGFsdD1cIi1cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS10aXRsZVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm9lYS10ZXh0XCI+T21uaWJveCBFeHRlbnNpb24gQXBwPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtY29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvbi1zdmdcIiBzcmM9XCIvYmFjay5zdmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvcndhcmQtYnV0dG9uLXN2Z1wiIHNyYz1cIi9mb3J3YXJkLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLmlyaXN9IGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL2lyaXMuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidHdpcmwtY29udGFpbmVyXCIgb25DbGljaz17dGhpcy50d2lybENvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLnR3aXJsfSBjbGFzc05hbWU9XCJ0d2lybC1zdmdcIiBzcmM9eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gVHdpcmxQaWNGaWxsZWQgOiBUd2lybFBpY30gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17IHRoaXMuYmFsbG9vbkNvbnRhaW5lckNsaWNrZWQgfSBjbGFzc05hbWU9XCJiYWxsb29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLmJhbGxvb259IGNsYXNzTmFtZT1cImJhbGxvb24td3JlbmNoLXN2Z1wiIHNyYz17IHRoaXMuc3RhdGUuYmFsbG9vbkJvb2xlYW4gPyBCYWxsb29uV3JlbmNoUGljRmlsbGVkIDogQmFsbG9vbldyZW5jaFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuTmV4dFRlbXBsYXRlQ2xpY2tlZH0gY2xhc3NOYW1lPVwibmV4dC10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvZG93bi1hcnJvdy1lbXB0eS5wbmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpb3VzLXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi91cC1hcnJvdy1lbXB0eS5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5tZW51T3ZlcmZsb3dDbGlja2VkfT5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5wcm9wcy5tZW51fSBjbGFzc05hbWU9XCJtZW51LW92ZXJmbG93LXN2Z1wiIHNyYz17TWVudU92ZXJmbG93VXB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiIG9uQ2xpY2s9e3RoaXMubmF2Q29udGFpbmVyQ2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMucHJvcHMubmF2fSBjbGFzc05hbWU9XCJuYXYtc3ZnXCIgc3JjPVwiL2VhcnRoMi5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoaXN0b3J5LXN2Z1wiIHNyYz1cIi9oaXN0b3J5LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbmFrZS1zdmdcIiBzcmM9XCIvc25ha2Uuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyB0aGlzLnNvdW5kQ29udGFpbmVyQ2xpY2tlZCB9IGNsYXNzTmFtZT1cInNvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9XCIvc291bmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcblxuICAgICAgICAuZG9jay1wYW5lbC1wYXJlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZG9jay1wYW5lbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwMDAgMCUsICM0MTQxNDEgNzQlKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRvcDogMTYxcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyRkE0RTc7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgIFxuXG5cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMDAwMDAsICMyOTI5NGQpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG5cbiAgICAgICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAzcyBlYXNlIGluZmluaXRlO1xuXG5Aa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG59XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wYXJlbnQge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIGp1c3RpZnR5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBuZzIge1xuICAgICAgICAgICAgICAgIHdpZHRoOjE1MzZweDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2VhLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAub2VhLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDdweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZWEtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgICAgICAgIHRvcDoxM3B4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNTEzcHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLmJhY2stYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3J3YXJkLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxlZnQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1MnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldmlvdXMtdGVtcGxhdGUtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5iYWxsb29uLXdyZW5jaC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo0OTJweDtcbiAgICAgICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgICAgICAubmF2LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogNTc0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tZW51LW92ZXJmbG93LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjY1NnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHdpcmwtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDczOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlzdG9yeS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo4MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuaXJpcy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo5MDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvdW5kLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogOTg0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0LXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjEwNjZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJpZ2h0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMTQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbmFrZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogMTQyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuICBleHBvcnQgZGVmYXVsdCBEb2NrO1xuXG5cblxuLy8gICA8aW1nIGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL0lyaXNQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgPExpbmsgdG89eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gdGhpcy5CdXNpbmVzcyA6IHRoaXMuQ29uc3VtZXJ9PjxpbWcgY2xhc3NOYW1lPVwibGVmdC1ibGFua1wiIHNyYz1cIi4vQmFsbG9vbldyZW5jaFBpY1wiIH0gYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5CYWxsb29uT24gfSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJldmlvdXMtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiLi9QcmV2aW91c1RlbXBsYXRlUGljLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPExpbmsgdG89XCIvXCI+PGltZyBjbGFzc05hbWU9XCJ0d2lybC1zdmdcIiBzcmM9eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gVHdpcmxQaWNGaWxsZWQgOiBUd2lybFBpY30gYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJuZXh0LXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXYtc3ZnXCIgc3JjPVwiLi9uYXYuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpc3Rvcnktc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxMaW5rIHRvPVwiL01lbnVPdmVyZmxvd09wZW5cIj48aW1nIGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNuYWtlLXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIG9uQ2xpY2s9eyB0aGlzLlNvdW5kT24gfSBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbiA/IFNvdW5kUGljT24gOiBTb3VuZFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPFNvdW5kIHBsYXlTdGF0dXM9e3RoaXMuc3RhdGUuc291bmRCb29sZWFuID8gdGhpcy5QbGF5aW5nIDogdGhpcy5QYXVzZWR9IGNsYXNzTmFtZT1cInNvdW5kLXN2ZzJcIiBpZD1cInNcIiB1cmw9e0JhY2tncm91bmRNdXNpY30+PC9Tb3VuZD5cbi8vICAgICAgIDxMaW5rIHRvPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IHRoaXMuQnVzaW5lc3MgOiB0aGlzLkNvbnN1bWVyfT48aW1nIGNsYXNzTmFtZT1cInJpZ2h0LWJsYW5rXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG5cbi8vICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuRG9ja0NsaWNrZWR9IGNsYXNzTmFtZT1cInJpZ2h0LWhleGFnb25zXCIgc3JjPVwiL2hleGFnb25zLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gPGltZyBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfSBjbGFzc05hbWU9XCJsZWZ0LWhleGFnb25zXCIgc3JjPVwiL2hleGFnb25zLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuXG5cbi8vIG1hcmdpbi1sZWZ0OiAyOXB4OyJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Dock.js */"));
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
//# sourceMappingURL=index.js.5cca11bb95a2ea7e24f1.hot-update.js.map
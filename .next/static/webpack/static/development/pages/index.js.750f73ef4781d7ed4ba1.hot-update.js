webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Dock.js":
/*!********************************!*\
  !*** ./src/components/Dock.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dock; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sound */ "./node_modules/react-sound/lib/index.js");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA/src/components/Dock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // So you now we make an onClick event with first goal registering a console.log() 

const BalloonWrenchPicFilled = "/balloon-wrench-filled.svg";
const BalloonWrenchPic = "/balloon-wrench.svg";
const TwirlPicFilled = "/twirl-filled.svg";
const TwirlPic = "/twirl.svg";
const SoundPicOn = "/sound-on.svg";
const SoundPic = "/sound.svg";
const MenuOverflowUp = "menu-overflow-up.png";
const MenuOverflowDown = "menu-overflow-down.png";
const SoundClick = "/sound-click.mp3";
const SoundOpening = "/sound-opening.mp3";
const SoundFailure = "/sound-failure2.mp3";
function Dock(props) {
  let dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  let theState = {
    dockBoolean: true,
    balloonBoolean: false,
    soundBoolean: true,
    businessBoolean: true,
    menuOverflowBoolean: true,
    navBoolean: true
  };
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(theState);
  let previousBoolean = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isPreviousTemplate);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(";");
    let inptSearch = document.querySelector("#inpt_search");
    inptSearch.addEventListener('focus', event => {
      console.log("inputSearch called");
      let active = document.querySelector(".search");
      active.classList.add('active');
    }); // document.querySelector.on('blur', function () {
    //     if(this.val().length == 0)
    //         this.parent('label').removeClass('active');
    // });
  });

  const DockClicked = () => {
    setState({
      dockBoolean: !state.dockBoolean
    });
    let audioOpening = new Audio(SoundClick);
    let audioClosing = new Audio(SoundClick);

    if (state.dockBoolean) {
      let title = document.querySelector(".oea-title");
      title.style.display = "none";
      let content = document.querySelector(".oea-content");
      content.style.display = "flex";
      audioOpening.play();
    } else {
      let title = document.querySelector(".oea-title");
      title.style = "flex";
      let content = document.querySelector(".oea-content");
      content.style = "none";
      audioClosing.play();
    }
  };

  const SoundClicked = event => {
    let audio = new Audio(SoundClick);
    audio.play();
    event.stopPropagation();
    console.log("SoundClicked called");
    setState({
      soundBoolean: !state.soundBoolean
    });
  };

  const twirlContainerClicked = event => {
    event.stopPropagation();
    console.log("twirlContainerClicked");
    console.log(state.businessBoolean);
    setState({
      businessBoolean: !state.businessBoolean
    });
    console.log(state.businessBoolean);

    if (state.businessBoolean) {
      let audioOpening = new Audio(SoundOpening);
      audioOpening.play();
      let jam = document.querySelector(".twirl-svg");
      jam.src = "/twirl-filled.svg";
    } else {
      let audioOpening = new Audio(SoundOpening);
      audioOpening.play();
      let jam = document.querySelector(".twirl-svg");
      jam.src = "/twirl.svg";
    }
  };

  const soundContainerClicked = event => {
    event.stopPropagation();
    console.log("soundContainerClicked");
    console.log(state.soundBoolean);
    setState({
      soundBoolean: !state.soundBoolean
    });

    if (state.soundBoolean) {
      let jam = document.querySelector(".sound-svg");
      jam.src = "/sound-filled.svg";
    } else {
      let jam = document.querySelector(".sound-svg");
      jam.src = "/sound.svg";
    }
  };

  const balloonContainerClicked = event => {
    event.stopPropagation();
    console.log("balloonContainerClicked");
    console.log(state.soundBoolean);
    setState({
      balloonBoolean: !state.balloonBoolean
    });

    if (state.balloonBoolean) {
      let jam = document.querySelector(".balloon-wrench-svg");
      jam.src = "/balloon-wrench-filled.svg";
    } else {
      let jam = document.querySelector(".balloon-wrench-svg");
      jam.src = "/balloon-wrench.svg";
    }
  };

  const menuOverflowClicked = event => {
    event.stopPropagation();
    console.log("menuOverflowClicked");
    console.log(state.menuOverflowBoolean);
    setState({
      menuOverflowBoolean: !state.menuOverflowBoolean
    });

    if (state.menuOverflowBoolean) {
      let jam = document.querySelector(".menu-overflow-svg");
      jam.src = "/menu-overflow-down.png";
    } else {
      let jam = document.querySelector(".menu-overflow-svg");
      jam.src = "/menu-overflow-up.png";
    }
  };

  const navContainerClicked = event => {
    event.stopPropagation();
    let title = document.querySelector(".oea-title");
    title.style.display = "none";
    let content = document.querySelector(".oea-content");
    content.style.display = "flex";
    setState({
      navBoolean: !state.navBoolean
    });

    if (state.navBoolean) {
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
  };

  const NextTemplateClicked = event => {
    event.stopPropagation();
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["nextTemplateClicked"])());
    let audioOpening = new Audio(SoundOpening);
    audioOpening.play();
  };

  const PreviousTemplateClicked = event => {
    event.stopPropagation();
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["previousTemplateClicked"])());
    let audioOpening = new Audio(SoundOpening);
    audioOpening.play();
  };

  return __jsx("div", {
    className: "jsx-1499010082" + " " + "dock-panel-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("div", {
    onClick: DockClicked,
    className: "jsx-1499010082" + " " + "dock-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1499010082" + " " + "search-bar-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1499010082" + " " + "cntr-innr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("label", {
    for: "inpt_search",
    className: "jsx-1499010082" + " " + "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("input", {
    id: "inpt_search",
    type: "text",
    className: "jsx-1499010082",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }))), __jsx("img", {
    src: "/Omnibar.png",
    alt: "-",
    className: "jsx-1499010082" + " " + "search-bar-png2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1499010082" + " " + "oea-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-1499010082" + " " + "oea-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Omnibox Extension App")), __jsx("div", {
    className: "jsx-1499010082" + " " + "oea-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("img", {
    src: "/back.svg",
    alt: "some",
    className: "jsx-1499010082" + " " + "back-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), __jsx("img", {
    src: "/forward.svg",
    alt: "some",
    className: "jsx-1499010082" + " " + "forward-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), __jsx("img", {
    onClick: props.iris,
    src: "/iris.svg",
    alt: "some",
    className: "jsx-1499010082" + " " + "iris-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), __jsx("div", {
    id: "twirl-container",
    onClick: twirlContainerClicked,
    className: "jsx-1499010082",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("img", {
    onClick: props.twirl,
    src: props.business ? TwirlPicFilled : TwirlPic,
    alt: "some",
    className: "jsx-1499010082" + " " + "twirl-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), __jsx("div", {
    onClick: balloonContainerClicked,
    className: "jsx-1499010082" + " " + "balloon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx("img", {
    onClick: props.balloon,
    src: state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
    alt: "some",
    className: "jsx-1499010082" + " " + "balloon-wrench-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  })), __jsx("img", {
    onClick: NextTemplateClicked,
    src: "/down-arrow-empty.png",
    alt: "some",
    className: "jsx-1499010082" + " " + "next-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), __jsx("img", {
    onClick: PreviousTemplateClicked,
    src: "/up-arrow-empty.png",
    alt: "some",
    className: "jsx-1499010082" + " " + "previous-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), __jsx("div", {
    onClick: menuOverflowClicked,
    className: "jsx-1499010082",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("img", {
    onClick: props.menu,
    src: MenuOverflowUp,
    alt: "some",
    className: "jsx-1499010082" + " " + "menu-overflow-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })), __jsx("div", {
    onClick: navContainerClicked,
    className: "jsx-1499010082" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("img", {
    onClick: props.nav,
    src: "/earth2.png",
    alt: "some",
    className: "jsx-1499010082" + " " + "nav-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), __jsx("img", {
    src: "/history.svg",
    alt: "some",
    className: "jsx-1499010082" + " " + "history-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), __jsx("img", {
    src: "/snake.svg",
    alt: "some",
    className: "jsx-1499010082" + " " + "snake-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), __jsx("div", {
    onClick: soundContainerClicked,
    className: "jsx-1499010082" + " " + "sound-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("img", {
    src: "/sound.svg",
    alt: "some",
    className: "jsx-1499010082" + " " + "sound-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1499010082",
    __self: this
  }, "p.jsx-1499010082{margin-top:30px;}.cntr-innr.jsx-1499010082{display:table-cell;text-align:center;vertical-align:middle;position:relative;top:80px;left:25px;}.cntr.jsx-1499010082{display:table;z-index:10;}.search.jsx-1499010082{display:absolute;position:relative;height:66px;width:66px;box-sizing:border-box;margin:0px 8px 7px 0px;padding:7px 9px 0px 9px;border:3px solid #fff;border-radius:25px;-webkit-transition:all 200ms ease;transition:all 200ms ease;cursor:text;z-index:10;}.search.jsx-1499010082:after{content:\"\";position:absolute;width:3px;height:20px;right:-5px;top:21px;background:#fff;border-radius:3px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:all 200ms ease;transition:all 200ms ease;}.search.active.jsx-1499010082,.search.jsx-1499010082:hover{width:1300px;margin-right:0px;}.search.active.jsx-1499010082:after,.search.jsx-1499010082:hover.jsx-1499010082:after{height:0px;}.search.jsx-1499010082 input.jsx-1499010082{width:100%;border:none;box-sizing:border-box;font-family:Helvetica;font-size:15px;color:inherit;background:transparent;outline-width:0px;}.dock-panel-parent.jsx-1499010082{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-1499010082{pointer-events:all;width:1536px;height:84px;font-family:Montserrat;font-size:23px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:100;background:linear-gradient(270deg,#000000,#29292c);background-size:400% 400%;-webkit-animation:AnimationName-jsx-1499010082 23s ease-in-out infinite;animation:AnimationName-jsx-1499010082 23s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-1499010082{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-1499010082{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-1499010082{pointer-events:all;justifty-items:center;}.search-bar-png2.jsx-1499010082{width:1536px;}.oea-title.jsx-1499010082{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-1499010082{font-family:Montserrat;font-size:38px;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);bottom:7px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-1499010082{display:none;font-family:Montserrat;font-size:38px;position:relative;width:1507px;height:76px;top:100px;right:1513px;}.back-button-svg.jsx-1499010082{height:62px;width:62px;position:absolute;}.forward-button-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:76px;}.left-hexagons.jsx-1499010082{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:492px;}.nav-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:574px;}.menu-overflow-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:656px;}.twirl-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:738px;}.history-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:820px;}.iris-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:902px;}.sound-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:984px;}.next-template-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:1062px;}.right-hexagons.jsx-1499010082{height:62px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-1499010082{height:62px;width:62px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE9vQixBQUk2QixBQUdELEFBUUQsQUFNRyxBQWNOLEFBWUUsQUFJRixBQUdBLEFBWUUsQUFPTSxBQWtCUSxBQUNHLEFBQ0QsQUFLTixBQUtQLEFBS0MsQUFLVSxBQVdWLEFBWUQsQUFLQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxXQS9MRSxBQWdCdkIsQUFHaUIsQ0FrRkcsQUFLQSxBQU9DLEFBT0QsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBT0MsQUFPRCxDQXBMRSxBQXlEakIsQUFvQjJCLENBN0dqQixFQVhmLENBaUJ1QixFQWRKLEFBa0VELEFBeUJhLElBM0NKLEFBMERILEFBd0JHLEFBS0EsQUFjQSxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFjQSxDQS9FQSxBQXdFQSxDQTdNM0IsRUEwRWlDLEFBRUUsRUF4RHBCLEFBdURxQixDQTNDcEMsRUEwQmlCLEdBcERBLENBdUdPLENBckhELENBMEdPLENBN0ViLEVBOERaLEFBdUNBLEFBS2MsQUFjQSxBQU9BLEFBUUMsQUFPRCxBQU9DLEFBT0QsQUFPQSxBQVFDLEFBT0EsQUFlQyxDQWhGRCxBQXdFQyxFQW5KTyxDQW5CRCxFQWpDWCxJQWVBLEFBd0ZXLEFBa0J0QixDQWNBLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQ0ExREEsQUFpRUEsQUFlQSxDQVJBLElBdk1zQixDQWZSLEdBOEJMLEtBa0JNLEFBbUJBLEVBbURFLEVBdkZELEdBMEJHLEFBMENILEdBbEdaLEdBZW1CLEVBaUNULEFBbUJJLEFBbURGLElBckhWLEFBa0dOLENBcEVrQixPQXdGSixFQXJIdkIsQUErQ2dDLElBbUJWLEdBcERXLENBd0dQLENBeEZRLFFBeUVWLElBZ0JmLEVBdkVrQixLQXdESSxHQXpGQSxVQWtDM0IsS0F3RG9GLE9BekY1RCxrQkF1Q0ksQ0F0Q0csTUFrRFAsa0JBcENPLHFCQTJFTyxlQXhGckIsWUFDRixFQXdGOEIsU0F2RjdDLENBWUEsY0F5QkMsQ0FXMkIsV0F3Q3ZCLHdGQXZDVSxVQUNJLGNBQ0QsYUFDRCxZQUN5QyxtREFDM0IsMEJBQ3VCLHdJQU9yRCIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS9zcmMvY29tcG9uZW50cy9Eb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU291bmQgZnJvbSAncmVhY3Qtc291bmQnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG5leHRUZW1wbGF0ZUNsaWNrZWQgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHByZXZpb3VzVGVtcGxhdGVDbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8vIFNvIHlvdSBub3cgd2UgbWFrZSBhbiBvbkNsaWNrIGV2ZW50IHdpdGggZmlyc3QgZ29hbCByZWdpc3RlcmluZyBhIGNvbnNvbGUubG9nKCkgXG5cbmNvbnN0IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCJcbmNvbnN0IEJhbGxvb25XcmVuY2hQaWMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuY29uc3QgVHdpcmxQaWNGaWxsZWQgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG5jb25zdCBUd2lybFBpYyA9IFwiL3R3aXJsLnN2Z1wiXG5jb25zdCBTb3VuZFBpY09uID0gXCIvc291bmQtb24uc3ZnXCJcbmNvbnN0IFNvdW5kUGljID0gXCIvc291bmQuc3ZnXCJcbmNvbnN0IE1lbnVPdmVyZmxvd1VwID0gXCJtZW51LW92ZXJmbG93LXVwLnBuZ1wiXG5jb25zdCBNZW51T3ZlcmZsb3dEb3duID0gXCJtZW51LW92ZXJmbG93LWRvd24ucG5nXCJcbmNvbnN0IFNvdW5kQ2xpY2sgPSBcIi9zb3VuZC1jbGljay5tcDNcIlxuY29uc3QgU291bmRPcGVuaW5nID0gXCIvc291bmQtb3BlbmluZy5tcDNcIlxuY29uc3QgU291bmRGYWlsdXJlID0gXCIvc291bmQtZmFpbHVyZTIubXAzXCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY2socHJvcHMpIHtcbiAgICBcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGxldCB0aGVTdGF0ZSA9IHtcbiAgICAgICAgZG9ja0Jvb2xlYW46IHRydWUsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgc291bmRCb29sZWFuOiB0cnVlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46dHJ1ZSxcbiAgICAgICAgbWVudU92ZXJmbG93Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbmF2Qm9vbGVhbjogdHJ1ZVxuICAgIH1cbiBcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHRoZVN0YXRlKTtcbiAgICBsZXQgcHJldmlvdXNCb29sZWFuID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNQcmV2aW91c1RlbXBsYXRlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCI7XCIpXG4gICAgICAgIGxldCBpbnB0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB0X3NlYXJjaFwiKTtcbiAgICAgICAgaW5wdFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnB1dFNlYXJjaCBjYWxsZWRcIik7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIilcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIGlmKHRoaXMudmFsKCkubGVuZ3RoID09IDApXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyB9KTtcbiAgICB9KVxuXG4gICAgY29uc3QgRG9ja0NsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHsgZG9ja0Jvb2xlYW46ICFzdGF0ZS5kb2NrQm9vbGVhbiB9IClcbiAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZENsaWNrKVxuICAgICAgICBsZXQgYXVkaW9DbG9zaW5nID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGlmIChzdGF0ZS5kb2NrQm9vbGVhbikge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICAgICAgYXVkaW9DbG9zaW5nLnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgU291bmRDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhTb3VuZENsaWNrKVxuICAgICAgICBhdWRpby5wbGF5KClcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3VuZENsaWNrZWQgY2FsbGVkXCIpXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIHNvdW5kQm9vbGVhbjogIXN0YXRlLnNvdW5kQm9vbGVhblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgdHdpcmxDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHdpcmxDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7YnVzaW5lc3NCb29sZWFuOiAhc3RhdGUuYnVzaW5lc3NCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgaWYgKHN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBzb3VuZENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc291bmRCb29sZWFuKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtzb3VuZEJvb2xlYW46ICFzdGF0ZS5zb3VuZEJvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLnNvdW5kQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmQtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvc291bmQtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3NvdW5kLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiYWxsb29uQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcImJhbGxvb25Db250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNvdW5kQm9vbGVhbilcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7YmFsbG9vbkJvb2xlYW46ICFzdGF0ZS5iYWxsb29uQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24td3JlbmNoLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLXdyZW5jaC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVudU92ZXJmbG93Q2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnVPdmVyZmxvd0NsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbilcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7bWVudU92ZXJmbG93Qm9vbGVhbjogIXN0YXRlLm1lbnVPdmVyZmxvd0Jvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLm1lbnVPdmVyZmxvd0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtb3ZlcmZsb3ctc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvbWVudS1vdmVyZmxvdy1kb3duLnBuZ1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtb3ZlcmZsb3ctc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvbWVudS1vdmVyZmxvdy11cC5wbmdcIiBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG5hdkNvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtuYXZCb29sZWFuOiAhc3RhdGUubmF2Qm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUubmF2Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgICAgIHRpdGxlLnN0eWxlID0gXCJmbGV4XCJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlID0gXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IE5leHRUZW1wbGF0ZUNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BhdGNoKG5leHRUZW1wbGF0ZUNsaWNrZWQoKSlcbiAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICB9XG5cbiAgICBjb25zdCBQcmV2aW91c1RlbXBsYXRlQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGlzcGF0Y2gocHJldmlvdXNUZW1wbGF0ZUNsaWNrZWQoKSlcbiAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsLXBhcmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWxcIiBvbkNsaWNrPXtEb2NrQ2xpY2tlZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcGFyZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNudHItaW5uclwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlYXJjaFwiIGZvcj1cImlucHRfc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB0X3NlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcG5nMlwiIHNyYz1cIi9PbW5pYmFyLnBuZ1wiIGFsdD1cIi1cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS10aXRsZVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm9lYS10ZXh0XCI+T21uaWJveCBFeHRlbnNpb24gQXBwPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtY29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvbi1zdmdcIiBzcmM9XCIvYmFjay5zdmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvcndhcmQtYnV0dG9uLXN2Z1wiIHNyYz1cIi9mb3J3YXJkLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5pcmlzfSBjbGFzc05hbWU9XCJpcmlzLXN2Z1wiIHNyYz1cIi9pcmlzLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBpZD1cInR3aXJsLWNvbnRhaW5lclwiIG9uQ2xpY2s9e3R3aXJsQ29udGFpbmVyQ2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnR3aXJsfSBjbGFzc05hbWU9XCJ0d2lybC1zdmdcIiBzcmM9eyBwcm9wcy5idXNpbmVzcyA/IFR3aXJsUGljRmlsbGVkIDogVHdpcmxQaWN9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyBiYWxsb29uQ29udGFpbmVyQ2xpY2tlZCB9IGNsYXNzTmFtZT1cImJhbGxvb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLmJhbGxvb259IGNsYXNzTmFtZT1cImJhbGxvb24td3JlbmNoLXN2Z1wiIHNyYz17IHN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtOZXh0VGVtcGxhdGVDbGlja2VkfSBjbGFzc05hbWU9XCJuZXh0LXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi9kb3duLWFycm93LWVtcHR5LnBuZ1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17UHJldmlvdXNUZW1wbGF0ZUNsaWNrZWR9IGNsYXNzTmFtZT1cInByZXZpb3VzLXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi91cC1hcnJvdy1lbXB0eS5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17bWVudU92ZXJmbG93Q2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLm1lbnV9IGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPXtNZW51T3ZlcmZsb3dVcH0gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCIgb25DbGljaz17bmF2Q29udGFpbmVyQ2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLm5hdn0gY2xhc3NOYW1lPVwibmF2LXN2Z1wiIHNyYz1cIi9lYXJ0aDIucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlzdG9yeS1zdmdcIiBzcmM9XCIvaGlzdG9yeS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic25ha2Utc3ZnXCIgc3JjPVwiL3NuYWtlLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsgc291bmRDb250YWluZXJDbGlja2VkIH0gY2xhc3NOYW1lPVwic291bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvdW5kLXN2Z1wiIHNyYz1cIi9zb3VuZC5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgIH1cbiAgICAgICAuY250ci1pbm5yIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDo4MHB4O1xuICAgICAgICBsZWZ0OiAyNXB4O1xuICAgfVxuICAgICAgICAuY250ciB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgfVxuXG4gICAgICAgLyoqKiBTVFlMRVMgKioqL1xuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGFic29sdXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggOHB4IDdweCAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggOXB4IDBweCA5cHg7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2g6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgICAgIHRvcDogMjFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoLmFjdGl2ZSwgLnNlYXJjaDpob3ZlciB7XG4gICAgICAgICAgICB3aWR0aDogMTMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoLmFjdGl2ZTphZnRlciwgLnNlYXJjaDpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwcHg7XG4gICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAuZG9jay1wYW5lbC1wYXJlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZG9jay1wYW5lbCB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgICAgIGhlaWdodDogODRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRvcDogMTYxcHg7XG4gICAgICAgICAgICBjb2xvcjogIzJGQTRFNztcbiAgICAgICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAwMDAwLCAjMjkyOTJjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDIzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuICAgICAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wYXJlbnQge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICAgICAganVzdGlmdHktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wbmcyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxNTM2cHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm9lYS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTUxM3B4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5iYWNrLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yd2FyZC1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDc2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sZWZ0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzLXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjQxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYmFsbG9vbi13cmVuY2gtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDkycHg7XG4gICAgICAgICAgICB9ICAgICAgICBcblxuICAgICAgICAgICAgLm5hdi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDU3NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVudS1vdmVyZmxvdy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo2NTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnR3aXJsLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3MzhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpc3Rvcnktc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6ODIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmlyaXMtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6OTAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb3VuZC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDk4NHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dC10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDYycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yaWdodC1oZXhhZ29ucyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTE0OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc25ha2Utc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDE0MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Dock.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.750f73ef4781d7ed4ba1.hot-update.js.map
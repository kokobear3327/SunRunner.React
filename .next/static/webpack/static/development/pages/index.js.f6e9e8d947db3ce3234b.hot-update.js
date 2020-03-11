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
  let inptSearch = document.querySelector("#inpt_search");
  inptSearch.addEventListener('focus', event => {
    console.log("inputSearch called");
    document.querySelector(".cntr").addClass('active');
  });
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(theState);
  let previousBoolean = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isPreviousTemplate);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {// document.querySelector.on('blur', function () {
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
    className: "jsx-2592139849" + " " + "dock-panel-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("div", {
    onClick: DockClicked,
    className: "jsx-2592139849" + " " + "dock-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2592139849" + " " + "search-bar-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2592139849" + " " + "cntr-innr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("label", {
    for: "inpt_search",
    className: "jsx-2592139849" + " " + "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("input", {
    id: "inpt_search",
    type: "text",
    className: "jsx-2592139849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2592139849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Hover to see the magic.")), __jsx("img", {
    src: "/Omnibar.png",
    alt: "-",
    className: "jsx-2592139849" + " " + "search-bar-png2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2592139849" + " " + "oea-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2592139849" + " " + "oea-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Omnibox Extension App")), __jsx("div", {
    className: "jsx-2592139849" + " " + "oea-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("img", {
    src: "/back.svg",
    alt: "some",
    className: "jsx-2592139849" + " " + "back-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), __jsx("img", {
    src: "/forward.svg",
    alt: "some",
    className: "jsx-2592139849" + " " + "forward-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), __jsx("img", {
    onClick: props.iris,
    src: "/iris.svg",
    alt: "some",
    className: "jsx-2592139849" + " " + "iris-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), __jsx("div", {
    id: "twirl-container",
    onClick: twirlContainerClicked,
    className: "jsx-2592139849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("img", {
    onClick: props.twirl,
    src: props.business ? TwirlPicFilled : TwirlPic,
    alt: "some",
    className: "jsx-2592139849" + " " + "twirl-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), __jsx("div", {
    onClick: balloonContainerClicked,
    className: "jsx-2592139849" + " " + "balloon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx("img", {
    onClick: props.balloon,
    src: state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
    alt: "some",
    className: "jsx-2592139849" + " " + "balloon-wrench-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  })), __jsx("img", {
    onClick: NextTemplateClicked,
    src: "/down-arrow-empty.png",
    alt: "some",
    className: "jsx-2592139849" + " " + "next-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), __jsx("img", {
    onClick: PreviousTemplateClicked,
    src: "/up-arrow-empty.png",
    alt: "some",
    className: "jsx-2592139849" + " " + "previous-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), __jsx("div", {
    onClick: menuOverflowClicked,
    className: "jsx-2592139849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("img", {
    onClick: props.menu,
    src: MenuOverflowUp,
    alt: "some",
    className: "jsx-2592139849" + " " + "menu-overflow-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })), __jsx("div", {
    onClick: navContainerClicked,
    className: "jsx-2592139849" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("img", {
    onClick: props.nav,
    src: "/earth2.png",
    alt: "some",
    className: "jsx-2592139849" + " " + "nav-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), __jsx("img", {
    src: "/history.svg",
    alt: "some",
    className: "jsx-2592139849" + " " + "history-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), __jsx("img", {
    src: "/snake.svg",
    alt: "some",
    className: "jsx-2592139849" + " " + "snake-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), __jsx("div", {
    onClick: soundContainerClicked,
    className: "jsx-2592139849" + " " + "sound-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("img", {
    src: "/sound.svg",
    alt: "some",
    className: "jsx-2592139849" + " " + "sound-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2592139849",
    __self: this
  }, "p.jsx-2592139849{margin-top:30px;}.cntr.jsx-2592139849{display:table;width:100%;height:100%;position:relative;top:200px;}.cntr.jsx-2592139849 .cntr-innr.jsx-2592139849{display:table-cell;text-align:center;vertical-align:middle;}.search.jsx-2592139849{display:inline-block;position:relative;height:35px;width:35px;box-sizing:border-box;margin:0px 8px 7px 0px;padding:7px 9px 0px 9px;border:3px solid #fff;border-radius:25px;-webkit-transition:all 200ms ease;transition:all 200ms ease;cursor:text;}.search.jsx-2592139849:after{content:\"\";position:absolute;width:3px;height:20px;right:-5px;top:21px;background:#fff;border-radius:3px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:all 200ms ease;transition:all 200ms ease;}.search.active.jsx-2592139849,.search.jsx-2592139849:hover{width:200px;margin-right:0px;}.search.active.jsx-2592139849:after,.search.jsx-2592139849:hover.jsx-2592139849:after{height:0px;}.search.jsx-2592139849 input.jsx-2592139849{width:100%;border:none;box-sizing:border-box;font-family:Helvetica;font-size:15px;color:inherit;background:transparent;outline-width:0px;}.dock-panel-parent.jsx-2592139849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-2592139849{pointer-events:all;width:1536px;height:84px;font-family:Montserrat;font-size:23px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:100;background:linear-gradient(270deg,#000000,#29292c);background-size:400% 400%;-webkit-animation:AnimationName-jsx-2592139849 23s ease-in-out infinite;animation:AnimationName-jsx-2592139849 23s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-2592139849{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-2592139849{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-2592139849{pointer-events:none;justifty-items:center;}.search-bar-png2.jsx-2592139849{width:1536px;}.oea-title.jsx-2592139849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-2592139849{font-family:Montserrat;font-size:38px;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);bottom:7px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-2592139849{display:none;font-family:Montserrat;font-size:38px;position:relative;width:1507px;height:76px;top:10px;right:1513px;}.back-button-svg.jsx-2592139849{height:62px;width:62px;position:absolute;}.forward-button-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:76px;}.left-hexagons.jsx-2592139849{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:492px;}.nav-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:574px;}.menu-overflow-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:656px;}.twirl-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:738px;}.history-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:820px;}.iris-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:902px;}.sound-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:984px;}.next-template-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:1062px;}.right-hexagons.jsx-2592139849{height:62px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-2592139849{height:62px;width:62px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE9vQixBQUk2QixBQUdGLEFBT0ssQUFNRSxBQWFWLEFBWUMsQUFJRCxBQUdBLEFBWUUsQUFPTSxBQWtCUSxBQUNHLEFBQ0QsQUFLTCxBQUtSLEFBS0MsQUFLVSxBQVdWLEFBWUQsQUFLQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxXQS9MRSxBQWdCdkIsQUFHaUIsQ0FQSyxBQXlGRixBQUtBLEFBT0MsQUFPRCxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQyxBQU9ELENBM0hmLEFBb0IyQixDQW5IaEIsRUFIaEIsR0FVdUIsQUF5REwsQ0F5QmEsQ0E1RVIsRUFpQ0ksQUEwREgsQUF3QkcsQUFLQSxBQWNBLEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQWNBLENBL0VBLEFBd0VBLENBbk5WLEVBZ0ZnQixBQUVFLEVBeERwQixBQVlmLEFBMkNvQyxHQWpCbkIsSUFtRE8sQ0FsSEQsQUFNSSxDQWlHRyxDQTNGYixBQWNBLEVBcUdaLEFBS2MsQUFjQSxBQU9BLEFBUUMsQUFPRCxBQU9DLEFBT0QsQUFPQSxBQVFDLEFBT0EsQUFlQyxDQW5JaEIsQUFtRGUsQUF3RUMsRUFuSk8sQ0FuQkQsTUFoQ1gsQUFjQSxBQXdGVyxBQWtCdEIsQ0FjQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLENBMURBLEFBaUVBLEFBZUEsQ0FSQSxDQW5OVSxJQU1mLEdBTzJCLEFBY2IsR0ExQmQsRUE0Q29CLEFBbUJBLEVBbURFLEVBdkZELEdBMEJHLEFBMENILFFBbERGLEFBbUJJLEFBbURGLEVBdEdPLEVBbUZ2QixDQXBFa0IsT0F3RkwsRUF0RVUsSUFtQlYsR0FvREksRUF4RlEsRUFmRCxNQXdGVCxHQWdCZixHQXZFa0IsS0F3REksT0F4RkEsTUFpQzNCLEtBd0RvRixXQXhGNUQsY0FzQ0ksS0FyQ0csRUFpRFAsa0JBcENPLHFCQTJFTyxtQkF2RnJCLFVBd0Y0QixFQXZGN0MsUUFZQSxjQXlCQyxDQVcyQixXQXdDdkIsd0ZBdkNVLFVBQ0ksY0FDRCxhQUNELFlBQ3lDLG1EQUMzQiwwQkFDdUIsd0lBT3JEIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxuaW1wb3J0IHsgbmV4dFRlbXBsYXRlQ2xpY2tlZCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgcHJldmlvdXNUZW1wbGF0ZUNsaWNrZWQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuLy8gU28geW91IG5vdyB3ZSBtYWtlIGFuIG9uQ2xpY2sgZXZlbnQgd2l0aCBmaXJzdCBnb2FsIHJlZ2lzdGVyaW5nIGEgY29uc29sZS5sb2coKSBcblxuY29uc3QgQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIlxuY29uc3QgQmFsbG9vbldyZW5jaFBpYyA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiXG5jb25zdCBUd2lybFBpY0ZpbGxlZCA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbmNvbnN0IFR3aXJsUGljID0gXCIvdHdpcmwuc3ZnXCJcbmNvbnN0IFNvdW5kUGljT24gPSBcIi9zb3VuZC1vbi5zdmdcIlxuY29uc3QgU291bmRQaWMgPSBcIi9zb3VuZC5zdmdcIlxuY29uc3QgTWVudU92ZXJmbG93VXAgPSBcIm1lbnUtb3ZlcmZsb3ctdXAucG5nXCJcbmNvbnN0IE1lbnVPdmVyZmxvd0Rvd24gPSBcIm1lbnUtb3ZlcmZsb3ctZG93bi5wbmdcIlxuY29uc3QgU291bmRDbGljayA9IFwiL3NvdW5kLWNsaWNrLm1wM1wiXG5jb25zdCBTb3VuZE9wZW5pbmcgPSBcIi9zb3VuZC1vcGVuaW5nLm1wM1wiXG5jb25zdCBTb3VuZEZhaWx1cmUgPSBcIi9zb3VuZC1mYWlsdXJlMi5tcDNcIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jayhwcm9wcykge1xuICAgIFxuICAgIGxldCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgbGV0IHRoZVN0YXRlID0ge1xuICAgICAgICBkb2NrQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBzb3VuZEJvb2xlYW46IHRydWUsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjp0cnVlLFxuICAgICAgICBtZW51T3ZlcmZsb3dCb29sZWFuOiB0cnVlLFxuICAgICAgICBuYXZCb29sZWFuOiB0cnVlXG4gICAgfVxuICAgIGxldCBpbnB0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB0X3NlYXJjaFwiKTtcbiAgICBpbnB0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5wdXRTZWFyY2ggY2FsbGVkXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNudHJcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh0aGVTdGF0ZSk7XG4gICAgbGV0IHByZXZpb3VzQm9vbGVhbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzUHJldmlvdXNUZW1wbGF0ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICBpZih0aGlzLnZhbCgpLmxlbmd0aCA9PSAwKVxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGFyZW50KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfSlcblxuICAgIGNvbnN0IERvY2tDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7IGRvY2tCb29sZWFuOiAhc3RhdGUuZG9ja0Jvb2xlYW4gfSApXG4gICAgICAgIGxldCBhdWRpb09wZW5pbmcgPSBuZXcgQXVkaW8oU291bmRDbGljaylcbiAgICAgICAgbGV0IGF1ZGlvQ2xvc2luZyA9IG5ldyBBdWRpbyhTb3VuZENsaWNrKVxuICAgICAgICBpZiAoc3RhdGUuZG9ja0Jvb2xlYW4pIHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgdGl0bGUuc3R5bGUgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlID0gXCJub25lXCJcbiAgICAgICAgICAgIGF1ZGlvQ2xvc2luZy5wbGF5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFNvdW5kQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oU291bmRDbGljaylcbiAgICAgICAgYXVkaW8ucGxheSgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU291bmRDbGlja2VkIGNhbGxlZFwiKVxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3VuZEJvb2xlYW46ICFzdGF0ZS5zb3VuZEJvb2xlYW5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcInR3aXJsQ29udGFpbmVyQ2xpY2tlZFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5idXNpbmVzc0Jvb2xlYW4pXG4gICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAge2J1c2luZXNzQm9vbGVhbjogIXN0YXRlLmJ1c2luZXNzQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5idXNpbmVzc0Jvb2xlYW4pXG4gICAgICAgIGlmIChzdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBhdWRpb09wZW5pbmcgPSBuZXcgQXVkaW8oU291bmRPcGVuaW5nKVxuICAgICAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhdWRpb09wZW5pbmcgPSBuZXcgQXVkaW8oU291bmRPcGVuaW5nKVxuICAgICAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvdHdpcmwuc3ZnXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3Qgc291bmRDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwic291bmRDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNvdW5kQm9vbGVhbilcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7c291bmRCb29sZWFuOiAhc3RhdGUuc291bmRCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5zb3VuZEJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3NvdW5kLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3VuZC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9zb3VuZC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmFsbG9vbkNvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWxsb29uQ29udGFpbmVyQ2xpY2tlZFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5zb3VuZEJvb2xlYW4pXG4gICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAge2JhbGxvb25Cb29sZWFuOiAhc3RhdGUuYmFsbG9vbkJvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLmJhbGxvb25Cb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLXdyZW5jaC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi13cmVuY2gtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVPdmVyZmxvd0NsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51T3ZlcmZsb3dDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLm1lbnVPdmVyZmxvd0Jvb2xlYW4pXG4gICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAge21lbnVPdmVyZmxvd0Jvb2xlYW46ICFzdGF0ZS5tZW51T3ZlcmZsb3dCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5tZW51T3ZlcmZsb3dCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW92ZXJmbG93LXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL21lbnUtb3ZlcmZsb3ctZG93bi5wbmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW92ZXJmbG93LXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL21lbnUtb3ZlcmZsb3ctdXAucG5nXCIgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBuYXZDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7bmF2Qm9vbGVhbjogIXN0YXRlLm5hdkJvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLm5hdkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZmxleFwiXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBOZXh0VGVtcGxhdGVDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkaXNwYXRjaChuZXh0VGVtcGxhdGVDbGlja2VkKCkpXG4gICAgICAgIGxldCBhdWRpb09wZW5pbmcgPSBuZXcgQXVkaW8oU291bmRPcGVuaW5nKVxuICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgfVxuXG4gICAgY29uc3QgUHJldmlvdXNUZW1wbGF0ZUNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BhdGNoKHByZXZpb3VzVGVtcGxhdGVDbGlja2VkKCkpXG4gICAgICAgIGxldCBhdWRpb09wZW5pbmcgPSBuZXcgQXVkaW8oU291bmRPcGVuaW5nKVxuICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jay1wYW5lbC1wYXJlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsXCIgb25DbGljaz17RG9ja0NsaWNrZWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLXBhcmVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbnRyLWlubnJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZWFyY2hcIiBmb3I9XCJpbnB0X3NlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5wdF9zZWFyY2hcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxwPkhvdmVyIHRvIHNlZSB0aGUgbWFnaWMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wbmcyXCIgc3JjPVwiL09tbmliYXIucG5nXCIgYWx0PVwiLVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwib2VhLXRleHRcIj5PbW5pYm94IEV4dGVuc2lvbiBBcHA8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJhY2stYnV0dG9uLXN2Z1wiIHNyYz1cIi9iYWNrLnN2Z1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9yd2FyZC1idXR0b24tc3ZnXCIgc3JjPVwiL2ZvcndhcmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLmlyaXN9IGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL2lyaXMuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidHdpcmwtY29udGFpbmVyXCIgb25DbGljaz17dHdpcmxDb250YWluZXJDbGlja2VkfT5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudHdpcmx9IGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHByb3BzLmJ1c2luZXNzID8gVHdpcmxQaWNGaWxsZWQgOiBUd2lybFBpY30gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17IGJhbGxvb25Db250YWluZXJDbGlja2VkIH0gY2xhc3NOYW1lPVwiYmFsbG9vbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMuYmFsbG9vbn0gY2xhc3NOYW1lPVwiYmFsbG9vbi13cmVuY2gtc3ZnXCIgc3JjPXsgc3RhdGUuYmFsbG9vbkJvb2xlYW4gPyBCYWxsb29uV3JlbmNoUGljRmlsbGVkIDogQmFsbG9vbldyZW5jaFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e05leHRUZW1wbGF0ZUNsaWNrZWR9IGNsYXNzTmFtZT1cIm5leHQtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiL2Rvd24tYXJyb3ctZW1wdHkucG5nXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtQcmV2aW91c1RlbXBsYXRlQ2xpY2tlZH0gY2xhc3NOYW1lPVwicHJldmlvdXMtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiL3VwLWFycm93LWVtcHR5LnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXttZW51T3ZlcmZsb3dDbGlja2VkfT5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMubWVudX0gY2xhc3NOYW1lPVwibWVudS1vdmVyZmxvdy1zdmdcIiBzcmM9e01lbnVPdmVyZmxvd1VwfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIiBvbkNsaWNrPXtuYXZDb250YWluZXJDbGlja2VkfT5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMubmF2fSBjbGFzc05hbWU9XCJuYXYtc3ZnXCIgc3JjPVwiL2VhcnRoMi5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoaXN0b3J5LXN2Z1wiIHNyYz1cIi9oaXN0b3J5LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbmFrZS1zdmdcIiBzcmM9XCIvc25ha2Uuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyBzb3VuZENvbnRhaW5lckNsaWNrZWQgfSBjbGFzc05hbWU9XCJzb3VuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic291bmQtc3ZnXCIgc3JjPVwiL3NvdW5kLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgfVxuICAgICAgICAuY250ciB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICB9XG4gICAgICAgIC5jbnRyIC5jbnRyLWlubnIge1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgfVxuICAgICAgIC8qKiogU1RZTEVTICoqKi9cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA4cHggN3B4IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA5cHggMHB4IDlweDtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gICAgICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgICAgICB0b3A6IDIxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICAgICAgIH1cbiAgICAgICAgLnNlYXJjaC5hY3RpdmUsIC5zZWFyY2g6aG92ZXIge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoLmFjdGl2ZTphZnRlciwgLnNlYXJjaDpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwcHg7XG4gICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAuZG9jay1wYW5lbC1wYXJlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZG9jay1wYW5lbCB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgICAgIGhlaWdodDogODRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRvcDogMTYxcHg7XG4gICAgICAgICAgICBjb2xvcjogIzJGQTRFNztcbiAgICAgICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAwMDAwLCAjMjkyOTJjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDIzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuICAgICAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wYXJlbnQge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIGp1c3RpZnR5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnNlYXJjaC1iYXItcG5nMiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTUzNnB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZWEtdGl0bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5vZWEtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgICAgICAgICBib3R0b206IDdweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZWEtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTUxM3B4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5iYWNrLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yd2FyZC1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDc2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sZWZ0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzLXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjQxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYmFsbG9vbi13cmVuY2gtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDkycHg7XG4gICAgICAgICAgICB9ICAgICAgICBcblxuICAgICAgICAgICAgLm5hdi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDU3NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVudS1vdmVyZmxvdy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo2NTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnR3aXJsLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3MzhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpc3Rvcnktc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6ODIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmlyaXMtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6OTAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb3VuZC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDk4NHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dC10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDoxMDYycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yaWdodC1oZXhhZ29ucyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTE0OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc25ha2Utc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnQ6IDE0MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Dock.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f6e9e8d947db3ce3234b.hot-update.js.map
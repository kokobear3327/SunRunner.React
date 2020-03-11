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
    document.querySelector(".cntr-innr").addClass('active');
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
    className: "jsx-457454881" + " " + "dock-panel-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("div", {
    onClick: DockClicked,
    className: "jsx-457454881" + " " + "dock-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-457454881" + " " + "search-bar-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("div", {
    class: "cntr-innr",
    className: "jsx-457454881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("label", {
    class: "search",
    for: "inpt_search",
    className: "jsx-457454881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("input", {
    id: "inpt_search",
    type: "text",
    className: "jsx-457454881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-457454881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Hover to see the magic.")), __jsx("img", {
    src: "/Omnibar.png",
    alt: "-",
    className: "jsx-457454881" + " " + "search-bar-png2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-457454881" + " " + "oea-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-457454881" + " " + "oea-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Omnibox Extension App")), __jsx("div", {
    className: "jsx-457454881" + " " + "oea-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("img", {
    src: "/back.svg",
    alt: "some",
    className: "jsx-457454881" + " " + "back-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), __jsx("img", {
    src: "/forward.svg",
    alt: "some",
    className: "jsx-457454881" + " " + "forward-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), __jsx("img", {
    onClick: props.iris,
    src: "/iris.svg",
    alt: "some",
    className: "jsx-457454881" + " " + "iris-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), __jsx("div", {
    id: "twirl-container",
    onClick: twirlContainerClicked,
    className: "jsx-457454881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("img", {
    onClick: props.twirl,
    src: props.business ? TwirlPicFilled : TwirlPic,
    alt: "some",
    className: "jsx-457454881" + " " + "twirl-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), __jsx("div", {
    onClick: balloonContainerClicked,
    className: "jsx-457454881" + " " + "balloon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx("img", {
    onClick: props.balloon,
    src: state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
    alt: "some",
    className: "jsx-457454881" + " " + "balloon-wrench-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  })), __jsx("img", {
    onClick: NextTemplateClicked,
    src: "/down-arrow-empty.png",
    alt: "some",
    className: "jsx-457454881" + " " + "next-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), __jsx("img", {
    onClick: PreviousTemplateClicked,
    src: "/up-arrow-empty.png",
    alt: "some",
    className: "jsx-457454881" + " " + "previous-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), __jsx("div", {
    onClick: menuOverflowClicked,
    className: "jsx-457454881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("img", {
    onClick: props.menu,
    src: MenuOverflowUp,
    alt: "some",
    className: "jsx-457454881" + " " + "menu-overflow-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })), __jsx("div", {
    onClick: navContainerClicked,
    className: "jsx-457454881" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("img", {
    onClick: props.nav,
    src: "/earth2.png",
    alt: "some",
    className: "jsx-457454881" + " " + "nav-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), __jsx("img", {
    src: "/history.svg",
    alt: "some",
    className: "jsx-457454881" + " " + "history-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), __jsx("img", {
    src: "/snake.svg",
    alt: "some",
    className: "jsx-457454881" + " " + "snake-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), __jsx("div", {
    onClick: soundContainerClicked,
    className: "jsx-457454881" + " " + "sound-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("img", {
    src: "/sound.svg",
    alt: "some",
    className: "jsx-457454881" + " " + "sound-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "457454881",
    __self: this
  }, ".cntr-innr.jsx-457454881{position:absolute;padding-top:200px;}.search.jsx-457454881{display:inline-block;position:relative;height:35px;width:35px;box-sizing:border-box;margin:0px 8px 7px 0px;padding:7px 9px 0px 9px;border:3px solid @icn-color;border-radius:25px;-webkit-transition:all 200ms ease;transition:all 200ms ease;cursor:text;position:relative;top:200px;}.search.jsx-457454881:after{content:\"\";position:absolute;width:3px;height:20px;right:-5px;top:21px;background:@icn-color;border-radius:3px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:all 200ms ease;transition:all 200ms ease;}.search.active.jsx-457454881,search.jsx-457454881:hover{width:200px;margin-right:0px;}input.jsx-457454881{width:100%;border:none;box-sizing:border-box;font-family:Helvetica;font-size:15px;color:inherit;background:transparent;outline-width:0px;}.dock-panel-parent.jsx-457454881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-457454881{pointer-events:all;width:1536px;height:84px;font-family:Montserrat;font-size:23px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:100;background:linear-gradient(270deg,#000000,#29292c);background-size:400% 400%;-webkit-animation:AnimationName-jsx-457454881 23s ease-in-out infinite;animation:AnimationName-jsx-457454881 23s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-457454881{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-457454881{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-457454881{pointer-events:none;justifty-items:center;}.search-bar-png2.jsx-457454881{width:1536px;}.oea-title.jsx-457454881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-457454881{font-family:Montserrat;font-size:38px;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);bottom:7px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-457454881{display:none;font-family:Montserrat;font-size:38px;position:relative;width:1507px;height:76px;top:10px;right:1513px;}.back-button-svg.jsx-457454881{height:62px;width:62px;position:absolute;}.forward-button-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:76px;}.left-hexagons.jsx-457454881{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:492px;}.nav-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:574px;}.menu-overflow-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:656px;}.twirl-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:738px;}.history-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:820px;}.iris-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:902px;}.sound-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:984px;}.next-template-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:1062px;}.right-hexagons.jsx-457454881{height:62px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-457454881{height:62px;width:62px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE9vQixBQUkrQixBQUtHLEFBZU4sQUFjQyxBQU1ELEFBYUYsQUFPTSxBQWtCUSxBQUNHLEFBQ0QsQUFLTCxBQUtSLEFBS0MsQUFLVSxBQVdWLEFBWUQsQUFLQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxXQWpNTSxBQW9CTixDQU5LLEFBeUZOLEFBS0EsQUFPQyxBQU9ELEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9DLEFBT0QsQ0EzSGYsQUFvQjJCLEtBL0dULENBNERMLENBeUJhLENBaEZSLEVBb0NRLEFBMkRQLEFBd0JHLEFBS0EsQUFjQSxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFjQSxDQS9FQSxBQXdFQSxHQW5JTSxBQUVFLEVBMURoQixBQWNkLEFBMkMrQixHQWpCbkIsSUE1RGhCLEFBK0d1QixFQVhNLENBL0ZiLEFBZ0JJLEVBdUdoQixBQUtjLEFBY0EsQUFPQSxBQVFDLEFBT0QsQUFPQyxBQU9ELEFBT0EsQUFRQyxBQU9BLEFBZUMsQ0FuSWhCLEFBbURlLEFBd0VDLEVBbkpPLENBcEJHLE1BbkNmLEFBZ0JJLEFBMEZPLEFBa0J0QixDQWNBLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQ0ExREEsQUFpRUEsQUFlQSxDQVJBLFFBMU1zQixBQWdCVCxLQW1CTSxBQW9CSixFQW1ERSxFQXpGUyxHQTRCUCxBQTBDSCxRQW5ERSxBQW9CQSxBQW1ERixFQTFHTyxFQXVGdkIsT0F0RXNCLENBMEZULEVBdkVjLElBb0JkLEdBb0RJLElBM0dPLElBaUJLLEVBMkVkLEdBZ0JmLEdBeEVzQixLQXlEQSxPQTVGTSxNQW9DNUIsS0F5RCtFLGlCQTVGNUQsUUEwQ0ksT0FZSixJQXJETyxvQkFlSSxlQTZFRyx5QkEzRnJCLElBNEY0QixRQTNGdEIsUUFjbEIsUUEyQkosQ0FXMkIsQ0FuRGIsVUFDZCxBQTBGSSx3RkF2Q1UsVUFDSSxjQUNELGFBQ0QsWUFDeUMsbURBQzNCLDBCQUN1QixzSUFPckQiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL2NvbXBvbmVudHMvRG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LXNvdW5kJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXG5pbXBvcnQgeyBuZXh0VGVtcGxhdGVDbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBwcmV2aW91c1RlbXBsYXRlQ2xpY2tlZCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vLyBTbyB5b3Ugbm93IHdlIG1ha2UgYW4gb25DbGljayBldmVudCB3aXRoIGZpcnN0IGdvYWwgcmVnaXN0ZXJpbmcgYSBjb25zb2xlLmxvZygpIFxuXG5jb25zdCBCYWxsb29uV3JlbmNoUGljRmlsbGVkID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiXG5jb25zdCBCYWxsb29uV3JlbmNoUGljID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbmNvbnN0IFR3aXJsUGljRmlsbGVkID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuY29uc3QgVHdpcmxQaWMgPSBcIi90d2lybC5zdmdcIlxuY29uc3QgU291bmRQaWNPbiA9IFwiL3NvdW5kLW9uLnN2Z1wiXG5jb25zdCBTb3VuZFBpYyA9IFwiL3NvdW5kLnN2Z1wiXG5jb25zdCBNZW51T3ZlcmZsb3dVcCA9IFwibWVudS1vdmVyZmxvdy11cC5wbmdcIlxuY29uc3QgTWVudU92ZXJmbG93RG93biA9IFwibWVudS1vdmVyZmxvdy1kb3duLnBuZ1wiXG5jb25zdCBTb3VuZENsaWNrID0gXCIvc291bmQtY2xpY2subXAzXCJcbmNvbnN0IFNvdW5kT3BlbmluZyA9IFwiL3NvdW5kLW9wZW5pbmcubXAzXCJcbmNvbnN0IFNvdW5kRmFpbHVyZSA9IFwiL3NvdW5kLWZhaWx1cmUyLm1wM1wiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NrKHByb3BzKSB7XG4gICAgXG4gICAgbGV0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBsZXQgdGhlU3RhdGUgPSB7XG4gICAgICAgIGRvY2tCb29sZWFuOiB0cnVlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHNvdW5kQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOnRydWUsXG4gICAgICAgIG1lbnVPdmVyZmxvd0Jvb2xlYW46IHRydWUsXG4gICAgICAgIG5hdkJvb2xlYW46IHRydWVcbiAgICB9XG4gICAgbGV0IGlucHRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHRfc2VhcmNoXCIpO1xuICAgIGlucHRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnB1dFNlYXJjaCBjYWxsZWRcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY250ci1pbm5yXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUodGhlU3RhdGUpO1xuICAgIGxldCBwcmV2aW91c0Jvb2xlYW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc1ByZXZpb3VzVGVtcGxhdGUpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgaWYodGhpcy52YWwoKS5sZW5ndGggPT0gMClcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBhcmVudCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vIH0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBEb2NrQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoeyBkb2NrQm9vbGVhbjogIXN0YXRlLmRvY2tCb29sZWFuIH0gKVxuICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGxldCBhdWRpb0Nsb3NpbmcgPSBuZXcgQXVkaW8oU291bmRDbGljaylcbiAgICAgICAgaWYgKHN0YXRlLmRvY2tCb29sZWFuKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgICAgICBhdWRpb0Nsb3NpbmcucGxheSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBTb3VuZENsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGF1ZGlvLnBsYXkoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvdW5kQ2xpY2tlZCBjYWxsZWRcIilcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgc291bmRCb29sZWFuOiAhc3RhdGUuc291bmRCb29sZWFuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCB0d2lybENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJ0d2lybENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYnVzaW5lc3NCb29sZWFuKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICFzdGF0ZS5idXNpbmVzc0Jvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYnVzaW5lc3NCb29sZWFuKVxuICAgICAgICBpZiAoc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kT3BlbmluZylcbiAgICAgICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kT3BlbmluZylcbiAgICAgICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHNvdW5kQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcInNvdW5kQ29udGFpbmVyQ2xpY2tlZFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5zb3VuZEJvb2xlYW4pXG4gICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAge3NvdW5kQm9vbGVhbjogIXN0YXRlLnNvdW5kQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUuc291bmRCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3VuZC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9zb3VuZC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmQtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvc291bmQuc3ZnXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJhbGxvb25Db250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFsbG9vbkNvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc291bmRCb29sZWFuKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtiYWxsb29uQm9vbGVhbjogIXN0YXRlLmJhbGxvb25Cb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5iYWxsb29uQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi13cmVuY2gtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24td3JlbmNoLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtZW51T3ZlcmZsb3dDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVudU92ZXJmbG93Q2xpY2tlZFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5tZW51T3ZlcmZsb3dCb29sZWFuKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHttZW51T3ZlcmZsb3dCb29sZWFuOiAhc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1vdmVyZmxvdy1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9tZW51LW92ZXJmbG93LWRvd24ucG5nXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1vdmVyZmxvdy1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9tZW51LW92ZXJmbG93LXVwLnBuZ1wiIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmF2Q29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAge25hdkJvb2xlYW46ICFzdGF0ZS5uYXZCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5uYXZCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICAgICAgdGl0bGUuc3R5bGUgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgTmV4dFRlbXBsYXRlQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGlzcGF0Y2gobmV4dFRlbXBsYXRlQ2xpY2tlZCgpKVxuICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kT3BlbmluZylcbiAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgIH1cblxuICAgIGNvbnN0IFByZXZpb3VzVGVtcGxhdGVDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkaXNwYXRjaChwcmV2aW91c1RlbXBsYXRlQ2xpY2tlZCgpKVxuICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kT3BlbmluZylcbiAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWwtcGFyZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jay1wYW5lbFwiIG9uQ2xpY2s9e0RvY2tDbGlja2VkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wYXJlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbnRyLWlubnJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInNlYXJjaFwiIGZvcj1cImlucHRfc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB0X3NlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHA+SG92ZXIgdG8gc2VlIHRoZSBtYWdpYy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLXBuZzJcIiBzcmM9XCIvT21uaWJhci5wbmdcIiBhbHQ9XCItXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtdGl0bGVcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJvZWEtdGV4dFwiPk9tbmlib3ggRXh0ZW5zaW9uIEFwcDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmFjay1idXR0b24tc3ZnXCIgc3JjPVwiL2JhY2suc3ZnXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb3J3YXJkLWJ1dHRvbi1zdmdcIiBzcmM9XCIvZm9yd2FyZC5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMuaXJpc30gY2xhc3NOYW1lPVwiaXJpcy1zdmdcIiBzcmM9XCIvaXJpcy5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0d2lybC1jb250YWluZXJcIiBvbkNsaWNrPXt0d2lybENvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy50d2lybH0gY2xhc3NOYW1lPVwidHdpcmwtc3ZnXCIgc3JjPXsgcHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsgYmFsbG9vbkNvbnRhaW5lckNsaWNrZWQgfSBjbGFzc05hbWU9XCJiYWxsb29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5iYWxsb29ufSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyBzdGF0ZS5iYWxsb29uQm9vbGVhbiA/IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgOiBCYWxsb29uV3JlbmNoUGljIH0gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17TmV4dFRlbXBsYXRlQ2xpY2tlZH0gY2xhc3NOYW1lPVwibmV4dC10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvZG93bi1hcnJvdy1lbXB0eS5wbmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e1ByZXZpb3VzVGVtcGxhdGVDbGlja2VkfSBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvdXAtYXJyb3ctZW1wdHkucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e21lbnVPdmVyZmxvd0NsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5tZW51fSBjbGFzc05hbWU9XCJtZW51LW92ZXJmbG93LXN2Z1wiIHNyYz17TWVudU92ZXJmbG93VXB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiIG9uQ2xpY2s9e25hdkNvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5uYXZ9IGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIvZWFydGgyLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpc3Rvcnktc3ZnXCIgc3JjPVwiL2hpc3Rvcnkuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNuYWtlLXN2Z1wiIHNyYz1cIi9zbmFrZS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17IHNvdW5kQ29udGFpbmVyQ2xpY2tlZCB9IGNsYXNzTmFtZT1cInNvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9XCIvc291bmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5jbnRyLWlubnIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA4cHggN3B4IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA5cHggMHB4IDlweDtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIEBpY24tY29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gICAgICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgICAgICAgICB0b3A6IDIxcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQGljbi1jb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNlYXJjaC5hY3RpdmUsXG4gICAgICAgICAgICBzZWFyY2g6aG92ZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgb3V0bGluZS13aWR0aDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC5kb2NrLXBhbmVsLXBhcmVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kb2NrLXBhbmVsIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4NHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdG9wOiAxNjFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMkZBNEU3O1xuICAgICAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMDAwMDAsICMyOTI5MmMpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gICAgICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMjNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXG4gICAgICAgIEBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gICAgICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuICAgICAgICAgICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAganVzdGlmdHktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wbmcyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxNTM2cHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm9lYS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNTEzcHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLmJhY2stYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3J3YXJkLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxlZnQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1MnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldmlvdXMtdGVtcGxhdGUtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5iYWxsb29uLXdyZW5jaC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo0OTJweDtcbiAgICAgICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgICAgICAubmF2LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogNTc0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tZW51LW92ZXJmbG93LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjY1NnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHdpcmwtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDczOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlzdG9yeS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo4MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuaXJpcy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo5MDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvdW5kLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogOTg0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0LXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjEwNjJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJpZ2h0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMTQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbmFrZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogMTQyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Dock.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ef242123ed5a97af77bc.hot-update.js.map
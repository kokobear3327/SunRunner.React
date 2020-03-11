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
    });
    inptSearch.addEventListener('blur', event => {
      console.log("blur");
      let inactive = document.querySelector('.search');
      inactive.classList.remove('active');
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
    className: "jsx-2764170125" + " " + "dock-panel-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("div", {
    onClick: DockClicked,
    className: "jsx-2764170125" + " " + "dock-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2764170125" + " " + "search-bar-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2764170125" + " " + "cntr-innr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("label", {
    for: "inpt_search",
    className: "jsx-2764170125" + " " + "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("input", {
    id: "inpt_search",
    type: "text",
    className: "jsx-2764170125",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }))), __jsx("img", {
    src: "/SearchBarEmpty.png",
    alt: "-",
    className: "jsx-2764170125" + " " + "search-bar-png2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2764170125" + " " + "oea-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2764170125" + " " + "oea-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Omnibox Extension App")), __jsx("div", {
    className: "jsx-2764170125" + " " + "oea-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("img", {
    src: "/back.svg",
    alt: "some",
    className: "jsx-2764170125" + " " + "back-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), __jsx("img", {
    src: "/forward.svg",
    alt: "some",
    className: "jsx-2764170125" + " " + "forward-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), __jsx("img", {
    onClick: props.iris,
    src: "/iris.svg",
    alt: "some",
    className: "jsx-2764170125" + " " + "iris-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), __jsx("div", {
    id: "twirl-container",
    onClick: twirlContainerClicked,
    className: "jsx-2764170125",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("img", {
    onClick: props.twirl,
    src: props.business ? TwirlPicFilled : TwirlPic,
    alt: "some",
    className: "jsx-2764170125" + " " + "twirl-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), __jsx("div", {
    onClick: balloonContainerClicked,
    className: "jsx-2764170125" + " " + "balloon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("img", {
    onClick: props.balloon,
    src: state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
    alt: "some",
    className: "jsx-2764170125" + " " + "balloon-wrench-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })), __jsx("img", {
    onClick: NextTemplateClicked,
    src: "/down-arrow-empty.png",
    alt: "some",
    className: "jsx-2764170125" + " " + "next-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }), __jsx("img", {
    onClick: PreviousTemplateClicked,
    src: "/up-arrow-empty.png",
    alt: "some",
    className: "jsx-2764170125" + " " + "previous-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), __jsx("div", {
    onClick: menuOverflowClicked,
    className: "jsx-2764170125",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx("img", {
    onClick: props.menu,
    src: MenuOverflowUp,
    alt: "some",
    className: "jsx-2764170125" + " " + "menu-overflow-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })), __jsx("div", {
    onClick: navContainerClicked,
    className: "jsx-2764170125" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("img", {
    onClick: props.nav,
    src: "/earth2.png",
    alt: "some",
    className: "jsx-2764170125" + " " + "nav-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), __jsx("img", {
    src: "/history.svg",
    alt: "some",
    className: "jsx-2764170125" + " " + "history-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), __jsx("img", {
    src: "/snake.svg",
    alt: "some",
    className: "jsx-2764170125" + " " + "snake-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), __jsx("div", {
    onClick: soundContainerClicked,
    className: "jsx-2764170125" + " " + "sound-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("img", {
    src: "/sound.svg",
    alt: "some",
    className: "jsx-2764170125" + " " + "sound-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2764170125",
    __self: this
  }, ".cntr-innr.jsx-2764170125{display:table-cell;text-align:center;vertical-align:middle;position:relative;top:72px;left:25px;z-index:10;}.cntr.jsx-2764170125{display:table;z-index:10;}.search.jsx-2764170125{top:14px;position:relative;right:19px;height:65px;width:65px;box-sizing:border-box;margin:0px 8px 7px 0px;padding:7px 9px 0px 9px;border:3px solid black;border-radius:33px;-webkit-transition:all 200ms ease;transition:all 200ms ease;cursor:text;z-index:10;}.search.active.jsx-2764170125,.search.jsx-2764170125:hover{width:1523px;position:relative;margin-right:0px;}.search.active.jsx-2764170125:after,.search.jsx-2764170125:hover.jsx-2764170125:after{height:0px;}.search.jsx-2764170125 input.jsx-2764170125{width:100%;border:none;box-sizing:border-box;font-family:Helvetica;font-size:15px;color:inherit;background:transparent;outline-width:0px;}.dock-panel-parent.jsx-2764170125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-2764170125{pointer-events:all;width:1536px;height:84px;font-family:Montserrat;font-size:23px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:100;background:linear-gradient(270deg,#000000,#29292c);background-size:400% 400%;-webkit-animation:AnimationName-jsx-2764170125 23s ease-in-out infinite;animation:AnimationName-jsx-2764170125 23s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-2764170125{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-2764170125{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-2764170125{pointer-events:all;justifty-items:center;}.search-bar-png2.jsx-2764170125{width:1536px;position:relative;padding-bottom:227px;}.oea-title.jsx-2764170125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-2764170125{font-family:Montserrat;font-size:38px;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);bottom:7px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-2764170125{display:none;font-family:Montserrat;font-size:38px;position:relative;top:12px;width:1507px;height:76px;right:1513px;}.back-button-svg.jsx-2764170125{height:62px;width:62px;position:absolute;}.forward-button-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:76px;}.left-hexagons.jsx-2764170125{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:492px;}.nav-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:574px;}.menu-overflow-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:656px;}.twirl-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:738px;}.history-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:820px;}.iris-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:902px;}.sound-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:984px;}.next-template-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:1062px;}.right-hexagons.jsx-2764170125{height:62px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-2764170125{height:62px;width:62px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaVBvQixBQUs0QixBQVNELEFBTUwsQUFrQkksQUFLRixBQUdBLEFBWUUsQUFPTSxBQWtCUSxBQUNHLEFBQ0QsQUFLTixBQUtQLEFBTUMsQUFLVSxBQVdWLEFBWUQsQUFLQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxTQXZNQyxFQXVCdEIsQUFHaUIsQ0FtRkcsQUFLQSxBQU9DLEFBT0QsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBT0MsQUFPRCxDQXRMRyxBQXlESSxBQXNCSyxDQXZHakIsS0FUSSxBQTRERCxBQXlCYSxJQTNDSixBQTJESCxBQXdCRyxBQUtBLEFBY0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBY0EsQ0EvRUEsQUF3RUEsQ0F2TTNCLEVBTWdCLEFBNkRpQixBQUVFLEVBREMsRUE1Q2QsQUF5RFEsQ0E5QmIsSUFvRE8sQ0FoSEQsQ0FnQk4sQUFxRmEsR0FoQnpCLEFBd0NBLEFBS2MsQUFjQSxBQU9BLEFBUUMsQUFPRCxBQU9DLEFBT0QsQUFPQSxBQVFDLEFBT0EsQUFlQyxDQWhGRCxBQXdFQyxFQXBKTyxDQW5CRCxHQVIzQixFQWpCZ0IsQ0FnR1csQUFrQnRCLENBeENBLEFBc0RBLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQ0ExREEsQUFpRUEsQUFlQSxDQVJBLEtBak5jLEVBaUJRLE1BeUJQLEFBbUJBLEVBb0RGLEtBOURNLEFBMkNILEdBN0ZaLENBaUhhLElBdkVILEFBbUJJLENBNUNLLEdBaEJqQixBQTZGTixLQW9CZ0IsS0FoSFQsQUF5Q2dCLElBbUJWLEdBcURJLEdBakdPLENBZmpDLE1BaUd3QixHQWdCZixHQXhFa0IsS0F5REksTUFsRkMsT0EwQjVCLEtBeURvRixXQWxGNUQsY0ErQkksS0E5QkcsRUEwQ1AsdUNBd0NjLG1CQWpGckIsVUFrRjRCLEVBakY5QixXQUNmLFdBNkJDLENBVzJCLFdBeUN2Qix3RkF4Q1UsVUFDSSxjQUNELGFBQ0QsWUFDeUMsbURBQzNCLDBCQUN1Qix3SUFPckQiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL2NvbXBvbmVudHMvRG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LXNvdW5kJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXG5pbXBvcnQgeyBuZXh0VGVtcGxhdGVDbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBwcmV2aW91c1RlbXBsYXRlQ2xpY2tlZCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vLyBTbyB5b3Ugbm93IHdlIG1ha2UgYW4gb25DbGljayBldmVudCB3aXRoIGZpcnN0IGdvYWwgcmVnaXN0ZXJpbmcgYSBjb25zb2xlLmxvZygpIFxuXG5jb25zdCBCYWxsb29uV3JlbmNoUGljRmlsbGVkID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiXG5jb25zdCBCYWxsb29uV3JlbmNoUGljID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbmNvbnN0IFR3aXJsUGljRmlsbGVkID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuY29uc3QgVHdpcmxQaWMgPSBcIi90d2lybC5zdmdcIlxuY29uc3QgU291bmRQaWNPbiA9IFwiL3NvdW5kLW9uLnN2Z1wiXG5jb25zdCBTb3VuZFBpYyA9IFwiL3NvdW5kLnN2Z1wiXG5jb25zdCBNZW51T3ZlcmZsb3dVcCA9IFwibWVudS1vdmVyZmxvdy11cC5wbmdcIlxuY29uc3QgTWVudU92ZXJmbG93RG93biA9IFwibWVudS1vdmVyZmxvdy1kb3duLnBuZ1wiXG5jb25zdCBTb3VuZENsaWNrID0gXCIvc291bmQtY2xpY2subXAzXCJcbmNvbnN0IFNvdW5kT3BlbmluZyA9IFwiL3NvdW5kLW9wZW5pbmcubXAzXCJcbmNvbnN0IFNvdW5kRmFpbHVyZSA9IFwiL3NvdW5kLWZhaWx1cmUyLm1wM1wiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NrKHByb3BzKSB7XG4gICAgXG4gICAgbGV0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBsZXQgdGhlU3RhdGUgPSB7XG4gICAgICAgIGRvY2tCb29sZWFuOiB0cnVlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHNvdW5kQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOnRydWUsXG4gICAgICAgIG1lbnVPdmVyZmxvd0Jvb2xlYW46IHRydWUsXG4gICAgICAgIG5hdkJvb2xlYW46IHRydWVcbiAgICB9XG4gXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh0aGVTdGF0ZSk7XG4gICAgbGV0IHByZXZpb3VzQm9vbGVhbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzUHJldmlvdXNUZW1wbGF0ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiO1wiKVxuICAgICAgICBsZXQgaW5wdFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdF9zZWFyY2hcIik7XG4gICAgICAgIGlucHRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5wdXRTZWFyY2ggY2FsbGVkXCIpO1xuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpXG4gICAgICAgICAgICBhY3RpdmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIGlucHRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJibHVyXCIpO1xuICAgICAgICAgICAgbGV0IGluYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpXG4gICAgICAgICAgICBpbmFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIGlmKHRoaXMudmFsKCkubGVuZ3RoID09IDApXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyB9KTtcbiAgICB9KVxuXG4gICAgY29uc3QgRG9ja0NsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHsgZG9ja0Jvb2xlYW46ICFzdGF0ZS5kb2NrQm9vbGVhbiB9IClcbiAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZENsaWNrKVxuICAgICAgICBsZXQgYXVkaW9DbG9zaW5nID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGlmIChzdGF0ZS5kb2NrQm9vbGVhbikge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICAgICAgYXVkaW9DbG9zaW5nLnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgU291bmRDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhTb3VuZENsaWNrKVxuICAgICAgICBhdWRpby5wbGF5KClcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3VuZENsaWNrZWQgY2FsbGVkXCIpXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIHNvdW5kQm9vbGVhbjogIXN0YXRlLnNvdW5kQm9vbGVhblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgdHdpcmxDb250YWluZXJDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHdpcmxDb250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7YnVzaW5lc3NCb29sZWFuOiAhc3RhdGUuYnVzaW5lc3NCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgaWYgKHN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBzb3VuZENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc291bmRCb29sZWFuKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtzb3VuZEJvb2xlYW46ICFzdGF0ZS5zb3VuZEJvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLnNvdW5kQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmQtc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvc291bmQtZmlsbGVkLnN2Z1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3NvdW5kLnN2Z1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiYWxsb29uQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcImJhbGxvb25Db250YWluZXJDbGlja2VkXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNvdW5kQm9vbGVhbilcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7YmFsbG9vbkJvb2xlYW46ICFzdGF0ZS5iYWxsb29uQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24td3JlbmNoLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLXdyZW5jaC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVudU92ZXJmbG93Q2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnVPdmVyZmxvd0NsaWNrZWRcIilcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbilcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7bWVudU92ZXJmbG93Qm9vbGVhbjogIXN0YXRlLm1lbnVPdmVyZmxvd0Jvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLm1lbnVPdmVyZmxvd0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtb3ZlcmZsb3ctc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvbWVudS1vdmVyZmxvdy1kb3duLnBuZ1wiIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtb3ZlcmZsb3ctc3ZnXCIpXG4gICAgICAgICAgICBqYW0uc3JjID0gXCIvbWVudS1vdmVyZmxvdy11cC5wbmdcIiBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG5hdkNvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtuYXZCb29sZWFuOiAhc3RhdGUubmF2Qm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUubmF2Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgICAgIHRpdGxlLnN0eWxlID0gXCJmbGV4XCJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlID0gXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IE5leHRUZW1wbGF0ZUNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BhdGNoKG5leHRUZW1wbGF0ZUNsaWNrZWQoKSlcbiAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICB9XG5cbiAgICBjb25zdCBQcmV2aW91c1RlbXBsYXRlQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGlzcGF0Y2gocHJldmlvdXNUZW1wbGF0ZUNsaWNrZWQoKSlcbiAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgIGF1ZGlvT3BlbmluZy5wbGF5KClcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsLXBhcmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWxcIiBvbkNsaWNrPXtEb2NrQ2xpY2tlZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcGFyZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNudHItaW5uclwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlYXJjaFwiIGZvcj1cImlucHRfc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB0X3NlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcG5nMlwiIHNyYz1cIi9TZWFyY2hCYXJFbXB0eS5wbmdcIiBhbHQ9XCItXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtdGl0bGVcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJvZWEtdGV4dFwiPk9tbmlib3ggRXh0ZW5zaW9uIEFwcDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmFjay1idXR0b24tc3ZnXCIgc3JjPVwiL2JhY2suc3ZnXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb3J3YXJkLWJ1dHRvbi1zdmdcIiBzcmM9XCIvZm9yd2FyZC5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMuaXJpc30gY2xhc3NOYW1lPVwiaXJpcy1zdmdcIiBzcmM9XCIvaXJpcy5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0d2lybC1jb250YWluZXJcIiBvbkNsaWNrPXt0d2lybENvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy50d2lybH0gY2xhc3NOYW1lPVwidHdpcmwtc3ZnXCIgc3JjPXsgcHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsgYmFsbG9vbkNvbnRhaW5lckNsaWNrZWQgfSBjbGFzc05hbWU9XCJiYWxsb29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5iYWxsb29ufSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyBzdGF0ZS5iYWxsb29uQm9vbGVhbiA/IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgOiBCYWxsb29uV3JlbmNoUGljIH0gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17TmV4dFRlbXBsYXRlQ2xpY2tlZH0gY2xhc3NOYW1lPVwibmV4dC10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvZG93bi1hcnJvdy1lbXB0eS5wbmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e1ByZXZpb3VzVGVtcGxhdGVDbGlja2VkfSBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvdXAtYXJyb3ctZW1wdHkucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e21lbnVPdmVyZmxvd0NsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5tZW51fSBjbGFzc05hbWU9XCJtZW51LW92ZXJmbG93LXN2Z1wiIHNyYz17TWVudU92ZXJmbG93VXB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiIG9uQ2xpY2s9e25hdkNvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5uYXZ9IGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIvZWFydGgyLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpc3Rvcnktc3ZnXCIgc3JjPVwiL2hpc3Rvcnkuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNuYWtlLXN2Z1wiIHNyYz1cIi9zbmFrZS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17IHNvdW5kQ29udGFpbmVyQ2xpY2tlZCB9IGNsYXNzTmFtZT1cInNvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9XCIvc291bmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIFxuICAgICAgIC5jbnRyLWlubnIge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOjcycHg7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgfVxuICAgICAgICAuY250ciB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgfVxuXG4gICAgICAgLyoqKiBTVFlMRVMgKioqL1xuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgIHRvcDogMTRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgcmlnaHQ6IDE5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA4cHggN3B4IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA5cHggMHB4IDlweDtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2g6YWZ0ZXIge1xuXG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoLmFjdGl2ZSwgLnNlYXJjaDpob3ZlciB7XG4gICAgICAgICAgICB3aWR0aDogMTUyM3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoLmFjdGl2ZTphZnRlciwgLnNlYXJjaDpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwcHg7XG4gICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAuZG9jay1wYW5lbC1wYXJlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZG9jay1wYW5lbCB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgICAgIGhlaWdodDogODRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRvcDogMTYxcHg7XG4gICAgICAgICAgICBjb2xvcjogIzJGQTRFNztcbiAgICAgICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAwMDAwLCAjMjkyOTJjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDIzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuICAgICAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wYXJlbnQge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICAgICAganVzdGlmdHktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wbmcyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxNTM2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMjdweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm9lYS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNTEzcHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLmJhY2stYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3J3YXJkLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxlZnQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1MnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldmlvdXMtdGVtcGxhdGUtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5iYWxsb29uLXdyZW5jaC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo0OTJweDtcbiAgICAgICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgICAgICAubmF2LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogNTc0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tZW51LW92ZXJmbG93LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjY1NnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHdpcmwtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDczOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlzdG9yeS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo4MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuaXJpcy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo5MDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvdW5kLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogOTg0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0LXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjEwNjJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJpZ2h0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMTQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbmFrZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogMTQyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Dock.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f351fcbeadfafac11439.hot-update.js.map
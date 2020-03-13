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
  let isNewsInputContent = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isNewsContent);
  let inputValue;

  const setValue = () => {
    let input = document.querySelector('.inpt');
    input.addEventListener("keydown", event => {
      if (event.keyCode === 13) {
        console.log("enter clicked");
        let newsInputContent = input.value;
        console.log("where" + newsInputContent);
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["isNewsContent"])());
        console.log("lp" + isNewsInputContent);
      } // do something

    });
  };

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
  let isNewsBalloon = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isNewsBalloon);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isNewsBalloon) {
      let active = document.querySelector(".search");
      active.classList.add('active');
      let active2 = document.querySelector(".inpt");
      active2.focus(); //This changes the ballon wrench button

      let stately = state.balloonBoolean;
      stately = setState(isNewsBalloon);
    }

    let inptSearch = document.querySelector("#inpt_search");
    inptSearch.addEventListener('focus', event => {
      let active = document.querySelector(".search");
      active.classList.add('active');
    });
    inptSearch.addEventListener('blur', event => {
      let inactive = document.querySelector('.search');
      inactive.classList.remove('active');
    });
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
    setState({
      soundBoolean: !state.soundBoolean
    });
  };

  const twirlContainerClicked = event => {
    event.stopPropagation();
    setState({
      businessBoolean: !state.businessBoolean
    });

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
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["balloonClicked"])());
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
    className: "jsx-2285728595" + " " + "dock-panel-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx("div", {
    onClick: DockClicked,
    className: "jsx-2285728595" + " " + "dock-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2285728595" + " " + "search-bar-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2285728595" + " " + "cntr-innr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-2285728595" + " " + "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: inputValue,
    id: "inpt_search",
    onChange: setValue,
    autoFocus: true,
    minLength: "4",
    maxLength: "8",
    className: "jsx-2285728595" + " " + "inpt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }))), __jsx("img", {
    src: "/SearchBarEmpty.png",
    alt: "-",
    className: "jsx-2285728595" + " " + "search-bar-png2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2285728595" + " " + "oea-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2285728595" + " " + "oea-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Omnibox Extension App")), __jsx("div", {
    className: "jsx-2285728595" + " " + "oea-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("img", {
    src: "/back.svg",
    alt: "some",
    className: "jsx-2285728595" + " " + "back-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), __jsx("img", {
    src: "/forward.svg",
    alt: "some",
    className: "jsx-2285728595" + " " + "forward-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), __jsx("img", {
    onClick: props.iris,
    src: "/iris.svg",
    alt: "some",
    className: "jsx-2285728595" + " " + "iris-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), __jsx("div", {
    id: "twirl-container",
    onClick: twirlContainerClicked,
    className: "jsx-2285728595",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("img", {
    onClick: props.twirl,
    src: props.business ? TwirlPicFilled : TwirlPic,
    alt: "some",
    className: "jsx-2285728595" + " " + "twirl-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), __jsx("div", {
    onClick: balloonContainerClicked,
    className: "jsx-2285728595" + " " + "balloon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("img", {
    onClick: props.balloon,
    src: state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
    alt: "some",
    className: "jsx-2285728595" + " " + "balloon-wrench-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  })), __jsx("img", {
    onClick: NextTemplateClicked,
    src: "/down-arrow-empty.png",
    alt: "some",
    className: "jsx-2285728595" + " " + "next-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), __jsx("img", {
    onClick: PreviousTemplateClicked,
    src: "/up-arrow-empty.png",
    alt: "some",
    className: "jsx-2285728595" + " " + "previous-template-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), __jsx("div", {
    onClick: menuOverflowClicked,
    className: "jsx-2285728595",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("img", {
    onClick: props.menu,
    src: MenuOverflowUp,
    alt: "some",
    className: "jsx-2285728595" + " " + "menu-overflow-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  })), __jsx("div", {
    onClick: navContainerClicked,
    className: "jsx-2285728595" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx("img", {
    onClick: props.nav,
    src: "/earth2.png",
    alt: "some",
    className: "jsx-2285728595" + " " + "nav-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  })), __jsx("img", {
    src: "/history.svg",
    alt: "some",
    className: "jsx-2285728595" + " " + "history-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), __jsx("img", {
    src: "/snake.svg",
    alt: "some",
    className: "jsx-2285728595" + " " + "snake-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), __jsx("div", {
    onClick: soundContainerClicked,
    className: "jsx-2285728595" + " " + "sound-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("img", {
    src: "/sound.svg",
    alt: "some",
    className: "jsx-2285728595" + " " + "sound-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2285728595",
    __self: this
  }, ".cntr-innr.jsx-2285728595{display:table-cell;text-align:center;vertical-align:middle;position:relative;top:72px;left:25px;z-index:10;}.cntr.jsx-2285728595{display:table;z-index:10;}.search.jsx-2285728595{top:14px;position:relative;right:19px;height:65px;width:65px;box-sizing:border-box;margin:0px 8px 7px 0px;padding:7px 9px 0px 9px;border:3px solid black;border-radius:33px;-webkit-transition:all 200ms ease;transition:all 200ms ease;cursor:text;z-index:10;}.search.active.jsx-2285728595,.search.jsx-2285728595:hover{width:1520px;position:relative;margin-right:0px;}.search.active.jsx-2285728595:after,.search.jsx-2285728595:hover.jsx-2285728595:after{height:0px;}.search.jsx-2285728595 input.jsx-2285728595{width:100%;border:none;left:14x;bottom:4px;position:relative;box-sizing:border-box;font-family:Montserrat;font-size:34px;color:inherit;background:transparent;outline-width:0px;}.inpt.jsx-2285728595{position:relative;left:15px;}.dock-panel-parent.jsx-2285728595{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-2285728595{pointer-events:all;width:1536px;height:84px;font-family:Montserrat;font-size:23px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:100;background:linear-gradient(270deg,#000000,#29292c);background-size:400% 400%;-webkit-animation:AnimationName-jsx-2285728595 23s ease-in-out infinite;animation:AnimationName-jsx-2285728595 23s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-2285728595{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-2285728595{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-2285728595{pointer-events:all;justifty-items:center;}.search-bar-png2.jsx-2285728595{width:1536px;position:relative;padding-bottom:227px;}.oea-title.jsx-2285728595{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-2285728595{font-family:Montserrat;font-size:38px;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);bottom:7px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-2285728595{display:none;font-family:Montserrat;font-size:38px;position:relative;top:12px;width:1507px;height:76px;right:1513px;}.back-button-svg.jsx-2285728595{height:62px;width:62px;position:absolute;}.forward-button-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:76px;}.left-hexagons.jsx-2285728595{height:66px;width:260px;position:absolute;left:152px;}.previous-template-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:410px;}.balloon-wrench-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:492px;}.nav-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:574px;}.menu-overflow-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:656px;}.twirl-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:738px;}.history-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:820px;}.iris-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:902px;}.sound-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:984px;}.next-template-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:1062px;}.right-hexagons.jsx-2285728595{height:62px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-2285728595{height:62px;width:62px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1FvQixBQUs0QixBQVNELEFBTUwsQUFrQkksQUFLRixBQUdBLEFBY0csQUFNRCxBQU9NLEFBa0JRLEFBQ0csQUFDRCxBQUtOLEFBS1AsQUFNQyxBQUtVLEFBV1YsQUFZRCxBQUtBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQSxBQU9BLFNBL01DLEVBdUJ0QixBQUdpQixDQTJGRyxBQUtBLEFBT0MsQUFPRCxBQU9BLEFBT0EsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQUFPQyxBQU9ELENBOUxHLEFBaUVJLEFBc0JLLENBL0dqQixJQThDSixDQXZEUSxBQW9FRCxBQXlCYSxJQW5EakIsQUFtRVUsQUF3QkcsQUFLQSxBQWNBLEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQWNBLENBL0VBLEFBd0VBLENBL00zQixFQU1nQixBQXFFaUIsQUFFRSxDQS9CbkMsQ0E4Qm9DLEVBcERkLEFBaUVRLENBeERkLEFBMEJDLElBb0RPLENBeEhELENBZ0JOLEFBNkZhLEdBaEJ6QixBQXdDQSxBQUtjLEFBY0EsQUFPQSxBQVFDLEFBT0QsQUFPQyxBQU9ELEFBT0EsQUFRQyxBQU9BLEFBZUMsQ0FoRkQsQUF3RUMsQ0E5S0UsQ0EwQkssSUFuQzVCLEVBakJnQixDQXdHVyxBQWtCdEIsQ0F4Q0EsQUFzREEsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxDQTFEQSxBQWlFQSxBQWVBLENBUkEsS0F6TmMsRUFpQlEsQUEwQkEsTUEwQlAsRUFvREYsS0E5RE0sQUEyQ0gsR0FyR1osQ0F5SGEsSUFwREMsQ0FwREssQUEwQkEsR0ExQ2pCLEFBcUdOLEtBb0JnQixLQXhIVCxJQW9FTSxHQXFESSxHQXpHTyxBQTBCVCxDQXpDeEIsTUF5R3dCLEdBZ0JmLEtBL0VjLEdBZ0VRLE1BMUZDLEtBMkJBLE9BZ0V3RCxXQTFGNUQsS0EyQkQsU0FZSyxLQXRDRyxFQWtEUCxFQXZCeEIscUNBK0RzQyxtQkF6RnJCLFVBMEY0QixFQXpGOUIsV0FDZixXQXFDQyxDQVcyQixXQXlDdkIsd0ZBeENVLFVBQ0ksY0FDRCxhQUNELFlBQ3lDLG1EQUMzQiwwQkFDdUIsd0lBT3JEIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0RvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxuaW1wb3J0IHsgbmV4dFRlbXBsYXRlQ2xpY2tlZCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgcHJldmlvdXNUZW1wbGF0ZUNsaWNrZWQgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IGJhbGxvb25DbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBpc05ld3NDb250ZW50IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8vIFNvIHlvdSBub3cgd2UgbWFrZSBhbiBvbkNsaWNrIGV2ZW50IHdpdGggZmlyc3QgZ29hbCByZWdpc3RlcmluZyBhIGNvbnNvbGUubG9nKCkgXG5cbmNvbnN0IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCJcbmNvbnN0IEJhbGxvb25XcmVuY2hQaWMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuY29uc3QgVHdpcmxQaWNGaWxsZWQgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG5jb25zdCBUd2lybFBpYyA9IFwiL3R3aXJsLnN2Z1wiXG5jb25zdCBTb3VuZFBpY09uID0gXCIvc291bmQtb24uc3ZnXCJcbmNvbnN0IFNvdW5kUGljID0gXCIvc291bmQuc3ZnXCJcbmNvbnN0IE1lbnVPdmVyZmxvd1VwID0gXCJtZW51LW92ZXJmbG93LXVwLnBuZ1wiXG5jb25zdCBNZW51T3ZlcmZsb3dEb3duID0gXCJtZW51LW92ZXJmbG93LWRvd24ucG5nXCJcbmNvbnN0IFNvdW5kQ2xpY2sgPSBcIi9zb3VuZC1jbGljay5tcDNcIlxuY29uc3QgU291bmRPcGVuaW5nID0gXCIvc291bmQtb3BlbmluZy5tcDNcIlxuY29uc3QgU291bmRGYWlsdXJlID0gXCIvc291bmQtZmFpbHVyZTIubXAzXCJcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jayhwcm9wcykge1xuICAgIGxldCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgbGV0IGlzTmV3c0lucHV0Q29udGVudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0NvbnRlbnQpO1xuICAgIGxldCBpbnB1dFZhbHVlO1xuICAgIGNvbnN0IHNldFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdCcpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIGNsaWNrZWRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5ld3NJbnB1dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoZXJlXCIgKyBuZXdzSW5wdXRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChpc05ld3NDb250ZW50KCkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJscFwiICsgaXNOZXdzSW5wdXRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBsZXQgdGhlU3RhdGUgPSB7XG4gICAgICAgIGRvY2tCb29sZWFuOiB0cnVlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHNvdW5kQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOnRydWUsXG4gICAgICAgIG1lbnVPdmVyZmxvd0Jvb2xlYW46IHRydWUsXG4gICAgICAgIG5hdkJvb2xlYW46IHRydWVcbiAgICB9XG4gXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh0aGVTdGF0ZSk7XG4gICAgbGV0IHByZXZpb3VzQm9vbGVhbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzUHJldmlvdXNUZW1wbGF0ZSlcbiAgICBsZXQgaXNOZXdzQmFsbG9vbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0JhbGxvb24pXG4gICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc05ld3NCYWxsb29uKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIilcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGxldCBhY3RpdmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB0XCIpXG4gICAgICAgICAgICBhY3RpdmUyLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIC8vVGhpcyBjaGFuZ2VzIHRoZSBiYWxsb24gd3JlbmNoIGJ1dHRvblxuICAgICAgICAgICAgbGV0IHN0YXRlbHkgPSBzdGF0ZS5iYWxsb29uQm9vbGVhbjtcbiAgICAgICAgICAgIHN0YXRlbHkgPSBzZXRTdGF0ZShpc05ld3NCYWxsb29uKTsgXG4gICAgICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgbGV0IGlucHRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHRfc2VhcmNoXCIpO1xuICAgICAgICBpbnB0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIilcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgaW5wdFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5hY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJylcbiAgICAgICAgICAgIGluYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBEb2NrQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoeyBkb2NrQm9vbGVhbjogIXN0YXRlLmRvY2tCb29sZWFuIH0gKVxuICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGxldCBhdWRpb0Nsb3NpbmcgPSBuZXcgQXVkaW8oU291bmRDbGljaylcbiAgICAgICAgaWYgKHN0YXRlLmRvY2tCb29sZWFuKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgICAgICBhdWRpb0Nsb3NpbmcucGxheSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBTb3VuZENsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGF1ZGlvLnBsYXkoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3VuZEJvb2xlYW46ICFzdGF0ZS5zb3VuZEJvb2xlYW5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICFzdGF0ZS5idXNpbmVzc0Jvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBzb3VuZENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7c291bmRCb29sZWFuOiAhc3RhdGUuc291bmRCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5zb3VuZEJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3NvdW5kLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3VuZC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9zb3VuZC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmFsbG9vbkNvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZGlzcGF0Y2goYmFsbG9vbkNsaWNrZWQoKSk7XG5cbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7YmFsbG9vbkJvb2xlYW46ICFzdGF0ZS5iYWxsb29uQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24td3JlbmNoLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLXdyZW5jaC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVudU92ZXJmbG93Q2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHttZW51T3ZlcmZsb3dCb29sZWFuOiAhc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1vdmVyZmxvdy1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9tZW51LW92ZXJmbG93LWRvd24ucG5nXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1vdmVyZmxvdy1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9tZW51LW92ZXJmbG93LXVwLnBuZ1wiIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmF2Q29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAge25hdkJvb2xlYW46ICFzdGF0ZS5uYXZCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5uYXZCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICAgICAgdGl0bGUuc3R5bGUgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgTmV4dFRlbXBsYXRlQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGlzcGF0Y2gobmV4dFRlbXBsYXRlQ2xpY2tlZCgpKVxuICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kT3BlbmluZylcbiAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgIH1cblxuICAgIGNvbnN0IFByZXZpb3VzVGVtcGxhdGVDbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkaXNwYXRjaChwcmV2aW91c1RlbXBsYXRlQ2xpY2tlZCgpKVxuICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kT3BlbmluZylcbiAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWwtcGFyZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jay1wYW5lbFwiIG9uQ2xpY2s9e0RvY2tDbGlja2VkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wYXJlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY250ci1pbm5yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0VmFsdWV9IGlkPVwiaW5wdF9zZWFyY2hcIiBvbkNoYW5nZT17c2V0VmFsdWV9IGF1dG9Gb2N1cyBtaW5MZW5ndGg9XCI0XCIgbWF4TGVuZ3RoPVwiOFwiIGNsYXNzTmFtZT1cImlucHRcIj48L2lucHV0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wbmcyXCIgc3JjPVwiL1NlYXJjaEJhckVtcHR5LnBuZ1wiIGFsdD1cIi1cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS10aXRsZVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm9lYS10ZXh0XCI+T21uaWJveCBFeHRlbnNpb24gQXBwPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtY29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvbi1zdmdcIiBzcmM9XCIvYmFjay5zdmdcIiAgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvcndhcmQtYnV0dG9uLXN2Z1wiIHNyYz1cIi9mb3J3YXJkLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5pcmlzfSBjbGFzc05hbWU9XCJpcmlzLXN2Z1wiIHNyYz1cIi9pcmlzLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBpZD1cInR3aXJsLWNvbnRhaW5lclwiIG9uQ2xpY2s9e3R3aXJsQ29udGFpbmVyQ2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnR3aXJsfSBjbGFzc05hbWU9XCJ0d2lybC1zdmdcIiBzcmM9eyBwcm9wcy5idXNpbmVzcyA/IFR3aXJsUGljRmlsbGVkIDogVHdpcmxQaWN9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyBiYWxsb29uQ29udGFpbmVyQ2xpY2tlZCB9IGNsYXNzTmFtZT1cImJhbGxvb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLmJhbGxvb259IGNsYXNzTmFtZT1cImJhbGxvb24td3JlbmNoLXN2Z1wiIHNyYz17IHN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtOZXh0VGVtcGxhdGVDbGlja2VkfSBjbGFzc05hbWU9XCJuZXh0LXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi9kb3duLWFycm93LWVtcHR5LnBuZ1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17UHJldmlvdXNUZW1wbGF0ZUNsaWNrZWR9IGNsYXNzTmFtZT1cInByZXZpb3VzLXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi91cC1hcnJvdy1lbXB0eS5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17bWVudU92ZXJmbG93Q2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLm1lbnV9IGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPXtNZW51T3ZlcmZsb3dVcH0gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCIgb25DbGljaz17bmF2Q29udGFpbmVyQ2xpY2tlZH0+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLm5hdn0gY2xhc3NOYW1lPVwibmF2LXN2Z1wiIHNyYz1cIi9lYXJ0aDIucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlzdG9yeS1zdmdcIiBzcmM9XCIvaGlzdG9yeS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic25ha2Utc3ZnXCIgc3JjPVwiL3NuYWtlLnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsgc291bmRDb250YWluZXJDbGlja2VkIH0gY2xhc3NOYW1lPVwic291bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvdW5kLXN2Z1wiIHNyYz1cIi9zb3VuZC5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgXG4gICAgICAgLmNudHItaW5uciB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6NzJweDtcbiAgICAgICAgbGVmdDogMjVweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICB9XG4gICAgICAgIC5jbnRyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICB9XG5cbiAgICAgICAvKioqIFNUWUxFUyAqKiovXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICByaWdodDogMTlweDtcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDhweCA3cHggMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogN3B4IDlweCAwcHggOXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gICAgICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgICAgICAgICB6LWluZGV4OjEwO1xuICAgICAgIH1cbiAgICAgICAgLnNlYXJjaDphZnRlciB7XG5cbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2guYWN0aXZlLCAuc2VhcmNoOmhvdmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2guYWN0aXZlOmFmdGVyLCAuc2VhcmNoOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgIH1cbiAgICAgICAgLnNlYXJjaCBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGxlZnQ6IDE0eDtcbiAgICAgICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG91dGxpbmUtd2lkdGg6IDBweDtcbiAgICAgICB9XG5cbiAgICAgICAuaW5wdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC5kb2NrLXBhbmVsLXBhcmVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kb2NrLXBhbmVsIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4NHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdG9wOiAxNjFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMkZBNEU3O1xuICAgICAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMDAwMDAsICMyOTI5MmMpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gICAgICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMjNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXG4gICAgICAgIEBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gICAgICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuICAgICAgICAgICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ0eS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLXBuZzIge1xuICAgICAgICAgICAgICAgIHdpZHRoOjE1MzZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIyN3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2VhLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAub2VhLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2VhLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1MTNweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuYmFjay1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcndhcmQtYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3NnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGVmdC1oZXhhZ29ucyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTUycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmV2aW91cy10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo0MTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmJhbGxvb24td3JlbmNoLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjQ5MnB4O1xuICAgICAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgICAgIC5uYXYtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0OiA1NzRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1lbnUtb3ZlcmZsb3ctc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6NjU2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50d2lybC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNzM4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXN0b3J5LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjgyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5pcmlzLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjkwMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc291bmQtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0OiA5ODRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQtdGVtcGxhdGUtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6MTA2MnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmlnaHQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDExNDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNuYWtlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Dock.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.42e4f1bc932501a28ba1.hot-update.js.map
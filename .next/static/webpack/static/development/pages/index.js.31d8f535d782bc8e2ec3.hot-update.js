webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/BalloonWrench.js":
/*!*****************************************!*\
  !*** ./src/components/BalloonWrench.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BalloonWrench; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA/src/components/BalloonWrench.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // So if it loads, it dispatches an action, that is dispatched to a reducer setting isBalloon to true.

function BalloonWrench() {
  let balloon = "/balloon-wrench-view.png";
  let blank = "/cursor-blank.png";
  let dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  let selector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isBalloon);
  let selector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isNewsBalloon);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let balloonCursor = document.querySelectorAll(".balloon-cursor");

    if (selector2) {
      console.log("1" + selector2);
      balloonCursor.item(0).style.display = "none";
    }

    window.addEventListener("mousemove", cursor);
    balloonCursor.item(0).style.display = "flex";
    balloonCursor.item(0).cursor = "none";

    function cursor(e) {
      balloonCursor.item(0).style.top = e.pageY - 50 + 'px';
      balloonCursor.item(0).style.left = e.pageX - 580 + 'px';
    }

    document.body.onkeyup = function (event) {
      if (event.keyCode == 32) {
        window.removeEventListener("mousemove", cursor); // Goal here is to make dock change and also make div dissapear
        // let balloonCursor = document.querySelectorAll(".balloon-cursor");
        // balloonCursor.item(0).style.display = "none";
        // also if you press spacebar, it switches the balloon wrench icon to default..

        let balloonImage = document.querySelectorAll(".balloon-image");
        balloonImage.item(0).src = "/cursor-blank.png";
        balloonImage.item(0).cursor = "default";
        let balloonCursor = document.querySelectorAll(".balloon-cursor");
        balloonCursor.item(0).cursor = "none";
      }
    };
  });
  return __jsx("div", {
    className: "jsx-2701543013" + " " + "balloon-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2701543013" + " " + "balloon-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2701543013" + " " + "balloon-cursor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("img", {
    src: balloon,
    alt: "-",
    className: "jsx-2701543013" + " " + "balloon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2701543013",
    __self: this
  }, ".balloon-parent.jsx-2701543013{height:2048px;width:1536px;}.balloon-cursor.jsx-2701543013 img.jsx-2701543013{width:33px;height:33px;pointer-events:all;cursor:none;z-index:5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURnQixBQUdzQixBQWlCRixXQUNDLEdBakJDLFNBa0JNLElBakJ2QixlQWtCZ0IsWUFDSCxVQUNiIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IGJhbGxvb25DbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8vIFNvIGlmIGl0IGxvYWRzLCBpdCBkaXNwYXRjaGVzIGFuIGFjdGlvbiwgdGhhdCBpcyBkaXNwYXRjaGVkIHRvIGEgcmVkdWNlciBzZXR0aW5nIGlzQmFsbG9vbiB0byB0cnVlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWxsb29uV3JlbmNoKCkge1xuICAgIGxldCBiYWxsb29uID0gXCIvYmFsbG9vbi13cmVuY2gtdmlldy5wbmdcIlxuICAgIGxldCBibGFuayA9IFwiL2N1cnNvci1ibGFuay5wbmdcIjtcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGxldCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzQmFsbG9vbik7XG4gICAgbGV0IHNlbGVjdG9yMiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0JhbGxvb24pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGJhbGxvb25DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24tY3Vyc29yXCIpO1xuICAgICAgICBpZiAoc2VsZWN0b3IyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjFcIiArIHNlbGVjdG9yMilcbiAgICAgICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjdXJzb3IpO1xuICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuY3Vyc29yID0gXCJub25lXCI7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjdXJzb3IoZSkge1xuICAgICAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLnRvcCA9IChlLnBhZ2VZIC0gNTApICsgJ3B4JztcbiAgICAgICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS5sZWZ0ID0gKGUucGFnZVggLSA1ODApICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmtleXVwID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY3Vyc29yKTtcbiAgICAgICAgICAgICAgICAvLyBHb2FsIGhlcmUgaXMgdG8gbWFrZSBkb2NrIGNoYW5nZSBhbmQgYWxzbyBtYWtlIGRpdiBkaXNzYXBlYXJcbiAgICAgICAgICAgICAgICAvLyBsZXQgYmFsbG9vbkN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFsbG9vbi1jdXJzb3JcIik7XG4gICAgICAgICAgICAgICAgLy8gYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAvLyBhbHNvIGlmIHlvdSBwcmVzcyBzcGFjZWJhciwgaXQgc3dpdGNoZXMgdGhlIGJhbGxvb24gd3JlbmNoIGljb24gdG8gZGVmYXVsdC4uXG4gICAgICAgICAgICAgICAgbGV0IGJhbGxvb25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFsbG9vbi1pbWFnZVwiKTtcbiAgICAgICAgICAgICAgICBiYWxsb29uSW1hZ2UuaXRlbSgwKS5zcmMgPSBcIi9jdXJzb3ItYmxhbmsucG5nXCI7XG4gICAgICAgICAgICAgICAgYmFsbG9vbkltYWdlLml0ZW0oMCkuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGxvb25DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24tY3Vyc29yXCIpO1xuICAgICAgICAgICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5jdXJzb3IgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb24tcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uLWNoaWxkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uLWN1cnNvclwiPjxpbWcgY2xhc3NOYW1lPVwiYmFsbG9vbi1pbWFnZVwiIHNyYz17YmFsbG9vbn0gYWx0PVwiLVwiLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgIC5iYWxsb29uLXBhcmVudCB7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY2hpbGQge1xuXG4gICAgfVxuXG4gICAgLmJhbGxvb24taW1hZ2Uge1xuXG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIGltZyB7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgei1pbmRleDo1O1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXIge1xuICAgIFxuICAgIH1cblxuICAgIC50cmVlLWJ1dHRvbi1jb250YWluZXIge31cblxuXG4gIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/BalloonWrench.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.31d8f535d782bc8e2ec3.hot-update.js.map
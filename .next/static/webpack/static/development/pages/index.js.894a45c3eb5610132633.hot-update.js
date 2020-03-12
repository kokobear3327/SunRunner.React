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
    if (selector2) {
      balloonCursor.item(0).style.display = "none";
    }

    let balloonCursor = document.querySelectorAll(".balloon-cursor");
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
  }, ".balloon-parent.jsx-2701543013{height:2048px;width:1536px;}.balloon-cursor.jsx-2701543013 img.jsx-2701543013{width:33px;height:33px;pointer-events:all;cursor:none;z-index:5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURnQixBQUdzQixBQWlCRixXQUNDLEdBakJDLFNBa0JNLElBakJ2QixlQWtCZ0IsWUFDSCxVQUNiIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IGJhbGxvb25DbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8vIFNvIGlmIGl0IGxvYWRzLCBpdCBkaXNwYXRjaGVzIGFuIGFjdGlvbiwgdGhhdCBpcyBkaXNwYXRjaGVkIHRvIGEgcmVkdWNlciBzZXR0aW5nIGlzQmFsbG9vbiB0byB0cnVlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWxsb29uV3JlbmNoKCkge1xuICAgIGxldCBiYWxsb29uID0gXCIvYmFsbG9vbi13cmVuY2gtdmlldy5wbmdcIlxuICAgIGxldCBibGFuayA9IFwiL2N1cnNvci1ibGFuay5wbmdcIjtcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGxldCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzQmFsbG9vbik7XG4gICAgbGV0IHNlbGVjdG9yMiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0JhbGxvb24pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdG9yMikge1xuICAgICAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgYmFsbG9vbkN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFsbG9vbi1jdXJzb3JcIik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGN1cnNvcik7XG4gICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5jdXJzb3IgPSBcIm5vbmVcIjtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGN1cnNvcihlKSB7XG4gICAgICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUudG9wID0gKGUucGFnZVkgLSA1MCkgKyAncHgnO1xuICAgICAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLmxlZnQgPSAoZS5wYWdlWCAtIDU4MCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ua2V5dXAgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjdXJzb3IpO1xuICAgICAgICAgICAgICAgIC8vIEdvYWwgaGVyZSBpcyB0byBtYWtlIGRvY2sgY2hhbmdlIGFuZCBhbHNvIG1ha2UgZGl2IGRpc3NhcGVhclxuICAgICAgICAgICAgICAgIC8vIGxldCBiYWxsb29uQ3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYWxsb29uLWN1cnNvclwiKTtcbiAgICAgICAgICAgICAgICAvLyBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIC8vIGFsc28gaWYgeW91IHByZXNzIHNwYWNlYmFyLCBpdCBzd2l0Y2hlcyB0aGUgYmFsbG9vbiB3cmVuY2ggaWNvbiB0byBkZWZhdWx0Li5cbiAgICAgICAgICAgICAgICBsZXQgYmFsbG9vbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYWxsb29uLWltYWdlXCIpO1xuICAgICAgICAgICAgICAgIGJhbGxvb25JbWFnZS5pdGVtKDApLnNyYyA9IFwiL2N1cnNvci1ibGFuay5wbmdcIjtcbiAgICAgICAgICAgICAgICBiYWxsb29uSW1hZ2UuaXRlbSgwKS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICBsZXQgYmFsbG9vbkN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFsbG9vbi1jdXJzb3JcIik7XG4gICAgICAgICAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLmN1cnNvciA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1wYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb24tY2hpbGRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb24tY3Vyc29yXCI+PGltZyBjbGFzc05hbWU9XCJiYWxsb29uLWltYWdlXCIgc3JjPXtiYWxsb29ufSBhbHQ9XCItXCIvPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmJhbGxvb24tcGFyZW50IHtcbiAgICAgICAgaGVpZ2h0OjIwNDhweDtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jaGlsZCB7XG5cbiAgICB9XG5cbiAgICAuYmFsbG9vbi1pbWFnZSB7XG5cbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jdXJzb3Ige1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jdXJzb3IgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgIGhlaWdodDogMzNweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB6LWluZGV4OjU7XG4gICAgfVxuXG5cbiAgICAuY29uc3VtZXItYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgXG4gICAgfVxuXG4gICAgLnRyZWUtYnV0dG9uLWNvbnRhaW5lciB7fVxuXG5cbiAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/BalloonWrench.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.894a45c3eb5610132633.hot-update.js.map
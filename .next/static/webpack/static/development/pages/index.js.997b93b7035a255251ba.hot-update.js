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
  let balloonCursor = document.querySelectorAll(".balloon-cursor");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (selector2) {
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
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2701543013" + " " + "balloon-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2701543013" + " " + "balloon-cursor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    src: balloon,
    alt: "-",
    className: "jsx-2701543013" + " " + "balloon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2701543013",
    __self: this
  }, ".balloon-parent.jsx-2701543013{height:2048px;width:1536px;}.balloon-cursor.jsx-2701543013 img.jsx-2701543013{width:33px;height:33px;pointer-events:all;cursor:none;z-index:5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RnQixBQUdzQixBQWlCRixXQUNDLEdBakJDLFNBa0JNLElBakJ2QixlQWtCZ0IsWUFDSCxVQUNiIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IGJhbGxvb25DbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8vIFNvIGlmIGl0IGxvYWRzLCBpdCBkaXNwYXRjaGVzIGFuIGFjdGlvbiwgdGhhdCBpcyBkaXNwYXRjaGVkIHRvIGEgcmVkdWNlciBzZXR0aW5nIGlzQmFsbG9vbiB0byB0cnVlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWxsb29uV3JlbmNoKCkge1xuICAgIGxldCBiYWxsb29uID0gXCIvYmFsbG9vbi13cmVuY2gtdmlldy5wbmdcIlxuICAgIGxldCBibGFuayA9IFwiL2N1cnNvci1ibGFuay5wbmdcIjtcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGxldCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzQmFsbG9vbik7XG4gICAgbGV0IHNlbGVjdG9yMiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0JhbGxvb24pO1xuICAgIGxldCBiYWxsb29uQ3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYWxsb29uLWN1cnNvclwiKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0b3IyKSB7XG4gICAgICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY3Vyc29yKTtcbiAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLmN1cnNvciA9IFwibm9uZVwiO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY3Vyc29yKGUpIHtcbiAgICAgICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS50b3AgPSAoZS5wYWdlWSAtIDUwKSArICdweCc7XG4gICAgICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUubGVmdCA9IChlLnBhZ2VYIC0gNTgwKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkub25rZXl1cCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGN1cnNvcik7XG4gICAgICAgICAgICAgICAgLy8gR29hbCBoZXJlIGlzIHRvIG1ha2UgZG9jayBjaGFuZ2UgYW5kIGFsc28gbWFrZSBkaXYgZGlzc2FwZWFyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGJhbGxvb25DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24tY3Vyc29yXCIpO1xuICAgICAgICAgICAgICAgIC8vIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgLy8gYWxzbyBpZiB5b3UgcHJlc3Mgc3BhY2ViYXIsIGl0IHN3aXRjaGVzIHRoZSBiYWxsb29uIHdyZW5jaCBpY29uIHRvIGRlZmF1bHQuLlxuICAgICAgICAgICAgICAgIGxldCBiYWxsb29uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24taW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgYmFsbG9vbkltYWdlLml0ZW0oMCkuc3JjID0gXCIvY3Vyc29yLWJsYW5rLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJhbGxvb25JbWFnZS5pdGVtKDApLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIGxldCBiYWxsb29uQ3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYWxsb29uLWN1cnNvclwiKTtcbiAgICAgICAgICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuY3Vyc29yID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uLXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jaGlsZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jdXJzb3JcIj48aW1nIGNsYXNzTmFtZT1cImJhbGxvb24taW1hZ2VcIiBzcmM9e2JhbGxvb259IGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YCBcbiAgICAuYmFsbG9vbi1wYXJlbnQge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgIH1cblxuICAgIC5iYWxsb29uLWNoaWxkIHtcblxuICAgIH1cblxuICAgIC5iYWxsb29uLWltYWdlIHtcblxuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciBpbWcge1xuICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6NTtcbiAgICB9XG5cblxuICAgIC5jb25zdW1lci1idXR0b24tY29udGFpbmVyIHtcbiAgICBcbiAgICB9XG5cbiAgICAudHJlZS1idXR0b24tY29udGFpbmVyIHt9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/BalloonWrench.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.997b93b7035a255251ba.hot-update.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "9tOE":
/***/ (function(module, exports) {



/***/ }),

/***/ "HDD2":
/***/ (function(module, exports) {



/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/consumer/consumer.css
var consumer = __webpack_require__("yrdz");

// EXTERNAL MODULE: ./src/shared/consumer-dock/consumer-dock.css
var consumer_dock = __webpack_require__("9tOE");

// EXTERNAL MODULE: ./src/shared/consumer-financials-buttons/balance-button.css
var balance_button = __webpack_require__("HDD2");

// EXTERNAL MODULE: ./src/shared/tree-button/tree-button.css
var tree_button = __webpack_require__("z1T+");

// EXTERNAL MODULE: ./src/shared/lawyers-button/lawyers-button.css
var lawyers_button = __webpack_require__("goae");

// EXTERNAL MODULE: ./src/shared/doctors-button/doctors-button.css
var doctors_button = __webpack_require__("PcVm");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/reducers/isNews.js
const isNews = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_NEWS':
      return state = true;

    case 'MOUSED_OFF':
      return state = false;

    default:
      return 1;
  }
};

/* harmony default export */ var reducers_isNews = (isNews);
// CONCATENATED MODULE: ./src/reducers/isDashboard.js
const isDashboard = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_DASHBOARD':
      return state = true;

    case 'MOUSED_OFF':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ var reducers_isDashboard = (isDashboard);
// CONCATENATED MODULE: ./src/reducers/isNextTemplate.js
const isNextTemplate = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_NEXT_TEMPLATE':
      return state = true;

    case 'CLICKED_NEXT_TEMPLATE2':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ var reducers_isNextTemplate = (isNextTemplate);
// CONCATENATED MODULE: ./src/reducers/isPreviousTemplate.js
const isPreviousTemplate = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_PREVIOUS_TEMPLATE':
      return state = true;

    case 'CLICKED_PREVIOUS_TEMPLATE2':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ var reducers_isPreviousTemplate = (isPreviousTemplate);
// CONCATENATED MODULE: ./src/reducers/isBalloon.js
const isBalloon = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_BALLOON':
      return state = true;

    case 'CLICKED_BALLOON2':
      return state = false;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_isBalloon = (isBalloon);
// CONCATENATED MODULE: ./src/reducers/isNewsBalloon.js
const isNewsBalloon = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_NEWS_BALLOON':
      return state = true;

    case 'CLICKED_NEWS_BALLOON2':
      return state = false;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_isNewsBalloon = (isNewsBalloon);
// CONCATENATED MODULE: ./src/reducers/isNewsContent.js
const isNewsContent = (state = " ", action) => {
  switch (action.type) {
    case 'IS_NEWS_CONTENT':
      console.log("IsNewContent hit");
      state = action.inputText;
      console.log(state);
      return state;

    case 'IS_NEWS_CONTENT2':
      return state;

    default:
      return 2;
  }
};

/* harmony default export */ var reducers_isNewsContent = (isNewsContent); // Action:
// export const isNewsContent = (inputText) => {
//     return 
//         type: 'IS_NEWS_CONTENT',
//         inputText: inputText
//     }
// }
// const isNewsContent = (state = "", action) => {
//     switch (action.type) {
//         case 'IS_NEWS_CONTENT':
//             console.log("IsNewContent hit");
//             let inputValue = action.newsContent;
//             state = inputValue;    
//             return state;
//         case 'IS_NEWS_CONTENT2':
//             return state
//         default: 
//             return 2;
//     }
// };
// export default isNewsContent;
// CONCATENATED MODULE: ./src/reducers/index.js








const allReducers = Object(external_redux_["combineReducers"])({
  isNews: reducers_isNews,
  isDashboard: reducers_isDashboard,
  isNextTemplate: reducers_isNextTemplate,
  isPreviousTemplate: reducers_isPreviousTemplate,
  isBalloon: reducers_isBalloon,
  isNewsBalloon: reducers_isNewsBalloon,
  isNewsContent: reducers_isNewsContent
});
/* harmony default export */ var reducers = (allReducers);
// CONCATENATED MODULE: ./src/pages/_app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });

var __jsx = external_react_default.a.createElement;
// pages/_app.js









const store = Object(external_redux_["createStore"])(reducers);
function MyApp({
  Component,
  pageProps
}) {
  return __jsx(external_react_redux_["Provider"], {
    store: store
  }, __jsx(Component, pageProps));
}

/***/ }),

/***/ "PcVm":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "goae":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "yrdz":
/***/ (function(module, exports) {



/***/ }),

/***/ "z1T+":
/***/ (function(module, exports) {



/***/ })

/******/ });
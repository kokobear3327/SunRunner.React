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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es7.weak-map.of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js");
__webpack_require__(/*! ../modules/es7.weak-map.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").WeakMap;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: mousedOver, mousedOff, nextTemplateClicked, previousTemplateClicked, balloonClicked, newsBalloonClicked, isNewsEditing, isEditing, isNewsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedOver", function() { return mousedOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedOff", function() { return mousedOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTemplateClicked", function() { return nextTemplateClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousTemplateClicked", function() { return previousTemplateClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balloonClicked", function() { return balloonClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsBalloonClicked", function() { return newsBalloonClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewsEditing", function() { return isNewsEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditing", function() { return isEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewsContent", function() { return isNewsContent; });
const mousedOver = button => {
  switch (button) {
    case "dashboard":
      return {
        type: 'MOUSED_OVER_DASHBOARD'
      };

    case "news":
      return {
        type: 'MOUSED_OVER_NEWS'
      };

    default:
      return true;
  }
};
const mousedOff = button => {
  switch (button) {
    case "news":
      return {
        type: "MOUSED_OFF"
      };

    case "dashboard":
      return {
        type: "MOUSED_OFF"
      };

    default:
      return true;
  }
};
const nextTemplateClicked = () => {
  return {
    type: 'CLICKED_NEXT_TEMPLATE'
  };
};
const previousTemplateClicked = () => {
  return {
    type: 'CLICKED_PREVIOUS_TEMPLATE'
  };
};
const balloonClicked = () => {
  return {
    type: 'CLICKED_BALLOON'
  };
};
const newsBalloonClicked = () => {
  return {
    type: 'CLICKED_NEWS_BALLOON'
  };
};
const isNewsEditing = () => {
  return {
    type: "IS_NEWS_EDITING"
  };
};
const isEditing = button => {
  switch (button) {
    case "news":
      return "IS_NEWS_EDITING";

    default:
      return button;
  }
};
const isNewsContent = inputText => {
  return {
    type: "IS_NEWS_CONTENT",
    inputText: inputText
  };
}; // export const isNewsContent = (inputText) => {
//     return 
//         type: 'IS_NEWS_CONTENT',
//         inputText: inputText
//     }
// }

/***/ }),

/***/ "./src/components/BalloonWrench.js":
/*!*****************************************!*\
  !*** ./src/components/BalloonWrench.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BalloonWrench; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/BalloonWrench.js";

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
    let balloonImage = document.querySelectorAll(".balloon-image");

    if (selector2) {
      balloonCursor.item(0).style.display = "none";
      balloonImage.item(0).style.display = "none";
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
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2701543013" + " " + "balloon-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2701543013" + " " + "balloon-cursor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("img", {
    src: balloon,
    alt: "-",
    className: "jsx-2701543013" + " " + "balloon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2701543013",
    __self: this
  }, ".balloon-parent.jsx-2701543013{height:2048px;width:1536px;}.balloon-cursor.jsx-2701543013 img.jsx-2701543013{width:33px;height:33px;pointer-events:all;cursor:none;z-index:5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURnQixBQUdzQixBQWlCRixXQUNDLEdBakJDLFNBa0JNLElBakJ2QixlQWtCZ0IsWUFDSCxVQUNiIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0JhbGxvb25XcmVuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IGJhbGxvb25DbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8vIFNvIGlmIGl0IGxvYWRzLCBpdCBkaXNwYXRjaGVzIGFuIGFjdGlvbiwgdGhhdCBpcyBkaXNwYXRjaGVkIHRvIGEgcmVkdWNlciBzZXR0aW5nIGlzQmFsbG9vbiB0byB0cnVlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWxsb29uV3JlbmNoKCkge1xuICAgIGxldCBiYWxsb29uID0gXCIvYmFsbG9vbi13cmVuY2gtdmlldy5wbmdcIlxuICAgIGxldCBibGFuayA9IFwiL2N1cnNvci1ibGFuay5wbmdcIjtcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGxldCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzQmFsbG9vbik7XG4gICAgbGV0IHNlbGVjdG9yMiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0JhbGxvb24pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGJhbGxvb25DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24tY3Vyc29yXCIpO1xuICAgICAgICBsZXQgYmFsbG9vbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYWxsb29uLWltYWdlXCIpO1xuICAgICAgICBpZiAoc2VsZWN0b3IyKSB7XG4gICAgICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYmFsbG9vbkltYWdlLml0ZW0oMCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY3Vyc29yKTtcbiAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgYmFsbG9vbkN1cnNvci5pdGVtKDApLmN1cnNvciA9IFwibm9uZVwiO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY3Vyc29yKGUpIHtcbiAgICAgICAgICAgIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS50b3AgPSAoZS5wYWdlWSAtIDUwKSArICdweCc7XG4gICAgICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuc3R5bGUubGVmdCA9IChlLnBhZ2VYIC0gNTgwKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkub25rZXl1cCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGN1cnNvcik7XG4gICAgICAgICAgICAgICAgLy8gR29hbCBoZXJlIGlzIHRvIG1ha2UgZG9jayBjaGFuZ2UgYW5kIGFsc28gbWFrZSBkaXYgZGlzc2FwZWFyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGJhbGxvb25DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24tY3Vyc29yXCIpO1xuICAgICAgICAgICAgICAgIC8vIGJhbGxvb25DdXJzb3IuaXRlbSgwKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgLy8gYWxzbyBpZiB5b3UgcHJlc3Mgc3BhY2ViYXIsIGl0IHN3aXRjaGVzIHRoZSBiYWxsb29uIHdyZW5jaCBpY29uIHRvIGRlZmF1bHQuLlxuICAgICAgICAgICAgICAgIGxldCBiYWxsb29uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhbGxvb24taW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgYmFsbG9vbkltYWdlLml0ZW0oMCkuc3JjID0gXCIvY3Vyc29yLWJsYW5rLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJhbGxvb25JbWFnZS5pdGVtKDApLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIGxldCBiYWxsb29uQ3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYWxsb29uLWN1cnNvclwiKTtcbiAgICAgICAgICAgICAgICBiYWxsb29uQ3Vyc29yLml0ZW0oMCkuY3Vyc29yID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uLXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jaGlsZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jdXJzb3JcIj48aW1nIGNsYXNzTmFtZT1cImJhbGxvb24taW1hZ2VcIiBzcmM9e2JhbGxvb259IGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YCBcbiAgICAuYmFsbG9vbi1wYXJlbnQge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgIH1cblxuICAgIC5iYWxsb29uLWNoaWxkIHtcblxuICAgIH1cblxuICAgIC5iYWxsb29uLWltYWdlIHtcblxuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciBpbWcge1xuICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6NTtcbiAgICB9XG5cblxuICAgIC5jb25zdW1lci1idXR0b24tY29udGFpbmVyIHtcbiAgICBcbiAgICB9XG5cbiAgICAudHJlZS1idXR0b24tY29udGFpbmVyIHt9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/BalloonWrench.js */"));
}

/***/ }),

/***/ "./src/components/Business.js":
/*!************************************!*\
  !*** ./src/components/Business.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Business; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _shared_business_business_remaining_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/business/business-remaining-buttons */ "./src/shared/business/business-remaining-buttons.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Business.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // import LegalInfoButton from '../shared/legal-info-button/legal-info-button'
// import ReviewsButton from '../shared/reviews-button/reviews-button';
// import NewsButton from '../shared/news-button/news-button';
// import InvestmentsButton from '../shared/investments-button/investments-button';
// import DashboardButton from '../shared/dashboard-button/dashboard-button';
// import ProductsButtons from '../shared/products-buttons/products-buttons';
// import MessagingButtons from '../shared/messaging-buttons/messaging-buttons';
// import ConsumerFinancialsButtons from '../shared/consumer-financials-buttons/consumer-financials-buttons';
// import RemainingButtons from '../shared/remaining-buttons/remaining-buttons';
// .consumer-image-container {
//     transform: translate(50%, 0%);
//     height: 2000px!important;
//     margin-bottom: 2000px;
// }
// .consumer-image {
//     top: 699px;
//     position: relative;
//     z-index: 1;
// }
// .consumer-image-background {
//     width: 1536px;
//     height: 1868px;
//     background: linear-gradient(270deg, #000000, #02091b);
//     background-size: 400% 400%;
//     animation: AnimationName 10s ease-in-out infinite;
//     z-index:0;
//     display: flex;
//     transform: translate(0%, -50%);
//     bottom: 227px;
//     left: 1px;
//     position: relative;
// @keyframes AnimationName {
//     0%{background-position:0% 50%}
//     50%{background-position:100% 50%}
//     100%{background-position:0% 50%}
// }
// }

let consumer = "/Consumer.png";
let business = "/view-business.png";
class Business extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    _defineProperty(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    _defineProperty(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    _defineProperty(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx("div", {
      className: "jsx-3581350573" + " " + "business-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3581350573" + " " + "business-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3581350573" + " " + "business-image-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("img", {
      src: business,
      alt: "text",
      className: "jsx-3581350573" + " " + "business-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3581350573" + " " + "business-image-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3581350573" + " " + "business-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_shared_business_business_remaining_buttons__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3581350573",
      __self: this
    }, ".business-parent.jsx-3581350573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:60px;overflow-y:none;position:relative;margin-left:319px;bottom:6px;}.business-image.jsx-3581350573{width:1536px;height:2007px;position:relative;margin-left:838px;bottom:43px;z-index:1;}.business-button-container.jsx-3581350573{position:relative;bottom:2039px;}.business-image-background.jsx-3581350573{width:1536px;height:2001px;background:linear-gradient(270deg,#000000,#02091b);background-size:400% 400%;-webkit-animation:AnimationName-jsx-3581350573 10s ease-in-out infinite;animation:AnimationName-jsx-3581350573 10s ease-in-out infinite;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);bottom:1001px;left:837px;position:relative;}@-webkit-keyframes AnimationName-jsx-3581350573{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-3581350573{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.business-button-container.jsx-3581350573{padding-top:94px;padding-left:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0J1c2luZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHZ0IsQUFHc0IsQUFZQSxBQVNLLEFBS0wsQUFjYyxBQUNHLEFBQ0QsQUFLWixhQWxDSCxBQWNBLElBcUJHLENBMUJILFNBUkksQUFjbUMsQUFZekIsQUFFRSxFQURDLEdBbEJuQyxFQTBCQSxXQWxDc0Isa0JBQ04sV0FmTyxDQWdCVCxHQVlnQixPQVg5QixtQkFZcUQsK0RBNUIxQix5RUE2QmQsVUFDSSxnQkE3Qk0sb0JBQ0gsZ0JBQ0Usa0JBQ0EsSUEyQlksY0ExQm5CLFdBRWYsMEVBeUJrQixjQUNILFdBQ08sa0JBUXRCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0J1c2luZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyZWVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3RyZWUtYnV0dG9uL3RyZWUtYnV0dG9uJztcbmltcG9ydCBNZWRpY2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbWVkaWNhbC1pbmZvLWJ1dHRvbi9tZWRpY2FsLWluZm8tYnV0dG9uJztcbmltcG9ydCBEb2N0b3JzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kb2N0b3JzLWJ1dHRvbi9kb2N0b3JzLWJ1dHRvbic7XG5pbXBvcnQgTGF3eWVyc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGF3eWVycy1idXR0b24vbGF3eWVycy1idXR0b24nO1xuaW1wb3J0IEJ1c2luZXNzUmVtYWluaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvYnVzaW5lc3MvYnVzaW5lc3MtcmVtYWluaW5nLWJ1dHRvbnMnO1xuLy8gaW1wb3J0IExlZ2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGVnYWwtaW5mby1idXR0b24vbGVnYWwtaW5mby1idXR0b24nXG4vLyBpbXBvcnQgUmV2aWV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmV2aWV3cy1idXR0b24vcmV2aWV3cy1idXR0b24nO1xuLy8gaW1wb3J0IE5ld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL25ld3MtYnV0dG9uL25ld3MtYnV0dG9uJztcbi8vIGltcG9ydCBJbnZlc3RtZW50c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvaW52ZXN0bWVudHMtYnV0dG9uL2ludmVzdG1lbnRzLWJ1dHRvbic7XG4vLyBpbXBvcnQgRGFzaGJvYXJkQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kYXNoYm9hcmQtYnV0dG9uL2Rhc2hib2FyZC1idXR0b24nO1xuLy8gaW1wb3J0IFByb2R1Y3RzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcHJvZHVjdHMtYnV0dG9ucy9wcm9kdWN0cy1idXR0b25zJztcbi8vIGltcG9ydCBNZXNzYWdpbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdpbmctYnV0dG9ucy9tZXNzYWdpbmctYnV0dG9ucyc7XG4vLyBpbXBvcnQgQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucyc7XG4vLyBpbXBvcnQgUmVtYWluaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcmVtYWluaW5nLWJ1dHRvbnMnO1xuXG5cbi8vIC5jb25zdW1lci1pbWFnZS1jb250YWluZXIge1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCUpO1xuLy8gICAgIGhlaWdodDogMjAwMHB4IWltcG9ydGFudDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMDAwcHg7XG5cbi8vIH1cblxuXG4vLyAuY29uc3VtZXItaW1hZ2Uge1xuLy8gICAgIHRvcDogNjk5cHg7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHotaW5kZXg6IDE7XG4vLyB9XG5cbi8vIC5jb25zdW1lci1pbWFnZS1iYWNrZ3JvdW5kIHtcbi8vICAgICB3aWR0aDogMTUzNnB4O1xuLy8gICAgIGhlaWdodDogMTg2OHB4O1xuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMDAwMDAsICMwMjA5MWIpO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuLy8gICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4vLyAgICAgei1pbmRleDowO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuLy8gICAgIGJvdHRvbTogMjI3cHg7XG4vLyAgICAgbGVmdDogMXB4O1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4vLyBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuLy8gICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuLy8gICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuLy8gICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4vLyB9XG4vLyB9XG5cbmxldCBjb25zdW1lciA9IFwiL0NvbnN1bWVyLnBuZ1wiXG5sZXQgYnVzaW5lc3MgPSBcIi92aWV3LWJ1c2luZXNzLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1c2luZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgYnVzaW5lc3NDbGlja2VkUGFyZW50KHZhbHVlKSB7XG5cbiAgICB9XG4gICAgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgIH1cblxuICAgIHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgbWVudVwiICsgdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1wYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWNoaWxkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1pbWFnZS1jb250YWluZXJcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImJ1c2luZXNzLWltYWdlXCIgc3JjPXsgYnVzaW5lc3MgfSBhbHQ9XCJ0ZXh0XCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWltYWdlLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8QnVzaW5lc3NSZW1haW5pbmdCdXR0b25zPjwvQnVzaW5lc3NSZW1haW5pbmdCdXR0b25zPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmJ1c2luZXNzLXBhcmVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTo2MHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMTlweDtcbiAgICAgICAgYm90dG9tOiA2cHg7XG5cbiAgICB9XG5cbiAgICAuYnVzaW5lc3MtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDIwMDdweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogODM4cHg7XG4gICAgICAgIGJvdHRvbTogNDNweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuYnVzaW5lc3MtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAyMDM5cHg7XG4gICAgfVxuXG4gICAgLmJ1c2luZXNzLWltYWdlLWJhY2tncm91bmQge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDIwMDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzAyMDkxYik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAgICAgYm90dG9tOiAxMDAxcHg7XG4gICAgICAgIGxlZnQ6IDgzN3B4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuICAgIEBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gICAgICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idXNpbmVzcy1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDk0cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuQnVzaW5lc3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgYnBpOiBkYXRhLmJwaVxuICB9O1xufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Business.js */"));
  }

}

Business.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
};

/***/ }),

/***/ "./src/components/Business2.js":
/*!*************************************!*\
  !*** ./src/components/Business2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Business2; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/legal-info-button/legal-info-button */ "./src/shared/legal-info-button/legal-info-button.js");
/* harmony import */ var _shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/reviews-button/reviews-button */ "./src/shared/reviews-button/reviews-button.js");
/* harmony import */ var _shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/news-button/news-button */ "./src/shared/news-button/news-button.js");
/* harmony import */ var _shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/investments-button/investments-button */ "./src/shared/investments-button/investments-button.js");
/* harmony import */ var _shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/dashboard-button/dashboard-button */ "./src/shared/dashboard-button/dashboard-button.js");
/* harmony import */ var _shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/products-buttons/products-buttons */ "./src/shared/products-buttons/products-buttons.js");
/* harmony import */ var _shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/messaging-buttons/messaging-buttons */ "./src/shared/messaging-buttons/messaging-buttons.js");
/* harmony import */ var _shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/consumer-financials-buttons */ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.js");
/* harmony import */ var _shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/remaining-buttons/remaining-buttons */ "./src/shared/remaining-buttons/remaining-buttons.js");
/* harmony import */ var _shared_products_buttons_goods_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/products-buttons/goods-button */ "./src/shared/products-buttons/goods-button.js");
/* harmony import */ var _shared_products_buttons_services_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/products-buttons/services-button */ "./src/shared/products-buttons/services-button.js");
/* harmony import */ var _shared_messaging_buttons_mailbox_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/messaging-buttons/mailbox-button */ "./src/shared/messaging-buttons/mailbox-button.js");
/* harmony import */ var _shared_messaging_buttons_compose_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/messaging-buttons/compose-button */ "./src/shared/messaging-buttons/compose-button.js");
/* harmony import */ var _shared_consumer_financials_buttons_income_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/income-button */ "./src/shared/consumer-financials-buttons/income-button.js");
/* harmony import */ var _shared_consumer_financials_buttons_balance_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/balance-button */ "./src/shared/consumer-financials-buttons/balance-button.js");
/* harmony import */ var _shared_consumer_financials_buttons_flows_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/flows-button */ "./src/shared/consumer-financials-buttons/flows-button.js");
/* harmony import */ var _shared_remaining_buttons_applications_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/remaining-buttons/applications-button */ "./src/shared/remaining-buttons/applications-button.js");
/* harmony import */ var _shared_remaining_buttons_projects_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/remaining-buttons/projects-button */ "./src/shared/remaining-buttons/projects-button.js");
/* harmony import */ var _shared_remaining_buttons_templates_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/remaining-buttons/templates-button */ "./src/shared/remaining-buttons/templates-button.js");
/* harmony import */ var _shared_remaining_buttons_drive_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/remaining-buttons/drive-button */ "./src/shared/remaining-buttons/drive-button.js");
/* harmony import */ var _shared_remaining_buttons_network_one_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/remaining-buttons/network-one-button */ "./src/shared/remaining-buttons/network-one-button.js");
/* harmony import */ var _shared_remaining_buttons_network_two_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../shared/remaining-buttons/network-two-button */ "./src/shared/remaining-buttons/network-two-button.js");
/* harmony import */ var _shared_remaining_buttons_wall_one_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared/remaining-buttons/wall-one-button */ "./src/shared/remaining-buttons/wall-one-button.js");
/* harmony import */ var _shared_remaining_buttons_wall_two_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../shared/remaining-buttons/wall-two-button */ "./src/shared/remaining-buttons/wall-two-button.js");
/* harmony import */ var _shared_remaining_buttons_social_media_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../shared/remaining-buttons/social-media-button */ "./src/shared/remaining-buttons/social-media-button.js");
/* harmony import */ var _shared_remaining_buttons_health_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../shared/remaining-buttons/health-button */ "./src/shared/remaining-buttons/health-button.js");
/* harmony import */ var _shared_remaining_buttons_calendars_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../shared/remaining-buttons/calendars-button */ "./src/shared/remaining-buttons/calendars-button.js");
/* harmony import */ var _shared_remaining_buttons_phone_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../shared/remaining-buttons/phone-button */ "./src/shared/remaining-buttons/phone-button.js");
/* harmony import */ var _shared_remaining_buttons_messages_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../shared/remaining-buttons/messages-button */ "./src/shared/remaining-buttons/messages-button.js");
/* harmony import */ var _shared_remaining_buttons_research_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../shared/remaining-buttons/research-button */ "./src/shared/remaining-buttons/research-button.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Business2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
let blank = "/blank.png";
class Business2 extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    _defineProperty(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    _defineProperty(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    _defineProperty(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  componentDidMount() {
    document.addEventListener("mouseover", function () {
      let newsButton = document.querySelector(".news-button-container");
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx("div", {
      className: "jsx-673760622" + " " + "business-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "business-child2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "business-image-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      src: blank,
      alt: "text",
      className: "jsx-673760622" + " " + "business-image2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-673760622" + " " + "business-image-background2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "tree-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "tree-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-tree.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "tree-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "medical-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "medical-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-medical-info.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "medical-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "doctors-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "doctors-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-doctors.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "doctors-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "lawyers-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "lawyers-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-lawyers.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "lawyers-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "legal-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "legal-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-legal-info.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "legal-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "reviews-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "reviews-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-reviews.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "reviews-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "news-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "news-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-news.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "news-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "dashboard-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "dashboard-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-dashboard.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "dashboard-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "goods-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "goods-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-goods.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "goods-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx(_shared_products_buttons_goods_button__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "services-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "services-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-services.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "services-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx(_shared_products_buttons_services_button__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "investments-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "investments-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-investments.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "investments-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "income-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "income-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-income.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "income-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx(_shared_consumer_financials_buttons_income_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "balance-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "balance-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-balance.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "balance-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx(_shared_consumer_financials_buttons_balance_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "flows-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "flows-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-flows.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "flows-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx(_shared_consumer_financials_buttons_flows_button__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "compose-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "compose-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-compose.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "compose-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx(_shared_messaging_buttons_compose_button__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "mailbox-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "mailbox-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-mailbox.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "mailbox-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, __jsx(_shared_messaging_buttons_mailbox_button__WEBPACK_IMPORTED_MODULE_20__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "applications-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "applications-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-applications.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "applications-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_applications_button__WEBPACK_IMPORTED_MODULE_25__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "projects-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "projects-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-projects.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "projects-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_projects_button__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "templates-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "ptemplatesicon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-templates.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "templates-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_templates_button__WEBPACK_IMPORTED_MODULE_27__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "social-media-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "social-media-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-social-media.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "social-media-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_social_media_button__WEBPACK_IMPORTED_MODULE_33__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "network1-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "network1-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-network1.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "network1-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_network_one_button__WEBPACK_IMPORTED_MODULE_29__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "network2-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "network2-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-network2.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "network2-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_network_two_button__WEBPACK_IMPORTED_MODULE_30__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "wall1-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "wall1-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-wall1.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "wall1-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_wall_one_button__WEBPACK_IMPORTED_MODULE_31__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "wall2-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "wall2-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-wall2.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "wall2-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_wall_two_button__WEBPACK_IMPORTED_MODULE_32__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "analytics-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "analytics-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-health.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "analytics-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_health_button__WEBPACK_IMPORTED_MODULE_34__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "calendars-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "calendars-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-calendar.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "calendars-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_calendars_button__WEBPACK_IMPORTED_MODULE_35__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "phone-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "phone-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-phone.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "phone-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_phone_button__WEBPACK_IMPORTED_MODULE_36__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "research-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "research-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-research.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "research-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_research_button__WEBPACK_IMPORTED_MODULE_38__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "drive-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "drive-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-drive.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "drive-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_drive_button__WEBPACK_IMPORTED_MODULE_28__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-673760622" + " " + "messages-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673760622" + " " + "messages-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-messages.png",
      alt: "-",
      className: "jsx-673760622",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673760622" + " " + "messages-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_messages_button__WEBPACK_IMPORTED_MODULE_37__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "673760622",
      __self: this
    }, ".business-parent2.jsx-673760622{height:2048px;width:1536px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;right:157px;bottom:3px justify-content:center;}.business-child2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2048px;width:1536px;position:relative;left:312px;}.tree-parent2.jsx-673760622{position:relative;right:2971px;width:130px;height:130px;color:yellow;top:260px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.tree-icon2.jsx-673760622{width:130px;height:130px;position:relative;}.tree-button2.jsx-673760622{position:relative;top:345px;right:42px;}.medical-info-parent2.jsx-673760622{position:relative;right:2636px;width:130px;height:130px;top:131px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.medical-info-icon2.jsx-673760622{width:130px!important;height:130px;color:yellow;}.medical-info-button2.jsx-673760622{position:relative;top:536px;left:293px;}.doctors-info-parent2.jsx-673760622{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.doctors-info-icon2.jsx-673760622{width:130px!important;height:130px;}.doctors-info-button2.jsx-673760622{position:relative;top:723px;left:259px;}.lawyers-info-parent2.jsx-673760622{position:relative;right:2032px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:130px;}.lawyers-info-icon2.jsx-673760622{width:130px!important;height:130px;}.lawyers-info-button2.jsx-673760622{position:relative;top:764px;right:224px;}.legal-info-parent2.jsx-673760622{position:relative;right:1768px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:260px;}.legal-info-icon2.jsx-673760622{width:130px!important;height:130px;}.legal-info-button2.jsx-673760622{position:relative;top:671px;right:286px;white-space:nowrap;}.news-parent2.jsx-673760622{position:relative;right:2971px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:230px;}.news-icon2.jsx-673760622{width:130px!important;height:130px;}.news-button2.jsx-673760622{position:relative;top:1496px;right:240px;white-space:nowrap;}.investments-parent2.jsx-673760622{position:relative;right:2636px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:750px;}.investments-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.investments-button2.jsx-673760622{position:relative;top:1035px;right:5px;white-space:nowrap;}.income-parent2.jsx-673760622{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:880px;}.income-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.income-button2.jsx-673760622{position:relative;top:1582px;right:761px;white-space:nowrap;}.balance-parent2.jsx-673760622{position:relative;right:2032px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1010px;}.balance-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.balance-button2.jsx-673760622{position:relative;top:1456px;right:733px;white-space:nowrap;}.flows-parent2.jsx-673760622{position:relative;right:1768px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1139px;}.flows-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.flows-button2.jsx-673760622{position:relative;top:1580px;right:705px;white-space:nowrap;}.dashboard-parent2.jsx-673760622{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:73px;}.dashboard-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.dashboard-button2.jsx-673760622{position:relative;top:2178px;left:6px;white-space:nowrap;}.social-media-parent2.jsx-673760622{position:relative;right:2636px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1634px;}.social-media-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.social-media-button2.jsx-673760622{position:relative;top:1363px;left:466px;white-space:nowrap;}.applications-parent2.jsx-673760622{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1244px;}.applications-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.applications-button2.jsx-673760622{position:relative;top:1186px;right:264px;white-space:nowrap;}.projects-parent2.jsx-673760622{position:relative;right:1768px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1373px;}.projects-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.projects-button2.jsx-673760622{position:relative;top:1516px;right:986px;white-space:nowrap;}.templates-parent2.jsx-673760622{position:relative;right:2032px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1503px;}.templates-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.templates-button2.jsx-673760622{position:relative;top:1356px;right:814px;white-space:nowrap;}.goods-parent2.jsx-673760622{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;top:84px;}.goods-icon2.jsx-673760622{width:130px!important;height:130px;}.goods-button2.jsx-673760622{position:relative;top:1800px;left:23px;white-space:nowrap;}.mailbox-parent2.jsx-673760622{position:relative;right:2636px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:827px;}.mailbox-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.mailbox-button2.jsx-673760622{position:relative;top:1500px;right:215px;white-space:nowrap;}.compose-parent2.jsx-673760622{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:696px;}.compose-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;}.compose-button2.jsx-673760622{position:relative;top:1500px;right:224px;white-space:nowrap;}.calendars-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;bottom:1222px;right:2032px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:2114px;}.calendars-icon2.jsx-673760622{width:130px!important;height:130px;left:72px;bottom:3px;position:relative;}.calendars-button2.jsx-673760622{position:relative;top:1125px;left:27px;white-space:nowrap;}.phone-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:1768px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:2242px;}.phone-icon2.jsx-673760622{width:130px!important;height:130px;left:52px;position:relative;}.phone-button2.jsx-673760622{position:relative;top:1547px;left:237px;white-space:nowrap;}.services-parent2.jsx-673760622{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;top:241px;}.services-icon2.jsx-673760622{width:130px!important;height:130px;}.services-button2.jsx-673760622{position:relative;top:1800px;left:8px;white-space:nowrap;}.messages-parent2.jsx-673760622{position:relative;right:2636px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:2357px;}.messages-icon2.jsx-673760622{width:130px!important;height:130px;}.messages-button2.jsx-673760622{position:relative;top:1588px;left:147px;white-space:nowrap;}.research-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2334px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:2097px;}.research-icon2.jsx-673760622{width:130px!important;height:130px;left:61px;position:relative;}.research-button2.jsx-673760622{position:relative;top:1964px;left:372px;white-space:nowrap;}.wall1-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2032px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1447px;}.wall1-icon2.jsx-673760622{width:130px!important;height:130px;left:65px;position:relative;}.wall1-button2.jsx-673760622{position:relative;top:2132px;right:254px;white-space:nowrap;}.wall2-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:1768px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1577px;}.wall2-icon2.jsx-673760622{width:130px!important;height:130px;left:65px;position:relative;}.wall2-button2.jsx-673760622{position:relative;top:1992px;right:76px;white-space:nowrap;}.reviews-parent2.jsx-673760622{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;top:1048px;}.reviews-icon2.jsx-673760622{width:130px!important;height:130px;}.reviews-button2.jsx-673760622{position:relative;top:1458px;left:296px;white-space:nowrap;}.analytics-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;bottom:1419px;right:2636px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;}.analytics-icon2.jsx-673760622{width:130px!important;height:130px;position:relative;left:65px;}.analytics-button2.jsx-673760622{position:relative;left:730px;top:1443px;}.drive-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2334px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1932px;}.drive-icon2.jsx-673760622{width:130px!important;height:130px;left:61px;position:relative;}.drive-button2.jsx-673760622{position:relative;top:1963px;left:232px;white-space:nowrap;}.network1-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2032px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:893px;}.network1-icon2.jsx-673760622{width:130px!important;height:130px;left:69px;position:relative;}.network1-button2.jsx-673760622{position:relative;top:2147px;left:78px;white-space:nowrap;}.network2-parent2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:1768px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1021px;}.network2-icon2.jsx-673760622{width:130px!important;height:130px;left:64px;position:relative;}.network2-button2.jsx-673760622{position:relative;top:1993px;left:173px;white-space:nowrap;}.business-image-container2.jsx-673760622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.business-image2.jsx-673760622{position:relative;z-index:0;height:2000px;width:1536px;left:1px;}.consumer-image-background2.jsx-673760622{width:1536px;height:1940px;background:linear-gradient(270deg,#000000,#02091b);background-size:400% 400%;-webkit-animation:AnimationName-jsx-673760622 10s ease-in-out infinite;animation:AnimationName-jsx-673760622 10s ease-in-out infinite;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);top:1020px;right:1535px;position:relative;}@-webkit-keyframes AnimationName-jsx-673760622{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-673760622{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0J1c2luZXNzMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyWGdCLEFBR3NCLEFBVUEsQUFpQkssQUFXTixBQU1NLEFBU0EsQUFVSSxBQU1KLEFBUUEsQUFZSSxBQUtKLEFBUUEsQUFVSSxBQU1KLEFBT0EsQUFVSSxBQUtKLEFBVUEsQUFVSSxBQUtKLEFBUUEsQUFVSSxBQU9KLEFBT0EsQUFVSSxBQU9KLEFBUUEsQUFVSSxBQU9KLEFBUUEsQUFVSSxBQU9KLEFBY0osQUFXSSxBQU1KLEFBT0EsQUFXSSxBQU1KLEFBUUEsQUFVSSxBQU9KLEFBT0EsQUFXSSxBQU9KLEFBT0EsQUFVSSxBQU9KLEFBYUEsQUFXSSxBQU1KLEFBT0EsQUFVSSxBQU9KLEFBT0EsQUFVSSxBQU9KLEFBT0wsQUFhUyxBQVFKLEFBT0wsQUFZUyxBQU9KLEFBV0EsQUFXSSxBQUtKLEFBUUEsQUFXSSxBQUtKLEFBVUwsQUFZUyxBQU9KLEFBUUQsQUFZUyxBQU9KLEFBUUwsQUFZUyxBQU9KLEFBV0EsQUFXSSxBQU1KLEFBT0wsQUFZUyxBQU9KLEFBTUwsQUFZUyxBQU9KLEFBUUwsQUFZUyxBQU9KLEFBUUwsQUFZUyxBQU9KLEFBdUJMLEFBS0ssQUFRTCxBQWNjLEFBQ0csQUFDRCxZQXJ5QmpCLENBc3hCRSxDQTV6QkQsSUEyQkEsQUFpQkgsQUFTRyxBQWdCSCxBQVFHLEFBaUJILEFBUUcsQUFnQkgsQUFPRyxBQWVILEFBVUcsQUFlRixBQVFFLEFBaUJGLEFBT0UsQUFpQkYsQUFRRSxBQWlCRixBQVFFLEFBaUJGLEFBY0YsQUFpQkYsQUFPRSxBQWlCRixBQVFFLEFBaUJGLEFBT0UsQUFrQkYsQUFPRSxBQWlCRixBQWFFLEFBaUJGLEFBT0UsQUFpQkYsQUFPRSxBQWlCRixBQTRCQSxBQTBCQSxBQVdFLEFBZ0JGLEFBUUUsQUFnQkYsQUE2QkEsQUEyQkksQUEyQkEsQUFXRSxBQWlCRixBQTBCQSxBQXlCQSxBQTJCQSxBQTJCQSxBQTRCRCxJQXJ2QkUsQUEwQkEsQUF1QkEsQUF1QkEsQUF5QkEsQUF1QkEsQUF3QkEsQUF5QkEsQUF5QkEsQUFnQ0osQUF3QkEsQUF3QkEsQUF5QkEsQUF3QkEsQUErQkEsQUF1QkEsQUF3QkEsQUEyQkEsQUEyQkEsQUE2QkEsQUF3QkEsQUEyQkEsQUEyQkksQUEyQkEsQUE2QkEsQUF5QkEsQUF5QkEsQUEyQkEsQUEyQkEsR0ExdUJNLEVBdENOLEFBNHpCeUMsQUFZekIsQUFFRSxDQTl4Qm5CLEFBeUJBLEFBeUJBLEFBd0JDLEFBc0JBLEFBd3FCRSxDQS9vQkYsQUF5QkYsQUF3QkUsQUF5QkEsQUF5QkEsQUErQlAsQUF3QkUsQUF5QkMsQUF5QkEsQUF3QkEsQUE4QkYsQUF3QkUsQUF3QkEsQUE0QkYsQUEwQkMsQUEyQkYsQUF3QkUsQUE2QkEsQUEyQkssQUEyQkQsQUE0QkEsQUEwQkEsQUF5QkEsQUEyQkQsQUEyQkMsQUFpRG9CLEVBOXlCbkIsQUEwQkEsQUF3QkEsQUF5QkEsQUF1QkEsQUF5QkEsQUF1QkEsQUF3QkEsQUF5QkEsQUF5QkEsQUErQkosQUF3QkEsQUF5QkEsQUF3QkEsQUF5QkEsQUE4QkEsQUF3QkEsQUF3QkEsQUFrRkEsQUF3QkEsQUE4R0ksSUEvbEJDLEFBMEJqQixBQXdCQSxBQXNCQSxBQXlCQSxBQXdCcUIsQUF3QkEsQUF5QkEsQUF5QkEsQUErQkosQUF3QkEsQUF5QkEsQUF5QkEsQUF3QkEsQUErQnJCLEFBQUMsQUF1Qm9CLEFBd0JBLEFBMEJQLEFBMkJBLEFBNkJkLEFBd0JBLEFBMkJhLEFBMkJLLEFBMkJBLEFBOEJkLEFBd0JzQixBQXlCVCxBQTJCQSxBQTJCQSxHQXplTSxBQWlRQSxDQTVmbkIsQUF5QkEsQUF5QkEsQUFnR3VCLEFBeU9KLEFBNEVBLEFBMFFJLENBdm9CdkIsQUFzQnVCLEFBbUxKLEFBOE1BLEFBbURBLEFBNkJBLEFBc0RJLEFBNEJBLEFBMEJ2QixBQXlCdUIsQUFzREEsQ0FubkJBLEFBaURBLEFBeUJBLEFBeUJBLEFBZ0ZKLEFBeUJBLEFBd0JBLEFBc0RBLEFBd0JBLEFBaUtJLENBNExOLENBenhCRCxBQVdoQixBQWVpQixBQXdCQSxBQXlCRCxBQXVCQSxBQXlCQSxBQXVCQSxBQXdCQSxBQXlCQSxBQXlCQSxBQStCSixBQXdCQSxBQXlCQSxBQXlCQSxBQXdCQSxBQThCQSxBQXdCQSxBQXdCQSxBQWtGQSxBQXdCQSxBQThHSSxFQW5MTCxBQTJCTSxBQWdGQyxBQTJCRyxBQTJCQSxBQStFQyxBQTJCQSxBQTJCQSxHQWx0QnRCLEtBeUhBLEFBd0JBLEFBeUJBLEFBeUJBLEFBK0JKLEFBd0JBLEFBeUJBLEFBeUJBLEFBd0JBLEFBc0RBLEFBd0JBLEFBaVBrQixFQW1IRCxDQXp4QkksQUEwQkgsQUF3QlUsQUF5QlAsQUF1QkEsQUF5QkEsQUF1QkEsQUF3QkEsQUF5QkEsQUF5QkEsQUErQkosQUF3QkEsQUF5QkEsQUF5QkEsQUF3QkEsQUE4QkEsQUF3QkEsQUF3QkEsQUFxQ0ksQUE2Q0osQUF3QkEsQUE4R0ksQ0F2WHJCLEFBaVFJLENBMVdBLEFBeU9KLEFBNEVBLEFBMFFRLENBam5CSixBQW1MSixBQThNQSxBQW1ESSxBQTZCQSxBQXNEQSxBQTRCQSxBQW1ESSxBQXNEQSxDQW5uQkosQUFpREEsQUF5QkEsQUF5QkEsQUFnRkosQUF5QkEsQUF3QkEsQUFzREEsQUF3QkEsQUFpS0ksR0FsSEosQUFnRkEsQUEyQkksQUEyQkEsQUFzREEsQUF5QkEsQUEyQkEsQUEyQkEsQ0FvQ0EsRUEvdkJpQixHQTFCSCxBQTJQRCxBQXdCQSxBQXdHQSxBQWtJQSxBQXdCQSxBQThHSSxLQXhwQkEsQUFvZEUsQUFpQnZCLEFBV3VCLEFBZ0ZBLEFBMkJJLEFBMkJBLEFBc0RBLEFBeUJBLEFBMkJBLEFBMkJBLEFBMEN2QixFQTl0QnlCLEVBNnVCSyxDQTl4QmIsU0FyQkEsU0F1RU8sSUFoRkYsQUFVQSxHQW16QitCLGFBNXVCcEMsRUFoRkQsQUFVRCxXQUVmLEFBMkZjLEFBdUJBLEFBeUJBLEFBdUJBLEFBd0JBLEFBeUJBLEFBeUJBLEFBZ0ZKLEFBeUJBLEFBd0JBLEFBc0RBLEFBd0JBLENBcmNpQixTQXFEYixDQWlERyxBQXVCQSxBQXlCQSxBQXVCQSxBQXdCQSxBQXlCQyxBQXlCQSxBQWdGSixBQXlCQSxBQXdCQSxBQXNERCxBQXdCQSxFQWhMSCxBQXdCQSxBQXdHQSxBQWtJQSxBQXdCQSxBQThHSSxRQXhtQmQsRUExQmMsQ0EyRWQsQUF1QkEsQUF5QkEsQUF1QkEsQUF3QkEsQUFpRlksQUF3QkUsQUF3R0wsQUF3QmIsQUF3QkEsQUFrRmMsQUF3QkksQUE4R0MsQ0FoY2YsQUF5QkEsQUFnRkosQUF5QkEsQUF3QkEsUUErQkEsQ0EzWEksQUE2ZkosQ0F6aEJJLEFBK3BCQSxDQXhZSixDQWtNc0IsQUE0QkEsQUFnRkEsQUEyQkksQUEyQkEsQUFzREEsQUF5QkEsQUEyQkEsQUEyQkEsQ0FqZDFCLEFBa1FBLGlCQXZGa0IsQUE0QkQsQUFnRkEsQUEyQkksQUEyQkEsQUFzREMsQUF5QkQsQUEyQkEsQUEyQkEsTUFuckJGLE9BeWFRLEFBZ0ZBLEFBMkJJLEFBMkJBLEFBK0VBLEFBMkJBLEFBMkJBLENBdlNkLEFBd05JLEdBcG1CakIsVUE2WXVCLEFBd05JLDBCQXNJZCxVQUNJLGlEQW5VTCxBQWdGQSxBQTJCSSxBQTJCQSxBQStFQSxBQTJCQSxBQTJCQSxZQTFRSCxBQWdGQSxBQTJCSSxBQTJCQSxBQStFQSxBQTJCQSxBQTJCQSxFQXZTTCxBQXdOSSxXQTNMTixBQWdGQSxBQTJCSSxBQTJCQSxBQStFQSxBQTJCQSxBQTJCQSxBQXVEb0IsQ0E5VnJCLEFBd05JLFNBM0xILEFBZ0ZBLEFBMkJJLEFBMkJBLEFBK0VBLEFBMkJELEFBMkJDLElBdlNSLEFBd05JLFNBcURkLENBNVFjLEFBNEJsQixBQWdGQSxBQTJCSSxBQTJCQSxBQXNEQSxBQXlCQSxBQXNEQSxjQXRTSiw2REE0Vm1CLFdBQ0UsYUFDSyxrQkFRdEIiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9TdW5SdW5uZXIvc3JjL2NvbXBvbmVudHMvQnVzaW5lc3MyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyZWVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3RyZWUtYnV0dG9uL3RyZWUtYnV0dG9uJztcbmltcG9ydCBNZWRpY2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbWVkaWNhbC1pbmZvLWJ1dHRvbi9tZWRpY2FsLWluZm8tYnV0dG9uJztcbmltcG9ydCBEb2N0b3JzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kb2N0b3JzLWJ1dHRvbi9kb2N0b3JzLWJ1dHRvbic7XG5pbXBvcnQgTGF3eWVyc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGF3eWVycy1idXR0b24vbGF3eWVycy1idXR0b24nO1xuaW1wb3J0IExlZ2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGVnYWwtaW5mby1idXR0b24vbGVnYWwtaW5mby1idXR0b24nXG5pbXBvcnQgUmV2aWV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmV2aWV3cy1idXR0b24vcmV2aWV3cy1idXR0b24nO1xuaW1wb3J0IE5ld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL25ld3MtYnV0dG9uL25ld3MtYnV0dG9uJztcbmltcG9ydCBJbnZlc3RtZW50c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvaW52ZXN0bWVudHMtYnV0dG9uL2ludmVzdG1lbnRzLWJ1dHRvbic7XG5pbXBvcnQgRGFzaGJvYXJkQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kYXNoYm9hcmQtYnV0dG9uL2Rhc2hib2FyZC1idXR0b24nO1xuaW1wb3J0IFByb2R1Y3RzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcHJvZHVjdHMtYnV0dG9ucy9wcm9kdWN0cy1idXR0b25zJztcbmltcG9ydCBNZXNzYWdpbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdpbmctYnV0dG9ucy9tZXNzYWdpbmctYnV0dG9ucyc7XG5pbXBvcnQgQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucyc7XG5pbXBvcnQgUmVtYWluaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcmVtYWluaW5nLWJ1dHRvbnMnO1xuaW1wb3J0IEdvb2RzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9wcm9kdWN0cy1idXR0b25zL2dvb2RzLWJ1dHRvbic7XG5pbXBvcnQgU2VydmljZXNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3Byb2R1Y3RzLWJ1dHRvbnMvc2VydmljZXMtYnV0dG9uJztcbmltcG9ydCBNYWlsYm94QnV0dG9uIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdpbmctYnV0dG9ucy9tYWlsYm94LWJ1dHRvbic7XG5pbXBvcnQgQ29tcG9zZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvY29tcG9zZS1idXR0b24nO1xuaW1wb3J0IEluY29tZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zL2luY29tZS1idXR0b24nO1xuaW1wb3J0IEJhbGFuY2VCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9iYWxhbmNlLWJ1dHRvbic7XG5pbXBvcnQgRmxvd3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9mbG93cy1idXR0b24nO1xuaW1wb3J0IEFwcGxpY2F0aW9uc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvYXBwbGljYXRpb25zLWJ1dHRvbidcbmltcG9ydCBQcm9qZWN0c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcHJvamVjdHMtYnV0dG9uJ1xuaW1wb3J0IFRlbXBsYXRlc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvdGVtcGxhdGVzLWJ1dHRvbic7XG5pbXBvcnQgRHJpdmVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL2RyaXZlLWJ1dHRvbic7XG5pbXBvcnQgTmV0d29ya09uZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvbmV0d29yay1vbmUtYnV0dG9uJztcbmltcG9ydCBOZXR3b3JrVHdvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9uZXR3b3JrLXR3by1idXR0b24nO1xuaW1wb3J0IFdhbGxPbmVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3dhbGwtb25lLWJ1dHRvbic7XG5pbXBvcnQgV2FsbFR3b0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvd2FsbC10d28tYnV0dG9uJztcbmltcG9ydCBTb2NpYWxNZWRpYUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvc29jaWFsLW1lZGlhLWJ1dHRvbic7XG5pbXBvcnQgQW5hbHl0aWNzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9oZWFsdGgtYnV0dG9uJztcbmltcG9ydCBDYWxlbmRhcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL2NhbGVuZGFycy1idXR0b24nO1xuaW1wb3J0IFBob25lQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9waG9uZS1idXR0b24nO1xuaW1wb3J0IE1lc3NhZ2VzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9tZXNzYWdlcy1idXR0b24nO1xuaW1wb3J0IFJlc2VhcmNoQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9yZXNlYXJjaC1idXR0b24nO1xuXG4vLyBTbyB5b3Ugd2FudCBpdCB0byBjb25kaXRpb25hbGx5IHJlbmRlciB0aGUgY29uc3VtZXIgb3IgYnVzaW5lc3MgY29tcG9uZW50IGNvbnRpbmdlbnQgb24gd2hldGhlciBidXNpbmVzcyBpcyB0cnVlXG4vLyBTYW1lIHdpdGggdGhlIGRvY2tcblxubGV0IGNvbnN1bWVyID0gXCIvQ29uc3VtZXIucG5nXCJcbmxldCBidXNpbmVzcyA9IFwiL0J1c2luZXNzLnBuZ1wiXG5sZXQgYmxhbmsgPSBcIi9ibGFuay5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXNpbmVzczIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbmV3c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3cy1idXR0b24tY29udGFpbmVyXCIpXG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIG1lbnVCb29sZWFuOiBmYWxzZVxuICAgIH1cblxuICAgIGJ1c2luZXNzQ2xpY2tlZFBhcmVudCh2YWx1ZSkge1xuXG4gICAgfVxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBtZW51Qm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIG1lbnVcIiArIHRoaXMuc3RhdGUubWVudUJvb2xlYW4pXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtY2hpbGQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzcy1pbWFnZS1jb250YWluZXIyXCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJidXNpbmVzcy1pbWFnZTJcIiBzcmM9eyBibGFuayB9IGFsdD1cInRleHRcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MtaW1hZ2UtYmFja2dyb3VuZDJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tdHJlZS5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1idXR0b24yXCI+XG4gICAgPFRyZWVCdXR0b24+PC9UcmVlQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpY2FsLWluZm8tcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWNhbC1pbmZvLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tbWVkaWNhbC1pbmZvLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpY2FsLWluZm8tYnV0dG9uMlwiPlxuICAgIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3JzLWluZm8tcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9ycy1pbmZvLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tZG9jdG9ycy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9ycy1pbmZvLWJ1dHRvbjJcIj5cbiAgICA8RG9jdG9yc0J1dHRvbj48L0RvY3RvcnNCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxhd3llcnMtaW5mby1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXd5ZXJzLWluZm8taWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1sYXd5ZXJzLnBuZ1wiIGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXd5ZXJzLWluZm8tYnV0dG9uMlwiPlxuICAgIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnYWwtaW5mby1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZWdhbC1pbmZvLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tbGVnYWwtaW5mby5wbmdcIiBhbHQ9XCItXCIvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnYWwtaW5mby1idXR0b24yXCI+XG4gICAgPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3cy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tcmV2aWV3cy5wbmdcIiBhbHQ9XCItXCIvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3cy1idXR0b24yXCI+XG4gICAgPFJldmlld3NCdXR0b24+PC9SZXZpZXdzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLW5ld3MucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uMlwiPlxuICAgIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLWRhc2hib2FyZC5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ1dHRvbjJcIj5cbiAgICA8RGFzaGJvYXJkQnV0dG9uPjwvRGFzaGJvYXJkQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tZ29vZHMucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzLWJ1dHRvbjJcIj5cbiAgICA8R29vZHNCdXR0b24+PC9Hb29kc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLXNlcnZpY2VzLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy1idXR0b24yXCI+XG4gICAgPFNlcnZpY2VzQnV0dG9uPjwvU2VydmljZXNCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVzdG1lbnRzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVzdG1lbnRzLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28taW52ZXN0bWVudHMucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVzdG1lbnRzLWJ1dHRvbjJcIj5cbiAgICA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmNvbWUtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jb21lLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28taW5jb21lLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmNvbWUtYnV0dG9uMlwiPlxuICAgIDxJbmNvbWVCdXR0b24+PC9JbmNvbWVCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2UtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZS1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLWJhbGFuY2UucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2UtYnV0dG9uMlwiPlxuICAgIDxCYWxhbmNlQnV0dG9uPjwvQmFsYW5jZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvd3MtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvd3MtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1mbG93cy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvd3MtYnV0dG9uMlwiPlxuICAgIDxGbG93c0J1dHRvbj48L0Zsb3dzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb3NlLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvc2UtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1jb21wb3NlLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb3NlLWJ1dHRvbjJcIj5cbiAgICA8Q29tcG9zZUJ1dHRvbj48L0NvbXBvc2VCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haWxib3gtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbGJveC1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLW1haWxib3gucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haWxib3gtYnV0dG9uMlwiPlxuICAgIDxNYWlsYm94QnV0dG9uPjwvTWFpbGJveEJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwbGljYXRpb25zLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcGxpY2F0aW9ucy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLWFwcGxpY2F0aW9ucy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwbGljYXRpb25zLWJ1dHRvbjJcIj5cbiAgICA8QXBwbGljYXRpb25zQnV0dG9uPjwvQXBwbGljYXRpb25zQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLXByb2plY3RzLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1idXR0b24yXCI+XG4gICAgPFByb2plY3RzQnV0dG9uPjwvUHJvamVjdHNCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlcy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdGVtcGxhdGVzaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby10ZW1wbGF0ZXMucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlcy1idXR0b24yXCI+XG4gICAgPFRlbXBsYXRlc0J1dHRvbj48L1RlbXBsYXRlc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLXNvY2lhbC1tZWRpYS5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWJ1dHRvbjJcIj5cbiAgICA8U29jaWFsTWVkaWFCdXR0b24+PC9Tb2NpYWxNZWRpYUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV0d29yazEtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV0d29yazEtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi9sb2dvLW5ldHdvcmsxLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXR3b3JrMS1idXR0b24yXCI+XG4gICAgPE5ldHdvcmtPbmVCdXR0b24+PC9OZXR3b3JrT25lQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXR3b3JrMi1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXR3b3JrMi1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiL2xvZ28tbmV0d29yazIucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldHdvcmsyLWJ1dHRvbjJcIj5cbiAgICA8TmV0d29ya1R3b0J1dHRvbj48L05ldHdvcmtUd29CdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGwxLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGwxLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIvbG9nby13YWxsMS5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbDEtYnV0dG9uMlwiPlxuICAgIDxXYWxsT25lQnV0dG9uPjwvV2FsbE9uZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbDItcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbDItaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi9sb2dvLXdhbGwyLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsMi1idXR0b24yXCI+XG4gICAgPFdhbGxUd29CdXR0b24+PC9XYWxsVHdvQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5hbHl0aWNzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuYWx5dGljcy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiL2xvZ28taGVhbHRoLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmFseXRpY3MtYnV0dG9uMlwiPlxuICAgIDxBbmFseXRpY3NCdXR0b24+PC9BbmFseXRpY3NCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFycy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhcnMtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1jYWxlbmRhci5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJzLWJ1dHRvbjJcIj5cbiAgICA8Q2FsZW5kYXJzQnV0dG9uPjwvQ2FsZW5kYXJzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZS1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZS1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLXBob25lLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZS1idXR0b24yXCI+XG4gICAgPFBob25lQnV0dG9uPjwvUGhvbmVCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZWFyY2gtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZWFyY2gtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1yZXNlYXJjaC5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZWFyY2gtYnV0dG9uMlwiPlxuICAgIDxSZXNlYXJjaEJ1dHRvbj48L1Jlc2VhcmNoQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZS1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZS1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiL2xvZ28tZHJpdmUucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaXZlLWJ1dHRvbjJcIj5cbiAgICA8RHJpdmVCdXR0b24+PC9Ecml2ZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXMtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXMtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1tZXNzYWdlcy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXMtYnV0dG9uMlwiPlxuICAgIDxNZXNzYWdlc0J1dHRvbj48L01lc3NhZ2VzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuXG5cblxuXG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgIC5idXNpbmVzcy1wYXJlbnQyIHtcbiAgICAgICAgaGVpZ2h0OjIwNDhweDtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAxNTdweDtcbiAgICAgICAgYm90dG9tOiAzcHhcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5idXNpbmVzcy1jaGlsZDIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDMxMnB4O1xuICAgIFxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cbiAgICAudHJlZS1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjk3MXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgdG9wOiAyNjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICB9XG5cbiAgICAudHJlZS1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnRyZWUtYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzNDVweDtcbiAgICAgICAgcmlnaHQ6IDQycHg7XG4gICAgfVxuXG5cblxuXG4gICAgLm1lZGljYWwtaW5mby1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjYzNnB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIHRvcDogMTMxcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgfVxuXG4gICAgLm1lZGljYWwtaW5mby1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG5cbiAgICAubWVkaWNhbC1pbmZvLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNTM2cHg7XG4gICAgICAgIGxlZnQ6IDI5M3B4O1xuICAgIH1cblxuXG5cbiAgICAuZG9jdG9ycy1pbmZvLXBhcmVudDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAyMzM0cHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6IDMyO1xuICAgIH1cblxuICAgIC5kb2N0b3JzLWluZm8taWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgfVxuXG4gICAgLmRvY3RvcnMtaW5mby1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDcyM3B4O1xuICAgICAgICBsZWZ0OiAyNTlweDtcbiAgICB9XG5cblxuXG4gICAgLmxhd3llcnMtaW5mby1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjAzMnB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiAxMzBweDtcbiAgICB9XG5cbiAgICAubGF3eWVycy1pbmZvLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgfVxuXG4gICAgLmxhd3llcnMtaW5mby1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDc2NHB4O1xuICAgICAgICByaWdodDogMjI0cHg7XG4gICAgfVxuXG5cbiAgICAubGVnYWwtaW5mby1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMTc2OHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiAyNjBweDtcbiAgICB9XG5cbiAgICAubGVnYWwtaW5mby1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICB9XG5cbiAgICAubGVnYWwtaW5mby1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDY3MXB4O1xuICAgICAgICByaWdodDogMjg2cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4vLyBSb3cgdHdvOlxuXG5cbiAgICAubmV3cy1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjk3MXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiAyMzBweDtcbiAgICB9XG5cbiAgICAubmV3cy1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICB9XG5cbiAgICAubmV3cy1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDE0OTZweDtcbiAgICAgICAgcmlnaHQ6IDI0MHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG4gICAgLmludmVzdG1lbnRzLXBhcmVudDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAyNjM2cHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgICAgICBib3R0b206IDc1MHB4O1xuICAgIH1cblxuICAgIC5pbnZlc3RtZW50cy1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcblxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuaW52ZXN0bWVudHMtYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxMDM1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLmluY29tZS1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjMzNHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiA4ODBweDtcbiAgICB9XG5cbiAgICAuaW5jb21lLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5pbmNvbWUtYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxNTgycHg7XG4gICAgICAgIHJpZ2h0OiA3NjFweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cblxuICAgIC5iYWxhbmNlLXBhcmVudDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAyMDMycHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgICAgICBib3R0b206IDEwMTBweDtcbiAgICB9XG5cbiAgICAuYmFsYW5jZS1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcblxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuYmFsYW5jZS1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDE0NTZweDtcbiAgICAgICAgcmlnaHQ6IDczM3B4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG4gICAgLmZsb3dzLXBhcmVudDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAxNzY4cHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgICAgICBib3R0b206IDExMzlweDtcbiAgICB9XG5cbiAgICAuZmxvd3MtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG5cbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmZsb3dzLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTU4MHB4O1xuICAgICAgICByaWdodDogNzA1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG5cblxuXG5cbi8vIFJvdyBUaHJlZTpcblxuXG4uZGFzaGJvYXJkLXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjk3MXB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgYm90dG9tOiA3M3B4O1xufVxuXG4uZGFzaGJvYXJkLWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLmRhc2hib2FyZC1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyMTc4cHg7XG4gICAgbGVmdDogNnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zb2NpYWwtbWVkaWEtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyNjM2cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDozMjtcbiAgICBib3R0b206IDE2MzRweDtcbn1cblxuLnNvY2lhbC1tZWRpYS1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5zb2NpYWwtbWVkaWEtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTM2M3B4O1xuICAgIGxlZnQ6IDQ2NnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLmFwcGxpY2F0aW9ucy1wYXJlbnQyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDIzMzRweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OjEzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDozMjtcbiAgICBib3R0b206IDEyNDRweDtcbn1cblxuLmFwcGxpY2F0aW9ucy1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG5cbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLmFwcGxpY2F0aW9ucy1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMTg2cHg7XG4gICAgcmlnaHQ6IDI2NHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wcm9qZWN0cy1wYXJlbnQyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDE3NjhweDtcbiAgICB3aWR0aDogMTMwcHg7XG5cbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB6LWluZGV4OjMyO1xuICAgIGJvdHRvbTogMTM3M3B4O1xufVxuXG4ucHJvamVjdHMtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0cy1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTE2cHg7XG4gICAgcmlnaHQ6IDk4NnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZW1wbGF0ZXMtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyMDMycHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgYm90dG9tOiAxNTAzcHg7XG59XG5cbi50ZW1wbGF0ZXMtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi50ZW1wbGF0ZXMtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTM1NnB4O1xuICAgIHJpZ2h0OiA4MTRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cblxuXG4vLyBSb3cgRm91cjpcblxuXG4uZ29vZHMtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyOTcxcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDozMjtcbiAgICB0b3A6IDg0cHg7XG59XG5cbi5nb29kcy1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgbGVmdDpcblxufVxuXG4uZ29vZHMtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTgwMHB4O1xuICAgIGxlZnQ6IDIzcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1haWxib3gtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyNjM2cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgYm90dG9tOiA4MjdweDtcbn1cblxuLm1haWxib3gtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5tYWlsYm94LWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1MDBweDtcbiAgICByaWdodDogMjE1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbXBvc2UtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyMzM0cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgYm90dG9tOiA2OTZweDtcbn1cblxuLmNvbXBvc2UtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5jb21wb3NlLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1MDBweDtcbiAgICByaWdodDogMjI0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhbGVuZGFycy1wYXJlbnQyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMTIyMnB4O1xuICAgIHJpZ2h0OiAyMDMycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgei1pbmRleDogMztcbiAgICBib3R0b206IDIxMTRweDtcbn1cblxuLmNhbGVuZGFycy1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgbGVmdDogNzJweDtcbiAgICBib3R0b206IDNweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLmNhbGVuZGFycy1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMTI1cHg7XG4gICAgbGVmdDogMjdweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucGhvbmUtcGFyZW50MiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTc2OHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm90dG9tOiAyMjQycHg7XG59XG5cbi5waG9uZS1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgbGVmdDogNTJweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnBob25lLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1NDdweDtcbiAgICBsZWZ0OiAyMzdweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cblxuLy8gUm93IEZpdmUgOlxuXG4uc2VydmljZXMtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyOTcxcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDozMjtcbiAgICB0b3A6IDI0MXB4O1xufVxuXG4uc2VydmljZXMtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xufVxuXG4uc2VydmljZXMtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTgwMHB4O1xuICAgIGxlZnQ6IDhweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG4ubWVzc2FnZXMtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyNjM2cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDozMjtcbiAgICBib3R0b206IDIzNTdweDtcbn1cblxuLm1lc3NhZ2VzLWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcbn1cblxuLm1lc3NhZ2VzLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1ODhweDtcbiAgICBsZWZ0OiAxNDdweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgICBcblxuXG5cbi5yZXNlYXJjaC1wYXJlbnQyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyMzM0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgei1pbmRleDogMztcbiAgICBib3R0b206IDIwOTdweDtcbn1cblxuLnJlc2VhcmNoLWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBsZWZ0OjYxcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVzZWFyY2gtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTk2NHB4O1xuICAgIGxlZnQ6IDM3MnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG5cbiAgICAud2FsbDEtcGFyZW50MiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDIwMzJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYm90dG9tOiAxNDQ3cHg7XG4gICAgfVxuICAgIFxuICAgIC53YWxsMS1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgbGVmdDogNjVweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC53YWxsMS1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDIxMzJweDtcbiAgICAgICAgcmlnaHQ6IDI1NHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG4gICAgLndhbGwyLXBhcmVudDIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAxNzY4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIGJvdHRvbTogMTU3N3B4O1xuICAgIH1cbiAgICBcbiAgICAud2FsbDItaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGxlZnQ6IDY1cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIH1cbiAgICBcbiAgICAud2FsbDItYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxOTkycHg7XG4gICAgICAgIHJpZ2h0OiA3NnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG5cbiAgICAvLyBSb3cgU2l4IDpcblxuICAgIC5yZXZpZXdzLXBhcmVudDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAyOTcxcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgICAgICB0b3A6IDEwNDhweDtcbiAgICB9XG5cbiAgICAucmV2aWV3cy1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgIFxuICAgIH1cblxuICAgIC5yZXZpZXdzLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTQ1OHB4O1xuICAgICAgICBsZWZ0OiAyOTZweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAuYW5hbHl0aWNzLXBhcmVudDIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogMTQxOXB4O1xuICAgICAgICByaWdodDogMjYzNnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgIH1cbiAgICBcbiAgICAuYW5hbHl0aWNzLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDY1cHg7XG4gICAgfVxuICAgIFxuICAgIC5hbmFseXRpY3MtYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNzMwcHg7XG4gICAgICAgIHRvcDogMTQ0M3B4O1xuICAgIH1cblxuICAgIC5kcml2ZS1wYXJlbnQyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjMzNHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBib3R0b206IDE5MzJweDtcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBsZWZ0OjYxcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTk2M3B4O1xuICAgICAgICBsZWZ0OiAyMzJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG5cbiAgICAubmV0d29yazEtcGFyZW50MiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDIwMzJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYm90dG9tOiA4OTNweDtcbiAgICB9XG4gICAgXG4gICAgLm5ldHdvcmsxLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBsZWZ0OjY5cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLm5ldHdvcmsxLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMjE0N3B4O1xuICAgICAgICBsZWZ0OiA3OHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cblxuICAgIC5uZXR3b3JrMi1wYXJlbnQyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMTc2OHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBib3R0b206IDEwMjFweDtcbiAgICB9XG4gICAgXG4gICAgLm5ldHdvcmsyLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBsZWZ0OjY0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLm5ldHdvcmsyLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTk5M3B4O1xuICAgICAgICBsZWZ0OiAxNzNweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cbiAgICAubmV3cy1idXR0b24tY29udGFpbmVyMiB7XG4gICAgfVxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lcjI6aG92ZXIge1xuICAgIH1cblxuXG4gICAgLmJ1c2luZXNzLWltYWdlLWNvbnRhaW5lcjIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuXG4gICAgLmJ1c2luZXNzLWltYWdlMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgaGVpZ2h0OiAyMDAwcHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICB9XG5cbiAgICAuY29uc3VtZXItaW1hZ2UtYmFja2dyb3VuZDIge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDE5NDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzAyMDkxYik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICB6LWluZGV4OjE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAgICAgdG9wOiAxMDIwcHg7XG4gICAgICAgIHJpZ2h0OiAxNTM1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgQGtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcbiAgICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuICAgICAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxufVxuICAgIH1cblxuXG4gIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Business2.js */"));
  }

}

/***/ }),

/***/ "./src/components/Consumer.js":
/*!************************************!*\
  !*** ./src/components/Consumer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Consumer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/legal-info-button/legal-info-button */ "./src/shared/legal-info-button/legal-info-button.js");
/* harmony import */ var _shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/reviews-button/reviews-button */ "./src/shared/reviews-button/reviews-button.js");
/* harmony import */ var _shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/news-button/news-button */ "./src/shared/news-button/news-button.js");
/* harmony import */ var _shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/investments-button/investments-button */ "./src/shared/investments-button/investments-button.js");
/* harmony import */ var _shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/dashboard-button/dashboard-button */ "./src/shared/dashboard-button/dashboard-button.js");
/* harmony import */ var _shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/products-buttons/products-buttons */ "./src/shared/products-buttons/products-buttons.js");
/* harmony import */ var _shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/messaging-buttons/messaging-buttons */ "./src/shared/messaging-buttons/messaging-buttons.js");
/* harmony import */ var _shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/consumer-financials-buttons */ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.js");
/* harmony import */ var _shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/remaining-buttons/remaining-buttons */ "./src/shared/remaining-buttons/remaining-buttons.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Consumer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

















 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock
// So...first, lets fix the bugs with the balloon wrench, such that we can see it and it highlights upoon 

let consumer = "/Consumer.png";
let business = "/Business.png";
function Consumer() {
  let localState = {
    soundBoolean: false,
    balloonBoolean: false,
    panelOpen: false,
    businessBoolean: false,
    menuBoolean: false
  };
  let {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(localState);

  const twirlFunction = () => {
    setState({
      businessBoolean: !state.businessBoolean
    });
  };

  const soundFunction = () => {
    setState({
      soundBoolean: !state.soundBoolean
    });
  };

  const menuFunction = () => {
    setState({
      menuBoolean: !state.menuBoolean
    });

    if (state.menuBoolean) {
      let child = document.querySelector(".image");
      child.style.display = "none";
    }
  };

  const fade = Object(react_spring__WEBPACK_IMPORTED_MODULE_18__["useSpring"])({
    config: {
      duration: 4250,
      mass: 1,
      tension: 280,
      velocity: 200,
      friction: 120
    },
    opacity: 1,
    from: {
      opacity: 0
    },
    display: 'block'
  }); // This is the rotate the geometric UI seen in the other template, a feature now shown.
  // const [props2, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 35, friction: 4 } }))
  // const calc = (x, y) => [-(y - window.innerHeight / 2) / 330, (x - window.innerWidth / 2) / 240, 1.002]
  // const trans = (x, y, s) => `perspective(1990px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  // <animated.div style={fade} className="consumer-image-container">
  // <animated.img onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
  // onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{ transform: props2.xys.interpolate(trans) }} className="consumer-image" src={ consumer } alt="text"/>
  // </animated.div>

  return __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-image-and-background-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-image-grandfather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-image-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2358028258",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "consumer-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2358028258" + " " + "tree-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2358028258" + " " + "news-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(_shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(_shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(_shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2358028258" + " " + "remaining-buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2358028258",
    __self: this
  }, ".consumer-parent.jsx-2358028258{height:2048px;width:1536px;padding-top:14px;}.consumer-child.jsx-2358028258{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.consumer-button-container.jsx-2358028258{position:relative;top:2738px;right:769px;}.consumer-image-grandfather.jsx-2358028258{position:relative;left:773px;top:641px;z-index:2;}.consumer-image-container.jsx-2358028258{position:relative;left:1265px;top:634px;z-index:1;}.consumer-image.jsx-2358028258{position:relative;z-index:4;}.consumer-image-background.jsx-2358028258{width:1536px;height:2005px;background:linear-gradient(270deg,#000000,#02091b);background-size:400% 400%;-webkit-animation:AnimationName-jsx-2358028258 10s ease-in-out infinite;animation:AnimationName-jsx-2358028258 10s ease-in-out infinite;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;bottom:1270px;left:769px;position:relative;}@-webkit-keyframes AnimationName-jsx-2358028258{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-2358028258{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHZ0IsQUFHc0IsQUFNQSxBQU1JLEFBZUMsQUFPQSxBQVFBLEFBTUwsQUFhYyxBQUNHLEFBQ0QsYUFkZixDQWhERCxJQVlGLEFBZUEsQUFPQyxBQVFGLFNBekNPLEFBZ0RvQyxBQVd6QixBQUVFLENBbEJsQyxDQS9CZ0IsQUFlRixBQWlDcUIsQ0ExQnJCLFNBTkQsQ0FPQyxDQXJCZCxHQWJBLEtBNEJBLENBT0Esd0JBL0JBLElBNEM4QiwwQkFDdUIsd0lBQ3hDLFVBQ0ksMEVBQ0MsY0FDSCxXQUNPLGtCQVF0QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL1N1blJ1bm5lci9zcmMvY29tcG9uZW50cy9Db25zdW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJlZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvdHJlZS1idXR0b24vdHJlZS1idXR0b24nO1xuaW1wb3J0IE1lZGljYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9tZWRpY2FsLWluZm8tYnV0dG9uL21lZGljYWwtaW5mby1idXR0b24nO1xuaW1wb3J0IERvY3RvcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2RvY3RvcnMtYnV0dG9uL2RvY3RvcnMtYnV0dG9uJztcbmltcG9ydCBMYXd5ZXJzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sYXd5ZXJzLWJ1dHRvbi9sYXd5ZXJzLWJ1dHRvbic7XG5pbXBvcnQgTGVnYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sZWdhbC1pbmZvLWJ1dHRvbi9sZWdhbC1pbmZvLWJ1dHRvbidcbmltcG9ydCBSZXZpZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZXZpZXdzLWJ1dHRvbi9yZXZpZXdzLWJ1dHRvbic7XG5pbXBvcnQgTmV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24nO1xuaW1wb3J0IEludmVzdG1lbnRzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9pbnZlc3RtZW50cy1idXR0b24vaW52ZXN0bWVudHMtYnV0dG9uJztcbmltcG9ydCBEYXNoYm9hcmRCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2Rhc2hib2FyZC1idXR0b24vZGFzaGJvYXJkLWJ1dHRvbic7XG5pbXBvcnQgUHJvZHVjdHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9wcm9kdWN0cy1idXR0b25zL3Byb2R1Y3RzLWJ1dHRvbnMnO1xuaW1wb3J0IE1lc3NhZ2luZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2luZy1idXR0b25zL21lc3NhZ2luZy1idXR0b25zJztcbmltcG9ydCBDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zJztcbmltcG9ydCBSZW1haW5pbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9yZW1haW5pbmctYnV0dG9ucyc7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG4vLyBTbyB5b3Ugd2FudCBpdCB0byBjb25kaXRpb25hbGx5IHJlbmRlciB0aGUgY29uc3VtZXIgb3IgYnVzaW5lc3MgY29tcG9uZW50IGNvbnRpbmdlbnQgb24gd2hldGhlciBidXNpbmVzcyBpcyB0cnVlXG4vLyBTYW1lIHdpdGggdGhlIGRvY2tcblxuLy8gU28uLi5maXJzdCwgbGV0cyBmaXggdGhlIGJ1Z3Mgd2l0aCB0aGUgYmFsbG9vbiB3cmVuY2gsIHN1Y2ggdGhhdCB3ZSBjYW4gc2VlIGl0IGFuZCBpdCBoaWdobGlnaHRzIHVwb29uIFxuXG5sZXQgY29uc3VtZXIgPSBcIi9Db25zdW1lci5wbmdcIlxubGV0IGJ1c2luZXNzID0gXCIvQnVzaW5lc3MucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG5cblxuICAgIGxldCBsb2NhbFN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIG1lbnVCb29sZWFuOiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGxvY2FsU3RhdGUpO1xuXG4gICAgY29uc3QgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgY29uc3Qgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgY29uc3QgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7bWVudUJvb2xlYW46ICFzdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGlmIChzdGF0ZS5tZW51Qm9vbGVhbikgeyBcblxuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKVxuICAgICAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmFkZSA9IHVzZVNwcmluZyh7XG4gICAgICAgIGNvbmZpZzogeyBkdXJhdGlvbjogNDI1MCwgbWFzczogMSwgdGVuc2lvbjogMjgwLCB2ZWxvY2l0eTogMjAwLCBmcmljdGlvbjogMTIwIH0sXG4gICAgICAgIG9wYWNpdHk6IDEsIGZyb206IHtvcGFjaXR5OiAwfSxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIHJvdGF0ZSB0aGUgZ2VvbWV0cmljIFVJIHNlZW4gaW4gdGhlIG90aGVyIHRlbXBsYXRlLCBhIGZlYXR1cmUgbm93IHNob3duLlxuICAgICAgICAvLyBjb25zdCBbcHJvcHMyLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IHh5czogWzAsIDAsIDFdLCBjb25maWc6IHsgbWFzczogMSwgdGVuc2lvbjogMzUsIGZyaWN0aW9uOiA0IH0gfSkpXG4gICAgICAgIC8vIGNvbnN0IGNhbGMgPSAoeCwgeSkgPT4gWy0oeSAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC8gMzMwLCAoeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLyAyNDAsIDEuMDAyXVxuICAgICAgICAvLyBjb25zdCB0cmFucyA9ICh4LCB5LCBzKSA9PiBgcGVyc3BlY3RpdmUoMTk5MHB4KSByb3RhdGVYKCR7eH1kZWcpIHJvdGF0ZVkoJHt5fWRlZykgc2NhbGUoJHtzfSlgXG4gICAgICAgIC8vIDxhbmltYXRlZC5kaXYgc3R5bGU9e2ZhZGV9IGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAvLyA8YW5pbWF0ZWQuaW1nIG9uTW91c2VNb3ZlPXsoeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0pID0+IHNldCh7IHh5czogY2FsYyh4LCB5KSB9KX1cbiAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXQoeyB4eXM6IFswLCAwLCAxXSB9KX0gc3R5bGU9e3sgdHJhbnNmb3JtOiBwcm9wczIueHlzLmludGVycG9sYXRlKHRyYW5zKSB9fSBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZVwiIHNyYz17IGNvbnN1bWVyIH0gYWx0PVwidGV4dFwiLz5cbiAgICAgICAgLy8gPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1jaGlsZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UtYW5kLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZS1ncmFuZGZhdGhlclwiPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1pbWFnZS1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgPFRyZWVCdXR0b24+PC9UcmVlQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuICAgIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbiAgICA8TGF3eWVyc0J1dHRvbj48L0xhd3llcnNCdXR0b24+XG4gICAgPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbiAgICA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPEludmVzdG1lbnRzQnV0dG9uPjwvSW52ZXN0bWVudHNCdXR0b24+XG4gICAgPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbiAgICA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuICAgIDxNZXNzYWdpbmdCdXR0b25zPjwvTWVzc2FnaW5nQnV0dG9ucz5cbiAgICA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1haW5pbmctYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgIC5jb25zdW1lci1wYXJlbnQge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnN1bWVyLWNoaWxkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cblxuXG4gICAgLmNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAyNzM4cHg7XG4gICAgICAgIHJpZ2h0OiA3NjlweDtcbiAgICBcbiAgICB9XG5cbiAgICAudHJlZS1idXR0b24tY29udGFpbmVyIHt9XG5cbiAgICAubmV3cy1idXR0b24tY29udGFpbmVyIHtcbiAgICB9XG5cbiAgICAubmV3cy1idXR0b24tY29udGFpbmVyOmhvdmVyIHtcbiAgICB9XG5cbiAgICAuY29uc3VtZXItaW1hZ2UtZ3JhbmRmYXRoZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDc3M3B4O1xuICAgICAgICB0b3A6IDY0MXB4O1xuICAgICAgICB6LWluZGV4OjI7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTI2NXB4O1xuICAgICAgICB0b3A6IDYzNHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA0O1xuXG4gICAgfVxuXG4gICAgLmNvbnN1bWVyLWltYWdlLWJhY2tncm91bmQge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDIwMDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzAyMDkxYik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICB6LWluZGV4OjA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvdHRvbTogMTI3MHB4O1xuICAgICAgICBsZWZ0OiA3NjlweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5cbiAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XG4gICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Consumer.js */"));
}

/***/ }),

/***/ "./src/components/Consumer2.js":
/*!*************************************!*\
  !*** ./src/components/Consumer2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Consumer2; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/legal-info-button/legal-info-button */ "./src/shared/legal-info-button/legal-info-button.js");
/* harmony import */ var _shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/reviews-button/reviews-button */ "./src/shared/reviews-button/reviews-button.js");
/* harmony import */ var _shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/news-button/news-button */ "./src/shared/news-button/news-button.js");
/* harmony import */ var _shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/investments-button/investments-button */ "./src/shared/investments-button/investments-button.js");
/* harmony import */ var _shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/dashboard-button/dashboard-button */ "./src/shared/dashboard-button/dashboard-button.js");
/* harmony import */ var _shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/products-buttons/products-buttons */ "./src/shared/products-buttons/products-buttons.js");
/* harmony import */ var _shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/messaging-buttons/messaging-buttons */ "./src/shared/messaging-buttons/messaging-buttons.js");
/* harmony import */ var _shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/consumer-financials-buttons */ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.js");
/* harmony import */ var _shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/remaining-buttons/remaining-buttons */ "./src/shared/remaining-buttons/remaining-buttons.js");
/* harmony import */ var _shared_products_buttons_goods_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/products-buttons/goods-button */ "./src/shared/products-buttons/goods-button.js");
/* harmony import */ var _shared_products_buttons_services_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/products-buttons/services-button */ "./src/shared/products-buttons/services-button.js");
/* harmony import */ var _shared_messaging_buttons_mailbox_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/messaging-buttons/mailbox-button */ "./src/shared/messaging-buttons/mailbox-button.js");
/* harmony import */ var _shared_messaging_buttons_compose_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/messaging-buttons/compose-button */ "./src/shared/messaging-buttons/compose-button.js");
/* harmony import */ var _shared_consumer_financials_buttons_income_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/income-button */ "./src/shared/consumer-financials-buttons/income-button.js");
/* harmony import */ var _shared_consumer_financials_buttons_balance_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/balance-button */ "./src/shared/consumer-financials-buttons/balance-button.js");
/* harmony import */ var _shared_consumer_financials_buttons_flows_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/flows-button */ "./src/shared/consumer-financials-buttons/flows-button.js");
/* harmony import */ var _shared_remaining_buttons_applications_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/remaining-buttons/applications-button */ "./src/shared/remaining-buttons/applications-button.js");
/* harmony import */ var _shared_remaining_buttons_projects_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/remaining-buttons/projects-button */ "./src/shared/remaining-buttons/projects-button.js");
/* harmony import */ var _shared_remaining_buttons_templates_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/remaining-buttons/templates-button */ "./src/shared/remaining-buttons/templates-button.js");
/* harmony import */ var _shared_remaining_buttons_drive_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/remaining-buttons/drive-button */ "./src/shared/remaining-buttons/drive-button.js");
/* harmony import */ var _shared_remaining_buttons_network_one_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/remaining-buttons/network-one-button */ "./src/shared/remaining-buttons/network-one-button.js");
/* harmony import */ var _shared_remaining_buttons_network_two_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../shared/remaining-buttons/network-two-button */ "./src/shared/remaining-buttons/network-two-button.js");
/* harmony import */ var _shared_remaining_buttons_wall_one_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared/remaining-buttons/wall-one-button */ "./src/shared/remaining-buttons/wall-one-button.js");
/* harmony import */ var _shared_remaining_buttons_wall_two_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../shared/remaining-buttons/wall-two-button */ "./src/shared/remaining-buttons/wall-two-button.js");
/* harmony import */ var _shared_remaining_buttons_social_media_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../shared/remaining-buttons/social-media-button */ "./src/shared/remaining-buttons/social-media-button.js");
/* harmony import */ var _shared_remaining_buttons_health_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../shared/remaining-buttons/health-button */ "./src/shared/remaining-buttons/health-button.js");
/* harmony import */ var _shared_remaining_buttons_calendars_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../shared/remaining-buttons/calendars-button */ "./src/shared/remaining-buttons/calendars-button.js");
/* harmony import */ var _shared_remaining_buttons_phone_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../shared/remaining-buttons/phone-button */ "./src/shared/remaining-buttons/phone-button.js");
/* harmony import */ var _shared_remaining_buttons_messages_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../shared/remaining-buttons/messages-button */ "./src/shared/remaining-buttons/messages-button.js");
/* harmony import */ var _shared_remaining_buttons_research_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../shared/remaining-buttons/research-button */ "./src/shared/remaining-buttons/research-button.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Consumer2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
let blank = "/blank.png";
class Consumer2 extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    _defineProperty(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    _defineProperty(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    _defineProperty(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  componentDidMount() {
    document.addEventListener("mouseover", function () {
      let newsButton = document.querySelector(".news-button-container");
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx("div", {
      className: "jsx-1343528133" + " " + "consumer-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "consumer-child2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "consumer-image-container2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      src: blank,
      alt: "text",
      className: "jsx-1343528133" + " " + "consumer-image2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1343528133" + " " + "consumer-image-background2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "tree-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "tree-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-tree.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "tree-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "medical-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "medical-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-medical-info.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "medical-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "doctors-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "doctors-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-doctors.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "doctors-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "lawyers-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "lawyers-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-lawyers.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "lawyers-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "legal-info-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "legal-info-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-legal-info.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "legal-info-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "reviews-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "reviews-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-reviews.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "reviews-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "news-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "news-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-news.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "news-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "dashboard-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "dashboard-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-dashboard.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "dashboard-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "goods-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "goods-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-goods.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "goods-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx(_shared_products_buttons_goods_button__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "services-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "services-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-services.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "services-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx(_shared_products_buttons_services_button__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "investments-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "investments-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-investments.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "investments-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "income-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "income-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-income.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "income-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx(_shared_consumer_financials_buttons_income_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "balance-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "balance-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-balance.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "balance-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx(_shared_consumer_financials_buttons_balance_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "flows-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "flows-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-flows.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "flows-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx(_shared_consumer_financials_buttons_flows_button__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "compose-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "compose-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-compose.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "compose-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, __jsx(_shared_messaging_buttons_compose_button__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "mailbox-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "mailbox-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-mailbox.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "mailbox-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, __jsx(_shared_messaging_buttons_mailbox_button__WEBPACK_IMPORTED_MODULE_20__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "applications-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "applications-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-applications.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "applications-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_applications_button__WEBPACK_IMPORTED_MODULE_25__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "projects-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "projects-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-projects.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "projects-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_projects_button__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "templates-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "ptemplatesicon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-templates.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "templates-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_templates_button__WEBPACK_IMPORTED_MODULE_27__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "social-media-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "social-media-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-social-media.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "social-media-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_social_media_button__WEBPACK_IMPORTED_MODULE_33__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "network1-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "network1-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-network1.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "network1-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_network_one_button__WEBPACK_IMPORTED_MODULE_29__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "network2-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "network2-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-network2.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "network2-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_network_two_button__WEBPACK_IMPORTED_MODULE_30__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "wall1-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "wall1-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-wall1.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "wall1-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_wall_one_button__WEBPACK_IMPORTED_MODULE_31__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "wall2-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "wall2-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-wall2.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "wall2-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_wall_two_button__WEBPACK_IMPORTED_MODULE_32__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "analytics-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "analytics-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-health.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "analytics-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_health_button__WEBPACK_IMPORTED_MODULE_34__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "calendars-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "calendars-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-calendar.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "calendars-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_calendars_button__WEBPACK_IMPORTED_MODULE_35__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "phone-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "phone-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-phone.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "phone-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_phone_button__WEBPACK_IMPORTED_MODULE_36__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "research-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "research-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-research.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "research-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_research_button__WEBPACK_IMPORTED_MODULE_38__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "drive-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "drive-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, __jsx("img", {
      src: "/logo-drive.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "drive-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_drive_button__WEBPACK_IMPORTED_MODULE_28__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-1343528133" + " " + "messages-parent2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1343528133" + " " + "messages-icon2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, __jsx("img", {
      src: "./logo-messages.png",
      alt: "-",
      className: "jsx-1343528133",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1343528133" + " " + "messages-button2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_messages_button__WEBPACK_IMPORTED_MODULE_37__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1343528133",
      __self: this
    }, ".consumer-parent2.jsx-1343528133{height:2048px;width:1536px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;right:157px;bottom:3px justify-content:center;}.consumer-child2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2048px;width:1536px;position:relative;}.tree-parent2.jsx-1343528133{position:relative;right:2971px;width:130px;height:130px;color:yellow;top:260px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.tree-icon2.jsx-1343528133{width:130px;height:130px;position:relative;}.tree-button2.jsx-1343528133{position:relative;top:345px;right:42px;}.medical-info-parent2.jsx-1343528133{position:relative;right:2636px;width:130px;height:130px;top:131px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.medical-info-icon2.jsx-1343528133{width:130px!important;height:130px;color:yellow;}.medical-info-button2.jsx-1343528133{position:relative;top:536px;left:293px;}.doctors-info-parent2.jsx-1343528133{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;}.doctors-info-icon2.jsx-1343528133{width:130px!important;height:130px;}.doctors-info-button2.jsx-1343528133{position:relative;top:723px;left:259px;}.lawyers-info-parent2.jsx-1343528133{position:relative;right:2032px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:130px;}.lawyers-info-icon2.jsx-1343528133{width:130px!important;height:130px;}.lawyers-info-button2.jsx-1343528133{position:relative;top:764px;right:224px;}.legal-info-parent2.jsx-1343528133{position:relative;right:1768px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:260px;}.legal-info-icon2.jsx-1343528133{width:130px!important;height:130px;}.legal-info-button2.jsx-1343528133{position:relative;top:671px;right:286px;white-space:nowrap;}.news-parent2.jsx-1343528133{position:relative;right:2971px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:230px;}.news-icon2.jsx-1343528133{width:130px!important;height:130px;}.news-button2.jsx-1343528133{position:relative;top:1496px;right:240px;white-space:nowrap;}.investments-parent2.jsx-1343528133{position:relative;right:2636px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:750px;}.investments-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.investments-button2.jsx-1343528133{position:relative;top:1035px;right:5px;white-space:nowrap;}.income-parent2.jsx-1343528133{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:880px;}.income-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.income-button2.jsx-1343528133{position:relative;top:1582px;right:761px;white-space:nowrap;}.balance-parent2.jsx-1343528133{position:relative;right:2032px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1010px;}.balance-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.balance-button2.jsx-1343528133{position:relative;top:1456px;right:733px;white-space:nowrap;}.flows-parent2.jsx-1343528133{position:relative;right:1768px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1139px;}.flows-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.flows-button2.jsx-1343528133{position:relative;top:1580px;right:705px;white-space:nowrap;}.dashboard-parent2.jsx-1343528133{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:73px;}.dashboard-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.dashboard-button2.jsx-1343528133{position:relative;top:2178px;left:6px;white-space:nowrap;}.social-media-parent2.jsx-1343528133{position:relative;right:2636px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1634px;}.social-media-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.social-media-button2.jsx-1343528133{position:relative;top:1363px;left:466px;white-space:nowrap;}.applications-parent2.jsx-1343528133{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1244px;}.applications-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.applications-button2.jsx-1343528133{position:relative;top:1186px;right:264px;white-space:nowrap;}.projects-parent2.jsx-1343528133{position:relative;right:1768px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1373px;}.projects-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.projects-button2.jsx-1343528133{position:relative;top:1516px;right:986px;white-space:nowrap;}.templates-parent2.jsx-1343528133{position:relative;right:2032px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:1503px;}.templates-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.templates-button2.jsx-1343528133{position:relative;top:1356px;right:814px;white-space:nowrap;}.goods-parent2.jsx-1343528133{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;top:84px;}.goods-icon2.jsx-1343528133{width:130px!important;height:130px;}.goods-button2.jsx-1343528133{position:relative;top:1800px;left:23px;white-space:nowrap;}.mailbox-parent2.jsx-1343528133{position:relative;right:2636px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:827px;}.mailbox-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.mailbox-button2.jsx-1343528133{position:relative;top:1500px;right:215px;white-space:nowrap;}.compose-parent2.jsx-1343528133{position:relative;right:2334px;width:130px;height:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:696px;}.compose-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;}.compose-button2.jsx-1343528133{position:relative;top:1500px;right:224px;white-space:nowrap;}.calendars-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;bottom:1222px;right:2032px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:2114px;}.calendars-icon2.jsx-1343528133{width:130px!important;height:130px;left:72px;bottom:3px;position:relative;}.calendars-button2.jsx-1343528133{position:relative;top:1125px;left:27px;white-space:nowrap;}.phone-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:1768px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:2242px;}.phone-icon2.jsx-1343528133{width:130px!important;height:130px;left:52px;position:relative;}.phone-button2.jsx-1343528133{position:relative;top:1547px;left:237px;white-space:nowrap;}.services-parent2.jsx-1343528133{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;top:241px;}.services-icon2.jsx-1343528133{width:130px!important;height:130px;}.services-button2.jsx-1343528133{position:relative;top:1800px;left:8px;white-space:nowrap;}.messages-parent2.jsx-1343528133{position:relative;right:2636px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;bottom:2357px;}.messages-icon2.jsx-1343528133{width:130px!important;height:130px;}.messages-button2.jsx-1343528133{position:relative;top:1588px;left:147px;white-space:nowrap;}.research-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2334px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:2097px;}.research-icon2.jsx-1343528133{width:130px!important;height:130px;left:61px;position:relative;}.research-button2.jsx-1343528133{position:relative;top:1964px;left:372px;white-space:nowrap;}.wall1-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2032px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1447px;}.wall1-icon2.jsx-1343528133{width:130px!important;height:130px;left:65px;position:relative;}.wall1-button2.jsx-1343528133{position:relative;top:2132px;right:254px;white-space:nowrap;}.wall2-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:1768px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1577px;}.wall2-icon2.jsx-1343528133{width:130px!important;height:130px;left:65px;position:relative;}.wall2-button2.jsx-1343528133{position:relative;top:1992px;right:76px;white-space:nowrap;}.reviews-parent2.jsx-1343528133{position:relative;right:2971px;width:130px;height:130px;color:yellow;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:32;top:1048px;}.reviews-icon2.jsx-1343528133{width:130px!important;height:130px;}.reviews-button2.jsx-1343528133{position:relative;top:1458px;left:296px;white-space:nowrap;}.analytics-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;bottom:1419px;right:2636px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;}.analytics-icon2.jsx-1343528133{width:130px!important;height:130px;position:relative;left:65px;}.analytics-button2.jsx-1343528133{position:relative;left:730px;top:1443px;}.drive-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2334px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1932px;}.drive-icon2.jsx-1343528133{width:130px!important;height:130px;left:61px;position:relative;}.drive-button2.jsx-1343528133{position:relative;top:1963px;left:232px;white-space:nowrap;}.network1-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:2032px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:893px;}.network1-icon2.jsx-1343528133{width:130px!important;height:130px;left:69px;position:relative;}.network1-button2.jsx-1343528133{position:relative;top:2147px;left:78px;white-space:nowrap;}.network2-parent2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;right:1768px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;height:130px;z-index:3;bottom:1021px;}.network2-icon2.jsx-1343528133{width:130px!important;height:130px;left:64px;position:relative;}.network2-button2.jsx-1343528133{position:relative;top:1993px;left:173px;white-space:nowrap;}.consumer-image-container2.jsx-1343528133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.consumer-image2.jsx-1343528133{position:relative;z-index:0;height:2000px;width:1536px;left:1px;}.consumer-image-background2.jsx-1343528133{width:1536px;height:1940px;background:linear-gradient(270deg,#000000,#02091b);background-size:400% 400%;-webkit-animation:AnimationName-jsx-1343528133 10s ease-in-out infinite;animation:AnimationName-jsx-1343528133 10s ease-in-out infinite;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);top:1020px;right:1535px;position:relative;}@-webkit-keyframes AnimationName-jsx-1343528133{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-1343528133{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4WGdCLEFBR3NCLEFBVUEsQUFlSyxBQVdOLEFBTU0sQUFTQSxBQVVJLEFBTUosQUFRQSxBQVlJLEFBS0osQUFRQSxBQVVJLEFBTUosQUFPQSxBQVVJLEFBS0osQUFVQSxBQVVJLEFBS0osQUFRQSxBQVVJLEFBT0osQUFPQSxBQVVJLEFBT0osQUFRQSxBQVVJLEFBT0osQUFRQSxBQVVJLEFBT0osQUFjSixBQVdJLEFBTUosQUFPQSxBQVdJLEFBTUosQUFRQSxBQVVJLEFBT0osQUFPQSxBQVdJLEFBT0osQUFPQSxBQVVJLEFBT0osQUFhQSxBQVdJLEFBTUosQUFPQSxBQVVJLEFBT0osQUFPQSxBQVVJLEFBT0osQUFPTCxBQWFTLEFBUUosQUFPTCxBQVlTLEFBT0osQUFXQSxBQVdJLEFBS0osQUFRQSxBQVdJLEFBS0osQUFVTCxBQVlTLEFBT0osQUFRRCxBQVlTLEFBT0osQUFRTCxBQVlTLEFBT0osQUFXQSxBQVdJLEFBTUosQUFPTCxBQVlTLEFBT0osQUFNTCxBQVlTLEFBT0osQUFRTCxBQVlTLEFBT0osQUFRTCxBQVlTLEFBT0osQUF1QkwsQUFLSyxBQVFMLEFBY2MsQUFDRyxBQUNELFlBcnlCakIsQ0FzeEJFLENBMXpCRCxJQXlCQSxBQWlCSCxBQVNHLEFBZ0JILEFBUUcsQUFpQkgsQUFRRyxBQWdCSCxBQU9HLEFBZUgsQUFVRyxBQWVGLEFBUUUsQUFpQkYsQUFPRSxBQWlCRixBQVFFLEFBaUJGLEFBUUUsQUFpQkYsQUFjRixBQWlCRixBQU9FLEFBaUJGLEFBUUUsQUFpQkYsQUFPRSxBQWtCRixBQU9FLEFBaUJGLEFBYUUsQUFpQkYsQUFPRSxBQWlCRixBQU9FLEFBaUJGLEFBNEJBLEFBMEJBLEFBV0UsQUFnQkYsQUFRRSxBQWdCRixBQTZCQSxBQTJCSSxBQTJCQSxBQVdFLEFBaUJGLEFBMEJBLEFBeUJBLEFBMkJBLEFBMkJBLEFBNEJELElBcnZCRSxBQTBCQSxBQXVCQSxBQXVCQSxBQXlCQSxBQXVCQSxBQXdCQSxBQXlCQSxBQXlCQSxBQWdDSixBQXdCQSxBQXdCQSxBQXlCQSxBQXdCQSxBQStCQSxBQXVCQSxBQXdCQSxBQTJCQSxBQTJCQSxBQTZCQSxBQXdCQSxBQTJCQSxBQTJCSSxBQTJCQSxBQTZCQSxBQXlCQSxBQXlCQSxBQTJCQSxBQTJCQSxHQTF1Qk0sRUFwQ04sQUEwekJ5QyxBQVl6QixBQUVFLENBOXhCbkIsQUF5QkEsQUF5QkEsQUF3QkMsQUFzQkEsQUF3cUJFLENBL29CRixBQXlCRixBQXdCRSxBQXlCQSxBQXlCQSxBQStCUCxBQXdCRSxBQXlCQyxBQXlCQSxBQXdCQSxBQThCRixBQXdCRSxBQXdCQSxBQTRCRixBQTBCQyxBQTJCRixBQXdCRSxBQTZCQSxBQTJCSyxBQTJCRCxBQTRCQSxBQTBCQSxBQXlCQSxBQTJCRCxBQTJCQyxBQWlEb0IsRUE5eUJuQixBQTBCQSxBQXdCQSxBQXlCQSxBQXVCQSxBQXlCQSxBQXVCQSxBQXdCQSxBQXlCQSxBQXlCQSxBQStCSixBQXdCQSxBQXlCQSxBQXdCQSxBQXlCQSxBQThCQSxBQXdCQSxBQXdCQSxBQWtGQSxBQXdCQSxBQThHSSxJQS9sQkMsQUEwQmpCLEFBd0JBLEFBc0JBLEFBeUJBLEFBd0JxQixBQXdCQSxBQXlCQSxBQXlCQSxBQStCSixBQXdCQSxBQXlCQSxBQXlCQSxBQXdCQSxBQStCckIsQUFBQyxBQXVCb0IsQUF3QkEsQUEwQlAsQUEyQkEsQUE2QmQsQUF3QkEsQUEyQmEsQUEyQkssQUEyQkEsQUE4QmQsQUF3QnNCLEFBeUJULEFBMkJBLEFBMkJBLEdBemVNLEFBaVFBLENBNWZuQixBQXlCQSxBQXlCQSxBQWdHdUIsQUF5T0osQUE0RUEsQUEwUUksQ0F2b0J2QixBQXNCdUIsQUFtTEosQUE4TUEsQUFtREEsQUE2QkEsQUFzREksQUE0QkEsQUEwQnZCLEFBeUJ1QixBQXNEQSxDQW5uQkEsQUFpREEsQUF5QkEsQUF5QkEsQUFnRkosQUF5QkEsQUF3QkEsQUFzREEsQUF3QkEsQUFpS0ksQ0E0TE4sQ0F6eEJELEFBV2hCLEFBZWlCLEFBd0JBLEFBeUJELEFBdUJBLEFBeUJBLEFBdUJBLEFBd0JBLEFBeUJBLEFBeUJBLEFBK0JKLEFBd0JBLEFBeUJBLEFBeUJBLEFBd0JBLEFBOEJBLEFBd0JBLEFBd0JBLEFBa0ZBLEFBd0JBLEFBOEdJLEVBbkxMLEFBMkJNLEFBZ0ZDLEFBMkJHLEFBMkJBLEFBK0VDLEFBMkJBLEFBMkJBLEdBbHRCdEIsS0F5SEEsQUF3QkEsQUF5QkEsQUF5QkEsQUErQkosQUF3QkEsQUF5QkEsQUF5QkEsQUF3QkEsQUFzREEsQUF3QkEsQUFpUGtCLEVBbUhELENBenhCSSxBQTBCSCxBQXdCVSxBQXlCUCxBQXVCQSxBQXlCQSxBQXVCQSxBQXdCQSxBQXlCQSxBQXlCQSxBQStCSixBQXdCQSxBQXlCQSxBQXlCQSxBQXdCQSxBQThCQSxBQXdCQSxBQXdCQSxBQXFDSSxBQTZDSixBQXdCQSxBQThHSSxDQXZYckIsQUFpUUksQ0ExV0EsQUF5T0osQUE0RUEsQUEwUVEsQ0FqbkJKLEFBbUxKLEFBOE1BLEFBbURJLEFBNkJBLEFBc0RBLEFBNEJBLEFBbURJLEFBc0RBLENBbm5CSixBQWlEQSxBQXlCQSxBQXlCQSxBQWdGSixBQXlCQSxBQXdCQSxBQXNEQSxBQXdCQSxBQWlLSSxHQWxISixBQWdGQSxBQTJCSSxBQTJCQSxBQXNEQSxBQXlCQSxBQTJCQSxBQTJCQSxDQW9DQSxFQS92QmlCLEdBMUJILEFBMlBELEFBd0JBLEFBd0dBLEFBa0lBLEFBd0JBLEFBOEdJLEtBdHBCQSxBQWtkRSxBQWlCdkIsQUFXdUIsQUFnRkEsQUEyQkksQUEyQkEsQUFzREEsQUF5QkEsQUEyQkEsQUEyQkEsQUEwQ3ZCLEVBOXRCeUIsRUE2dUJLLENBOXhCYixTQW5CQSxTQXFFTyxJQTlFRixBQVVBLEdBaXpCK0IsYUE1dUJwQyxFQTlFRCxBQVVoQixXQTJGYyxBQXVCQSxBQXlCQSxBQXVCQSxBQXdCQSxBQXlCQSxBQXlCQSxBQWdGSixBQXlCQSxBQXdCQSxBQXNEQSxBQXdCQSxDQW5jaUIsU0FtRGIsQ0FpREcsQUF1QkEsQUF5QkEsQUF1QkEsQUF3QkEsQUF5QkMsQUF5QkEsQUFnRkosQUF5QkEsQUF3QkEsQUFzREQsQUF3QkEsRUFoTEgsQUF3QkEsQUF3R0EsQUFrSUEsQUF3QkEsQUE4R0ksUUF4bUJkLEVBMUJjLENBMkVkLEFBdUJBLEFBeUJBLEFBdUJBLEFBd0JBLEFBaUZZLEFBd0JFLEFBd0dMLEFBd0JiLEFBd0JBLEFBa0ZjLEFBd0JJLEFBOEdDLENBaGNmLEFBeUJBLEFBZ0ZKLEFBeUJBLEFBd0JBLFFBK0JBLENBM1hJLEFBNmZKLENBdmhCSSxBQTZwQkEsQ0F4WUosQ0FrTXNCLEFBNEJBLEFBZ0ZBLEFBMkJJLEFBMkJBLEFBc0RBLEFBeUJBLEFBMkJBLEFBMkJBLENBamQxQixBQWtRQSxpQkF2RmtCLEFBNEJELEFBZ0ZBLEFBMkJJLEFBMkJBLEFBc0RDLEFBeUJELEFBMkJBLEFBMkJBLE1BbnJCRixPQXlhUSxBQWdGQSxBQTJCSSxBQTJCQSxBQStFQSxBQTJCQSxBQTJCQSxDQXZTZCxBQXdOSSxHQXBtQmpCLFVBNll1QixBQXdOSSw0QkFzSWQsVUFDSSwrQ0FuVUwsQUFnRkEsQUEyQkksQUEyQkEsQUErRUEsQUEyQkEsQUEyQkEsWUExUUgsQUFnRkEsQUEyQkksQUEyQkEsQUErRUEsQUEyQkEsQUEyQkEsRUF2U0wsQUF3TkksV0EzTE4sQUFnRkEsQUEyQkksQUEyQkEsQUErRUEsQUEyQkEsQUEyQkEsQ0F2U0QsQUF3TkksQ0FzSWlCLFFBalVwQixBQWdGQSxBQTJCSSxBQTJCQSxBQStFQSxBQTJCRCxBQTJCQyxJQXZTUixBQXdOSSxTQXFEZCxDQTVRYyxBQTRCbEIsQUFnRkEsQUEyQkksQUEyQkEsQUFzREEsQUF5QkEsQUFzREEsY0F0U0osK0RBNFZtQixXQUNFLGFBQ0ssa0JBUXRCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRG9jayBmcm9tICcuLi9jb21wb25lbnRzL0RvY2snO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC90cmVlLWJ1dHRvbi90cmVlLWJ1dHRvbic7XG5pbXBvcnQgTWVkaWNhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL21lZGljYWwtaW5mby1idXR0b24vbWVkaWNhbC1pbmZvLWJ1dHRvbic7XG5pbXBvcnQgRG9jdG9yc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvZG9jdG9ycy1idXR0b24vZG9jdG9ycy1idXR0b24nO1xuaW1wb3J0IExhd3llcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xhd3llcnMtYnV0dG9uL2xhd3llcnMtYnV0dG9uJztcbmltcG9ydCBMZWdhbEluZm9CdXR0b24gZnJvbSAnLi4vc2hhcmVkL2xlZ2FsLWluZm8tYnV0dG9uL2xlZ2FsLWluZm8tYnV0dG9uJ1xuaW1wb3J0IFJldmlld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3Jldmlld3MtYnV0dG9uL3Jldmlld3MtYnV0dG9uJztcbmltcG9ydCBOZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbic7XG5pbXBvcnQgSW52ZXN0bWVudHNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2ludmVzdG1lbnRzLWJ1dHRvbi9pbnZlc3RtZW50cy1idXR0b24nO1xuaW1wb3J0IERhc2hib2FyZEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uJztcbmltcG9ydCBQcm9kdWN0c0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3Byb2R1Y3RzLWJ1dHRvbnMvcHJvZHVjdHMtYnV0dG9ucyc7XG5pbXBvcnQgTWVzc2FnaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvbWVzc2FnaW5nLWJ1dHRvbnMnO1xuaW1wb3J0IENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMnO1xuaW1wb3J0IFJlbWFpbmluZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3JlbWFpbmluZy1idXR0b25zJztcbmltcG9ydCBHb29kc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcHJvZHVjdHMtYnV0dG9ucy9nb29kcy1idXR0b24nO1xuaW1wb3J0IFNlcnZpY2VzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9wcm9kdWN0cy1idXR0b25zL3NlcnZpY2VzLWJ1dHRvbic7XG5pbXBvcnQgTWFpbGJveEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvbWVzc2FnaW5nLWJ1dHRvbnMvbWFpbGJveC1idXR0b24nO1xuaW1wb3J0IENvbXBvc2VCdXR0b24gZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2luZy1idXR0b25zL2NvbXBvc2UtYnV0dG9uJztcbmltcG9ydCBJbmNvbWVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucy9pbmNvbWUtYnV0dG9uJztcbmltcG9ydCBCYWxhbmNlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMvYmFsYW5jZS1idXR0b24nO1xuaW1wb3J0IEZsb3dzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMvZmxvd3MtYnV0dG9uJztcbmltcG9ydCBBcHBsaWNhdGlvbnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL2FwcGxpY2F0aW9ucy1idXR0b24nXG5pbXBvcnQgUHJvamVjdHNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3Byb2plY3RzLWJ1dHRvbidcbmltcG9ydCBUZW1wbGF0ZXNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3RlbXBsYXRlcy1idXR0b24nO1xuaW1wb3J0IERyaXZlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9kcml2ZS1idXR0b24nO1xuaW1wb3J0IE5ldHdvcmtPbmVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL25ldHdvcmstb25lLWJ1dHRvbic7XG5pbXBvcnQgTmV0d29ya1R3b0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvbmV0d29yay10d28tYnV0dG9uJztcbmltcG9ydCBXYWxsT25lQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy93YWxsLW9uZS1idXR0b24nO1xuaW1wb3J0IFdhbGxUd29CdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3dhbGwtdHdvLWJ1dHRvbic7XG5pbXBvcnQgU29jaWFsTWVkaWFCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3JlbWFpbmluZy1idXR0b25zL3NvY2lhbC1tZWRpYS1idXR0b24nO1xuaW1wb3J0IEFuYWx5dGljc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvaGVhbHRoLWJ1dHRvbic7XG5pbXBvcnQgQ2FsZW5kYXJzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9jYWxlbmRhcnMtYnV0dG9uJztcbmltcG9ydCBQaG9uZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcGhvbmUtYnV0dG9uJztcbmltcG9ydCBNZXNzYWdlc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvbWVzc2FnZXMtYnV0dG9uJztcbmltcG9ydCBSZXNlYXJjaEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcmVzZWFyY2gtYnV0dG9uJztcblxuLy8gU28geW91IHdhbnQgaXQgdG8gY29uZGl0aW9uYWxseSByZW5kZXIgdGhlIGNvbnN1bWVyIG9yIGJ1c2luZXNzIGNvbXBvbmVudCBjb250aW5nZW50IG9uIHdoZXRoZXIgYnVzaW5lc3MgaXMgdHJ1ZVxuLy8gU2FtZSB3aXRoIHRoZSBkb2NrXG5cbmxldCBjb25zdW1lciA9IFwiL0NvbnN1bWVyLnBuZ1wiXG5sZXQgYnVzaW5lc3MgPSBcIi9CdXNpbmVzcy5wbmdcIlxubGV0IGJsYW5rID0gXCIvYmxhbmsucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3VtZXIyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IG5ld3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3MtYnV0dG9uLWNvbnRhaW5lclwiKVxuICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG5cbiAgICBidXNpbmVzc0NsaWNrZWRQYXJlbnQodmFsdWUpIHtcblxuICAgIH1cbiAgICB0d2lybEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IGJ1c2luZXNzQm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgfVxuXG4gICAgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJvb2xlYW46ICF0aGlzLnN0YXRlLm1lbnVCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgbWVudUJvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBtZW51XCIgKyB0aGlzLnN0YXRlLm1lbnVCb29sZWFuKVxuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKVxuICAgICAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWNoaWxkMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UtY29udGFpbmVyMlwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UyXCIgc3JjPXsgYmxhbmsgfSBhbHQ9XCJ0ZXh0XCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlLWJhY2tncm91bmQyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cblxuICAgIFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby10cmVlLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWJ1dHRvbjJcIj5cbiAgICA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGljYWwtaW5mby1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpY2FsLWluZm8taWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1tZWRpY2FsLWluZm8ucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGljYWwtaW5mby1idXR0b24yXCI+XG4gICAgPE1lZGljYWxJbmZvQnV0dG9uPjwvTWVkaWNhbEluZm9CdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3RvcnMtaW5mby1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3JzLWluZm8taWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1kb2N0b3JzLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3JzLWluZm8tYnV0dG9uMlwiPlxuICAgIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF3eWVycy1pbmZvLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxhd3llcnMtaW5mby1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLWxhd3llcnMucG5nXCIgYWx0PVwiLVwiLz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxhd3llcnMtaW5mby1idXR0b24yXCI+XG4gICAgPExhd3llcnNCdXR0b24+PC9MYXd5ZXJzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZWdhbC1pbmZvLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2FsLWluZm8taWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1sZWdhbC1pbmZvLnBuZ1wiIGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZWdhbC1pbmZvLWJ1dHRvbjJcIj5cbiAgICA8TGVnYWxJbmZvQnV0dG9uPjwvTGVnYWxJbmZvQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3MtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1yZXZpZXdzLnBuZ1wiIGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzLWJ1dHRvbjJcIj5cbiAgICA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tbmV3cy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1idXR0b24yXCI+XG4gICAgPE5ld3NCdXR0b24+PC9OZXdzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tZGFzaGJvYXJkLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYnV0dG9uMlwiPlxuICAgIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZHMtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZHMtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1nb29kcy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZHMtYnV0dG9uMlwiPlxuICAgIDxHb29kc0J1dHRvbj48L0dvb2RzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tc2VydmljZXMucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLWJ1dHRvbjJcIj5cbiAgICA8U2VydmljZXNCdXR0b24+PC9TZXJ2aWNlc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZXN0bWVudHMtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZXN0bWVudHMtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1pbnZlc3RtZW50cy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZXN0bWVudHMtYnV0dG9uMlwiPlxuICAgIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluY29tZS1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmNvbWUtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi4vbG9nby1pbmNvbWUucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluY29tZS1idXR0b24yXCI+XG4gICAgPEluY29tZUJ1dHRvbj48L0luY29tZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZS1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tYmFsYW5jZS5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZS1idXR0b24yXCI+XG4gICAgPEJhbGFuY2VCdXR0b24+PC9CYWxhbmNlQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG93cy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG93cy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLWZsb3dzLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG93cy1idXR0b24yXCI+XG4gICAgPEZsb3dzQnV0dG9uPjwvRmxvd3NCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvc2UtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9zZS1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLWNvbXBvc2UucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvc2UtYnV0dG9uMlwiPlxuICAgIDxDb21wb3NlQnV0dG9uPjwvQ29tcG9zZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbGJveC1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWlsYm94LWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tbWFpbGJveC5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbGJveC1idXR0b24yXCI+XG4gICAgPE1haWxib3hCdXR0b24+PC9NYWlsYm94QnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBsaWNhdGlvbnMtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwbGljYXRpb25zLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tYXBwbGljYXRpb25zLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBsaWNhdGlvbnMtYnV0dG9uMlwiPlxuICAgIDxBcHBsaWNhdGlvbnNCdXR0b24+PC9BcHBsaWNhdGlvbnNCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tcHJvamVjdHMucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWJ1dHRvbjJcIj5cbiAgICA8UHJvamVjdHNCdXR0b24+PC9Qcm9qZWN0c0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGVzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0ZW1wbGF0ZXNpY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLXRlbXBsYXRlcy5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGVzLWJ1dHRvbjJcIj5cbiAgICA8VGVtcGxhdGVzQnV0dG9uPjwvVGVtcGxhdGVzQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tc29jaWFsLW1lZGlhLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtYnV0dG9uMlwiPlxuICAgIDxTb2NpYWxNZWRpYUJ1dHRvbj48L1NvY2lhbE1lZGlhQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXR3b3JrMS1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXR3b3JrMS1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiL2xvZ28tbmV0d29yazEucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldHdvcmsxLWJ1dHRvbjJcIj5cbiAgICA8TmV0d29ya09uZUJ1dHRvbj48L05ldHdvcmtPbmVCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldHdvcmsyLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldHdvcmsyLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIvbG9nby1uZXR3b3JrMi5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV0d29yazItYnV0dG9uMlwiPlxuICAgIDxOZXR3b3JrVHdvQnV0dG9uPjwvTmV0d29ya1R3b0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbDEtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbDEtaWNvbjJcIj5cbiAgICA8aW1nIHNyYz1cIi9sb2dvLXdhbGwxLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsMS1idXR0b24yXCI+XG4gICAgPFdhbGxPbmVCdXR0b24+PC9XYWxsT25lQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsMi1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsMi1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiL2xvZ28td2FsbDIucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGwyLWJ1dHRvbjJcIj5cbiAgICA8V2FsbFR3b0J1dHRvbj48L1dhbGxUd29CdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmFseXRpY3MtcGFyZW50MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5hbHl0aWNzLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIvbG9nby1oZWFsdGgucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuYWx5dGljcy1idXR0b24yXCI+XG4gICAgPEFuYWx5dGljc0J1dHRvbj48L0FuYWx5dGljc0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJzLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFycy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLWNhbGVuZGFyLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhcnMtYnV0dG9uMlwiPlxuICAgIDxDYWxlbmRhcnNCdXR0b24+PC9DYWxlbmRhcnNCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIuL2xvZ28tcGhvbmUucG5nXCIgYWx0PVwiLVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLWJ1dHRvbjJcIj5cbiAgICA8UGhvbmVCdXR0b24+PC9QaG9uZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXNlYXJjaC1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXNlYXJjaC1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLXJlc2VhcmNoLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXNlYXJjaC1idXR0b24yXCI+XG4gICAgPFJlc2VhcmNoQnV0dG9uPjwvUmVzZWFyY2hCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaXZlLXBhcmVudDJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaXZlLWljb24yXCI+XG4gICAgPGltZyBzcmM9XCIvbG9nby1kcml2ZS5wbmdcIiBhbHQ9XCItXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpdmUtYnV0dG9uMlwiPlxuICAgIDxEcml2ZUJ1dHRvbj48L0RyaXZlQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlcy1wYXJlbnQyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlcy1pY29uMlwiPlxuICAgIDxpbWcgc3JjPVwiLi9sb2dvLW1lc3NhZ2VzLnBuZ1wiIGFsdD1cIi1cIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlcy1idXR0b24yXCI+XG4gICAgPE1lc3NhZ2VzQnV0dG9uPjwvTWVzc2FnZXNCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuXG5cblxuXG5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmNvbnN1bWVyLXBhcmVudDIge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDE1N3B4O1xuICAgICAgICBib3R0b206IDNweFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmNvbnN1bWVyLWNoaWxkMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG4gICAgLnRyZWUtcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDI5NzFweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIHRvcDogMjYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgfVxuXG4gICAgLnRyZWUtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC50cmVlLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMzQ1cHg7XG4gICAgICAgIHJpZ2h0OiA0MnB4O1xuICAgIH1cblxuXG5cblxuICAgIC5tZWRpY2FsLWluZm8tcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDI2MzZweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB0b3A6IDEzMXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OjMyO1xuICAgIH1cblxuICAgIC5tZWRpY2FsLWluZm8taWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuXG4gICAgLm1lZGljYWwtaW5mby1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDUzNnB4O1xuICAgICAgICBsZWZ0OiAyOTNweDtcbiAgICB9XG5cblxuXG4gICAgLmRvY3RvcnMtaW5mby1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjMzNHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB6LWluZGV4OiAzMjtcbiAgICB9XG5cbiAgICAuZG9jdG9ycy1pbmZvLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgIH1cblxuICAgIC5kb2N0b3JzLWluZm8tYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA3MjNweDtcbiAgICAgICAgbGVmdDogMjU5cHg7XG4gICAgfVxuXG5cblxuICAgIC5sYXd5ZXJzLWluZm8tcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDIwMzJweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgICAgIGJvdHRvbTogMTMwcHg7XG4gICAgfVxuXG4gICAgLmxhd3llcnMtaW5mby1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcblxuICAgIH1cblxuICAgIC5sYXd5ZXJzLWluZm8tYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA3NjRweDtcbiAgICAgICAgcmlnaHQ6IDIyNHB4O1xuICAgIH1cblxuXG4gICAgLmxlZ2FsLWluZm8tcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDE3NjhweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgICAgIGJvdHRvbTogMjYwcHg7XG4gICAgfVxuXG4gICAgLmxlZ2FsLWluZm8taWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgfVxuXG4gICAgLmxlZ2FsLWluZm8tYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA2NzFweDtcbiAgICAgICAgcmlnaHQ6IDI4NnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuLy8gUm93IHR3bzpcblxuXG4gICAgLm5ld3MtcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDI5NzFweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgICAgIGJvdHRvbTogMjMwcHg7XG4gICAgfVxuXG4gICAgLm5ld3MtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgfVxuXG4gICAgLm5ld3MtYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxNDk2cHg7XG4gICAgICAgIHJpZ2h0OiAyNDBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cblxuICAgIC5pbnZlc3RtZW50cy1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjYzNnB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiA3NTBweDtcbiAgICB9XG5cbiAgICAuaW52ZXN0bWVudHMtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG5cbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmludmVzdG1lbnRzLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTAzNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5pbmNvbWUtcGFyZW50MiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDIzMzRweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHotaW5kZXg6MzI7XG4gICAgICAgIGJvdHRvbTogODgwcHg7XG4gICAgfVxuXG4gICAgLmluY29tZS1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcblxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuaW5jb21lLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTU4MnB4O1xuICAgICAgICByaWdodDogNzYxcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG5cbiAgICAuYmFsYW5jZS1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjAzMnB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiAxMDEwcHg7XG4gICAgfVxuXG4gICAgLmJhbGFuY2UtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG5cbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmJhbGFuY2UtYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxNDU2cHg7XG4gICAgICAgIHJpZ2h0OiA3MzNweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cblxuICAgIC5mbG93cy1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMTc2OHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgYm90dG9tOiAxMTM5cHg7XG4gICAgfVxuXG4gICAgLmZsb3dzLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5mbG93cy1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDE1ODBweDtcbiAgICAgICAgcmlnaHQ6IDcwNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG5cblxuXG4vLyBSb3cgVGhyZWU6XG5cblxuLmRhc2hib2FyZC1wYXJlbnQyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDI5NzFweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OjEzMHB4O1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB6LWluZGV4OjMyO1xuICAgIGJvdHRvbTogNzNweDtcbn1cblxuLmRhc2hib2FyZC1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5kYXNoYm9hcmQtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjE3OHB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc29jaWFsLW1lZGlhLXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjYzNnB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgYm90dG9tOiAxNjM0cHg7XG59XG5cbi5zb2NpYWwtbWVkaWEtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uc29jaWFsLW1lZGlhLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEzNjNweDtcbiAgICBsZWZ0OiA0NjZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi5hcHBsaWNhdGlvbnMtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyMzM0cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgYm90dG9tOiAxMjQ0cHg7XG59XG5cbi5hcHBsaWNhdGlvbnMtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5hcHBsaWNhdGlvbnMtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTE4NnB4O1xuICAgIHJpZ2h0OiAyNjRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucHJvamVjdHMtcGFyZW50MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAxNzY4cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuXG4gICAgaGVpZ2h0OjEzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDozMjtcbiAgICBib3R0b206IDEzNzNweDtcbn1cblxuLnByb2plY3RzLWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcblxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4ucHJvamVjdHMtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUxNnB4O1xuICAgIHJpZ2h0OiA5ODZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGVtcGxhdGVzLXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjAzMnB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB6LWluZGV4OjMyO1xuICAgIGJvdHRvbTogMTUwM3B4O1xufVxuXG4udGVtcGxhdGVzLWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcblxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4udGVtcGxhdGVzLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEzNTZweDtcbiAgICByaWdodDogODE0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG5cblxuLy8gUm93IEZvdXI6XG5cblxuLmdvb2RzLXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjk3MXB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgdG9wOiA4NHB4O1xufVxuXG4uZ29vZHMtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuICAgIGxlZnQ6XG5cbn1cblxuLmdvb2RzLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE4MDBweDtcbiAgICBsZWZ0OiAyM3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tYWlsYm94LXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjYzNnB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB6LWluZGV4OjMyO1xuICAgIGJvdHRvbTogODI3cHg7XG59XG5cbi5tYWlsYm94LWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcblxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4ubWFpbGJveC1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTAwcHg7XG4gICAgcmlnaHQ6IDIxNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb21wb3NlLXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjMzNHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB6LWluZGV4OjMyO1xuICAgIGJvdHRvbTogNjk2cHg7XG59XG5cbi5jb21wb3NlLWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcblxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uY29tcG9zZS1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTAwcHg7XG4gICAgcmlnaHQ6IDIyNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYWxlbmRhcnMtcGFyZW50MiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDEyMjJweDtcbiAgICByaWdodDogMjAzMnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm90dG9tOiAyMTE0cHg7XG59XG5cbi5jYWxlbmRhcnMtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuICAgIGxlZnQ6IDcycHg7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5jYWxlbmRhcnMtYnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTEyNXB4O1xuICAgIGxlZnQ6IDI3cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnBob25lLXBhcmVudDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDE3NjhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJvdHRvbTogMjI0MnB4O1xufVxuXG4ucGhvbmUtaWNvbjIge1xuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4O1xuICAgIGxlZnQ6IDUycHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5waG9uZS1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTQ3cHg7XG4gICAgbGVmdDogMjM3cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG5cbi8vIFJvdyBGaXZlIDpcblxuLnNlcnZpY2VzLXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjk3MXB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgdG9wOiAyNDFweDtcbn1cblxuLnNlcnZpY2VzLWljb24yIHtcbiAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgIGhlaWdodDoxMzBweDtcbn1cblxuLnNlcnZpY2VzLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE4MDBweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cblxuLm1lc3NhZ2VzLXBhcmVudDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjYzNnB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6MzI7XG4gICAgYm90dG9tOiAyMzU3cHg7XG59XG5cbi5tZXNzYWdlcy1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG59XG5cbi5tZXNzYWdlcy1idXR0b24yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTg4cHg7XG4gICAgbGVmdDogMTQ3cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgXG5cblxuXG4ucmVzZWFyY2gtcGFyZW50MiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjMzNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm90dG9tOiAyMDk3cHg7XG59XG5cbi5yZXNlYXJjaC1pY29uMiB7XG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTMwcHg7XG4gICAgbGVmdDo2MXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlc2VhcmNoLWJ1dHRvbjIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE5NjRweDtcbiAgICBsZWZ0OiAzNzJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG4gICAgLndhbGwxLXBhcmVudDIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAyMDMycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIGJvdHRvbTogMTQ0N3B4O1xuICAgIH1cbiAgICBcbiAgICAud2FsbDEtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIGxlZnQ6IDY1cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIH1cbiAgICBcbiAgICAud2FsbDEtYnV0dG9uMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAyMTMycHg7XG4gICAgICAgIHJpZ2h0OiAyNTRweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cblxuICAgIC53YWxsMi1wYXJlbnQyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMTc2OHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBib3R0b206IDE1NzdweDtcbiAgICB9XG4gICAgXG4gICAgLndhbGwyLWljb24yIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjEzMHB4O1xuICAgICAgICBsZWZ0OiA2NXB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLndhbGwyLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTk5MnB4O1xuICAgICAgICByaWdodDogNzZweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cblxuXG4gICAgLy8gUm93IFNpeCA6XG5cbiAgICAucmV2aWV3cy1wYXJlbnQyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMjk3MXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgei1pbmRleDozMjtcbiAgICAgICAgdG9wOiAxMDQ4cHg7XG4gICAgfVxuXG4gICAgLnJldmlld3MtaWNvbjIge1xuICAgICAgICB3aWR0aDogMTMwcHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICBcbiAgICB9XG5cbiAgICAucmV2aWV3cy1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDE0NThweDtcbiAgICAgICAgbGVmdDogMjk2cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLmFuYWx5dGljcy1wYXJlbnQyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IDE0MTlweDtcbiAgICAgICAgcmlnaHQ6IDI2MzZweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICB9XG4gICAgXG4gICAgLmFuYWx5dGljcy1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA2NXB4O1xuICAgIH1cbiAgICBcbiAgICAuYW5hbHl0aWNzLWJ1dHRvbjIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDczMHB4O1xuICAgICAgICB0b3A6IDE0NDNweDtcbiAgICB9XG5cbiAgICAuZHJpdmUtcGFyZW50MiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDIzMzRweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYm90dG9tOiAxOTMycHg7XG4gICAgfVxuICAgIFxuICAgIC5kcml2ZS1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgbGVmdDo2MXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5kcml2ZS1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDE5NjNweDtcbiAgICAgICAgbGVmdDogMjMycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuXG4gICAgLm5ldHdvcmsxLXBhcmVudDIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAyMDMycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIGJvdHRvbTogODkzcHg7XG4gICAgfVxuICAgIFxuICAgIC5uZXR3b3JrMS1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgbGVmdDo2OXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5uZXR3b3JrMS1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDIxNDdweDtcbiAgICAgICAgbGVmdDogNzhweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG5cbiAgICAubmV0d29yazItcGFyZW50MiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDE3NjhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYm90dG9tOiAxMDIxcHg7XG4gICAgfVxuICAgIFxuICAgIC5uZXR3b3JrMi1pY29uMiB7XG4gICAgICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDoxMzBweDtcbiAgICAgICAgbGVmdDo2NHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5uZXR3b3JrMi1idXR0b24yIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDE5OTNweDtcbiAgICAgICAgbGVmdDogMTczcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lcjIge1xuICAgIH1cblxuICAgIC5uZXdzLWJ1dHRvbi1jb250YWluZXIyOmhvdmVyIHtcbiAgICB9XG5cblxuICAgIC5jb25zdW1lci1pbWFnZS1jb250YWluZXIyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cblxuICAgIC5jb25zdW1lci1pbWFnZTIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGhlaWdodDogMjAwMHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBsZWZ0OiAxcHg7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyLWltYWdlLWJhY2tncm91bmQyIHtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgaGVpZ2h0OiAxOTQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMDAwMDAsICMwMjA5MWIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgei1pbmRleDoxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgICAgIHRvcDogMTAyMHB4O1xuICAgICAgICByaWdodDogMTUzNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuICAgIEBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gICAgICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbn1cbiAgICB9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Consumer2.js */"));
  }

}

/***/ }),

/***/ "./src/components/Dock.js":
/*!********************************!*\
  !*** ./src/components/Dock.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dock; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sound */ "react-sound");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Dock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // So you now we make an onClick event with first goal registering a console.log() 

const BalloonWrenchPicFilled = "/balloon-wrench-filled.svg";
const BalloonWrenchPic = "/balloon-wrench.svg";
const TwirlPicFilled = "/twirl-filled.svg";
const TwirlPic = "/twirl.svg";
const SoundPicOn = "/sound-on.svg";
const SoundPic = "/sound.svg";
const MenuOverflowUp = "menu-overflow-up.png";
const SoundClick = "/sound-click.mp3";
const SoundOpening = "/sound-opening.mp3";
const SoundFailure = "/sound-failure2.mp3"; //input.value() is how you got the inputs value

function Dock(props) {
  let dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  let isNewsInputContent = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isNewsContent);
  let inputValue;

  const setValue = () => {
    let input = document.querySelector('.inpt');
    input.addEventListener("keydown", event => {
      if (event.keyCode === 13) {
        let inputForNews = input.value;
        dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["isNewsContent"])(inputForNews));
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

  return __jsx("div", {
    className: "jsx-3467846270" + " " + "dock-panel-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("div", {
    onClick: DockClicked,
    className: "jsx-3467846270" + " " + "dock-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3467846270" + " " + "search-bar-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3467846270" + " " + "cntr-innr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3467846270" + " " + "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
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
    className: "jsx-3467846270" + " " + "inpt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }))), __jsx("img", {
    src: "/SearchBarEmpty.png",
    alt: "-",
    className: "jsx-3467846270" + " " + "search-bar-png2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3467846270" + " " + "oea-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3467846270" + " " + "oea-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Sun Runner")), __jsx("div", {
    className: "jsx-3467846270" + " " + "oea-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("img", {
    src: "/back.svg",
    alt: "some",
    className: "jsx-3467846270" + " " + "back-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), __jsx("img", {
    src: "/forward.svg",
    alt: "some",
    className: "jsx-3467846270" + " " + "forward-button-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), __jsx("img", {
    onClick: props.iris,
    src: "/iris.svg",
    alt: "some",
    className: "jsx-3467846270" + " " + "iris-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), __jsx("div", {
    id: "twirl-container",
    onClick: twirlContainerClicked,
    className: "jsx-3467846270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("img", {
    onClick: props.twirl,
    src: props.business ? TwirlPicFilled : TwirlPic,
    alt: "some",
    className: "jsx-3467846270" + " " + "twirl-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })), __jsx("div", {
    onClick: balloonContainerClicked,
    className: "jsx-3467846270" + " " + "balloon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("img", {
    onClick: props.balloon,
    src: state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
    alt: "some",
    className: "jsx-3467846270" + " " + "balloon-wrench-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), __jsx("div", {
    onClick: menuOverflowClicked,
    className: "jsx-3467846270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("img", {
    onClick: props.menu,
    src: MenuOverflowUp,
    alt: "some",
    className: "jsx-3467846270" + " " + "menu-overflow-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), __jsx("div", {
    onClick: navContainerClicked,
    className: "jsx-3467846270" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx("img", {
    onClick: props.nav,
    src: "/earth2.png",
    alt: "some",
    className: "jsx-3467846270" + " " + "nav-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  })), __jsx("img", {
    src: "/history.svg",
    alt: "some",
    className: "jsx-3467846270" + " " + "history-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx("img", {
    src: "/snake.svg",
    alt: "some",
    className: "jsx-3467846270" + " " + "snake-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), __jsx("div", {
    onClick: soundContainerClicked,
    className: "jsx-3467846270" + " " + "sound-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("img", {
    src: "/sound.svg",
    alt: "some",
    className: "jsx-3467846270" + " " + "sound-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3467846270",
    __self: this
  }, ".cntr-innr.jsx-3467846270{display:table-cell;text-align:center;vertical-align:middle;position:relative;top:72px;left:25px;z-index:10;}.cntr.jsx-3467846270{display:table;z-index:10;}.search.jsx-3467846270{top:14px;position:relative;right:19px;height:65px;width:65px;box-sizing:border-box;margin:0px 8px 7px 0px;padding:7px 9px 0px 9px;border:3px solid black;border-radius:33px;-webkit-transition:all 200ms ease;transition:all 200ms ease;cursor:text;z-index:10;}.search.active.jsx-3467846270,.search.jsx-3467846270:hover{width:1520px;position:relative;margin-right:0px;}.search.active.jsx-3467846270:after,.search.jsx-3467846270:hover.jsx-3467846270:after{height:0px;}.search.jsx-3467846270 input.jsx-3467846270{width:100%;border:none;left:14x;bottom:4px;position:relative;box-sizing:border-box;font-family:Montserrat;font-size:34px;color:inherit;background:transparent;outline-width:0px;}.inpt.jsx-3467846270{position:relative;left:15px;}.dock-panel-parent.jsx-3467846270{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-3467846270{pointer-events:all;width:1536px;height:84px;font-family:Montserrat;font-size:23px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:161px;color:#2FA4E7;border:black;z-index:100;background:linear-gradient(270deg,#000000,#29292c);background-size:400% 400%;-webkit-animation:AnimationName-jsx-3467846270 23s ease-in-out infinite;animation:AnimationName-jsx-3467846270 23s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-3467846270{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-3467846270{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.search-bar-parent.jsx-3467846270{pointer-events:all;justifty-items:center;}.search-bar-png2.jsx-3467846270{width:1536px;position:relative;padding-bottom:227px;}.oea-title.jsx-3467846270{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}.oea-text.jsx-3467846270{font-family:Montserrat;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:38px;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);bottom:7px;right:10px;padding-left:145px;position:absolute;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.oea-content.jsx-3467846270{display:none;font-family:Montserrat;font-size:38px;position:relative;top:12px;width:1507px;height:76px;right:1513px;}.back-button-svg.jsx-3467846270{height:62px;width:62px;position:absolute;}.forward-button-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:76px;}.left-hexagons.jsx-3467846270{height:66px;width:260px;position:absolute;left:152px;}.balloon-wrench-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:492px;}.nav-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:574px;}.menu-overflow-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:656px;}.twirl-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:738px;}.history-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:820px;}.iris-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:902px;}.sound-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:984px;}.next-template-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:1062px;}.right-hexagons.jsx-3467846270{height:62px;width:260px;position:absolute;left:1148px;}.snake-svg.jsx-3467846270{height:62px;width:62px;position:absolute;left:1420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1BvQixBQUs0QixBQVNELEFBTUwsQUFrQkksQUFLRixBQUdBLEFBY0csQUFNRCxBQU9NLEFBa0JRLEFBQ0csQUFDRCxBQUtOLEFBS1AsQUFNQyxBQUtVLEFBY1YsQUFZRCxBQUtBLEFBT0EsQUFRQSxBQU9BLEFBUUEsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQVFBLEFBT0EsQUFPQSxTQTVNQyxFQXVCdEIsQUFHaUIsQ0E4RkcsQUFLQSxBQU9DLEFBUUQsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQU9DLEFBT0QsQ0EzTEcsQUFpRUksQUF5QkssQ0FsSGpCLElBOENKLENBdkRRLEFBb0VELEFBeUJhLElBbkRqQixBQW1FTyxBQTJCTSxBQUtBLEFBZUEsQUFPQSxBQVFBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFRQSxBQWNBLENBekVBLEFBa0VBLENBNU0zQixFQU1nQixBQXFFaUIsQUFFRSxDQS9CbkMsQ0E4Qm9DLEVBcERkLEFBaUVRLENBeERkLEFBMEJDLElBdURPLENBM0hELENBZ0JOLEdBNkVaLEFBMkNBLEFBS2MsQUFlQSxBQVFDLEFBT0QsQUFPQyxBQU9ELEFBT0EsQUFRQyxBQU9BLEFBZUMsQ0ExRUQsQUFrRUMsQ0EzS0UsQ0EwQkssSUFuQzVCLEVBakJnQixDQTJHVyxBQWtCdEIsQ0EzQ0EsQUEwREEsQUFRQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBUUEsQ0FwREEsQUEyREEsQUFlQSxDQVJBLEtBdE5jLEVBaUJRLEFBMEJBLE1BMEJQLEVBdURGLEtBakVNLEFBMkNILEdBckdaLENBNEhhLElBdkRDLENBcERLLEFBMEJBLEdBMUNqQixBQXFHTixLQXVCZ0IsS0EzSFQsQ0F5R1ksR0FyQ04sR0F3REksR0E1R08sQUEwQlQsQ0F6Q3hCLEtBeUdrQyxJQW1CekIsS0FsRmMsU0ExQlMsS0EyQkEsa0JBMUJKLEtBMkJELFNBWUssS0F0Q0csRUFrRFAsRUF2QnhCLFdBNkRvQixXQUNBLFdBQ1EsbUJBQ0QsSUExRlYsWUFDRixFQTBGcUUsU0F6RnBGLFdBcUNDLENBVzJCLGtEQTBDVSw2QkFDTyxvQkExQzlCLFVBQ0ksTUEwQ2QsUUF6Q2EsYUFDRCxZQUN5QyxtREFDM0IsMEJBQ3VCLHdJQU9yRCIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL1N1blJ1bm5lci9zcmMvY29tcG9uZW50cy9Eb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU291bmQgZnJvbSAncmVhY3Qtc291bmQnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG5leHRUZW1wbGF0ZUNsaWNrZWQgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHByZXZpb3VzVGVtcGxhdGVDbGlja2VkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBiYWxsb29uQ2xpY2tlZCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgaXNOZXdzQ29udGVudCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vLyBTbyB5b3Ugbm93IHdlIG1ha2UgYW4gb25DbGljayBldmVudCB3aXRoIGZpcnN0IGdvYWwgcmVnaXN0ZXJpbmcgYSBjb25zb2xlLmxvZygpIFxuXG5jb25zdCBCYWxsb29uV3JlbmNoUGljRmlsbGVkID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiXG5jb25zdCBCYWxsb29uV3JlbmNoUGljID0gXCIvYmFsbG9vbi13cmVuY2guc3ZnXCJcbmNvbnN0IFR3aXJsUGljRmlsbGVkID0gXCIvdHdpcmwtZmlsbGVkLnN2Z1wiIFxuY29uc3QgVHdpcmxQaWMgPSBcIi90d2lybC5zdmdcIlxuY29uc3QgU291bmRQaWNPbiA9IFwiL3NvdW5kLW9uLnN2Z1wiXG5jb25zdCBTb3VuZFBpYyA9IFwiL3NvdW5kLnN2Z1wiXG5jb25zdCBNZW51T3ZlcmZsb3dVcCA9IFwibWVudS1vdmVyZmxvdy11cC5wbmdcIlxuY29uc3QgU291bmRDbGljayA9IFwiL3NvdW5kLWNsaWNrLm1wM1wiXG5jb25zdCBTb3VuZE9wZW5pbmcgPSBcIi9zb3VuZC1vcGVuaW5nLm1wM1wiXG5jb25zdCBTb3VuZEZhaWx1cmUgPSBcIi9zb3VuZC1mYWlsdXJlMi5tcDNcIlxuXG5cbi8vaW5wdXQudmFsdWUoKSBpcyBob3cgeW91IGdvdCB0aGUgaW5wdXRzIHZhbHVlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY2socHJvcHMpIHtcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGxldCBpc05ld3NJbnB1dENvbnRlbnQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc05ld3NDb250ZW50KTtcbiAgICBsZXQgaW5wdXRWYWx1ZTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHQnKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0Rm9yTmV3cyA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGlzTmV3c0NvbnRlbnQoaW5wdXRGb3JOZXdzKSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxwXCIgKyBpc05ld3NJbnB1dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGxldCB0aGVTdGF0ZSA9IHtcbiAgICAgICAgZG9ja0Jvb2xlYW46IHRydWUsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgc291bmRCb29sZWFuOiB0cnVlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46dHJ1ZSxcbiAgICAgICAgbWVudU92ZXJmbG93Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbmF2Qm9vbGVhbjogdHJ1ZVxuICAgIH1cbiBcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHRoZVN0YXRlKTtcbiAgICBsZXQgaXNOZXdzQmFsbG9vbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0JhbGxvb24pXG4gICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc05ld3NCYWxsb29uKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIilcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGxldCBhY3RpdmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB0XCIpXG4gICAgICAgICAgICBhY3RpdmUyLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIC8vVGhpcyBjaGFuZ2VzIHRoZSBiYWxsb24gd3JlbmNoIGJ1dHRvblxuICAgICAgICAgICAgbGV0IHN0YXRlbHkgPSBzdGF0ZS5iYWxsb29uQm9vbGVhbjtcbiAgICAgICAgICAgIHN0YXRlbHkgPSBzZXRTdGF0ZShpc05ld3NCYWxsb29uKTsgXG4gICAgICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgbGV0IGlucHRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHRfc2VhcmNoXCIpO1xuICAgICAgICBpbnB0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIilcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgaW5wdFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5hY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJylcbiAgICAgICAgICAgIGluYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBEb2NrQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoeyBkb2NrQm9vbGVhbjogIXN0YXRlLmRvY2tCb29sZWFuIH0gKVxuICAgICAgICBsZXQgYXVkaW9PcGVuaW5nID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGxldCBhdWRpb0Nsb3NpbmcgPSBuZXcgQXVkaW8oU291bmRDbGljaylcbiAgICAgICAgaWYgKHN0YXRlLmRvY2tCb29sZWFuKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgYXVkaW9PcGVuaW5nLnBsYXkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtdGl0bGVcIilcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgICAgICBhdWRpb0Nsb3NpbmcucGxheSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBTb3VuZENsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFNvdW5kQ2xpY2spXG4gICAgICAgIGF1ZGlvLnBsYXkoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3VuZEJvb2xlYW46ICFzdGF0ZS5zb3VuZEJvb2xlYW5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICFzdGF0ZS5idXNpbmVzc0Jvb2xlYW59XG4gICAgICAgIClcbiAgICAgICAgaWYgKHN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGF1ZGlvT3BlbmluZyA9IG5ldyBBdWRpbyhTb3VuZE9wZW5pbmcpXG4gICAgICAgICAgICBhdWRpb09wZW5pbmcucGxheSgpXG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBzb3VuZENvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7c291bmRCb29sZWFuOiAhc3RhdGUuc291bmRCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5zb3VuZEJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3NvdW5kLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3VuZC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9zb3VuZC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmFsbG9vbkNvbnRhaW5lckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZGlzcGF0Y2goYmFsbG9vbkNsaWNrZWQoKSk7XG5cbiAgICAgICAgc2V0U3RhdGUoXG4gICAgICAgICAgICB7YmFsbG9vbkJvb2xlYW46ICFzdGF0ZS5iYWxsb29uQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24td3JlbmNoLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLXdyZW5jaC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVudU92ZXJmbG93Q2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRTdGF0ZShcbiAgICAgICAgICAgIHttZW51T3ZlcmZsb3dCb29sZWFuOiAhc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAoc3RhdGUubWVudU92ZXJmbG93Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1vdmVyZmxvdy1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9tZW51LW92ZXJmbG93LWRvd24ucG5nXCIgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1vdmVyZmxvdy1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi9tZW51LW92ZXJmbG93LXVwLnBuZ1wiIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmF2Q29udGFpbmVyQ2xpY2tlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIHNldFN0YXRlKFxuICAgICAgICAgICAge25hdkJvb2xlYW46ICFzdGF0ZS5uYXZCb29sZWFufVxuICAgICAgICApXG4gICAgICAgIGlmIChzdGF0ZS5uYXZCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLWNvbnRlbnRcIilcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICAgICAgdGl0bGUuc3R5bGUgPSBcImZsZXhcIlxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsLXBhcmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWxcIiBvbkNsaWNrPXtEb2NrQ2xpY2tlZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcGFyZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNudHItaW5uclwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFZhbHVlfSBpZD1cImlucHRfc2VhcmNoXCIgb25DaGFuZ2U9e3NldFZhbHVlfSBhdXRvRm9jdXMgbWluTGVuZ3RoPVwiNFwiIG1heExlbmd0aD1cIjhcIiBjbGFzc05hbWU9XCJpbnB0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcG5nMlwiIHNyYz1cIi9TZWFyY2hCYXJFbXB0eS5wbmdcIiBhbHQ9XCItXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZWEtdGl0bGVcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJvZWEtdGV4dFwiPlN1biBSdW5uZXI8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJhY2stYnV0dG9uLXN2Z1wiIHNyYz1cIi9iYWNrLnN2Z1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9yd2FyZC1idXR0b24tc3ZnXCIgc3JjPVwiL2ZvcndhcmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLmlyaXN9IGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL2lyaXMuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidHdpcmwtY29udGFpbmVyXCIgb25DbGljaz17dHdpcmxDb250YWluZXJDbGlja2VkfT5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudHdpcmx9IGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHByb3BzLmJ1c2luZXNzID8gVHdpcmxQaWNGaWxsZWQgOiBUd2lybFBpY30gYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17IGJhbGxvb25Db250YWluZXJDbGlja2VkIH0gY2xhc3NOYW1lPVwiYmFsbG9vbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMuYmFsbG9vbn0gY2xhc3NOYW1lPVwiYmFsbG9vbi13cmVuY2gtc3ZnXCIgc3JjPXsgc3RhdGUuYmFsbG9vbkJvb2xlYW4gPyBCYWxsb29uV3JlbmNoUGljRmlsbGVkIDogQmFsbG9vbldyZW5jaFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e21lbnVPdmVyZmxvd0NsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5tZW51fSBjbGFzc05hbWU9XCJtZW51LW92ZXJmbG93LXN2Z1wiIHNyYz17TWVudU92ZXJmbG93VXB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiIG9uQ2xpY2s9e25hdkNvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy5uYXZ9IGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIvZWFydGgyLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpc3Rvcnktc3ZnXCIgc3JjPVwiL2hpc3Rvcnkuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNuYWtlLXN2Z1wiIHNyYz1cIi9zbmFrZS5zdmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17IHNvdW5kQ29udGFpbmVyQ2xpY2tlZCB9IGNsYXNzTmFtZT1cInNvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9XCIvc291bmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIFxuICAgICAgIC5jbnRyLWlubnIge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOjcycHg7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgfVxuICAgICAgICAuY250ciB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgfVxuXG4gICAgICAgLyoqKiBTVFlMRVMgKioqL1xuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgIHRvcDogMTRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgcmlnaHQ6IDE5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA4cHggN3B4IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA5cHggMHB4IDlweDtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2g6YWZ0ZXIge1xuXG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoLmFjdGl2ZSwgLnNlYXJjaDpob3ZlciB7XG4gICAgICAgICAgICB3aWR0aDogMTUyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgfVxuICAgICAgICAuc2VhcmNoLmFjdGl2ZTphZnRlciwgLnNlYXJjaDpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICB9XG4gICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBsZWZ0OiAxNHg7XG4gICAgICAgICAgICBib3R0b206IDRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwcHg7XG4gICAgICAgfVxuXG4gICAgICAgLmlucHQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAuZG9jay1wYW5lbC1wYXJlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZG9jay1wYW5lbCB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgICAgIGhlaWdodDogODRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRvcDogMTYxcHg7XG4gICAgICAgICAgICBjb2xvcjogIzJGQTRFNztcbiAgICAgICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAwMDAwLCAjMjkyOTJjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDIzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuICAgICAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wYXJlbnQge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICAgICAganVzdGlmdHktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wbmcyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxNTM2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMjdweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm9lYS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgICAgICAgICBib3R0b206IDdweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0NXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNTEzcHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLmJhY2stYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3J3YXJkLWJ1dHRvbi1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxlZnQtaGV4YWdvbnMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1MnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5iYWxsb29uLXdyZW5jaC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo0OTJweDtcbiAgICAgICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgICAgICAubmF2LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogNTc0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tZW51LW92ZXJmbG93LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjY1NnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHdpcmwtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDczOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlzdG9yeS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo4MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuaXJpcy1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo5MDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvdW5kLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogOTg0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0LXRlbXBsYXRlLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OjEwNjJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJpZ2h0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMTQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbmFrZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdDogMTQyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Dock.js */"));
}

/***/ }),

/***/ "./src/components/Iris.js":
/*!********************************!*\
  !*** ./src/components/Iris.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Iris; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Iris.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Iris extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    _defineProperty(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    _defineProperty(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    _defineProperty(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-3088782414" + " " + "iris-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3088782414" + " " + "iris-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("video", {
      preload: "auto",
      autoPlay: true,
      loop: true,
      width: "1536",
      height: "2048",
      className: "jsx-3088782414" + " " + "iris-video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("source", {
      src: "/Iris.mp4",
      type: "video/mp4",
      className: "jsx-3088782414",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3088782414",
      __self: this
    }, ".iris-parent.jsx-3088782414{height:2048px;width:1536px;}.iris-child.jsx-3088782414{margin-left:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0lyaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQixBQUdzQixBQUtJLGNBSkosR0FLakIsVUFKQSIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL1N1blJ1bm5lci9zcmMvY29tcG9uZW50cy9JcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJcmlzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBtZW51Qm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIG1lbnVcIiArIHRoaXMuc3RhdGUubWVudUJvb2xlYW4pXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXJpcy1wYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlyaXMtY2hpbGRcIj5cbiAgICA8dmlkZW8gcHJlbG9hZD1cImF1dG9cIiBhdXRvUGxheSBsb29wIGNsYXNzTmFtZT1cImlyaXMtdmlkZW9cIiB3aWR0aD1cIjE1MzZcIiBoZWlnaHQ9XCIyMDQ4XCI+XG4gICAgPHNvdXJjZSBzcmM9XCIvSXJpcy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4gICAgPC92aWRlbz5cblxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmlyaXMtcGFyZW50IHtcbiAgICAgICAgaGVpZ2h0OjIwNDhweDtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICB9XG5cbiAgICAuaXJpcy1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIH1cblxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Iris.js */"));
  }

}

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const Layout = props => {
  const instance = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {});
  return __jsx("div", {
    className: "jsx-1869511498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-1869511498" + " " + "title-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Welcome : )"), __jsx("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cerulean/bootstrap.min.css",
    className: "jsx-1869511498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon.png",
    className: "jsx-1869511498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-1869511498" + " " + "highest-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, props.children), __jsx("div", {
    ref: instance,
    className: "jsx-1869511498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1869511498",
    __self: undefined
  }, ".title-parent.jsx-1869511498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;left:200px;}.title.jsx-1869511498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;left:200px;}.highest-parent.jsx-1869511498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow-y:hidden;overflow-x:hidden;height:2800px;padding-bottom:600px;background:linear-gradient(70deg,#000000,#010923);background-size:400% 400%;-webkit-animation:AnimationName-jsx-1869511498 10s ease-in-out infinite;animation:AnimationName-jsx-1869511498 10s ease-in-out infinite;}@-webkit-keyframes AnimationName-jsx-1869511498{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-1869511498{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBSXdCLEFBUUEsQUFNRSxBQWNRLEFBQ0csQUFDRCwyQkFGRCxBQUVFLEVBREMsNkNBNUJKLEFBUUEsQUFNRiw2RkFDSSxNQWRQLEFBUUEsa0JBQ1AsV0FDYixnRUFUbUIsQUFjRSxrQkFiUixBQWNRLFdBYnJCLE9BY2tCLGNBQ08scUJBQytCLGtEQUMxQiwwQkFDdUIsd0lBQ3JEIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBpbnN0YW5jZSA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gIH0pXG5cblxuICAgIHJldHVybiAoXG5cbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZSBjbGFzc05hbWU9XCJ0aXRsZS1wYXJlbnRcIj5XZWxjb21lIDogKTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9jZXJ1bGVhbi9ib290c3RyYXAubWluLmNzc1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaWdoZXN0LXBhcmVudFwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIDxkaXYgcmVmPXtpbnN0YW5jZX0vPlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAudGl0bGUtcGFyZW50IHsgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxlZnQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oaWdoZXN0LXBhcmVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICAgICAgICAgIGhlaWdodDogMjgwMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDYwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjMDAwMDAwLCAjMDEwOTIzKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG5cbiAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG59XG4gIH1cbiAgICBgfVxuICAgIFxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuXG4gICAgKVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








let consumer = "/Consumer.png";
let business = "/Business.png";
class Menu extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    _defineProperty(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    _defineProperty(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    _defineProperty(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("menu parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1062982125" + " " + "parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1062982125" + " " + "child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("img", {
      src: "/MenuOverflow.png",
      alt: "text",
      className: "jsx-1062982125" + " " + "menu-overflow-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1062982125",
      __self: this
    }, ".parent.jsx-1062982125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:60px;}.menu-overflow-image.jsx-1062982125{width:1536px;height:2048px;margin-left:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL01lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURnQixBQUlzQixBQVVBLGFBQ0MsY0FDRyxpQkFDckIsOEJBWnVCLDZGQUNJLG1HQUNKLG9CQUN2QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL1N1blJ1bm5lci9zcmMvY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJlZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvdHJlZS1idXR0b24vdHJlZS1idXR0b24nO1xuaW1wb3J0IE1lZGljYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9tZWRpY2FsLWluZm8tYnV0dG9uL21lZGljYWwtaW5mby1idXR0b24nO1xuaW1wb3J0IERvY3RvcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2RvY3RvcnMtYnV0dG9uL2RvY3RvcnMtYnV0dG9uJztcbmltcG9ydCBMYXd5ZXJzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sYXd5ZXJzLWJ1dHRvbi9sYXd5ZXJzLWJ1dHRvbic7XG5cbmxldCBjb25zdW1lciA9IFwiL0NvbnN1bWVyLnBuZ1wiXG5sZXQgYnVzaW5lc3MgPSBcIi9CdXNpbmVzcy5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IGZhbHNlLFxuICAgICAgICBtZW51Qm9vbGVhbjogZmFsc2VcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGJ1c2luZXNzQ2xpY2tlZFBhcmVudCh2YWx1ZSkge1xuXG4gICAgfVxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgcGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgbWVudVwiICsgdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctaW1hZ2VcIiBzcmM9XCIvTWVudU92ZXJmbG93LnBuZ1wiIGFsdD1cInRleHRcIiAvPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG5cbiAgICAucGFyZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjYwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jaGlsZCB7XG4gICAgfVxuXG4gICAgLm1lbnUtb3ZlcmZsb3ctaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgICAgICBoZWlnaHQ6IDIwNDhweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Menu.js */"));
  }

}

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Nav extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    _defineProperty(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    _defineProperty(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    _defineProperty(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-2971598890" + " " + "nav-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2971598890" + " " + "nav-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2971598890",
      __self: this
    }, ".nav-parent.jsx-2971598890{height:2048px;width:1536px;}.nav-child.jsx-2971598890{margin-left:13px;}.nav-video.jsx-2971598890{position:relative;left:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2dCLEFBR3NCLEFBS0ksQUFJQyxjQVJMLEdBS2pCLENBSWEsU0FSYixBQVNBIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNvdW5kQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIGJhbGxvb25Cb29sZWFuOiBmYWxzZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgbWVudUJvb2xlYW46IGZhbHNlXG4gICAgfVxuXG4gICAgdHdpcmxGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzaW5lc3NCb29sZWFuOiAhdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBidXNpbmVzc0Jvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgIH1cblxuICAgIHNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCb29sZWFuOiAhdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IG1lbnVCb29sZWFuIFN0YXRlIGNoYW5nZWRcIilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgbWVudVwiICsgdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbilcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIilcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY2hpbGRcIj5cblxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLm5hdi1wYXJlbnQge1xuICAgICAgICBoZWlnaHQ6MjA0OHB4O1xuICAgICAgICB3aWR0aDogMTUzNnB4O1xuICAgIH1cblxuICAgIC5uYXYtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICB9XG5cbiAgICAubmF2LXZpZGVvIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAycHg7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTmF2LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGJwaTogZGF0YS5icGlcbiAgfTtcbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/components/Nav.js */"));
  }

}

Nav.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Business__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Business */ "./src/components/Business.js");
/* harmony import */ var _components_Business2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Business2 */ "./src/components/Business2.js");
/* harmony import */ var _components_Consumer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Consumer */ "./src/components/Consumer.js");
/* harmony import */ var _components_Consumer2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Consumer2 */ "./src/components/Consumer2.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Iris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Iris */ "./src/components/Iris.js");
/* harmony import */ var _components_BalloonWrench__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BalloonWrench */ "./src/components/BalloonWrench.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












function Index() {
  const balloonWrench = "/balloon-wrench.svg";
  const balloonWrenchFilled = "/balloon-wrench-filled.svg";
  let isNewsBoolean = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.isNews);
  let isDashboardBoolean = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.isDashboard);
  const isFilled = isNewsBoolean || isDashboardBoolean;
  let theState = {
    soundBoolean: false,
    balloonBoolean: true,
    panelOpen: false,
    businessBoolean: true,
    menuBoolean: true,
    navBoolean: true,
    irisBoolean: true
  };
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(theState); // let isNextTemplate = useSelector(state => state.isNextTemplate)
  // let isPreviousTemplate = useSelector(state => state.isPreviousTemplate)

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {// if (isNextTemplate) {
    //     let consumer = document.querySelector(".consumer")
    //     consumer.style.display = "none";
    //     let consumer2 = document.querySelector(".consumer2")
    //     consumer2.style.display = "flex";
    // }
    // if (isPreviousTemplate) {
    //     let consumer = document.querySelector(".consumer")
    //     consumer.style.display = "flex";
    //     let consumer2 = document.querySelector(".consumer2")
    //     consumer2.style.display = "none";
    // }
  });

  const twirlFunction = () => {
    setState({
      businessBoolean: !state.businessBoolean
    });

    if (state.businessBoolean) {
      let business = document.querySelector(".business2");
      business.style.display = "flex";
      let consumer = document.querySelector(".consumer2");
      consumer.style.display = "none";
    } else if (!state.businessBoolean) {
      let consumer = document.querySelector(".consumer2");
      consumer.style.display = "flex";
      let business = document.querySelector(".business2");
      business.style.display = "none";
    }
  };

  const soundFunction = () => {
    setState({
      soundBoolean: !state.soundBoolean
    });
  };

  const menuFunction = () => {
    setState({
      menuBoolean: !state.menuBoolean
    });

    if (state.menuBoolean) {
      let menu = document.querySelector(".menu");
      menu.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!state.menuBoolean) {
      let menu = document.querySelector(".menu");
      menu.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  const navFunction = () => {
    setState({
      navBoolean: !state.navBoolean
    });

    if (state.navBoolean) {
      let nav = document.querySelector(".nav");
      nav.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!state.navBoolean) {
      let nav = document.querySelector(".nav");
      nav.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  const balloonFunction = () => {
    setState({
      balloonBoolean: !state.balloonBoolean
    });

    if (state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "flex";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "flex";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "none";
    } else if (!state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "none";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "none";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "default";
    }
  };

  const irisFunction = () => {
    setState({
      irisBoolean: !state.irisBoolean
    });

    if (state.irisBoolean) {
      let iris = document.querySelector(".iris");
      iris.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!state.irisBoolean) {
      let iris = document.querySelector(".iris");
      iris.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2260454316" + " " + "index-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2260454316" + " " + "index-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_components_Dock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iris: irisFunction,
    balloon: balloonFunction,
    nav: navFunction,
    twirl: twirlFunction,
    sound: soundFunction,
    menu: menuFunction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2260454316" + " " + "balloon-cursor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("img", {
    src: isFilled ? balloonWrenchFilled : balloonWrench,
    alt: "-",
    className: "jsx-2260454316" + " " + "balloon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2260454316" + " " + "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2260454316" + " " + "business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2260454316" + " " + "business2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_components_Business2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2260454316" + " " + "consumer-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2260454316" + " " + "consumer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2260454316" + " " + "consumer2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(_components_Consumer2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2260454316" + " " + "menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2260454316" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2260454316" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2260454316" + " " + "balloon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_components_BalloonWrench__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2260454316" + " " + "iris",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_components_Iris__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2260454316",
    __self: this
  }, ".index-parent.jsx-2260454316{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1623px;height:2149px;background-image:url('./iPadRim.png');margin-top:30px;}.index-child.jsx-2260454316{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;top:5px;}.business.jsx-2260454316{display:none;}.business2.jsx-2260454316{display:none;}.balloon-cursor.jsx-2260454316{position:absolute;border-radius:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none;z-index:100;pointer-events:none;}.balloon-cursor.jsx-2260454316 img.jsx-2260454316{display:none;width:33px;height:33px;cursor:none;pointer-events:none;}.balloon-cursor-filled.jsx-2260454316{width:42px;height:42px;cursor:none;}.main-container.jsx-2260454316{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:flex;}.consumer-container.jsx-2260454316{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:312px;}.consumer.jsx-2260454316{display:none;}.consumer2.jsx-2260454316{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.business.jsx-2260454316{display:none;}.nav.jsx-2260454316{display:none;margin-left:30px;}.menu.jsx-2260454316{display:none;margin-left:30px;}.balloon.jsx-2260454316{display:none;margin-left:30px;}.iris.jsx-2260454316{display:none;margin-left:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTGdCLEFBSTRCLEFBVUksQUFNVixBQUlBLEFBSUssQUFTTCxBQVFGLEFBTUUsQUFNQSxBQUtBLEFBSUEsQUFJQSxBQUlBLEFBS0EsQUFLQSxBQUtBLFdBM0NELEVBekJoQixBQUlBLEFBYWUsQUF5QmYsQUFRQSxBQUlxQixBQUtBLEFBS0EsQUFLQSxLQTdEQyxLQWtCTixDQVJBLE1BcUNoQixBQUtBLEFBS0EsQUFLQSxLQTNDQSxDQWxCb0MsQUFVcEIsWUFDUSxvQkFDeEIsTUFVMkIsQUFNTCxBQVN0QixrQkFSQSxDQXREMkIsTUFVTCxrQkFDWCxRQUNYLGdCQWNpQixhQUNELFlBQ1EsT0FvQk4sYUFuQmxCLENBb0JBLEtBaERpQixhQUNDLGNBQ3dCLHNDQUN0QixnQkFDZCIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL1N1blJ1bm5lci9zcmMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXNpbmVzcyBmcm9tICcuLi9jb21wb25lbnRzL0J1c2luZXNzJztcbmltcG9ydCBCdXNpbmVzczIgZnJvbSAnLi4vY29tcG9uZW50cy9CdXNpbmVzczInO1xuaW1wb3J0IENvbnN1bWVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc3VtZXInO1xuaW1wb3J0IENvbnN1bWVyMiBmcm9tICcuLi9jb21wb25lbnRzL0NvbnN1bWVyMic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgSXJpcyBmcm9tICcuLi9jb21wb25lbnRzL0lyaXMnO1xuaW1wb3J0IEJhbGxvb25XcmVuY2ggZnJvbSAnLi4vY29tcG9uZW50cy9CYWxsb29uV3JlbmNoJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAgIGNvbnN0IGJhbGxvb25XcmVuY2ggPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIjtcbiAgICBjb25zdCBiYWxsb29uV3JlbmNoRmlsbGVkID0gXCIvYmFsbG9vbi13cmVuY2gtZmlsbGVkLnN2Z1wiXG4gICAgbGV0IGlzTmV3c0Jvb2xlYW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc05ld3MpXG4gICAgbGV0IGlzRGFzaGJvYXJkQm9vbGVhbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzRGFzaGJvYXJkKVxuICAgIGNvbnN0IGlzRmlsbGVkID0gaXNOZXdzQm9vbGVhbiB8fCBpc0Rhc2hib2FyZEJvb2xlYW5cblxuICAgIGxldCB0aGVTdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IHRydWUsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbWVudUJvb2xlYW46IHRydWUsXG4gICAgICAgIG5hdkJvb2xlYW46IHRydWUsXG4gICAgICAgIGlyaXNCb29sZWFuOiB0cnVlXG4gICAgfVxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUodGhlU3RhdGUpO1xuXG4gICAgLy8gbGV0IGlzTmV4dFRlbXBsYXRlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNOZXh0VGVtcGxhdGUpXG4gICAgLy8gbGV0IGlzUHJldmlvdXNUZW1wbGF0ZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzUHJldmlvdXNUZW1wbGF0ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGlmIChpc05leHRUZW1wbGF0ZSkge1xuICAgICAgICAvLyAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAvLyAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvLyAgICAgbGV0IGNvbnN1bWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXIyXCIpXG4gICAgICAgIC8vICAgICBjb25zdW1lcjIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChpc1ByZXZpb3VzVGVtcGxhdGUpIHtcbiAgICAgICAgLy8gICAgIGxldCBjb25zdW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXJcIilcbiAgICAgICAgLy8gICAgIGNvbnN1bWVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgLy8gICAgIGxldCBjb25zdW1lcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyMlwiKVxuICAgICAgICAvLyAgICAgY29uc3VtZXIyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gfVxuICAgIFxuICAgIH0pXG5cblxuICAgIGNvbnN0IHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICFzdGF0ZS5idXNpbmVzc0Jvb2xlYW59KVxuICAgICAgICBpZiAoc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgYnVzaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzMlwiKVxuICAgICAgICAgICAgYnVzaW5lc3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyMlwiKVxuICAgICAgICAgICAgY29uc3VtZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGNvbnN1bWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lcjJcIilcbiAgICAgICAgICAgIGNvbnN1bWVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGJ1c2luZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzczJcIilcbiAgICAgICAgICAgIGJ1c2luZXNzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgIHNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICFzdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgIHNldFN0YXRlKHttZW51Qm9vbGVhbjogIXN0YXRlLm1lbnVCb29sZWFufSlcbiAgICAgICAgaWYgKCBzdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZS5tZW51Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBuYXZGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgIHNldFN0YXRlKHtuYXZCb29sZWFuOiAhc3RhdGUubmF2Qm9vbGVhbn0pXG4gICAgICAgIGlmICggc3RhdGUubmF2Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKVxuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZS5uYXZCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJhbGxvb25GdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgIHNldFN0YXRlKHtiYWxsb29uQm9vbGVhbjogIXN0YXRlLmJhbGxvb25Cb29sZWFufSlcbiAgICAgICAgaWYgKCBzdGF0ZS5iYWxsb29uQm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBiYWxsb29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWN1cnNvclwiKVxuICAgICAgICAgICAgYmFsbG9vbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBiYWxsb29uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24taW1hZ2UgXCIpXG4gICAgICAgICAgICBiYWxsb29uSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgaW5kZXhQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4LXBhcmVudFwiKVxuICAgICAgICAgICAgaW5kZXhQYXJlbnQuc3R5bGUuY3Vyc29yID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGUuYmFsbG9vbkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBiYWxsb29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWN1cnNvclwiKVxuICAgICAgICAgICAgYmFsbG9vbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBiYWxsb29uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24taW1hZ2UgXCIpXG4gICAgICAgICAgICBiYWxsb29uSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgaW5kZXhQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZGV4LXBhcmVudFwiKVxuICAgICAgICAgICAgaW5kZXhQYXJlbnQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlyaXNGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgIHNldFN0YXRlKHtpcmlzQm9vbGVhbjogIXN0YXRlLmlyaXNCb29sZWFufSlcbiAgICAgICAgaWYgKCBzdGF0ZS5pcmlzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGlyaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlyaXNcIilcbiAgICAgICAgICAgIGlyaXMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLmlyaXNCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgaXJpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXJpc1wiKVxuICAgICAgICAgICAgaXJpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtY2hpbGRcIj5cbiAgICA8RG9jayBpcmlzPXtpcmlzRnVuY3Rpb259IGJhbGxvb249e2JhbGxvb25GdW5jdGlvbn0gbmF2PXtuYXZGdW5jdGlvbn0gdHdpcmw9e3R3aXJsRnVuY3Rpb259IHNvdW5kPXsgc291bmRGdW5jdGlvbiB9IG1lbnU9e21lbnVGdW5jdGlvbn0+PC9Eb2NrPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vbi1jdXJzb3JcIj48aW1nIGNsYXNzTmFtZT1cImJhbGxvb24taW1hZ2VcIiBzcmM9e2lzRmlsbGVkID8gYmFsbG9vbldyZW5jaEZpbGxlZCA6IGJhbGxvb25XcmVuY2h9IGFsdD1cIi1cIi8+PC9kaXY+XG4gICAgXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3NcIj5cbiAgICA8QnVzaW5lc3M+PC9CdXNpbmVzcz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3MyXCI+XG4gICAgPEJ1c2luZXNzMj48L0J1c2luZXNzMj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItY29udGFpbmVyXCI+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lclwiPlxuICAgIDxDb25zdW1lcj48L0NvbnN1bWVyPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXIyXCI+XG4gICAgPENvbnN1bWVyMj48L0NvbnN1bWVyMj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgPE1lbnU+PC9NZW51PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgPE5hdj48L05hdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbG9vblwiPlxuICAgIDxCYWxsb29uV3JlbmNoPjwvQmFsbG9vbldyZW5jaD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXJpc1wiPlxuICAgIDxJcmlzPjwvSXJpcz5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YCBcblxuICAgIC5pbmRleC1wYXJlbnQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDE2MjNweDtcbiAgICAgICAgaGVpZ2h0OiAyMTQ5cHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pUGFkUmltLnBuZycpO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAuaW5kZXgtY2hpbGQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6NXB4O1xuICAgIH1cblxuICAgIC5idXNpbmVzcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJ1c2luZXNzMiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJhbGxvb24tY3Vyc29yIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciBpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvci1maWxsZWQge1xuICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBmbGV4O1xuICAgIH1cblxuICAgIC5jb25zdW1lci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzEycHg7XG4gICAgfVxuXG4gICAgLmNvbnN1bWVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29uc3VtZXIyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuYnVzaW5lc3Mge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5tZW51IHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5iYWxsb29uIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5pcmlzIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuXG5cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/pages/index.js */"));
}

/***/ }),

/***/ "./src/shared/business-financials-buttons/balance-button.css":
/*!*******************************************************************!*\
  !*** ./src/shared/business-financials-buttons/balance-button.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business-financials-buttons/balance-button.js":
/*!******************************************************************!*\
  !*** ./src/shared/business-financials-buttons/balance-button.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BalanceButton; });
/* harmony import */ var _balance_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-button.css */ "./src/shared/business-financials-buttons/balance-button.css");
/* harmony import */ var _balance_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_balance_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business-financials-buttons/balance-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function BalanceButton() {
  return __jsx("div", {
    className: "business-balance-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-balance-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Balance"));
}

/***/ }),

/***/ "./src/shared/business-financials-buttons/business-financials-buttons.css":
/*!********************************************************************************!*\
  !*** ./src/shared/business-financials-buttons/business-financials-buttons.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business-financials-buttons/business-financials-buttons.js":
/*!*******************************************************************************!*\
  !*** ./src/shared/business-financials-buttons/business-financials-buttons.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessFinancialsButtons; });
/* harmony import */ var _business_financials_buttons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-financials-buttons.css */ "./src/shared/business-financials-buttons/business-financials-buttons.css");
/* harmony import */ var _business_financials_buttons_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_business_financials_buttons_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _income_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income-button */ "./src/shared/business-financials-buttons/income-button.js");
/* harmony import */ var _balance_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-button */ "./src/shared/business-financials-buttons/balance-button.js");
/* harmony import */ var _flows_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flows-button */ "./src/shared/business-financials-buttons/flows-button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business-financials-buttons/business-financials-buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





function BusinessFinancialsButtons() {
  return __jsx("div", {
    className: "business-financials-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_income_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_balance_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_flows_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/shared/business-financials-buttons/flows-button.css":
/*!*****************************************************************!*\
  !*** ./src/shared/business-financials-buttons/flows-button.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business-financials-buttons/flows-button.js":
/*!****************************************************************!*\
  !*** ./src/shared/business-financials-buttons/flows-button.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlowsButton; });
/* harmony import */ var _flows_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flows-button.css */ "./src/shared/business-financials-buttons/flows-button.css");
/* harmony import */ var _flows_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flows_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business-financials-buttons/flows-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function FlowsButton() {
  return __jsx("div", {
    className: "business-flows-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, ";", __jsx("button", {
    className: "business-flows-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Flows"), ";");
}

/***/ }),

/***/ "./src/shared/business-financials-buttons/income-button.css":
/*!******************************************************************!*\
  !*** ./src/shared/business-financials-buttons/income-button.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business-financials-buttons/income-button.js":
/*!*****************************************************************!*\
  !*** ./src/shared/business-financials-buttons/income-button.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IncomeButton; });
/* harmony import */ var _income_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income-button.css */ "./src/shared/business-financials-buttons/income-button.css");
/* harmony import */ var _income_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_income_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business-financials-buttons/income-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function IncomeButton() {
  return __jsx("div", {
    className: "business-income-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-income-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Income"));
}

/***/ }),

/***/ "./src/shared/business/analytics-button.css":
/*!**************************************************!*\
  !*** ./src/shared/business/analytics-button.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/analytics-button.js":
/*!*************************************************!*\
  !*** ./src/shared/business/analytics-button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnalyticsButton; });
/* harmony import */ var _analytics_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-button.css */ "./src/shared/business/analytics-button.css");
/* harmony import */ var _analytics_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_analytics_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/analytics-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function AnalyticsButton() {
  return __jsx("div", {
    className: "business-analytics-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-analytics-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Analytics"));
}

/***/ }),

/***/ "./src/shared/business/applications-button.css":
/*!*****************************************************!*\
  !*** ./src/shared/business/applications-button.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/applications-button.js":
/*!****************************************************!*\
  !*** ./src/shared/business/applications-button.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationsButton; });
/* harmony import */ var _applications_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applications-button.css */ "./src/shared/business/applications-button.css");
/* harmony import */ var _applications_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_applications_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/applications-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ApplicationsButton() {
  return __jsx("div", {
    className: "business-applications-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-applications-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Applications"));
}

/***/ }),

/***/ "./src/shared/business/business-remaining-buttons.css":
/*!************************************************************!*\
  !*** ./src/shared/business/business-remaining-buttons.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/business-remaining-buttons.js":
/*!***********************************************************!*\
  !*** ./src/shared/business/business-remaining-buttons.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessRemainingButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _business_remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-remaining-buttons.css */ "./src/shared/business/business-remaining-buttons.css");
/* harmony import */ var _business_remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_business_remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capex_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capex-button */ "./src/shared/business/capex-button.js");
/* harmony import */ var _labor_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labor-button */ "./src/shared/business/labor-button.js");
/* harmony import */ var _operations_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations-button */ "./src/shared/business/operations-button.js");
/* harmony import */ var _dashboard_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-button */ "./src/shared/business/dashboard-button.js");
/* harmony import */ var _goods_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goods-button */ "./src/shared/business/goods-button.js");
/* harmony import */ var _services_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services-button */ "./src/shared/business/services-button.js");
/* harmony import */ var _tree_of_knowledge_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree-of-knowledge-button */ "./src/shared/business/tree-of-knowledge-button.js");
/* harmony import */ var _remaining_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remaining-buttons */ "./src/shared/business/remaining-buttons.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/business-remaining-buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function BusinessRemainingButtons() {
  return __jsx("div", {
    className: "business-remaining-buttons-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_capex_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_labor_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_operations_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_dashboard_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_goods_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_services_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_tree_of_knowledge_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_remaining_buttons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/shared/business/calendars-button.css":
/*!**************************************************!*\
  !*** ./src/shared/business/calendars-button.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/calendars-button.js":
/*!*************************************************!*\
  !*** ./src/shared/business/calendars-button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalendarsButton; });
/* harmony import */ var _calendars_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendars-button.css */ "./src/shared/business/calendars-button.css");
/* harmony import */ var _calendars_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calendars_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/calendars-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function CalendarsButton() {
  return __jsx("div", {
    className: "business-calendars-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-calendars-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Calendars"));
}

/***/ }),

/***/ "./src/shared/business/capex-button.css":
/*!**********************************************!*\
  !*** ./src/shared/business/capex-button.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/capex-button.js":
/*!*********************************************!*\
  !*** ./src/shared/business/capex-button.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CapexButton; });
/* harmony import */ var _capex_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capex-button.css */ "./src/shared/business/capex-button.css");
/* harmony import */ var _capex_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capex_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/capex-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function CapexButton() {
  return __jsx("div", {
    className: "capex-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "capex-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Capex"));
}

/***/ }),

/***/ "./src/shared/business/compose-button.css":
/*!************************************************!*\
  !*** ./src/shared/business/compose-button.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/compose-button.js":
/*!***********************************************!*\
  !*** ./src/shared/business/compose-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComposeButton; });
/* harmony import */ var _compose_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose-button.css */ "./src/shared/business/compose-button.css");
/* harmony import */ var _compose_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compose_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/compose-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ComposeButton() {
  return __jsx("div", {
    className: "business-compose-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-compose-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Compose"));
}

/***/ }),

/***/ "./src/shared/business/dashboard-button.css":
/*!**************************************************!*\
  !*** ./src/shared/business/dashboard-button.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/dashboard-button.js":
/*!*************************************************!*\
  !*** ./src/shared/business/dashboard-button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardButton; });
/* harmony import */ var _dashboard_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-button.css */ "./src/shared/business/dashboard-button.css");
/* harmony import */ var _dashboard_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dashboard_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/dashboard-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function DashboardButton() {
  return __jsx("div", {
    className: "business-dashboard-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Dashboard"));
}

/***/ }),

/***/ "./src/shared/business/doctors-button.css":
/*!************************************************!*\
  !*** ./src/shared/business/doctors-button.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/doctors-button.js":
/*!***********************************************!*\
  !*** ./src/shared/business/doctors-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doctors_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctors-button.css */ "./src/shared/business/doctors-button.css");
/* harmony import */ var _doctors_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_doctors_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/doctors-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // So you would add an onclick event where the router would take you to the route specified. 

function DoctorsButton() {
  return __jsx("div", {
    className: "business-doctors-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("button", {
    className: "business-doctors-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Doctors"));
}

/* harmony default export */ __webpack_exports__["default"] = (DoctorsButton);

/***/ }),

/***/ "./src/shared/business/drive-button.css":
/*!**********************************************!*\
  !*** ./src/shared/business/drive-button.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/drive-button.js":
/*!*********************************************!*\
  !*** ./src/shared/business/drive-button.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DriveButton; });
/* harmony import */ var _drive_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive-button.css */ "./src/shared/business/drive-button.css");
/* harmony import */ var _drive_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drive_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/drive-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function DriveButton() {
  return __jsx("div", {
    className: "business-drive-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-drive-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Drive"));
}

/***/ }),

/***/ "./src/shared/business/goods-button.css":
/*!**********************************************!*\
  !*** ./src/shared/business/goods-button.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/goods-button.js":
/*!*********************************************!*\
  !*** ./src/shared/business/goods-button.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessGoodsButton; });
/* harmony import */ var _goods_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-button.css */ "./src/shared/business/goods-button.css");
/* harmony import */ var _goods_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_goods_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/goods-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function BusinessGoodsButton() {
  return __jsx("div", {
    className: "business-goods-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-goods-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Goods"));
}

/***/ }),

/***/ "./src/shared/business/labor-button.css":
/*!**********************************************!*\
  !*** ./src/shared/business/labor-button.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/labor-button.js":
/*!*********************************************!*\
  !*** ./src/shared/business/labor-button.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LaborButton; });
/* harmony import */ var _labor_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labor-button.css */ "./src/shared/business/labor-button.css");
/* harmony import */ var _labor_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_labor_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/labor-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function LaborButton() {
  return __jsx("div", {
    className: "labor-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "labor-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Labor"));
}

/***/ }),

/***/ "./src/shared/business/lawyers-button.css":
/*!************************************************!*\
  !*** ./src/shared/business/lawyers-button.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/lawyers-button.js":
/*!***********************************************!*\
  !*** ./src/shared/business/lawyers-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lawyers_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawyers-button.css */ "./src/shared/business/lawyers-button.css");
/* harmony import */ var _lawyers_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lawyers_button_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/lawyers-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function LawyersButton() {
  return __jsx("div", {
    className: "business-lawyers-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-lawyers-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Lawyers"));
}

/* harmony default export */ __webpack_exports__["default"] = (LawyersButton);

/***/ }),

/***/ "./src/shared/business/legal-info-button.css":
/*!***************************************************!*\
  !*** ./src/shared/business/legal-info-button.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/legal-info-button.js":
/*!**************************************************!*\
  !*** ./src/shared/business/legal-info-button.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegalInfoButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _legal_info_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal-info-button.css */ "./src/shared/business/legal-info-button.css");
/* harmony import */ var _legal_info_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_legal_info_button_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/legal-info-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LegalInfoButton() {
  return __jsx("div", {
    className: "business-legal-info-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "business-legal-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Legal Info"));
}

/***/ }),

/***/ "./src/shared/business/mailbox-button.css":
/*!************************************************!*\
  !*** ./src/shared/business/mailbox-button.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/mailbox-button.js":
/*!***********************************************!*\
  !*** ./src/shared/business/mailbox-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MailboxButton; });
/* harmony import */ var _mailbox_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailbox-button.css */ "./src/shared/business/mailbox-button.css");
/* harmony import */ var _mailbox_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mailbox_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/mailbox-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MailboxButton() {
  return __jsx("div", {
    className: "business-mailbox-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-mailbox-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Mailbox"));
}

/***/ }),

/***/ "./src/shared/business/medical-info-button.css":
/*!*****************************************************!*\
  !*** ./src/shared/business/medical-info-button.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/medical-info-button.js":
/*!****************************************************!*\
  !*** ./src/shared/business/medical-info-button.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _medical_info_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-info-button.css */ "./src/shared/business/medical-info-button.css");
/* harmony import */ var _medical_info_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_medical_info_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/medical-info-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // So you would add an onclick event where the router would take you to the route specified. 

function MedicalInfoButton() {
  return __jsx("div", {
    className: "business-medical-info-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("button", {
    className: "business-medical-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Medical Info"));
}

/* harmony default export */ __webpack_exports__["default"] = (MedicalInfoButton);

/***/ }),

/***/ "./src/shared/business/messages-button.css":
/*!*************************************************!*\
  !*** ./src/shared/business/messages-button.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/messages-button.js":
/*!************************************************!*\
  !*** ./src/shared/business/messages-button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesButton; });
/* harmony import */ var _messages_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-button.css */ "./src/shared/business/messages-button.css");
/* harmony import */ var _messages_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_messages_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/messages-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MessagesButton() {
  return __jsx("div", {
    className: "business-messages-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-messages-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Messages"));
}

/***/ }),

/***/ "./src/shared/business/network-one-button.css":
/*!****************************************************!*\
  !*** ./src/shared/business/network-one-button.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/network-one-button.js":
/*!***************************************************!*\
  !*** ./src/shared/business/network-one-button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NetworkOneButton; });
/* harmony import */ var _network_one_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-one-button.css */ "./src/shared/business/network-one-button.css");
/* harmony import */ var _network_one_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_network_one_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/network-one-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function NetworkOneButton() {
  return __jsx("div", {
    className: "business-network-one-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-network-one-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Network 1"));
}

/***/ }),

/***/ "./src/shared/business/network-two-button.css":
/*!****************************************************!*\
  !*** ./src/shared/business/network-two-button.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/network-two-button.js":
/*!***************************************************!*\
  !*** ./src/shared/business/network-two-button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NetworkTwoButton; });
/* harmony import */ var _network_two_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-two-button.css */ "./src/shared/business/network-two-button.css");
/* harmony import */ var _network_two_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_network_two_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/network-two-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function NetworkTwoButton() {
  return __jsx("div", {
    className: "business-network-two-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "business-network-two-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Network 2"));
}

/***/ }),

/***/ "./src/shared/business/operations-button.css":
/*!***************************************************!*\
  !*** ./src/shared/business/operations-button.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/operations-button.js":
/*!**************************************************!*\
  !*** ./src/shared/business/operations-button.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OperationsButton; });
/* harmony import */ var _operations_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations-button.css */ "./src/shared/business/operations-button.css");
/* harmony import */ var _operations_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_operations_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/operations-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function OperationsButton() {
  return __jsx("div", {
    className: "operations-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "operations-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Operations"));
}

/***/ }),

/***/ "./src/shared/business/phone-button.css":
/*!**********************************************!*\
  !*** ./src/shared/business/phone-button.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/phone-button.js":
/*!*********************************************!*\
  !*** ./src/shared/business/phone-button.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneButton; });
/* harmony import */ var _phone_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-button.css */ "./src/shared/business/phone-button.css");
/* harmony import */ var _phone_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phone_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/phone-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function PhoneButton() {
  return __jsx("div", {
    className: "business-phone-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-phone-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Phone"));
}

/***/ }),

/***/ "./src/shared/business/projects-button.css":
/*!*************************************************!*\
  !*** ./src/shared/business/projects-button.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/projects-button.js":
/*!************************************************!*\
  !*** ./src/shared/business/projects-button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsButton; });
/* harmony import */ var _projects_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-button.css */ "./src/shared/business/projects-button.css");
/* harmony import */ var _projects_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_projects_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/projects-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ProjectsButton() {
  return __jsx("div", {
    className: "business-projects-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-projects-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Projects"));
}

/***/ }),

/***/ "./src/shared/business/remaining-buttons.css":
/*!***************************************************!*\
  !*** ./src/shared/business/remaining-buttons.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/remaining-buttons.js":
/*!**************************************************!*\
  !*** ./src/shared/business/remaining-buttons.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemainingButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remaining-buttons.css */ "./src/shared/business/remaining-buttons.css");
/* harmony import */ var _remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _applications_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applications-button */ "./src/shared/business/applications-button.js");
/* harmony import */ var _projects_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-button */ "./src/shared/business/projects-button.js");
/* harmony import */ var _templates_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates-button */ "./src/shared/business/templates-button.js");
/* harmony import */ var _drive_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drive-button */ "./src/shared/business/drive-button.js");
/* harmony import */ var _network_one_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network-one-button */ "./src/shared/business/network-one-button.js");
/* harmony import */ var _network_two_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network-two-button */ "./src/shared/business/network-two-button.js");
/* harmony import */ var _wall_one_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wall-one-button */ "./src/shared/business/wall-one-button.js");
/* harmony import */ var _wall_two_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wall-two-button */ "./src/shared/business/wall-two-button.js");
/* harmony import */ var _social_media_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./social-media-button */ "./src/shared/business/social-media-button.js");
/* harmony import */ var _analytics_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analytics-button */ "./src/shared/business/analytics-button.js");
/* harmony import */ var _calendars_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendars-button */ "./src/shared/business/calendars-button.js");
/* harmony import */ var _phone_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phone-button */ "./src/shared/business/phone-button.js");
/* harmony import */ var _messages_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages-button */ "./src/shared/business/messages-button.js");
/* harmony import */ var _research_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./research-button */ "./src/shared/business/research-button.js");
/* harmony import */ var _compose_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./compose-button */ "./src/shared/business/compose-button.js");
/* harmony import */ var _mailbox_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mailbox-button */ "./src/shared/business/mailbox-button.js");
/* harmony import */ var _legal_info_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./legal-info-button */ "./src/shared/business/legal-info-button.js");
/* harmony import */ var _lawyers_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lawyers-button */ "./src/shared/business/lawyers-button.js");
/* harmony import */ var _doctors_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./doctors-button */ "./src/shared/business/doctors-button.js");
/* harmony import */ var _medical_info_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./medical-info-button */ "./src/shared/business/medical-info-button.js");
/* harmony import */ var _business_financials_buttons_business_financials_buttons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../business-financials-buttons/business-financials-buttons */ "./src/shared/business-financials-buttons/business-financials-buttons.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/remaining-buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;























function RemainingButtons() {
  return __jsx("div", {
    className: "remaining-buttons-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_applications_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_projects_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_templates_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_drive_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_network_one_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_network_two_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_wall_one_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_wall_two_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_social_media_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_analytics_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_calendars_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_phone_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_messages_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_research_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_compose_button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_mailbox_button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_legal_info_button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_lawyers_button__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(_doctors_button__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_medical_info_button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_business_financials_buttons_business_financials_buttons__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/shared/business/research-button.css":
/*!*************************************************!*\
  !*** ./src/shared/business/research-button.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/research-button.js":
/*!************************************************!*\
  !*** ./src/shared/business/research-button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResearchButton; });
/* harmony import */ var _research_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./research-button.css */ "./src/shared/business/research-button.css");
/* harmony import */ var _research_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_research_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/research-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ResearchButton() {
  return __jsx("div", {
    className: "business-research-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-research-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Research"));
}

/***/ }),

/***/ "./src/shared/business/services-button.css":
/*!*************************************************!*\
  !*** ./src/shared/business/services-button.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/services-button.js":
/*!************************************************!*\
  !*** ./src/shared/business/services-button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessServicesButton; });
/* harmony import */ var _services_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-button.css */ "./src/shared/business/services-button.css");
/* harmony import */ var _services_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/services-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function BusinessServicesButton() {
  return __jsx("div", {
    className: "business-services-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-services-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Services"));
}

/***/ }),

/***/ "./src/shared/business/social-media-button.css":
/*!*****************************************************!*\
  !*** ./src/shared/business/social-media-button.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/social-media-button.js":
/*!****************************************************!*\
  !*** ./src/shared/business/social-media-button.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialMediaButton; });
/* harmony import */ var _social_media_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media-button.css */ "./src/shared/business/social-media-button.css");
/* harmony import */ var _social_media_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_social_media_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/social-media-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function SocialMediaButton() {
  return __jsx("div", {
    className: "business-social-media-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-social-media-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Social Media"));
}

/***/ }),

/***/ "./src/shared/business/templates-button.css":
/*!**************************************************!*\
  !*** ./src/shared/business/templates-button.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/templates-button.js":
/*!*************************************************!*\
  !*** ./src/shared/business/templates-button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplatesButton; });
/* harmony import */ var _templates_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates-button.css */ "./src/shared/business/templates-button.css");
/* harmony import */ var _templates_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/templates-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function TemplatesButton() {
  return __jsx("div", {
    className: "business-templates-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-templates-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Templates"));
}

/***/ }),

/***/ "./src/shared/business/tree-of-knowledge-button.css":
/*!**********************************************************!*\
  !*** ./src/shared/business/tree-of-knowledge-button.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/tree-of-knowledge-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/business/tree-of-knowledge-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessTreeButton; });
/* harmony import */ var _tree_of_knowledge_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-of-knowledge-button.css */ "./src/shared/business/tree-of-knowledge-button.css");
/* harmony import */ var _tree_of_knowledge_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tree_of_knowledge_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/tree-of-knowledge-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function BusinessTreeButton() {
  return __jsx("div", {
    className: "business-tree-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-tree-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Tree of Knowledge"));
}

/***/ }),

/***/ "./src/shared/business/wall-one-button.css":
/*!*************************************************!*\
  !*** ./src/shared/business/wall-one-button.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/wall-one-button.js":
/*!************************************************!*\
  !*** ./src/shared/business/wall-one-button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WallOneButton; });
/* harmony import */ var _wall_one_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall-one-button.css */ "./src/shared/business/wall-one-button.css");
/* harmony import */ var _wall_one_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wall_one_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/wall-one-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function WallOneButton() {
  return __jsx("div", {
    className: "business-wall-one-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-wall-one-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Wall 1"));
}

/***/ }),

/***/ "./src/shared/business/wall-two-button.css":
/*!*************************************************!*\
  !*** ./src/shared/business/wall-two-button.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/business/wall-two-button.js":
/*!************************************************!*\
  !*** ./src/shared/business/wall-two-button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WallTwoButton; });
/* harmony import */ var _wall_two_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall-two-button.css */ "./src/shared/business/wall-two-button.css");
/* harmony import */ var _wall_two_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wall_two_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/business/wall-two-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function WallTwoButton() {
  return __jsx("div", {
    className: "business-wall-two-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "business-wall-two-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Wall 2"));
}

/***/ }),

/***/ "./src/shared/consumer-financials-buttons/balance-button.css":
/*!*******************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/balance-button.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/consumer-financials-buttons/balance-button.js":
/*!******************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/balance-button.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BalanceButton; });
/* harmony import */ var _balance_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-button.css */ "./src/shared/consumer-financials-buttons/balance-button.css");
/* harmony import */ var _balance_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_balance_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/consumer-financials-buttons/balance-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function BalanceButton() {
  return __jsx("div", {
    className: "balance-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "balance-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Balance"));
}

/***/ }),

/***/ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.css":
/*!********************************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/consumer-financials-buttons.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.js":
/*!*******************************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/consumer-financials-buttons.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsumerFinancialsButtons; });
/* harmony import */ var _consumer_financials_buttons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumer-financials-buttons.css */ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.css");
/* harmony import */ var _consumer_financials_buttons_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_consumer_financials_buttons_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _income_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income-button */ "./src/shared/consumer-financials-buttons/income-button.js");
/* harmony import */ var _balance_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-button */ "./src/shared/consumer-financials-buttons/balance-button.js");
/* harmony import */ var _flows_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flows-button */ "./src/shared/consumer-financials-buttons/flows-button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/consumer-financials-buttons/consumer-financials-buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





function ConsumerFinancialsButtons() {
  return __jsx("div", {
    className: "consumer-financials-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_income_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_balance_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_flows_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/shared/consumer-financials-buttons/flows-button.css":
/*!*****************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/flows-button.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/consumer-financials-buttons/flows-button.js":
/*!****************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/flows-button.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlowsButton; });
/* harmony import */ var _flows_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flows-button.css */ "./src/shared/consumer-financials-buttons/flows-button.css");
/* harmony import */ var _flows_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flows_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/consumer-financials-buttons/flows-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function FlowsButton() {
  return __jsx("div", {
    className: "flows-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "flows-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Flows"));
}

/***/ }),

/***/ "./src/shared/consumer-financials-buttons/income-button.css":
/*!******************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/income-button.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/consumer-financials-buttons/income-button.js":
/*!*****************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/income-button.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IncomeButton; });
/* harmony import */ var _income_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income-button.css */ "./src/shared/consumer-financials-buttons/income-button.css");
/* harmony import */ var _income_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_income_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/consumer-financials-buttons/income-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function IncomeButton() {
  return __jsx("div", {
    className: "income-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "income-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Income"));
}

/***/ }),

/***/ "./src/shared/dashboard-button/dashboard-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/dashboard-button/dashboard-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/dashboard-button/dashboard-button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function DashboardButton() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const dashboard = "dashboard";
  let inputValue;

  const setValue = () => {
    let inputForDashboard = document.querySelector('.input-dashboard');
    inputForDashboard.addEventListener("keydown", event => {
      if (event.keyCode === 13) {
        let dashboardButton = document.querySelector('.dashboard-button');
        let inputForDashboard = document.querySelector('.input-dashboard');
        dashboardButton.innerHTML = inputForDashboard.value;
        inputForDashboard.style.display = "none";
      } // do something

    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let dashboardButton = document.querySelector(".dashboard-button");
    dashboardButton.addEventListener("mouseover", () => {
      dashboardButton.classList.add("dashboard-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOver"])(dashboard));
    });
    dashboardButton.addEventListener("mouseleave", () => {
      dashboardButton.classList.remove("dashboard-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOff"])());
    });
  });

  const clickDashboard = () => {
    // We want conditional logic where if its a normall call, its to news, if other it can be balllon wrench:
    // First check if the global balloon wrench variable has change
    let dashboardButton = document.querySelector('.dashboard-button');
    dashboardButton.classList.remove("dashboard-hovered");
    let inputForDashboard = document.querySelector('.input-dashboard');
    inputForDashboard.style.display = "flex";
  };

  return __jsx("div", {
    className: "jsx-3056044082" + " " + "dashboard-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: inputValue,
    onChange: setValue,
    autoFocus: true,
    minLength: "4",
    maxLength: "8",
    className: "jsx-3056044082" + " " + "input-dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("h1", {
    onClick: clickDashboard,
    className: "jsx-3056044082" + " " + "dashboard-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Dashboard"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3056044082",
    __self: this
  }, ".dashboard-button-container.jsx-3056044082{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;pointer-events:all;}.dashboard-button.jsx-3056044082{font-family:Montserrat;z-index:62;font-size:25px;padding-left:22px;position:relative;right:164px;bottom:2020px;background-color:transparent;color:white;cursor:none;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;pointer-events:all;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.dashboard-hovered.jsx-3056044082{cursor:none;-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);pointer-events:all;}.input-dashboard.jsx-3056044082{display:none;position:absolute;bottom:2153px;left:667px;}.input-dashboard.jsx-3056044082:focus{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDQSxBQUdrQixBQU9VLEFBb0JYLEFBT0MsQUFRRixZQWRXLEFBZTFCLENBUHNCLFVBNUJSLFFBNkJJLEdBNUJDLFdBNkJKLElBNUJPLE9BOEJ0QixXQTdCc0IsT0FWQyxXQVdQLEtBaUJPLE9BaEJMLFlBaUJsQixFQWhCaUMsNkJBQ2pCLFlBQ0EsWUFDQSxHQWZXLFVBZ0JvRCx1RUFDOUMsa0JBaEJWLFdBaUJpQixRQWhCeEMsNEJBaUI0QixnR0FDTCxtQkFDaUIsZ0ZBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9zaGFyZWQvZGFzaGJvYXJkLWJ1dHRvbi9kYXNoYm9hcmQtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcbmltcG9ydCB7IG1vdXNlZE92ZXIsIG1vdXNlZE9mZiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZEJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkID0gXCJkYXNoYm9hcmRcIjtcbiAgICBsZXQgaW5wdXRWYWx1ZTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0Rm9yRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWRhc2hib2FyZCcpO1xuICAgICAgICBpbnB1dEZvckRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGFzaGJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRGb3JEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGFzaGJvYXJkJyk7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmlubmVySFRNTCA9IGlucHV0Rm9yRGFzaGJvYXJkLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlucHV0Rm9yRGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBkYXNoYm9hcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhc2hib2FyZC1idXR0b25cIilcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LmFkZChcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE92ZXIoZGFzaGJvYXJkKSl9KVxuICAgICAgICBkYXNoYm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBkYXNoYm9hcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRhc2hib2FyZC1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE9mZigpKVxuICAgIH0pXG4gICAgICB9KTtcbiAgICBjb25zdCBjbGlja0Rhc2hib2FyZCA9ICgpID0+IHtcbiAgICAgICAgLy8gV2Ugd2FudCBjb25kaXRpb25hbCBsb2dpYyB3aGVyZSBpZiBpdHMgYSBub3JtYWxsIGNhbGwsIGl0cyB0byBuZXdzLCBpZiBvdGhlciBpdCBjYW4gYmUgYmFsbGxvbiB3cmVuY2g6XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoZSBnbG9iYWwgYmFsbG9vbiB3cmVuY2ggdmFyaWFibGUgaGFzIGNoYW5nZVxuICAgICAgICBsZXQgZGFzaGJvYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1idXR0b24nKTtcbiAgICAgICAgZGFzaGJvYXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXNoYm9hcmQtaG92ZXJlZFwiKVxuICAgICAgICBsZXQgaW5wdXRGb3JEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGFzaGJvYXJkJyk7XG4gICAgICAgIGlucHV0Rm9yRGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXRWYWx1ZX0gb25DaGFuZ2U9e3NldFZhbHVlfSBhdXRvRm9jdXMgbWluTGVuZ3RoPVwiNFwiIG1heExlbmd0aD1cIjhcIiBjbGFzc05hbWU9XCJpbnB1dC1kYXNoYm9hcmRcIj48L2lucHV0PlxuICAgICAgICA8aDEgb25DbGljaz17IGNsaWNrRGFzaGJvYXJkIH0gY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ1dHRvblwiPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcblxuYFxuLmRhc2hib2FyZC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmRhc2hib2FyZC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIHotaW5kZXg6NjI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDE2NHB4O1xuICAgIGJvdHRvbTogMjAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IG5vbmU7XG4gICAgYm9yZGVyOmJsYWNrO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG4uZGFzaGJvYXJkLWhvdmVyZWQge1xuICAgIGN1cnNvcjogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cblxuLmlucHV0LWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIxNTNweDtcbiAgICBsZWZ0OiA2NjdweDtcblxufVxuLmlucHV0LWRhc2hib2FyZDpmb2N1cyB7XG4gICAgY29sb3I6YmxhY2s7XG59XG5gXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/shared/dashboard-button/dashboard-button.js */"));
}

/***/ }),

/***/ "./src/shared/doctors-button/doctors-button.js":
/*!*****************************************************!*\
  !*** ./src/shared/doctors-button/doctors-button.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/doctors-button/doctors-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function DoctorsButton() {
  return __jsx("div", {
    className: "doctors-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("button", {
    className: "doctors-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Doctors"));
}

/* harmony default export */ __webpack_exports__["default"] = (DoctorsButton);

/***/ }),

/***/ "./src/shared/investments-button/investments-button.css":
/*!**************************************************************!*\
  !*** ./src/shared/investments-button/investments-button.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/investments-button/investments-button.js":
/*!*************************************************************!*\
  !*** ./src/shared/investments-button/investments-button.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InvestmentsButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _investments_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investments-button.css */ "./src/shared/investments-button/investments-button.css");
/* harmony import */ var _investments_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_investments_button_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/investments-button/investments-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function InvestmentsButton() {
  return __jsx("div", {
    className: "investments-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "investments-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Investments"));
}

/***/ }),

/***/ "./src/shared/lawyers-button/lawyers-button.js":
/*!*****************************************************!*\
  !*** ./src/shared/lawyers-button/lawyers-button.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/lawyers-button/lawyers-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LawyersButton() {
  return __jsx("div", {
    className: "lawyers-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("button", {
    className: "lawyers-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Lawyers"));
}

/* harmony default export */ __webpack_exports__["default"] = (LawyersButton);

/***/ }),

/***/ "./src/shared/legal-info-button/legal-info-button.css":
/*!************************************************************!*\
  !*** ./src/shared/legal-info-button/legal-info-button.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/legal-info-button/legal-info-button.js":
/*!***********************************************************!*\
  !*** ./src/shared/legal-info-button/legal-info-button.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegalInfoButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _legal_info_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal-info-button.css */ "./src/shared/legal-info-button/legal-info-button.css");
/* harmony import */ var _legal_info_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_legal_info_button_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/legal-info-button/legal-info-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LegalInfoButton() {
  return __jsx("div", {
    className: "legal-info-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "legal-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Legal Info"));
}

/***/ }),

/***/ "./src/shared/medical-info-button/medical-info-button.js":
/*!***************************************************************!*\
  !*** ./src/shared/medical-info-button/medical-info-button.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/medical-info-button/medical-info-button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // So you would add an onclick event where the router would take you to the route specified. 

function MedicalInfoButton() {
  return __jsx("div", {
    className: "jsx-4016389588" + " " + "medical-info-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-4016389588" + " " + "medical-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Medical Info"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4016389588",
    __self: this
  }, ".medical-info-container.jsx-4016389588{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.medical-info.jsx-4016389588{width:187px;height:45px;position:relative;font-family:Montserrat;font-size:25px;right:452px;bottom:399px;background-color:black;color:white;border:black;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9zaGFyZWQvbWVkaWNhbC1pbmZvLWJ1dHRvbi9tZWRpY2FsLWluZm8tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUkwQixBQU1ELFlBQ0EsWUFDTSxrQkFDSyx1QkFDUixTQVRJLE1BVVAsWUFDQyxhQUNVLHVCQUNYLFlBQ0MsYUFDOEQsY0FkcEQseURBZU0sNkJBQ08sYUFmeEMsdUJBZ0JBIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9zaGFyZWQvbWVkaWNhbC1pbmZvLWJ1dHRvbi9tZWRpY2FsLWluZm8tYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbi8vIFNvIHlvdSB3b3VsZCBhZGQgYW4gb25jbGljayBldmVudCB3aGVyZSB0aGUgcm91dGVyIHdvdWxkIHRha2UgeW91IHRvIHRoZSByb3V0ZSBzcGVjaWZpZWQuIFxuXG5mdW5jdGlvbiBNZWRpY2FsSW5mb0J1dHRvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGljYWwtaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZWRpY2FsLWluZm9cIj5NZWRpY2FsIEluZm88L2J1dHRvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YCBcblxuICAgICAgICAubWVkaWNhbC1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWVkaWNhbC1pbmZvIHtcbiAgICAgICAgICAgIHdpZHRoOiAxODdweDtcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDQ1MnB4O1xuICAgICAgICAgICAgYm90dG9tOiAzOTlweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyMTIsMjEyLDI0NSksIHJnYig0NywgMTY0LCAyMzEpKTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IE1lZGljYWxJbmZvQnV0dG9uOyJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/shared/medical-info-button/medical-info-button.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MedicalInfoButton);

/***/ }),

/***/ "./src/shared/messaging-buttons/compose-button.css":
/*!*********************************************************!*\
  !*** ./src/shared/messaging-buttons/compose-button.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/messaging-buttons/compose-button.js":
/*!********************************************************!*\
  !*** ./src/shared/messaging-buttons/compose-button.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComposeButton; });
/* harmony import */ var _compose_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose-button.css */ "./src/shared/messaging-buttons/compose-button.css");
/* harmony import */ var _compose_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compose_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/messaging-buttons/compose-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ComposeButton() {
  return __jsx("div", {
    className: "compose-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "compose-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Compose"));
}

/***/ }),

/***/ "./src/shared/messaging-buttons/mailbox-button.css":
/*!*********************************************************!*\
  !*** ./src/shared/messaging-buttons/mailbox-button.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/messaging-buttons/mailbox-button.js":
/*!********************************************************!*\
  !*** ./src/shared/messaging-buttons/mailbox-button.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MailboxButton; });
/* harmony import */ var _mailbox_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailbox-button.css */ "./src/shared/messaging-buttons/mailbox-button.css");
/* harmony import */ var _mailbox_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mailbox_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/messaging-buttons/mailbox-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MailboxButton() {
  return __jsx("div", {
    className: "mailbox-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "mailbox-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Mailbox"));
}

/***/ }),

/***/ "./src/shared/messaging-buttons/messaging-buttons.css":
/*!************************************************************!*\
  !*** ./src/shared/messaging-buttons/messaging-buttons.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/messaging-buttons/messaging-buttons.js":
/*!***********************************************************!*\
  !*** ./src/shared/messaging-buttons/messaging-buttons.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagingButtons; });
/* harmony import */ var _messaging_buttons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messaging-buttons.css */ "./src/shared/messaging-buttons/messaging-buttons.css");
/* harmony import */ var _messaging_buttons_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_messaging_buttons_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mailbox_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailbox-button */ "./src/shared/messaging-buttons/mailbox-button.js");
/* harmony import */ var _compose_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose-button */ "./src/shared/messaging-buttons/compose-button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/messaging-buttons/messaging-buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function MessagingButtons() {
  return __jsx("div", {
    className: "messaging-buttons-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("button", {
    className: "compose-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Compose"));
}

/***/ }),

/***/ "./src/shared/news-button/news-button.js":
/*!***********************************************!*\
  !*** ./src/shared/news-button/news-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/news-button/news-button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NewsButton() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const news = "news";
  let dashboard = "dashboard";
  let isNewsBalloon = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isNewsBalloon);
  let isNewsContent = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isNewsContent);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log("from news button " + isNewsContent);
    let newsButton = document.querySelector(".news-button");

    if (isNewsContent === 2) {
      return;
    }

    newsButton.innerHTML = isNewsContent;

    if (newsButton.innerHTML === "") {
      newsButton.innerHTML = "News";
    }

    newsButton.addEventListener("mouseover", () => {
      newsButton.classList.add("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOver"])(news));
    });
    newsButton.addEventListener("mouseleave", () => {
      newsButton.classList.remove("news-hovered");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["mousedOff"])(news));
    });
  });
  let isBalloon = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.isBalloon);

  const clickNews = () => {
    if (isBalloon === true) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["newsBalloonClicked"])());
    }
  };

  return __jsx("div", {
    className: "jsx-3237485659" + " " + "news-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h1", {
    onClick: clickNews,
    className: "jsx-3237485659" + " " + "news-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3237485659",
    __self: this
  }, ".news-button-parent.jsx-3237485659{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:5;}.news-button.jsx-3237485659{z-index:5;width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.news-hovered.jsx-3237485659{cursor:none;-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvU3VuUnVubmVyL3NyYy9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENnQixBQUdrQyxBQU9KLEFBdUJHLFVBdEJBLEVBdUJVLFVBdEJDLHVCQUNSLGVBQ0csY0FWQyxJQVdQLFlBQ00sQUFtQnRCLGtCQWxCZSxXQUNHLGNBQ1MsdUJBQ1gsV0FmVyxDQWdCWCxhQUNTLGtEQUNGLG1CQUN3RCxnQkFsQmxFLFVBQ2IsNkNBa0JpQyw2QkFDTyxvQ0FDeEIsWUFDWSxnR0FDWSxnRkFDeEMiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9TdW5SdW5uZXIvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxuaW1wb3J0IHsgbW91c2VkT3ZlciwgbW91c2VkT2ZmLCBuZXdzQmFsbG9vbkNsaWNrZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQnV0dG9uKCkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBuZXdzID0gXCJuZXdzXCI7XG4gICAgbGV0IGRhc2hib2FyZCA9IFwiZGFzaGJvYXJkXCI7XG4gICAgbGV0IGlzTmV3c0JhbGxvb24gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc05ld3NCYWxsb29uKTtcbiAgICBsZXQgaXNOZXdzQ29udGVudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzTmV3c0NvbnRlbnQpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZyb20gbmV3cyBidXR0b24gXCIgKyBpc05ld3NDb250ZW50KTtcbiAgICAgICAgbGV0IG5ld3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3MtYnV0dG9uXCIpXG4gICAgICAgIGlmIChpc05ld3NDb250ZW50ID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBuZXdzQnV0dG9uLmlubmVySFRNTCA9IGlzTmV3c0NvbnRlbnQ7XG4gICAgICAgIGlmIChuZXdzQnV0dG9uLmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgICAgICAgICAgbmV3c0J1dHRvbi5pbm5lckhUTUwgPSBcIk5ld3NcIlxuICAgICAgICB9IFxuICAgICAgICBuZXdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBuZXdzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXdzLWhvdmVyZWRcIilcbiAgICAgICAgZGlzcGF0Y2gobW91c2VkT3ZlcihuZXdzKSl9KVxuICAgICAgICBuZXdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgbmV3c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibmV3cy1ob3ZlcmVkXCIpXG4gICAgICAgIGRpc3BhdGNoKG1vdXNlZE9mZihuZXdzKSlcbiAgICB9KVxuICAgIFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBpc0JhbGxvb24gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc0JhbGxvb24pXG4gICAgICBcbiAgICAgICBjb25zdCBjbGlja05ld3MgPSAoKSA9PiB7XG4gICAgICAgICBpZiAoaXNCYWxsb29uID09PSB0cnVlKSB7IFxuICAgICAgICAgICAgIGRpc3BhdGNoKG5ld3NCYWxsb29uQ2xpY2tlZCgpKVxuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvbi1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDEgb25DbGljaz17Y2xpY2tOZXdzfSBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvblwiPk5ld3M8L2gxPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIC5uZXdzLWJ1dHRvbi1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDo1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubmV3cy1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTM1OHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDIxMiwyMTIsMjQ1KSwgcmdiKDQ3LCAxNjQsIDIzMSkpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uZXdzLWhvdmVyZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yMyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/SunRunner/src/shared/news-button/news-button.js */"));
}

/***/ }),

/***/ "./src/shared/products-buttons/goods-button.css":
/*!******************************************************!*\
  !*** ./src/shared/products-buttons/goods-button.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/products-buttons/goods-button.js":
/*!*****************************************************!*\
  !*** ./src/shared/products-buttons/goods-button.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoodsButton; });
/* harmony import */ var _goods_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-button.css */ "./src/shared/products-buttons/goods-button.css");
/* harmony import */ var _goods_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_goods_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/products-buttons/goods-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function GoodsButton() {
  return __jsx("div", {
    className: "goods-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "goods-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Goods"));
}

/***/ }),

/***/ "./src/shared/products-buttons/products-buttons.js":
/*!*********************************************************!*\
  !*** ./src/shared/products-buttons/products-buttons.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsButtons; });
/* harmony import */ var _goods_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-button.css */ "./src/shared/products-buttons/goods-button.css");
/* harmony import */ var _goods_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_goods_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _goods_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-button */ "./src/shared/products-buttons/goods-button.js");
/* harmony import */ var _services_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-button */ "./src/shared/products-buttons/services-button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/products-buttons/products-buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function ProductsButtons() {
  return __jsx("div", {
    className: "goods-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_goods_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_services_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/shared/products-buttons/services-button.css":
/*!*********************************************************!*\
  !*** ./src/shared/products-buttons/services-button.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/products-buttons/services-button.js":
/*!********************************************************!*\
  !*** ./src/shared/products-buttons/services-button.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServicesButton; });
/* harmony import */ var _services_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-button.css */ "./src/shared/products-buttons/services-button.css");
/* harmony import */ var _services_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/products-buttons/services-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ServicesButton() {
  return __jsx("div", {
    className: "services-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "services-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Services"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/applications-button.css":
/*!**************************************************************!*\
  !*** ./src/shared/remaining-buttons/applications-button.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/applications-button.js":
/*!*************************************************************!*\
  !*** ./src/shared/remaining-buttons/applications-button.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationsButton; });
/* harmony import */ var _applications_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applications-button.css */ "./src/shared/remaining-buttons/applications-button.css");
/* harmony import */ var _applications_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_applications_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/applications-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ApplicationsButton() {
  return __jsx("div", {
    className: "applications-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "applications-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Applications"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/calendars-button.css":
/*!***********************************************************!*\
  !*** ./src/shared/remaining-buttons/calendars-button.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/calendars-button.js":
/*!**********************************************************!*\
  !*** ./src/shared/remaining-buttons/calendars-button.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalendarsButton; });
/* harmony import */ var _calendars_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendars-button.css */ "./src/shared/remaining-buttons/calendars-button.css");
/* harmony import */ var _calendars_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calendars_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/calendars-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function CalendarsButton() {
  return __jsx("div", {
    className: "calendars-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "calendars-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Calendars"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/drive-button.css":
/*!*******************************************************!*\
  !*** ./src/shared/remaining-buttons/drive-button.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/drive-button.js":
/*!******************************************************!*\
  !*** ./src/shared/remaining-buttons/drive-button.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DriveButton; });
/* harmony import */ var _drive_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive-button.css */ "./src/shared/remaining-buttons/drive-button.css");
/* harmony import */ var _drive_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drive_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/drive-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function DriveButton() {
  return __jsx("div", {
    className: "drive-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "drive-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Drive"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/health-button.css":
/*!********************************************************!*\
  !*** ./src/shared/remaining-buttons/health-button.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/health-button.js":
/*!*******************************************************!*\
  !*** ./src/shared/remaining-buttons/health-button.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HealthButton; });
/* harmony import */ var _health_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-button.css */ "./src/shared/remaining-buttons/health-button.css");
/* harmony import */ var _health_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_health_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/health-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function HealthButton() {
  return __jsx("div", {
    className: "health-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "health-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Health"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/messages-button.css":
/*!**********************************************************!*\
  !*** ./src/shared/remaining-buttons/messages-button.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/messages-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/remaining-buttons/messages-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesButton; });
/* harmony import */ var _messages_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-button.css */ "./src/shared/remaining-buttons/messages-button.css");
/* harmony import */ var _messages_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_messages_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/messages-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MessagesButton() {
  return __jsx("div", {
    className: "messages-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "messages-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Messages"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/network-one-button.css":
/*!*************************************************************!*\
  !*** ./src/shared/remaining-buttons/network-one-button.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/network-one-button.js":
/*!************************************************************!*\
  !*** ./src/shared/remaining-buttons/network-one-button.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NetworkOneButton; });
/* harmony import */ var _network_one_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-one-button.css */ "./src/shared/remaining-buttons/network-one-button.css");
/* harmony import */ var _network_one_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_network_one_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/network-one-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NetworkOneButton() {
  return __jsx("div", {
    className: "network-one-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "network-one-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Network 1"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/network-two-button.css":
/*!*************************************************************!*\
  !*** ./src/shared/remaining-buttons/network-two-button.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/network-two-button.js":
/*!************************************************************!*\
  !*** ./src/shared/remaining-buttons/network-two-button.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NetworkTwoButton; });
/* harmony import */ var _network_two_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-two-button.css */ "./src/shared/remaining-buttons/network-two-button.css");
/* harmony import */ var _network_two_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_network_two_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/network-two-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NetworkTwoButton() {
  return __jsx("div", {
    className: "network-two-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "network-two-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Network 2"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/phone-button.css":
/*!*******************************************************!*\
  !*** ./src/shared/remaining-buttons/phone-button.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/phone-button.js":
/*!******************************************************!*\
  !*** ./src/shared/remaining-buttons/phone-button.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneButton; });
/* harmony import */ var _phone_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-button.css */ "./src/shared/remaining-buttons/phone-button.css");
/* harmony import */ var _phone_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phone_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/phone-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PhoneButton() {
  return __jsx("div", {
    className: "phone-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "phone-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Phone"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/projects-button.css":
/*!**********************************************************!*\
  !*** ./src/shared/remaining-buttons/projects-button.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/projects-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/remaining-buttons/projects-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsButton; });
/* harmony import */ var _projects_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-button.css */ "./src/shared/remaining-buttons/projects-button.css");
/* harmony import */ var _projects_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_projects_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/projects-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ProjectsButton() {
  return __jsx("div", {
    className: "projects-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "projects-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Projects"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/remaining-buttons.css":
/*!************************************************************!*\
  !*** ./src/shared/remaining-buttons/remaining-buttons.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/remaining-buttons.js":
/*!***********************************************************!*\
  !*** ./src/shared/remaining-buttons/remaining-buttons.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemainingButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remaining-buttons.css */ "./src/shared/remaining-buttons/remaining-buttons.css");
/* harmony import */ var _remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remaining_buttons_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _applications_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applications-button */ "./src/shared/remaining-buttons/applications-button.js");
/* harmony import */ var _projects_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-button */ "./src/shared/remaining-buttons/projects-button.js");
/* harmony import */ var _templates_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates-button */ "./src/shared/remaining-buttons/templates-button.js");
/* harmony import */ var _drive_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drive-button */ "./src/shared/remaining-buttons/drive-button.js");
/* harmony import */ var _network_one_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network-one-button */ "./src/shared/remaining-buttons/network-one-button.js");
/* harmony import */ var _network_two_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network-two-button */ "./src/shared/remaining-buttons/network-two-button.js");
/* harmony import */ var _wall_one_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wall-one-button */ "./src/shared/remaining-buttons/wall-one-button.js");
/* harmony import */ var _wall_two_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wall-two-button */ "./src/shared/remaining-buttons/wall-two-button.js");
/* harmony import */ var _social_media_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./social-media-button */ "./src/shared/remaining-buttons/social-media-button.js");
/* harmony import */ var _health_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./health-button */ "./src/shared/remaining-buttons/health-button.js");
/* harmony import */ var _calendars_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendars-button */ "./src/shared/remaining-buttons/calendars-button.js");
/* harmony import */ var _phone_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phone-button */ "./src/shared/remaining-buttons/phone-button.js");
/* harmony import */ var _messages_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages-button */ "./src/shared/remaining-buttons/messages-button.js");
/* harmony import */ var _research_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./research-button */ "./src/shared/remaining-buttons/research-button.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/remaining-buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function RemainingButtons() {
  return __jsx("div", {
    className: "remaining-buttons-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_applications_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_projects_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_templates_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_drive_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_network_one_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_network_two_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_wall_one_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_wall_two_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_social_media_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_health_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_calendars_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_phone_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_messages_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_research_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/research-button.css":
/*!**********************************************************!*\
  !*** ./src/shared/remaining-buttons/research-button.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/research-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/remaining-buttons/research-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResearchButton; });
/* harmony import */ var _research_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./research-button.css */ "./src/shared/remaining-buttons/research-button.css");
/* harmony import */ var _research_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_research_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/research-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ResearchButton() {
  return __jsx("div", {
    className: "research-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "research-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Research"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/social-media-button.css":
/*!**************************************************************!*\
  !*** ./src/shared/remaining-buttons/social-media-button.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/social-media-button.js":
/*!*************************************************************!*\
  !*** ./src/shared/remaining-buttons/social-media-button.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialMediaButton; });
/* harmony import */ var _social_media_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media-button.css */ "./src/shared/remaining-buttons/social-media-button.css");
/* harmony import */ var _social_media_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_social_media_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/social-media-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function SocialMediaButton() {
  return __jsx("div", {
    className: "social-media-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    className: "social-media-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Social Media"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/templates-button.css":
/*!***********************************************************!*\
  !*** ./src/shared/remaining-buttons/templates-button.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/templates-button.js":
/*!**********************************************************!*\
  !*** ./src/shared/remaining-buttons/templates-button.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplatesButton; });
/* harmony import */ var _templates_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates-button.css */ "./src/shared/remaining-buttons/templates-button.css");
/* harmony import */ var _templates_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/templates-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function TemplatesButton() {
  return __jsx("div", {
    className: "templates-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "templates-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Templates"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/wall-one-button.css":
/*!**********************************************************!*\
  !*** ./src/shared/remaining-buttons/wall-one-button.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/wall-one-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/remaining-buttons/wall-one-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WallOneButton; });
/* harmony import */ var _wall_one_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall-one-button.css */ "./src/shared/remaining-buttons/wall-one-button.css");
/* harmony import */ var _wall_one_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wall_one_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/wall-one-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function WallOneButton() {
  return __jsx("div", {
    className: "wall-one-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "wall-one-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Wall 1"));
}

/***/ }),

/***/ "./src/shared/remaining-buttons/wall-two-button.css":
/*!**********************************************************!*\
  !*** ./src/shared/remaining-buttons/wall-two-button.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/remaining-buttons/wall-two-button.js":
/*!*********************************************************!*\
  !*** ./src/shared/remaining-buttons/wall-two-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WallTwoButton; });
/* harmony import */ var _wall_two_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall-two-button.css */ "./src/shared/remaining-buttons/wall-two-button.css");
/* harmony import */ var _wall_two_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wall_two_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/remaining-buttons/wall-two-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function WallTwoButton() {
  return __jsx("div", {
    className: "wall-two-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "wall-two-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Wall 2"));
}

/***/ }),

/***/ "./src/shared/reviews-button/reviews-button.css":
/*!******************************************************!*\
  !*** ./src/shared/reviews-button/reviews-button.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/reviews-button/reviews-button.js":
/*!*****************************************************!*\
  !*** ./src/shared/reviews-button/reviews-button.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewsButton; });
/* harmony import */ var _reviews_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews-button.css */ "./src/shared/reviews-button/reviews-button.css");
/* harmony import */ var _reviews_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reviews_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/reviews-button/reviews-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ReviewsButton() {
  return __jsx("div", {
    className: "reviews-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("button", {
    className: "reviews-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Reviews"));
}

/***/ }),

/***/ "./src/shared/tree-button/tree-button.js":
/*!***********************************************!*\
  !*** ./src/shared/tree-button/tree-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/shared/tree-button/tree-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // So you would add an onclick event where the router would take you to the route specified. 

function TreeButton() {
  function handleClick() {
    console.log('handleClick Called'); // Routing logic to take you to the treeView
  }

  const clickTree = () => {};

  return __jsx("div", {
    className: "tree-button-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    onClick: clickTree,
    className: "tree-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Tree of Knowledge")));
}

/* harmony default export */ __webpack_exports__["default"] = (TreeButton);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/websites/Documents/SunRunner/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-sound":
/*!******************************!*\
  !*** external "react-sound" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sound");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
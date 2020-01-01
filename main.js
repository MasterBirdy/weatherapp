(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-library"] = factory();
	else
		root["my-library"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./background.jpg */ "./src/background.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 62.5%;\n}\n\nhtml,\nbody {\n    width: 100%;\n    flex-direction: column;\n    background-color: #d2eaf3;\n    font-family: \"Lato\", sans-serif;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n    background-attachment: fixed;\n    background-position: 50% 65%;\n    background-size: auto 150%;\n}\n\nh1 {\n    margin-top: 1.5rem;\n    font-size: 7rem;\n    font-family: \"Solway\", serif;\n}\n\n.container {\n    text-align: center;\n    max-width: 80rem;\n    padding: 2rem 2rem 1rem;\n    margin: 3rem auto 0;\n}\n\n.weatherSearch {\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n}\n\n.weatherSearch label {\n     font-family: \"Solway\", serif;\n     margin-top: 1.5rem;\n     font-size: 3.5rem;\n}\n\n.weatherSearch input {\n     margin-top: 1.5rem;\n     padding: 10px 12px;\n     font-size: 2rem;\n     border-radius: 5px;\n     border: 1px solid grey;\n     outline: none;\n     box-shadow: 0px 0px 2px 2px rgba(182, 182, 182, 0.226);\n}\n\n.weatherSearch button{\n     margin-top: 1.5rem;\n     padding: 8px 15px;\n     border-radius: 5px;\n     font-size: 2rem;\n     background-color: rgb(218, 218, 218);\n     border: 1px solid rgb(51, 51, 51);\n     outline: none;\n}\n\n.weatherSearch input:focus{\n     box-shadow: 0px 0px 2px 2px rgba(52, 134, 27, 0.527);\n}\n\n.cityData {\n     position: relative;\n     margin-top: 3rem;\n     border-radius: 20px;    \n     padding: 2rem 1rem;\n     background-color: rgba(255, 255, 255, 0.637);\n     z-index: 1;\n     text-shadow:\n     0px 0px 8px rgba(217, 234, 255, 0.822),\n     0px 0px 10px rgba(255, 255, 255, 0.74);\n}\n\n.cityDataBackground{\n     position: absolute;\n     top: 0;\n     left: 0;\n     height: 100%;\n     width: 100%;\n     content: \"\";\n     background-repeat: no-repeat;\n     background-position: center center;\n     opacity: 1;\n     z-index: -1;\n     border-radius: 20px;\n     border: 1px solid black;\n}\n\n.cityDataBackground:after{\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 100%;\n          width: 100%;\n          content: \"\";\n          background-color: rgb(151, 151, 151);\n          opacity: .3;\n          z-index: 0;\n          border-radius: 20px;\n}\n\nimg {\n     display: block;\n     margin: .5rem auto 0;\n     background-color: rgb(218, 218, 218);\n     border: 5px dashed grey;\n     border-radius: 5px;\n     box-sizing: border-box;\n}\n\n.cityData h1 {\n     margin: 0;\n     font-size: 5rem;\n}\n\n.cityData h2{\n     font-family: \"Solway\", serif;\n     font-weight: 400;\n     font-size: 3.2rem;\n}\n\n.dataGrid {\n     margin-top: 2rem;\n     display: grid;\n     grid-template-columns: 1fr 1fr 1fr;\n     grid-column-gap: 1rem;\n     grid-row-gap: 2rem;\n}\n\n.dataGrid h3 {\n     font-family: \"Solway\", serif;\n     font-size: 3rem;\n}\n\n.dataGrid p {\n     font-size: 3rem;\n     color: rgb(0, 0, 65);\n     font-weight: 600;\n}\n\n.dataGrid p .identifier{\n     margin-left: 3px;\n     color: black;\n     font-size: 2.5rem;\n     font-family: \"Solway\", serif;\n}\n\n.dataItem {\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     justify-content: flex-start;\n}\n\n.temp {\n     display: inline-block;\n     margin-top: 0;\n     font-size: 5rem;\n     font-weight: 900;\n     color: rgb(0, 0, 0);\n}\n\n.dataGrid p.low {\n     color: rgb(0, 85, 0);\n}\n\n.dataGrid p.medium {\n     color: rgb(221, 133, 0);\n}\n\n.dataGrid p.high {\n     color: rgb(170, 0, 0);\n}\n\nfooter {\n     margin-top: .5rem;\n     text-align: center;\n}\n\nfooter p {\n     font-size: 1.4rem;\n}\n\n.photographer {\n     font-size: 1.4rem;\n}\n\n.degree {\n     color: rgb(0, 0, 65);\n     margin-left: 3px;\n     font-size: 4.8rem;\n}\n\n.errorClass {\n     background-color: rgb(255, 151, 151);\n     font-size: 2rem;\n     width: 100%;\n     padding: 1rem;\n     position: fixed;\n     top: 0;\n     text-align: center;\n     z-index: 10;\n}\n\n@media (max-width: 700px) {\n\n     h1 {\n          margin-top: 0rem;\n          font-size: 4rem;\n          font-family: \"Solway\", serif;\n      }\n\n      .container {\n           display: flex;\n           flex-direction: column;\n           margin-top: 0rem;\n           width: 100%;\n           height: 100vh;\n           padding: 1rem 1rem;\n      }\n\n      .weatherSearch label {\n          font-family: \"Solway\", serif;\n          margin-top: .5rem;\n          font-size: 3rem;\n     }\n\n     .weatherSearch input {\n          margin-top: 1.5rem;\n          padding: 8px 10px;\n          font-size: 1.8rem;\n     }\n\n      .cityData{\n           display: flex;\n           flex-direction: column;\n           justify-content: space-around;\n           align-items: center;\n           width: 100%;\n           margin-top: 1.5rem;\n           border-radius: 20px;    \n           padding: 1.5rem 1rem;\n           flex: 1 0 auto;\n      }\n\n      .cityData h1{\n           font-size: 3.5rem; \n      }\n\n     .dataGrid {\n          margin-top: 1rem;\n          grid-template-columns: 1fr 1fr;\n          grid-column-gap: .25rem;\n          grid-row-gap: 1rem;\n     }\n\n     .dataItem h3{\n          font-size: 2.25rem;\n     }\n\n     .temp {\n          margin-top: 0;\n          font-size: 3.5rem;\n     }\n\n     .icon {\n          display: none;\n     }\n\n} \n\n@media (max-width: 700px) and (min-height: 800px) {\n\n\n     .temp {\n\n          font-size: 4.25rem;\n     }\n\n     .dataGrid h3{\n          font-size: 2.5rem;\n     }\n\n     .icon {\n          display: block;\n     }\n\n\n}\n\n\n@media (max-width: 900px) and (orientation: landscape) {\n\n\n     .container{\n          padding: 2rem;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          box-sizing: border-box;\n     }\n\n     .title {\n          display: none;\n     }\n\n     .icon {\n          display: none;\n     }\n\n     label {\n          display: none;\n     }\n\n     .cityData{\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          margin: 0 auto;\n          order: 1;\n          flex-grow: 1;\n          height: 80vh;\n     }\n\n     .cityData h1 {\n          font-size: 4.25rem;\n     }\n\n     footer {\n          order: 2;\n     }\n     \n     .weatherSearch {\n          order: 3;\n     }\n\n     .searchDiv {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n     }\n\n     .dataItem {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n     }\n\n     .dataGrid h3 {\n          font-size: 2.5rem;\n     }\n\n\n     .dataItem p {\n          font-size: 2.75rem;\n     }\n\n     .temp {\n          margin-top: 0;\n\n     }\n\n}\n\n@media (max-width: 600px) and (orientation: landscape) {\n\n     .cityData h1 {\n          font-size: 3.25rem;\n     }\n\n     .dataGrid h3 {\n          font-size: 2.1rem;\n     }\n\n     .dataItem p {\n          font-size: 2.5rem;\n     }\n}\n\n@media (min-height: 400px) and (orientation: landscape) {\n     .icon {\n          display: block;\n     }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/ColorSeverity.js":
/*!******************************!*\
  !*** ./src/ColorSeverity.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSeverity; });
class ColorSeverity {
  static formatWind(speed) {
    if (speed < 13.9) {
      return "low";
    } if (speed < 20.7) {
      return "medium";
    }
    return "high";
  }

  static formatHumidity(percent) {
    if (percent < 40) {
      return "low";
    } if (percent < 70) {
      return "medium";
    }
    return "high";
  }
}


/***/ }),

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMHandler; });
/* harmony import */ var _temperature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature.js */ "./src/temperature.js");
/* harmony import */ var _timeFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeFormatter.js */ "./src/timeFormatter.js");
/* harmony import */ var _DirectionFormatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectionFormatter.js */ "./src/DirectionFormatter.js");
/* harmony import */ var _ColorSeverity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorSeverity.js */ "./src/ColorSeverity.js");





class DOMHandler {
  createCityData(cityData) {
    const cityDiv = document.querySelector(".cityData");
    const oldFooter = document.querySelector("footer");
    if (cityDiv !== null) {
      cityDiv.remove();
    }
    if (oldFooter !== null) {
      oldFooter.remove();
    }
    const div = document.createElement("div");
    const sunRise = new Date(cityData.sys.sunrise * 1000);
    const sunSet = new Date(cityData.sys.sunset * 1000);
    div.className = "cityData";
    console.log(cityData.wind.deg);
    div.innerHTML = `
    <div class="searchDiv">
    <h1>${cityData.name}, ${cityData.sys.country}</h1>
    <h2>Temperature</h2>
    <span class="temp">${_temperature_js__WEBPACK_IMPORTED_MODULE_0__["default"].convert(cityData.main.temp)}<span class="temp degree">°F</span></span>
    <img class="icon" src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png" alt="${cityData.weather[0].description}">
    </div>
    <div class="dataGrid">
      <div class="dataItem">
          <h3>Wind Speed</h3>
          <p class="${_ColorSeverity_js__WEBPACK_IMPORTED_MODULE_3__["default"].formatWind(cityData.wind.speed)}">${cityData.wind.speed}<span class="identifier">m/s</span></p>
      </div>
      <div class="dataItem">
          <h3>Wind Direction</h3>
          <p>${_DirectionFormatter_js__WEBPACK_IMPORTED_MODULE_2__["default"].formatDirection(parseInt(cityData.wind.deg, 10))}</p>
      </div>
      <div class="dataItem">
          <h3>Humidity</h3>
          <p class="${_ColorSeverity_js__WEBPACK_IMPORTED_MODULE_3__["default"].formatHumidity(cityData.main.humidity)}">${cityData.main.humidity}<span class="identifier">%</span></p>
      </div>
      <div class="dataItem">
          <h3>Cloudiness</h3>
          <p>${cityData.clouds.all}<span class="identifier">%</span></p>
      </div>
      <div class="dataItem">
          <h3>Sunrise</h3>
            <p>${_timeFormatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatHours(sunRise.getHours())}:${_timeFormatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatMinutes(sunRise.getMinutes())}<span class="identifier">am</span></p>
      </div>
      <div class="dataItem">
          <h3>Sunset</h3>
          <p>${_timeFormatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatHours(sunSet.getHours())}:${_timeFormatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatMinutes(sunSet.getMinutes())}<span class="identifier">pm</span></p>
      </div>
      </div>
      <div class="cityDataBackground">
      </div>`;
    document.querySelector(".container").appendChild(div);
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>Image by <span class='photographer'>...</span>.</p>";
    document.querySelector(".container").appendChild(footer);
  }

  createBackgroundPicture(source, photographer) {
    const cityData = document.querySelector(".cityDataBackground");
    cityData.style.backgroundImage = `url(${source})`;
    document.querySelector(".photographer").textContent = photographer;
  }

  errorHandle(message) {
    const existingDiv = document.querySelector(".errorClass");
    if (existingDiv !== null) {
      existingDiv.remove();
    }
    const body = document.querySelector("body");
    const errorDiv = document.createElement("div");
    errorDiv.textContent = message;
    errorDiv.className = "errorClass";
    body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
  }
}


/***/ }),

/***/ "./src/DirectionFormatter.js":
/*!***********************************!*\
  !*** ./src/DirectionFormatter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectionFormatter; });
class DirectionFormatter {
  static formatDirection(degree) {
    if (degree > 0 && degree <= 22) {
      return "N";
    } if (degree > 22 && degree <= 67) {
      return "NW";
    } if (degree > 67 && degree <= 112) {
      return "E";
    } if (degree > 112 && degree <= 157) {
      return "SE";
    } if (degree > 157 && degree <= 202) {
      return "S";
    } if (degree > 202 && degree <= 247) {
      return "SW";
    } if (degree > 247 && degree <= 292) {
      return "W";
    } if (degree > 292 && degree <= 337) {
      return "NW";
    } if (degree > 337 && degree <= 360) {
      return "N";
    }
    return "?";
  }
}


/***/ }),

/***/ "./src/EasyHTTP.js":
/*!*************************!*\
  !*** ./src/EasyHTTP.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EasyHTTP; });
class EasyHTTP {
  constructor() {
    this.appidWeather = "85f239423b6b69d35a74b80a3b91cff8";
    this.appidPicture = "563492ad6f91700001000001eb7a41ead3f049018ceb18915d19b9ce";
  }

  // make an HTTP GET request
  httpGETCity(city) {
    return new Promise((resolve, reject) => {
      let newCity = city;
      if (city.includes(",")) {
        newCity = city.split(",")[0];
      }
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${this.appidWeather}`)
        .then((res) => (res.ok ? res.json() : reject("Error! City was not found!")))
        .then((data) => resolve(data))
        .catch(() => reject("Error! City was not found!"));
    });
  }

  httpGETPicture(text) {
    return new Promise((resolve, reject) => {
      let weatherText = text;
      if (text === "Clear") {
        weatherText += " skies";
      } else if (text === "Drizzle") {
        weatherText = "Rain";
      }
      fetch(`https://api.pexels.com/v1/search?query=${weatherText}`, {
        method: "GET",
        headers: {
          authorization: this.appidPicture
        }
      })
        .then((res) => (res.ok ? res.json() : reject("Picture not found!")))
        .then((data) => resolve(data))
        .catch(() => reject("Error! Picture did not load."));
    });
  }
}


/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1dbe06205f7a996f82c87c847e2e5c12.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EasyHTTP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasyHTTP */ "./src/EasyHTTP.js");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.jpg */ "./src/background.jpg");





const easyHTTP = new _EasyHTTP__WEBPACK_IMPORTED_MODULE_0__["default"]();
const domHandler = new _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
const input = document.querySelector("input");

document.querySelector("button").addEventListener("click", () => {
  easyHTTP.httpGETCity(input.value)
    .then((data) => {
      domHandler.createCityData(data);
      return easyHTTP.httpGETPicture(data.weather[0].main);
    })
    .then((data) => {
      const photoNumber = Math.floor(Math.random() * (data.total_results < 15 ? data.total_results : 15));
      domHandler.createBackgroundPicture(data.photos[photoNumber].src.original, data.photos[photoNumber].photographer);
    })
    .catch((err) => domHandler.errorHandle(err));
});

easyHTTP.httpGETCity("Anaheim")
  .then((data) => {
    console.log(data);
    domHandler.createCityData(data);
    return easyHTTP.httpGETPicture(data.weather[0].main);
  })
  .then((data) => {
    console.log(data);
    const photoNumber = Math.floor(Math.random() * (data.total_results < 15 ? data.total_results : 15));
    domHandler.createBackgroundPicture(data.photos[photoNumber].src.original, data.photos[photoNumber].photographer);
  });


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/temperature.js":
/*!****************************!*\
  !*** ./src/temperature.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Temperature; });
class Temperature {
  static convert(kelvin) {
    return ((parseFloat(kelvin) - 273.15) * (9 / 5) + 32).toFixed(1);
  }
}


/***/ }),

/***/ "./src/timeFormatter.js":
/*!******************************!*\
  !*** ./src/timeFormatter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeFormatter; });
class TimeFormatter {
  static formatHours(hours) {
    if (hours === 0) {
      return 12;
    }
    if (hours > 13) {
      return hours - 12;
    }

    return hours;
  }

  static formatMinutes(minutes) {
    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  }
}


/***/ })

/******/ });
});
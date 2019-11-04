/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n.wrapper {\n  max-width: 1024px;\n  width: 100%;\n  height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #eeeeee; }\n\n.textArea {\n  width: 100%; }\n\ntextarea {\n  display: block;\n  width: 800px;\n  height: 300px;\n  margin: 0 auto 10px;\n  padding: 10px;\n  font-size: 18px;\n  color: #444;\n  border: 5px solid #1e6b06;\n  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4); }\n\n.keyboard {\n  width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: #000;\n  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4); }\n  .keyboard__row {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 5px 0 0; }\n  .keyboard__key {\n    min-width: 40px;\n    max-width: 40px;\n    width: 100%;\n    height: 40px;\n    font-weight: 500;\n    line-height: 40px;\n    text-align: center;\n    color: #e8f016;\n    background: #1e6b06;\n    border-radius: 3px;\n    cursor: pointer;\n    user-select: none;\n    transition: all .5s ease; }\n    .keyboard__key--active {\n      border-radius: 10px;\n      background: #e8f016;\n      color: #000; }\n\n.key__tab {\n  min-width: 80px;\n  max-width: 80px; }\n\n.key__space {\n  min-width: 450px;\n  max-width: 450px; }\n\n.key__shift {\n  min-width: 110px;\n  max-width: 110px; }\n\n.key__back {\n  min-width: 80px;\n  max-width: 80px; }\n\n.key__caps {\n  min-width: 100px;\n  max-width: 100px; }\n\n.key__enter {\n  min-width: 90px;\n  max-width: 90px; }\n\n.wrapper__keyboard {\n  width: 100%; }\n\n.off {\n  display: none; }\n\n.down {\n  display: none; }\n", ""]);


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
        return "@media ".concat(item[2], "{").concat(content, "}");
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

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/template.js */ "./src/module/template.js");
/* harmony import */ var _module_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/key.js */ "./src/module/key.js");
/* harmony import */ var _module_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/keys.js */ "./src/module/keys.js");





Object(_module_template_js__WEBPACK_IMPORTED_MODULE_1__["addTemplate"])();
const rows = document.querySelectorAll('.keyboard__row');

rows.forEach(function (item, index) {
    _module_keys_js__WEBPACK_IMPORTED_MODULE_3__["keys"][index].forEach(function (k) {
        let key = Object(_module_key_js__WEBPACK_IMPORTED_MODULE_2__["addKey"])(...k);
        if (`${k[0]}` == 'Space') {
            key.classList.add('key__space');
        }
        if (`${k[0]}` == 'ShiftLeft' || `${k[0]}` == 'ShiftRight') {
            key.classList.add('key__shift');
        }
        if (`${k[0]}` == 'Tab') {
            key.classList.add('key__tab');
        }
        if (`${k[0]}` == 'Backspace') {
            key.classList.add('key__back');
        }
        if (`${k[0]}` == 'Enter') {
            key.classList.add('key__enter');
        }
        if (`${k[0]}` == 'CapsLock') {
            key.classList.add('key__caps');
        }
        item.append(key);
    });
});

const keyboardKeys = document.querySelectorAll('.keyboard__key');
const keyLang = document.querySelectorAll('.lang');
const keyUpDown = document.querySelectorAll('.case');
const textarea = document.querySelector('textarea');


document.addEventListener('keydown', event => {
    keyDown(event);
    event.preventDefault();
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        keyUpDown.forEach(function (key) {
            if (!key.classList.contains('down')) {
                key.classList.add('down');
            } else {
                key.classList.remove('down');
            };
        });
    }
})

document.addEventListener('keyup', event => {
    let keyCodes = event.code;
    if (keyCodes != 'Tab' && keyCodes != 'ShiftLeft' && keyCodes != 'ShiftRigth' && keyCodes != 'AltRigth' && keyCodes != 'AltLeft' && keyCodes != 'ControlLeft' && keyCodes != 'ControlRight' && keyCodes != 'MetaRight' && keyCodes != 'MetaRLeft' && keyCodes != 'CapsLock' && keyCodes != 'ContextMenu' && keyCodes != 'Enter' && keyCodes != 'Backspace') {
        let key = document.querySelectorAll(`.${keyCodes}`);
        key.forEach(item => {
            if (!item.classList.contains('off')) {
                item.querySelectorAll('.case').forEach(k => {
                    if (!k.classList.contains('down')) {
                        textarea.value += k.textContent;
                    }
                })
            }
        })
    }
    if (keyCodes == 'Tab') {
        event.preventDefault();
        textarea.value += '    ';
    }
    if (keyCodes == 'Enter') {
        event.preventDefault();
        textarea.value += '\n';
    }
    if (keyCodes == 'Space') {
        event.preventDefault();
        textarea.value += '';
    }
    if (keyCodes == 'Backspace') {
        event.preventDefault();
        textarea.value = textarea.value.split('').slice(0, -1).join('');
    }
})

document.addEventListener('keyup', event => {
    keyUp(event);
    event.preventDefault();
})

document.addEventListener('keyup', event => {
    if (event.code == 'CapsLock') {
        keyUpDown.forEach(function (key, index) {
            if (!key.classList.contains('down')) {
                key.classList.add('down');
            } else {
                key.classList.remove('down');
            };
        });
    }
})

document.addEventListener('keyup', event => {
    if (event.code == 'ShiftLeft' && event.ctrlKey) {
        keyLang.forEach(function (key) {
            key.classList.toggle('off');
        })
    }
})

document.addEventListener('keyup', event => {
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        keyUpDown.forEach(function (key) {
            key.classList.toggle('down');
        });
    }
})


function keyDown(event) {
    keyboardKeys.forEach(item => {
        if (item.querySelector(`.${event.code}`)) {
            item.classList.add('keyboard__key--active');
        }
    })
}

function keyUp(event) {
    keyboardKeys.forEach(item => {
        if (item.querySelector(`.${event.code}`)) {
            item.classList.remove('keyboard__key--active');
        }
    })
}

/***/ }),

/***/ "./src/module/key.js":
/*!***************************!*\
  !*** ./src/module/key.js ***!
  \***************************/
/*! exports provided: addKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addKey", function() { return addKey; });
function addKey(keyCode, keyLangOneUp, keyLangOneDown, keyLangTwoUp, keyLangTwoDown){

    let key = document.createElement('div');
    key.classList.add('keyboard__key');

    let keyCodeOn = document.createElement('span');
    keyCodeOn.classList.add(`${keyCode}`);
    keyCodeOn.classList.add('lang');
    
    let addKeyLangOneUp = document.createElement('span');
    addKeyLangOneUp.innerText = `${keyLangOneUp}`;
    addKeyLangOneUp.classList.add('case');
    

    let addKeyLangOneDown = document.createElement('span');
    addKeyLangOneDown.innerText = `${keyLangOneDown}`;
    addKeyLangOneDown.classList.add('case');
    addKeyLangOneDown.classList.add('down');
    keyCodeOn.append(addKeyLangOneUp);
    keyCodeOn.append(addKeyLangOneDown);

    let keyCodeOff = document.createElement('span');
    keyCodeOff.classList.add(`${keyCode}`);
    keyCodeOff.classList.add('lang');
    keyCodeOff.classList.add('off');

    let addKeyLangTwoUp = document.createElement('span');
    addKeyLangTwoUp.classList.add('case');
    addKeyLangTwoUp.innerText = `${keyLangTwoUp}`;

    let addKeyLangTwoDown = document.createElement('span');
    addKeyLangTwoDown.innerText = `${keyLangTwoDown}`;
    addKeyLangTwoDown.classList.add('case');
    addKeyLangTwoDown.classList.add('down');

    keyCodeOff.append(addKeyLangTwoUp);
    keyCodeOff.append(addKeyLangTwoDown);

    key.append(keyCodeOn);
    key.append(keyCodeOff);

    return key;
}



/***/ }),

/***/ "./src/module/keys.js":
/*!****************************!*\
  !*** ./src/module/keys.js ***!
  \****************************/
/*! exports provided: keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
const keys = [
    [
        [
            'Backquote',
            'ё',
            'Ё',
            '`',
            '~'
        ],
        [
            'Digit1',
            '1',
            '!',
            '1',
            '!'
        ],
        [
            'Digit2',
            '2',
            '\"',
            '2',
            '@'
        ],
        [
            'Digit3',
            '3',
            '№',
            '3',
            '#'
        ],
        [
            'Digit4',
            '4',
            ';',
            '4',
            '$'
        ],
        [
            'Digit5',
            '5',
            '%',
            '5',
            '%'
        ],
        [
            'Digit6',
            '6',
            ':',
            '6',
            '^'
        ],
        [
            'Digit7',
            '7',
            '?',
            '7',
            '&'
        ],
        [
            'Digit8',
            '8',
            '*',
            '8',
            '*'
        ],
        [
            'Digit9',
            '9',
            '(',
            '9',
            '('
        ],
        [
            'Digit0',
            '0',
            ')',
            '0',
            ')'
        ],
        [
            'Minus',
            '-',
            '_',
            '-',
            '_'
        ],
        [
            'Equal',
            '=',
            '+',
            '=',
            '+'
        ],
        [
            'Backspace',
            'Backspace',
            'Backspace',
            'Backspace',
            'Backspace'
        ]
    ],
    [
        [
            'Tab',
            'Tab',
            'Tab',
            'Tab',
            'Tab'
        ],
        [
            'KeyQ',
            'й',
            'Й',
            'q',
            'Q'
        ],
        [
            'KeyW',
            'ц',
            'Ц',
            'w',
            'W'
        ],
        [
            'KeyE',
            'у',
            'У',
            'e',
            'E'
        ],
        [
            'KeyE',
            'у',
            'У',
            'e',
            'E'
        ],
        [
            'KeyR',
            'к',
            'К',
            'r',
            'R'
        ],
        [
            'KeyT',
            'е',
            'Е',
            't',
            'T'
        ],
        [
            'KeyY',
            'н',
            'Н',
            'y',
            'Y'
        ],
        [
            'KeyU',
            'г',
            'Г',
            'u',
            'U'
        ],
        [
            'KeyI',
            'ш',
            'Ш',
            'i',
            'I'
        ],
        [
            'KeyO',
            'щ',
            'Щ',
            'o',
            'O'
        ],
        [
            'KeyP',
            'з',
            'З',
            'p',
            'P'
        ],
        [
            'BracketLeft',
            'х',
            'Х',
            '[',
            '{'
        ],
        [
            'BracketRight',
            'ъ',
            'Ъ',
            ']',
            '}'
        ],
        [
            'Backslash',
            '\\',
            '/',
            '\\',
            '|'
        ],
    ],
    [
        [
            'CapsLock',
            'CapsLock',
            'CapsLock',
            'CapsLock',
            'CapsLock'
        ],
        [
            'KeyA',
            'ф',
            'Ф',
            'a',
            'A'
        ],
        [
            'KeyS',
            'ы',
            'Ы',
            's',
            'S'
        ],
        [
            'KeyD',
            'в',
            'В',
            'd',
            'D'
        ],
        [
            'KeyF',
            'а',
            'А',
            'f',
            'F'
        ],
        [
            'KeyG',
            'п',
            'П',
            'g',
            'G'
        ],
        [
            'KeyH',
            'р',
            'Р',
            'h',
            'H'
        ],
        [
            'KeyJ',
            'о',
            'О',
            'j',
            'J'
        ],
        [
            'KeyK',
            'л',
            'Л',
            'k',
            'K'
        ],
        [
            'KeyL',
            'д',
            'Д',
            'l',
            'L'
        ],
        [
            'Semicolon',
            'ж',
            'Ж',
            ';',
            ':'
        ],
        [
            'Quote',
            'э',
            'Э',
            '\'',
            '"'
        ],
        [
            'Enter',
            'Enter',
            'Enter',
            'Enter',
            'Enter'
        ]
    ],
    [
        [
            'ShiftLeft',
            'Shift',
            'Shift',
            'Shift',
            'Shift'
        ],
        [
            'KeyZ',
            'я',
            'Я',
            'z',
            'Z'
        ],
        [
            'KeyX',
            'ч',
            'Ч',
            'x',
            'X'
        ],
        [
            'KeyC',
            'с',
            'С',
            'c',
            'C'
        ],
        [
            'KeyV',
            'м',
            'М',
            'v',
            'V'
        ],
        [
            'KeyB',
            'и',
            'И',
            'b',
            'B'
        ],
        [
            'KeyN',
            'т',
            'Т',
            'n',
            'N'
        ],
        [
            'KeyM',
            'ь',
            'Ь',
            'm',
            'M'
        ],
        [
            'Period',
            'б',
            'Б',
            ',',
            '<'
        ],
        [
            'Slash',
            'ю',
            'Ю',
            '.',
            '>'
        ],
        [
            'IntlRo',
            '.',
            ',',
            '/',
            '?'
        ],
        [
            'ShiftRight',
            'Shift',
            'Shift',
            'Shift',
            'Shift'
        ]
    ],
    [
        [
            'ControlLeft',
            'Ctrl',
            'Ctrl',
            'Ctrl',
            'Ctrl'
        ],
        [
            'MetaLeft',
            'Win',
            'Win',
            'Win',
            'Win'
        ],
        [
            'AltLeft',
            'Alt',
            'Alt',
            'Alt',
            'Alt'
        ],
        [
            'Space',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        [
            'AltRight',
            'Alt',
            'Alt',
            'Alt',
            'Alt'
        ],
        [
            'MetaRight',
            'Win',
            'Win',
            'Win',
            'Win'
        ],
        [
            'ContextMenu',
            'Cont',
            'Cont',
            'Cont',
            'Cont'
        ],
        [
            'ControlRight',
            'Ctrl',
            'Ctrl',
            'Ctrl',
            'Ctrl'
        ],

    ]
]




/***/ }),

/***/ "./src/module/template.js":
/*!********************************!*\
  !*** ./src/module/template.js ***!
  \********************************/
/*! exports provided: addTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTemplate", function() { return addTemplate; });
const body = document.querySelector('body');

function addTemplate() {
    let article = document.createElement('article');
    article.classList.add('wrapper');
    body.append(article);

    let sectionTextArea = document.createElement('section');
    sectionTextArea.classList.add('textArea');
    article.append(sectionTextArea);

    let textArea = document.createElement('textarea');
    let rowsTextArea = document.createAttribute('rows');
    let colsTextArea = document.createAttribute('cols');
    rowsTextArea.value = '6';
    colsTextArea.value = '60';
    textArea.setAttributeNode(rowsTextArea);
    textArea.setAttributeNode(colsTextArea);
    sectionTextArea.append(textArea);

    let sectionKey = document.createElement('section');
    sectionKey.classList.add('wrapper__keyboard');

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    sectionKey.append(keyboard);

   
    
    let fragment = document.createDocumentFragment();
    
    for(let i=0; i<5; i++){
        let rowKey = document.createElement('div');
        rowKey.classList.add('keyboard__row');
        keyboard.append(rowKey);
    }

    console.log(fragment);

    keyboard.append(fragment);
    return article.append(sectionKey);
}




/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz8wNmE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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QUFFQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDOztBQUVBO0FBQ0EsbUNBQW1DLGFBQWE7QUFDaEQ7OztBQUdBO0FBQ0EscUNBQXFDLGVBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTs7QUFFaEQ7QUFDQSxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOWJBO0FBQUE7QUFBQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUNBLGNBQWMsbUJBQU8sQ0FBQyxtTUFBK0Y7O0FBRXJIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1KQUF3RTs7QUFFN0Y7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi53cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7IH1cXG5cXG4udGV4dEFyZWEge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG50ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzFlNmIwNjtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXFxuLmtleWJvYXJkIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICAua2V5Ym9hcmRfX3JvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNXB4IDAgMDsgfVxcbiAgLmtleWJvYXJkX19rZXkge1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNlOGYwMTY7XFxuICAgIGJhY2tncm91bmQ6ICMxZTZiMDY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlOyB9XFxuICAgIC5rZXlib2FyZF9fa2V5LS1hY3RpdmUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZDogI2U4ZjAxNjtcXG4gICAgICBjb2xvcjogIzAwMDsgfVxcblxcbi5rZXlfX3RhYiB7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBtYXgtd2lkdGg6IDgwcHg7IH1cXG5cXG4ua2V5X19zcGFjZSB7XFxuICBtaW4td2lkdGg6IDQ1MHB4O1xcbiAgbWF4LXdpZHRoOiA0NTBweDsgfVxcblxcbi5rZXlfX3NoaWZ0IHtcXG4gIG1pbi13aWR0aDogMTEwcHg7XFxuICBtYXgtd2lkdGg6IDExMHB4OyB9XFxuXFxuLmtleV9fYmFjayB7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBtYXgtd2lkdGg6IDgwcHg7IH1cXG5cXG4ua2V5X19jYXBzIHtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMHB4OyB9XFxuXFxuLmtleV9fZW50ZXIge1xcbiAgbWluLXdpZHRoOiA5MHB4O1xcbiAgbWF4LXdpZHRoOiA5MHB4OyB9XFxuXFxuLndyYXBwZXJfX2tleWJvYXJkIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm9mZiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRvd24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHthZGRUZW1wbGF0ZX0gZnJvbSAnLi9tb2R1bGUvdGVtcGxhdGUuanMnO1xyXG5pbXBvcnQge2FkZEtleX0gZnJvbSAnLi9tb2R1bGUva2V5LmpzJztcclxuaW1wb3J0IHtrZXlzfSBmcm9tICcuL21vZHVsZS9rZXlzLmpzJztcclxuXHJcbmFkZFRlbXBsYXRlKCk7XHJcbmNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Ym9hcmRfX3JvdycpO1xyXG5cclxucm93cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAga2V5c1tpbmRleF0uZm9yRWFjaChmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGxldCBrZXkgPSBhZGRLZXkoLi4uayk7XHJcbiAgICAgICAgaWYgKGAke2tbMF19YCA9PSAnU3BhY2UnKSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlfX3NwYWNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChgJHtrWzBdfWAgPT0gJ1NoaWZ0TGVmdCcgfHwgYCR7a1swXX1gID09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5X19zaGlmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYCR7a1swXX1gID09ICdUYWInKSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlfX3RhYicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYCR7a1swXX1gID09ICdCYWNrc3BhY2UnKSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlfX2JhY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGAke2tbMF19YCA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlfX2VudGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChgJHtrWzBdfWAgPT0gJ0NhcHNMb2NrJykge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5X19jYXBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW0uYXBwZW5kKGtleSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jb25zdCBrZXlib2FyZEtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Ym9hcmRfX2tleScpO1xyXG5jb25zdCBrZXlMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmcnKTtcclxuY29uc3Qga2V5VXBEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UnKTtcclxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcbiAgICBrZXlEb3duKGV2ZW50KTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnU2hpZnRMZWZ0JyB8fCBldmVudC5jb2RlID09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICAgIGtleVVwRG93bi5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKCFrZXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb3duJykpIHtcclxuICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZSgnZG93bicpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBsZXQga2V5Q29kZXMgPSBldmVudC5jb2RlO1xyXG4gICAgaWYgKGtleUNvZGVzICE9ICdUYWInICYmIGtleUNvZGVzICE9ICdTaGlmdExlZnQnICYmIGtleUNvZGVzICE9ICdTaGlmdFJpZ3RoJyAmJiBrZXlDb2RlcyAhPSAnQWx0UmlndGgnICYmIGtleUNvZGVzICE9ICdBbHRMZWZ0JyAmJiBrZXlDb2RlcyAhPSAnQ29udHJvbExlZnQnICYmIGtleUNvZGVzICE9ICdDb250cm9sUmlnaHQnICYmIGtleUNvZGVzICE9ICdNZXRhUmlnaHQnICYmIGtleUNvZGVzICE9ICdNZXRhUkxlZnQnICYmIGtleUNvZGVzICE9ICdDYXBzTG9jaycgJiYga2V5Q29kZXMgIT0gJ0NvbnRleHRNZW51JyAmJiBrZXlDb2RlcyAhPSAnRW50ZXInICYmIGtleUNvZGVzICE9ICdCYWNrc3BhY2UnKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2tleUNvZGVzfWApO1xyXG4gICAgICAgIGtleS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvZmYnKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZScpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrLmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlICs9IGsudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoa2V5Q29kZXMgPT0gJ1RhYicpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRleHRhcmVhLnZhbHVlICs9ICcgICAgJztcclxuICAgIH1cclxuICAgIGlmIChrZXlDb2RlcyA9PSAnRW50ZXInKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnXFxuJztcclxuICAgIH1cclxuICAgIGlmIChrZXlDb2RlcyA9PSAnU3BhY2UnKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnJztcclxuICAgIH1cclxuICAgIGlmIChrZXlDb2RlcyA9PSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSB0ZXh0YXJlYS52YWx1ZS5zcGxpdCgnJykuc2xpY2UoMCwgLTEpLmpvaW4oJycpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBrZXlVcChldmVudCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnQ2Fwc0xvY2snKSB7XHJcbiAgICAgICAga2V5VXBEb3duLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKCFrZXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb3duJykpIHtcclxuICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZSgnZG93bicpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnU2hpZnRMZWZ0JyAmJiBldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAga2V5TGFuZy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC50b2dnbGUoJ29mZicpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5jb2RlID09ICdTaGlmdExlZnQnIHx8IGV2ZW50LmNvZGUgPT0gJ1NoaWZ0UmlnaHQnKSB7XHJcbiAgICAgICAga2V5VXBEb3duLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LnRvZ2dsZSgnZG93bicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGtleURvd24oZXZlbnQpIHtcclxuICAgIGtleWJvYXJkS2V5cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2V2ZW50LmNvZGV9YCkpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5LS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBrZXlVcChldmVudCkge1xyXG4gICAga2V5Ym9hcmRLZXlzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcihgLiR7ZXZlbnQuY29kZX1gKSkge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2tleWJvYXJkX19rZXktLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkS2V5KGtleUNvZGUsIGtleUxhbmdPbmVVcCwga2V5TGFuZ09uZURvd24sIGtleUxhbmdUd29VcCwga2V5TGFuZ1R3b0Rvd24pe1xyXG5cclxuICAgIGxldCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5Jyk7XHJcblxyXG4gICAgbGV0IGtleUNvZGVPbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGtleUNvZGVPbi5jbGFzc0xpc3QuYWRkKGAke2tleUNvZGV9YCk7XHJcbiAgICBrZXlDb2RlT24uY2xhc3NMaXN0LmFkZCgnbGFuZycpO1xyXG4gICAgXHJcbiAgICBsZXQgYWRkS2V5TGFuZ09uZVVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYWRkS2V5TGFuZ09uZVVwLmlubmVyVGV4dCA9IGAke2tleUxhbmdPbmVVcH1gO1xyXG4gICAgYWRkS2V5TGFuZ09uZVVwLmNsYXNzTGlzdC5hZGQoJ2Nhc2UnKTtcclxuICAgIFxyXG5cclxuICAgIGxldCBhZGRLZXlMYW5nT25lRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGFkZEtleUxhbmdPbmVEb3duLmlubmVyVGV4dCA9IGAke2tleUxhbmdPbmVEb3dufWA7XHJcbiAgICBhZGRLZXlMYW5nT25lRG93bi5jbGFzc0xpc3QuYWRkKCdjYXNlJyk7XHJcbiAgICBhZGRLZXlMYW5nT25lRG93bi5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcbiAgICBrZXlDb2RlT24uYXBwZW5kKGFkZEtleUxhbmdPbmVVcCk7XHJcbiAgICBrZXlDb2RlT24uYXBwZW5kKGFkZEtleUxhbmdPbmVEb3duKTtcclxuXHJcbiAgICBsZXQga2V5Q29kZU9mZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGtleUNvZGVPZmYuY2xhc3NMaXN0LmFkZChgJHtrZXlDb2RlfWApO1xyXG4gICAga2V5Q29kZU9mZi5jbGFzc0xpc3QuYWRkKCdsYW5nJyk7XHJcbiAgICBrZXlDb2RlT2ZmLmNsYXNzTGlzdC5hZGQoJ29mZicpO1xyXG5cclxuICAgIGxldCBhZGRLZXlMYW5nVHdvVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBhZGRLZXlMYW5nVHdvVXAuY2xhc3NMaXN0LmFkZCgnY2FzZScpO1xyXG4gICAgYWRkS2V5TGFuZ1R3b1VwLmlubmVyVGV4dCA9IGAke2tleUxhbmdUd29VcH1gO1xyXG5cclxuICAgIGxldCBhZGRLZXlMYW5nVHdvRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGFkZEtleUxhbmdUd29Eb3duLmlubmVyVGV4dCA9IGAke2tleUxhbmdUd29Eb3dufWA7XHJcbiAgICBhZGRLZXlMYW5nVHdvRG93bi5jbGFzc0xpc3QuYWRkKCdjYXNlJyk7XHJcbiAgICBhZGRLZXlMYW5nVHdvRG93bi5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcblxyXG4gICAga2V5Q29kZU9mZi5hcHBlbmQoYWRkS2V5TGFuZ1R3b1VwKTtcclxuICAgIGtleUNvZGVPZmYuYXBwZW5kKGFkZEtleUxhbmdUd29Eb3duKTtcclxuXHJcbiAgICBrZXkuYXBwZW5kKGtleUNvZGVPbik7XHJcbiAgICBrZXkuYXBwZW5kKGtleUNvZGVPZmYpO1xyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBrZXlzID0gW1xyXG4gICAgW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0JhY2txdW90ZScsXHJcbiAgICAgICAgICAgICfRkScsXHJcbiAgICAgICAgICAgICfQgScsXHJcbiAgICAgICAgICAgICdgJyxcclxuICAgICAgICAgICAgJ34nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDEnLFxyXG4gICAgICAgICAgICAnMScsXHJcbiAgICAgICAgICAgICchJyxcclxuICAgICAgICAgICAgJzEnLFxyXG4gICAgICAgICAgICAnISdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0MicsXHJcbiAgICAgICAgICAgICcyJyxcclxuICAgICAgICAgICAgJ1xcXCInLFxyXG4gICAgICAgICAgICAnMicsXHJcbiAgICAgICAgICAgICdAJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQzJyxcclxuICAgICAgICAgICAgJzMnLFxyXG4gICAgICAgICAgICAn4oSWJyxcclxuICAgICAgICAgICAgJzMnLFxyXG4gICAgICAgICAgICAnIydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0NCcsXHJcbiAgICAgICAgICAgICc0JyxcclxuICAgICAgICAgICAgJzsnLFxyXG4gICAgICAgICAgICAnNCcsXHJcbiAgICAgICAgICAgICckJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQ1JyxcclxuICAgICAgICAgICAgJzUnLFxyXG4gICAgICAgICAgICAnJScsXHJcbiAgICAgICAgICAgICc1JyxcclxuICAgICAgICAgICAgJyUnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDYnLFxyXG4gICAgICAgICAgICAnNicsXHJcbiAgICAgICAgICAgICc6JyxcclxuICAgICAgICAgICAgJzYnLFxyXG4gICAgICAgICAgICAnXidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0NycsXHJcbiAgICAgICAgICAgICc3JyxcclxuICAgICAgICAgICAgJz8nLFxyXG4gICAgICAgICAgICAnNycsXHJcbiAgICAgICAgICAgICcmJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQ4JyxcclxuICAgICAgICAgICAgJzgnLFxyXG4gICAgICAgICAgICAnKicsXHJcbiAgICAgICAgICAgICc4JyxcclxuICAgICAgICAgICAgJyonXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDknLFxyXG4gICAgICAgICAgICAnOScsXHJcbiAgICAgICAgICAgICcoJyxcclxuICAgICAgICAgICAgJzknLFxyXG4gICAgICAgICAgICAnKCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0MCcsXHJcbiAgICAgICAgICAgICcwJyxcclxuICAgICAgICAgICAgJyknLFxyXG4gICAgICAgICAgICAnMCcsXHJcbiAgICAgICAgICAgICcpJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTWludXMnLFxyXG4gICAgICAgICAgICAnLScsXHJcbiAgICAgICAgICAgICdfJyxcclxuICAgICAgICAgICAgJy0nLFxyXG4gICAgICAgICAgICAnXydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0VxdWFsJyxcclxuICAgICAgICAgICAgJz0nLFxyXG4gICAgICAgICAgICAnKycsXHJcbiAgICAgICAgICAgICc9JyxcclxuICAgICAgICAgICAgJysnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdCYWNrc3BhY2UnLFxyXG4gICAgICAgICAgICAnQmFja3NwYWNlJyxcclxuICAgICAgICAgICAgJ0JhY2tzcGFjZScsXHJcbiAgICAgICAgICAgICdCYWNrc3BhY2UnLFxyXG4gICAgICAgICAgICAnQmFja3NwYWNlJ1xyXG4gICAgICAgIF1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVGFiJyxcclxuICAgICAgICAgICAgJ1RhYicsXHJcbiAgICAgICAgICAgICdUYWInLFxyXG4gICAgICAgICAgICAnVGFiJyxcclxuICAgICAgICAgICAgJ1RhYidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVEnLFxyXG4gICAgICAgICAgICAn0LknLFxyXG4gICAgICAgICAgICAn0JknLFxyXG4gICAgICAgICAgICAncScsXHJcbiAgICAgICAgICAgICdRJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5VycsXHJcbiAgICAgICAgICAgICfRhicsXHJcbiAgICAgICAgICAgICfQpicsXHJcbiAgICAgICAgICAgICd3JyxcclxuICAgICAgICAgICAgJ1cnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlFJyxcclxuICAgICAgICAgICAgJ9GDJyxcclxuICAgICAgICAgICAgJ9CjJyxcclxuICAgICAgICAgICAgJ2UnLFxyXG4gICAgICAgICAgICAnRSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUUnLFxyXG4gICAgICAgICAgICAn0YMnLFxyXG4gICAgICAgICAgICAn0KMnLFxyXG4gICAgICAgICAgICAnZScsXHJcbiAgICAgICAgICAgICdFJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5UicsXHJcbiAgICAgICAgICAgICfQuicsXHJcbiAgICAgICAgICAgICfQmicsXHJcbiAgICAgICAgICAgICdyJyxcclxuICAgICAgICAgICAgJ1InXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlUJyxcclxuICAgICAgICAgICAgJ9C1JyxcclxuICAgICAgICAgICAgJ9CVJyxcclxuICAgICAgICAgICAgJ3QnLFxyXG4gICAgICAgICAgICAnVCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVknLFxyXG4gICAgICAgICAgICAn0L0nLFxyXG4gICAgICAgICAgICAn0J0nLFxyXG4gICAgICAgICAgICAneScsXHJcbiAgICAgICAgICAgICdZJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5VScsXHJcbiAgICAgICAgICAgICfQsycsXHJcbiAgICAgICAgICAgICfQkycsXHJcbiAgICAgICAgICAgICd1JyxcclxuICAgICAgICAgICAgJ1UnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlJJyxcclxuICAgICAgICAgICAgJ9GIJyxcclxuICAgICAgICAgICAgJ9CoJyxcclxuICAgICAgICAgICAgJ2knLFxyXG4gICAgICAgICAgICAnSSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleU8nLFxyXG4gICAgICAgICAgICAn0YknLFxyXG4gICAgICAgICAgICAn0KknLFxyXG4gICAgICAgICAgICAnbycsXHJcbiAgICAgICAgICAgICdPJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5UCcsXHJcbiAgICAgICAgICAgICfQtycsXHJcbiAgICAgICAgICAgICfQlycsXHJcbiAgICAgICAgICAgICdwJyxcclxuICAgICAgICAgICAgJ1AnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdCcmFja2V0TGVmdCcsXHJcbiAgICAgICAgICAgICfRhScsXHJcbiAgICAgICAgICAgICfQpScsXHJcbiAgICAgICAgICAgICdbJyxcclxuICAgICAgICAgICAgJ3snXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdCcmFja2V0UmlnaHQnLFxyXG4gICAgICAgICAgICAn0YonLFxyXG4gICAgICAgICAgICAn0KonLFxyXG4gICAgICAgICAgICAnXScsXHJcbiAgICAgICAgICAgICd9J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQmFja3NsYXNoJyxcclxuICAgICAgICAgICAgJ1xcXFwnLFxyXG4gICAgICAgICAgICAnLycsXHJcbiAgICAgICAgICAgICdcXFxcJyxcclxuICAgICAgICAgICAgJ3wnXHJcbiAgICAgICAgXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ2Fwc0xvY2snLFxyXG4gICAgICAgICAgICAnQ2Fwc0xvY2snLFxyXG4gICAgICAgICAgICAnQ2Fwc0xvY2snLFxyXG4gICAgICAgICAgICAnQ2Fwc0xvY2snLFxyXG4gICAgICAgICAgICAnQ2Fwc0xvY2snXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlBJyxcclxuICAgICAgICAgICAgJ9GEJyxcclxuICAgICAgICAgICAgJ9CkJyxcclxuICAgICAgICAgICAgJ2EnLFxyXG4gICAgICAgICAgICAnQSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVMnLFxyXG4gICAgICAgICAgICAn0YsnLFxyXG4gICAgICAgICAgICAn0KsnLFxyXG4gICAgICAgICAgICAncycsXHJcbiAgICAgICAgICAgICdTJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5RCcsXHJcbiAgICAgICAgICAgICfQsicsXHJcbiAgICAgICAgICAgICfQkicsXHJcbiAgICAgICAgICAgICdkJyxcclxuICAgICAgICAgICAgJ0QnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlGJyxcclxuICAgICAgICAgICAgJ9CwJyxcclxuICAgICAgICAgICAgJ9CQJyxcclxuICAgICAgICAgICAgJ2YnLFxyXG4gICAgICAgICAgICAnRidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUcnLFxyXG4gICAgICAgICAgICAn0L8nLFxyXG4gICAgICAgICAgICAn0J8nLFxyXG4gICAgICAgICAgICAnZycsXHJcbiAgICAgICAgICAgICdHJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5SCcsXHJcbiAgICAgICAgICAgICfRgCcsXHJcbiAgICAgICAgICAgICfQoCcsXHJcbiAgICAgICAgICAgICdoJyxcclxuICAgICAgICAgICAgJ0gnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlKJyxcclxuICAgICAgICAgICAgJ9C+JyxcclxuICAgICAgICAgICAgJ9CeJyxcclxuICAgICAgICAgICAgJ2onLFxyXG4gICAgICAgICAgICAnSidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUsnLFxyXG4gICAgICAgICAgICAn0LsnLFxyXG4gICAgICAgICAgICAn0JsnLFxyXG4gICAgICAgICAgICAnaycsXHJcbiAgICAgICAgICAgICdLJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5TCcsXHJcbiAgICAgICAgICAgICfQtCcsXHJcbiAgICAgICAgICAgICfQlCcsXHJcbiAgICAgICAgICAgICdsJyxcclxuICAgICAgICAgICAgJ0wnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdTZW1pY29sb24nLFxyXG4gICAgICAgICAgICAn0LYnLFxyXG4gICAgICAgICAgICAn0JYnLFxyXG4gICAgICAgICAgICAnOycsXHJcbiAgICAgICAgICAgICc6J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnUXVvdGUnLFxyXG4gICAgICAgICAgICAn0Y0nLFxyXG4gICAgICAgICAgICAn0K0nLFxyXG4gICAgICAgICAgICAnXFwnJyxcclxuICAgICAgICAgICAgJ1wiJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRW50ZXInLFxyXG4gICAgICAgICAgICAnRW50ZXInLFxyXG4gICAgICAgICAgICAnRW50ZXInLFxyXG4gICAgICAgICAgICAnRW50ZXInLFxyXG4gICAgICAgICAgICAnRW50ZXInXHJcbiAgICAgICAgXVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdTaGlmdExlZnQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlaJyxcclxuICAgICAgICAgICAgJ9GPJyxcclxuICAgICAgICAgICAgJ9CvJyxcclxuICAgICAgICAgICAgJ3onLFxyXG4gICAgICAgICAgICAnWidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVgnLFxyXG4gICAgICAgICAgICAn0YcnLFxyXG4gICAgICAgICAgICAn0KcnLFxyXG4gICAgICAgICAgICAneCcsXHJcbiAgICAgICAgICAgICdYJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5QycsXHJcbiAgICAgICAgICAgICfRgScsXHJcbiAgICAgICAgICAgICfQoScsXHJcbiAgICAgICAgICAgICdjJyxcclxuICAgICAgICAgICAgJ0MnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlWJyxcclxuICAgICAgICAgICAgJ9C8JyxcclxuICAgICAgICAgICAgJ9CcJyxcclxuICAgICAgICAgICAgJ3YnLFxyXG4gICAgICAgICAgICAnVidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUInLFxyXG4gICAgICAgICAgICAn0LgnLFxyXG4gICAgICAgICAgICAn0JgnLFxyXG4gICAgICAgICAgICAnYicsXHJcbiAgICAgICAgICAgICdCJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5TicsXHJcbiAgICAgICAgICAgICfRgicsXHJcbiAgICAgICAgICAgICfQoicsXHJcbiAgICAgICAgICAgICduJyxcclxuICAgICAgICAgICAgJ04nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlNJyxcclxuICAgICAgICAgICAgJ9GMJyxcclxuICAgICAgICAgICAgJ9CsJyxcclxuICAgICAgICAgICAgJ20nLFxyXG4gICAgICAgICAgICAnTSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1BlcmlvZCcsXHJcbiAgICAgICAgICAgICfQsScsXHJcbiAgICAgICAgICAgICfQkScsXHJcbiAgICAgICAgICAgICcsJyxcclxuICAgICAgICAgICAgJzwnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdTbGFzaCcsXHJcbiAgICAgICAgICAgICfRjicsXHJcbiAgICAgICAgICAgICfQricsXHJcbiAgICAgICAgICAgICcuJyxcclxuICAgICAgICAgICAgJz4nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdJbnRsUm8nLFxyXG4gICAgICAgICAgICAnLicsXHJcbiAgICAgICAgICAgICcsJyxcclxuICAgICAgICAgICAgJy8nLFxyXG4gICAgICAgICAgICAnPydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1NoaWZ0UmlnaHQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnLFxyXG4gICAgICAgICAgICAnU2hpZnQnXHJcbiAgICAgICAgXVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDb250cm9sTGVmdCcsXHJcbiAgICAgICAgICAgICdDdHJsJyxcclxuICAgICAgICAgICAgJ0N0cmwnLFxyXG4gICAgICAgICAgICAnQ3RybCcsXHJcbiAgICAgICAgICAgICdDdHJsJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTWV0YUxlZnQnLFxyXG4gICAgICAgICAgICAnV2luJyxcclxuICAgICAgICAgICAgJ1dpbicsXHJcbiAgICAgICAgICAgICdXaW4nLFxyXG4gICAgICAgICAgICAnV2luJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQWx0TGVmdCcsXHJcbiAgICAgICAgICAgICdBbHQnLFxyXG4gICAgICAgICAgICAnQWx0JyxcclxuICAgICAgICAgICAgJ0FsdCcsXHJcbiAgICAgICAgICAgICdBbHQnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdTcGFjZScsXHJcbiAgICAgICAgICAgICcgJyxcclxuICAgICAgICAgICAgJyAnLFxyXG4gICAgICAgICAgICAnICcsXHJcbiAgICAgICAgICAgICcgJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQWx0UmlnaHQnLFxyXG4gICAgICAgICAgICAnQWx0JyxcclxuICAgICAgICAgICAgJ0FsdCcsXHJcbiAgICAgICAgICAgICdBbHQnLFxyXG4gICAgICAgICAgICAnQWx0J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTWV0YVJpZ2h0JyxcclxuICAgICAgICAgICAgJ1dpbicsXHJcbiAgICAgICAgICAgICdXaW4nLFxyXG4gICAgICAgICAgICAnV2luJyxcclxuICAgICAgICAgICAgJ1dpbidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NvbnRleHRNZW51JyxcclxuICAgICAgICAgICAgJ0NvbnQnLFxyXG4gICAgICAgICAgICAnQ29udCcsXHJcbiAgICAgICAgICAgICdDb250JyxcclxuICAgICAgICAgICAgJ0NvbnQnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDb250cm9sUmlnaHQnLFxyXG4gICAgICAgICAgICAnQ3RybCcsXHJcbiAgICAgICAgICAgICdDdHJsJyxcclxuICAgICAgICAgICAgJ0N0cmwnLFxyXG4gICAgICAgICAgICAnQ3RybCdcclxuICAgICAgICBdLFxyXG5cclxuICAgIF1cclxuXVxyXG5cclxuXHJcbiIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGVtcGxhdGUoKSB7XHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xyXG4gICAgYm9keS5hcHBlbmQoYXJ0aWNsZSk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIHNlY3Rpb25UZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0QXJlYScpO1xyXG4gICAgYXJ0aWNsZS5hcHBlbmQoc2VjdGlvblRleHRBcmVhKTtcclxuXHJcbiAgICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgbGV0IHJvd3NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSgncm93cycpO1xyXG4gICAgbGV0IGNvbHNUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSgnY29scycpO1xyXG4gICAgcm93c1RleHRBcmVhLnZhbHVlID0gJzYnO1xyXG4gICAgY29sc1RleHRBcmVhLnZhbHVlID0gJzYwJztcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZU5vZGUocm93c1RleHRBcmVhKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZU5vZGUoY29sc1RleHRBcmVhKTtcclxuICAgIHNlY3Rpb25UZXh0QXJlYS5hcHBlbmQodGV4dEFyZWEpO1xyXG5cclxuICAgIGxldCBzZWN0aW9uS2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc2VjdGlvbktleS5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyX19rZXlib2FyZCcpO1xyXG5cclxuICAgIGxldCBrZXlib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAga2V5Ym9hcmQuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQnKTtcclxuXHJcbiAgICBzZWN0aW9uS2V5LmFwcGVuZChrZXlib2FyZCk7XHJcblxyXG4gICBcclxuICAgIFxyXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGk9MDsgaTw1OyBpKyspe1xyXG4gICAgICAgIGxldCByb3dLZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByb3dLZXkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX3JvdycpO1xyXG4gICAgICAgIGtleWJvYXJkLmFwcGVuZChyb3dLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZyYWdtZW50KTtcclxuXHJcbiAgICBrZXlib2FyZC5hcHBlbmQoZnJhZ21lbnQpO1xyXG4gICAgcmV0dXJuIGFydGljbGUuYXBwZW5kKHNlY3Rpb25LZXkpO1xyXG59XHJcblxyXG5cclxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
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
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n.wrapper {\n  max-width: 1024px;\n  width: 100%;\n  height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #eeeeee; }\n\n.textArea {\n  width: 100%; }\n\ntextarea {\n  display: block;\n  width: 800px;\n  height: 300px;\n  margin: 0 auto 10px;\n  padding: 10px;\n  font-size: 18px;\n  color: #444;\n  border: 5px solid #1e6b06;\n  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4); }\n\n.keyboard {\n  width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: #000;\n  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4); }\n  .keyboard__row {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 5px 0 0; }\n  .keyboard__key {\n    min-width: 40px;\n    max-width: 40px;\n    width: 100%;\n    height: 40px;\n    font-weight: 500;\n    line-height: 40px;\n    text-align: center;\n    color: #e8f016;\n    background: #1e6b06;\n    border-radius: 3px;\n    cursor: pointer;\n    user-select: none;\n    transition: all .5s ease; }\n    .keyboard__key--active {\n      border-radius: 10px;\n      background: #e8f016;\n      color: #000; }\n    .keyboard__key:hover {\n      cursor: pointer; }\n\n.key__tab {\n  min-width: 80px;\n  max-width: 80px; }\n\n.key__space {\n  min-width: 450px;\n  max-width: 450px; }\n\n.key__shift {\n  min-width: 110px;\n  max-width: 110px; }\n\n.key__back {\n  min-width: 80px;\n  max-width: 80px; }\n\n.key__caps {\n  min-width: 100px;\n  max-width: 100px; }\n\n.key__enter {\n  min-width: 90px;\n  max-width: 90px; }\n\n.wrapper__keyboard {\n  width: 100%; }\n\n.off {\n  display: none; }\n\n.down {\n  display: none; }\n", ""]);


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
/* harmony import */ var _module_localstor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/localstor.js */ "./src/module/localstor.js");






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

Object(_module_localstor_js__WEBPACK_IMPORTED_MODULE_4__["locStore"])();


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
    if (keyCodes != 'Tab' && keyCodes != 'ShiftLeft' && keyCodes != 'ShiftRight' && keyCodes != 'AltRight' && keyCodes != 'AltLeft' && keyCodes != 'ControlLeft' && keyCodes != 'ControlRight' && keyCodes != 'MetaRight' && keyCodes != 'MetaLeft' && keyCodes != 'CapsLock' && keyCodes != 'ContextMenu' && keyCodes != 'Enter' && keyCodes != 'Backspace') {
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
    if (event.code == 'ShiftLeft' && event.ctrlKey) {
        keyLang.forEach(function (key, index) {
            key.classList.toggle('off');
            if(key.classList.contains('off')){
                localStorage.setItem( `${index}`, 'off');
            } else {
                localStorage.removeItem( `${index}`);
            }
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

keyboardKeys.forEach(item => {
    item.addEventListener('mousedown', () => {
        event.preventDefault();
        item.classList.add('keyboard__key--active');
        item.querySelectorAll('.lang').forEach(lang => {
            if (!lang.classList.contains('off') && !lang.classList.contains('Tab') && !lang.classList.contains('Enter') && !lang.classList.contains('ShiftLeft') && !lang.classList.contains('ShiftRight') && !lang.classList.contains('AltRight') && !lang.classList.contains('AltLeft') && !lang.classList.contains('ControlLeft') && !lang.classList.contains('ControlRight') && !lang.classList.contains('MetaRight') && !lang.classList.contains('MetaLeft') && !lang.classList.contains('ContextMenu') && !lang.classList.contains('Backspace') && !lang.classList.contains('CapsLock')) {
                lang.querySelectorAll('.case').forEach(k => {
                    if (!k.classList.contains('down')) {
                        textarea.value += k.textContent;
                    }
                })
            }
            if (lang.classList.contains('Tab') && !lang.classList.contains('off')) {
                textarea.value += '    ';
            }
            if (lang.classList.contains('Enter') && !lang.classList.contains('off')) {
                textarea.value += '\n';
            }
            if (lang.classList.contains('Space') && !lang.classList.contains('off')) {
                textarea.value += '';
            }
            if (lang.classList.contains('Backspace') && !lang.classList.contains('off')) {
                textarea.value = textarea.value.split('').slice(0, -1).join('');
            }
            if (lang.classList.contains('CapsLock') && !lang.classList.contains('off')) {
                keyUpDown.forEach(function (key) {
                    if (!key.classList.contains('down')) {
                        key.classList.add('down');
                    } else {
                        key.classList.remove('down');
                    };
                })
            }
        })

    })
    item.addEventListener('mouseup', () => {
        item.classList.remove('keyboard__key--active');
    })
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

/***/ "./src/module/localstor.js":
/*!*********************************!*\
  !*** ./src/module/localstor.js ***!
  \*********************************/
/*! exports provided: locStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locStore", function() { return locStore; });
let locStore = () => {
    if(localStorage.length>0){
        document.querySelectorAll('.lang').forEach( lang => {
            if(lang.classList.contains('off')){
                lang.classList.remove('off');
            }
        })
        
        document.querySelectorAll('.lang').forEach( function(lang, index){
            if(localStorage[`${index}`]){
                lang.classList.add('off');
            }
        })
    }
}

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
    
    for(let i=0; i<5; i++){
        let rowKey = document.createElement('div');
        rowKey.classList.add('keyboard__row');
        keyboard.append(rowKey);
    }

    let titleText = document.createElement('h2');
    titleText.textContent = "change language 'Ctrl (left) + Shift (left)'";
    
    article.append(titleText);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9sb2NhbHN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz8wNmE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2YkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSwrQkFBK0IsTUFBTTtBQUNyQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDQSxjQUFjLG1CQUFPLENBQUMsbU1BQStGOztBQUVySDtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlOyB9XFxuXFxuLnRleHRBcmVhIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxudGV4dGFyZWEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMxZTZiMDY7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxcblxcbi5rZXlib2FyZCB7XFxuICB3aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxcbiAgLmtleWJvYXJkX19yb3cge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDVweCAwIDA7IH1cXG4gIC5rZXlib2FyZF9fa2V5IHtcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZThmMDE2O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWU2YjA2O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTsgfVxcbiAgICAua2V5Ym9hcmRfX2tleS0tYWN0aXZlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNlOGYwMTY7XFxuICAgICAgY29sb3I6ICMwMDA7IH1cXG4gICAgLmtleWJvYXJkX19rZXk6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5rZXlfX3RhYiB7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBtYXgtd2lkdGg6IDgwcHg7IH1cXG5cXG4ua2V5X19zcGFjZSB7XFxuICBtaW4td2lkdGg6IDQ1MHB4O1xcbiAgbWF4LXdpZHRoOiA0NTBweDsgfVxcblxcbi5rZXlfX3NoaWZ0IHtcXG4gIG1pbi13aWR0aDogMTEwcHg7XFxuICBtYXgtd2lkdGg6IDExMHB4OyB9XFxuXFxuLmtleV9fYmFjayB7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBtYXgtd2lkdGg6IDgwcHg7IH1cXG5cXG4ua2V5X19jYXBzIHtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMHB4OyB9XFxuXFxuLmtleV9fZW50ZXIge1xcbiAgbWluLXdpZHRoOiA5MHB4O1xcbiAgbWF4LXdpZHRoOiA5MHB4OyB9XFxuXFxuLndyYXBwZXJfX2tleWJvYXJkIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm9mZiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRvd24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHthZGRUZW1wbGF0ZX0gZnJvbSAnLi9tb2R1bGUvdGVtcGxhdGUuanMnO1xyXG5pbXBvcnQge2FkZEtleX0gZnJvbSAnLi9tb2R1bGUva2V5LmpzJztcclxuaW1wb3J0IHtrZXlzfSBmcm9tICcuL21vZHVsZS9rZXlzLmpzJztcclxuaW1wb3J0IHtsb2NTdG9yZX0gZnJvbSAnLi9tb2R1bGUvbG9jYWxzdG9yLmpzJztcclxuXHJcbmFkZFRlbXBsYXRlKCk7XHJcblxyXG5jb25zdCByb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleWJvYXJkX19yb3cnKTtcclxuXHJcbnJvd3MuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgIGtleXNbaW5kZXhdLmZvckVhY2goZnVuY3Rpb24gKGspIHtcclxuICAgICAgICBsZXQga2V5ID0gYWRkS2V5KC4uLmspO1xyXG4gICAgICAgIGlmIChgJHtrWzBdfWAgPT0gJ1NwYWNlJykge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5X19zcGFjZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYCR7a1swXX1gID09ICdTaGlmdExlZnQnIHx8IGAke2tbMF19YCA9PSAnU2hpZnRSaWdodCcpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleV9fc2hpZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGAke2tbMF19YCA9PSAnVGFiJykge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5X190YWInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGAke2tbMF19YCA9PSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5X19iYWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChgJHtrWzBdfWAgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5X19lbnRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYCR7a1swXX1gID09ICdDYXBzTG9jaycpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleV9fY2FwcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtLmFwcGVuZChrZXkpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxubG9jU3RvcmUoKTtcclxuXHJcblxyXG5jb25zdCBrZXlib2FyZEtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Ym9hcmRfX2tleScpO1xyXG5jb25zdCBrZXlMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmcnKTtcclxuY29uc3Qga2V5VXBEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UnKTtcclxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcbiAgICBrZXlEb3duKGV2ZW50KTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ1NoaWZ0TGVmdCcgfHwgZXZlbnQuY29kZSA9PSAnU2hpZnRSaWdodCcpIHtcclxuICAgICAgICBrZXlVcERvd24uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmICgha2V5LmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgnZG93bicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rvd24nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgIGxldCBrZXlDb2RlcyA9IGV2ZW50LmNvZGU7XHJcbiAgICBpZiAoa2V5Q29kZXMgIT0gJ1RhYicgJiYga2V5Q29kZXMgIT0gJ1NoaWZ0TGVmdCcgJiYga2V5Q29kZXMgIT0gJ1NoaWZ0UmlnaHQnICYmIGtleUNvZGVzICE9ICdBbHRSaWdodCcgJiYga2V5Q29kZXMgIT0gJ0FsdExlZnQnICYmIGtleUNvZGVzICE9ICdDb250cm9sTGVmdCcgJiYga2V5Q29kZXMgIT0gJ0NvbnRyb2xSaWdodCcgJiYga2V5Q29kZXMgIT0gJ01ldGFSaWdodCcgJiYga2V5Q29kZXMgIT0gJ01ldGFMZWZ0JyAmJiBrZXlDb2RlcyAhPSAnQ2Fwc0xvY2snICYmIGtleUNvZGVzICE9ICdDb250ZXh0TWVudScgJiYga2V5Q29kZXMgIT0gJ0VudGVyJyAmJiBrZXlDb2RlcyAhPSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgIGxldCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtrZXlDb2Rlc31gKTtcclxuICAgICAgICBrZXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UnKS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghay5jbGFzc0xpc3QuY29udGFpbnMoJ2Rvd24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSBrLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGtleUNvZGVzID09ICdUYWInKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnICAgICc7XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5Q29kZXMgPT0gJ0VudGVyJykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgKz0gJ1xcbic7XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5Q29kZXMgPT0gJ1NwYWNlJykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgKz0gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5Q29kZXMgPT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoJycpLnNsaWNlKDAsIC0xKS5qb2luKCcnKTtcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgIGtleVVwKGV2ZW50KTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnQ2Fwc0xvY2snKSB7XHJcbiAgICAgICAga2V5VXBEb3duLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoIWtleS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rvd24nKSkge1xyXG4gICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnU2hpZnRMZWZ0JyAmJiBldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAga2V5TGFuZy5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QudG9nZ2xlKCdvZmYnKTtcclxuICAgICAgICAgICAgaWYoa2V5LmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGAke2luZGV4fWAsICdvZmYnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBgJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnU2hpZnRMZWZ0JyB8fCBldmVudC5jb2RlID09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICAgIGtleVVwRG93bi5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC50b2dnbGUoJ2Rvd24nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSlcclxuXHJcbmtleWJvYXJkS2V5cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19rZXktLWFjdGl2ZScpO1xyXG4gICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmxhbmcnKS5mb3JFYWNoKGxhbmcgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvZmYnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ1RhYicpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnRW50ZXInKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ1NoaWZ0TGVmdCcpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnU2hpZnRSaWdodCcpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnQWx0UmlnaHQnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0FsdExlZnQnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0NvbnRyb2xMZWZ0JykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdDb250cm9sUmlnaHQnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ01ldGFSaWdodCcpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnTWV0YUxlZnQnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0NvbnRleHRNZW51JykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdCYWNrc3BhY2UnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0NhcHNMb2NrJykpIHtcclxuICAgICAgICAgICAgICAgIGxhbmcucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UnKS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghay5jbGFzc0xpc3QuY29udGFpbnMoJ2Rvd24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSBrLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYWInKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnICAgICc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdFbnRlcicpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHtcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlICs9ICdcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsYW5nLmNsYXNzTGlzdC5jb250YWlucygnU3BhY2UnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0JhY2tzcGFjZScpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpIHtcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoJycpLnNsaWNlKDAsIC0xKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0NhcHNMb2NrJykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvZmYnKSkge1xyXG4gICAgICAgICAgICAgICAga2V5VXBEb3duLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5LmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2tleWJvYXJkX19rZXktLWFjdGl2ZScpO1xyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBrZXlEb3duKGV2ZW50KSB7XHJcbiAgICBrZXlib2FyZEtleXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5xdWVyeVNlbGVjdG9yKGAuJHtldmVudC5jb2RlfWApKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleS0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24ga2V5VXAoZXZlbnQpIHtcclxuICAgIGtleWJvYXJkS2V5cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2V2ZW50LmNvZGV9YCkpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZF9fa2V5LS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZEtleShrZXlDb2RlLCBrZXlMYW5nT25lVXAsIGtleUxhbmdPbmVEb3duLCBrZXlMYW5nVHdvVXAsIGtleUxhbmdUd29Eb3duKXtcclxuXHJcbiAgICBsZXQga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleScpO1xyXG5cclxuICAgIGxldCBrZXlDb2RlT24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBrZXlDb2RlT24uY2xhc3NMaXN0LmFkZChgJHtrZXlDb2RlfWApO1xyXG4gICAga2V5Q29kZU9uLmNsYXNzTGlzdC5hZGQoJ2xhbmcnKTtcclxuICAgIFxyXG4gICAgbGV0IGFkZEtleUxhbmdPbmVVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGFkZEtleUxhbmdPbmVVcC5pbm5lclRleHQgPSBgJHtrZXlMYW5nT25lVXB9YDtcclxuICAgIGFkZEtleUxhbmdPbmVVcC5jbGFzc0xpc3QuYWRkKCdjYXNlJyk7XHJcbiAgICBcclxuXHJcbiAgICBsZXQgYWRkS2V5TGFuZ09uZURvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBhZGRLZXlMYW5nT25lRG93bi5pbm5lclRleHQgPSBgJHtrZXlMYW5nT25lRG93bn1gO1xyXG4gICAgYWRkS2V5TGFuZ09uZURvd24uY2xhc3NMaXN0LmFkZCgnY2FzZScpO1xyXG4gICAgYWRkS2V5TGFuZ09uZURvd24uY2xhc3NMaXN0LmFkZCgnZG93bicpO1xyXG4gICAga2V5Q29kZU9uLmFwcGVuZChhZGRLZXlMYW5nT25lVXApO1xyXG4gICAga2V5Q29kZU9uLmFwcGVuZChhZGRLZXlMYW5nT25lRG93bik7XHJcblxyXG4gICAgbGV0IGtleUNvZGVPZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBrZXlDb2RlT2ZmLmNsYXNzTGlzdC5hZGQoYCR7a2V5Q29kZX1gKTtcclxuICAgIGtleUNvZGVPZmYuY2xhc3NMaXN0LmFkZCgnbGFuZycpO1xyXG4gICAga2V5Q29kZU9mZi5jbGFzc0xpc3QuYWRkKCdvZmYnKTtcclxuXHJcbiAgICBsZXQgYWRkS2V5TGFuZ1R3b1VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYWRkS2V5TGFuZ1R3b1VwLmNsYXNzTGlzdC5hZGQoJ2Nhc2UnKTtcclxuICAgIGFkZEtleUxhbmdUd29VcC5pbm5lclRleHQgPSBgJHtrZXlMYW5nVHdvVXB9YDtcclxuXHJcbiAgICBsZXQgYWRkS2V5TGFuZ1R3b0Rvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBhZGRLZXlMYW5nVHdvRG93bi5pbm5lclRleHQgPSBgJHtrZXlMYW5nVHdvRG93bn1gO1xyXG4gICAgYWRkS2V5TGFuZ1R3b0Rvd24uY2xhc3NMaXN0LmFkZCgnY2FzZScpO1xyXG4gICAgYWRkS2V5TGFuZ1R3b0Rvd24uY2xhc3NMaXN0LmFkZCgnZG93bicpO1xyXG5cclxuICAgIGtleUNvZGVPZmYuYXBwZW5kKGFkZEtleUxhbmdUd29VcCk7XHJcbiAgICBrZXlDb2RlT2ZmLmFwcGVuZChhZGRLZXlMYW5nVHdvRG93bik7XHJcblxyXG4gICAga2V5LmFwcGVuZChrZXlDb2RlT24pO1xyXG4gICAga2V5LmFwcGVuZChrZXlDb2RlT2ZmKTtcclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59XHJcblxyXG4iLCJleHBvcnQgY29uc3Qga2V5cyA9IFtcclxuICAgIFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdCYWNrcXVvdGUnLFxyXG4gICAgICAgICAgICAn0ZEnLFxyXG4gICAgICAgICAgICAn0IEnLFxyXG4gICAgICAgICAgICAnYCcsXHJcbiAgICAgICAgICAgICd+J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQxJyxcclxuICAgICAgICAgICAgJzEnLFxyXG4gICAgICAgICAgICAnIScsXHJcbiAgICAgICAgICAgICcxJyxcclxuICAgICAgICAgICAgJyEnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDInLFxyXG4gICAgICAgICAgICAnMicsXHJcbiAgICAgICAgICAgICdcXFwiJyxcclxuICAgICAgICAgICAgJzInLFxyXG4gICAgICAgICAgICAnQCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0MycsXHJcbiAgICAgICAgICAgICczJyxcclxuICAgICAgICAgICAgJ+KElicsXHJcbiAgICAgICAgICAgICczJyxcclxuICAgICAgICAgICAgJyMnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDQnLFxyXG4gICAgICAgICAgICAnNCcsXHJcbiAgICAgICAgICAgICc7JyxcclxuICAgICAgICAgICAgJzQnLFxyXG4gICAgICAgICAgICAnJCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0NScsXHJcbiAgICAgICAgICAgICc1JyxcclxuICAgICAgICAgICAgJyUnLFxyXG4gICAgICAgICAgICAnNScsXHJcbiAgICAgICAgICAgICclJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQ2JyxcclxuICAgICAgICAgICAgJzYnLFxyXG4gICAgICAgICAgICAnOicsXHJcbiAgICAgICAgICAgICc2JyxcclxuICAgICAgICAgICAgJ14nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDcnLFxyXG4gICAgICAgICAgICAnNycsXHJcbiAgICAgICAgICAgICc/JyxcclxuICAgICAgICAgICAgJzcnLFxyXG4gICAgICAgICAgICAnJidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0OCcsXHJcbiAgICAgICAgICAgICc4JyxcclxuICAgICAgICAgICAgJyonLFxyXG4gICAgICAgICAgICAnOCcsXHJcbiAgICAgICAgICAgICcqJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQ5JyxcclxuICAgICAgICAgICAgJzknLFxyXG4gICAgICAgICAgICAnKCcsXHJcbiAgICAgICAgICAgICc5JyxcclxuICAgICAgICAgICAgJygnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDAnLFxyXG4gICAgICAgICAgICAnMCcsXHJcbiAgICAgICAgICAgICcpJyxcclxuICAgICAgICAgICAgJzAnLFxyXG4gICAgICAgICAgICAnKSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ01pbnVzJyxcclxuICAgICAgICAgICAgJy0nLFxyXG4gICAgICAgICAgICAnXycsXHJcbiAgICAgICAgICAgICctJyxcclxuICAgICAgICAgICAgJ18nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdFcXVhbCcsXHJcbiAgICAgICAgICAgICc9JyxcclxuICAgICAgICAgICAgJysnLFxyXG4gICAgICAgICAgICAnPScsXHJcbiAgICAgICAgICAgICcrJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQmFja3NwYWNlJyxcclxuICAgICAgICAgICAgJ0JhY2tzcGFjZScsXHJcbiAgICAgICAgICAgICdCYWNrc3BhY2UnLFxyXG4gICAgICAgICAgICAnQmFja3NwYWNlJyxcclxuICAgICAgICAgICAgJ0JhY2tzcGFjZSdcclxuICAgICAgICBdXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1RhYicsXHJcbiAgICAgICAgICAgICdUYWInLFxyXG4gICAgICAgICAgICAnVGFiJyxcclxuICAgICAgICAgICAgJ1RhYicsXHJcbiAgICAgICAgICAgICdUYWInXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlRJyxcclxuICAgICAgICAgICAgJ9C5JyxcclxuICAgICAgICAgICAgJ9CZJyxcclxuICAgICAgICAgICAgJ3EnLFxyXG4gICAgICAgICAgICAnUSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVcnLFxyXG4gICAgICAgICAgICAn0YYnLFxyXG4gICAgICAgICAgICAn0KYnLFxyXG4gICAgICAgICAgICAndycsXHJcbiAgICAgICAgICAgICdXJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5RScsXHJcbiAgICAgICAgICAgICfRgycsXHJcbiAgICAgICAgICAgICfQoycsXHJcbiAgICAgICAgICAgICdlJyxcclxuICAgICAgICAgICAgJ0UnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlSJyxcclxuICAgICAgICAgICAgJ9C6JyxcclxuICAgICAgICAgICAgJ9CaJyxcclxuICAgICAgICAgICAgJ3InLFxyXG4gICAgICAgICAgICAnUidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVQnLFxyXG4gICAgICAgICAgICAn0LUnLFxyXG4gICAgICAgICAgICAn0JUnLFxyXG4gICAgICAgICAgICAndCcsXHJcbiAgICAgICAgICAgICdUJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5WScsXHJcbiAgICAgICAgICAgICfQvScsXHJcbiAgICAgICAgICAgICfQnScsXHJcbiAgICAgICAgICAgICd5JyxcclxuICAgICAgICAgICAgJ1knXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlVJyxcclxuICAgICAgICAgICAgJ9CzJyxcclxuICAgICAgICAgICAgJ9CTJyxcclxuICAgICAgICAgICAgJ3UnLFxyXG4gICAgICAgICAgICAnVSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUknLFxyXG4gICAgICAgICAgICAn0YgnLFxyXG4gICAgICAgICAgICAn0KgnLFxyXG4gICAgICAgICAgICAnaScsXHJcbiAgICAgICAgICAgICdJJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5TycsXHJcbiAgICAgICAgICAgICfRiScsXHJcbiAgICAgICAgICAgICfQqScsXHJcbiAgICAgICAgICAgICdvJyxcclxuICAgICAgICAgICAgJ08nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlQJyxcclxuICAgICAgICAgICAgJ9C3JyxcclxuICAgICAgICAgICAgJ9CXJyxcclxuICAgICAgICAgICAgJ3AnLFxyXG4gICAgICAgICAgICAnUCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0JyYWNrZXRMZWZ0JyxcclxuICAgICAgICAgICAgJ9GFJyxcclxuICAgICAgICAgICAgJ9ClJyxcclxuICAgICAgICAgICAgJ1snLFxyXG4gICAgICAgICAgICAneydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0JyYWNrZXRSaWdodCcsXHJcbiAgICAgICAgICAgICfRiicsXHJcbiAgICAgICAgICAgICfQqicsXHJcbiAgICAgICAgICAgICddJyxcclxuICAgICAgICAgICAgJ30nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdCYWNrc2xhc2gnLFxyXG4gICAgICAgICAgICAnXFxcXCcsXHJcbiAgICAgICAgICAgICcvJyxcclxuICAgICAgICAgICAgJ1xcXFwnLFxyXG4gICAgICAgICAgICAnfCdcclxuICAgICAgICBdLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDYXBzTG9jaycsXHJcbiAgICAgICAgICAgICdDYXBzTG9jaycsXHJcbiAgICAgICAgICAgICdDYXBzTG9jaycsXHJcbiAgICAgICAgICAgICdDYXBzTG9jaycsXHJcbiAgICAgICAgICAgICdDYXBzTG9jaydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUEnLFxyXG4gICAgICAgICAgICAn0YQnLFxyXG4gICAgICAgICAgICAn0KQnLFxyXG4gICAgICAgICAgICAnYScsXHJcbiAgICAgICAgICAgICdBJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5UycsXHJcbiAgICAgICAgICAgICfRiycsXHJcbiAgICAgICAgICAgICfQqycsXHJcbiAgICAgICAgICAgICdzJyxcclxuICAgICAgICAgICAgJ1MnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlEJyxcclxuICAgICAgICAgICAgJ9CyJyxcclxuICAgICAgICAgICAgJ9CSJyxcclxuICAgICAgICAgICAgJ2QnLFxyXG4gICAgICAgICAgICAnRCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUYnLFxyXG4gICAgICAgICAgICAn0LAnLFxyXG4gICAgICAgICAgICAn0JAnLFxyXG4gICAgICAgICAgICAnZicsXHJcbiAgICAgICAgICAgICdGJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5RycsXHJcbiAgICAgICAgICAgICfQvycsXHJcbiAgICAgICAgICAgICfQnycsXHJcbiAgICAgICAgICAgICdnJyxcclxuICAgICAgICAgICAgJ0cnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlIJyxcclxuICAgICAgICAgICAgJ9GAJyxcclxuICAgICAgICAgICAgJ9CgJyxcclxuICAgICAgICAgICAgJ2gnLFxyXG4gICAgICAgICAgICAnSCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUonLFxyXG4gICAgICAgICAgICAn0L4nLFxyXG4gICAgICAgICAgICAn0J4nLFxyXG4gICAgICAgICAgICAnaicsXHJcbiAgICAgICAgICAgICdKJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5SycsXHJcbiAgICAgICAgICAgICfQuycsXHJcbiAgICAgICAgICAgICfQmycsXHJcbiAgICAgICAgICAgICdrJyxcclxuICAgICAgICAgICAgJ0snXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlMJyxcclxuICAgICAgICAgICAgJ9C0JyxcclxuICAgICAgICAgICAgJ9CUJyxcclxuICAgICAgICAgICAgJ2wnLFxyXG4gICAgICAgICAgICAnTCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1NlbWljb2xvbicsXHJcbiAgICAgICAgICAgICfQticsXHJcbiAgICAgICAgICAgICfQlicsXHJcbiAgICAgICAgICAgICc7JyxcclxuICAgICAgICAgICAgJzonXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdRdW90ZScsXHJcbiAgICAgICAgICAgICfRjScsXHJcbiAgICAgICAgICAgICfQrScsXHJcbiAgICAgICAgICAgICdcXCcnLFxyXG4gICAgICAgICAgICAnXCInXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdFbnRlcicsXHJcbiAgICAgICAgICAgICdFbnRlcicsXHJcbiAgICAgICAgICAgICdFbnRlcicsXHJcbiAgICAgICAgICAgICdFbnRlcicsXHJcbiAgICAgICAgICAgICdFbnRlcidcclxuICAgICAgICBdXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1NoaWZ0TGVmdCcsXHJcbiAgICAgICAgICAgICdTaGlmdCcsXHJcbiAgICAgICAgICAgICdTaGlmdCcsXHJcbiAgICAgICAgICAgICdTaGlmdCcsXHJcbiAgICAgICAgICAgICdTaGlmdCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVonLFxyXG4gICAgICAgICAgICAn0Y8nLFxyXG4gICAgICAgICAgICAn0K8nLFxyXG4gICAgICAgICAgICAneicsXHJcbiAgICAgICAgICAgICdaJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5WCcsXHJcbiAgICAgICAgICAgICfRhycsXHJcbiAgICAgICAgICAgICfQpycsXHJcbiAgICAgICAgICAgICd4JyxcclxuICAgICAgICAgICAgJ1gnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlDJyxcclxuICAgICAgICAgICAgJ9GBJyxcclxuICAgICAgICAgICAgJ9ChJyxcclxuICAgICAgICAgICAgJ2MnLFxyXG4gICAgICAgICAgICAnQydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVYnLFxyXG4gICAgICAgICAgICAn0LwnLFxyXG4gICAgICAgICAgICAn0JwnLFxyXG4gICAgICAgICAgICAndicsXHJcbiAgICAgICAgICAgICdWJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5QicsXHJcbiAgICAgICAgICAgICfQuCcsXHJcbiAgICAgICAgICAgICfQmCcsXHJcbiAgICAgICAgICAgICdiJyxcclxuICAgICAgICAgICAgJ0InXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlOJyxcclxuICAgICAgICAgICAgJ9GCJyxcclxuICAgICAgICAgICAgJ9CiJyxcclxuICAgICAgICAgICAgJ24nLFxyXG4gICAgICAgICAgICAnTidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleU0nLFxyXG4gICAgICAgICAgICAn0YwnLFxyXG4gICAgICAgICAgICAn0KwnLFxyXG4gICAgICAgICAgICAnbScsXHJcbiAgICAgICAgICAgICdNJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnUGVyaW9kJyxcclxuICAgICAgICAgICAgJ9CxJyxcclxuICAgICAgICAgICAgJ9CRJyxcclxuICAgICAgICAgICAgJywnLFxyXG4gICAgICAgICAgICAnPCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1NsYXNoJyxcclxuICAgICAgICAgICAgJ9GOJyxcclxuICAgICAgICAgICAgJ9CuJyxcclxuICAgICAgICAgICAgJy4nLFxyXG4gICAgICAgICAgICAnPidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0ludGxSbycsXHJcbiAgICAgICAgICAgICcuJyxcclxuICAgICAgICAgICAgJywnLFxyXG4gICAgICAgICAgICAnLycsXHJcbiAgICAgICAgICAgICc/J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnU2hpZnRSaWdodCcsXHJcbiAgICAgICAgICAgICdTaGlmdCcsXHJcbiAgICAgICAgICAgICdTaGlmdCcsXHJcbiAgICAgICAgICAgICdTaGlmdCcsXHJcbiAgICAgICAgICAgICdTaGlmdCdcclxuICAgICAgICBdXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NvbnRyb2xMZWZ0JyxcclxuICAgICAgICAgICAgJ0N0cmwnLFxyXG4gICAgICAgICAgICAnQ3RybCcsXHJcbiAgICAgICAgICAgICdDdHJsJyxcclxuICAgICAgICAgICAgJ0N0cmwnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdNZXRhTGVmdCcsXHJcbiAgICAgICAgICAgICdXaW4nLFxyXG4gICAgICAgICAgICAnV2luJyxcclxuICAgICAgICAgICAgJ1dpbicsXHJcbiAgICAgICAgICAgICdXaW4nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdBbHRMZWZ0JyxcclxuICAgICAgICAgICAgJ0FsdCcsXHJcbiAgICAgICAgICAgICdBbHQnLFxyXG4gICAgICAgICAgICAnQWx0JyxcclxuICAgICAgICAgICAgJ0FsdCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1NwYWNlJyxcclxuICAgICAgICAgICAgJyAnLFxyXG4gICAgICAgICAgICAnICcsXHJcbiAgICAgICAgICAgICcgJyxcclxuICAgICAgICAgICAgJyAnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdBbHRSaWdodCcsXHJcbiAgICAgICAgICAgICdBbHQnLFxyXG4gICAgICAgICAgICAnQWx0JyxcclxuICAgICAgICAgICAgJ0FsdCcsXHJcbiAgICAgICAgICAgICdBbHQnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdNZXRhUmlnaHQnLFxyXG4gICAgICAgICAgICAnV2luJyxcclxuICAgICAgICAgICAgJ1dpbicsXHJcbiAgICAgICAgICAgICdXaW4nLFxyXG4gICAgICAgICAgICAnV2luJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ29udGV4dE1lbnUnLFxyXG4gICAgICAgICAgICAnQ29udCcsXHJcbiAgICAgICAgICAgICdDb250JyxcclxuICAgICAgICAgICAgJ0NvbnQnLFxyXG4gICAgICAgICAgICAnQ29udCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NvbnRyb2xSaWdodCcsXHJcbiAgICAgICAgICAgICdDdHJsJyxcclxuICAgICAgICAgICAgJ0N0cmwnLFxyXG4gICAgICAgICAgICAnQ3RybCcsXHJcbiAgICAgICAgICAgICdDdHJsJ1xyXG4gICAgICAgIF0sXHJcblxyXG4gICAgXVxyXG5dXHJcblxyXG5cclxuIiwiZXhwb3J0IGxldCBsb2NTdG9yZSA9ICgpID0+IHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGg+MCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmcnKS5mb3JFYWNoKCBsYW5nID0+IHtcclxuICAgICAgICAgICAgaWYobGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKXtcclxuICAgICAgICAgICAgICAgIGxhbmcuY2xhc3NMaXN0LnJlbW92ZSgnb2ZmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5nJykuZm9yRWFjaCggZnVuY3Rpb24obGFuZywgaW5kZXgpe1xyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2VbYCR7aW5kZXh9YF0pe1xyXG4gICAgICAgICAgICAgICAgbGFuZy5jbGFzc0xpc3QuYWRkKCdvZmYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUZW1wbGF0ZSgpIHtcclxuICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XHJcbiAgICBib2R5LmFwcGVuZChhcnRpY2xlKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc2VjdGlvblRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRBcmVhJyk7XHJcbiAgICBhcnRpY2xlLmFwcGVuZChzZWN0aW9uVGV4dEFyZWEpO1xyXG5cclxuICAgIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBsZXQgcm93c1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKCdyb3dzJyk7XHJcbiAgICBsZXQgY29sc1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKCdjb2xzJyk7XHJcbiAgICByb3dzVGV4dEFyZWEudmFsdWUgPSAnNic7XHJcbiAgICBjb2xzVGV4dEFyZWEudmFsdWUgPSAnNjAnO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlTm9kZShyb3dzVGV4dEFyZWEpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlTm9kZShjb2xzVGV4dEFyZWEpO1xyXG4gICAgc2VjdGlvblRleHRBcmVhLmFwcGVuZCh0ZXh0QXJlYSk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25LZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBzZWN0aW9uS2V5LmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJfX2tleWJvYXJkJyk7XHJcblxyXG4gICAgbGV0IGtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBrZXlib2FyZC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpO1xyXG5cclxuICAgIHNlY3Rpb25LZXkuYXBwZW5kKGtleWJvYXJkKTtcclxuICAgIFxyXG4gICAgZm9yKGxldCBpPTA7IGk8NTsgaSsrKXtcclxuICAgICAgICBsZXQgcm93S2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcm93S2V5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19yb3cnKTtcclxuICAgICAgICBrZXlib2FyZC5hcHBlbmQocm93S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiY2hhbmdlIGxhbmd1YWdlICdDdHJsIChsZWZ0KSArIFNoaWZ0IChsZWZ0KSdcIjtcclxuICAgIFxyXG4gICAgYXJ0aWNsZS5hcHBlbmQodGl0bGVUZXh0KTtcclxuXHJcbiAgICByZXR1cm4gYXJ0aWNsZS5hcHBlbmQoc2VjdGlvbktleSk7XHJcbn1cclxuXHJcblxyXG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
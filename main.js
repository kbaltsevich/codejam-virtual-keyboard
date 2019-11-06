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








const metaKeys = ['Tab', 'ShiftLeft', 'ShiftRight', 'AltRight', 'AltLeft', 'ControlLeft', 'ControlRight', 'MetaRight', 'MetaLeft', 'CapsLock', 'ContextMenu', 'Enter', 'Backspace']
Object(_module_template_js__WEBPACK_IMPORTED_MODULE_1__["addTemplate"])();

const rows = document.querySelectorAll('.keyboard__row');
let isKlick = null;

rows.forEach((item, index) => {
    _module_keys_js__WEBPACK_IMPORTED_MODULE_3__["keys"][index].forEach(k => {
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
    event.preventDefault();
    keyDown(event);
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        shiftDown(event);
    }
})

document.addEventListener('keyup', event => {
    event.preventDefault();
    let keyCodes = event.code;
    keyUp(event);
    if (metaKeys.indexOf(keyCodes) === -1) {
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
    } else
    if (keyCodes == 'Tab') { 
        textarea.value += '    ';
    } else
    if (keyCodes == 'Enter') {
        textarea.value += '\n';
    } else
    if (keyCodes == 'Space') {
        textarea.value += '';
    } else
    if (keyCodes == 'Backspace') {
        textarea.value = textarea.value.split('').slice(0, -1).join('');
    } else
    if (keyCodes == 'CapsLock') {
        capsLock(event);
    } else
    if (keyCodes === 'ShiftLeft' && event.ctrlKey) {
        changeLang(event);
    } else
    if (keyCodes === 'ShiftLeft' || keyCodes == 'ShiftRight') {
        shiftUp(event);
    }
})

keyboardKeys.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.classList.add('keyboard__key--active');
        item.querySelectorAll('.lang').forEach(lang => {
            if (!lang.classList.contains('off')) {
                if (!lang.classList.contains('Tab') && !lang.classList.contains('Enter') && !lang.classList.contains('ShiftLeft') && !lang.classList.contains('ShiftRight') && !lang.classList.contains('AltRight') && !lang.classList.contains('AltLeft') && !lang.classList.contains('ControlLeft') && !lang.classList.contains('ControlRight') && !lang.classList.contains('MetaRight') && !lang.classList.contains('MetaLeft') && !lang.classList.contains('ContextMenu') && !lang.classList.contains('Backspace') && !lang.classList.contains('CapsLock')) {
                    lang.querySelectorAll('.case').forEach(k => {
                        if (!k.classList.contains('down')) {
                            textarea.value += k.textContent;
                        }
                    })
                } else
                if (lang.classList.contains('Tab')) {
                    textarea.value += '    ';
                } else
                if (lang.classList.contains('Enter')) {
                    textarea.value += '\n';
                } else
                if (lang.classList.contains('Space')) {
                    textarea.value += '';
                } else
                if (lang.classList.contains('Backspace')) {
                    textarea.value = textarea.value.split('').slice(0, -1).join('');
                } else
                if (lang.classList.contains('CapsLock')) {
                    keyUpDown.forEach(function (key) {
                        if (!key.classList.contains('down')) {
                            key.classList.add('down');
                        } else {
                            key.classList.remove('down');
                        };
                    })
                }
            }
        })
    })
    item.addEventListener('mouseup', () => {
        item.classList.remove('keyboard__key--active');
    })
})


function capsLock(event) {
    keyUpDown.forEach(key => {
            if (!key.classList.contains('down')) {
                key.classList.add('down');
            } else {
                key.classList.remove('down');
            };
    });
}

function changeLang(event) {
    keyLang.forEach((key, index) => {
        key.classList.toggle('off');
        if (key.classList.contains('off')) {
            localStorage.setItem(`${index}`, 'off');
        } else {
            localStorage.removeItem(`${index}`);
        }
    })
}

function shiftUp(event) {
    if (!isKlick) {
        isKlick = Date.now();
        keyUpDown.forEach(function (key) {
            key.classList.toggle('down');
        });
    }
}

function shiftDown(event) {
    isKlick = null;
    console.log(event);
    keyUpDown.forEach(function (key) {
        if (!key.classList.contains('down')) {
            key.classList.add('down');
        } else {
            key.classList.remove('down');
        };
    });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9sb2NhbHN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz8wNmE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZiQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNBLGNBQWMsbUJBQU8sQ0FBQyxtTUFBK0Y7O0FBRXJIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1KQUF3RTs7QUFFN0Y7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi53cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7IH1cXG5cXG4udGV4dEFyZWEge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG50ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzFlNmIwNjtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXFxuLmtleWJvYXJkIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICAua2V5Ym9hcmRfX3JvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNXB4IDAgMDsgfVxcbiAgLmtleWJvYXJkX19rZXkge1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNlOGYwMTY7XFxuICAgIGJhY2tncm91bmQ6ICMxZTZiMDY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlOyB9XFxuICAgIC5rZXlib2FyZF9fa2V5LS1hY3RpdmUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZDogI2U4ZjAxNjtcXG4gICAgICBjb2xvcjogIzAwMDsgfVxcbiAgICAua2V5Ym9hcmRfX2tleTpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmtleV9fdGFiIHtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIG1heC13aWR0aDogODBweDsgfVxcblxcbi5rZXlfX3NwYWNlIHtcXG4gIG1pbi13aWR0aDogNDUwcHg7XFxuICBtYXgtd2lkdGg6IDQ1MHB4OyB9XFxuXFxuLmtleV9fc2hpZnQge1xcbiAgbWluLXdpZHRoOiAxMTBweDtcXG4gIG1heC13aWR0aDogMTEwcHg7IH1cXG5cXG4ua2V5X19iYWNrIHtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIG1heC13aWR0aDogODBweDsgfVxcblxcbi5rZXlfX2NhcHMge1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIG1heC13aWR0aDogMTAwcHg7IH1cXG5cXG4ua2V5X19lbnRlciB7XFxuICBtaW4td2lkdGg6IDkwcHg7XFxuICBtYXgtd2lkdGg6IDkwcHg7IH1cXG5cXG4ud3JhcHBlcl9fa2V5Ym9hcmQge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ub2ZmIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZG93biB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQge2FkZFRlbXBsYXRlfSBmcm9tICcuL21vZHVsZS90ZW1wbGF0ZS5qcyc7XHJcbmltcG9ydCB7YWRkS2V5fSBmcm9tICcuL21vZHVsZS9rZXkuanMnO1xyXG5pbXBvcnQge2tleXN9IGZyb20gJy4vbW9kdWxlL2tleXMuanMnO1xyXG5pbXBvcnQge2xvY1N0b3JlfSBmcm9tICcuL21vZHVsZS9sb2NhbHN0b3IuanMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBtZXRhS2V5cyA9IFsnVGFiJywgJ1NoaWZ0TGVmdCcsICdTaGlmdFJpZ2h0JywgJ0FsdFJpZ2h0JywgJ0FsdExlZnQnLCAnQ29udHJvbExlZnQnLCAnQ29udHJvbFJpZ2h0JywgJ01ldGFSaWdodCcsICdNZXRhTGVmdCcsICdDYXBzTG9jaycsICdDb250ZXh0TWVudScsICdFbnRlcicsICdCYWNrc3BhY2UnXVxyXG5hZGRUZW1wbGF0ZSgpO1xyXG5cclxuY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlib2FyZF9fcm93Jyk7XHJcbmxldCBpc0tsaWNrID0gbnVsbDtcclxuXHJcbnJvd3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGtleXNbaW5kZXhdLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgbGV0IGtleSA9IGFkZEtleSguLi5rKTtcclxuICAgICAgICBpZiAoYCR7a1swXX1gID09ICdTcGFjZScpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleV9fc3BhY2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGAke2tbMF19YCA9PSAnU2hpZnRMZWZ0JyB8fCBgJHtrWzBdfWAgPT0gJ1NoaWZ0UmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlfX3NoaWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChgJHtrWzBdfWAgPT0gJ1RhYicpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleV9fdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChgJHtrWzBdfWAgPT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleV9fYmFjaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYCR7a1swXX1gID09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleV9fZW50ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGAke2tbMF19YCA9PSAnQ2Fwc0xvY2snKSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlfX2NhcHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbS5hcHBlbmQoa2V5KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmxvY1N0b3JlKCk7XHJcblxyXG5cclxuY29uc3Qga2V5Ym9hcmRLZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleWJvYXJkX19rZXknKTtcclxuY29uc3Qga2V5TGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5nJyk7XHJcbmNvbnN0IGtleVVwRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlJyk7XHJcbmNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGtleURvd24oZXZlbnQpO1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ1NoaWZ0TGVmdCcgfHwgZXZlbnQuY29kZSA9PSAnU2hpZnRSaWdodCcpIHtcclxuICAgICAgICBzaGlmdERvd24oZXZlbnQpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGtleUNvZGVzID0gZXZlbnQuY29kZTtcclxuICAgIGtleVVwKGV2ZW50KTtcclxuICAgIGlmIChtZXRhS2V5cy5pbmRleE9mKGtleUNvZGVzKSA9PT0gLTEpIHtcclxuICAgICAgICBsZXQga2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7a2V5Q29kZXN9YCk7XHJcbiAgICAgICAga2V5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlJykuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWsuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb3duJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgKz0gay50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZVxyXG4gICAgaWYgKGtleUNvZGVzID09ICdUYWInKSB7IFxyXG4gICAgICAgIHRleHRhcmVhLnZhbHVlICs9ICcgICAgJztcclxuICAgIH0gZWxzZVxyXG4gICAgaWYgKGtleUNvZGVzID09ICdFbnRlcicpIHtcclxuICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnXFxuJztcclxuICAgIH0gZWxzZVxyXG4gICAgaWYgKGtleUNvZGVzID09ICdTcGFjZScpIHtcclxuICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnJztcclxuICAgIH0gZWxzZVxyXG4gICAgaWYgKGtleUNvZGVzID09ICdCYWNrc3BhY2UnKSB7XHJcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSB0ZXh0YXJlYS52YWx1ZS5zcGxpdCgnJykuc2xpY2UoMCwgLTEpLmpvaW4oJycpO1xyXG4gICAgfSBlbHNlXHJcbiAgICBpZiAoa2V5Q29kZXMgPT0gJ0NhcHNMb2NrJykge1xyXG4gICAgICAgIGNhcHNMb2NrKGV2ZW50KTtcclxuICAgIH0gZWxzZVxyXG4gICAgaWYgKGtleUNvZGVzID09PSAnU2hpZnRMZWZ0JyAmJiBldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgY2hhbmdlTGFuZyhldmVudCk7XHJcbiAgICB9IGVsc2VcclxuICAgIGlmIChrZXlDb2RlcyA9PT0gJ1NoaWZ0TGVmdCcgfHwga2V5Q29kZXMgPT0gJ1NoaWZ0UmlnaHQnKSB7XHJcbiAgICAgICAgc2hpZnRVcChldmVudCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5rZXlib2FyZEtleXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleS0tYWN0aXZlJyk7XHJcbiAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZycpLmZvckVhY2gobGFuZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ29mZicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYWInKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0VudGVyJykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdTaGlmdExlZnQnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ1NoaWZ0UmlnaHQnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ0FsdFJpZ2h0JykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdBbHRMZWZ0JykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdDb250cm9sTGVmdCcpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnQ29udHJvbFJpZ2h0JykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdNZXRhUmlnaHQnKSAmJiAhbGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ01ldGFMZWZ0JykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdDb250ZXh0TWVudScpICYmICFsYW5nLmNsYXNzTGlzdC5jb250YWlucygnQmFja3NwYWNlJykgJiYgIWxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdDYXBzTG9jaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZy5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZScpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghay5jbGFzc0xpc3QuY29udGFpbnMoJ2Rvd24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgKz0gay50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChsYW5nLmNsYXNzTGlzdC5jb250YWlucygnVGFiJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnICAgICc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChsYW5nLmNsYXNzTGlzdC5jb250YWlucygnRW50ZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlICs9ICdcXG4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZy5jbGFzc0xpc3QuY29udGFpbnMoJ1NwYWNlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSArPSAnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdCYWNrc3BhY2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoJycpLnNsaWNlKDAsIC0xKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdDYXBzTG9jaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5VXBEb3duLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWtleS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rvd24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgna2V5Ym9hcmRfX2tleS0tYWN0aXZlJyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNhcHNMb2NrKGV2ZW50KSB7XHJcbiAgICBrZXlVcERvd24uZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWtleS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rvd24nKSkge1xyXG4gICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTGFuZyhldmVudCkge1xyXG4gICAga2V5TGFuZy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAga2V5LmNsYXNzTGlzdC50b2dnbGUoJ29mZicpO1xyXG4gICAgICAgIGlmIChrZXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdvZmYnKSkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpbmRleH1gLCAnb2ZmJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7aW5kZXh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hpZnRVcChldmVudCkge1xyXG4gICAgaWYgKCFpc0tsaWNrKSB7XHJcbiAgICAgICAgaXNLbGljayA9IERhdGUubm93KCk7XHJcbiAgICAgICAga2V5VXBEb3duLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LnRvZ2dsZSgnZG93bicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaGlmdERvd24oZXZlbnQpIHtcclxuICAgIGlzS2xpY2sgPSBudWxsO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAga2V5VXBEb3duLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmICgha2V5LmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XHJcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rvd24nKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleURvd24oZXZlbnQpIHtcclxuICAgIGtleWJvYXJkS2V5cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2V2ZW50LmNvZGV9YCkpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5LS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBrZXlVcChldmVudCkge1xyXG4gICAga2V5Ym9hcmRLZXlzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcihgLiR7ZXZlbnQuY29kZX1gKSkge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2tleWJvYXJkX19rZXktLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkS2V5KGtleUNvZGUsIGtleUxhbmdPbmVVcCwga2V5TGFuZ09uZURvd24sIGtleUxhbmdUd29VcCwga2V5TGFuZ1R3b0Rvd24pe1xyXG5cclxuICAgIGxldCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5Jyk7XHJcblxyXG4gICAgbGV0IGtleUNvZGVPbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGtleUNvZGVPbi5jbGFzc0xpc3QuYWRkKGAke2tleUNvZGV9YCk7XHJcbiAgICBrZXlDb2RlT24uY2xhc3NMaXN0LmFkZCgnbGFuZycpO1xyXG4gICAgXHJcbiAgICBsZXQgYWRkS2V5TGFuZ09uZVVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYWRkS2V5TGFuZ09uZVVwLmlubmVyVGV4dCA9IGAke2tleUxhbmdPbmVVcH1gO1xyXG4gICAgYWRkS2V5TGFuZ09uZVVwLmNsYXNzTGlzdC5hZGQoJ2Nhc2UnKTtcclxuICAgIFxyXG5cclxuICAgIGxldCBhZGRLZXlMYW5nT25lRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGFkZEtleUxhbmdPbmVEb3duLmlubmVyVGV4dCA9IGAke2tleUxhbmdPbmVEb3dufWA7XHJcbiAgICBhZGRLZXlMYW5nT25lRG93bi5jbGFzc0xpc3QuYWRkKCdjYXNlJyk7XHJcbiAgICBhZGRLZXlMYW5nT25lRG93bi5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcbiAgICBrZXlDb2RlT24uYXBwZW5kKGFkZEtleUxhbmdPbmVVcCk7XHJcbiAgICBrZXlDb2RlT24uYXBwZW5kKGFkZEtleUxhbmdPbmVEb3duKTtcclxuXHJcbiAgICBsZXQga2V5Q29kZU9mZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGtleUNvZGVPZmYuY2xhc3NMaXN0LmFkZChgJHtrZXlDb2RlfWApO1xyXG4gICAga2V5Q29kZU9mZi5jbGFzc0xpc3QuYWRkKCdsYW5nJyk7XHJcbiAgICBrZXlDb2RlT2ZmLmNsYXNzTGlzdC5hZGQoJ29mZicpO1xyXG5cclxuICAgIGxldCBhZGRLZXlMYW5nVHdvVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBhZGRLZXlMYW5nVHdvVXAuY2xhc3NMaXN0LmFkZCgnY2FzZScpO1xyXG4gICAgYWRkS2V5TGFuZ1R3b1VwLmlubmVyVGV4dCA9IGAke2tleUxhbmdUd29VcH1gO1xyXG5cclxuICAgIGxldCBhZGRLZXlMYW5nVHdvRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGFkZEtleUxhbmdUd29Eb3duLmlubmVyVGV4dCA9IGAke2tleUxhbmdUd29Eb3dufWA7XHJcbiAgICBhZGRLZXlMYW5nVHdvRG93bi5jbGFzc0xpc3QuYWRkKCdjYXNlJyk7XHJcbiAgICBhZGRLZXlMYW5nVHdvRG93bi5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcblxyXG4gICAga2V5Q29kZU9mZi5hcHBlbmQoYWRkS2V5TGFuZ1R3b1VwKTtcclxuICAgIGtleUNvZGVPZmYuYXBwZW5kKGFkZEtleUxhbmdUd29Eb3duKTtcclxuXHJcbiAgICBrZXkuYXBwZW5kKGtleUNvZGVPbik7XHJcbiAgICBrZXkuYXBwZW5kKGtleUNvZGVPZmYpO1xyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBrZXlzID0gW1xyXG4gICAgW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0JhY2txdW90ZScsXHJcbiAgICAgICAgICAgICfRkScsXHJcbiAgICAgICAgICAgICfQgScsXHJcbiAgICAgICAgICAgICdgJyxcclxuICAgICAgICAgICAgJ34nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDEnLFxyXG4gICAgICAgICAgICAnMScsXHJcbiAgICAgICAgICAgICchJyxcclxuICAgICAgICAgICAgJzEnLFxyXG4gICAgICAgICAgICAnISdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0MicsXHJcbiAgICAgICAgICAgICcyJyxcclxuICAgICAgICAgICAgJ1xcXCInLFxyXG4gICAgICAgICAgICAnMicsXHJcbiAgICAgICAgICAgICdAJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQzJyxcclxuICAgICAgICAgICAgJzMnLFxyXG4gICAgICAgICAgICAn4oSWJyxcclxuICAgICAgICAgICAgJzMnLFxyXG4gICAgICAgICAgICAnIydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0NCcsXHJcbiAgICAgICAgICAgICc0JyxcclxuICAgICAgICAgICAgJzsnLFxyXG4gICAgICAgICAgICAnNCcsXHJcbiAgICAgICAgICAgICckJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQ1JyxcclxuICAgICAgICAgICAgJzUnLFxyXG4gICAgICAgICAgICAnJScsXHJcbiAgICAgICAgICAgICc1JyxcclxuICAgICAgICAgICAgJyUnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDYnLFxyXG4gICAgICAgICAgICAnNicsXHJcbiAgICAgICAgICAgICc6JyxcclxuICAgICAgICAgICAgJzYnLFxyXG4gICAgICAgICAgICAnXidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0NycsXHJcbiAgICAgICAgICAgICc3JyxcclxuICAgICAgICAgICAgJz8nLFxyXG4gICAgICAgICAgICAnNycsXHJcbiAgICAgICAgICAgICcmJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnRGlnaXQ4JyxcclxuICAgICAgICAgICAgJzgnLFxyXG4gICAgICAgICAgICAnKicsXHJcbiAgICAgICAgICAgICc4JyxcclxuICAgICAgICAgICAgJyonXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdEaWdpdDknLFxyXG4gICAgICAgICAgICAnOScsXHJcbiAgICAgICAgICAgICcoJyxcclxuICAgICAgICAgICAgJzknLFxyXG4gICAgICAgICAgICAnKCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0RpZ2l0MCcsXHJcbiAgICAgICAgICAgICcwJyxcclxuICAgICAgICAgICAgJyknLFxyXG4gICAgICAgICAgICAnMCcsXHJcbiAgICAgICAgICAgICcpJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTWludXMnLFxyXG4gICAgICAgICAgICAnLScsXHJcbiAgICAgICAgICAgICdfJyxcclxuICAgICAgICAgICAgJy0nLFxyXG4gICAgICAgICAgICAnXydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0VxdWFsJyxcclxuICAgICAgICAgICAgJz0nLFxyXG4gICAgICAgICAgICAnKycsXHJcbiAgICAgICAgICAgICc9JyxcclxuICAgICAgICAgICAgJysnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdCYWNrc3BhY2UnLFxyXG4gICAgICAgICAgICAnQmFja3NwYWNlJyxcclxuICAgICAgICAgICAgJ0JhY2tzcGFjZScsXHJcbiAgICAgICAgICAgICdCYWNrc3BhY2UnLFxyXG4gICAgICAgICAgICAnQmFja3NwYWNlJ1xyXG4gICAgICAgIF1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVGFiJyxcclxuICAgICAgICAgICAgJ1RhYicsXHJcbiAgICAgICAgICAgICdUYWInLFxyXG4gICAgICAgICAgICAnVGFiJyxcclxuICAgICAgICAgICAgJ1RhYidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVEnLFxyXG4gICAgICAgICAgICAn0LknLFxyXG4gICAgICAgICAgICAn0JknLFxyXG4gICAgICAgICAgICAncScsXHJcbiAgICAgICAgICAgICdRJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5VycsXHJcbiAgICAgICAgICAgICfRhicsXHJcbiAgICAgICAgICAgICfQpicsXHJcbiAgICAgICAgICAgICd3JyxcclxuICAgICAgICAgICAgJ1cnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlFJyxcclxuICAgICAgICAgICAgJ9GDJyxcclxuICAgICAgICAgICAgJ9CjJyxcclxuICAgICAgICAgICAgJ2UnLFxyXG4gICAgICAgICAgICAnRSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVInLFxyXG4gICAgICAgICAgICAn0LonLFxyXG4gICAgICAgICAgICAn0JonLFxyXG4gICAgICAgICAgICAncicsXHJcbiAgICAgICAgICAgICdSJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5VCcsXHJcbiAgICAgICAgICAgICfQtScsXHJcbiAgICAgICAgICAgICfQlScsXHJcbiAgICAgICAgICAgICd0JyxcclxuICAgICAgICAgICAgJ1QnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlZJyxcclxuICAgICAgICAgICAgJ9C9JyxcclxuICAgICAgICAgICAgJ9CdJyxcclxuICAgICAgICAgICAgJ3knLFxyXG4gICAgICAgICAgICAnWSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVUnLFxyXG4gICAgICAgICAgICAn0LMnLFxyXG4gICAgICAgICAgICAn0JMnLFxyXG4gICAgICAgICAgICAndScsXHJcbiAgICAgICAgICAgICdVJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5SScsXHJcbiAgICAgICAgICAgICfRiCcsXHJcbiAgICAgICAgICAgICfQqCcsXHJcbiAgICAgICAgICAgICdpJyxcclxuICAgICAgICAgICAgJ0knXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlPJyxcclxuICAgICAgICAgICAgJ9GJJyxcclxuICAgICAgICAgICAgJ9CpJyxcclxuICAgICAgICAgICAgJ28nLFxyXG4gICAgICAgICAgICAnTydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleVAnLFxyXG4gICAgICAgICAgICAn0LcnLFxyXG4gICAgICAgICAgICAn0JcnLFxyXG4gICAgICAgICAgICAncCcsXHJcbiAgICAgICAgICAgICdQJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQnJhY2tldExlZnQnLFxyXG4gICAgICAgICAgICAn0YUnLFxyXG4gICAgICAgICAgICAn0KUnLFxyXG4gICAgICAgICAgICAnWycsXHJcbiAgICAgICAgICAgICd7J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQnJhY2tldFJpZ2h0JyxcclxuICAgICAgICAgICAgJ9GKJyxcclxuICAgICAgICAgICAgJ9CqJyxcclxuICAgICAgICAgICAgJ10nLFxyXG4gICAgICAgICAgICAnfSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0JhY2tzbGFzaCcsXHJcbiAgICAgICAgICAgICdcXFxcJyxcclxuICAgICAgICAgICAgJy8nLFxyXG4gICAgICAgICAgICAnXFxcXCcsXHJcbiAgICAgICAgICAgICd8J1xyXG4gICAgICAgIF0sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NhcHNMb2NrJyxcclxuICAgICAgICAgICAgJ0NhcHNMb2NrJyxcclxuICAgICAgICAgICAgJ0NhcHNMb2NrJyxcclxuICAgICAgICAgICAgJ0NhcHNMb2NrJyxcclxuICAgICAgICAgICAgJ0NhcHNMb2NrJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5QScsXHJcbiAgICAgICAgICAgICfRhCcsXHJcbiAgICAgICAgICAgICfQpCcsXHJcbiAgICAgICAgICAgICdhJyxcclxuICAgICAgICAgICAgJ0EnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlTJyxcclxuICAgICAgICAgICAgJ9GLJyxcclxuICAgICAgICAgICAgJ9CrJyxcclxuICAgICAgICAgICAgJ3MnLFxyXG4gICAgICAgICAgICAnUydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUQnLFxyXG4gICAgICAgICAgICAn0LInLFxyXG4gICAgICAgICAgICAn0JInLFxyXG4gICAgICAgICAgICAnZCcsXHJcbiAgICAgICAgICAgICdEJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5RicsXHJcbiAgICAgICAgICAgICfQsCcsXHJcbiAgICAgICAgICAgICfQkCcsXHJcbiAgICAgICAgICAgICdmJyxcclxuICAgICAgICAgICAgJ0YnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlHJyxcclxuICAgICAgICAgICAgJ9C/JyxcclxuICAgICAgICAgICAgJ9CfJyxcclxuICAgICAgICAgICAgJ2cnLFxyXG4gICAgICAgICAgICAnRydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUgnLFxyXG4gICAgICAgICAgICAn0YAnLFxyXG4gICAgICAgICAgICAn0KAnLFxyXG4gICAgICAgICAgICAnaCcsXHJcbiAgICAgICAgICAgICdIJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5SicsXHJcbiAgICAgICAgICAgICfQvicsXHJcbiAgICAgICAgICAgICfQnicsXHJcbiAgICAgICAgICAgICdqJyxcclxuICAgICAgICAgICAgJ0onXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlLJyxcclxuICAgICAgICAgICAgJ9C7JyxcclxuICAgICAgICAgICAgJ9CbJyxcclxuICAgICAgICAgICAgJ2snLFxyXG4gICAgICAgICAgICAnSydcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUwnLFxyXG4gICAgICAgICAgICAn0LQnLFxyXG4gICAgICAgICAgICAn0JQnLFxyXG4gICAgICAgICAgICAnbCcsXHJcbiAgICAgICAgICAgICdMJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnU2VtaWNvbG9uJyxcclxuICAgICAgICAgICAgJ9C2JyxcclxuICAgICAgICAgICAgJ9CWJyxcclxuICAgICAgICAgICAgJzsnLFxyXG4gICAgICAgICAgICAnOidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1F1b3RlJyxcclxuICAgICAgICAgICAgJ9GNJyxcclxuICAgICAgICAgICAgJ9CtJyxcclxuICAgICAgICAgICAgJ1xcJycsXHJcbiAgICAgICAgICAgICdcIidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0VudGVyJyxcclxuICAgICAgICAgICAgJ0VudGVyJyxcclxuICAgICAgICAgICAgJ0VudGVyJyxcclxuICAgICAgICAgICAgJ0VudGVyJyxcclxuICAgICAgICAgICAgJ0VudGVyJ1xyXG4gICAgICAgIF1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnU2hpZnRMZWZ0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5WicsXHJcbiAgICAgICAgICAgICfRjycsXHJcbiAgICAgICAgICAgICfQrycsXHJcbiAgICAgICAgICAgICd6JyxcclxuICAgICAgICAgICAgJ1onXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlYJyxcclxuICAgICAgICAgICAgJ9GHJyxcclxuICAgICAgICAgICAgJ9CnJyxcclxuICAgICAgICAgICAgJ3gnLFxyXG4gICAgICAgICAgICAnWCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleUMnLFxyXG4gICAgICAgICAgICAn0YEnLFxyXG4gICAgICAgICAgICAn0KEnLFxyXG4gICAgICAgICAgICAnYycsXHJcbiAgICAgICAgICAgICdDJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5VicsXHJcbiAgICAgICAgICAgICfQvCcsXHJcbiAgICAgICAgICAgICfQnCcsXHJcbiAgICAgICAgICAgICd2JyxcclxuICAgICAgICAgICAgJ1YnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdLZXlCJyxcclxuICAgICAgICAgICAgJ9C4JyxcclxuICAgICAgICAgICAgJ9CYJyxcclxuICAgICAgICAgICAgJ2InLFxyXG4gICAgICAgICAgICAnQidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0tleU4nLFxyXG4gICAgICAgICAgICAn0YInLFxyXG4gICAgICAgICAgICAn0KInLFxyXG4gICAgICAgICAgICAnbicsXHJcbiAgICAgICAgICAgICdOJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnS2V5TScsXHJcbiAgICAgICAgICAgICfRjCcsXHJcbiAgICAgICAgICAgICfQrCcsXHJcbiAgICAgICAgICAgICdtJyxcclxuICAgICAgICAgICAgJ00nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdQZXJpb2QnLFxyXG4gICAgICAgICAgICAn0LEnLFxyXG4gICAgICAgICAgICAn0JEnLFxyXG4gICAgICAgICAgICAnLCcsXHJcbiAgICAgICAgICAgICc8J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnU2xhc2gnLFxyXG4gICAgICAgICAgICAn0Y4nLFxyXG4gICAgICAgICAgICAn0K4nLFxyXG4gICAgICAgICAgICAnLicsXHJcbiAgICAgICAgICAgICc+J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnSW50bFJvJyxcclxuICAgICAgICAgICAgJy4nLFxyXG4gICAgICAgICAgICAnLCcsXHJcbiAgICAgICAgICAgICcvJyxcclxuICAgICAgICAgICAgJz8nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdTaGlmdFJpZ2h0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0JyxcclxuICAgICAgICAgICAgJ1NoaWZ0J1xyXG4gICAgICAgIF1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ29udHJvbExlZnQnLFxyXG4gICAgICAgICAgICAnQ3RybCcsXHJcbiAgICAgICAgICAgICdDdHJsJyxcclxuICAgICAgICAgICAgJ0N0cmwnLFxyXG4gICAgICAgICAgICAnQ3RybCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ01ldGFMZWZ0JyxcclxuICAgICAgICAgICAgJ1dpbicsXHJcbiAgICAgICAgICAgICdXaW4nLFxyXG4gICAgICAgICAgICAnV2luJyxcclxuICAgICAgICAgICAgJ1dpbidcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0FsdExlZnQnLFxyXG4gICAgICAgICAgICAnQWx0JyxcclxuICAgICAgICAgICAgJ0FsdCcsXHJcbiAgICAgICAgICAgICdBbHQnLFxyXG4gICAgICAgICAgICAnQWx0J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnU3BhY2UnLFxyXG4gICAgICAgICAgICAnICcsXHJcbiAgICAgICAgICAgICcgJyxcclxuICAgICAgICAgICAgJyAnLFxyXG4gICAgICAgICAgICAnICdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0FsdFJpZ2h0JyxcclxuICAgICAgICAgICAgJ0FsdCcsXHJcbiAgICAgICAgICAgICdBbHQnLFxyXG4gICAgICAgICAgICAnQWx0JyxcclxuICAgICAgICAgICAgJ0FsdCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ01ldGFSaWdodCcsXHJcbiAgICAgICAgICAgICdXaW4nLFxyXG4gICAgICAgICAgICAnV2luJyxcclxuICAgICAgICAgICAgJ1dpbicsXHJcbiAgICAgICAgICAgICdXaW4nXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDb250ZXh0TWVudScsXHJcbiAgICAgICAgICAgICdDb250JyxcclxuICAgICAgICAgICAgJ0NvbnQnLFxyXG4gICAgICAgICAgICAnQ29udCcsXHJcbiAgICAgICAgICAgICdDb250J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ29udHJvbFJpZ2h0JyxcclxuICAgICAgICAgICAgJ0N0cmwnLFxyXG4gICAgICAgICAgICAnQ3RybCcsXHJcbiAgICAgICAgICAgICdDdHJsJyxcclxuICAgICAgICAgICAgJ0N0cmwnXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICBdXHJcbl1cclxuXHJcblxyXG4iLCJleHBvcnQgbGV0IGxvY1N0b3JlID0gKCkgPT4ge1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aD4wKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZycpLmZvckVhY2goIGxhbmcgPT4ge1xyXG4gICAgICAgICAgICBpZihsYW5nLmNsYXNzTGlzdC5jb250YWlucygnb2ZmJykpe1xyXG4gICAgICAgICAgICAgICAgbGFuZy5jbGFzc0xpc3QucmVtb3ZlKCdvZmYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmcnKS5mb3JFYWNoKCBmdW5jdGlvbihsYW5nLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZVtgJHtpbmRleH1gXSl7XHJcbiAgICAgICAgICAgICAgICBsYW5nLmNsYXNzTGlzdC5hZGQoJ29mZicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRlbXBsYXRlKCkge1xyXG4gICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcclxuICAgIGJvZHkuYXBwZW5kKGFydGljbGUpO1xyXG5cclxuICAgIGxldCBzZWN0aW9uVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBzZWN0aW9uVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEFyZWEnKTtcclxuICAgIGFydGljbGUuYXBwZW5kKHNlY3Rpb25UZXh0QXJlYSk7XHJcblxyXG4gICAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGxldCByb3dzVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoJ3Jvd3MnKTtcclxuICAgIGxldCBjb2xzVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoJ2NvbHMnKTtcclxuICAgIHJvd3NUZXh0QXJlYS52YWx1ZSA9ICc2JztcclxuICAgIGNvbHNUZXh0QXJlYS52YWx1ZSA9ICc2MCc7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGVOb2RlKHJvd3NUZXh0QXJlYSk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGVOb2RlKGNvbHNUZXh0QXJlYSk7XHJcbiAgICBzZWN0aW9uVGV4dEFyZWEuYXBwZW5kKHRleHRBcmVhKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvbktleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIHNlY3Rpb25LZXkuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcl9fa2V5Ym9hcmQnKTtcclxuXHJcbiAgICBsZXQga2V5Ym9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGtleWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJyk7XHJcblxyXG4gICAgc2VjdGlvbktleS5hcHBlbmQoa2V5Ym9hcmQpO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGk9MDsgaTw1OyBpKyspe1xyXG4gICAgICAgIGxldCByb3dLZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByb3dLZXkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX3JvdycpO1xyXG4gICAgICAgIGtleWJvYXJkLmFwcGVuZChyb3dLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJjaGFuZ2UgbGFuZ3VhZ2UgJ0N0cmwgKGxlZnQpICsgU2hpZnQgKGxlZnQpJ1wiO1xyXG4gICAgXHJcbiAgICBhcnRpY2xlLmFwcGVuZCh0aXRsZVRleHQpO1xyXG5cclxuICAgIHJldHVybiBhcnRpY2xlLmFwcGVuZChzZWN0aW9uS2V5KTtcclxufVxyXG5cclxuXHJcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(615), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(311), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-font: "Noto Serif Display", serif;
  --error-red: #ff3131;
  --success-green: #7cfc00;
}

body,
form,
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  cursor: pointer;
}
button:active {
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

body {
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
}

.svg {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  height: 100%;
  width: 80%;
  position: absolute;
  top: 0;
  transform: translateX(-150%);
}

.success-svg {
  transform: translateX(0%);
  z-index: 100;
  backdrop-filter: blur(10px);
}

/*FORM*/
form {
  width: 900px;
  flex-direction: column;
  gap: 20px;
  padding: 50px 20px;
  border-radius: 12px;
  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.176);
}

label,
input {
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-family: "Noto Serif Display", serif;
}

input {
  padding: 10px 15px;
  border-radius: 12px;
  margin-bottom: 10px;
}

input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition:
    background-color 0s 600000s,
    color 0s 600000s !important;
}

label {
  text-align: left;
}

.input-container {
  justify-content: space-between;
  width: 90%;
  position: relative;
  margin-bottom: 40px;
}

select {
  width: 55%;
  padding: 10px 10px;
  font-size: 1rem;
  border-radius: 12px;
  background-color: white;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.error {
  font-size: 1rem;
  text-align: left;
  color: red;
  width: 100%;
  position: absolute;
  bottom: -20%;
  right: -45%;
}

.error-invalid {
  border: 3px solid var(--error-red);
}

.error-valid {
  border: 3px solid var(--success-green);
}

input:focus {
  outline: none;
}

button[type="button"] {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border: none;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 1%;
  top: 45%;
  transform: translateY(-45%);
}

button[type="submit"] {
  padding: 15px 80px;
  text-transform: uppercase;
  font-family: var(--main-font);
  font-weight: bold;
  letter-spacing: 0.4rem;
  background-color: white;
  font-size: 2rem;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wCAAwC;EACxC,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gDAA4B;EAC5B,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,2BAA2B;AAC7B;;AAEA,OAAO;AACP;EACE,YAAY;EACZ,sBAAsB;EACtB,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,kDAAkD;AACpD;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE;;+BAE6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,UAAU;EACV,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yDAAuC;EACvC,4BAA4B;EAC5B,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;EAC7B,iBAAiB;EACjB,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,gCAAgC;EAChC,4BAA4B;AAC9B","sourcesContent":[":root {\n  --main-font: \"Noto Serif Display\", serif;\n  --error-red: #ff3131;\n  --success-green: #7cfc00;\n}\n\nbody,\nform,\n.input-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\nbutton:active {\n  transform: scale(0.9);\n  transition: transform 0.3s ease;\n}\n\nbody {\n  width: 100dvw;\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.svg {\n  content: url(./handOkay.svg);\n  height: 100%;\n  width: 80%;\n  position: absolute;\n  top: 0;\n  transform: translateX(-150%);\n}\n\n.success-svg {\n  transform: translateX(0%);\n  z-index: 100;\n  backdrop-filter: blur(10px);\n}\n\n/*FORM*/\nform {\n  width: 900px;\n  flex-direction: column;\n  gap: 20px;\n  padding: 50px 20px;\n  border-radius: 12px;\n  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.176);\n}\n\nlabel,\ninput {\n  font-weight: 300;\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  font-family: \"Noto Serif Display\", serif;\n}\n\ninput {\n  padding: 10px 15px;\n  border-radius: 12px;\n  margin-bottom: 10px;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:focus {\n  transition:\n    background-color 0s 600000s,\n    color 0s 600000s !important;\n}\n\nlabel {\n  text-align: left;\n}\n\n.input-container {\n  justify-content: space-between;\n  width: 90%;\n  position: relative;\n  margin-bottom: 40px;\n}\n\nselect {\n  width: 55%;\n  padding: 10px 10px;\n  font-size: 1rem;\n  border-radius: 12px;\n  background-color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n}\n\n.error {\n  font-size: 1rem;\n  text-align: left;\n  color: red;\n  width: 100%;\n  position: absolute;\n  bottom: -20%;\n  right: -45%;\n}\n\n.error-invalid {\n  border: 3px solid var(--error-red);\n}\n\n.error-valid {\n  border: 3px solid var(--success-green);\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton[type=\"button\"] {\n  background-image: url(./eyeOutline.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: white;\n  border: none;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 1%;\n  top: 45%;\n  transform: translateY(-45%);\n}\n\nbutton[type=\"submit\"] {\n  padding: 15px 80px;\n  text-transform: uppercase;\n  font-family: var(--main-font);\n  font-weight: bold;\n  letter-spacing: 0.4rem;\n  background-color: white;\n  font-size: 2rem;\n  border-bottom-right-radius: 12px;\n  border-top-left-radius: 12px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2c89b59f6016b33ace2.svg";

/***/ }),

/***/ 615:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c66af91b9232cc1c283a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/emailValidation.js
const email = document.querySelector('input[type="email"]');
const errorSpan = email.parentNode.querySelector(".error");

let isValid = false;

const validateEmail = function validateTypeAndLengthOfEmailAddress() {
  if (email.value.length === 0) return;
  if (email.validity.typeMismatch) {
    email.classList.add("error-invalid");
    email.classList.remove("error-valid");
    errorSpan.textContent = "Please provide a valid email address";
    isValid = false;
  } else if (email.value.length < 6) {
    email.classList.add("error-invalid");
    email.classList.remove("error-valid");
    errorSpan.textContent = "Email must be at least 6 characters";
    if (email.value.length === 0) {
      errorSpan.textContent = "";
    }
    isValid = false;
  } else {
    errorSpan.textContent = "";
    email.classList.remove("error-invalid");
    email.classList.add("error-valid");
    isValid = true;
  }
  return isValid;
};

email.addEventListener("input", validateEmail);

/* harmony default export */ const emailValidation = (validateEmail);

;// CONCATENATED MODULE: ./src/constraints.js
const constraints = {
  us: [
    /^(\d{5}$)|(^\d{5}-\d{4})$/,
    "ZIPs must have exactly 5 digits or a hyphen with 4 more digits: e.g. 76342",
  ],
  fr: [/^\d{5}$/, "France ZIPs must have exactly 5 digits: e.g. 75012"],
  de: [/^\d{5}$/, "Germany ZIPs must have exactly 5 digits: e.g. 12345"],
  rs: [
    /^(\d{3}-\d{3})/,
    "Russia ZIPs must have exactly 6 digits: e.g. 124-567 ",
  ],
};

/* harmony default export */ const src_constraints = (constraints);

;// CONCATENATED MODULE: ./src/zipValidation.js



const zip = document.querySelector('input[name="zip"]');
const zipValidation_errorSpan = zip.parentNode.querySelector(".error");

let zipValidation_isValid = false;

const change = function changePlaceholderTextInZipInputOnSelectChange(value) {
  if (value === "us") {
    // eslint-disable-next-line no-param-reassign
    value = "EX: 90210 or 99577-0727";
  } else if (value === "fr" || value === "de") {
    // eslint-disable-next-line no-param-reassign
    value = "EX: 90210";
  } else if (value === "rs") {
    // eslint-disable-next-line no-param-reassign
    value = "EX: 348-139";
  }
  return value;
};

const zipValidation = function zipPostalCodeValidation(
  event,
  country = countryValidation_select.value
) {
  const constraint = src_constraints[country][0];

  zip.setAttribute("placeholder", change(countryValidation_select.value));
  if (zip.value.length === 0) return;
  if (country === "us") {
    zip.setAttribute("placeholder", "EX: 90210 or 99577-0727");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      zipValidation_errorSpan.textContent = src_constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
      zipValidation_isValid = false;
    } else {
      zipValidation_errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
      zipValidation_isValid = true;
    }
  } else if (country === "fr" || country === "de") {
    zip.setAttribute("placeholder", "EX: 90210");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      zipValidation_errorSpan.textContent = src_constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
      zipValidation_isValid = false;
    } else {
      zipValidation_errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
      zipValidation_isValid = true;
    }
  } else if (country === "rs") {
    zip.setAttribute("placeholder", "EX: 348-139");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      zipValidation_errorSpan.textContent = src_constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
      zipValidation_isValid = false;
    } else {
      zipValidation_errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
      zipValidation_isValid = true;
    }
  } else {
    console.log("error");
  }
  return zipValidation_isValid;
};

zip.addEventListener("input", zipValidation);

/* harmony default export */ const src_zipValidation = (zipValidation);

;// CONCATENATED MODULE: ./src/countryValidation.js


const countryValidation_select = document.querySelector("#country");

const selectListener = function listeningForChangeOnSelectInputToRunZipValidation() {
  src_zipValidation(event, countryValidation_select.value);
};

countryValidation_select.addEventListener("change", selectListener);



;// CONCATENATED MODULE: ./src/valueValidation.js
const inputs = document.querySelectorAll("input");

let valueValidation_isValid = false;

const checkValue = function checkForInputValue() {
  inputs.forEach((input) => {
    if (input.validity.valueMissing) {
      // eslint-disable-next-line no-param-reassign
      input.parentNode.querySelector(".error").textContent =
        "This field is required!";
      valueValidation_isValid = false;
    } else {
      valueValidation_isValid = true;
    }
  });
  return valueValidation_isValid;
};

/* harmony default export */ const valueValidation = (checkValue);

;// CONCATENATED MODULE: ./src/passwordValidation.js
const passwordValidation_password = document.querySelector("#password");
const passwordValidation_errorSpan = passwordValidation_password.parentNode.querySelector(".error");

let passwordValidation_isValid = false;

const passwordCheck = function passwordValidationCheck() {
  const testingRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (passwordValidation_password.value === "") return;
  if (!testingRegex.test(passwordValidation_password.value)) {
    passwordValidation_errorSpan.innerHTML = `Password must include: one upper case letter, </br> one lower case letter, one number, </br> one special character and minimum 8 characters.`;
    // errorSpan.style.bottom = `${(errorSpan.textContent === "This field is required!" ? "-20%" : "-60%")}`;
    passwordValidation_errorSpan.style.bottom = "-60%";
    passwordValidation_password.classList.add("error-invalid");
    passwordValidation_password.classList.remove("error-valid");
    passwordValidation_isValid = false;
  } else {
    passwordValidation_errorSpan.textContent = "";
    passwordValidation_password.classList.remove("error-invalid");
    passwordValidation_password.classList.add("error-valid");
    passwordValidation_isValid = true;
  }
  // eslint-disable-next-line consistent-return
  return passwordValidation_isValid;
};

passwordValidation_password.addEventListener("input", passwordCheck);



;// CONCATENATED MODULE: ./src/confirmPassword.js


const passwordConfirm = document.querySelector("#confirm-password");
const confirmPassword_errorSpan = passwordConfirm.parentNode.querySelector(".error");

let confirmPassword_isValid = false;

const confirmPassword_confirm = function confirmPassword() {
  if (passwordConfirm.value.length === 0) return;
  if (passwordValidation_password.value !== passwordConfirm.value) {
    confirmPassword_errorSpan.textContent = "Passwords do not match";
    passwordConfirm.classList.add("error-invalid");
    passwordConfirm.classList.remove("error-valid");
    confirmPassword_isValid = false;
  } else {
    confirmPassword_errorSpan.textContent = "";
    passwordConfirm.classList.remove("error-invalid");
    passwordConfirm.classList.add("error-valid");
    confirmPassword_isValid = true;
  }
  return confirmPassword_isValid;
};

passwordConfirm.addEventListener("input", confirmPassword_confirm);

/* harmony default export */ const confirmPassword = (confirmPassword_confirm);

;// CONCATENATED MODULE: ./src/viewPassword.js
const viewPassword_button = document.querySelectorAll(".view-password");

const viewPassword = function changeTypeOfTheInputElementFromPasswordToText() {
  if (this.previousElementSibling.type === "password") {
    this.previousElementSibling.type = "text";
  } else {
    this.previousElementSibling.type = "password";
  }
};



;// CONCATENATED MODULE: ./src/validation.js








const validation_form = document.querySelector("form");
const svg = document.querySelector(".svg");

const validation = function addSubmitEventToForm(e) {
  if (e.type === "submit") {
    e.preventDefault();
    if (
      valueValidation() &&
      emailValidation() &&
      src_zipValidation() &&
      passwordCheck() &&
      confirmPassword()
    ) {
      svg.classList.add("success-svg");
    }
  } else {
    emailValidation();
    selectListener();
    src_zipValidation();
    passwordCheck();
    confirmPassword();
  }
};

validation_form.addEventListener("submit", validation);
viewPassword_button.forEach((bttn) => bttn.addEventListener("click", viewPassword));

/* harmony default export */ const src_validation = (validation);

;// CONCATENATED MODULE: ./src/index.js



window.addEventListener("load", src_validation);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getApiData": () => (/* binding */ getApiData)
/* harmony export */ });
/* harmony import */ var _showData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const addLike = (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  })
    .then((response) => response.text())
    .then((json) => json);
};

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes');
  return response.json();
};

const showUI = async (data, iContain, itemCount) => {
  const likes = await getLikes();
  const storage = [];
  data.forEach((item) => {
    storage.push({
      ...(likes.find((innerItem) => innerItem.item_id.toString() === item.id.toString())),
      ...item,

    });
  });
  const itemContain = iContain;
  const iCount = itemCount;
  (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(storage.length, iCount);
  (0,_showData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemContain, storage);
};

const getApiData = (iContain, itemCount) => {
  fetch('http://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      showUI(data, iContain, itemCount);
    });
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showData = (itemContainer, storage) => {
  storage.sort((a, b) => a.id - b.id);
  storage.forEach((item) => {
    if (item.likes == null) {
      item.likes = 0;
    }
    if (item.id <= '10') {
      itemContainer.innerHTML += `<li class="item">
<img class="mov-post" src=${item.image.medium}>
<div class="mov-detail">
<p class="mov-name">${item.name}</p>
<div class="likes">
<h4 class="total-likes">${item.likes}</h4>
<i id=${item.id} class="fas fa-heart"></i>
</div>
</div>
<button type="button" class="comments">Comments</button>
</li>`;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showData);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = (totalItems, itemsCounter) => {
  itemsCounter.innerHTML = `Movies(${totalItems - 230})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 5 */
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
/* 6 */
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
  } // For old IE

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
/* 7 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  top: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.popup {\r\n  width: auto;\r\n  margin: 20px 100px;\r\n}\r\n\r\n.comment h3 {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n\r\n.submit-comment {\r\n  width: 80px;\r\n  height: 40px;\r\n  justify-self: end;\r\n  background-color: #fff;\r\n  box-shadow: 2px 2px #000;\r\n}\r\n\r\ninput {\r\n  height: 20px;\r\n  padding: 5px 10px;\r\n}\r\n\r\ntextarea {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n}\r\n\r\n.demo img{\r\n  width: 400px;\r\n  height: 200px;\r\n  margin: 20px 400px;\r\n}\r\n\r\n.close-btn {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  background-color: #fff;\r\n}\r\n\r\n.close-btn i {\r\n  font-size: x-large;\r\n}\r\n\r\n.comment-counter {\r\n  margin: 5px 350px;\r\n}\r\n\r\n.comment-counter h3 {\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.description h3 {\r\n   text-align: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 5px 350px;\r\n}\r\n\r\n  header {\r\n  background-color: rgb(248, 248, 248);\r\n  padding: 5px;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 40px;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-right: 100px;\r\n}\r\n\r\n.logo a {\r\n  padding: 5px 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.nav-items a {\r\n  margin: 0 15px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n#mov-count {\r\n  color: darkmagenta;\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 24px;\r\n  font-weight: 800;\r\n}\r\n\r\n.list-items {\r\n  margin: 40px auto;\r\n}\r\n\r\n.mov-detail {\r\n  display: flex;\r\n  margin: 20px 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.mov-post {\r\n  height: 420px;\r\n}\r\n\r\n.mov-name {\r\n  width: 300px;\r\n  font-weight: bolder;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.fa-heart {\r\n  margin-left: 5px;\r\n  font-size: 24px;\r\n  color: hotpink;\r\n  cursor: pointer;\r\n}\r\n\r\n.comments {\r\n  height: 40px;\r\n}\r\n\r\n.item {\r\n  margin-bottom: 30px;\r\n  padding: 20px;\r\n  background: whitesmoke;\r\n  width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: rosybrown;\r\n  height: 100px;\r\n  width: 90%;\r\n  margin: auto;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.footer-text {\r\n  font-weight: 600;\r\n  width: 250px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  header {\r\n    background-color: rgb(248, 248, 248);\r\n    padding: 5px;\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n\r\n  a {\r\n    text-decoration: none;\r\n    color: #000;\r\n  }\r\n\r\n  .nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0 40px;\r\n  }\r\n\r\n  .nav-items {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 100px;\r\n  }\r\n\r\n  .logo a {\r\n    padding: 5px 10px;\r\n    margin: 10px;\r\n  }\r\n\r\n  .nav-items a {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .listItems {\r\n    width: 95%;\r\n    margin: 40px auto;\r\n    text-align: center;\r\n  }\r\n\r\n  li {\r\n    list-style: none;\r\n  }\r\n\r\n  .mov-post {\r\n    width: 280px;\r\n    height: 420px;\r\n  }\r\n\r\n  .mov-name {\r\n    width: 300px;\r\n  }\r\n\r\n  .comments {\r\n    width: 90%;\r\n    height: 40px;\r\n  }\r\n\r\n  .item {\r\n    margin-bottom: 30px;\r\n    padding: 10px;\r\n    background: whitesmoke;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .list-items {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    width: 95%;\r\n    margin: 40px auto;\r\n  }\r\n\r\n  .comments {\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 13 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '/\"\"'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "// Imports\nimport ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ from \"../node_modules/html-loader/dist/runtime/getUrl.js\";\nvar ___HTML_LOADER_IMPORT_0___ = new URL(\"./assets/images/logo2.png\", import.meta.url);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(\"./images/demo.png\", import.meta.url);\n// Module\nvar " + ___HTML_LOADER_REPLACEMENT_0___ + " = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\\\">\\r\\n    <script\\r\\n      src=\\\"https://kit.fontawesome.com/fe6dec7cca.js\\\"\\r\\n      crossorigin=\\\"anonymous\\\"\\r\\n    ></script>\\r\\n    <title>Foodeez</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n    <header>\\r\\n        <div class=\\\"nav\\\">\\r\\n            <div class=\\\"logo\\\">\\r\\n                <a href=\\\"index.html\\\"><img src=" + ___HTML_LOADER_REPLACEMENT_0___ + " + " + ___HTML_LOADER_REPLACEMENT_0___ + " + \"\\\" alt=\\\"Logo\\\"></a>\\r\\n            </div>\\r\\n            <div class=\\\"nav-items\\\">\\r\\n                <a href=\\\"index.html\\\">Home</a>\\r\\n                <a href=\\\"#About\\\">About Us</a>\\r\\n                <a href=\\\"#contact\\\" class=\\\"reservation\\\">Contact Us</a>\\r\\n            </div>\\r\\n        </div>\\r\\n    </header>\\r\\n    <section>\\r\\n        <p id=\\\"mov-count\\\"></p>\\r\\n        <ul class=\\\"list-items\\\">\\r\\n\\r\\n        </ul>\\r\\n    </section>\\r\\n    <section class=\\\"popup\\\">\\r\\n        <div class=\\\"display\\\">\\r\\n            <div class=\\\"demo\\\">\\r\\n                <img src=" + ___HTML_LOADER_REPLACEMENT_0___ + " + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"Demo image\\\">\\r\\n                <button class=\\\"close-btn\\\"><i class=\\\"fa fa-times\\\" aria-hidden=\\\"true\\\"></i></button>\\r\\n            </div>\\r\\n            <div class=\\\"description\\\">\\r\\n                <h3>Title</h3>\\r\\n                <div class=\\\"list\\\">\\r\\n                    <ul class=\\\"first-list\\\">\\r\\n                        <li>Type: Food</li>\\r\\n                        <li>Type: Food</li>\\r\\n                        <li>Type: Food</li>\\r\\n                    </ul>\\r\\n                    <ul class=\\\"second-list\\\">\\r\\n                        <li>Type: Food</li>\\r\\n                        <li>Type: Food</li>\\r\\n                        <li>Type: Food</li>\\r\\n                    </ul>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"comment-counter\\\">\\r\\n                 <h3>Comments(2)</h3>\\r\\n                 <ul class=\\\"comments\\\">\\r\\n                     <li>2/1/2022 Alex: I would love it.</li>\\r\\n                     <li>3/1/2022 Tarik: I loved it.</li>\\r\\n                 </ul>\\r\\n            </div>\\r\\n        </div>\\r\\n     <section class=\\\"comment\\\">\\r\\n        <div class=\\\"add-comment\\\">\\r\\n            <h3>Add Comment</h3>\\r\\n        </div>\\r\\n        <form action=\\\"\\\" class=\\\"form\\\">\\r\\n            <input type=\\\"text\\\" name=\\\"name\\\" id=\\\"name\\\" placeholder=\\\"Your name\\\">\\r\\n            <textarea name=\\\"description\\\" id=\\\"description\\\" cols=\\\"30\\\" rows=\\\"10\\\" placeholder=\\\"Your insight\\\"></textarea>\\r\\n            <button class=\\\"submit-comment\\\">Comment</button>\\r\\n        </form>\\r\\n     </section>\\r\\n </section>\\r\\n    <footer>\\r\\n        <a href=\\\"index.html\\\"><img src=" + ___HTML_LOADER_REPLACEMENT_0___ + " + " + ___HTML_LOADER_REPLACEMENT_0___ + " + \"\\\" alt=\\\"Logo\\\"></a>\\r\\n        <p class=\\\"footer-text\\\">Created by Hammas & Tarikwa collaboratively.</p>\\r\\n    </footer>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\nexport default code;";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 15 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 			0: 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);




const itemContainer = document.querySelector('.list-items');
const itemCounter = document.getElementById('mov-count');

window.addEventListener('load', async () => {
  await (0,_components_api_js__WEBPACK_IMPORTED_MODULE_0__.getApiData)(itemContainer, itemCounter);
});

itemContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'I') {
    (0,_components_api_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(event.target.id);
    const likesContainer = event.target.parentNode.querySelector('.total-likes');
    const newVal = +likesContainer.innerHTML + 1;
    likesContainer.innerHTML = newVal;
  }
});

// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
// const id = 'IRmcCRWo9KSYZTxv7MqM'

// const registerNewApp = async () => {
//   const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'Foodeez',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const data = await response.text();
//   return data;
// };

// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes'

// const createApp = async () => {
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//       name: 'Foodeez'
//     })
//   })
//     .then((response) => response.text())
//     .then((json) =>json);
// };

// let a = 'RtogD48rFUxgVZ4q9xII';

})();

/******/ })()
;
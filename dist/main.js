/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countComment": () => (/* binding */ countComment),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
/* eslint-disable consistent-return */

const countComment = (json) => {
  if (json.length > 0) {
    return `Comments(<span class='comment-count-number'>${json.length}</span>)`;
  }
  // return '<li>No comments</li>';
};

const getComments = async (id, commentContainer, commentCounter) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/comments?item_id=${id}`, {})
    .then((response) => response.json())
    .then((json) => {
      if (json.length > 0) {
        json.forEach((item) => {
          commentContainer.innerHTML += `<li class="comment-item">${item.creation_date} ${item.username}: ${item.comment}</li>`;
        });
      }
      commentCounter.innerHTML = countComment(json);
    });
};

const postComment = (id, username, comment) => {
  const a = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: username.value,
      comment: comment.value,
    }),
    headers: {
      'Content-type': 'application/json, charset=UTF-8',
    },

  });
  return a.json();
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getApiData": () => (/* binding */ getApiData)
/* harmony export */ });
/* harmony import */ var _showData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



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
/* 3 */
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
<button type="button" id=${item.id} class="comments">Comments</button>
</li>`;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showData);

/***/ }),
/* 4 */
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
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showPop = (popupWindow, poster, name, id) => {
  popupWindow.innerHTML = `<div class="popup-card">
    <i class="fa fa-times popupCrossBtn" aria-hidden="true"></i>
    <div class="for-fullscreen">
        <div class="demo">
            <img src=${poster} alt="Demo image">
        </div>
        <div class="for-fullscreen-section-02">
            <div class="description">
                <h3 class="mov-title">${name}</h3>
            </div>
            <div class="comment-counter">
                <h3 class='comments-counter-hammas'></h3>
                <ul class="comments-contain">
            
                </ul>
            </div>
            <div class="comment">
                <div class="add-comment">
                    <h3>Add Comment</h3>
                </div>
                <form class="form">
                    <input type="text" name="name" id="name" class="input input1" placeholder="Your name">
                    <textarea name="description" id="description" class="input input2" cols="30" rows="10"
                        placeholder="Your insight"></textarea>
                    <button id=${id} type="submit" class="submit-comment input">Comment</button>
                </form>
            </div>
        </div>
    </div>
  </div>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPop);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  top: 0;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n}\n\nheader {\n  background-color: rgb(248, 248, 248);\n  padding: 5px;\n  width: 100%;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: #000;\n}\n\n.fa-bars {\n  display: block;\n  font-size: 24px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 40px;\n}\n\n.nav-items {\n  display: none;\n  justify-content: flex-end;\n  margin-right: 100px;\n}\n\n.logo a {\n  padding: 5px 10px;\n  margin: 10px;\n}\n\n.nav-items a {\n  margin: 0 15px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#mov-count {\n  color: darkmagenta;\n  text-align: center;\n  margin: 10px;\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.list-items {\n  margin: 40px auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.mov-detail {\n  display: flex;\n  margin: 20px 0;\n}\n\nli {\n  list-style: none;\n}\n\n.mov-post {\n  height: 420px;\n}\n\n.mov-name {\n  width: 300px;\n  font-weight: bolder;\n}\n\n.likes {\n  display: flex;\n  align-items: center;\n}\n\n.fa-heart {\n  margin-left: 5px;\n  font-size: 24px;\n  color: hotpink;\n  cursor: pointer;\n}\n\n.comments {\n  height: 40px;\n}\n\n.comments-contain {\n  height: 100px;\n  width: 300px;\n  overflow-y: scroll;\n}\n\n.item {\n  margin-bottom: 30px;\n  padding: 20px;\n  background: whitesmoke;\n  width: 270px;\n  display: flex;\n  flex-direction: column;\n}\n\n.popup {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  overflow: scroll;\n}\n\n.popup-card {\n  background-color: rgb(255, 96, 96);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  padding: 5px;\n  border-radius: 10px;\n  padding-bottom: 50px;\n  margin: 30px 0;\n}\n\n.fa-times {\n  align-self: end;\n  margin: 0 5px 20px 0;\n  font-size: 24px;\n}\n\n.demo,\n.demo img {\n  width: 280px;\n  height: 420px;\n}\n\n.demo {\n  border: 6px solid white;\n  border-radius: 5px;\n}\n\n.mov-title {\n  text-align: center;\n  margin: 15px 0;\n  font-size: 28px;\n}\n\n.comment-item {\n  padding: 20px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n.input {\n  margin-bottom: 5px;\n  border-radius: 5px;\n  border: none;\n  text-indent: 5px;\n}\n\n.input1 {\n  margin-top: 5px;\n  height: 40px;\n}\n\n.input2 {\n  padding-top: 7px;\n}\n\n.submit-comment {\n  height: 35px;\n}\n\nfooter {\n  display: flex;\n  background-color: rosybrown;\n  height: 100px;\n  width: 90%;\n  margin: auto;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.footer-text {\n  font-weight: 600;\n  width: 250px;\n}\n\n.for-fullscreen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n}\n\n@media screen and (min-width: 768px) {\n  .list-items {\n    flex-flow: row wrap;\n    width: 95%;\n    margin: 40px auto;\n  }\n\n  .comments {\n    width: 100%;\n  }\n\n  .for-fullscreen {\n    flex-direction: row;\n    justify-content: space-around;\n    width: 90%;\n  }\n\n  .fa-bars {\n    display: none;\n  }\n\n  .nav-items {\n    display: flex;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 14 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 15 */
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_likeApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* eslint-disable consistent-return */





const itemContainer = document.querySelector('.list-items');
const itemCounter = document.getElementById('mov-count');
const popupWindow = document.querySelector('.popup');

window.addEventListener('load', async () => {
  await (0,_components_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.getApiData)(itemContainer, itemCounter);
});

itemContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'I') {
    (0,_components_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.addLike)(event.target.id);
    const likesContainer = event.target.parentNode.querySelector('.total-likes');
    const newVal = +likesContainer.innerHTML + 1;
    likesContainer.innerHTML = newVal;
  } else if (event.target.tagName === 'BUTTON') {
    popupWindow.style.display = 'flex';
    const poster = event.target.parentNode.querySelector('.mov-post').src;
    const name = event.target.parentNode.querySelector('.mov-name').innerHTML;
    const {
      id,
    } = event.target;
    (0,_components_popup_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popupWindow, poster, name, id);
    const commentContainer = document.querySelector('.comments-contain');
    const commentCounter = document.querySelector('.comments-counter-hammas');
    (0,_components_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id, commentContainer, commentCounter);
    document.querySelector('.form').addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.querySelector('.input1');
      const comment = document.querySelector('.input2');
      (0,_components_comments_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(id, username, comment);
      const tComments = document.querySelector('.comment-count-number');
      const latestComment = +tComments.innerHTML + 1;
      tComments.innerHTML = latestComment;
      const data = new Date();
      const dateComment = `${data.getFullYear()}-0${data.getMonth()}-0${data.getDate()}`;
      commentContainer.innerHTML += `<li class="comment-item">${dateComment} ${username.value}: ${comment.value}</li>`;
      username.value = '';
      comment.value = '';
    });
    document.body.style.overflow = 'hidden';
  }
});

popupWindow.addEventListener('click', (event) => {
  if (event.target.tagName === 'I') {
    popupWindow.style.display = 'none';
    popupWindow.innerHTML = '';
    document.body.style.overflow = 'visible';
  }
});
})();

/******/ })()
;
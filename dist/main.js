/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* === Base Styles === */\r\nbody {\r\n    overflow-x: hidden;\r\n    font-family: Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #ffe0b1;\r\n}\r\n\r\n/* === Menu/Header === */\r\n.menu-container {\r\n    margin-bottom: 10%; /* Adjust as needed */\r\n    border: 1px solid black;\r\n    box-shadow: grey;\r\n}\r\n\r\n/* === Title === */\r\n.titleList, h1 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 600; /* or 400 for normal */\r\n    letter-spacing: 1px;\r\n}\r\n\r\n/* === Task Lists (Left Column) === */\r\n.left-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0;\r\n    border: 1px solid #ccc;\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    background: #fffbe6;\r\n    max-width: 400px;\r\n    margin: 0 20px 0 0;\r\n}\r\n\r\n.left-row {\r\n    padding: 16px;\r\n    border-bottom: 1px solid #c4aa00;\r\n    background: #fffde7;\r\n}\r\n.left-row:last-child {\r\n    border-bottom: none;\r\n}\r\n.left-column textarea {\r\n    background-color: transparent;\r\n    border: none;\r\n    resize: none;\r\n    width: 100%;\r\n    height: 70px;\r\n    font-family: 'Patrick Hand', cursive;\r\n    font-size: 1em;\r\n    color: #333;\r\n    outline: none;\r\n    padding: 0;\r\n}\r\n\r\n/* === Task List Items === */\r\n.task-lists ul {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 5px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    list-style: none;\r\n    max-width: 45vw;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    overflow-y: visible;\r\n}\r\n.task-lists li {\r\n    font-family: \"Electrolize\", sans-serif;\r\n    background-color: #ff8826;\r\n    border: 1px solid #fff700;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 6px rgb(41, 48, 255);\r\n}\r\n.bullet-list {\r\n    margin-top: 10px;\r\n    padding-left: 20px;\r\n}\r\n.bullet-list li {\r\n    font-family: 'Electrolize', sans-serif;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n/* === Buttons === */\r\n#menuButton {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    text-align: center;\r\n    font-family: 'Electrolize', sans-serif;\r\n    font-size: 20px;\r\n    background-color: #95a5ff;\r\n}\r\n.buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n/* === Main Layout === */\r\n.main-layout {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 32px;\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* === Right Column === */\r\n.right-column {\r\n    flex: 1 1 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    align-items: flex-start; /* Align children to the left */\r\n}\r\n\r\n/* === Notes Row (Inspo Thoughts & Small Musings) === */\r\n.notes-row {\r\n    font-size: 0.8em;\r\n    font-family: 'Electrolize', sans-serif;\r\n    display: flex;\r\n    gap: 10px;\r\n    justify-content: center;\r\n    margin-bottom: 5%;\r\n    margin-left: 0; /* or the same value for all, e.g., 40px */\r\n    max-width: 700px;\r\n    width: 100%;\r\n}\r\n.notes-row > div {\r\n    flex: 1 1 0;\r\n    max-width: 350px;\r\n}\r\n.notes-row textarea {\r\n    background-color: transparent;\r\n    font-family: \"Patrick Hand\", cursive;\r\n    font-size: 1em;\r\n}\r\n\r\n/* === Inspo Thoughts & Small Musings Textareas === */\r\n#inspoThoughts, #smallMusings {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    background-color: rgb(255, 255, 152);\r\n    border: 1px solid #c4aa00;\r\n    box-shadow: 0 3px 9px rgb(112, 77, 32);\r\n    border-bottom-right-radius: 15px;\r\n}\r\n\r\n/* === Week Blocks (Calendar Row) === */\r\n.week-blocks {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr); /* 4 columns, so 8 blocks = 2 rows */\r\n    gap: 10px; /* More space between blocks */\r\n    margin-left: 0; /* or the same value for all, e.g., 40px */\r\n    max-width: 700px;\r\n    width: 100%;\r\n    align-self: flex-start;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    border: #95a5ff solid 1px;\r\n    border-radius: 5px;\r\n    background-color: #fffde7;\r\n}\r\n.week-block {\r\n    background: #e3eaff;\r\n    border: 1px solid #95a5ff;\r\n    border-radius: 4px;\r\n    height: 180px; /* Even taller for writing */\r\n    min-width: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    padding: 10px;\r\n    font-family: 'Electrolize', sans-serif;\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n    box-shadow: 0 1px 4px rgba(41, 48, 255, 0.08);\r\n    position: relative;\r\n    width: 80%; /* Let grid control the width */\r\n}\r\n.week-block textarea {\r\n    background-color: transparent;\r\n    border: none;\r\n    resize: none;\r\n    width: 100%;\r\n    height: 120px; /* More space for writing */\r\n    font-family: 'Patrick Hand', cursive;\r\n    font-size: 1em;\r\n    color: #333;\r\n    outline: none;\r\n    padding: 0;\r\n    margin-top: 8px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* === Bottom Row (Grocery List & Assignments) === */\r\n.bottom-row {\r\n    display: flex;\r\n    gap: 20px;\r\n    margin-top: 25px;\r\n    margin-left: 0;\r\n    max-width: 1000px;   /* Make the row wider */\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.grocery-list, .assignments-list {\r\n    flex: 1 1 0;\r\n    background: #fffde7;\r\n    border: 1px solid #c4aa00;\r\n    border-radius: 8px;\r\n    padding: 16px;\r\n    box-sizing: border-box;\r\n    min-width: 0;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n.grocery-list textarea,\r\n.assignments-list textarea {\r\n    width: 100%;\r\n    height: 60px;      /* Less tall */\r\n    background: transparent;\r\n    border: none;\r\n    font-family: 'Patrick Hand', cursive;\r\n    font-size: 1em;    /* Restore readable size */\r\n    resize: none;\r\n    outline: none;\r\n    color: #333;\r\n    margin-top: 8px;\r\n}\r\n\r\n/* === Utility/Overrides === */\r\nh1, .titleList {\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 600; /* or 400 for normal */\r\n    letter-spacing: 1px;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 400;\r\n    letter-spacing: 0.5px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js",
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nconsole.log('To-Do List Project Initialized!');\n\n// Helper to save textarea content to localStorage\nfunction saveTextarea(id) {\n  var textarea = document.getElementById(id);\n  if (textarea) {\n    textarea.addEventListener('input', function () {\n      localStorage.setItem(id, textarea.value);\n    });\n    // Load saved content on page load\n    var saved = localStorage.getItem(id);\n    if (saved !== null) {\n      textarea.value = saved;\n    }\n  }\n}\n\n// List all your textarea IDs here\nvar textareaIds = ['inspoThoughts', 'smallMusings', 'task2Details', 'groceryListDetails', 'workLoadDetails', 'specialDatesDetails', 'miscListDetails'];\ntextareaIds.forEach(saveTextarea);\nfunction setupBulletInput(textareaId, listId) {\n  var textarea = document.getElementById(textareaId);\n  var list = document.getElementById(listId);\n\n  // Load saved items\n  var saved = JSON.parse(localStorage.getItem(listId) || \"[]\");\n  saved.forEach(function (item) {\n    return addBullet(list, item);\n  });\n  textarea.addEventListener('keydown', function (e) {\n    if (e.key === 'Enter' && !e.shiftKey) {\n      e.preventDefault();\n      var value = textarea.value.trim();\n      if (value) {\n        addBullet(list, value);\n        textarea.value = '';\n        // Save to localStorage\n        var items = Array.from(list.children).map(function (li) {\n          return li.textContent;\n        });\n        localStorage.setItem(listId, JSON.stringify(items));\n      }\n    }\n  });\n}\nfunction addBullet(list, text) {\n  var li = document.createElement('li');\n  li.textContent = text;\n  list.appendChild(li);\n}\n\n// Setup for each left row\nsetupBulletInput('leftRow1', 'leftRow1-list');\nsetupBulletInput('leftRow2', 'leftRow2-list');\nsetupBulletInput('leftRow3', 'leftRow3-list');\n\n//# sourceURL=webpack://todo-list/./src/index.js?",
        );

        /***/
      },

    /***/ "./src/styles.css":
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();

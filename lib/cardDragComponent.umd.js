(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cardDragComponent"] = factory();
	else
		root["cardDragComponent"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5373":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".d_cardBorderBox[data-v-14e5f87a]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;-webkit-transition:all .3s;transition:all .3s;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.d_cardBorderBox[data-v-14e5f87a],.d_cardInsideBox[data-v-14e5f87a]{display:-webkit-box;display:-ms-flexbox;display:flex}.d_cardInsideBox[data-v-14e5f87a]{border-radius:5px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.d_menuTitle[data-v-14e5f87a]{pointer-events:none}.d_topMenuBox[data-v-14e5f87a]{height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#838383;background-color:#fff;padding:0 15px}.d_moveBox[data-v-14e5f87a]{top:20px;left:20px;z-index:300;-webkit-transition:none;transition:none}.d_emptyContent[data-v-14e5f87a]{width:100%;height:100%;font-size:16px;color:#979797;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.d_transition[data-v-14e5f87a]{-webkit-transition:all .3s;transition:all .3s}", ""]);

// exports


/***/ }),

/***/ "67dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_drag_component_vue_vue_type_style_index_0_id_14e5f87a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("838a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_drag_component_vue_vue_type_style_index_0_id_14e5f87a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_drag_component_vue_vue_type_style_index_0_id_14e5f87a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_drag_component_vue_vue_type_style_index_0_id_14e5f87a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "838a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5373");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1b7be030", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c59a7c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-drag-component/src/card-drag-component.vue?vue&type=template&id=14e5f87a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({
      position:'relative',
      overflow: 'hidden',
      height:_vm.computeTop(_vm.data.length)+_vm.cardOutsideHeight+'px',
      width:_vm.cardOutsideWidth*_vm.colNum+'px'})},_vm._l((_vm.data),function(item){return _c('div',{key:item.id,staticClass:"d_cardBorderBox",style:({ 
        width:_vm.cardOutsideWidth+'px', 
        height:_vm.cardOutsideHeight+'px'
    }),attrs:{"id":item.id}},[_c('div',{staticClass:"d_cardInsideBox",style:({ 
          width:_vm.cardInsideWidth+'px',
          height:_vm.cardInsideHeight+'px'})},[_c('div',{staticClass:"d_topWrapBox",on:{"mousedown":function($event){return _vm.touchStart($event,item.id)}}},[_vm._t("header",[_c('div',{staticClass:"d_topMenuBox"},[(item.name)?_c('div',{staticClass:"d_menuTitle"},[_vm._v(_vm._s(item.name))]):_c('div',{staticClass:"d_menuTitle"},[_vm._v(" 默认标题 ")])])],{"item":item})],2),(item.componentData)?_c(item.componentData,{tag:"component",attrs:{"itemData":item}}):_vm._t("content",[_c('div',{staticClass:"d_emptyContent"},[_vm._v("\n          卡片暂无内容\n        ")])],{"item":item})],2)])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/card-drag-component/src/card-drag-component.vue?vue&type=template&id=14e5f87a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-drag-component/src/card-drag-component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var card_drag_componentvue_type_script_lang_js_ = ({
  name: "cardDragger",
  props:{
    data:{
      type:Array,
      default: function () {
        return []
      }
    },
    colNum:{
      type:Number,
      default:2
    },
    fontSize: {
      type: Number,
      default: 0,
    },
    outsideWidth:{
      type:Number,
      default:590      
    },
    outsideHeight:{
      type:Number,
      default:380      
    },
    insideWidth:{
      type:Number,
      default:560      
    },
    insideHeight:{
      type:Number,
      default:320      
    }
  },
  data: () => ({
    mousedownTimer: null,
    cardOutsideWidth: 0,
    cardOutsideHeight: 0,
    cardInsideWidth: 0,
    cardInsideHeight: 0
  }),
  created() {
    if (this.fontSize) {
      let fontSize = Number(document.getElementsByTagName('html')[0].style.fontSize.replace(/px/ig, ''))
      this.cardOutsideWidth = Math.ceil(this.outsideWidth * fontSize / this.fontSize)
      this.cardOutsideHeight = Math.ceil(this.outsideHeight * fontSize / this.fontSize)
      this.cardInsideWidth = Math.ceil(this.insideWidth * fontSize / this.fontSize)
      this.cardInsideHeight = Math.ceil(this.insideHeight * fontSize / this.fontSize)
      window.addEventListener('resize', this.init)
    } else {
       this.cardOutsideWidth = this.outsideWidth
       this.cardOutsideHeight = this.outsideHeight
       this.cardInsideWidth = this.insideWidth
       this.cardInsideHeight = this.insideHeight
    }
  },
  methods: {
    init() {
      let fontSize = Number(document.getElementsByTagName('html')[0].style.fontSize.replace(/px/ig, ''))
      this.cardOutsideWidth = Math.ceil(this.outsideWidth * fontSize / this.fontSize)
      this.cardOutsideHeight = Math.ceil(this.outsideHeight * fontSize / this.fontSize)
      this.cardInsideWidth = Math.ceil(this.insideWidth * fontSize / this.fontSize)
      this.cardInsideHeight = Math.ceil(this.insideHeight * fontSize / this.fontSize)
      this.addCardStyle()
    },
    touchStart(event, selectId) {
      if (this.mousedownTimer) {
        return false;
      }
      //若触发了点击事件，则返回一个暴露出一个方法
      this.$emit('startDrag',event,selectId)

      const that = this;
      let DectetTimer = null;

      let originTop = document.body.scrollTop === 0 ? document.documentElement.scrollTop : document.body.scrollTop;
      let scrolTop = originTop;
      //记录鼠标移动的距离
      let moveTop = 0;
      let moveLeft = 0;
      //起始组件位置
      let OriginObjPosition = {
        left: 0,
        top: 0,
        originNum: -1
      };
      // 起始鼠标信息
      let OriginMousePosition = {
        x: 0,
        y: 0
      };
      // 记录交换位置的号码
      let OldPositon = null;
      let NewPositon = null;
      // 选中的卡片的dom和数据
      let selectDom = document.getElementById(selectId);
      let selectMenuData = this.data.find(item => {
        return item.id === selectId;
      });

      OriginMousePosition.x = event.screenX;
      OriginMousePosition.y = event.screenY;

      selectDom.classList.add('d_moveBox')

      moveLeft = OriginObjPosition.left = parseInt(
        selectDom.style.left.slice(0, selectDom.style.left.length - 2)
      );
      moveTop = OriginObjPosition.top = parseInt(
        selectDom.style.top.slice(0, selectDom.style.top.length - 2)
      );
      
      document.addEventListener("mousemove", mouseMoveListener);
      document.addEventListener("mouseup", mouseUpListener);
      document.addEventListener("scroll", mouseScroll);
      
      function mouseMoveListener(event) {
        moveTop = OriginObjPosition.top + ( event.screenY - OriginMousePosition.y );
        moveLeft = OriginObjPosition.left + ( event.screenX - OriginMousePosition.x );

        document.querySelector(".d_moveBox").style.left = moveLeft + "px";
        document.querySelector(".d_moveBox").style.top = moveTop + (scrolTop - originTop) + "px";  //这里要加上滚动的高度

        if (!DectetTimer) {
          DectetTimer = setTimeout(()=>{
            cardDetect(moveTop + (scrolTop - originTop),moveLeft) 
            DectetTimer = null;
          }, 200);
        }     
      }

      function mouseScroll(event) {
        scrolTop =
          document.body.scrollTop === 0
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        document.querySelector(".d_moveBox").style.top = moveTop + scrolTop - originTop + "px";
      }

      function cardDetect(moveItemTop, moveItemLeft){
        //计算当前移动卡片，可以覆盖的号码位置
        let newWidthNum = Math.round((moveItemLeft/ that.cardOutsideWidth))+1
        let newHeightNum = Math.round((moveItemTop/ that.cardOutsideHeight))

        if(newHeightNum>(Math.ceil(that.data.length / that.colNum) - 1)||
          newHeightNum<0||
          newWidthNum<=0||
          newWidthNum>that.colNum){
          return false
        }

        const newPositionNum = (newWidthNum) + newHeightNum * that.colNum
        if(newPositionNum!==selectMenuData.positionNum){
          let newItem = that.data.find(item=>{
            return item.positionNum === newPositionNum
          })
          if( newItem ){
            swicthPosition(newItem, selectMenuData);
          }
        }      
      }

      function swicthPosition(newItem, originItem) {
        OldPositon = originItem.positionNum;
        NewPositon = newItem.positionNum;

        that.$emit('swicthPosition',OldPositon,NewPositon,originItem)

        //位置号码从小移动到大
        if (NewPositon > OldPositon) {
          let changeArray = [];
          //从小移动到大，那小的号码就会空出来，其余卡片应往前移动一位 
          //找出两个号码中间对应的卡片数据
          for (let i = OldPositon + 1; i <= NewPositon; i++) {
            let pushData = that.data.find(item => {
              return item.positionNum === i;
            });
            changeArray.push(pushData);
          }
          
          for (let item of changeArray) {
            //vue的$set使更改数据的同时实时刷新样式
            that.$set(item, "positionNum", item.positionNum - 1);
            document.querySelector('#'+item.id).style.top = that.computeTop(item.positionNum)+'px'
            document.querySelector('#'+item.id).style.left = that.computeLeft(item.positionNum)+'px'
          }
          that.$set(originItem, "positionNum", NewPositon);
        }

        //位置号码从大移动到小
        if (NewPositon < OldPositon) {
          let changeArray = [];
          //从大移动到小，那大的号码就会空出来，其余卡片应往后移动一位 
          //找出两个号码中间对应的卡片数据
          for (let i = OldPositon - 1; i >= NewPositon; i--) {
            let pushData = that.data.find(item => {
              return item.positionNum === i;
            });
            changeArray.push(pushData);
          }

          for (let item of changeArray) {
            that.$set(item, "positionNum", item.positionNum + 1);
            document.querySelector('#'+item.id).style.top = that.computeTop(item.positionNum)+'px'
            document.querySelector('#'+item.id).style.left = that.computeLeft(item.positionNum)+'px'
          }
          that.$set(originItem, "positionNum", NewPositon);

        }
      }

      function mouseUpListener() {
        //取消位于交换队列的检测事件、对位置进行最后一次检测
        clearTimeout(DectetTimer)
        DectetTimer = null
        cardDetect(moveTop + (scrolTop - originTop),moveLeft)

        document.querySelector(".d_moveBox").classList.add('d_transition');
        document.querySelector(".d_moveBox").style.top = that.computeTop(selectMenuData.positionNum) + "px";
        document.querySelector(".d_moveBox").style.left = that.computeLeft(selectMenuData.positionNum) + "px";
        that.$emit('finishDrag',OldPositon,NewPositon,selectMenuData)

        that.mousedownTimer = setTimeout(() => {
          /*用0.3秒来过渡
            mousedownTimer在一开始对点击事件进行了判断，若还在过渡则不能进行下一次点击
          */
          document.querySelector(".d_moveBox").classList.remove('d_transition')
          document.querySelector(".d_moveBox").classList.remove('d_moveBox')
          clearTimeout(that.mousedownTimer);
          that.mousedownTimer = null;
        }, 300);
    
        document.removeEventListener("mousemove", mouseMoveListener);
        document.removeEventListener("mouseup", mouseUpListener);
        document.removeEventListener("scroll", mouseScroll);
      }
    },
    computeLeft(num) {
      return (num-1) % this.colNum * this.cardOutsideWidth;
    },
    computeTop(num) {
      return (Math.ceil(num / this.colNum) - 1) * this.cardOutsideHeight;
    },
    addCardStyle(){
      this.$nextTick(()=>{
        this.data.forEach(item=>{
          document.querySelector('#'+item.id).style.top = this.computeTop(item.positionNum)+'px'
          document.querySelector('#'+item.id).style.left = this.computeLeft(item.positionNum)+'px'
        })
      })
    }
  },
  watch:{
    data:{
      handler:function(){
        this.addCardStyle()     
      },
      immediate: true
    }
  }
});

// CONCATENATED MODULE: ./packages/card-drag-component/src/card-drag-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_card_drag_componentvue_type_script_lang_js_ = (card_drag_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/card-drag-component/src/card-drag-component.vue?vue&type=style&index=0&id=14e5f87a&scoped=true&lang=css&
var card_drag_componentvue_type_style_index_0_id_14e5f87a_scoped_true_lang_css_ = __webpack_require__("67dc");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/card-drag-component/src/card-drag-component.vue






/* normalize component */

var component = normalizeComponent(
  src_card_drag_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "14e5f87a",
  null
  
)

/* harmony default export */ var card_drag_component = (component.exports);
// CONCATENATED MODULE: ./packages/card-drag-component/index.js

// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
card_drag_component.install = function (Vue) {
  Vue.component(card_drag_component.name, card_drag_component)
}

// 默认导出组件
/* harmony default export */ var packages_card_drag_component = (card_drag_component);

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


const CardDragComponent = packages_card_drag_component

// 存储组件列表
const components = [
  CardDragComponent
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const installCardDragComponent = function (Vue) {
  // 判断是否安装
  if (installCardDragComponent.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport CardDragComponent */__webpack_require__.d(__webpack_exports__, "CardDragComponent", function() { return CardDragComponent; });
/* concated harmony reexport installCardDragComponent */__webpack_require__.d(__webpack_exports__, "installCardDragComponent", function() { return installCardDragComponent; });




/***/ })

/******/ });
});
//# sourceMappingURL=cardDragComponent.umd.js.map
module.exports =
/******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__ (moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if (installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		}
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
      /******/ 		if (!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/ 		}
      /******/ 	}
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
      /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true })
      /******/ 	}
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
      /******/ 		if (mode & 1) value = __webpack_require__(value)
      /******/ 		if (mode & 8) return value
      /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
      /******/ 		var ns = Object.create(null)
      /******/ 		__webpack_require__.r(ns)
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key] }.bind(null, key))
      /******/ 		return ns
      /******/ 	}
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
      /******/ 		var getter = module && module.__esModule
      /******/ 			? function getDefault () { return module['default'] }
      /******/ 			: function getModuleExports () { return module }
      /******/ 		__webpack_require__.d(getter, 'a', getter)
      /******/ 		return getter
      /******/ 	}
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = ''
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 'fb15')
    /******/ })
  /************************************************************************/
  /******/ ({

    /***/ '001c':
    /***/ function (module, exports) {
      function _isPlaceholder (a) {
        return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true
      }
      module.exports = _isPlaceholder
      /***/ },

    /***/ '00b3':
    /***/ function (module, exports) {
      function _arity (n, fn) {
        /* eslint-disable no-unused-vars */
        switch (n) {
          case 0:
            return function () {
              return fn.apply(this, arguments)
            }
          case 1:
            return function (a0) {
              return fn.apply(this, arguments)
            }
          case 2:
            return function (a0, a1) {
              return fn.apply(this, arguments)
            }
          case 3:
            return function (a0, a1, a2) {
              return fn.apply(this, arguments)
            }
          case 4:
            return function (a0, a1, a2, a3) {
              return fn.apply(this, arguments)
            }
          case 5:
            return function (a0, a1, a2, a3, a4) {
              return fn.apply(this, arguments)
            }
          case 6:
            return function (a0, a1, a2, a3, a4, a5) {
              return fn.apply(this, arguments)
            }
          case 7:
            return function (a0, a1, a2, a3, a4, a5, a6) {
              return fn.apply(this, arguments)
            }
          case 8:
            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
              return fn.apply(this, arguments)
            }
          case 9:
            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
              return fn.apply(this, arguments)
            }
          case 10:
            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
              return fn.apply(this, arguments)
            }
          default:
            throw new Error('First argument to _arity must be a non-negative integer no greater than ten')
        }
      }
      module.exports = _arity
      /***/ },

    /***/ '01f9':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var LIBRARY = __webpack_require__('2d00')
      var $export = __webpack_require__('5ca1')
      var redefine = __webpack_require__('2aba')
      var hide = __webpack_require__('32e9')
      var Iterators = __webpack_require__('84f2')
      var $iterCreate = __webpack_require__('41a0')
      var setToStringTag = __webpack_require__('7f20')
      var getPrototypeOf = __webpack_require__('38fd')
      var ITERATOR = __webpack_require__('2b4c')('iterator')
      var BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
      var FF_ITERATOR = '@@iterator'
      var KEYS = 'keys'
      var VALUES = 'values'

      var returnThis = function () { return this }

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next)
        var getMethod = function (kind) {
          if (!BUGGY && kind in proto) return proto[kind]
          switch (kind) {
            case KEYS: return function keys () { return new Constructor(this, kind) }
            case VALUES: return function values () { return new Constructor(this, kind) }
          } return function entries () { return new Constructor(this, kind) }
        }
        var TAG = NAME + ' Iterator'
        var DEF_VALUES = DEFAULT == VALUES
        var VALUES_BUG = false
        var proto = Base.prototype
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
        var $default = $native || getMethod(DEFAULT)
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native
        var methods, key, IteratorPrototype
        // Fix native
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))
          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true)
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] !== 'function') hide(IteratorPrototype, ITERATOR, returnThis)
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true
          $default = function values () { return $native.call(this) }
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default)
        }
        // Plug for library
        Iterators[NAME] = $default
        Iterators[TAG] = returnThis
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          }
          if (FORCED) {
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key])
            }
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods)
        }
        return methods
      }
      /***/ },

    /***/ '02ff':
    /***/ function (module, exports) {
      function _has (prop, obj) {
        return Object.prototype.hasOwnProperty.call(obj, prop)
      }
      module.exports = _has
      /***/ },

    /***/ '0a49':
    /***/ function (module, exports, __webpack_require__) {
      // 0 -> Array#forEach
      // 1 -> Array#map
      // 2 -> Array#filter
      // 3 -> Array#some
      // 4 -> Array#every
      // 5 -> Array#find
      // 6 -> Array#findIndex
      var ctx = __webpack_require__('9b43')
      var IObject = __webpack_require__('626a')
      var toObject = __webpack_require__('4bf8')
      var toLength = __webpack_require__('9def')
      var asc = __webpack_require__('cd1c')
      module.exports = function (TYPE, $create) {
        var IS_MAP = TYPE == 1
        var IS_FILTER = TYPE == 2
        var IS_SOME = TYPE == 3
        var IS_EVERY = TYPE == 4
        var IS_FIND_INDEX = TYPE == 6
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
        var create = $create || asc
        return function ($this, callbackfn, that) {
          var O = toObject($this)
          var self = IObject(O)
          var f = ctx(callbackfn, that, 3)
          var length = toLength(self.length)
          var index = 0
          var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
          var val, res
          for (;length > index; index++) {
            if (NO_HOLES || index in self) {
              val = self[index]
              res = f(val, index, O)
              if (TYPE) {
                if (IS_MAP) result[index] = res // map
                else if (res) {
                  switch (TYPE) {
                    case 3: return true // some
                    case 5: return val // find
                    case 6: return index // findIndex
                    case 2: result.push(val) // filter
                  }
                } else if (IS_EVERY) return false // every
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result
        }
      }
      /***/ },

    /***/ '0d58':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__('ce10')
      var enumBugKeys = __webpack_require__('e11e')

      module.exports = Object.keys || function keys (O) {
        return $keys(O, enumBugKeys)
      }
      /***/ },

    /***/ '0e30':
    /***/ function (module, exports, __webpack_require__) {
      var _curry1 = /* #__PURE__ */__webpack_require__('70ea')

      var _curry2 = /* #__PURE__ */__webpack_require__('5a7c')

      var _isPlaceholder = /* #__PURE__ */__webpack_require__('001c')

      /**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

      function _curry3 (fn) {
        return function f3 (a, b, c) {
          switch (arguments.length) {
            case 0:
              return f3
            case 1:
              return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
                return fn(a, _b, _c)
              })
            case 2:
              return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
                return fn(_a, b, _c)
              }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
                return fn(a, _b, _c)
              }) : _curry1(function (_c) {
                return fn(a, b, _c)
              })
            default:
              return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
                return fn(_a, _b, c)
              }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
                return fn(_a, b, _c)
              }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
                return fn(a, _b, _c)
              }) : _isPlaceholder(a) ? _curry1(function (_a) {
                return fn(_a, b, c)
              }) : _isPlaceholder(b) ? _curry1(function (_b) {
                return fn(a, _b, c)
              }) : _isPlaceholder(c) ? _curry1(function (_c) {
                return fn(a, b, _c)
              }) : fn(a, b, c)
          }
        }
      }
      module.exports = _curry3
      /***/ },

    /***/ '0e7d':
    /***/ function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ },

    /***/ '102a':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('3d6a')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__)
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a)
      /***/ },

    /***/ '1169':
    /***/ function (module, exports, __webpack_require__) {
      // 7.2.2 IsArray(argument)
      var cof = __webpack_require__('2d95')
      module.exports = Array.isArray || function isArray (arg) {
        return cof(arg) == 'Array'
      }
      /***/ },

    /***/ '1324':
    /***/ function (module, exports, __webpack_require__) {
      var _curry2 = /* #__PURE__ */__webpack_require__('5a7c')

      var _dispatchable = /* #__PURE__ */__webpack_require__('f601')

      var _map = /* #__PURE__ */__webpack_require__('53fb')

      var _reduce = /* #__PURE__ */__webpack_require__('c101')

      var _xmap = /* #__PURE__ */__webpack_require__('a58e')

      var curryN = /* #__PURE__ */__webpack_require__('64eb')

      var keys = /* #__PURE__ */__webpack_require__('edee')

      /**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */

      var map = /* #__PURE__ */_curry2(/* #__PURE__ */_dispatchable(['fantasy-land/map', 'map'], _xmap, function map (fn, functor) {
        switch (Object.prototype.toString.call(functor)) {
          case '[object Function]':
            return curryN(functor.length, function () {
              return fn.call(this, functor.apply(this, arguments))
            })
          case '[object Object]':
            return _reduce(function (acc, key) {
              acc[key] = fn(functor[key])
              return acc
            }, {}, keys(functor))
          default:
            return _map(fn, functor)
        }
      }))
      module.exports = map
      /***/ },

    /***/ '1495':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc')
      var anObject = __webpack_require__('cb7c')
      var getKeys = __webpack_require__('0d58')

      module.exports = __webpack_require__('9e1e') ? Object.defineProperties : function defineProperties (O, Properties) {
        anObject(O)
        var keys = getKeys(Properties)
        var length = keys.length
        var i = 0
        var P
        while (length > i) dP.f(O, P = keys[i++], Properties[P])
        return O
      }
      /***/ },

    /***/ '1772':
    /***/ function (module, exports) {
      function _isString (x) {
        return Object.prototype.toString.call(x) === '[object String]'
      }
      module.exports = _isString
      /***/ },

    /***/ '1ab0':
    /***/ function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ },

    /***/ '1eb2':
    /***/ function (module, exports, __webpack_require__) {
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        var i
        if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
        }
      }
      /***/ },

    /***/ '230e':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      var document = __webpack_require__('7726').document
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement)
      module.exports = function (it) {
        return is ? document.createElement(it) : {}
      }
      /***/ },

    /***/ '2aba':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('7726')
      var hide = __webpack_require__('32e9')
      var has = __webpack_require__('69a8')
      var SRC = __webpack_require__('ca5a')('src')
      var TO_STRING = 'toString'
      var $toString = Function[TO_STRING]
      var TPL = ('' + $toString).split(TO_STRING)

      __webpack_require__('8378').inspectSource = function (it) {
        return $toString.call(it)
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val === 'function'
        if (isFunction) has(val, 'name') || hide(val, 'name', key)
        if (O[key] === val) return
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)))
        if (O === global) {
          O[key] = val
        } else if (!safe) {
          delete O[key]
          hide(O, key, val)
        } else if (O[key]) {
          O[key] = val
        } else {
          hide(O, key, val)
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString () {
        return typeof this === 'function' && this[SRC] || $toString.call(this)
      })
      /***/ },

    /***/ '2aeb':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__('cb7c')
      var dPs = __webpack_require__('1495')
      var enumBugKeys = __webpack_require__('e11e')
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')
      var Empty = function () { /* empty */ }
      var PROTOTYPE = 'prototype'

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__('230e')('iframe')
        var i = enumBugKeys.length
        var lt = '<'
        var gt = '>'
        var iframeDocument
        iframe.style.display = 'none'
        __webpack_require__('fab2').appendChild(iframe)
        iframe.src = 'javascript:' // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document
        iframeDocument.open()
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt)
        iframeDocument.close()
        createDict = iframeDocument.F
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
        return createDict()
      }

      module.exports = Object.create || function create (O, Properties) {
        var result
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O)
          result = new Empty()
          Empty[PROTOTYPE] = null
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O
        } else result = createDict()
        return Properties === undefined ? result : dPs(result, Properties)
      }
      /***/ },

    /***/ '2b4c':
    /***/ function (module, exports, __webpack_require__) {
      var store = __webpack_require__('5537')('wks')
      var uid = __webpack_require__('ca5a')
      var Symbol = __webpack_require__('7726').Symbol
      var USE_SYMBOL = typeof Symbol === 'function'

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
      }

      $exports.store = store
      /***/ },

    /***/ '2cf0':
    /***/ function (module, exports) {
      var XWrap = /* #__PURE__ */(function () {
        function XWrap (fn) {
          this.f = fn
        }
        XWrap.prototype['@@transducer/init'] = function () {
          throw new Error('init not implemented on XWrap')
        }
        XWrap.prototype['@@transducer/result'] = function (acc) {
          return acc
        }
        XWrap.prototype['@@transducer/step'] = function (acc, x) {
          return this.f(acc, x)
        }

        return XWrap
      }())

      function _xwrap (fn) {
        return new XWrap(fn)
      }
      module.exports = _xwrap
      /***/ },

    /***/ '2d00':
    /***/ function (module, exports) {
      module.exports = false
      /***/ },

    /***/ '2d95':
    /***/ function (module, exports) {
      var toString = {}.toString

      module.exports = function (it) {
        return toString.call(it).slice(8, -1)
      }
      /***/ },

    /***/ '32e9':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc')
      var createDesc = __webpack_require__('4630')
      module.exports = __webpack_require__('9e1e') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value))
      } : function (object, key, value) {
        object[key] = value
        return object
      }
      /***/ },

    /***/ '38fd':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = __webpack_require__('69a8')
      var toObject = __webpack_require__('4bf8')
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')
      var ObjectProto = Object.prototype

      module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O)
        if (has(O, IE_PROTO)) return O[IE_PROTO]
        if (typeof O.constructor === 'function' && O instanceof O.constructor) {
          return O.constructor.prototype
        } return O instanceof Object ? ObjectProto : null
      }
      /***/ },

    /***/ '3d6a':
    /***/ function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ },

    /***/ '41a0':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var create = __webpack_require__('2aeb')
      var descriptor = __webpack_require__('4630')
      var setToStringTag = __webpack_require__('7f20')
      var IteratorPrototype = {}

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      __webpack_require__('32e9')(IteratorPrototype, __webpack_require__('2b4c')('iterator'), function () { return this })

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) })
        setToStringTag(Constructor, NAME + ' Iterator')
      }
      /***/ },

    /***/ '4588':
    /***/ function (module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil
      var floor = Math.floor
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
      }
      /***/ },

    /***/ '4630':
    /***/ function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        }
      }
      /***/ },

    /***/ '48af':
    /***/ function (module, exports, __webpack_require__) {
      var _curry3 = /* #__PURE__ */__webpack_require__('0e30')

      var _reduce = /* #__PURE__ */__webpack_require__('c101')

      /**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */

      var reduce = /* #__PURE__ */_curry3(_reduce)
      module.exports = reduce
      /***/ },

    /***/ '4bf8':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__('be13')
      module.exports = function (it) {
        return Object(defined(it))
      }
      /***/ },

    /***/ '504c':
    /***/ function (module, exports, __webpack_require__) {
      var getKeys = __webpack_require__('0d58')
      var toIObject = __webpack_require__('6821')
      var isEnum = __webpack_require__('52a7').f
      module.exports = function (isEntries) {
        return function (it) {
          var O = toIObject(it)
          var keys = getKeys(O)
          var length = keys.length
          var i = 0
          var result = []
          var key
          while (length > i) {
            if (isEnum.call(O, key = keys[i++])) {
              result.push(isEntries ? [key, O[key]] : O[key])
            }
          } return result
        }
      }
      /***/ },

    /***/ '52a7':
    /***/ function (module, exports) {
      exports.f = {}.propertyIsEnumerable
      /***/ },

    /***/ '53fb':
    /***/ function (module, exports) {
      function _map (fn, functor) {
        var idx = 0
        var len = functor.length
        var result = Array(len)
        while (idx < len) {
          result[idx] = fn(functor[idx])
          idx += 1
        }
        return result
      }
      module.exports = _map
      /***/ },

    /***/ '5537':
    /***/ function (module, exports, __webpack_require__) {
      var core = __webpack_require__('8378')
      var global = __webpack_require__('7726')
      var SHARED = '__core-js_shared__'
      var store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {})
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__('2d00') ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
      })
      /***/ },

    /***/ '5a7c':
    /***/ function (module, exports, __webpack_require__) {
      var _curry1 = /* #__PURE__ */__webpack_require__('70ea')

      var _isPlaceholder = /* #__PURE__ */__webpack_require__('001c')

      /**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

      function _curry2 (fn) {
        return function f2 (a, b) {
          switch (arguments.length) {
            case 0:
              return f2
            case 1:
              return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
                return fn(a, _b)
              })
            default:
              return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
                return fn(_a, b)
              }) : _isPlaceholder(b) ? _curry1(function (_b) {
                return fn(a, _b)
              }) : fn(a, b)
          }
        }
      }
      module.exports = _curry2
      /***/ },

    /***/ '5ca1':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('7726')
      var core = __webpack_require__('8378')
      var hide = __webpack_require__('32e9')
      var redefine = __webpack_require__('2aba')
      var ctx = __webpack_require__('9b43')
      var PROTOTYPE = 'prototype'

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F
        var IS_GLOBAL = type & $export.G
        var IS_STATIC = type & $export.S
        var IS_PROTO = type & $export.P
        var IS_BIND = type & $export.B
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
        var key, own, out, exp
        if (IS_GLOBAL) source = name
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined
          // export native or passed
          out = (own ? target : source)[key]
          // bind timers to global for call from export context
          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out
          // extend global
          if (target) redefine(target, key, out, type & $export.U)
          // export
          if (exports[key] != out) hide(exports, key, exp)
          if (IS_PROTO && expProto[key] != out) expProto[key] = out
        }
      }
      global.core = core
      // type bitmap
      $export.F = 1 // forced
      $export.G = 2 // global
      $export.S = 4 // static
      $export.P = 8 // proto
      $export.B = 16 // bind
      $export.W = 32 // wrap
      $export.U = 64 // safe
      $export.R = 128 // real proto method for `library`
      module.exports = $export
      /***/ },

    /***/ '613b':
    /***/ function (module, exports, __webpack_require__) {
      var shared = __webpack_require__('5537')('keys')
      var uid = __webpack_require__('ca5a')
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key))
      }
      /***/ },

    /***/ '626a':
    /***/ function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__('2d95')
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it)
      }
      /***/ },

    /***/ '64eb':
    /***/ function (module, exports, __webpack_require__) {
      var _arity = /* #__PURE__ */__webpack_require__('00b3')

      var _curry1 = /* #__PURE__ */__webpack_require__('70ea')

      var _curry2 = /* #__PURE__ */__webpack_require__('5a7c')

      var _curryN = /* #__PURE__ */__webpack_require__('afc2')

      /**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */

      var curryN = /* #__PURE__ */_curry2(function curryN (length, fn) {
        if (length === 1) {
          return _curry1(fn)
        }
        return _arity(length, _curryN(length, [], fn))
      })
      module.exports = curryN
      /***/ },

    /***/ '6821':
    /***/ function (module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__('626a')
      var defined = __webpack_require__('be13')
      module.exports = function (it) {
        return IObject(defined(it))
      }
      /***/ },

    /***/ '69a8':
    /***/ function (module, exports) {
      var hasOwnProperty = {}.hasOwnProperty
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key)
      }
      /***/ },

    /***/ '6a99':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__('d3f4')
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it
        var fn, val
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        throw TypeError("Can't convert object to primitive value")
      }
      /***/ },

    /***/ '6ff5':
    /***/ function (module, exports, __webpack_require__) {
      var _checkForMethod = /* #__PURE__ */__webpack_require__('fd46')

      var _curry3 = /* #__PURE__ */__webpack_require__('0e30')

      /**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */

      var slice = /* #__PURE__ */_curry3(/* #__PURE__ */_checkForMethod('slice', function slice (fromIndex, toIndex, list) {
        return Array.prototype.slice.call(list, fromIndex, toIndex)
      }))
      module.exports = slice
      /***/ },

    /***/ '70ea':
    /***/ function (module, exports, __webpack_require__) {
      var _isPlaceholder = /* #__PURE__ */__webpack_require__('001c')

      /**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

      function _curry1 (fn) {
        return function f1 (a) {
          if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1
          } else {
            return fn.apply(this, arguments)
          }
        }
      }
      module.exports = _curry1
      /***/ },

    /***/ '7514':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
      var $export = __webpack_require__('5ca1')
      var $find = __webpack_require__('0a49')(5)
      var KEY = 'find'
      var forced = true
      // Shouldn't skip holes
      if (KEY in []) Array(1)[KEY](function () { forced = false })
      $export($export.P + $export.F * forced, 'Array', {
        find: function find (callbackfn /* , that = undefined */) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
        }
      })
      __webpack_require__('9c6c')(KEY)
      /***/ },

    /***/ '7726':
    /***/ function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
          : Function('return this')()
      if (typeof __g === 'number') __g = global // eslint-disable-line no-undef
      /***/ },

    /***/ '77f1':
    /***/ function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('4588')
      var max = Math.max
      var min = Math.min
      module.exports = function (index, length) {
        index = toInteger(index)
        return index < 0 ? max(index + length, 0) : min(index, length)
      }
      /***/ },

    /***/ '785b':
    /***/ function (module, exports, __webpack_require__) {
      var _isArrayLike = /* #__PURE__ */__webpack_require__('97ba')

      /**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */

      function _makeFlat (recursive) {
        return function flatt (list) {
          var value, jlen, j
          var result = []
          var idx = 0
          var ilen = list.length

          while (idx < ilen) {
            if (_isArrayLike(list[idx])) {
              value = recursive ? flatt(list[idx]) : list[idx]
              j = 0
              jlen = value.length
              while (j < jlen) {
                result[result.length] = value[j]
                j += 1
              }
            } else {
              result[result.length] = list[idx]
            }
            idx += 1
          }
          return result
        }
      }
      module.exports = _makeFlat
      /***/ },

    /***/ '79e5':
    /***/ function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec()
        } catch (e) {
          return true
        }
      }
      /***/ },

    /***/ '7f20':
    /***/ function (module, exports, __webpack_require__) {
      var def = __webpack_require__('86cc').f
      var has = __webpack_require__('69a8')
      var TAG = __webpack_require__('2b4c')('toStringTag')

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag })
      }
      /***/ },

    /***/ '8088':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_vue_vue_type_style_index_0_id_533bc66e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('9780')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_vue_vue_type_style_index_0_id_533bc66e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_vue_vue_type_style_index_0_id_533bc66e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radio_vue_vue_type_style_index_0_id_533bc66e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a)
      /***/ },

    /***/ '8378':
    /***/ function (module, exports) {
      var core = module.exports = { version: '2.5.7' }
      if (typeof __e === 'number') __e = core // eslint-disable-line no-undef
      /***/ },

    /***/ '84eb':
    /***/ function (module, exports) {
      /**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
      module.exports = Array.isArray || function _isArray (val) {
        return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]'
      }
      /***/ },

    /***/ '84f2':
    /***/ function (module, exports) {
      module.exports = {}
      /***/ },

    /***/ '8615':
    /***/ function (module, exports, __webpack_require__) {
      // https://github.com/tc39/proposal-object-values-entries
      var $export = __webpack_require__('5ca1')
      var $values = __webpack_require__('504c')(false)

      $export($export.S, 'Object', {
        values: function values (it) {
          return $values(it)
        }
      })
      /***/ },

    /***/ '86cc':
    /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('cb7c')
      var IE8_DOM_DEFINE = __webpack_require__('c69a')
      var toPrimitive = __webpack_require__('6a99')
      var dP = Object.defineProperty

      exports.f = __webpack_require__('9e1e') ? Object.defineProperty : function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPrimitive(P, true)
        anObject(Attributes)
        if (IE8_DOM_DEFINE) {
          try {
            return dP(O, P, Attributes)
          } catch (e) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!')
        if ('value' in Attributes) O[P] = Attributes.value
        return O
      }
      /***/ },

    /***/ '96cf':
    /***/ function (module, exports) {
      /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

      !(function (global) {
        'use strict'

        var Op = Object.prototype
        var hasOwn = Op.hasOwnProperty
        var undefined // More compressible than void 0.
        var $Symbol = typeof Symbol === 'function' ? Symbol : {}
        var iteratorSymbol = $Symbol.iterator || '@@iterator'
        var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator'
        var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'

        var inModule = typeof module === 'object'
        var runtime = global.regeneratorRuntime
        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime
          }
          // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.
          return
        }

        // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.
        runtime = global.regeneratorRuntime = inModule ? module.exports : {}

        function wrap (innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator
          var generator = Object.create(protoGenerator.prototype)
          var context = new Context(tryLocsList || [])

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context)

          return generator
        }
        runtime.wrap = wrap

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch (fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) }
          } catch (err) {
            return { type: 'throw', arg: err }
          }
        }

        var GenStateSuspendedStart = 'suspendedStart'
        var GenStateSuspendedYield = 'suspendedYield'
        var GenStateExecuting = 'executing'
        var GenStateCompleted = 'completed'

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {}

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator () {}
        function GeneratorFunction () {}
        function GeneratorFunctionPrototype () {}

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {}
        IteratorPrototype[iteratorSymbol] = function () {
          return this
        }

        var getProto = Object.getPrototypeOf
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])))
        if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype
        }

        var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype)
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype
        GeneratorFunctionPrototype.constructor = GeneratorFunction
        GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = 'GeneratorFunction'

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods (prototype) {
          ['next', 'throw', 'return'].forEach(function (method) {
            prototype[method] = function (arg) {
              return this._invoke(method, arg)
            }
          })
        }

        runtime.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === 'function' && genFun.constructor
          return ctor
            ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === 'GeneratorFunction'
            : false
        }

        runtime.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype
            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = 'GeneratorFunction'
            }
          }
          genFun.prototype = Object.create(Gp)
          return genFun
        }

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        runtime.awrap = function (arg) {
          return { __await: arg }
        }

        function AsyncIterator (generator) {
          function invoke (method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg)
            if (record.type === 'throw') {
              reject(record.arg)
            } else {
              var result = record.arg
              var value = result.value
              if (value &&
            typeof value === 'object' &&
            hasOwn.call(value, '__await')) {
                return Promise.resolve(value.__await).then(function (value) {
                  invoke('next', value, resolve, reject)
                }, function (err) {
                  invoke('throw', err, resolve, reject)
                })
              }

              return Promise.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration. If the Promise is rejected, however, the
                // result for this iteration will be rejected with the same
                // reason. Note that rejections of yielded Promises are not
                // thrown back into the generator function, as is the case
                // when an awaited Promise is rejected. This difference in
                // behavior between yield and await is important, because it
                // allows the consumer to decide what to do with the yielded
                // rejection (swallow it and continue, manually .throw it back
                // into the generator, abandon iteration, whatever). With
                // await, by contrast, there is no opportunity to examine the
                // rejection reason outside the generator function, so the
                // only option is to throw it from the await expression, and
                // let the generator function handle the exception.
                result.value = unwrapped
                resolve(result)
              }, reject)
            }
          }

          var previousPromise

          function enqueue (method, arg) {
            function callInvokeWithMethodAndArg () {
              return new Promise(function (resolve, reject) {
                invoke(method, arg, resolve, reject)
              })
            }

            return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg()
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue
        }

        defineIteratorMethods(AsyncIterator.prototype)
        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this
        }
        runtime.AsyncIterator = AsyncIterator

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        runtime.async = function (innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList)
          )

          return runtime.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
              return result.done ? result.value : iter.next()
            })
        }

        function makeInvokeMethod (innerFn, self, context) {
          var state = GenStateSuspendedStart

          return function invoke (method, arg) {
            if (state === GenStateExecuting) {
              throw new Error('Generator is already running')
            }

            if (state === GenStateCompleted) {
              if (method === 'throw') {
                throw arg
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult()
            }

            context.method = method
            context.arg = arg

            while (true) {
              var delegate = context.delegate
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context)
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue
                  return delegateResult
                }
              }

              if (context.method === 'next') {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg
              } else if (context.method === 'throw') {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted
                  throw context.arg
                }

                context.dispatchException(context.arg)
              } else if (context.method === 'return') {
                context.abrupt('return', context.arg)
              }

              state = GenStateExecuting

              var record = tryCatch(innerFn, self, context)
              if (record.type === 'normal') {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield

                if (record.arg === ContinueSentinel) {
                  continue
                }

                return {
                  value: record.arg,
                  done: context.done
                }
              } else if (record.type === 'throw') {
                state = GenStateCompleted
                // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.
                context.method = 'throw'
                context.arg = record.arg
              }
            }
          }
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate (delegate, context) {
          var method = delegate.iterator[context.method]
          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null

            if (context.method === 'throw') {
              if (delegate.iterator.return) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = 'return'
                context.arg = undefined
                maybeInvokeDelegate(delegate, context)

                if (context.method === 'throw') {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel
                }
              }

              context.method = 'throw'
              context.arg = new TypeError(
                "The iterator does not provide a 'throw' method")
            }

            return ContinueSentinel
          }

          var record = tryCatch(method, delegate.iterator, context.arg)

          if (record.type === 'throw') {
            context.method = 'throw'
            context.arg = record.arg
            context.delegate = null
            return ContinueSentinel
          }

          var info = record.arg

          if (!info) {
            context.method = 'throw'
            context.arg = new TypeError('iterator result is not an object')
            context.delegate = null
            return ContinueSentinel
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value

            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc

            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== 'return') {
              context.method = 'next'
              context.arg = undefined
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info
          }

          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null
          return ContinueSentinel
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp)

        Gp[toStringTagSymbol] = 'Generator'

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function () {
          return this
        }

        Gp.toString = function () {
          return '[object Generator]'
        }

        function pushTryEntry (locs) {
          var entry = { tryLoc: locs[0] }

          if (1 in locs) {
            entry.catchLoc = locs[1]
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2]
            entry.afterLoc = locs[3]
          }

          this.tryEntries.push(entry)
        }

        function resetTryEntry (entry) {
          var record = entry.completion || {}
          record.type = 'normal'
          delete record.arg
          entry.completion = record
        }

        function Context (tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: 'root' }]
          tryLocsList.forEach(pushTryEntry, this)
          this.reset(true)
        }

        runtime.keys = function (object) {
          var keys = []
          for (var key in object) {
            keys.push(key)
          }
          keys.reverse()

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next () {
            while (keys.length) {
              var key = keys.pop()
              if (key in object) {
                next.value = key
                next.done = false
                return next
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true
            return next
          }
        }

        function values (iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol]
            if (iteratorMethod) {
              return iteratorMethod.call(iterable)
            }

            if (typeof iterable.next === 'function') {
              return iterable
            }

            if (!isNaN(iterable.length)) {
              var i = -1, next = function next () {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i]
                    next.done = false
                    return next
                  }
                }

                next.value = undefined
                next.done = true

                return next
              }

              return next.next = next
            }
          }

          // Return an iterator with no values.
          return { next: doneResult }
        }
        runtime.values = values

        function doneResult () {
          return { value: undefined, done: true }
        }

        Context.prototype = {
          constructor: Context,

          reset: function (skipTempReset) {
            this.prev = 0
            this.next = 0
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined
            this.done = false
            this.delegate = null

            this.method = 'next'
            this.arg = undefined

            this.tryEntries.forEach(resetTryEntry)

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === 't' &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
                  this[name] = undefined
                }
              }
            }
          },

          stop: function () {
            this.done = true

            var rootEntry = this.tryEntries[0]
            var rootRecord = rootEntry.completion
            if (rootRecord.type === 'throw') {
              throw rootRecord.arg
            }

            return this.rval
          },

          dispatchException: function (exception) {
            if (this.done) {
              throw exception
            }

            var context = this
            function handle (loc, caught) {
              record.type = 'throw'
              record.arg = exception
              context.next = loc

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = 'next'
                context.arg = undefined
              }

              return !!caught
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i]
              var record = entry.completion

              if (entry.tryLoc === 'root') {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle('end')
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, 'catchLoc')
                var hasFinally = hasOwn.call(entry, 'finallyLoc')

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true)
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc)
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true)
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc)
                  }
                } else {
                  throw new Error('try statement without catch or finally')
                }
              }
            }
          },

          abrupt: function (type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i]
              if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, 'finallyLoc') &&
            this.prev < entry.finallyLoc) {
                var finallyEntry = entry
                break
              }
            }

            if (finallyEntry &&
          (type === 'break' ||
           type === 'continue') &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null
            }

            var record = finallyEntry ? finallyEntry.completion : {}
            record.type = type
            record.arg = arg

            if (finallyEntry) {
              this.method = 'next'
              this.next = finallyEntry.finallyLoc
              return ContinueSentinel
            }

            return this.complete(record)
          },

          complete: function (record, afterLoc) {
            if (record.type === 'throw') {
              throw record.arg
            }

            if (record.type === 'break' ||
          record.type === 'continue') {
              this.next = record.arg
            } else if (record.type === 'return') {
              this.rval = this.arg = record.arg
              this.method = 'return'
              this.next = 'end'
            } else if (record.type === 'normal' && afterLoc) {
              this.next = afterLoc
            }

            return ContinueSentinel
          },

          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i]
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc)
                resetTryEntry(entry)
                return ContinueSentinel
              }
            }
          },

          'catch': function (tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i]
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion
                if (record.type === 'throw') {
                  var thrown = record.arg
                  resetTryEntry(entry)
                }
                return thrown
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error('illegal catch attempt')
          },

          delegateYield: function (iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            }

            if (this.method === 'next') {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined
            }

            return ContinueSentinel
          }
        }
      })(
        // In sloppy mode, unbound `this` refers to the global object, fallback to
        // Function constructor if we're in global strict mode. That is sadly a form
        // of indirect eval which violates Content Security Policy.
        (function () { return this })() || Function('return this')()
      )
      /***/ },

    /***/ '9780':
    /***/ function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ },

    /***/ '97ba':
    /***/ function (module, exports, __webpack_require__) {
      var _curry1 = /* #__PURE__ */__webpack_require__('70ea')

      var _isArray = /* #__PURE__ */__webpack_require__('84eb')

      var _isString = /* #__PURE__ */__webpack_require__('1772')

      /**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

      var _isArrayLike = /* #__PURE__ */_curry1(function isArrayLike (x) {
        if (_isArray(x)) {
          return true
        }
        if (!x) {
          return false
        }
        if (typeof x !== 'object') {
          return false
        }
        if (_isString(x)) {
          return false
        }
        if (x.nodeType === 1) {
          return !!x.length
        }
        if (x.length === 0) {
          return true
        }
        if (x.length > 0) {
          return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
        }
        return false
      })
      module.exports = _isArrayLike
      /***/ },

    /***/ '97bae':
    /***/ function (module, exports, __webpack_require__) {
      var _has = /* #__PURE__ */__webpack_require__('02ff')

      var toString = Object.prototype.toString
      var _isArguments = function () {
        return toString.call(arguments) === '[object Arguments]' ? function _isArguments (x) {
          return toString.call(x) === '[object Arguments]'
        } : function _isArguments (x) {
          return _has('callee', x)
        }
      }

      module.exports = _isArguments
      /***/ },

    /***/ '9b43':
    /***/ function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__('d8e8')
      module.exports = function (fn, that, length) {
        aFunction(fn)
        if (that === undefined) return fn
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a)
          }
          case 2: return function (a, b) {
            return fn.call(that, a, b)
          }
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c)
          }
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments)
        }
      }
      /***/ },

    /***/ '9c6c':
    /***/ function (module, exports, __webpack_require__) {
      // 22.1.3.31 Array.prototype[@@unscopables]
      var UNSCOPABLES = __webpack_require__('2b4c')('unscopables')
      var ArrayProto = Array.prototype
      if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__('32e9')(ArrayProto, UNSCOPABLES, {})
      module.exports = function (key) {
        ArrayProto[UNSCOPABLES][key] = true
      }
      /***/ },

    /***/ '9def':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__('4588')
      var min = Math.min
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
      }
      /***/ },

    /***/ '9e1e':
    /***/ function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__('79e5')(function () {
        return Object.defineProperty({}, 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ 'a2be':
    /***/ function (module, exports, __webpack_require__) {
      var _curry2 = /* #__PURE__ */__webpack_require__('5a7c')

      /**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */

      var pickAll = /* #__PURE__ */_curry2(function pickAll (names, obj) {
        var result = {}
        var idx = 0
        var len = names.length
        while (idx < len) {
          var name = names[idx]
          result[name] = obj[name]
          idx += 1
        }
        return result
      })
      module.exports = pickAll
      /***/ },

    /***/ 'a58e':
    /***/ function (module, exports, __webpack_require__) {
      var _curry2 = /* #__PURE__ */__webpack_require__('5a7c')

      var _xfBase = /* #__PURE__ */__webpack_require__('ac9b')

      var XMap = /* #__PURE__ */(function () {
        function XMap (f, xf) {
          this.xf = xf
          this.f = f
        }
        XMap.prototype['@@transducer/init'] = _xfBase.init
        XMap.prototype['@@transducer/result'] = _xfBase.result
        XMap.prototype['@@transducer/step'] = function (result, input) {
          return this.xf['@@transducer/step'](result, this.f(input))
        }

        return XMap
      }())

      var _xmap = /* #__PURE__ */_curry2(function _xmap (f, xf) {
        return new XMap(f, xf)
      })
      module.exports = _xmap
      /***/ },

    /***/ 'a8fe':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_id_4522ef84_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('0e7d')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_id_4522ef84_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_id_4522ef84_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_id_4522ef84_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a)
      /***/ },

    /***/ 'ac6a':
    /***/ function (module, exports, __webpack_require__) {
      var $iterators = __webpack_require__('cadf')
      var getKeys = __webpack_require__('0d58')
      var redefine = __webpack_require__('2aba')
      var global = __webpack_require__('7726')
      var hide = __webpack_require__('32e9')
      var Iterators = __webpack_require__('84f2')
      var wks = __webpack_require__('2b4c')
      var ITERATOR = wks('iterator')
      var TO_STRING_TAG = wks('toStringTag')
      var ArrayValues = Iterators.Array

      var DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      }

      for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        var NAME = collections[i]
        var explicit = DOMIterables[NAME]
        var Collection = global[NAME]
        var proto = Collection && Collection.prototype
        var key
        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues)
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME)
          Iterators[NAME] = ArrayValues
          if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true)
        }
      }
      /***/ },

    /***/ 'ac9b':
    /***/ function (module, exports) {
      module.exports = {
        init: function () {
          return this.xf['@@transducer/init']()
        },
        result: function (result) {
          return this.xf['@@transducer/result'](result)
        }
      }
      /***/ },

    /***/ 'ae1c':
    /***/ function (module, exports, __webpack_require__) {
      var _checkForMethod = /* #__PURE__ */__webpack_require__('fd46')

      var _curry1 = /* #__PURE__ */__webpack_require__('70ea')

      var slice = /* #__PURE__ */__webpack_require__('6ff5')

      /**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */

      var tail = /* #__PURE__ */_curry1(/* #__PURE__ */_checkForMethod('tail', /* #__PURE__ */slice(1, Infinity)))
      module.exports = tail
      /***/ },

    /***/ 'afc2':
    /***/ function (module, exports, __webpack_require__) {
      var _arity = /* #__PURE__ */__webpack_require__('00b3')

      var _isPlaceholder = /* #__PURE__ */__webpack_require__('001c')

      /**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

      function _curryN (length, received, fn) {
        return function () {
          var combined = []
          var argsIdx = 0
          var left = length
          var combinedIdx = 0
          while (combinedIdx < received.length || argsIdx < arguments.length) {
            var result
            if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
              result = received[combinedIdx]
            } else {
              result = arguments[argsIdx]
              argsIdx += 1
            }
            combined[combinedIdx] = result
            if (!_isPlaceholder(result)) {
              left -= 1
            }
            combinedIdx += 1
          }
          return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn))
        }
      }
      module.exports = _curryN
      /***/ },

    /***/ 'b747':
    /***/ function (module, exports, __webpack_require__) {
      ;(function (name, root, factory) {
        if (true) {
          module.exports = factory()
          module.exports['default'] = factory()
        }
        /* istanbul ignore next */
        else {}
      }('slugify', this, function () {
        /* eslint-disable */
  var charMap = JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  /* eslint-enable */

        function replace (string, options) {
          if (typeof string !== 'string') {
            throw new Error('slugify: string argument expected')
          }

          options = (typeof options === 'string')
            ? { replacement: options }
            : options || {}

          var slug = string.split('')
            .reduce(function (result, ch) {
              return result + (charMap[ch] || ch)
              // allowed
                .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
            }, '')
          // trim leading/trailing spaces
            .trim()
          // convert spaces
            .replace(/[-\s]+/g, options.replacement || '-')
          // remove trailing separator
            .replace('#{replacement}$', '')

          return options.lower ? slug.toLowerCase() : slug
        }

        replace.extend = function (customMap) {
          for (var key in customMap) {
            charMap[key] = customMap[key]
          }
        }

        return replace
      }))
      /***/ },

    /***/ 'be13':
    /***/ function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it)
        return it
      }
      /***/ },

    /***/ 'c101':
    /***/ function (module, exports, __webpack_require__) {
      var _isArrayLike = /* #__PURE__ */__webpack_require__('97ba')

      var _xwrap = /* #__PURE__ */__webpack_require__('2cf0')

      var bind = /* #__PURE__ */__webpack_require__('f3f8')

      function _arrayReduce (xf, acc, list) {
        var idx = 0
        var len = list.length
        while (idx < len) {
          acc = xf['@@transducer/step'](acc, list[idx])
          if (acc && acc['@@transducer/reduced']) {
            acc = acc['@@transducer/value']
            break
          }
          idx += 1
        }
        return xf['@@transducer/result'](acc)
      }

      function _iterableReduce (xf, acc, iter) {
        var step = iter.next()
        while (!step.done) {
          acc = xf['@@transducer/step'](acc, step.value)
          if (acc && acc['@@transducer/reduced']) {
            acc = acc['@@transducer/value']
            break
          }
          step = iter.next()
        }
        return xf['@@transducer/result'](acc)
      }

      function _methodReduce (xf, acc, obj, methodName) {
        return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc))
      }

      var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator'

      function _reduce (fn, acc, list) {
        if (typeof fn === 'function') {
          fn = _xwrap(fn)
        }
        if (_isArrayLike(list)) {
          return _arrayReduce(fn, acc, list)
        }
        if (typeof list['fantasy-land/reduce'] === 'function') {
          return _methodReduce(fn, acc, list, 'fantasy-land/reduce')
        }
        if (list[symIterator] != null) {
          return _iterableReduce(fn, acc, list[symIterator]())
        }
        if (typeof list.next === 'function') {
          return _iterableReduce(fn, acc, list)
        }
        if (typeof list.reduce === 'function') {
          return _methodReduce(fn, acc, list, 'reduce')
        }

        throw new TypeError('reduce: list must be array or iterable')
      }
      module.exports = _reduce
      /***/ },

    /***/ 'c366':
    /***/ function (module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__('6821')
      var toLength = __webpack_require__('9def')
      var toAbsoluteIndex = __webpack_require__('77f1')
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this)
          var length = toLength(O.length)
          var index = toAbsoluteIndex(fromIndex, length)
          var value
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++]
              // eslint-disable-next-line no-self-compare
              if (value != value) return true
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0
              }
            }
          } return !IS_INCLUDES && -1
        }
      }
      /***/ },

    /***/ 'c69a':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = !__webpack_require__('9e1e') && !__webpack_require__('79e5')(function () {
        return Object.defineProperty(__webpack_require__('230e')('div'), 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ 'ca5a':
    /***/ function (module, exports) {
      var id = 0
      var px = Math.random()
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36))
      }
      /***/ },

    /***/ 'cadf':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var addToUnscopables = __webpack_require__('9c6c')
      var step = __webpack_require__('d53b')
      var Iterators = __webpack_require__('84f2')
      var toIObject = __webpack_require__('6821')

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = __webpack_require__('01f9')(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated) // target
        this._i = 0 // next index
        this._k = kind // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t
        var kind = this._k
        var index = this._i++
        if (!O || index >= O.length) {
          this._t = undefined
          return step(1)
        }
        if (kind == 'keys') return step(0, index)
        if (kind == 'values') return step(0, O[index])
        return step(0, [index, O[index]])
      }, 'values')

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array

      addToUnscopables('keys')
      addToUnscopables('values')
      addToUnscopables('entries')
      /***/ },

    /***/ 'cb7c':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!')
        return it
      }
      /***/ },

    /***/ 'cd1c':
    /***/ function (module, exports, __webpack_require__) {
      // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
      var speciesConstructor = __webpack_require__('e853')

      module.exports = function (original, length) {
        return new (speciesConstructor(original))(length)
      }
      /***/ },

    /***/ 'ce10':
    /***/ function (module, exports, __webpack_require__) {
      var has = __webpack_require__('69a8')
      var toIObject = __webpack_require__('6821')
      var arrayIndexOf = __webpack_require__('c366')(false)
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')

      module.exports = function (object, names) {
        var O = toIObject(object)
        var i = 0
        var result = []
        var key
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key)
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key)
          }
        }
        return result
      }
      /***/ },

    /***/ 'd3f4':
    /***/ function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function'
      }
      /***/ },

    /***/ 'd436':
    /***/ function (module, exports, __webpack_require__) {
      var _arity = /* #__PURE__ */__webpack_require__('00b3')

      var _pipe = /* #__PURE__ */__webpack_require__('e64b')

      var reduce = /* #__PURE__ */__webpack_require__('48af')

      var tail = /* #__PURE__ */__webpack_require__('ae1c')

      /**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */

      function pipe () {
        if (arguments.length === 0) {
          throw new Error('pipe requires at least one argument')
        }
        return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)))
      }
      module.exports = pipe
      /***/ },

    /***/ 'd53b':
    /***/ function (module, exports) {
      module.exports = function (done, value) {
        return { value: value, done: !!done }
      }
      /***/ },

    /***/ 'd8e8':
    /***/ function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') throw TypeError(it + ' is not a function!')
        return it
      }
      /***/ },

    /***/ 'e11e':
    /***/ function (module, exports) {
      // IE 8- don't enum bug keys
      module.exports = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',')
      /***/ },

    /***/ 'e5be':
    /***/ function (module, exports, __webpack_require__) {
      var _curry1 = /* #__PURE__ */__webpack_require__('70ea')

      var _makeFlat = /* #__PURE__ */__webpack_require__('785b')

      /**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */

      var flatten = /* #__PURE__ */_curry1(/* #__PURE__ */_makeFlat(true))
      module.exports = flatten
      /***/ },

    /***/ 'e64b':
    /***/ function (module, exports) {
      function _pipe (f, g) {
        return function () {
          return g.call(this, f.apply(this, arguments))
        }
      }
      module.exports = _pipe
      /***/ },

    /***/ 'e853':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      var isArray = __webpack_require__('1169')
      var SPECIES = __webpack_require__('2b4c')('species')

      module.exports = function (original) {
        var C
        if (isArray(original)) {
          C = original.constructor
          // cross-realm fallback
          if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined
          if (isObject(C)) {
            C = C[SPECIES]
            if (C === null) C = undefined
          }
        } return C === undefined ? Array : C
      }
      /***/ },

    /***/ 'edee':
    /***/ function (module, exports, __webpack_require__) {
      var _curry1 = /* #__PURE__ */__webpack_require__('70ea')

      var _has = /* #__PURE__ */__webpack_require__('02ff')

      var _isArguments = /* #__PURE__ */__webpack_require__('97bae')

      // cover IE < 9 keys issues

      var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString')
      var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']
      // Safari bug
      var hasArgsEnumBug = /* #__PURE__ */(function () {
        'use strict'

        return arguments.propertyIsEnumerable('length')
      }())

      var contains = function contains (list, item) {
        var idx = 0
        while (idx < list.length) {
          if (list[idx] === item) {
            return true
          }
          idx += 1
        }
        return false
      }

      /**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
      var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys (obj) {
        return Object(obj) !== obj ? [] : Object.keys(obj)
      } : function keys (obj) {
        if (Object(obj) !== obj) {
          return []
        }
        var prop, nIdx
        var ks = []
        var checkArgsLength = hasArgsEnumBug && _isArguments(obj)
        for (prop in obj) {
          if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
            ks[ks.length] = prop
          }
        }
        if (hasEnumBug) {
          nIdx = nonEnumerableProps.length - 1
          while (nIdx >= 0) {
            prop = nonEnumerableProps[nIdx]
            if (_has(prop, obj) && !contains(ks, prop)) {
              ks[ks.length] = prop
            }
            nIdx -= 1
          }
        }
        return ks
      }
      var keys = /* #__PURE__ */_curry1(_keys)
      module.exports = keys
      /***/ },

    /***/ 'f3f8':
    /***/ function (module, exports, __webpack_require__) {
      var _arity = /* #__PURE__ */__webpack_require__('00b3')

      var _curry2 = /* #__PURE__ */__webpack_require__('5a7c')

      /**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

      var bind = /* #__PURE__ */_curry2(function bind (fn, thisObj) {
        return _arity(fn.length, function () {
          return fn.apply(thisObj, arguments)
        })
      })
      module.exports = bind
      /***/ },

    /***/ 'f601':
    /***/ function (module, exports, __webpack_require__) {
      var _isArray = /* #__PURE__ */__webpack_require__('84eb')

      var _isTransformer = /* #__PURE__ */__webpack_require__('fd6f')

      /**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */

      function _dispatchable (methodNames, xf, fn) {
        return function () {
          if (arguments.length === 0) {
            return fn()
          }
          var args = Array.prototype.slice.call(arguments, 0)
          var obj = args.pop()
          if (!_isArray(obj)) {
            var idx = 0
            while (idx < methodNames.length) {
              if (typeof obj[methodNames[idx]] === 'function') {
                return obj[methodNames[idx]].apply(obj, args)
              }
              idx += 1
            }
            if (_isTransformer(obj)) {
              var transducer = xf.apply(null, args)
              return transducer(obj)
            }
          }
          return fn.apply(this, arguments)
        }
      }
      module.exports = _dispatchable
      /***/ },

    /***/ 'fab2':
    /***/ function (module, exports, __webpack_require__) {
      var document = __webpack_require__('7726').document
      module.exports = document && document.documentElement
      /***/ },

    /***/ 'fb15':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)

      // EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      var setPublicPath = __webpack_require__('1eb2')

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Form/Form.vue?vue&type=template&id=158832f0&lang=pug&
      var render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('form', { attrs: { 'data-vv-scope': _vm.formName }, on: { 'submit': function ($event) { $event.preventDefault(); return _vm.beforeSubmit($event) } } }, [_vm._l((_vm.formFields), function (item, index) { return _c('div', { key: index }, [(Array.isArray(item)) ? _c('div', { staticClass: 'field-body' }, _vm._l((item), function (x, i) { return _c('div', { key: x.label, staticClass: 'field' }, [_c('app-label', { attrs: { 'item': x } }), _c('app-control', { ref: 'control', refInFor: true, attrs: { 'item': x, 'formName': _vm.formName } })], 1) })) : _c('div', { staticClass: 'field' }, [_c('app-label', { attrs: { 'item': item } }), _c('app-control', { ref: 'control', refInFor: true, attrs: { 'item': item, 'formName': _vm.formName } })], 1)]) }), _c('div', { staticClass: 'field form-footer is-grouped is-opposed' }, [_c('input', { staticClass: 'button', attrs: { 'type': 'reset' }, domProps: { 'value': _vm.btnResetText }, on: { 'click': _vm.resetForm } }), _c('input', { staticClass: 'button is-primary', attrs: { 'type': 'submit', 'disabled': !_vm.isFormValid }, domProps: { 'value': _vm.btnSubmitText } })]), _c('p', { staticClass: 'is-size-7 fieldRequiredLegend' }, [_vm._v(_vm._s(_vm.mandatoryAsteriskLegend))])], 2) }
      var staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Form/Form.vue?vue&type=template&id=158832f0&lang=pug&

      // EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
      var runtime = __webpack_require__('96cf')

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js
      function _asyncToGenerator (fn) {
        return function () {
          var self = this,
            args = arguments
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args)

            function step (key, arg) {
              try {
                var info = gen[key](arg)
                var value = info.value
              } catch (error) {
                reject(error)
                return
              }

              if (info.done) {
                resolve(value)
              } else {
                Promise.resolve(value).then(_next, _throw)
              }
            }

            function _next (value) {
              step('next', value)
            }

            function _throw (err) {
              step('throw', err)
            }

            _next()
          })
        }
      }
      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
      var web_dom_iterable = __webpack_require__('ac6a')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
      var es6_array_iterator = __webpack_require__('cadf')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
      var es7_object_values = __webpack_require__('8615')

      // EXTERNAL MODULE: ./node_modules/ramda/src/flatten.js
      var flatten = __webpack_require__('e5be')
      var flatten_default = /* #__PURE__ */__webpack_require__.n(flatten)

      // EXTERNAL MODULE: ./node_modules/ramda/src/pickAll.js
      var pickAll = __webpack_require__('a2be')
      var pickAll_default = /* #__PURE__ */__webpack_require__.n(pickAll)

      // EXTERNAL MODULE: ./node_modules/ramda/src/pipe.js
      var pipe = __webpack_require__('d436')
      var pipe_default = /* #__PURE__ */__webpack_require__.n(pipe)

      // EXTERNAL MODULE: ./node_modules/ramda/src/map.js
      var map = __webpack_require__('1324')
      var map_default = /* #__PURE__ */__webpack_require__.n(map)

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Label.vue?vue&type=template&id=85069880&lang=pug&
      var Labelvue_type_template_id_85069880_lang_pug_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return (!_vm.item.dontShowLabel) ? _c('label', { staticClass: 'label', attrs: { 'for': _vm._f('slugify')(_vm.item.label) } }, [_c('p', [_vm._v(_vm._s(_vm.item.label)), (_vm.item.isRequired != null ? _vm.item.isRequired : true) ? _c('span', [_c('sup', { staticClass: 'has-text-grey-light is-size-7' }, [_vm._v(' *')])]) : _vm._e()])]) : _vm._e() }
      var Labelvue_type_template_id_85069880_lang_pug_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Fields/Label.vue?vue&type=template&id=85069880&lang=pug&

      // EXTERNAL MODULE: ./node_modules/slugify/index.js
      var node_modules_slugify = __webpack_require__('b747')
      var slugify_default = /* #__PURE__ */__webpack_require__.n(node_modules_slugify)

      // CONCATENATED MODULE: ./src/helpers/index.js

      var helpers_slug = function slug (str) {
        return slugify_default()(str.toLowerCase())
      }
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Label.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var Labelvue_type_script_lang_js_ = ({
        filters: {
          slugify: function slugify (value) {
            return helpers_slug(value)
          }
        },
        props: {
          item: {
            type: Object,
            required: true
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Fields/Label.vue?vue&type=script&lang=js&
      /* harmony default export */ var Fields_Labelvue_type_script_lang_js_ = (Labelvue_type_script_lang_js_)
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

      // CONCATENATED MODULE: ./src/components/Fields/Label.vue

      /* normalize component */

      var component = normalizeComponent(
        Fields_Labelvue_type_script_lang_js_,
        Labelvue_type_template_id_85069880_lang_pug_render,
        Labelvue_type_template_id_85069880_lang_pug_staticRenderFns,
        false,
        null,
        null,
        null

      )

      component.options.__file = 'Label.vue'
      /* harmony default export */ var Label = (component.exports)
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Control.vue?vue&type=template&id=fafbbb2a&lang=pug&
      var Controlvue_type_template_id_fafbbb2a_lang_pug_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'control has-icons-right', class: { 'has-icons-left': _vm.item.iconLeft } }, [(_vm.item.type == 'textarea') ? _c('app-textarea', { directives: [{ name: 'validate', rawName: 'v-validate', value: ({ required: _vm.item.isRequired != null ? _vm.item.isRequired : true, min: _vm.item.min || 3 }), expression: '{ required: item.isRequired != null ? item.isRequired : true, min: item.min || 3 }' }], attrs: { 'item': _vm.item, 'error': _vm.fieldError, 'data-vv-name': _vm.item.label }, model: { value: (_vm.value), callback: function ($$v) { _vm.value = $$v }, expression: 'value' } }) : _vm._e(), (_vm.item.type == 'select') ? _c('app-select', { directives: [{ name: 'validate', rawName: 'v-validate', value: ({ required: _vm.item.isRequired != null ? _vm.item.isRequired : true }), expression: '{ required: item.isRequired != null ? item.isRequired : true }' }], attrs: { 'item': _vm.item, 'error': _vm.fieldError, 'data-vv-name': _vm.item.label }, model: { value: (_vm.value), callback: function ($$v) { _vm.value = $$v }, expression: 'value' } }) : _vm._e(), (_vm.item.type == 'checkbox') ? _c('app-checkbox', { directives: [{ name: 'validate', rawName: 'v-validate', value: ({ required: _vm.item.isRequired != null ? _vm.item.isRequired : true }), expression: '{ required: item.isRequired != null ? item.isRequired : true }' }], attrs: { 'item': _vm.item, 'error': _vm.fieldError, 'data-vv-name': _vm.item.label }, model: { value: (_vm.value), callback: function ($$v) { _vm.value = $$v }, expression: 'value' } }) : _vm._e(), (_vm.item.type == 'radio') ? _c('app-radio', { directives: [{ name: 'validate', rawName: 'v-validate', value: ({ required: _vm.item.isRequired != null ? _vm.item.isRequired : true }), expression: '{ required: item.isRequired != null ? item.isRequired : true }' }], attrs: { 'item': _vm.item, 'error': _vm.fieldError, 'data-vv-name': _vm.item.label }, model: { value: (_vm.value), callback: function ($$v) { _vm.value = $$v }, expression: 'value' } }) : _vm._e(), (_vm.item.type != 'textarea' && _vm.item.type != 'select' && _vm.item.type != 'checkbox' && _vm.item.type != 'radio') ? _c('app-input', { directives: [{ name: 'validate', rawName: 'v-validate', value: ({ required: _vm.item.isRequired != null ? _vm.item.isRequired : true, email: _vm.item.type == 'email', min: _vm.item.min || 3 }), expression: "{ required: item.isRequired != null ? item.isRequired : true, email: item.type == 'email', min: item.min || 3 }" }], attrs: { 'item': _vm.item, 'error': _vm.fieldError, 'data-vv-name': _vm.item.label }, model: { value: (_vm.value), callback: function ($$v) { _vm.value = $$v }, expression: 'value' } }) : _vm._e(), (_vm.item.iconLeft) ? _c('span', { staticClass: 'icon is-small is-left' }, [_c('i', { staticClass: 'fas', class: ('fa-' + (_vm.item.iconLeft)) })]) : _vm._e(), (_vm.fieldError && _vm.item.type != 'select') ? _c('span', { staticClass: 'icon is-small is-right' }, [_c('i', { staticClass: 'fas fa-exclamation-triangle' })]) : _vm._e(), (_vm.fieldError) ? _c('p', { staticClass: 'help is-danger' }, [_vm._v(_vm._s(_vm.fieldError.msg))]) : _vm._e()], 1) }
      var Controlvue_type_template_id_fafbbb2a_lang_pug_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Fields/Control.vue?vue&type=template&id=fafbbb2a&lang=pug&

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
      var es6_array_find = __webpack_require__('7514')

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Input.vue?vue&type=template&id=0b878164&lang=pug&
      var Inputvue_type_template_id_0b878164_lang_pug_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('input', { staticClass: 'input', class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(_vm.item.label), 'name': _vm._f('slugify')(_vm.item.label), 'type': _vm.item.type, 'placeholder': _vm.item.placeholder, 'required': _vm.item.isRequired != null ? _vm.item.isRequired : true }, on: { 'input': _vm.updateValue, 'change': _vm.updateValue, 'blur': function ($event) { _vm.$emit('blur') } } }) }
      var Inputvue_type_template_id_0b878164_lang_pug_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Fields/Input.vue?vue&type=template&id=0b878164&lang=pug&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Input.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var Inputvue_type_script_lang_js_ = ({
        name: 'Input',
        filters: {
          slugify: function slugify (value) {
            return helpers_slug(value)
          }
        },
        props: {
          item: {
            type: Object,
            required: true
          },
          error: {
            required: true
          }
        },
        methods: {
          updateValue: function updateValue (e) {
            this.$emit('input', e.target.value)
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Fields/Input.vue?vue&type=script&lang=js&
      /* harmony default export */ var Fields_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_)
      // CONCATENATED MODULE: ./src/components/Fields/Input.vue

      /* normalize component */

      var Input_component = normalizeComponent(
        Fields_Inputvue_type_script_lang_js_,
        Inputvue_type_template_id_0b878164_lang_pug_render,
        Inputvue_type_template_id_0b878164_lang_pug_staticRenderFns,
        false,
        null,
        null,
        null

      )

      Input_component.options.__file = 'Input.vue'
      /* harmony default export */ var Input = (Input_component.exports)
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Select.vue?vue&type=template&id=4ad5b56c&lang=pug&
      var Selectvue_type_template_id_4ad5b56c_lang_pug_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'select is-block', class: { 'is-danger': !!_vm.error } }, [_c('select', { staticClass: 'is-fullwidth', attrs: { 'id': _vm._f('slugify')(_vm.item.label), 'name': _vm._f('slugify')(_vm.item.label), 'required': _vm.item.isRequired != null ? _vm.item.isRequired : true }, on: { 'change': _vm.updateValue, 'blur': function ($event) { _vm.$emit('blur') } } }, [(_vm.item.placeholder) ? _c('option', { attrs: { 'disabled': '', 'selected': '' } }, [_vm._v(_vm._s(_vm.item.placeholder))]) : _vm._e(), _vm._l((_vm.item.options), function (option, index) { return _c('option', { key: index, domProps: { 'value': option } }, [_vm._v(_vm._s(option))]) })], 2)]) }
      var Selectvue_type_template_id_4ad5b56c_lang_pug_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Fields/Select.vue?vue&type=template&id=4ad5b56c&lang=pug&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Select.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var Selectvue_type_script_lang_js_ = ({
        name: 'Select',
        filters: {
          slugify: function slugify (value) {
            return helpers_slug(value)
          }
        },
        props: {
          item: {
            type: Object,
            required: true
          },
          error: {
            required: true
          }
        },
        methods: {
          updateValue: function updateValue (e) {
            this.$emit('input', e.target.value)
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Fields/Select.vue?vue&type=script&lang=js&
      /* harmony default export */ var Fields_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_)
      // EXTERNAL MODULE: ./src/components/Fields/Select.vue?vue&type=style&index=0&lang=stylus&
      var Selectvue_type_style_index_0_lang_stylus_ = __webpack_require__('102a')

      // CONCATENATED MODULE: ./src/components/Fields/Select.vue

      /* normalize component */

      var Select_component = normalizeComponent(
        Fields_Selectvue_type_script_lang_js_,
        Selectvue_type_template_id_4ad5b56c_lang_pug_render,
        Selectvue_type_template_id_4ad5b56c_lang_pug_staticRenderFns,
        false,
        null,
        null,
        null

      )

      Select_component.options.__file = 'Select.vue'
      /* harmony default export */ var Select = (Select_component.exports)
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Textarea.vue?vue&type=template&id=c34fed4a&lang=pug&
      var Textareavue_type_template_id_c34fed4a_lang_pug_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('textarea', { staticClass: 'textarea', class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(_vm.item.label), 'name': _vm._f('slugify')(_vm.item.label), 'data-vv-name': _vm.item.label, 'required': _vm.item.isRequired != null ? _vm.item.isRequired : true }, on: { 'input': _vm.updateValue, 'change': _vm.updateValue, 'blur': function ($event) { _vm.$emit('blur') } } }) }
      var Textareavue_type_template_id_c34fed4a_lang_pug_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Fields/Textarea.vue?vue&type=template&id=c34fed4a&lang=pug&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Textarea.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var Textareavue_type_script_lang_js_ = ({
        name: 'Textarea',
        filters: {
          slugify: function slugify (value) {
            return helpers_slug(value)
          }
        },
        data: function data () {
          return {
            formName: this.$parent.formName
          }
        },
        props: {
          item: {
            type: Object,
            required: true
          },
          error: {
            required: false
          }
        },
        methods: {
          updateValue: function updateValue (e) {
            this.$emit('input', e.target.value)
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Fields/Textarea.vue?vue&type=script&lang=js&
      /* harmony default export */ var Fields_Textareavue_type_script_lang_js_ = (Textareavue_type_script_lang_js_)
      // CONCATENATED MODULE: ./src/components/Fields/Textarea.vue

      /* normalize component */

      var Textarea_component = normalizeComponent(
        Fields_Textareavue_type_script_lang_js_,
        Textareavue_type_template_id_c34fed4a_lang_pug_render,
        Textareavue_type_template_id_c34fed4a_lang_pug_staticRenderFns,
        false,
        null,
        null,
        null

      )

      Textarea_component.options.__file = 'Textarea.vue'
      /* harmony default export */ var Textarea = (Textarea_component.exports)
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Checkbox.vue?vue&type=template&id=4522ef84&scoped=true&lang=pug&
      var Checkboxvue_type_template_id_4522ef84_scoped_true_lang_pug_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', _vm._l((_vm.item.items), function (x, index) { return _c('label', { key: index, staticClass: 'checkbox', attrs: { 'for': _vm._f('slugify')(x) } }, [((_vm.item.type) === 'checkbox') ? _c('input', { directives: [{ name: 'model', rawName: 'v-model', value: (_vm.value), expression: 'value' }], class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(x), 'name': _vm._f('slugify')(_vm.item.label), 'placeholder': _vm.item.placeholder, 'type': 'checkbox' }, domProps: { 'value': x, 'checked': Array.isArray(_vm.value) ? _vm._i(_vm.value, x) > -1 : (_vm.value) }, on: { 'input': _vm.updateValue, 'change': [function ($event) { var $$a = _vm.value, $$el = $event.target, $$c = !!$$el.checked; if (Array.isArray($$a)) { var $$v = x, $$i = _vm._i($$a, $$v); if ($$el.checked) { $$i < 0 && (_vm.value = $$a.concat([$$v])) } else { $$i > -1 && (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1))) } } else { _vm.value = $$c } }, _vm.updateValue], 'blur': function ($event) { _vm.$emit('blur') } } }) : ((_vm.item.type) === 'radio') ? _c('input', { directives: [{ name: 'model', rawName: 'v-model', value: (_vm.value), expression: 'value' }], class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(x), 'name': _vm._f('slugify')(_vm.item.label), 'placeholder': _vm.item.placeholder, 'type': 'radio' }, domProps: { 'value': x, 'checked': _vm._q(_vm.value, x) }, on: { 'input': _vm.updateValue, 'change': [function ($event) { _vm.value = x }, _vm.updateValue], 'blur': function ($event) { _vm.$emit('blur') } } }) : _c('input', { directives: [{ name: 'model', rawName: 'v-model', value: (_vm.value), expression: 'value' }], class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(x), 'name': _vm._f('slugify')(_vm.item.label), 'placeholder': _vm.item.placeholder, 'type': _vm.item.type }, domProps: { 'value': x, 'value': (_vm.value) }, on: { 'input': [function ($event) { if ($event.target.composing) { return }_vm.value = $event.target.value }, _vm.updateValue], 'change': _vm.updateValue, 'blur': function ($event) { _vm.$emit('blur') } } }), _c('span', { staticClass: 'checkboxLabel' }, [_vm._v(_vm._s(x))])]) })) }
      var Checkboxvue_type_template_id_4522ef84_scoped_true_lang_pug_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Fields/Checkbox.vue?vue&type=template&id=4522ef84&scoped=true&lang=pug&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Checkbox.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var Checkboxvue_type_script_lang_js_ = ({
        name: 'Checkbox',
        filters: {
          slugify: function slugify (value) {
            return helpers_slug(value)
          }
        },
        data: function data () {
          return {
            value: []
          }
        },
        props: {
          item: {
            type: Object,
            required: true
          },
          error: {
            required: true
          }
        },
        methods: {
          updateValue: function updateValue () {
            this.$emit('input', this.value)
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Fields/Checkbox.vue?vue&type=script&lang=js&
      /* harmony default export */ var Fields_Checkboxvue_type_script_lang_js_ = (Checkboxvue_type_script_lang_js_)
      // EXTERNAL MODULE: ./src/components/Fields/Checkbox.vue?vue&type=style&index=0&id=4522ef84&lang=stylus&scoped=true&
      var Checkboxvue_type_style_index_0_id_4522ef84_lang_stylus_scoped_true_ = __webpack_require__('a8fe')

      // CONCATENATED MODULE: ./src/components/Fields/Checkbox.vue

      /* normalize component */

      var Checkbox_component = normalizeComponent(
        Fields_Checkboxvue_type_script_lang_js_,
        Checkboxvue_type_template_id_4522ef84_scoped_true_lang_pug_render,
        Checkboxvue_type_template_id_4522ef84_scoped_true_lang_pug_staticRenderFns,
        false,
        null,
        '4522ef84',
        null

      )

      Checkbox_component.options.__file = 'Checkbox.vue'
      /* harmony default export */ var Checkbox = (Checkbox_component.exports)
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Radio.vue?vue&type=template&id=533bc66e&scoped=true&lang=pug&
      var Radiovue_type_template_id_533bc66e_scoped_true_lang_pug_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', _vm._l((_vm.item.items), function (x, index) { return _c('label', { key: index, staticClass: 'radio', attrs: { 'for': _vm._f('slugify')(x) } }, [((_vm.item.type) === 'checkbox') ? _c('input', { directives: [{ name: 'model', rawName: 'v-model', value: (_vm.value), expression: 'value' }], class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(x), 'name': _vm._f('slugify')(_vm.item.label), 'placeholder': _vm.item.placeholder, 'type': 'checkbox' }, domProps: { 'value': x, 'checked': Array.isArray(_vm.value) ? _vm._i(_vm.value, x) > -1 : (_vm.value) }, on: { 'input': _vm.updateValue, 'change': [function ($event) { var $$a = _vm.value, $$el = $event.target, $$c = !!$$el.checked; if (Array.isArray($$a)) { var $$v = x, $$i = _vm._i($$a, $$v); if ($$el.checked) { $$i < 0 && (_vm.value = $$a.concat([$$v])) } else { $$i > -1 && (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1))) } } else { _vm.value = $$c } }, _vm.updateValue], 'blur': function ($event) { _vm.$emit('blur') } } }) : ((_vm.item.type) === 'radio') ? _c('input', { directives: [{ name: 'model', rawName: 'v-model', value: (_vm.value), expression: 'value' }], class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(x), 'name': _vm._f('slugify')(_vm.item.label), 'placeholder': _vm.item.placeholder, 'type': 'radio' }, domProps: { 'value': x, 'checked': _vm._q(_vm.value, x) }, on: { 'input': _vm.updateValue, 'change': [function ($event) { _vm.value = x }, _vm.updateValue], 'blur': function ($event) { _vm.$emit('blur') } } }) : _c('input', { directives: [{ name: 'model', rawName: 'v-model', value: (_vm.value), expression: 'value' }], class: { 'is-danger': !!_vm.error }, attrs: { 'id': _vm._f('slugify')(x), 'name': _vm._f('slugify')(_vm.item.label), 'placeholder': _vm.item.placeholder, 'type': _vm.item.type }, domProps: { 'value': x, 'value': (_vm.value) }, on: { 'input': [function ($event) { if ($event.target.composing) { return }_vm.value = $event.target.value }, _vm.updateValue], 'change': _vm.updateValue, 'blur': function ($event) { _vm.$emit('blur') } } }), _c('span', { staticClass: 'checkboxLabel' }, [_vm._v(_vm._s(x))])]) })) }
      var Radiovue_type_template_id_533bc66e_scoped_true_lang_pug_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/Fields/Radio.vue?vue&type=template&id=533bc66e&scoped=true&lang=pug&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Radio.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var Radiovue_type_script_lang_js_ = ({
        name: 'Radio',
        filters: {
          slugify: function slugify (value) {
            return helpers_slug(value)
          }
        },
        data: function data () {
          return {
            value: []
          }
        },
        props: {
          item: {
            type: Object,
            required: true
          },
          error: {
            required: true
          }
        },
        methods: {
          updateValue: function updateValue () {
            this.$emit('input', this.value)
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Fields/Radio.vue?vue&type=script&lang=js&
      /* harmony default export */ var Fields_Radiovue_type_script_lang_js_ = (Radiovue_type_script_lang_js_)
      // EXTERNAL MODULE: ./src/components/Fields/Radio.vue?vue&type=style&index=0&id=533bc66e&lang=stylus&scoped=true&
      var Radiovue_type_style_index_0_id_533bc66e_lang_stylus_scoped_true_ = __webpack_require__('8088')

      // CONCATENATED MODULE: ./src/components/Fields/Radio.vue

      /* normalize component */

      var Radio_component = normalizeComponent(
        Fields_Radiovue_type_script_lang_js_,
        Radiovue_type_template_id_533bc66e_scoped_true_lang_pug_render,
        Radiovue_type_template_id_533bc66e_scoped_true_lang_pug_staticRenderFns,
        false,
        null,
        '533bc66e',
        null

      )

      Radio_component.options.__file = 'Radio.vue'
      /* harmony default export */ var Radio = (Radio_component.exports)
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/Control.vue?vue&type=script&lang=js&

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

      /* harmony default export */ var Controlvue_type_script_lang_js_ = ({
        name: 'Control',
        components: {
          appInput: Input,
          appSelect: Select,
          appTextarea: Textarea,
          appCheckbox: Checkbox,
          appRadio: Radio
        },
        data: function data () {
          return {
            parent: this.$parent,
            value: undefined
          }
        },
        watch: {
          value: function value (val) {
            this.parent.formValues[this.item.label] = val
          }
        },
        computed: {
          fieldError: function fieldError () {
            var _this = this

            return this.errors.items.find(function (_ref) {
              var field = _ref.field,
                scope = _ref.scope
              return field === _this.item.label && _this.formName === scope
            })
          }
        },
        props: {
          item: {
            type: Object,
            required: true
          },
          formName: {
            type: String,
            required: true
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Fields/Control.vue?vue&type=script&lang=js&
      /* harmony default export */ var Fields_Controlvue_type_script_lang_js_ = (Controlvue_type_script_lang_js_)
      // CONCATENATED MODULE: ./src/components/Fields/Control.vue

      /* normalize component */

      var Control_component = normalizeComponent(
        Fields_Controlvue_type_script_lang_js_,
        Controlvue_type_template_id_fafbbb2a_lang_pug_render,
        Controlvue_type_template_id_fafbbb2a_lang_pug_staticRenderFns,
        false,
        null,
        null,
        null

      )

      Control_component.options.__file = 'Control.vue'
      /* harmony default export */ var Control = (Control_component.exports)
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Form/Form.vue?vue&type=script&lang=js&

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

      var getLabels = function getLabels (_ref) {
        var label = _ref.label
        return label
      }

      var Formvue_type_script_lang_js_valueToProp = function valueToProp (object) {
        return pickAll_default()(object, {})
      }

      /* harmony default export */ var Formvue_type_script_lang_js_ = ({
        name: 'Form',
        components: {
          appLabel: Label,
          appControl: Control
        },
        inject: ['$validator'],
        props: {
          formFields: {
            type: Array,
            required: true
          },
          formName: {
            type: String,
            required: true
          },
          mandatoryAsteriskLegend: {
            type: String,
            default: '* field required'
          },
          btnSubmitText: {
            type: String,
            default: 'Submit'
          },
          btnResetText: {
            type: String,
            default: 'Reset'
          }
        },
        data: function data () {
          return {
            formValues: undefined,
            allControls: []
          }
        },
        created: function created () {
          this.formValues = pipe_default()(flatten_default.a, map_default()(getLabels), Formvue_type_script_lang_js_valueToProp)(this.formFields)
        },
        mounted: function mounted () {
          this.allControls = this.$refs.control
        },
        computed: {
          isFormValid: function isFormValid () {
            var allControlRequire = this.allControls.filter(function (_ref2) {
              var item = _ref2.item
              return item.isRequired === undefined
            })
            var isAllControlRequireWithValue = allControlRequire.every(function (_ref3) {
              var value = _ref3.value
              return !!value
            })
            var isFormValuesEmpty = Object.values(this.formValues).every(function (x) {
              return x === undefined
            })
            return isAllControlRequireWithValue && !isFormValuesEmpty
          }
        },
        methods: {
          beforeSubmit: (function () {
            var _beforeSubmit = _asyncToGenerator(
              /* #__PURE__ */
              regeneratorRuntime.mark(function _callee (ev) {
                var result
                return regeneratorRuntime.wrap(function _callee$ (_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2
                        return this.$validator.validateAll(this.formName)

                      case 2:
                        result = _context.sent
                        result && this.isFormValid && this.$root.$emit('formSubmitted', {
                          formName: this.formName,
                          values: this.formValues
                        })
                        result && this.resetForm(ev)

                      case 5:
                      case 'end':
                        return _context.stop()
                    }
                  }
                }, _callee, this)
              }))

            return function beforeSubmit (_x) {
              return _beforeSubmit.apply(this, arguments)
            }
          }()),
          resetFormValues: function resetFormValues () {
            this.allControls.map(function (x) {
              x.value = ''
            })
            var subValues = this.allControls.filter(function (x) {
              return x.$children[0].value
            })
            subValues.map(function (x) {
              x.$children[0].value = []
            })
          },
          resetForm: function resetForm (ev) {
            this.resetFormValues()
            this.errors.clear(this.formName)

            try {
              ev.target.reset()
            } catch (err) {
              // eslint-disable-next-line
        ev && ev.target.reset;
            }

            this.$validator.reset()
          }
        }
      })
      // CONCATENATED MODULE: ./src/components/Form/Form.vue?vue&type=script&lang=js&
      /* harmony default export */ var Form_Formvue_type_script_lang_js_ = (Formvue_type_script_lang_js_)
      // EXTERNAL MODULE: ./src/components/Form/Form.vue?vue&type=style&index=0&lang=stylus&
      var Formvue_type_style_index_0_lang_stylus_ = __webpack_require__('fb5e')

      // CONCATENATED MODULE: ./src/components/Form/Form.vue

      /* normalize component */

      var Form_component = normalizeComponent(
        Form_Formvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null

      )

      Form_component.options.__file = 'Form.vue'
      /* harmony default export */ var Form = (Form_component.exports)
      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

      /* harmony default export */ var entry_lib = __webpack_exports__['default'] = (Form)
      /***/ },

    /***/ 'fb5e':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('1ab0')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__)
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a)
      /***/ },

    /***/ 'fd46':
    /***/ function (module, exports, __webpack_require__) {
      var _isArray = /* #__PURE__ */__webpack_require__('84eb')

      /**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */

      function _checkForMethod (methodname, fn) {
        return function () {
          var length = arguments.length
          if (length === 0) {
            return fn()
          }
          var obj = arguments[length - 1]
          return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1))
        }
      }
      module.exports = _checkForMethod
      /***/ },

    /***/ 'fd6f':
    /***/ function (module, exports) {
      function _isTransformer (obj) {
        return typeof obj['@@transducer/step'] === 'function'
      }
      module.exports = _isTransformer
      /***/ }

    /******/ })['default']
// # sourceMappingURL=vue-form-json.common.js.map

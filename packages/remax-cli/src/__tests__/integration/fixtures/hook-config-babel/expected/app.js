require('./runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__);


var _a = [];

var _f = function _f(p) {
  return p.default || p;
};

var _r = [];

for (var _i = 0; _i < _a.length; _i++) {
  _r.push(_f(_a[_i], _i, _a));
}

var pluginDriver = new _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["PluginDriver"](_r);
_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["RuntimeOptions"].apply({
  platform: "ali",
  debug: false,
  pxToRpx: true,
  pluginDriver: pluginDriver,
  hostComponents: _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__["hostComponents"],
  pageEvents: _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__["pageEvents"],
  appEvents: _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__["appEvents"]
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix/runtime");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require('/__remix_runtime_options__');

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


App(Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"])(_app_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) { _setPrototypeOf(subClass, superClass); } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) { return false; } if (Reflect.construct.sham) { return false; } if (typeof Proxy === "function") { return true; } try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
],[[0,0]]]);

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcMenu = require("rc-menu");

var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuContext = _interopRequireDefault(require("./MenuContext"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _Sider = require("../layout/Sider");

var _reactNode = require("../_util/reactNode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var MenuItem =
/** @class */
function () {
  var MenuItem = /*#__PURE__*/function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    var _super = _createSuper(MenuItem);

    function MenuItem() {
      var _this;

      _classCallCheck(this, MenuItem);

      _this = _super.apply(this, arguments);

      _this.onKeyDown = function (e) {
        _this.menuItem.onKeyDown(e);
      };

      _this.saveMenuItem = function (menuItem) {
        _this.menuItem = menuItem;
      };

      _this.renderItem = function (_ref) {
        var siderCollapsed = _ref.siderCollapsed;
        var _this$props = _this.props,
            level = _this$props.level,
            className = _this$props.className,
            children = _this$props.children,
            rootPrefixCls = _this$props.rootPrefixCls;

        var _a = _this.props,
            title = _a.title,
            icon = _a.icon,
            danger = _a.danger,
            rest = __rest(_a, ["title", "icon", "danger"]);

        return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref2) {
          var _classNames;

          var inlineCollapsed = _ref2.inlineCollapsed,
              direction = _ref2.direction;
          var tooltipTitle = title;

          if (typeof title === 'undefined') {
            tooltipTitle = level === 1 ? children : '';
          } else if (title === false) {
            tooltipTitle = '';
          }

          var tooltipProps = {
            title: tooltipTitle
          };

          if (!siderCollapsed && !inlineCollapsed) {
            tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
            // ref: https://github.com/ant-design/ant-design/issues/16742

            tooltipProps.visible = false;
          }

          var childrenLength = (0, _toArray["default"])(children).length;
          return /*#__PURE__*/React.createElement(_tooltip["default"], _extends({}, tooltipProps, {
            placement: direction === 'rtl' ? 'left' : 'right',
            overlayClassName: "".concat(rootPrefixCls, "-inline-collapsed-tooltip")
          }), /*#__PURE__*/React.createElement(_rcMenu.Item, _extends({}, rest, {
            className: (0, _classnames["default"])(className, (_classNames = {}, _defineProperty(_classNames, "".concat(rootPrefixCls, "-item-danger"), danger), _defineProperty(_classNames, "".concat(rootPrefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames)),
            title: title,
            ref: _this.saveMenuItem
          }), icon, _this.renderItemChildren(inlineCollapsed)));
        });
      };

      return _this;
    }

    _createClass(MenuItem, [{
      key: "renderItemChildren",
      value: function renderItemChildren(inlineCollapsed) {
        var _this$props2 = this.props,
            icon = _this$props2.icon,
            children = _this$props2.children,
            level = _this$props2.level,
            rootPrefixCls = _this$props2.rootPrefixCls; // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456

        if (!icon || (0, _reactNode.isValidElement)(children) && children.type === 'span') {
          if (children && inlineCollapsed && level === 1 && typeof children === 'string') {
            return /*#__PURE__*/React.createElement("div", {
              className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
            }, children.charAt(0));
          }

          return children;
        }

        return /*#__PURE__*/React.createElement("span", null, children);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, this.renderItem);
      }
    }]);

    return MenuItem;
  }(React.Component);

  MenuItem.isMenuItem = true;
  return MenuItem;
}();

var _default = MenuItem;
exports["default"] = _default;
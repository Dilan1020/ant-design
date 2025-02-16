"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcCheckbox = _interopRequireDefault(require("rc-checkbox"));

var _Group = require("./Group");

var _configProvider = require("../config-provider");

var _devWarning = _interopRequireDefault(require("../_util/devWarning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Checkbox =
/** @class */
function () {
  var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Checkbox, _React$PureComponent);

    var _super = _createSuper(Checkbox);

    function Checkbox() {
      var _this;

      _classCallCheck(this, Checkbox);

      _this = _super.apply(this, arguments);

      _this.saveCheckbox = function (node) {
        _this.rcCheckbox = node;
      };

      _this.renderCheckbox = function (_ref) {
        var _classNames;

        var getPrefixCls = _ref.getPrefixCls,
            direction = _ref.direction;

        var _assertThisInitialize = _assertThisInitialized(_this),
            props = _assertThisInitialize.props,
            context = _assertThisInitialize.context;

        var customizePrefixCls = props.prefixCls,
            className = props.className,
            children = props.children,
            indeterminate = props.indeterminate,
            style = props.style,
            onMouseEnter = props.onMouseEnter,
            onMouseLeave = props.onMouseLeave,
            restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);

        var checkboxGroup = context;
        var prefixCls = getPrefixCls('checkbox', customizePrefixCls);

        var checkboxProps = _extends({}, restProps);

        if (checkboxGroup) {
          checkboxProps.onChange = function () {
            if (restProps.onChange) {
              restProps.onChange.apply(restProps, arguments);
            }

            checkboxGroup.toggleOption({
              label: children,
              value: props.value
            });
          };

          checkboxProps.name = checkboxGroup.name;
          checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
          checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
        }

        var classString = (0, _classnames["default"])(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames));
        var checkboxClass = (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
        return (
          /*#__PURE__*/
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          React.createElement("label", {
            className: classString,
            style: style,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave
          }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], _extends({}, checkboxProps, {
            prefixCls: prefixCls,
            className: checkboxClass,
            ref: _this.saveCheckbox
          })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
        );
      };

      return _this;
    }

    _createClass(Checkbox, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _a;

        var value = this.props.value;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.registerValue(value);
        (0, _devWarning["default"])('checked' in this.props || this.context || !('value' in this.props), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?');
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(_ref2) {
        var prevValue = _ref2.value;

        var _a, _b;

        var value = this.props.value;

        if (value !== prevValue) {
          (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(prevValue);
          (_b = this.context) === null || _b === void 0 ? void 0 : _b.registerValue(value);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _a;

        var value = this.props.value;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(value);
      }
    }, {
      key: "focus",
      value: function focus() {
        this.rcCheckbox.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.rcCheckbox.blur();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderCheckbox);
      }
    }]);

    return Checkbox;
  }(React.PureComponent);

  Checkbox.__ANT_CHECKBOX = true;
  Checkbox.defaultProps = {
    indeterminate: false
  };
  Checkbox.contextType = _Group.GroupContext;
  return Checkbox;
}();

var _default = Checkbox;
exports["default"] = _default;
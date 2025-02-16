"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderSwitcherIcon;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

var _FileOutlined = _interopRequireDefault(require("@ant-design/icons/FileOutlined"));

var _MinusSquareOutlined = _interopRequireDefault(require("@ant-design/icons/MinusSquareOutlined"));

var _PlusSquareOutlined = _interopRequireDefault(require("@ant-design/icons/PlusSquareOutlined"));

var _CaretDownFilled = _interopRequireDefault(require("@ant-design/icons/CaretDownFilled"));

var _reactNode = require("../../_util/reactNode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function renderSwitcherIcon(prefixCls, switcherIcon, showLine, _ref) {
  var isLeaf = _ref.isLeaf,
      expanded = _ref.expanded,
      loading = _ref.loading;

  if (loading) {
    return /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      className: "".concat(prefixCls, "-switcher-loading-icon")
    });
  }

  if (isLeaf) {
    return showLine ? /*#__PURE__*/React.createElement(_FileOutlined["default"], {
      className: "".concat(prefixCls, "-switcher-line-icon")
    }) : null;
  }

  var switcherCls = "".concat(prefixCls, "-switcher-icon");

  if ((0, _reactNode.isValidElement)(switcherIcon)) {
    return (0, _reactNode.cloneElement)(switcherIcon, {
      className: (0, _classnames["default"])(switcherIcon.props.className || '', switcherCls)
    });
  }

  if (switcherIcon) {
    return switcherIcon;
  }

  if (showLine) {
    return expanded ? /*#__PURE__*/React.createElement(_MinusSquareOutlined["default"], {
      className: "".concat(prefixCls, "-switcher-line-icon")
    }) : /*#__PURE__*/React.createElement(_PlusSquareOutlined["default"], {
      className: "".concat(prefixCls, "-switcher-line-icon")
    });
  }

  return /*#__PURE__*/React.createElement(_CaretDownFilled["default"], {
    className: switcherCls
  });
}
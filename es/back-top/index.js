function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import Animate from 'rc-animate';
import addEventListener from "rc-util/es/Dom/addEventListener";
import classNames from 'classnames';
import omit from 'omit.js';
import VerticalAlignTopOutlined from '@ant-design/icons/VerticalAlignTopOutlined';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import { ConfigContext } from '../config-provider';
import getScroll from '../_util/getScroll';
import scrollTo from '../_util/scrollTo';

var BackTop = function BackTop(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var ref = /*#__PURE__*/React.createRef();
  var scrollEvent = React.useRef();

  var getDefaultTarget = function getDefaultTarget() {
    return ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;
  };

  var handleScroll = throttleByAnimationFrame(function (e) {
    var visibilityHeight = props.visibilityHeight;
    var scrollTop = getScroll(e.target, true);
    setVisible(scrollTop > visibilityHeight);
  });

  var bindScrollEvent = function bindScrollEvent() {
    var target = props.target;
    var getTarget = target || getDefaultTarget;
    var container = getTarget();
    scrollEvent.current = addEventListener(container, 'scroll', function (e) {
      handleScroll(e);
    });
    handleScroll({
      target: container
    });
  };

  React.useEffect(function () {
    bindScrollEvent();
    return function () {
      if (scrollEvent.current) {
        scrollEvent.current.remove();
      }

      handleScroll.cancel();
    };
  }, [props.target]);

  var getVisible = function getVisible() {
    if ('visible' in props) {
      return props.visible;
    }

    return visible;
  };

  var scrollToTop = function scrollToTop(e) {
    var onClick = props.onClick,
        target = props.target;
    scrollTo(0, {
      getContainer: target || getDefaultTarget
    });

    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  var renderChildren = function renderChildren(_ref) {
    var prefixCls = _ref.prefixCls;
    var children = props.children;
    var defaultElement = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-icon")
    }, /*#__PURE__*/React.createElement(VerticalAlignTopOutlined, null)));
    return /*#__PURE__*/React.createElement(Animate, {
      component: "",
      transitionName: "fade"
    }, getVisible() ? /*#__PURE__*/React.createElement("div", null, children || defaultElement) : null);
  };

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;
  var prefixCls = getPrefixCls('back-top', customizePrefixCls);
  var classString = classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl')); // fix https://fb.me/react-unknown-prop

  var divProps = omit(props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target', 'visible']);
  return /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
    className: classString,
    onClick: scrollToTop,
    ref: ref
  }), renderChildren({
    prefixCls: prefixCls
  }));
};

BackTop.defaultProps = {
  visibilityHeight: 400
};
export default /*#__PURE__*/React.memo(BackTop);
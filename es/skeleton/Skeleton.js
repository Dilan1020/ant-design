function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import * as React from 'react';
import classNames from 'classnames';
import Title from './Title';
import Paragraph from './Paragraph';
import { ConfigConsumer } from '../config-provider';
import Element from './Element';
import SkeletonAvatar from './Avatar';
import SkeletonButton from './Button';
import SkeletonInput from './Input';

function getComponentProps(prop) {
  if (prop && _typeof(prop) === 'object') {
    return prop;
  }

  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }

  return {
    size: 'large',
    shape: 'circle'
  };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }

  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {}; // Width

  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  } // Rows


  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

var Skeleton = function Skeleton(props) {
  var renderSkeleton = function renderSkeleton(_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
        loading = props.loading,
        className = props.className,
        children = props.children,
        avatar = props.avatar,
        title = props.title,
        paragraph = props.paragraph,
        active = props.active,
        round = props.round;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);

    if (loading || !('loading' in props)) {
      var _classNames;

      var hasAvatar = !!avatar;
      var hasTitle = !!title;
      var hasParagraph = !!paragraph; // Avatar

      var avatarNode;

      if (hasAvatar) {
        var avatarProps = _extends(_extends({
          prefixCls: "".concat(prefixCls, "-avatar")
        }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar)); // We direct use SkeletonElement as avatar in skeleton internal.


        avatarNode = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-header")
        }, /*#__PURE__*/React.createElement(Element, avatarProps));
      }

      var contentNode;

      if (hasTitle || hasParagraph) {
        // Title
        var $title;

        if (hasTitle) {
          var titleProps = _extends(_extends({
            prefixCls: "".concat(prefixCls, "-title")
          }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));

          $title = /*#__PURE__*/React.createElement(Title, titleProps);
        } // Paragraph


        var paragraphNode;

        if (hasParagraph) {
          var paragraphProps = _extends(_extends({
            prefixCls: "".concat(prefixCls, "-paragraph")
          }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));

          paragraphNode = /*#__PURE__*/React.createElement(Paragraph, paragraphProps);
        }

        contentNode = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, $title, paragraphNode);
      }

      var cls = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), _defineProperty(_classNames, "".concat(prefixCls, "-active"), active), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-round"), round), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, avatarNode, contentNode);
    }

    return children;
  };

  return /*#__PURE__*/React.createElement(ConfigConsumer, null, renderSkeleton);
};

Skeleton.defaultProps = {
  avatar: false,
  title: true,
  paragraph: true
};
Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Input = SkeletonInput;
export default Skeleton;
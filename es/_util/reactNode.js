import * as React from 'react';
export var isValidElement = React.isValidElement;
export function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props() : props);
}
export function cloneElement(element, props) {
  return replaceElement(element, element, props);
}
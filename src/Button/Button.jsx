import React from 'react';
import PropTypes from 'prop-types';

import { Base, Side } from './Button.styles';

export function Button({ children, iconLeft, iconRight, view }) {
  return (
    <Base view={view}>
      {iconLeft && <Side dir="left">{iconLeft}</Side>}
      {children}
      {iconRight && <Side dir="right">{iconRight}</Side>}
    </Base>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  view: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

Button.defaultProps = {
  children: null,
  iconLeft: null,
  iconRight: null,
  view: 'primary',
};

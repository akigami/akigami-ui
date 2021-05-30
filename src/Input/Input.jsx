import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

import { Base, Input as SInput, Side } from './Input.styles';

export function Input({
  type,
  iconLeft,
  iconRight,
  className,
  style,
  view,
  rounded,
  ...props
}) {
  const inputProps = {
    type,
  };

  const textAreaProps = {
    as: TextareaAutosize,
  };

  return (
    <Base rounded={rounded} view={view} className={className} style={style}>
      {iconLeft && <Side dir="left">{iconLeft}</Side>}
      <SInput
        {...props}
        {...(type === 'textarea' ? textAreaProps : inputProps)}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
      {iconRight && <Side dir="right">{iconRight}</Side>}
    </Base>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(Object),
  view: PropTypes.oneOf(['danger', 'primary']),
  rounded: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  iconLeft: null,
  iconRight: null,
  className: null,
  style: null,
  view: 'primary',
  rounded: false,
};

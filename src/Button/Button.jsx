import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { isPromise } from '../utils/isPromise';
import { Spinner } from './Spinner';
import { Base, Side } from './Button.styles';

export function Button({
  children,
  iconLeft,
  iconRight,
  view,
  loading,
  onClick,
  disabled,
}) {
  const [loadingState, setLoadingState] = useState(loading);
  useEffect(() => setLoadingState(loading), [loading]);

  function iconComposer(icon, dir, preventLoading = false) {
    const _loading = preventLoading ? false : loadingState;
    if (_loading)
      return (
        <Side dir={dir}>
          <Spinner />
        </Side>
      );
    if (!_loading && icon) return <Side dir={dir}>{icon}</Side>;
    return false;
  }

  async function clickHandler(event) {
    if (typeof onClick === 'function') {
      const _event = onClick(event);
      if (isPromise(_event)) {
        setLoadingState(true);
        await _event;
        setLoadingState(false);
      }
    }
  }

  return (
    <Base
      view={view}
      icon={Boolean(iconLeft || iconRight)}
      onClick={clickHandler}
      loading={Boolean(loadingState)}
      disabled={disabled}
    >
      {(iconLeft || loadingState) && iconComposer(iconLeft, 'left')}
      {children}
      {iconRight &&
        iconComposer(iconRight, 'right', Boolean(iconLeft && iconRight))}
    </Base>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  view: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  iconLeft: null,
  iconRight: null,
  view: 'primary',
  loading: false,
  disabled: false,
  onClick: null,
};

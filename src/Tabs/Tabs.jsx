import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Base } from './Tabs.styles';

export function Tabs({ items, active, onChange, ...props }) {
  const defaultActvie =
    active || (Array.isArray(items) && items[0] && items[0].value);
  const [_active, _setActive] = useState(defaultActvie);
  useEffect(() => {
    _setActive(defaultActvie);
  }, [active]);

  return (
    <Base {...props}>
      {items.map((item) => {
        const isActive = item.value === _active;

        function callback() {
          _setActive(item.value);
          if (onChange) {
            onChange(item.value);
          }
        }

        return (
          <Button
            key={item.value}
            view={isActive ? 'primary' : 'shadow'}
            onClick={callback}
          >
            {item.title}
          </Button>
        );
      })}
    </Base>
  );
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  active: PropTypes.string,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  items: [],
  active: null,
  onChange: null,
};

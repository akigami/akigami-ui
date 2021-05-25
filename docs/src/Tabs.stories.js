import React, { useState } from 'react';

import { Tabs } from 'akigami-ui';

export default {
  title: 'UI/Tabs',
  component: Tabs,
  argTypes: {
    active: {
      control: 'string'
    }
  },
};

const items = [
  {
    value: 'menu1',
    title: 'Меню 1',
  },
  {
    value: 'menu2',
    title: 'Меню 2',
  },
  {
    value: 'menu3',
    title: 'Меню 3',
  },
  {
    value: 'menu4',
    title: 'Меню 4',
  },
];

export const Rounded = () => (
  <Tabs
    rounded
    items={items}
  />
);

export const Uncontrolled = () => (
  <Tabs
    items={items}
  />
);

export const DefaultActive = () => (
  <Tabs
    active="menu3"
    items={items}
  />
);

export const Controlled = () => {
  const [state, setState] = useState('menu1');
  return (
    <Tabs
      active={state}
      items={items}
      onChange={(value) => {
        console.log('controlled value', value);
        setState(value);
      }}
    />
  )
};
import React from 'react';

import { Button } from 'akigami-ui';
import { Star } from '@styled-icons/fa-regular';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    view: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
  },
};

const Template = (args) => <Button {...args} />;

const commonArgs = {
  children: 'Кнопка',
};

export const Primary = Template.bind({});
Primary.args = {
  ...commonArgs,
  view: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...commonArgs,
  view: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  ...commonArgs,
  view: 'danger',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  ...commonArgs,
  iconLeft: <Star />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  ...commonArgs,
  iconRight: <Star />,
};

export const IconBoth = Template.bind({});
IconBoth.args = {
  ...commonArgs,
  iconLeft: <Star />,
  iconRight: <Star />,
};
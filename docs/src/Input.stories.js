import React from 'react';

import { Input } from 'akigami-ui';
import { CreditCard } from '@styled-icons/boxicons-regular/CreditCard';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    view: {
      control: 'select',
      options: ['primary', 'danger'],
    },
    rounded: {
      control: 'boolean'
    },
    type: {
      control: 'string',
    }
  },
};


const Template = (args) => (
  <div style={{ width: 300 }}>
    <Input {...args} />
  </div>
);

const commonArgs = {
  placeholder: 'Введите текст',
};

export const Rounded = Template.bind({});
Rounded.args = {
  ...commonArgs,
  rounded: true,
};

export const RoundedIcon = Template.bind({});
RoundedIcon.args = {
  ...commonArgs,
  rounded: true,
  iconLeft: <CreditCard />
};

export const RoundedTextarea = Template.bind({});
RoundedTextarea.args = {
  ...commonArgs,
  rounded: true,
  type: 'textarea',
};

export const RoundedTextareaIcon = Template.bind({});
RoundedTextareaIcon.args = {
  ...commonArgs,
  rounded: true,
  type: 'textarea',
  iconLeft: <CreditCard />
};

export const Default = Template.bind({});
Default.args = commonArgs;

export const IconLeft = Template.bind({});
IconLeft.args = {
  ...commonArgs,
  iconLeft: <CreditCard />
};

export const IconRight = Template.bind({});
IconRight.args = {
  ...commonArgs,
  iconRight: <CreditCard />
};

export const IconBoth = Template.bind({});
IconBoth.args = {
  ...commonArgs,
  iconLeft: <CreditCard />,
  iconRight: <CreditCard />
};

export const Email = Template.bind({});
Email.args = {
  ...commonArgs,
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  ...commonArgs,
  type: 'password',
};

export const Textarea = Template.bind({});
Textarea.args = {
  ...commonArgs,
  type: 'textarea',
};

export const TextareaIcon = Template.bind({});
Textarea.args = {
  ...commonArgs,
  type: 'textarea',
  iconLeft: <CreditCard />
};

export const Error = Template.bind({});
Error.args = {
  ...commonArgs,
  view: 'danger',
};
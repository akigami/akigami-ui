import React from 'react';

import { Input } from 'akigami-ui';
import { CreditCard } from '@styled-icons/boxicons-regular/CreditCard';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
  },
};


const Template = (args) => (
  <div style={{ width: 300 }}>
    <Input {...args} />
  </div>
);


export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const RoundedIcon = Template.bind({});
RoundedIcon.args = {
  rounded: true,
  iconLeft: <CreditCard />
};

export const RoundedTextarea = Template.bind({});
RoundedTextarea.args = {
  rounded: true,
  type: 'textarea',
};

export const RoundedTextareaIcon = Template.bind({});
RoundedTextareaIcon.args = {
  rounded: true,
  type: 'textarea',
  iconLeft: <CreditCard />
};

export const Default = Template.bind({});

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: <CreditCard />
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: <CreditCard />
};

export const IconBoth = Template.bind({});
IconBoth.args = {
  iconLeft: <CreditCard />,
  iconRight: <CreditCard />
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: 'textarea',
};

export const TextareaIcon = Template.bind({});
Textarea.args = {
  type: 'textarea',
  iconLeft: <CreditCard />
};

export const Error = Template.bind({});
Error.args = {
  view: 'danger',
};
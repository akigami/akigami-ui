import React from 'react';

import { Button } from 'akigami-ui';
import { FileDownload } from '@styled-icons/material-outlined/FileDownload';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    view: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    loading: {
      control: 'boolean'
    }
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

export const Disabled = Template.bind({});
Disabled.args = {
  ...commonArgs,
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...commonArgs,
  loading: true,
};

export const WithEvent = (args) => {
  const callback = () => {
    alert('Worked');
  };
  return <Button {...args} onClick={callback}>Кликни на меня</Button>;
};

export const WithPromiseEvent = (args) => {
  const callback = async (event) => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Worked with promise!');
      }, 2000);
    });
    alert(res);
  };
  return <Button {...args} onClick={callback}>Кликни на меня</Button>;
};

export const WithIconAndPromiseEvent = (args) => {
  const callback = async (event) => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Worked with promise!');
      }, 2000);
    });
    alert(res);
  };
  return (
    <Button
      {...args}
      onClick={callback}
      iconLeft={<FileDownload />}
    >
      Кликни на меня
    </Button>
  );
};

export const WithBothIconsAndPromiseEvent = (args) => {
  const callback = async (event) => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Worked with promise!');
      }, 2000);
    });
    alert(res);
  };
  return (
    <Button
      {...args}
      onClick={callback}
      iconLeft={<FileDownload />}
      iconRight={<FileDownload />}
    >
      Кликни на меня
    </Button>
  );
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  ...commonArgs,
  iconLeft: <FileDownload />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  ...commonArgs,
  iconRight: <FileDownload />,
};

export const IconBoth = Template.bind({});
IconBoth.args = {
  ...commonArgs,
  iconLeft: <FileDownload />,
  iconRight: <FileDownload />,
};
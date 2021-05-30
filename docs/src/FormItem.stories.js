import React from 'react';

import { FormItem, Input } from 'akigami-ui';

export default {
  title: 'UI/FormItem',
  component: FormItem,
  argTypes: {
    id: {
      type: 'string',
    },
    label: {
      type: 'string',
    },
    help: {
      type: 'string',
    },
    error: {
      type: 'string',
    },
  },
};


const Template = (args) => (
  <div style={{ width: 300 }}>
    <FormItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: 'Default-input',
  Control: Input,
};

export const Label = Template.bind({});
Label.args = {
  id: 'Label-input',
  label: 'Назавние поля',
  Control: Input,
};

export const LabelAndHelp = Template.bind({});
LabelAndHelp.args = {
  id: 'LabelAndHelp-input',
  label: 'Назавние поля',
  help: 'Подсказка',
  Control: Input,
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'WithError-input',
  label: 'Назавние поля',
  help: 'Подсказка',
  error: 'Сообщение об ошибке',
  Control: Input,
};

export const LongError = Template.bind({});
LongError.args = {
  id: 'LongError-input',
  label: 'Назавние поля',
  help: 'Подсказка',
  error: 'Очень длинное сообщение об ошибке из за возникшей проблемы на сервере. Данные не были отправлены.',
  Control: Input,
};

export const Complex = () => (
  <form style={{ width: 300 }}>
    <FormItem
      id="email"
      label="Email"
      Control={Input}
      controlProps={{
        type: 'email',
        name: 'email',
        autoComplete: 'username',
      }}
    />
    <FormItem
      id="password"
      
      label="Пароль"
      help="Не менее 8 символов"
      Control={Input}
      controlProps={{
        type: 'password',
        name: 'password',
        autoComplete: 'current-password',
      }}
    />
  </form>
);

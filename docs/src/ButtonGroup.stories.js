import React from 'react';

import { Button, ButtonGroup } from 'akigami-ui';

export default {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
};

export const Primary = () => (
  <ButtonGroup>
    <Button>Выбор 1</Button>
    <Button>Выбор 2</Button>
    <Button>Выбор 3</Button>
  </ButtonGroup>
);

export const Secondary = () => (
  <ButtonGroup>
    <Button view="secondary">Выбор 1</Button>
    <Button view="secondary">Выбор 2</Button>
    <Button view="secondary">Выбор 3</Button>
  </ButtonGroup>
);

export const Danger = () => (
  <ButtonGroup>
    <Button view="danger">Выбор 1</Button>
    <Button view="danger">Выбор 2</Button>
    <Button view="danger">Выбор 3</Button>
  </ButtonGroup>
);

export const Shadow = () => (
  <div style={{ boxSizing: 'border-box', padding: 12, width: 500, height: 140, background: `url(https://i.picsum.photos/id/467/500/140.jpg?hmac=W0xfwu-Jz1ybgZyXBi7IBNPKy621kPT8HhnAQRmbgP0)` }}>
    <ButtonGroup>
      <Button view="shadow">Выбор 1</Button>
      <Button view="shadow">Выбор 2</Button>
      <Button view="shadow">Выбор 3</Button>
    </ButtonGroup>
  </div>
);

export const ShadowInverted = () => (
  <div style={{ boxSizing: 'border-box', padding: 12, width: 500, height: 140, background: `url(https://i.picsum.photos/id/1063/500/140.jpg?hmac=w_U3q5Kk353k4B8fTiBZ_bG7XJT4mcdTwY09i_1vzek)` }}>
    <ButtonGroup>
      <Button view="shadowInverted">Выбор 1</Button>
      <Button view="shadowInverted">Выбор 2</Button>
      <Button view="shadowInverted">Выбор 3</Button>
    </ButtonGroup>
  </div>
);

export const Mixed = () => (
  <div style={{ boxSizing: 'border-box', padding: 12, width: 600, height: 140, background: `url(https://i.picsum.photos/id/729/600/140.jpg?hmac=fs-TvS3rZwAJQVXKGGJBj6GETm54t3ldsZNBko0Mi_s)` }}>
    <ButtonGroup>
      <Button view="primary">Выбор 1</Button>
      <Button view="danger">Выбор 2</Button>
      <Button view="secondary">Выбор 3</Button>
      <Button view="shadow">Выбор 4</Button>
      <Button view="shadowInverted">Выбор 5</Button>
    </ButtonGroup>
  </div>
);

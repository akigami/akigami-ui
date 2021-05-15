import styled, { css } from 'styled-components';

const views = {
  primary: ({ theme }) => css`
    color: ${theme.colors.textInverted};
    background-color: ${theme.colors.primary};
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
    &:active {
      background-color: ${theme.colors.primaryActive};
    }
  `,
  secondary: ({ theme }) => css`
    color: ${theme.colors.text};
    background-color: ${theme.colors.secondary};
    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }
    &:active {
      background-color: ${theme.colors.secondaryActive};
    }
  `,
  danger: ({ theme }) => css`
    color: ${theme.colors.textInverted};
    background-color: ${theme.colors.danger};
    &:hover {
      background-color: ${theme.colors.dangerHover};
    }
    &:active {
      background-color: ${theme.colors.dangerActive};
    }
  `,
};

export const Base = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.button.weight};
  padding: ${({ theme }) => theme.button.padding};
  min-height: ${({ theme }) => theme.button.height}px;
  border-radius: ${({ theme }) => theme.button.height / 2}px;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.textInverted},
      0 0 0 4px ${({ theme }) => theme.colors.focus};
  }

  will-change: background-color, box-shadow;
  transition: ${({ theme }) =>
    `background-color ${theme.effects.timing} ${theme.effects.timingFunction},
     box-shadow  ${theme.effects.timing} ${theme.effects.timingFunction}`};

  ${(props) => views[props.view]};
`;

export const Side = styled.div`
  padding-left: ${(props) => (props.dir === 'right' ? 8 : 0)}px;
  padding-right: ${(props) => (props.dir === 'left' ? 8 : 0)}px;
`;

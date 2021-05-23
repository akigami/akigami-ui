import styled, { css, keyframes } from 'styled-components';

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const views = {
  primary: ({ theme, loading }) => css`
    color: ${theme.colors.textInverted};
    background-color: ${loading
      ? theme.colors.primaryActive
      : theme.colors.primary};
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
    &:active {
      background-color: ${theme.colors.primaryActive};
    }
  `,
  secondary: ({ theme, loading }) => css`
    color: ${theme.colors.text};
    background-color: ${loading
      ? theme.colors.secondaryActive
      : theme.colors.secondary};
    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }
    &:active {
      background-color: ${theme.colors.secondaryActive};
    }
  `,
  danger: ({ theme, loading }) => css`
    color: ${theme.colors.textInverted};
    background-color: ${loading
      ? theme.colors.dangerActive
      : theme.colors.danger};
    &:hover {
      background-color: ${theme.colors.dangerHover};
    }
    &:active {
      background-color: ${theme.colors.dangerActive};
    }
  `,
  shadow: ({ theme, loading }) => css`
    color: ${theme.colors.text};
    background-color: ${loading
      ? theme.colors.shadowActive
      : theme.colors.shadow};
    &:hover {
      background-color: ${theme.colors.shadowHover};
    }
    &:active {
      background-color: ${theme.colors.shadowActive};
    }
  `,
  shadowInverted: ({ theme, loading }) => css`
    color: ${theme.colors.textInverted};
    background-color: ${loading
      ? theme.colors.shadowInvertedActive
      : theme.colors.shadowInverted};
    &:hover {
      background-color: ${theme.colors.shadowInvertedHover};
    }
    &:active {
      background-color: ${theme.colors.shadowInvertedActive};
    }
  `,
  disabled: ({ theme }) => css`
    color: ${theme.colors.textDisabled};
    background-color: ${theme.colors.disabled};
  `,
};

export const Base = styled('button').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['loading'].includes(prop) && defaultValidatorFn(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.block ? '100%' : 'auto')};
  cursor: ${(props) =>
    props.disabled || props.loading ? 'default' : 'pointer'};
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.button.fontSize};
  line-height: ${({ theme }) => theme.button.lineHeight};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.button.weight};
  margin: 0;
  padding: ${(props) =>
    props.icon ? props.theme.button.paddingIcon : props.theme.button.padding};
  min-height: ${({ theme }) => theme.button.height}px;
  border-radius: ${({ theme }) => theme.button.height / 2}px;
  pointer-events: ${(props) =>
    props.disabled || props.loading ? 'none' : 'auto'};

  box-shadow: 0 0 0 2px transparent, 0 0 0 4px transparent;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.textInverted},
      0 0 0 4px ${({ theme }) => theme.colors.focus};
  }

  will-change: background-color, box-shadow;
  transition: ${({ theme }) =>
    `background-color ${theme.effects.timing} ${theme.effects.timingFunction},
     box-shadow  ${theme.effects.timing} ${theme.effects.timingFunction}`};

  ${(props) => (props.disabled ? views.disabled : views[props.view])};
`;

export const Side = styled.div`
  padding-left: ${(props) => (props.dir === 'right' ? 8 : 0)}px;
  padding-right: ${(props) => (props.dir === 'left' ? 8 : 0)}px;
  box-sizing: border-box;
  display: inline-flex;
  width: 26px;
  height: 18px;
  margin-top: -2px;

  > svg {
    width: 18px;
    height: 18px;
  }
`;

export const SpinSvg = styled.svg`
  animation: ${rotating} 1s linear infinite;
`;

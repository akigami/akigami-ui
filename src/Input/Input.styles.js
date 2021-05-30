import styled, { css } from 'styled-components';

export const Input = styled.input`
  min-height: ${(props) => props.theme.input.height}px;
  font-family: ${(props) => props.theme.font};
  font-weight: ${(props) => props.theme.input.weight};
  font-size: 14px;
  width: 100%;
  line-height: 1.4;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  padding: ${(props) =>
    `9px ${props.iconRight ? props.theme.input.height : 12}px 10px ${
      props.iconLeft ? props.theme.input.height : 12
    }px`};
  margin: 0;
  position: relative;
  z-index: 1;
`;

export const Side = styled.div`
  width: ${(props) => props.theme.input.height}px;
  height: ${(props) => props.theme.input.height}px;
  position: absolute;
  top: 0;
  ${(props) =>
    props.dir === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export const Base = styled.div`
  min-height: ${(props) => props.theme.input.height}px;
  position: relative;
  display: flex;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: inset 0 0 0 2px
    ${(props) =>
      props.view === 'danger'
        ? props.theme.colors.danger
        : props.theme.colors.secondaryActive};

  &:focus-within {
    box-shadow: inset 0 0 0 2px
      ${(props) =>
        props.view === 'danger'
          ? props.theme.colors.dangerActive
          : props.theme.colors.primary};
  }

  overflow: hidden;
  will-change: box-shadow;
  transition: box-shadow
    ${(props) =>
      `${props.theme.effects.timing} ${props.theme.effects.timingFunction}`};

  border-radius: ${({ theme, rounded }) =>
    rounded ? theme.input.height / 2 : 0}px;

  > ${Input} {
    border-radius: ${({ theme, rounded }) =>
      rounded ? theme.input.height / 2 : 0}px;
  }
`;

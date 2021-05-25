import styled from 'styled-components';
import { Base as ButtonBase } from '../Button/Button.styles';

export const Base = styled.div`
  display: flex;
  box-sizing: content-box;
  padding: ${({ theme }) => theme.tabs.padding}px;
  border-radius: ${({ theme, rounded }) =>
    rounded ? (theme.button.height + theme.tabs.padding * 2) / 2 : 0}px;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${ButtonBase} + ${ButtonBase} {
    margin-left: 8px;
  }
`;

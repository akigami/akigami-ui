import styled from 'styled-components';
import { Base } from '../Button/Button.styles';

export const ButtonGroup = styled.div`
  display: flex;

  > ${Base} {
    border-radius: 0;

    &:focus {
      z-index: 1;
    }
  }
  > ${Base}:first-child {
    border-top-left-radius: ${({ theme }) => theme.button.height / 2}px;
    border-bottom-left-radius: ${({ theme }) => theme.button.height / 2}px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  > ${Base}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: ${({ theme }) => theme.button.height / 2}px;
    border-bottom-right-radius: ${({ theme }) => theme.button.height / 2}px;
  }
`;

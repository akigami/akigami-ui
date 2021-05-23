import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  box-sizing: content-box;
  padding: ${({ theme }) => theme.tabs.padding}px;
  border-radius: ${({ theme }) =>
    (theme.button.height + theme.tabs.padding * 2) / 2}px;
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
`;

import styled from 'styled-components';

export const Base = styled.div`
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.font};
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  color: ${(props) =>
    props.error ? props.theme.colors.danger : props.theme.colors.text};
`;

export const Help = styled.div`
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.error ? props.theme.colors.dangerActive : props.theme.colors.text};
  padding-top: 4px;
  font-size: 13px;
  font-weight: 500;
`;

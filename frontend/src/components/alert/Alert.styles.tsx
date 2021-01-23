import styled from 'styled-components';
export const AlertContainer = styled.div` 
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-sizing: border-box;
  &.success {
    color: ${props => props.theme.text},;
    background-color: ${props => props.theme.inside};
    border-color: ${props => props.theme.foreground};
  }
  &.info {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    border-color: ${props => props.theme.foreground};
  }
  &.error {
    color: ${props => props.theme.text},;
    background-color: ${props => props.theme.invalid};
    border-color: ${props => props.theme.foreground};
  }
  .title-alert {
    font-weight: bold;
    text-transform: uppercase;
  }
  .content-alert {
  }
`;
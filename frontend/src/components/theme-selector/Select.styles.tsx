import styled from 'styled-components'

export const ThemeSelect = styled.select` 
      width: 10em;
      height: 2em;
      color: ${props => props.theme.text};
      background-color: ${props => props.theme.background};
      border: 1px solid ${props => props.theme.text};
      font-weight: bold;
      display: inline;
      @media screen and (max-width: 520px) {
        width: 1.5em;
      }
`;
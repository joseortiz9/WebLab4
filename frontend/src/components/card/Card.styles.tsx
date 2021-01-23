import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  min-width: 0;
  padding: 20px;
  background-color: var(--main-bg);
  background-clip: border-box;
  border: 1px solid ${props => props.theme.textMain};
  border-radius: 0.25rem;
  h1 {
    color: ${props => props.theme.darkText};
  }
  @media screen and (max-width: 758px) {
    & {
      width: 80%;
    }
  }
`
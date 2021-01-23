import styled from 'styled-components'

export const AppStyled = styled.div`
    background-color: ${props => props.theme.background};
    --main-bg: ${props => props.theme.mainBackground};
    --media-bg1: ${props => props.theme.text2};
    --media-bg2: ${props => props.theme.text4};
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    height: 100%
`;


export const LabelWhite = styled.label`
    color: white;
`;


export const Jumbotron = styled.div`
    padding: 1.3rem 1rem;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.lightBackground};
    background-clip: border-box;
    border: 3px solid ${props => props.theme.text};
    border-radius: 0.3rem;
    
    h1 {
        font-size: 1.6rem;
        color: ${props => props.theme.text};
        font-family: 'sans-serif', cursive;
        font-weight: 700;
        text-shadow: 3px 3px 0 ${props => props.theme.textMain},
                    6px 6px 0 ${props => props.theme.text2},
                    10px 10px 0 ${props => props.theme.text3},
                    15px 15px 0 ${props => props.theme.text4};
    }
    
    @media screen and (min-width: 758px) {
        padding: 2rem 2rem;
        & h1 {
          font-size: 2.8rem;
        }
    }
`;
import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 20px;
    
    @media screen and (max-width: 757px) {
        flex-direction: column-reverse;
        & > button {
            margin-top: 5px;
        }
        .card:last-child {
            margin-bottom: 20px;
        }
    }
    
    @media screen and (min-width: 758px) and (max-width: 1169px)  {
        & {
            //flex-direction: column-reverse;
            & .card:first-child {
              margin-right: 20px;
              font-size: 80%;
            }
        }
    }
`;

export const H1Centered = styled.h1`
    text-align: center;
`;
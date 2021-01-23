import styled from 'styled-components'

export const StylishTable = styled.table` 
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    margin-bottom: 1rem;
    color: ${props => props.theme.text};
    text-align: center;
    .inside {
        color: ${props => props.theme.darkText};
        span {
          background-color: ${props => props.theme.inside};
          padding: 4px 3px;
          border-radius: 25px;
        }
    }
    .outside {
        color: ${props => props.theme.background};
        span {
          background-color: ${props => props.theme.invalid};
          padding: 3px 5px;
          border-radius: 25px;
        }
    }
    th {
      color: ${props => props.theme.textMain};
    }
    th, td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid ${props => props.theme.text};
    }
    
    thead th {
        vertical-align: bottom;
        border-bottom: 2px solid ${props => props.theme.text};
    }
    
    tbody + tbody {
        border-top: 2px solid ${props => props.theme.text};
    }
    
    tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
    
    tbody tr:hover {
        color: ${props => props.theme.hover};
        background-color: ${props => props.theme.background};
    }
    // table.default-table {
    //     font-size: 80%;
    //     background-color: var(--media-bg1);
    // }
    // @media screen and (min-width: 758px) and (max-width: 1169px)  {
    //     table.default-table {
    //       background-color: var(--media-bg2);
    //     }
    // }
`;


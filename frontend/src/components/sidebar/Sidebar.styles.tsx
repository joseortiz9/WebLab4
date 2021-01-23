import styled from "styled-components";

export const SidebarOuter = styled.div`
    position: fixed;
    z-index: 1071;
    overflow: visible;
`;


interface ISidebarProps {
    toggled: boolean
}

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid;
    width: 250px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    height: 100vh;
    border-radius: 0;
    border-color: rgb(193,0,0);
    background-color: rgb(255, 255, 255);
    transition: 0.8s ease;
    transform: translatex(${(p: ISidebarProps) => (p.toggled) ? 0 : -300}px);
    padding: 30px 10px;
    * {
      margin-top: 30px;
    }
    a {
        color: ${props => props.theme.text};
        text-decoration: none;
        &.active {
            color: ${props => props.theme.textMain};
            font-weight: bold;
        }
    } 
    & .nav-username {
    color: ${props => props.theme.text4};
    }
    & b:first-child {
        &::after {
          content: "(CLOSE)";
          color: red;
        }
    }
    select {
      width: 100%;
    }
`;
import styled from 'styled-components'
export const NavbarContainer = styled.nav`
  background-color: ${props => props.theme.background};
  position: fixed;
  padding: 0 30px;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 25px 0 ${props => props.theme.text};
  z-index: 1;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  * {
    display: inline;
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
  .display-right {
    align-content: end;
  }
  .toggler-responsive {
    display: none;
  }
  b {
  color: ${props => props.theme.textMain};
  }
  @media screen and (max-width: 757px) {
    & :not(:first-child) {display: none;}
    & .toggler-responsive {
      display: block;
    }
    //&.responsive a, &.responsive select{
    //  float: none;
    //  display: inline-flex;
    //  text-align: left;
    //}
  }
`

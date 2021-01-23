import React from "react";
import {NavbarContainer} from "./Navbar.styles";
import NavigationElements from "../navigation-elements/NavigationElements";

const Navbar = () => {
    return (
        <NavbarContainer id="main-navbar">
            <NavigationElements />
        </NavbarContainer>
    );
}

export default Navbar;
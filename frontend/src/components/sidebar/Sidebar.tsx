import React from "react";
import {SidebarContainer, SidebarOuter} from "./Sidebar.styles";
import NavigationElements from "../navigation-elements/NavigationElements";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";

const Sidebar = () => {
    const toggled = useSelector((state: AppState) => state.sidebar.toggled);
    return (
        <SidebarOuter>
            <SidebarContainer toggled={toggled}>
                <NavigationElements />
            </SidebarContainer>
        </SidebarOuter>
    );
};

export default Sidebar;
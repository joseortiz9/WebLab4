import React from "react";
import {NavLink} from "react-router-dom";
import {isLoggedIn, loggedUser, logout} from "../../store/ducks/Auth";
import ThemeSelector from "../theme-selector/ThemeSelector";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import SidebarToggle from "../sidebar/SidebarToggle";

const NavigationElements = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));
    const authSession = useSelector((state: AppState) => loggedUser(state));
    return (
        <>
            <SidebarToggle />
            <b>ITMO 2020</b>
            <a href="https://github.com/joseortiz9/WebLab4">GitHub repository</a>
            {isAuthenticated ? (
                <>
                    <NavLink to="/">Home</NavLink>
                    <span className="nav-username">{authSession?.username}</span>
                    <a className={"default-btn btn-navbar"} href="#" onClick={() => dispatch(logout(authSession))}>Logout</a>
                </>
            ) : (
                <>
                    <NavLink to="/login">Login</NavLink>
                </>
            )}
            <ThemeSelector />
        </>
    );
};

export default NavigationElements;
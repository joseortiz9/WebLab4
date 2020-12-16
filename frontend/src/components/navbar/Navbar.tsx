import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, loggedUser, logout} from "../../store/ducks/Auth";
import {AppState} from "../../store/ducks";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));
    const authSession = useSelector((state: AppState) => loggedUser(state));
    return (
        <nav>
            <ul>
                <li><b>ITMO 2020</b></li>
                <li><a href="https://github.com/joseortiz9/WebLab4">GitHub repository</a></li>
            </ul>
            <ul className="display-right">
                {isAuthenticated ? (
                    <>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li className="nav-username">{authSession?.username}</li>
                        <li><a className="default-btn btn-navbar" href="#" onClick={() => dispatch(logout(authSession))}>Logout</a></li>
                    </>
                ) : (
                    <>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
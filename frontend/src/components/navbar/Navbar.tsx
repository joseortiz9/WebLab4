import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const isAuthenticated = false;//useSelector(state => isLoggedIn(state))
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
                        <li>Logout</li>
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
import React, {Component, FC} from "react";
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router";

import {IDefaultRouteHoC} from "./SimpleRoute";
import Main from "../pages/Main";

const PrivateRoute: FC<IDefaultRouteHoC> = ({ component, ...rest }) => {
    const isAuthenticated = true;//useSelector(state => isLoggedIn(state));
    return (
        <Route {...rest} render={props => (
            isAuthenticated ? (
                <Main>
                    <Component {...props} />
                </Main>
            ) : (
                <Redirect to='/login' />
            )
        )} />
    )
};

export default PrivateRoute;
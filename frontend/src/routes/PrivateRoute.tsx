import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route, RouteProps} from "react-router";

import {Main} from "../pages";

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const isAuthenticated = true;//useSelector(state => isLoggedIn(state))

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isAuthenticated ? (
                    <Main>
                        <Component {...routeProps} />
                    </Main>
                ) : (
                    <Redirect
                        to="/login"
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
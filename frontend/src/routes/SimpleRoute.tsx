import React, {Component, FC} from "react";
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router";

import Main from "../pages/Main";

export interface IDefaultRouteHoC {
    component: Object
    exact?: boolean
    path: string
}

const SimpleRoute: FC<IDefaultRouteHoC> = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <Main>
                <Component {...props} />
            </Main>
        )} />
    )
};

export default SimpleRoute;
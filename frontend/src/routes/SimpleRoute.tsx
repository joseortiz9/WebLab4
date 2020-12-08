import React from "react";
import {Route} from "react-router";

import {Main} from "../pages";

const SimpleRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                <Main>
                    <Component {...routeProps} />
                </Main>
            }
        />
    );
};

export default SimpleRoute;
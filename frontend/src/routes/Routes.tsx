import React from "react";
import {Redirect, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import PrivateRoute from "./PrivateRoute";
import { HomePage, RegisterPage, LoginPage } from "../pages";
import SimpleRoute from "./SimpleRoute";

const history = createBrowserHistory();

const Routes = () => (
    <Router history={history}>
        <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <SimpleRoute path="/login" component={LoginPage} />
            <SimpleRoute path="/register" component={RegisterPage} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

export default Routes;


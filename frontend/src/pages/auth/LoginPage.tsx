import React from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isLoggedIn} from "../../store/ducks/Auth";
import history from "../../routes/history";

const LoginPage = () => {
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));
    return (
        <>
        {isAuthenticated ?
                history.push("/") :
                (
                    <>
                        <h1>WELCOME!</h1>
                        <AuthForm />
                    </>
                )
        }
        </>
    );
};

export default LoginPage;


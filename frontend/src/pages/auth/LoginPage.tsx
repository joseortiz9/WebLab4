import React from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError, isLoggedIn} from "../../store/ducks/Auth";
import history from "../../routes/history";
import Alert from "../../components/alert/Alert";

const LoginPage = () => {
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));
    const hasError = useSelector((state: AppState) => isError(state));
    const error = useSelector((state: AppState) => state.auth.error);

    return (
        <>
        {isAuthenticated ?
                history.push("/") :
                (
                    <>
                        { hasError && <Alert type={"error"} content={error?.message} /> }
                        <div className="card">
                            <h1>WELCOME!</h1>
                            <AuthForm />
                        </div>
                    </>
                )
        }
        </>
    );
};

export default LoginPage;


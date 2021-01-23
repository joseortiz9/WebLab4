import React from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError, isLoggedIn} from "../../store/ducks/Auth";
import history from "../../routes/history";
import Alert from "../../components/alert/Alert";
import Card from "../../components/card/Card";
import {Jumbotron} from "../../styles/Global.styles";
import {FlexContainer, H1Centered} from "../../styles/Grid.styles";

const LoginPage = () => {
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));

    return (
        <>
        {isAuthenticated ?
                history.push("/") :
                (
                    <>
                        <Jumbotron>
                            <H1Centered>
                                Tarasova Natasha - Ortiz Jose <br/> - P3232 - Var. 2832
                            </H1Centered>
                        </Jumbotron>

                        <FlexContainer>
                            <Card title="WELCOME!">
                                <AuthForm />
                            </Card>
                        </FlexContainer>
                    </>
                )
        }
        </>
    );
};

export default LoginPage;


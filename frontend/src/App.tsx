import React, {useEffect} from "react";
import history from "./routes/history";
import {Router} from "react-router";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {checkSession, isLoggedIn, loggedUser} from "./store/ducks/Auth";
import {AppState} from "./store/ducks";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AppStyled} from "./styles/Global.styles";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
    const dispatch = useDispatch();
    const authSession = useSelector((state: AppState) => loggedUser(state));
    const hasSavedToken = useSelector((state: AppState) => isLoggedIn(state));

    useEffect(() => {
        if (hasSavedToken)
            dispatch(checkSession(authSession));
    }, []);

    return (
        <AppStyled>
           <Router history={history}>
               <Sidebar />
               <Navbar />
               <Routes />
               <ToastContainer newestOnTop />
           </Router>
        </AppStyled>
    );
}

export default App;
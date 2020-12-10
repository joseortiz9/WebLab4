import React, {useEffect} from "react";
import PointForm from "../components/point-form/PointForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPoints} from "../store/ducks/Points";
import {AppState} from "../store/ducks";
import {loggedUser} from "../store/ducks/Auth";

const HomePage = () => {
    const dispatch = useDispatch();
    const authSession = useSelector((state: AppState) => loggedUser(state));

    useEffect(() =>{
        dispatch(fetchAllPoints(authSession));
    }, []);

    return(
        <div>
            <PointForm />
        </div>
    );
};

export default HomePage;
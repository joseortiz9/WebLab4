import React, {useEffect} from "react";
import PointForm from "../components/point-form/PointForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPoints} from "../store/ducks/Points";
import {AppState} from "../store/ducks";
import {loggedUser} from "../store/ducks/Auth";
import PointsTable from "../components/table/PointsTable";
import {IPoint} from "../models/IPoint";
import PointsCanvas from "../components/canvas/PointsCanvas";

export interface IPointsArrProps {
    points: IPoint[]
}

const HomePage = () => {
    const dispatch = useDispatch();
    const authSession = useSelector((state: AppState) => loggedUser(state));
    const fetchedPoints = useSelector((state: AppState) => state.points.points);
    const isFetching = useSelector((state: AppState) => state.points.fetching);

    useEffect(() => {
        dispatch(fetchAllPoints(authSession));
    }, []);

    return(
        <div>
            <PointForm />
            <PointsCanvas points={fetchedPoints} />
            <PointsTable points={fetchedPoints} />
        </div>
    );
};

export default HomePage;
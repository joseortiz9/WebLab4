import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import PointForm from "../components/point-form/PointForm";
import {useDispatch, useSelector} from "react-redux";
import {addPoint, fetchAllPoints} from "../store/ducks/Points";
import {AppState} from "../store/ducks";
import {loggedUser} from "../store/ducks/Auth";
import PointsTable from "../components/table/PointsTable";
import {IPoint, IPointFetched} from "../models/IPoint";
import PointsCanvas from "../components/canvas/PointsCanvas";

export interface IPointsArrProps {
    points: IPointFetched[]
}
export interface IPointFormProps {
    pointInput: IPoint
    setPointInput: Dispatch<SetStateAction<IPoint>>
    submitPoint(point: IPoint): void
}

const HomePage = () => {
    const dispatch = useDispatch();
    const authSession = useSelector((state: AppState) => loggedUser(state));
    const fetchedPoints = useSelector((state: AppState) => state.points.points);
    const isFetching = useSelector((state: AppState) => state.points.fetching);
    const [pointInput, setPointInput] = useState<IPoint>({x: 0, y: 0, r: 1});

    useEffect(() => {
        dispatch(fetchAllPoints(authSession));
    }, [authSession, dispatch]);


    const validatePoint = (point: IPoint) => {

    }

    function submitPoint(point: IPoint) {
        setPointInput(point);

        if (fetchedPoints.length > 0) {
            const lastQuery = fetchedPoints[fetchedPoints.length - 1];
            if (lastQuery.x === pointInput.x && lastQuery.y === pointInput.y && lastQuery.r === pointInput.r) {
                return;
            }
        }
        //if (pointValidator(pointInput))
        console.log(pointInput);
        //dispatch(addPoint(pointInput));
    }

    return(
        <>
            <div className="home-container">
                <div className="card">
                    <PointForm pointInput={pointInput}
                               setPointInput={setPointInput}
                               submitPoint={submitPoint} />
                </div>
                <div className="card">
                    <PointsCanvas pointInput={pointInput}
                                  setPointInput={setPointInput}
                                  submitPoint={submitPoint}
                                  points={fetchedPoints} />
                </div>
            </div>
            <PointsTable points={fetchedPoints} />
        </>
    );
};

export default HomePage;
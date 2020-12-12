import React, {useState} from "react";
import {IPoint} from "../../models/IPoint";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError} from "../../store/ducks/Points";
import {IPointFormProps} from "../../pages/HomePage";
import Alert from "../alert/Alert";


const PointForm = ({valR, setValR, submitPoint}: IPointFormProps) => {

    const hasError = useSelector((state: AppState) => isError(state));
    const error = useSelector((state: AppState) => state.points.error);
    const isFetching = useSelector((state: AppState) => state.points.fetching);
    const [pointInput, setPointInput] = useState<IPoint>({x: 0, y: 0, r: valR})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPointInput(inputs => ({...inputs, [name]: value}));
    };
    const handleChangeR = (event: React.ChangeEvent<HTMLInputElement>) =>
        setValR(event.target.value as unknown as number);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitPoint(pointInput);
    }

    return (
        <>
            { hasError && <Alert type={"error"} content={error?.message} /> }

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="main-label">X: </label>
                    { [-5,-4,-3,-2,-1,0,1,2,3].map(item => {
                        return (
                            <div className="form-check-inline" key={item}>
                                <input className={"form-check-input" + (hasError ? ' is-invalid' : '')}
                                       type="radio"
                                       onChange={handleChange}
                                       name="x" value={item}
                                       checked={item === pointInput.x} />
                                <label className="form-check-label">{item}</label>
                            </div>
                        )})
                    }
                </div>

                <div className="form-group">
                    <label className="main-label">Y: </label>
                    <input type="text" name="y"
                           value={pointInput.y}
                           onChange={handleChange}
                           className={'default-text-input' + (hasError ? ' is-invalid' : '')} />
                </div>

                <div className="form-group">
                    <label className="main-label">R: </label>
                    { [-5,-4,-3,-2,-1,0,1,2,3].map(item => {
                        return (
                            <div className="form-check-inline" key={item}>
                                <input className={"form-check-input" + (hasError ? ' is-invalid' : '')}
                                       type="radio"
                                       onChange={handleChangeR}
                                       name="r" value={item}
                                       checked={item === valR} />
                                <label className="form-check-label">{item}</label>
                            </div>
                        )})
                    }
                </div>

                <div className="form-group">
                    <button className="default-btn btn-primary btn-block" disabled={isFetching}>
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};

export default PointForm;
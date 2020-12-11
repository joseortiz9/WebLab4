import React, {useState} from "react";
import {IPoint} from "../../models/IPoint";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError} from "../../store/ducks/Auth";
import {IPointFormProps} from "../../pages/HomePage";


const PointForm = ({pointInput, setPointInput, submitPoint}: IPointFormProps) => {

    const hasError = useSelector((state: AppState) => isError(state));
    const isFetching = useSelector((state: AppState) => state.auth.fetching);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPointInput(inputs => ({...inputs, [name]: value}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitPoint(pointInput);
    }

    return (
        <>
            <h1 className="text-align-center">Create a point!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>X: </label>
                    { [-5,-4,-3,-2,-1,0,1,2,3].map(item => {
                        return (
                            <div className="form-check-inline" key={item}>
                                <input className="form-check-input" type="radio" onChange={handleChange} name="x" value={item} />
                                <label className="form-check-label">{item}</label>
                            </div>
                        )})
                    }
                    {hasError &&
                    <div className="invalid-feedback">X is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Y: </label>
                    <input type="text" name="y" value={pointInput.y} onChange={handleChange} className={'default-text-input' + (hasError && hasError ? ' is-invalid' : '')} />
                    {hasError &&
                    <div className="invalid-feedback">Username is required and should be in [-5;5]</div>
                    }
                </div>
                <div className="form-group">
                    <label>R: </label>
                    { [-5,-4,-3,-2,-1,0,1,2,3].map(item => {
                        return (
                            <div className="form-check-inline" key={item}>
                                <input className="form-check-input" type="radio" onChange={handleChange} name="r" value={item} />
                                <label className="form-check-label">{item}</label>
                            </div>
                        )})
                    }
                    {hasError &&
                    <div className="invalid-feedback">R is required and should be in [-5;3]</div>
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
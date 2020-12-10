import React, {useState} from "react";
import {IPoint} from "../../models/IPoint";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError} from "../../store/ducks/Auth";


const PointForm = () => {
    const [inputs, setInputs] = useState({ x: 0, y: 0, r: 1 });
    const { x, y, r }: IPoint = inputs;
    const hasError = useSelector((state: AppState) => isError(state));
    const [hasLocalError, setHasLocalError] = useState(false);
    const isFetching = useSelector((state: AppState) => state.auth.fetching);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <>
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
                    {hasLocalError &&
                    <div className="invalid-feedback">X is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Y: </label>
                    <input type="text" name="y" value={y} onChange={handleChange} className={'default-text-input' + (hasLocalError && hasError ? ' is-invalid' : '')} />
                    {hasLocalError &&
                    <div className="invalid-feedback">Username is required and should be in [-5;5]</div>
                    }
                </div>
                <div className="form-group">
                    <label>R: </label>
                    { [1,2,3].map(item => {
                        return (
                            <div className="form-check-inline" key={item}>
                                <input className="form-check-input" type="radio" onChange={handleChange} name="r" value={item} checked={item === r} />
                                <label className="form-check-label">{item}</label>
                            </div>
                        )})
                    }
                    {hasLocalError &&
                    <div className="invalid-feedback">R is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="default-btn" disabled={isFetching}>
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};

export default PointForm;
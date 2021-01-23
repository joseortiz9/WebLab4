import React, {useEffect, useState} from "react";
import {IPoint} from "../../models/IPoint";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError} from "../../store/ducks/Points";
import {IPointFormProps} from "../../pages/HomePage";
import Alert from "../alert/Alert";
import {DefaultButton, FormCompContainer} from "../../styles/Forms.styles";
import {LabelWhite} from "../../styles/Global.styles";


const PointForm = ({valR, setValR, submitPoint}: IPointFormProps) => {

    const hasError = useSelector((state: AppState) => isError(state));
    const error = useSelector((state: AppState) => state.points.error);
    const isFetching = useSelector((state: AppState) => state.points.fetching);
    const [pointInput, setPointInput] = useState<IPoint>({x: NaN, y: 0, r: valR});

    useEffect(() => {

    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPointInput(inputs => ({...inputs, [name]: value}));
    };
    const handleChangeR = (event: React.ChangeEvent<HTMLInputElement>) =>
        setValR(Number(event.target.value));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitPoint(pointInput);
    }

    return (
        <>
            { hasError && <Alert type={"error"} content={error?.message} /> }

            <form onSubmit={handleSubmit}>
                <FormCompContainer className="form-group">
                    <LabelWhite className="main-label text-white"><b>X: </b></LabelWhite>
                    { [-5,-4,-3,-2,-1,0,1,2,3].map(item => {
                        return (
                            <div className="form-check-inline" key={item}>
                                <input className={"form-check-input" + (hasError ? ' is-invalid' : '')}
                                       type="radio"
                                       onChange={handleChange}
                                       name="x" value={item} />
                                <label className="form-check-label">{item}</label>
                            </div>
                        )})
                    }
                </FormCompContainer>

                <FormCompContainer className="form-group">
                    <LabelWhite className="main-label text-white"><b>Y: </b></LabelWhite>
                    <input type="text" name="y"
                           value={pointInput.y}
                           onChange={handleChange}
                           className={'default-text-input' + (hasError ? ' is-invalid' : '')} />
                </FormCompContainer>

                <FormCompContainer className="form-group">
                    <LabelWhite className="main-label text-white"><b>R: </b></LabelWhite>
                    { [-5,-4,-3,-2,-1,0,1,2,3].map(item => {
                        return (
                            <div className="form-check-inline" key={item}>
                                <input className={"form-check-input" + (hasError ? ' is-invalid' : '')}
                                       type="radio"
                                       onChange={handleChangeR}
                                       name="r" value={item} />
                                <label className="form-check-label">{item}</label>
                            </div>
                        )})
                    }
                </FormCompContainer>

                <FormCompContainer className="form-group">
                    <DefaultButton className="default-btn btn-primary btn-block" disabled={isFetching}>
                        Add
                    </DefaultButton>
                </FormCompContainer>
            </form>
        </>
    );
};

export default PointForm;
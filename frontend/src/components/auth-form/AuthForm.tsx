import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authRequest, isError} from "../../store/ducks/Auth";
import {AppState} from "../../store/ducks";
import Alert from "../alert/Alert";


const AuthForm = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector((state: AppState) => state.auth.fetching);
    const hasError = useSelector((state: AppState) => isError(state));
    const error = useSelector((state: AppState) => state.auth.error);
    const [inputs, setInputs] = useState({ username: '', password: '' });
    const { username, password } = inputs;
    const [requestType, setRequestType] = useState('login');
    const [hasLocalError, setHasLocalError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (hasLocalError)
            setHasLocalError(false)
        setInputs(inputs => ({...inputs, [name]: value}));
    };

    const isValidInputs = () => {
        return username && username.length > 2 && password && password.length > 2;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isValidInputs()) {
            setHasLocalError(true);
            return
        }

        dispatch(authRequest(requestType, {username, password}));
    };

    const changeRequestType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        setRequestType((e.target as HTMLButtonElement).dataset.typerequest || 'login')


    return (
        <div>
            { hasError && <Alert type={"error"} content={error?.message} /> }

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="main-label">Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'default-text-input' + ((hasLocalError || hasError) ? ' is-invalid' : '')} />
                    {hasLocalError &&
                    <div className="invalid-feedback">Username is required and should be more than 3 symbols</div>
                    }
                </div>
                <div className="form-group">
                    <label className="main-label">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'default-text-input' + ((hasLocalError || hasError) ? ' is-invalid' : '')} />
                    {hasLocalError &&
                    <div className="invalid-feedback">Password is required and should be more than 3 symbols</div>
                    }
                </div>
                <div className="form-group">
                    <div className="flex-container">
                        <button className="default-btn btn-primary"
                                disabled={isFetching}
                                data-typerequest="login"
                                onClick={changeRequestType.bind(this)}
                        >
                            Login
                        </button>
                        <button className="default-btn btn-secondary"
                                disabled={isFetching}
                                data-typerequest="register"
                                onClick={changeRequestType.bind(this)}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
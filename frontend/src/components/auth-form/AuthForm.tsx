import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {UserTypes} from "../../store/ducks/Auth";


const AuthForm = () => {
    const dispatch = useDispatch();
    const isFetching = false//useSelector(state => state.auth.fetching);
    // const errorStatus = useSelector(state => state.auth.error);
    // const error = useSelector(state => isError(state));
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const { username, password } = inputs;
    const [submitted, setSubmitted] = useState(false);
    const [requestType, setRequestType] = useState(UserTypes.LOGIN_REQUEST);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        dispatch({
            type: requestType,
            username,
            password
        });
    };

    const changeRequestType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        setRequestType((e.target as HTMLButtonElement).dataset.typerequest || UserTypes.LOGIN_REQUEST)


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                    <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                    <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="default-btn"
                            disabled={isFetching}
                            data-typerequest={UserTypes.LOGIN_REQUEST}
                            onClick={changeRequestType.bind(this)}
                    >
                        Login
                    </button>
                    <button className="default-btn"
                            disabled={isFetching}
                            data-typerequest={UserTypes.REGISTER_REQUEST}
                            onClick={changeRequestType.bind(this)}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
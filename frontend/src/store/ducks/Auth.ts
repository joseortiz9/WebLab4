import {AuthSession} from "../../utils/AuthSession";
import {AppState} from "./index";

export const UserTypes = {
    LOGIN_REQUEST: 'users/login-request',
    REGISTER_REQUEST: 'users/register-request',
}

interface IAuthFormProps {
    email: string
    password: string
}

const INITIAL_STATE = {
    user: localStorage.getItem('auth_user') || null,
    isFetching: false,
    error: null
}


export default function reducer(state = INITIAL_STATE, ) {
    return state;
}


/* ---------------------- Selectors --------------------- */
export const isLoggedIn = (state: AppState) => !!state.auth.user;
export const isError = (state: AppState) => !!state.auth.error;
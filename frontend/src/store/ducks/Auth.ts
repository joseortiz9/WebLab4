import {AuthSession} from "../../models/AuthSession";
import {AppState} from "./index";
import {Dispatch} from "redux";
import {LocalAuthID} from "../../utils/config";
import {api, authApi} from "../../utils/Api";
import {Method} from "axios";
import history from "../../routes/history";


/* ---------------------- Types ------------------------- */

export const REQUEST_START = 'users/request-start';
export const REQUEST_FAILURE = 'users/request-failure';
export const REQUEST_SUCCESS = 'users/request-success';
export const LOG_OUT_REQUEST = 'users/log-out';



interface IAuthFormProps {
    username: string
    password: string
}

/* ------------------ Action Creators ------------------- */

interface IRequestStart {
    readonly type: typeof REQUEST_START
}
interface IRequestSuccess {
    readonly type: typeof REQUEST_SUCCESS,
    payload: AuthSession
}
interface IRequestFailure {
    readonly type: typeof REQUEST_FAILURE,
    payload: Error
}
interface ILogOut {
    readonly type: typeof LOG_OUT_REQUEST,
}
export type AuthActions = | IRequestStart | IRequestSuccess | IRequestFailure | ILogOut;


const fetchStart = (): IRequestStart => ({
    type: REQUEST_START
});

const fetchSuccess = (payload: AuthSession): IRequestSuccess => ({
    type: REQUEST_SUCCESS,
    payload,
});

const fetchError = (payload: Error): IRequestFailure => ({
    type: REQUEST_FAILURE,
    payload,
});

const logOut = (): ILogOut => ({
    type: LOG_OUT_REQUEST
});


/* -------------------- Initial State ------------------- */

type InitialState = {
    user: AuthSession | null
    fetching: boolean
    error: Error | null
}

let authUser;
try {
    authUser = JSON.parse(localStorage.getItem(LocalAuthID) ?? 'null');
} catch (e) {
    authUser = null;
    console.log(e);
}

const INITIAL_STATE: InitialState = {
    user: authUser,
    fetching: false,
    error: null
}


/* ----------------------- Reducers --------------------- */

export default function reducer(state = INITIAL_STATE, action: AuthActions) {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                fetching: true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                user: action.payload,
                fetching: false
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
                fetching: false
            }
        case LOG_OUT_REQUEST:
            return {
                ...state,
                user: null,
                fetching: false
            }
        default:
            return state
    }
}


/* ---------------------- Selectors --------------------- */

export const loggedUser = (state: AppState) => state.auth.user;
export const isLoggedIn = (state: AppState) => !!state.auth.user;
export const isError = (state: AppState) => !!state.auth.error;



/* ------------------- Juicy actions -------------------- */

export const authRequest = (requestTypeUrl: string, loginInputs: IAuthFormProps) => (dispatch: Dispatch<AuthActions>) => {
    dispatch(fetchStart());
    return api({method: "POST" as Method, requestUrl: `auth/${requestTypeUrl}`, data: loginInputs})
        .then(res => {
            const json = res.data as AuthSession;
            dispatch(fetchSuccess(json));
            history.push("/");
            return Promise.resolve();
        })
        .catch(error => {
            dispatch(fetchError(error));
            return Promise.reject(error);
        });
};

export const logout = (authSession: AuthSession | null) => (dispatch: Dispatch<AuthActions>) => {
    dispatch(fetchStart());
    return authApi({method: "POST" as Method, requestUrl: 'auth/logout', authSession})
        .then(() => dispatch(logOut()))
        .catch(e => fetchError(e));
};
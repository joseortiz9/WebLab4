import { Middleware } from 'redux';
import {AUTH_REQUEST_SUCCESS, LOG_OUT_REQUEST} from "../ducks/Auth";
import SocketManager from "../../services/SocketManager";

let socketManager = new SocketManager();
export const SocketConnector: Middleware = store => next => action => {
    next(action);
    switch (action.type) {
        case AUTH_REQUEST_SUCCESS:
            socketManager.startListening(store.getState().auth.user.token);
            break;

        case LOG_OUT_REQUEST:
            socketManager.stopListening();
            break;
    }
};
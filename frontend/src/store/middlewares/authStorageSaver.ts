import { Middleware } from 'redux';
import {REQUEST_SUCCESS, LOG_OUT_REQUEST} from "../ducks/Auth";
import {LocalAuthID} from "../../utils/config";

export const authStorageSaver: Middleware = store => next => action => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            localStorage.setItem(LocalAuthID, JSON.stringify(action.payload));
            break;

        case LOG_OUT_REQUEST:
            localStorage.removeItem(LocalAuthID);
            break;
    }

    next(action);
};
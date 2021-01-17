import {applyMiddleware, createStore} from "redux";
import reducers from './ducks';
import {authStorageSaver} from "./middlewares/authStorageSaver";
import thunk from "redux-thunk";
import {SocketConnector} from "./middlewares/SocketConnector";

const store = createStore(
    reducers,
    applyMiddleware(authStorageSaver, thunk, SocketConnector)
);

export default store;
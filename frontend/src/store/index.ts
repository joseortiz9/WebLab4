import {combineReducers, createStore} from "redux";
import * as reducers from "./ducks";

const store = createStore(combineReducers({
    ...reducers
}));

export default store;
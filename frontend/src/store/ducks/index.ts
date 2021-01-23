import { combineReducers } from "redux";
import auth from './Auth';
import points from './Points';
import sidebar from './Sidebar';

const rootReducer = combineReducers({
    auth,
    points,
    sidebar
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
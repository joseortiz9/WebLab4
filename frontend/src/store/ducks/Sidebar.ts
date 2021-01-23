
/* ---------------------- Types ------------------------- */

export const TOGGLE_SIDEBAR = 'sidebar/toggle-start';


/* ------------------ Action Creators ------------------- */

interface IToggleSidebar {
    readonly type: typeof TOGGLE_SIDEBAR
}
export type SidebarActions = | IToggleSidebar;


/* -------------------- Initial State ------------------- */

const INITIAL_STATE = {
    toggled: false
}


/* ----------------------- Reducers --------------------- */

export default function reducer(state = INITIAL_STATE, action: SidebarActions) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                toggled: !state.toggled
            }
        default:
            return state
    }
}


/* ---------------------- Selectors --------------------- */


/* ------------------- Juicy actions -------------------- */


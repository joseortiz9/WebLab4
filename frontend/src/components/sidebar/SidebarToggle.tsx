import React from "react";
import {useDispatch} from "react-redux";
import {TOGGLE_SIDEBAR} from "../../store/ducks/Sidebar";

const SidebarToggle = () => {
    const dispatch = useDispatch();
    return (
        <span style={{ cursor: "pointer" }} className="toggler-responsive" onClick={() => dispatch({type: TOGGLE_SIDEBAR})}>
            <b>ToggleSideBar</b>
        </span>
    );
};

export default SidebarToggle;
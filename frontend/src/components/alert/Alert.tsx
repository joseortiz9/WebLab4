import React from "react";
import "./alert.scss";

interface IAlert {
    type: "success" | "info" | "error"
    content?: string
    status?: number
}

const Alert = ({type, content, status}: IAlert) => {
    return (
        <div className={"alert " + type}>
            <span className="title-alert">{type} {status}: </span>
            <span className="content-alert">{content}</span>
        </div>
    );
};

export default Alert;
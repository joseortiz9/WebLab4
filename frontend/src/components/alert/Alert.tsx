import React from "react";
import "./alert.scss";

interface IAlert {
    type: "success" | "info" | "error"
    content?: string
}

const Alert = ({type, content}: IAlert) => {

    return (
        <div className={"alert " + type}>
            <span>
                <h2 className="title-alert">{type}:</h2>
                <h5 className="content-alert">{content}</h5>
            </span>
        </div>
    );
};

export default Alert;
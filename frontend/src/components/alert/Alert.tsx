import React from "react";

interface IAlert {
    type: "success" | "info" | "error"
    content: string
}

const Alert = ({type, content}: IAlert) => {

    return (
        <div className={type}>
            <h1>{type}</h1>
            <h4>{content}</h4>
        </div>
    );
};

export default Alert;
import React from "react";
import {AlertContainer} from "./Alert.styles";

interface IAlert {
    type: "success" | "info" | "error"
    content?: string
}

const Alert = ({type, content}: IAlert) => {
    return (
        <AlertContainer className={"alert " + type}>
            <span className="title-alert">{type}: </span>
            <span className="content-alert">{content}</span>
        </AlertContainer>
    );
};

export default Alert;
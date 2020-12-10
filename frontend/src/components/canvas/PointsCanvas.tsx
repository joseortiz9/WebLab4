import React, {useEffect, useRef} from "react";
import {IPointsArrProps} from "../../pages/HomePage";
import "./canvas_handlers";
import {drawCanvas} from "./canvas_handlers";

const PointsCanvas = (points: IPointsArrProps) => {

    const canvasRef = useRef(null);

    useEffect(() => {

    }, [drawCanvas]);

    return(
        <>
            <canvas ref={canvas} onClick={(e) => {
            canvas_click_handler(e, props.r, props.setEntries, props.validateNumber, canvas.current.getContext("2d"), props.MessagesInstance)
        }} style={{width: "100%", height: "40vh"}}/>
        </>
    );
};

export default PointsCanvas;
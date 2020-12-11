import React, {useEffect, useRef} from "react";
import {IPointFormProps, IPointsArrProps} from "../../pages/HomePage";
import {drawer, drawPoint} from "./CanvasDrawer";
import {IPoint} from "../../models/IPoint";

const PointsCanvas = ({points, submitPoint, pointInput}: IPointsArrProps & IPointFormProps) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        drawer(canvas, pointInput.r, points);
    }, [pointInput.r, points]);


    const onCanvasClick = (event: React.MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const getMousePos = (event: React.MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            return {
                X: 300*(event.clientX - rect.left)/rect.width,
                Y: 150*(event.clientY - rect.top)/rect.height
            };
        }

        let physicR = canvas.height / 3 / pointInput.r;
        const clickedX = (getMousePos(event).X - canvas.width/2) / physicR;
        const clickedY = (-getMousePos(event).Y + canvas.height/2) / physicR;

        const clickedPoint: IPoint = {x: clickedX, y: clickedY, r: pointInput.r};
        drawPoint(canvas, clickedPoint, pointInput.r);
        submitPoint(clickedPoint);
    }

    return(
        <>
            <canvas ref={canvasRef} onClick={onCanvasClick} style={{width: "100%", height: "40vh"}}/>
        </>
    );
};

export default PointsCanvas;
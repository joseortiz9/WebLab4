import React from "react";
import {IPointsArrProps} from "../../pages/HomePage";

const PointsTable = (points: IPointsArrProps) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Result</th>
                    <th>Creation Date</th>
                </tr>
            </thead>
            <tbody>
            {
                points.points.map(point => (
                    <tr key={point.id}>
                        <td>{point.id}</td>
                        <td>{point.x}</td>
                        <td>{point.y}</td>
                        <td>{point.r}</td>
                        <td>{point.result}</td>
                        <td>{point.createTime}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default PointsTable;
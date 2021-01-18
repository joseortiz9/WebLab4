import React from "react";
import {IReceivedNotification} from "./showNotification";
import './NotificationContent.scss';

const emojis = ['🤟🏻', '🥰', '🥰', '🤠', '👾', '🤡', '💩', '👻', '🌀', '🤯', '🤖', '👹'];

export const NotificationContent: React.FunctionComponent<{
    content: IReceivedNotification
}> = ({ content }) => {
    const { id, x, y, r, createTime, result } = content.object;
    const parsedRes = result ? "inside" : "outside";
    const parsedDate = new Date(Date.parse(createTime)).toDateString();
    return (
        <div className={'notification-container'}>
            <div className={'title'}>
                {
                    emojis[Math.floor(Math.random() * emojis.length)]
                    + " " + content.msg
                }
            </div>
            <div>
                <div>id: {id}, X: {x}, Y: {y}, R: {r}</div>
                <div><i>{parsedDate}</i></div>
                <div className={"result-text " + parsedRes}>{parsedRes}</div>
            </div>
        </div>
    );
}
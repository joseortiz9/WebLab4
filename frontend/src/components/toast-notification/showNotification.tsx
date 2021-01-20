import React from "react";
import {IPointFetched} from "../../models/IPoint";
import {Flip, toast} from "react-toastify";
import {NotificationContent} from "./NotificationContent";

export type IReceivedNotification = {
    msg: string
    object: IPointFetched
}

export const showNotification = (responseBody: string) => {
    if (responseBody === "") {
        toast.error("Connection Error! please refresh the site :'(", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            transition: Flip
        });
    } else {
        const parsedBody = JSON.parse(responseBody) as IReceivedNotification;
        toast.success(<NotificationContent content={parsedBody} />, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            transition: Flip
        });
    }
};
import {io, Socket} from "socket.io-client";

import {SERVER_HOST} from "../utils/config";
import {IPointFetched} from "../models/IPoint";
import {Flip, toast} from "react-toastify";

const SOCKET_PATH = '/points_notification';
const NEW_NOTIFICATION_PATH = "/user/topic/item";
const START_LISTENING_PATH = "/app/start";
//const STOP_LISTENING_PATH = "/app/stop";

type INewPointNotification = {
    msg: String,
    point: IPointFetched
}

class SocketManager {
    socketRef: Socket | undefined = undefined;

    startListening(authToken: String) {
        this.socketRef = io(SERVER_HOST, {
            path: "/weblab4" + SOCKET_PATH,
            transports: ['websocket'],
            extraHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        this.socketRef.emit(START_LISTENING_PATH, {});

        this.socketRef.on(NEW_NOTIFICATION_PATH, (data: INewPointNotification) => {
            console.log("received data from socket: " + data);
            toast.success('🦄 ' + data.msg + data.point, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                transition: Flip
            });
        });
        console.log("socket connected", this.socketRef);
    }

    stopListening() {
        if (this.socketRef !== undefined)
            this.socketRef.disconnect();
        console.log("socket disconnected", this.socketRef);
    }
}

export default SocketManager;
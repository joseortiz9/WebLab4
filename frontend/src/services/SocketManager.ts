import SockJS from 'sockjs-client';
import Stomp, {Client} from 'stompjs';

import {SERVER_HOST} from "../utils/config";
import {Flip, toast} from "react-toastify";

const SOCKET_PATH = 'points_notification';
const NEW_NOTIFICATION_PATH = "/user/topic/item";
const START_LISTENING_PATH = "/app/start";
//const STOP_LISTENING_PATH = "/app/stop";

class SocketManager {
    stompClient: Client | undefined = undefined;

    startListening(authToken: String) {
        const socket = new SockJS(SERVER_HOST + SOCKET_PATH);
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({"X-Authorization": "Bearer " + authToken}, () => {
            console.log("socket connected", this.stompClient);
            this.stompClient?.send(START_LISTENING_PATH, {});
            this.stompClient?.subscribe(NEW_NOTIFICATION_PATH, (response) => {
                console.log("received data from socket: " + response);
                if (response.body)
                    this.generateToast(JSON.parse(response.body))
            });
        });
        console.log(this.stompClient.ws)
    }

    stopListening() {
        if (this.stompClient !== undefined) {
            this.stompClient.disconnect(() => this.stompClient = undefined);
        }
    }


    generateToast(response: String) {
        toast.success('🦄 ' + response, {
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
}

export default SocketManager;
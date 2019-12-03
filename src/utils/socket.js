import io from "socket.io-client";
import sessionStore from "./sessionStore";

let host = "http://193.112.59.10:8080/"

// 如果是开发环境
/* if (process.env.NODE_ENV) {
    host = "http://localhost:8080/"
}
 */
// 连接上


class Socket {
    socket = null;
    imsocket(){
        let socket = this.socket;
        if (!socket) {
            this.socket = socket = io(host)
        }

        return socket;
    }
    constructor(){
        /* let socket = this.imsocket();
        this.onConnect().then(res => {
            let user = sessionStore.get("user")
            user && socket.emit('new user', user.username);
        }) */
    }
    onConnect(){
        let socket = this.imsocket();

        return new Promise((resolve, reject) => {
            // 如果已经完成连接
            if (socket.io.readyState == "open") {
                return resolve(socket);
            }
            socket.on('connect', function () {
                resolve(socket)
            });
        })
    }
    // 发送私有消息
    sendPrivateMsg(item){
        let socket = this.imsocket();
        let { type = "1", content = "", recipient} = item;

        return new Promise((resolve, reject) => {
            // 发送消息
            socket.emit('send private message', {
                type, content, recipient
            }, (res) => {
                resolve(res)
            });
        })  
    }
    // 接收私有消息
    receivePrivateMsg(cb) {
        let socket = this.imsocket();
        this.onConnect().then(res => {
            socket.on("receive private message", res => {
                cb && cb(res)
            })
        })
       
    }
}
let mSocket = new Socket()
export default mSocket;



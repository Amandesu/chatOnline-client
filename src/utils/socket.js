import io from "socket.io-client";
import sessionStore from "./sessionStore";
import env from "./env";

let host = "http://193.112.59.10:8080/"

// 如果是开发环境
/* if (process.env.NODE_ENV == "development") {
    host = "http://localhost:8080/"
} */
 
// 连接上
console.log(env)
class Socket {
    socket = null;
    connectFn = [];
    // 必须登录了才能调用该方法
    imsocket(){
        let socket = this.socket;
        if (!socket) {
            this.socket = socket = io(host)
            socket.on('connect',  () =>{
                let user = sessionStore.get("user");
                if (!user) throw Error("没有登录")
                this.socket.emit('new user', user.username)
            });
            socket.on('disconnect', () => {
                
            });
        }
        return socket;
    }
    // 发送私有消息
    sendPrivateMsg(item){
        if (!this.socket) throw Error("socket未初始化");

        let { type = "1", content = "", recipient} = item;
        return new Promise((resolve, reject) => {
            // 发送消息
            this.socket.emit('send private message', {
                type, content, recipient
            }, (res) => {
                resolve(res)
            });
        })  
    }
    // 接收私有消息
    receivePrivateMsg(cb) {
        if (!this.socket) throw Error("socket未初始化");
        this.socket.on("receive private message", res => {
            cb && cb(res)
        })
       
    }
}
let mSocket = new Socket();


export default mSocket;




import { observable, action, computed } from 'mobx';




class Single {
    mapMsgs = {};
    @observable title = "single";
    //
    @observable.shallow msgs = [];
    constructor() {
    }
    pushMsg = (item, receiver) => {
        let mapMsgs = this.mapMsgs;
        if (!mapMsgs[receiver]) {
            mapMsgs[receiver] = [item]
        } else {
            mapMsgs[receiver].push(item)
        }
        return Promise.resolve(mapMsgs[receiver])
    }
    // 切换用户
    @action changeUser = (user) => {
        return Promise.resolve(this.msgs = this.mapMsgs[user] || [])
    }
    // 发送消息
    @action sendMsg = (item, receiver) => {
        return this.pushMsg(item, receiver).then(action(msgs => {
            this.msgs = msgs;
            return msgs
        }))
    }
    // 接收消息
    @action receiveMsg = (item, receiver) => {

        return this.pushMsg(item, receiver).then(action(msgs => {
            this.msgs = msgs;
            return msgs
        }))
    }
    @computed get total() {
        return 1
    }


}
const singleStore = new Single()



export default singleStore
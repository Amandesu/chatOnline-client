
import {observable, action, computed} from 'mobx';


class Messages {
    @observable title = "Messages";
    @observable.shallow UnreadMsgs = [];
    @observable list = [1];
    constructor() {
    }
    @action getUnreadMsg = (params) =>{
        return fetchData({
            url:"/message/getUnreadMsg",
            data:{
            }
        }).then(action(res => {
            this.UnreadMsgs = res;
            return res;
        }))
    }
    @computed get total(){
      return 1
    }


}
const messagesStore = new Messages()



export default messagesStore
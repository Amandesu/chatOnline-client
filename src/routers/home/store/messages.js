
import {observable, action, computed} from 'mobx';


class Messages {
    @observable title = "Messages";
    @observable list = [1,2];
    constructor() {
    }
    @action setTitle = (title) =>{
        this.title = title
    }
    @computed get total(){
      return 1
    }


}
const messagesStore = new Messages()



export default messagesStore
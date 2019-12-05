
import {observable, action, computed} from 'mobx';




class Single {
    @observable title = "single";
    @observable.shallow list = [];
    constructor() {
    }
    @action getMsgs = (msg) => {
      this.list.push(msg);
      console.log(this.list);
    }
    @action setTitle = (title) =>{
        this.title = title
    }
    @computed get total(){
      return 1
    }


}
const singleStore = new Single()



export default singleStore
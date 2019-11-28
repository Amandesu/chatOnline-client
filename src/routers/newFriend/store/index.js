
import {observable, action, computed} from 'mobx';




class NewFriend {
    @observable title = "1";
    @observable.shallow list = [];
    constructor() {
    }
    @action setTitle = (title) =>{
        this.title = title
    }
    @computed get total(){
      return 1
    }


}
const newFriend = new NewFriend()



export default newFriend
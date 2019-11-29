
import {observable, action, computed} from 'mobx';




class NewFriend {
    @observable title = "NewFriend";
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
const newFriendStore = new NewFriend()


export default newFriendStore

import {observable, action, computed} from 'mobx';




class AddFriend {
    @observable title = "addFriend";
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
const addFriendStore = new AddFriend()


export default addFriendStore
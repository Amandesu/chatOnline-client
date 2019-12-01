
import {observable, action, computed} from 'mobx';




class SearchFriend {
    @observable title = "searchFriend";
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
const searchFriendStore = new SearchFriend()


export default searchFriendStore
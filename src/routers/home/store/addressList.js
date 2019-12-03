
import {observable, action, computed} from 'mobx';
import  fetchData from 'ROOT/utils/fetchData';



class AddressList {
    @observable title = "AddressList";
    @observable.shallow friendList = [];
    constructor() {
    }
    @action getFriendList = (params) =>{
        return fetchData({
            url:"/friend/getFriendList",
            method:"POST",
            data:{
            }
        }).then(action(res => {
            this.friendList = res;
            return res;
        }))
    }
    @computed get total(){
      return 1
    }


}
const addressListStore = new AddressList()



export default addressListStore
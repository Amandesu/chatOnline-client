
import {observable, action, computed} from 'mobx';




class AddressList {
    @observable title = "AddressList";
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
const addressListStore = new AddressList()



export default addressListStore
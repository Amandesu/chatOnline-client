
import {observable, action, computed} from 'mobx';




class Register {
    @observable title = "login";
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
const registerStore = new Register()



export default registerStore
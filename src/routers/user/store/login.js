
import {observable, action, computed} from 'mobx';




class Login {
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
const loginStore = new Login()



export default loginStore
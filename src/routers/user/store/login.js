
import {observable, action, computed} from 'mobx';
import  fetchData from 'ROOT/utils/fetchData';



class Login {
    @observable title = "login";
    @observable user = {
        username:"13772106501",
        aliasName:"",
        poster:""
    };
    constructor() {
    }
    @action login = (params) =>{
        return fetchData({
            url:"/user/login",
            data:{
                username:params.username,
                password:params.password
            }
        }).then(action(res => {
            this.user = Object.assign(this.user, res);
            return res;
        }))
    }
    @computed get total(){
      return 1
    }


}
const loginStore = new Login()



export default loginStore
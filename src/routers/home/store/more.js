
import {observable, action, computed} from 'mobx';




class More {
    @observable title = "more";
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
const moreStore = new More()



export default moreStore
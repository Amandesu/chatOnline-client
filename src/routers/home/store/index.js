

import addressListStore from "./addressList"
import messagesStore from "./messages"
import moreStore from "./more"

  
class Home {
    constructor() {
      this.addressListStore = addressListStore
      this.messagesStore = messagesStore
      this.moreStore = moreStore
    }
}
  
export default new Home();



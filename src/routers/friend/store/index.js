



import addFriendStore from "./addFriend"
import newFriendStore from "./newFriend"
import searchFriendStore from "./searchFriend"

  
class Friend {
    constructor() {
      this.addFriendStore = addFriendStore
      this.newFriendStore = newFriendStore
      this.searchFriendStore = searchFriendStore
    }
}
  
export default new Friend();



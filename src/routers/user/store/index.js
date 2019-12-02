

import loginStore from "./login"
import registerStore from "./register"

  
class User {
    constructor() {
      this.loginStore = loginStore
      this.registerStore = registerStore
    }
}
  
export default new User();





import sessionStore from "./sessionStore";

module.exports = {

    isLogin:() => {
        let user = sessionStore.get("user");
        // 如果用户登录了
        return user && (+new Date) < user.loginTime+user.maxAge-10*60*1000

    }
}
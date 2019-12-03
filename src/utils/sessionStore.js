


let sessionKey = new Set([
    "user"
]);
module.exports =  {
    set(key, value){
        if (!sessionKey.has(key)) {
            throw Error("需要在/util/sessionStore设置sessionKey");
        }
        if (typeof value == "object") {
            value = JSON.stringify(value)
        }
        window.sessionStorage.setItem(key, value)
    },
    get(key){
        let result = window.sessionStorage.getItem(key);
        try {
            result = JSON.parse(result)
        } catch (err) {}
        return result
    }
}





export default ({url, data={}, method = "POST"}) => {
    let options = {
        method,
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    }
    if (method == "POST") {
        options.body = JSON.stringify(data)
    } else {
        urlParams = Object.assign(urlParams, data)
        paramUrl = Object.keys(urlParams).map(key => `${key}=${urlParams[key]}`).join("&");
    }
    return fetch(url, options).then(res => {
        if (res.status == "200") {
            return res.json();
        } else {
            return Promise.reject()
        }
        
    }).then(res => {
        return res;
    })
}






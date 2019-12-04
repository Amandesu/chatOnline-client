




export default ({url, data={}, method = "POST"}) => {
    let urlParams = {}, paramUrl = "";
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
        paramUrl = "?"+Object.keys(urlParams).map(key => `${key}=${urlParams[key]}`).join("&");
    }
    return fetch(url+paramUrl, options).then(res => {
        if (res.status == "200") {
            return res.json();
        } else {
            return Promise.reject()
        }
        
    }).then(res => {
        if (res.code == "200") {
            return res.data;
        } else {
            return Promise.reject(res)
        }
    })
}






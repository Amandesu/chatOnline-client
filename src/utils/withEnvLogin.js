
import React from "react";
import sessionStore from "./sessionStore";
import fetchData from "./fetchData";
import vmsocket from "./socket";



// 进行登录授权的高阶组件
export const WithHOCLogin = WrappedComponent => {
    class Enhance extends React.Component {
        state = {
            isLogin:false
        }
        getUserInfo(){
            return fetchData({
                url:"/user/getUserInfo"
            })
        }
        componentWillMount(){
            let user = sessionStore.get("user");
            if (user){
                this.setState({isLogin:true})
                !vmsocket.socket && vmsocket.imsocket();
            } else {
                this.getUserInfo().then(res => {
                    sessionStore.set("user", res);
                    !vmsocket.socket && vmsocket.imsocket();
                    this.setState({isLogin:true})
                }, () => {
                    window.location.hash = "/user/login"
                })  
            }
        }
        render() {
            return this.state.isLogin ?<WrappedComponent
                    {...this.props}
                /> : null 
        }
    }
    return Enhance
}
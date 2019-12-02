
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import  HeaderNav from 'ROOT/component/HeaderNav';
import  fetchData from 'ROOT/utils/fetchData';
import "./index.less"

const prefix = "user-resiger"

@inject('userStore.registerStore')
@observer
export default class Login extends React.Component {
    state = {
        username:"13772106502",
        password:"123456",
        key:"",
    }
    login = () => {
        fetchData({
            url:"/user/register",
            data:{
                username:this.state.username,
                password:this.state.password
            }
        }).then(res => {
            alert("注册成功")
            this.props.history.push("/user/login");
        })
    }
    render(){
        let state = this.state;
        let store = this.props.loginStore;
        return (
            <div className={prefix}>
                <HeaderNav
                    back={true}
                    title={"注册"}
                    goBack={ () => this.props.history.goBack()}
                 />
                 <div className="logo">
                    <img src = {require("ROOT/images/icon.png")} />
                 </div>
                <div className="form-group">
                    <input placeholder="用户名" value={state.username} onChange={e => this.setState({username:e.target.value})}/>
                </div>
                <div className="form-group">
                    <input placeholder="密&nbsp;&nbsp;&nbsp;码" value={state.password} onChange={e => this.setState({password:e.target.value})}/>
                </div>
                <div className="submit" onClick={this.login}>
                    注册
                </div>
            </div>
        )
    }
}


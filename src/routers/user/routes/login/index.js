
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import sessionStore from 'ROOT/utils/sessionStore';
import vmsocket from 'ROOT/utils/socket';
import  HeaderNav from 'ROOT/component/HeaderNav';
import "./index.less"


const prefix = "user-login"

@inject('userStore.loginStore')
@observer
export default class Login extends React.Component {
    state = {
        username:"13772106501",
        password:"123456",
        key:"",
    }
    login = () => {
        let store = this.props.loginStore;
        store.login({
            username:this.state.username,
            password:this.state.password,
        }).then(res => {
            alert("登录成功")
            sessionStore.set("user", res);
            vmsocket.imsocket();
            
            this.props.history.push("/home/addressList");
        })
    }
    render(){
        let state = this.state;
        
        return (
            <div className={prefix}>
                <HeaderNav
                    back={true}
                    title={"登录"}
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
                    登录
                </div>
            </div>
        )
    }
}
/* 

import React from "react";
import { HeaderNav } from "ROOT/component";
import { observer } from 'mobx-react';
import  fechData from 'ROOT/utils/fechData';
import './index.less';

export default class Login extends React.Component {
    state = {
        username:"13788889999",
        password:"123456",
        key:"",
    }
    register = () => {
        fechData({
            url:"/user/register",
            data:{
                username:this.state.username,
                password:this.state.password
            }
        }).then(res => {

        })
    }
    login = () => {
        fechData({
            url:"/user/login",
            data:{
                username:this.state.username,
                password:this.state.password
            }
        }).then(res => {

        })
    }
    queryLikeUser = () => {
        fechData({
            url:"/user/queryUsersLikeName",
            method:"GET",
            data:{
                key:this.state.key,
            }
        }).then(res => {

        })
    }
    render() {
        const { state, props } = this;
        console.log(state.username)
        return (
            <div style={{height:"100%"}}>
                <HeaderNav title="登录"/>
                <div className='login' method='post'>
                    <input type='text' placeholder='用户名' value={state.username} onChange ={e => {
                        this.setState({username:e.target.value})
                    }}/>
                    <input type='text' value = {state.password} onChange ={e => this.setState({password:e.target.value})}/>
                    <div style={{fontSize: '18px'}}>
                        <button onClick={this.register}>注册</button>
                        <button onClick={this.login}>登录</button>
                    </div>
                </div>

                <div className='login' method='post'>
                    <input type='text' placeholder='查询用户' value={state.key} onChange ={e => {
                        this.setState({key:e.target.value})
                    }}/>
                    <button onClick={this.queryLikeUser}>查询</button>
                </div>
                
            </div>
        )
    } 
}

*/


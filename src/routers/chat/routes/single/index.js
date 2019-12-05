import React from "react";
import { observer } from "mobx-react";
import inject from "ROOT/utils/inject";
import socket from "ROOT/utils/socket";
import fetchData from "ROOT/utils/fetchData";
import sessionStore from "ROOT/utils/sessionStore";
import HeaderNav from "ROOT/component/HeaderNav";
import BottomBar from "../../component/BottomBar";

import "./index.less";
const prefix = "chat-single";

@inject("chatStore.singleStore")
@observer
export default class Single extends React.Component {
    state = {
        msgs: []
    };
    constructor(props) {
        super(props);
        socket.receivePrivateMsg(res => {
            this.setState({
                msgs:this.state.msgs.concat({msg:res.content, ismine:false})
            }, ( ) => this.scrollToBottom())
        }); 
    }
    componentDidMount(){
        fetchData({
            url:"/message/getUnreadMsg",
            method:"GET"
        }).then(res => {

        })
        this.scrollview && (this.scrollview.scrollTop = this.scrollview.scrollHeight)
    }
    handleContentTouchMove = () => {
        const inputs = document.getElementsByTagName("input") || [];
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].blur();
        }
    };
    scrollToBottom = () => {
        this.canAutoScroll = false;
        if (
            this.scrollview.scrollHeight >
            this.scrollview.offsetHeight + this.scrollview.scrollTop
        ) {
            let to =
                this.scrollview.scrollHeight -
                this.scrollview.scrollTop -
                this.scrollview.offsetHeight;
            this.scrollTo(
                this.scrollview.scrollTop,
                this.scrollview.scrollTop + to,
                300
            );
        }
    };
    scrollTo = (from, to, during) => {
        let s = +new Date();
        let total = to - from;
        let scroll = () => {
            let d = +new Date() - s;
            if (d < 300) {
                this.scrollview.scrollTop = from + total * (d / 200);
                window.requestAnimationFrame(scroll);
            } else {
                this.scrollview.scrollTop = to;
            }
        };
        scroll();
    };
    sendMsg = (msg) => {
        const params = this.props.match.params || {}
        this.props.singleStore.sendMsg({ismine:true, msg}, params.username).then(res => {
            this.scrollToBottom();
            socket.sendPrivateMsg({
                type: "1",
                content: msg,
                recipient: params.username
            })
        });
    }
    render() {
        let state = this.state;
        let store = this.props.singleStore;
        return (
            <div className={prefix}>
                <HeaderNav
                    back={true}
                    title={"H5机器人"}
                    goBack={() => this.props.history.goBack()}
                />
                <div
                    className="scrollview"
                    onTouchMove={this.handleContentTouchMove}
                    ref={content => (this.scrollview = content)}
                >
                    {store.msgs.map((item,index) => {
                        return (
                            <div className={`component-msg ${item.ismine ? "my" : ""}`} key={index}>
                                <div className="popup">
                                    <div style={{ width: "100%" }}>
                                        <p>
                                            <span>{item.msg}</span>
                                        </p>
                                    </div>
                                    <div className="linkWrapper"></div>
                                </div>
                                <div className="holder"></div>
                            </div>
                        );
                    })}
                </div>

                <BottomBar
                    onFocus={() => {
                        setTimeout(() => {
                            this.scrollview.scrollTop = this.scrollview.scrollHeight;
                        }, 100);
                    }}
                    onBlur={() => {
                        window.scroll(0, 0);
                    }}
                    onSubmit={msg => this.sendMsg(msg)}
                />
            </div>
        );
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

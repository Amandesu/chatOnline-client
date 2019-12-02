import React from "react";
import { observer } from "mobx-react";
import inject from "ROOT/utils/inject";
import HeaderNav from "ROOT/component/HeaderNav";
import BottomBar from "../../component/BottomBar";
import "./index.less";

const prefix = "chat-single";

@inject("chatStore.singleStore")
@observer
export default class Single extends React.Component {
  state = {
      msgs:[
          {ismine:true,msg:"12"},
          {ismine:false,msg:"19"},
        ]
   };
   
   /* shouldComponentUpdate(nextProps, nextState){
       console.log(99)
    if (this.state.msgs.length > nextState.msgs.length ) {
        this.scrollToBottom();
    }
    return true
   } */ 

   getSnapshotBeforeUpdate(prevProps, prevState){
       console.log(prevState.msgs.length)
   }
   handleContentTouchMove=() => {
        const inputs = document.getElementsByTagName('input') || []
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].blur()
        }
    }
    scrollToBottom = () => {
        this.canAutoScroll = false;
        if (this.scrollview.scrollHeight > this.scrollview.offsetHeight+this.scrollview.scrollTop) {
            let to = this.scrollview.scrollHeight-this.scrollview.scrollTop-this.scrollview.offsetHeight;
            this.scrollTo(this.scrollview.scrollTop, this.scrollview.scrollTop+to, 300)
        }
    }
    scrollTo = (from, to, during) => {
        let s = + new Date();
        let total = to-from;
        let scroll = () => {
            let d = +new Date-s;
            if(d<300) {
                this.scrollview.scrollTop = from+total*(d/200);
                window.requestAnimationFrame(scroll)
            } else {
                this.scrollview.scrollTop = to
            }
        }
        scroll();
    }
  render() {
    let state = this.state;
    let store = this.props.singleStore;
    console.log(state.msgs.length)
    return (
      <div className={prefix}>
        <HeaderNav
          back={true}
          title={"张三"}
          goBack={() => this.props.history.goBack()}
        />
        <div className="scrollview" onTouchMove={this.handleContentTouchMove} ref={content => ( this.scrollview = content)}>
            {state.msgs.map(item => {
                return <div className={`component-msg ${item.ismine ? "my":""}`}>
                <div className="popup">
                  <div style={{width: "100%"}}>
                    <p>
                      <span>{item.msg}</span>
                    </p>
                  </div>
                  <div className="linkWrapper"></div>
                </div>
                <div className="holder"></div>
              </div>
            })}
       
            
        </div>
       
       
        <BottomBar
            onFocus={() => {
                setTimeout(() => {
                    this.scrollview.scrollTop = this.scrollview.scrollHeight;
                }, 100)
                
            }}
            onBlur={() => {
                window.scroll(0, 0)
            }}
            onSubmit={msg => {
                state.msgs.push({
                    ismine:true,
                    msg
                })
                this.setState({
                }, () => {
                    this.scrollToBottom()
                    setTimeout(() => {
                        state.msgs.push({msg:"请稍等"})
                        this.setState({msgs:state.msgs}, () =>  this.scrollToBottom())
                    }, 500)
                    
                })
                
            }}
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

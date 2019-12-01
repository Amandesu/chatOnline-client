
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import './index.less';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <div className='loginHeader'>
                    <div>登录页面</div>
                </div>
                <form className='login' method='post'>
                    <input type='text' placeholder='用户名' />
                    <input type='password' />
                    <div style={{fontSize: '18px'}}>
                        <button>注册</button>
                        <button>提交</button>
                    </div>
                </form>
                
            </div>
        )
    } 
}
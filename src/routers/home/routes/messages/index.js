
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import './index.less';

@inject('homeStore.messagesStore')
@observer
export default class Messages extends React.Component {
    render(){
        let store = this.props.messagesStore;
        return (
            <React.Fragment>
                <div>
                    {store.list.map((item,index) => (
                    <div>
                        <div key={index} className='message'>
                            <div className='iconHead'>
                                <img />
                            </div>
                            <div className='content'>
                                <span>我的</span>
                                <p>你好</p>
                            </div>
                            <div className='remindNum'>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </React.Fragment>
        )
    }
}



/* import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import './index.less';

@inject('homeStore.messagesStore')
@inject("chatStore.singleStore")
@observer
export default class Messages extends React.Component {
    render(){
        let messagesStore = this.props.messagesStore;
        let singleStore = this.props.singleStore;
        console.log(singleStore.list)
        let list = [];
        if(singleStore.list[0]){
            list = [...singleStore.list].filter(item => (item.ismine === false));//去除自己的消息
            list.reverse();
        }
        console.log(list);
        let obj = {};
        return (
            <React.Fragment>
                <div>
                    {list[0] && list.map((item,index) => {
                        //console.log(item);
                        if(!obj[item.friend]){
                            //如果没有对话框就渲染，有了对话框就不渲染，输出最后一条消息
                            obj[item.friend] = true;
                            //console.log(obj);
                            return (
                                <div onClick = {() => {
                                    this.props.history.push({pathname: `/chat/single/${item.friend}`, state: {friend: item}})
                                }}>
                                    <div key={index} className='message'>
                                        <div className='iconHead'>
                                            <img />
                                        </div>
                                        <div className='content'>
                                            <span>{item.friend}</span>
                                            <p ref={p => this._msg = p}>{item.msg}</p>
                                        </div>
                                        <div className='remindNum'>
                                            <span>{list.length}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                )}
                </div>
            </React.Fragment>
        )
    }
} */



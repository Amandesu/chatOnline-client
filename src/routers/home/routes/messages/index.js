
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
                    ))}
                </div>
            </React.Fragment>
        )
    }
}


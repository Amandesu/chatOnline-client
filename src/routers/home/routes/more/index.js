
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import './index.less';


@inject("homeStore.moreStore")
@observer
export default class AddressList extends React.Component {
    render(){
        const store = this.props.moreStore;
        return (
            <React.Fragment>
                <div onClick = {() => {
                    store.setTitle("11")
                }}>
                    <div className="headerBlank"></div>
                    <div className='header'>我的IM</div>
                    <div className='topLabel'>发现</div>
                    <div className='topLabel'>分享与邀请</div>
                    <div className='topLabel'>关于</div>
                </div>

            </React.Fragment>
        )
    }
}


import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import  HeaderNav from 'ROOT/component/HeaderNav';
import Icon from "../../../../component/Icon";

@inject('friendStore.addFriendStore')
@observer
export default class AddFreind extends React.Component {
    render(){
        let store = this.props.addFriendStore;
        return (
            <React.Fragment>
                <HeaderNav
                    back={true}
                    title={"添加朋友"}
                    goBack={ () => this.props.history.goBack()}
                 />
                 <div className='search'>
                    <Icon size={16} color='#555' code='&#xe69f'></Icon>
                    <input type='text' placeholder='微信号/手机号' />
                </div>
            </React.Fragment>
        )
    }
}


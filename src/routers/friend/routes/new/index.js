
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import HeaderNav from "ROOT/component/HeaderNav";
import Icon from "../../../../component/Icon";
import './index.less';

@inject('friendStore.newFriendStore')
@observer
export default class newFreind extends React.Component {
    render(){
        let store = this.props.newFriendStore;
        console.log(this.props)
        return (
            <React.Fragment>
                <HeaderNav
                    back={true}
                    title={"新的朋友"}
                    goBack={ () => this.props.history.goBack()}
                 />
                <div className='search'>
                    <Icon size={16} color='#555' code='&#xe69f'></Icon>
                    <input type='text' placeholder='请输入账号' /> 
                </div>
                <div className='add'>
                    <Icon size={16} color='#3FDD86' code='&#xe929' style={{width: '35px'}}></Icon>
                    <span>添加手机联系人</span>
                    <Icon size={16} color='#111' code='&#xe914' style={{width: '35px'}}></Icon>
                </div>
                <div className='newFiendNav'>新的好友</div>
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
                                <span>接受</span>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}


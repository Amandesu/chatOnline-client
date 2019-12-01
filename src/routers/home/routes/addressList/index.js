
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import './index.less';


@inject("homeStore.addressListStore")
@observer
export default class AddressList extends React.Component {
    render(){
        const store = this.props.addressListStore;
        console.log(this.props)
        return (
            <React.Fragment>
                <div>
                    <div className="headerBlank"></div>
                    <div className='header'>我的IM</div>
                    <div className='topLabel'>新的朋友</div>
                    <div className='topLabel'>群聊</div>
                    <ul className='list'>
                        <li >
                            <div 
                                onClick={(e) => {
                                    e.target.parentNode.children[2].className === 'show' ? 
                                    e.target.parentNode.children[2].classList = 'noShow':
                                    e.target.parentNode.children[2].classList = 'show';
                                    }}
                                className='jiantou'></div>
                            <span>知名人物</span>
                            (index)
                            <ul className='noShow'>
                                <li>
                                    <div className='iconHead'>
                                        <img />
                                    </div>
                                    <div className='content'>
                                        <div>我的</div>
                                        <p>你好</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
            </React.Fragment>
        )
    }
}

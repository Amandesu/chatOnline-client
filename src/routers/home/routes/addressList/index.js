
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import Icon from "ROOT/component/Icon"

import "./index.less"

const prefix = "home-addresslist"

@inject("homeStore.addressListStore")
@observer
export default class AddressList extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let store = this.props.addressListStore;
        store.getFriendList().then(res => {

        })
    }
    // item容器
    createItem =(left, right, onPress = () => {}) => {
        return (
            <li onClick = {onPress}>
                <div className="left">
                    {left}
                    {/* <div>
                        <Icon color="#fff" code="&#xe747;" size={24}/>
                    </div> */}
                </div>
                <div className="right">
                    {right}
                </div>
            </li>
        )  
    }
    render(){
        const store = this.props.addressListStore;
        let friends = store.friendList;
        console.log(friends.map)
        return (
            <div className={prefix}>
                <div className="list-top">
                    {this.createItem(
                        <div style={{background:"orange"}}><Icon color="#fff" code="&#xe747;" size={24}/></div>,
                        "新的朋友",
                        () => this.props.history.push("/friend/new1")
                    )}
                    {this.createItem(
                        <div style={{background:"green"}}><Icon color="#fff" code="&#xe747;" size={24}/></div>,
                        "群聊"
                    )}
                </div>
                <div className="list-friends">
                    {friends.map((item,index) => this.createItem(
                        <div style={{background:"orange"}}><Icon color="#fff" code="&#xe747;" size={24}/></div>,
                        item.aliaName,
                        () => this.props.history.push(`/chat/single/${item.friend}`)
                    ))}
                </div>
            </div>
        )
    }
}

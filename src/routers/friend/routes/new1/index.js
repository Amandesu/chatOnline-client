
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import { HeaderNav, Icon } from "ROOT/component"
import fetchData from "ROOT/utils/fetchData"
import SearchFriend from "../../component/SearchFriend"

import "./index.less"
const prefix = "friend-new"

@inject('userStore.loginStore')
@inject('friendStore.newFriendStore')
@observer
export default class newFreind extends React.Component {
    state = {
        userList:[]
    }
    componentDidMount(){
        this.queryReqFris()   
    }
    queryReqFris = () => {
        const loginStore = this.props.loginStore
        fetchData({
            url:"/friend/queryReqFris",
            method:"GET",
            data:{
                username:loginStore.user.username
            }
        }).then(res => {
            this.setState({
                userList:res
            })
        })
    }
    addFriend = (item) => {
        fetchData({
            url:"/friend/addFriend",
            method:"POST",
            data:{
                friend:item.user
            }
        }).then(res => {
            alert("已成为朋友")
            this.queryReqFris()
        })
    }
    render(){
        let { newFriendStore, loginStore } = this.props;
        return (
            <div className={prefix}>
                <HeaderNav
                    back={true}
                    title={"新的朋友"}
                    goBack={ () => this.props.history.goBack()}
                 />
                 <SearchFriend
                    onPress = {() => this.props.history.push("/friend/search")}
                 />

                <div className="list">
                    {this.state.userList.map((item) => {
                        let isSend = loginStore.user.username == item.user // 是否是发送者
                        let aliaName = isSend ?  item.recAliaName: "申请好友";
                        let map = {
                            "0":"已拒绝",
                            "1":isSend ?"已发送":<span onClick={() => this.addFriend(item)} style={{color:"#1890ff"}}>同意</span>,
                            "2":"已同意",
                            "3":"已过期",
                        }
                        return (
                            <li>
                                <div className="left">
                                    <div style={{background:"orange"}}></div>
                                </div>
                                <div className="center">
                                    <div className="title">{aliaName}</div>
                                    <div className="text">{item.desc}</div>
                                </div>
                                <div className="right">
                                    {map[item.status]}
                                </div>
                            </li>
                        )
                    })}
                    
                    {/* <li>
                        <div className="left">
                            <div style={{background:"orange"}}></div>
                        </div>
                        <div className="center">
                             <div className="title">凌波</div>
                             <div className="text">真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是</div>
                        </div>
                        <div className="right">
                            已发送
                        </div>
                    </li> */}
                </div>

            </div>
        )
    }
}


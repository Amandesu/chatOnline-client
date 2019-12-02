
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import  { HeaderNav, Icon } from 'ROOT/component';
import  fetchData from 'ROOT/utils/fetchData';
import SearchFriend from "../../component/SearchFriend"

import "./index.less"
const prefix = "friend-search"

@inject('friendStore.searchFriendStore')
@observer
export default class newFreind extends React.Component {
    state = {
        username:"",
        searchValue:"",
        userList:[]
    }
    debounce  = (cb, delay) => {
        let timeout = null;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb.apply(this,args);  
            }, delay)
        }
    }

    updateSearchValue = this.debounce(() => {
        this.setState({
            searchValue:this.state.username
        })
    }, 500) 
    // 查询用户
    queryUsersLikeName = () => {
        fetchData({
            url:"/user/queryUsersLikeName",
            method:"GET",
            data:{
                key:this.state.username,
            }
        }).then(res => {
            this.setState({
                userList:res
            })
        })
    }
    // 好友申请
    reqFriend = (item) => {
        fetchData({
            url:"/friend/reqFriend",
            method:"POST",
            data:{
                username:item.username,
                aliaName:item.aliaName
            },
        }).then(res => {
            alert("申请成功")
        })
    }
    render(){
        let state = this.state;
        let store = this.props.searchFriendStore;

        console.log(state.userList)
        return (
            <div className={prefix}>
                <HeaderNav
                    back={true}
                    title={"新的朋友"}
                    goBack={ () => this.props.history.goBack()}
                 />
                <SearchFriend
                    value={state.username}
                    onChange = {username => this.setState({username}, this.updateSearchValue)}

                />
                { state.searchValue && 
                    <div className="search-select">
                        <div className="item" onClick={this.queryUsersLikeName}>
                            <div className="left">
                                <div>
                                    <Icon color="#fff" code="&#xe748;" size={24}/>
                                </div>
                                
                            </div>
                            <div className="right">
                                搜索:<span style={{color:"#00FF00"}}>{state.searchValue}</span>
                            </div>
                        </div>
                    
                    </div>
                }
                <div className="search-list">
                    {state.userList.map(user => {
                        return (
                            <div className="item">
                                <div className="left">
                                    <div>
                                        <Icon color="#fff" code="&#xe748;" size={24}/>
                                    </div>
                                    
                                </div>
                                <div className="center">
                                    {user.aliaName}
                                </div>

                                <div className="right" onClick={() => this.reqFriend(user)}>
                                    添加朋友
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}



import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import AddFriend from "./routes/add"
import NewFriend from "./routes/new"
import NewFriend1 from "./routes/new1"
import SearchFriend from "./routes/search";
import Group from "./routes/group";
import HeaderNav from "ROOT/component/HeaderNav";
import Icon from "../../component/Icon";

import "./index.less";
const prefix = "friend";

export default class Friend extends React.Component {
    render(){
        const { history } = this.props;
        return (
            <div className={prefix}>
                <HeaderNav back={true} goBack={() => {history.push('/home/addressList')}} title="通讯录"/>
                <div 
                    onClick={() => {history.push('/friend/search')}}
                className='search'>
                    <Icon size={16} color='#555' code='&#xe69f'></Icon>
                    <input type='text' placeholder='搜索' />
                </div>
                <NavEntry 
                    click={() => {history.push('/friend/new')}}
                    color='#3FDD86' code='&#xe747' title='新的朋友' />
                <NavEntry 
                    click={() => {history.push('/friend/new1')}}
                    color='#3FDD86' code='&#xe747' title='新的朋友1' />
                <NavEntry 
                    click={() => {history.push('/friend/add')}}
                    color='#3FDD86' code='&#xe747' title='添加朋友' />
                <NavEntry
                    click={() => {history.push('/friend/group')}}
                    color='#3FDD86' code='&#xe79c' title='群聊' />
                <Switch>
                    <Route
                        path={`/friend/add`}
                        component = {AddFriend}       
                    />
                    <Route
                        path="/friend/new"
                        component = {NewFriend}
                    />
                    <Route
                        path="/friend/new1"
                        component = {NewFriend1}
                    />
                    <Route
                        path="/friend/search"
                        component = {SearchFriend}
                    />
                    <Route
                        path="/friend/group"
                        component = {Group}
                    />
                </Switch>
            </div>
        )
    }
}
class NavEntry extends React.Component {WO RI NIDE PIYAN MENZI}               
    constructor(props) {
        super(props);
    }
    render() {
        const { color,code,title,click } = this.props;
        return (
            <div className='navEntry'
                onClick={click}
            >
                <Icon size='30px' color={color} code={code}></Icon>
                <span>{title}</span>
            </div>
        )
    } 
}


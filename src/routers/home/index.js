
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import AddressList from "./routes/addressList"
import Messages from "./routes/messages"
import More from "./routes/more"
import Icon from "ROOT/component/Icon"
import HeaderNav from "ROOT/component/HeaderNav"
import  { WithHOCLogin } from 'ROOT/utils/withEnvLogin';

import "./index.less"

const prefix = "home";

@WithHOCLogin
export default class Home extends React.Component {
    render(){
        return (
            <div className={prefix}>
                <HeaderNav />
                <div className="content">
                    <Switch>
                        <Route
                            path={`/home/addressList`}
                            component = {AddressList}       
                        />
                        <Route
                            path="/home/messages"
                            component = {Messages}
                        />
                        <Route
                            path="/home/more"
                            component = {More}
                        />
                    </Switch>
                </div>
                <Footer history={this.props.history}/>
            </div>
        )
    }
}

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.tabs = [{
            code:"&#xea98;", // 图标
            text:"消息",
            route:"messages"
        }, {
            code:"&#xe6cb;", // 图标
            text:"联系人",
            route:"addressList"
        }, {
            code:"&#xe81f", // 图标
            text:"更多",
            route:"more"
        }]
        let route = "messages";
        let tab = this.tabs.find(tab => props.history.location.pathname.indexOf(tab.route) > 0);
        tab && (route = tab.route)
        this.state = {
            route
        }
    }
    onItemClick = (route) => {
        this.setState({
            route
        })
        this.props.history.push(`/home/${route}`)
    }
    render(){
        //#3FDD86
        const route = this.state.route;
        return <div className="footer">
        {this.tabs.map(item => {
            let color = route == item.route ? "#3FDD86":"#000"
            return (
                <div onClick={() => this.onItemClick(item.route)} key={item.route}>
                    <Icon size={25} code={item.code} color={color} />
                    <div style={{height:22, lineHeight:"22px", fontSize: "12px", color}}>{item.text}</div>
            </div>
            )
        })}
    </div>
    }
}

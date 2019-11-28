
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import AddressList from "./routes/addressList"
import Messages from "./routes/messages"
import More from "./routes/more"

import "./index.less"

const prefix = "home";

export default class Home extends React.Component {
    render(){
        return (
            <div className={prefix}>
                <div style={{"flex":"1"}}>
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
                <div className="footer">
                    <div onClick={() => this.props.history.push("/home/messages")}>消息</div>
                    <div onClick={() => this.props.history.push("/home/addressList")}>联系人</div>
                    <div onClick={() => this.props.history.push("/home/more")}>更多</div>
                </div>  
            </div>
        )
    }
}



import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import { createHashHistory}  from "history"
import Home  from "./home";
import User from "./user";
import Friend from "./friend";
import Chat  from "./chat";

import socket from "ROOT/utils/socket";
import { observer } from "mobx-react";
import inject from "ROOT/utils/inject";
import sessionStore from "../utils/sessionStore";

export const rootStore = {
    homeStore : require("./home/store").default,
    friendStore : require("./friend/store").default,
    userStore : require("./user/store").default,
    chatStore : require("./chat/store").default,
}


@inject("chatStore.singleStore")
@observer
export default class  extends React.Component {
    constructor(props) {
        super(props);
        let store = this.props.singleStore;
        let user = sessionStore.get("user");
        if (user) {
            socket.imsocket();
            socket.receivePrivateMsg(res => {
                console.log(res)
                store.getMsgs({msg:res.content, ismine: false,friend: res.sendUser});
            }); 
        }
    }
    render() {
        return (
            <Router history={createHashHistory()}>
                <Switch>
                    <Route
                        path={`/home`}
                        render={(props) => {
                            return <Home {...props} />;
                        }}
                    />
                    <Route 
                        path="/friend"
                        render={(props) => {
                            return <Friend {...props}/>;
                        }}
                    />
                    <Route
                        path="/user"
                        render={(props) => {
                            return <User {...props}/>;
                        }}
                    />
                    <Route
                        path="/chat"
                        render={(props) => {
                            return <Chat {...props}/>;
                        }}
                    />
                </Switch>
            </Router>
        )
    }
}




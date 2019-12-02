
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import { createHashHistory}  from "history"
import Home  from "./home";
import User from "./user";
import Friend from "./friend";
import Chat  from "./chat";

export const rootStore = {
    homeStore : require("./home/store").default,
    friendStore : require("./friend/store").default,
    userStore : require("./user/store").default,
    chatStore : require("./chat/store").default,
}

export default (rootProps) => <Router history={createHashHistory()}>
    
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



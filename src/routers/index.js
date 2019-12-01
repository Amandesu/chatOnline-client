
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import { createHashHistory}  from "history"
import Home  from "./home";
import NewFriend  from "./newFriend";
import Login from "./login";

export const rootStore = {
    homeStore : require("./home/store").default,
    newFriendStore : require("./newFriend/store").default,
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
            path="/newFriend"
            render={(props) => {
                return <NewFriend {...props}/>;
            }}
        />
        <Route
            path="/login"
            render={(props) => {
                return <Login {...props}/>;
            }}
        />
    </Switch>
</Router>



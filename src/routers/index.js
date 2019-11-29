
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import { createHashHistory}  from "history"
import Home  from "./home";
import Friend  from "./friend";

export const rootStore = {
    homeStore : require("./home/store").default,
    friendStore : require("./friend/store").default,
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
    </Switch>
</Router>



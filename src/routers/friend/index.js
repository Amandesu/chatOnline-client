
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import AddFriend from "./routes/add"
import NewFriend from "./routes/new"
import NewFriend1 from "./routes/new1"
import SearchFriend from "./routes/search"

import "./index.less";
const prefix = "friend";

export default class Friend extends React.Component {
    render(){
        return (
            <div className={prefix}>
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
                        exact
                        path="/friend/new1"
                        component = {NewFriend1}
                    />
                    <Route
                        path="/friend/search"
                        component = {SearchFriend}
                    />
                </Switch>
            </div>
        )
    }
}


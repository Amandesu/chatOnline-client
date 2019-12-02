
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Login from "./routes/login"
import Register from "./routes/register"

import "./index.less";
const prefix = "user";

export default class Friend extends React.Component {
    render(){
        return (
            <div className={prefix}>
                <Switch>
                <Route
                        path={`/user`}
                        exact
                        component = {Login}       
                    />
                    <Route
                        path={`/user/login`}
                        component = {Login}       
                    />
                    <Route
                        path="/user/register"
                        component = {Register}
                    />
                </Switch>
            </div>
        )
    }
}


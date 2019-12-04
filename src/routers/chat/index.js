
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Single from "./routes/single"
import  { WithHOCLogin } from 'ROOT/utils/withEnvLogin';

import "./index.less";
const prefix = "chat";

@WithHOCLogin
export default class Chat extends React.Component {
    render(){
        return (
            <div className={prefix}>
                <Switch>
                    <Route
                        exact
                        path={`/chat/:username`}
                        component = {Single}       
                    /> 
                    <Route
                        exact
                        path={`/chat/single/:username`}
                        component = {Single}       
                    />
                </Switch>
            </div>
        )
    }
}


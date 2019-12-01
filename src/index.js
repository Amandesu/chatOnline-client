
import React from "react";
import ReactDOM from "react-dom";
import Routes, { rootStore } from "./routers"
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import Portal from 'ROOT/component/Portal'
import "./index.less"

// 不允许在动作之外进行状态修改(不能随便更新，这样会使得状态变得难以追踪)
configure({ enforceActions: 'always' })

class App extends React.Component {
    render(){
        return (
            <Portal.Manage>
                <Provider {...rootStore}>
                    <React.Fragment>
                        <Routes />
                    </React.Fragment>
                </Provider>
            </Portal.Manage>
            
        )
    }
}


ReactDOM.render(
    <App />
, document.getElementById("root"))  

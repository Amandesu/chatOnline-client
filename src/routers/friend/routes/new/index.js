
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import HeaderNav from "ROOT/component/HeaderNav"

@inject('friendStore.newFriendStore')
@observer
export default class newFreind extends React.Component {
    render(){
        let store = this.props.newFriendStore;
        console.log(this.props)
        return (
            <React.Fragment>
                <HeaderNav
                    back={true}
                    title={"新的朋友"}
                    goBack={ () => this.props.history.goBack()}
                 />
            </React.Fragment>
        )
    }
}


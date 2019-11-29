
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import  HeaderNav from 'ROOT/component/HeaderNav';

@inject('friendStore.addFriendStore')
@observer
export default class AddFreind extends React.Component {
    render(){
        let store = this.props.addFriendStore;
        return (
            <React.Fragment>
                <HeaderNav
                    back={true}
                    title={"添加朋友"}
                    goBack={ () => this.props.history.goBack()}
                 />
                <div>{store.title}</div>
            </React.Fragment>
        )
    }
}


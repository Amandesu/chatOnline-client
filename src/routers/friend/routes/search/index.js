
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';

@inject('friendStore.searchFriendStore')
@observer
export default class newFreind extends React.Component {
    render(){
        let store = this.props.searchFriendStore;
        return (
            <React.Fragment>
                <div>{store.title}</div>
            </React.Fragment>
        )
    }
}


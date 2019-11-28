
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';

@inject('homeStore.messagesStore')
@observer
export default class Messages extends React.Component {
    render(){
        let store = this.props.messagesStore;
        return (
            <React.Fragment>
                <div>{store.title}</div>
            </React.Fragment>
        )
    }
}


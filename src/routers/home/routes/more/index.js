
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';



@inject("homeStore.moreStore")
@observer
export default class AddressList extends React.Component {
    render(){
        const store = this.props.moreStore;
        return (
            <React.Fragment>
                <div onClick = {() => {
                    store.setTitle("11")
                }}>{store.title}</div>

            </React.Fragment>
        )
    }
}

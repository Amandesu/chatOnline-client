
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import  HeaderNav from 'ROOT/component/HeaderNav';

@inject('userStore.registerStore')
@observer
export default class AddFreind extends React.Component {
    render(){
        let store = this.props.registerStore;
        return (
            <React.Fragment>
                <HeaderNav
                    back={true}
                    title={"注册"}
                    goBack={ () => this.props.history.goBack()}
                 />
                <div>{store.title}</div>
            </React.Fragment>
        )
    }
}


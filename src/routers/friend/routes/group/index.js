import React from 'react';
import HeaderNav from "ROOT/component/HeaderNav";

const prefix = "friend-group";

export default class Group extends React.Component {
    render() {
        return (
            <React.Fragment className={prefix}> 
                <HeaderNav
                    back={true}
                    title={"群聊"}
                    goBack={ () => this.props.history.push('/friend')}
                 />
                 群聊
            </React.Fragment>
        )
    }
}
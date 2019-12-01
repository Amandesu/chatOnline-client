
import React from "react";
import { observer } from 'mobx-react';
import  inject from 'ROOT/utils/inject';
import { HeaderNav, Icon } from "ROOT/component"
import SearchFriend from "../../component/SearchFriend"

import "./index.less"
const prefix = "friend-new"

@inject('friendStore.newFriendStore')
@observer
export default class newFreind extends React.Component {
    render(){
        let store = this.props.newFriendStore;
        console.log(this.props)
        return (
            <div className={prefix}>
                <HeaderNav
                    back={true}
                    title={"新的朋友"}
                    goBack={ () => this.props.history.goBack()}
                 />
                 <SearchFriend

                 />

                <div className="list">
                    <li>
                        <div className="left">
                            <div style={{background:"orange"}}></div>
                        </div>
                        <div className="center">
                             <div className="title">凌波</div>
                             <div className="text">我是leifaveone</div>
                        </div>
                        <div className="right">
                            已过期
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <div style={{background:"orange"}}></div>
                        </div>
                        <div className="center">
                             <div className="title">凌波</div>
                             <div className="text">真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是真的是</div>
                        </div>
                        <div className="right">
                            已发送
                        </div>
                    </li>
                </div>

            </div>
        )
    }
}


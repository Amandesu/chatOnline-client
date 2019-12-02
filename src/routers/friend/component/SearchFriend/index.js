
import React from "react";
import Icon from "ROOT/component/Icon"
import "./index.less"
const prefix = "friend-component-searchfriend"

export default class AddFreind extends React.Component {
    static defaultProps = {
        onPress:() => {},
        onChange:() => {}
    }
    render(){
        const { state, props } = this;
        return (
            <div className={prefix} onClick={() => this.props.onPress()}>
                <li>
                    <div className="left">
                        <div>
                            <Icon color="#999" code="&#xe95c;" size={24}/>
                        </div> 
                    </div>
                    <input className="right" 
                        placeholder="微信号/手机号"
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                    />
                </li>
            </div>
        )
    }
}


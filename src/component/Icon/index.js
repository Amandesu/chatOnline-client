


import React from "react";

import "./index.less"

const prefix = "uicomponent-icon"




export default class Icon extends React.Component {
    static defaultProps = {
        size:12,
        color:"#000000",
        code:"&#xe906;",
        style:{},
    }
    render(){
        const { size, color, code , style} = this.props;
        return (
            <div className={prefix} style={{width:size, height:size, ...style}}>
                <i className="iconfont" style={{color, fontSize: size}} dangerouslySetInnerHTML={{__html:code}}></i>
            </div>
        )
    }
}

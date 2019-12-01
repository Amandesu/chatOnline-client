


import React from "react";
import Icon from "../Icon";

import "./index.less"

const prefix = "uicomponent-headernav"


export default ({back = false, goBack = () => {}, title="我的IM"}) => {
    return (
        <div className={prefix}>
            <div style={{paddingRight: 15}} onClick={goBack}>
                {back && <Icon size={25} color="#fff" code="&#xe95d;" /> }
            </div>
            <span>{title}</span>
        </div>
    )
}

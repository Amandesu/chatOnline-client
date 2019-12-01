


import React from "react";

export const MyContext = React.createContext(null);

const prefix = "uicomponent-portal"
export default class extends React.Component {

    render(){
        const { children } = this.props;
        return <React.Fragment>
           {/*  <span>portal</span> */}

            {children}
        </React.Fragment>
    }
}


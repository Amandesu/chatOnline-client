
import React from "react";
import { inject } from 'mobx-react';



export default (store) => {
    let storeArr = store.split(".");
    let injectFn = inject(storeArr[0]);

    if (storeArr.length == 1) {
        return (WrapComponent) => injectFn(WrapComponent)
    } else {
        return (WrapComponent) => {
            let storeKey = storeArr[0];
            return injectFn((props) =>{
                let newProps = {}
                let store = props[storeKey]
                Object.keys(props).map(key => key !=storeKey && (newProps[key] = props[key]))
                storeArr.forEach((key, index) => index >=1 && (store = store[key]));
                newProps[storeArr[storeArr.length-1]] = store;
                return <WrapComponent   {...newProps}/>
            })
        }
    } 
}

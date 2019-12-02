

import React from "react";
import "./index.less"

const prefix = "chat-component-bottombar"

export default class BottomBar extends React.Component {
    state = {
        input:""
    }
    componentDidMount(){
        
    }
    onSubmit =() => {
        this.setState({input:""})
        this.props.onSubmit(this.state.input)
    }
    render(){
        const { input } = this.state;
        return (
            <div className={`${prefix}`}>
                <div style={{width:20}}></div>
                <form
                    className="form"
                    onSubmit={e => {
                       this.onSubmit();
                        e.stopPropagation()
                        e.preventDefault()
                    }}
                >
                    <input
                        ref={input => (this.input = input)}
                        value={this.state.input}
                        placeholder="请输入您想说的话..."
                        onFocus={() => {
                            this.props.onFocus && this.props.onFocus()
                        }}
                        onBlur={() => {
                            this.props.onBlur && this.props.onBlur()
                        }}
                        onChange={e => {
                            this.setState({ input: e.target.value })
                        }}
                    />
                </form>
                <div className="submit-wrapper" onClick={this.onSubmit}>
                    <div className={`submit whole-radius`}>发送</div>
                </div>
            </div>
        )
    }
}
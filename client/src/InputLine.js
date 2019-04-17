import React, { Component } from 'react';
import "./bootstrap.min.css";

class InputLine extends Component {

    constructor(props) {
        super(props);
        this.state = {typedText : ""};
        this.handleTyping = this.handleTyping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTyping(event) {
        this.setState({typedText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const typedText = this.state.typedText;
        this.setState({typedText: ""});
        this.props.onSubmit(typedText);
    }

    render() {
        return (
            <div className="navbar-header">
                <input type="text" value={this.state.typedText} onChange={this.handleTyping}/>
                <button onClick={this.handleSubmit}>Add todo</button>
            </div>

        )
    }
}

export default InputLine;
import React, { Component } from 'react';
import "./bootstrap.min.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={completed: this.props.completed};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({completed: !this.state.completed});
    }

    render() {
        return (
            <li>
                <button onClick={this.props.xClick}>X</button>
                {!this.state.completed ? this.props.task : <strike>{this.props.task}</strike>}
                <button onClick={_ => this.toggle()}> Complete </button>
            </li>
        )
    }
}

export default Todo;
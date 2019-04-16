import React, { Component } from 'react';
import "./bootstrap.min.css";

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <button>X</button>
                {this.props.completed ? this.props.task : <strike>{this.props.task}</strike>}
            </li>
        )
    }
}

export default Todo;